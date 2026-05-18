require("dotenv").config();
const { Resend } = require("resend");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");
const Contact = require("./models/contact");
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(cors());
app.use(express.json());
const bcrypt = require("bcrypt");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

app.get("/", (req, res) => {
  res.send("Hello from Express + MongoDB Atlas!");
});

const jwt = require("jsonwebtoken");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(404).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    const userWithoutPassword = { ...user._doc };
    delete userWithoutPassword.password;
    res.status(200).json({ message: "Login successful", user: userWithoutPassword, token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "Email already in use" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "User creation failed" });
  }
});

app.post("/contact", async (req, res) => {
  const { name, email, project, budget, message } = req.body;
  try {
    const contact = await Contact.create({
      name, email, projecttype: project, Budgetrange: budget, projectdetails: message,
    });
    res.status(201).json({ message: "Contact created successfully", contact });
  } catch (err) {
    console.error("Error creating contact:", err);
    res.status(500).json({ error: "Contact creation failed" });
  }
});

app.post("/order", async (req, res) => {
  const { name, email, project, budget, message } = req.body;
  if (!name || !email || !project || !budget || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #d97706;">🎨 New Project Inquiry</h2>
        <p>You have received a new message from your portfolio website:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 8px; font-weight: bold;">Full Name:</td><td style="padding: 8px;">${name}</td></tr>
          <tr style="background-color: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}" style="color: #1d4ed8;">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Project Type:</td><td style="padding: 8px;">${project}</td></tr>
          <tr style="background-color: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Budget Range:</td><td style="padding: 8px;">${budget}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Project Details:</td><td style="padding: 8px; white-space: pre-wrap;">${message}</td></tr>
        </table>
        <p style="margin-top: 30px;">📅 <strong>Submitted on:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        <hr style="margin-top: 40px;" />
        <p style="font-size: 0.9em; color: #888;">This message was sent from the contact form on your portfolio website.</p>
      </div>
    `;
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.EMAIL_USER,
      subject: `📩 New Inquiry from ${name}`,
      html: emailHtml,
    });
    console.log("RESEND RESPONSE:", data);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("❌ Email error:", err);
    res.status(500).json({ message: "Failed to send email." });
  }
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ─────────────────────────────────────────────────────────────
// Category → Cloudinary folder mapping
// Your Cloudinary folder structure should be:
//   portfolio/digital
//   portfolio/portraits
//   portfolio/illustrations
//   portfolio/commissions
// Any image not in a subfolder falls back to the root folder
// and gets treated as "digital".
// ─────────────────────────────────────────────────────────────
const CATEGORY_FOLDERS = {
  digital: "portfolio/digital",
  portraits: "portfolio/portraits",
  illustrations: "portfolio/pet illustrations",
  commissions: "portfolio/custom prints",
};

// Helper: derive category from Cloudinary public_id path
function categoryFromPublicId(publicId) {
  for (const [cat, folder] of Object.entries(CATEGORY_FOLDERS)) {
    if (publicId.startsWith(folder + "/") || publicId.startsWith(folder.replace("portfolio/", "") + "/")) {
      return cat;
    }
  }
  // Also handle images directly under portfolio/ with no subfolder
  return "digital";
}

// Helper: map raw Cloudinary resource to our image object
function mapImage(img) {
  const category = categoryFromPublicId(img.public_id);
  const pathParts = img.public_id.split("/");

  return {
    id: img.asset_id,
    title: pathParts[pathParts.length - 1].replace(/[-_]/g, " "),
    category,
    image: img.secure_url,
    likes: Math.floor(Math.random() * 200) + 100,
    views: Math.floor(Math.random() * 2000) + 500,
  };
}

// GET /cloudinary-images — returns ALL images across all category subfolders
// Each image has a `category` field derived from its subfolder
app.get("/cloudinary-images", async (req, res) => {
  try {
    const { resources } = await cloudinary.search
      .expression('folder:"portfolio/*"') // matches all subfolders
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    const images = resources.map(mapImage);
    res.json(images);
  } catch (error) {
    console.error("Cloudinary fetch error:", error);
    res.status(500).json({ error: "Failed to fetch images from Cloudinary" });
  }
});

// GET /cloudinary-images/:category — returns images for a specific category
// :category must be one of: digital, portraits, illustrations, commissions
app.get("/cloudinary-images/:category", async (req, res) => {
  const { category } = req.params;

  const folder = CATEGORY_FOLDERS[category];
  if (!folder) {
    return res.status(400).json({ error: `Unknown category '${category}'. Valid: ${Object.keys(CATEGORY_FOLDERS).join(", ")}` });
  }

  try {
    const { resources } = await cloudinary.search
      .expression(`folder:"${folder}"`)
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    const images = resources.map((img) => ({
      id: img.asset_id,
      title: img.public_id.split("/").pop().replace(/[-_]/g, " "),
      category,
      image: img.secure_url,
      likes: Math.floor(Math.random() * 200) + 100,
      views: Math.floor(Math.random() * 2000) + 500,
    }));

    res.json(images);
  } catch (error) {
    console.error(`Cloudinary fetch error for category '${category}':`, error);
    res.status(500).json({ error: "Failed to fetch images from Cloudinary" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});