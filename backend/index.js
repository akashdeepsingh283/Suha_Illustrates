require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user'); // Import the User model
const Contact = require('./models/contact'); // Import the Contact model
const cloudinary = require('cloudinary').v2;

const app = express();
app.use(cors());
app.use(express.json());
const bcrypt = require('bcrypt');
// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch(err => console.error("❌ MongoDB connection failed:", err));

// Example route
app.get('/', (req, res) => {
    res.send("Hello from Express + MongoDB Atlas!");
});

const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    // 🔐 Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' } // or shorter/longer as needed
    );

    // Exclude password before sending
    const userWithoutPassword = { ...user._doc };
    delete userWithoutPassword.password;

    res.status(200).json({
      message: "Login successful",
      user: userWithoutPassword,
      token, // send token to frontend
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: "User created successfully", user });
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ error: "User creation failed" });
    }
});

app.post('/contact', async (req, res) => {
  const { name, email, project, budget, message } = req.body;

  try {
    const contact = await Contact.create({
      name,
      email,
      projecttype: project,
      Budgetrange: budget,
      projectdetails: message,
    });
    res.status(201).json({ message: "Contact created successfully", contact });
  } catch (err) {
    console.error("Error creating contact:", err);
    res.status(500).json({ error: "Contact creation failed" });
  }
});

app.post('/order', async (req, res) => {
  const { name, email, project, budget, message } = req.body;

  if (!name || !email || !project || !budget || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #d97706;">🎨 New Project Inquiry</h2>
          <p>You have received a new message from your portfolio website:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">Full Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}" style="color: #1d4ed8;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Project Type:</td>
              <td style="padding: 8px;">${project}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold;">Budget Range:</td>
              <td style="padding: 8px;">${budget}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Project Details:</td>
              <td style="padding: 8px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>

          <p style="margin-top: 30px;">📅 <strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>

          <hr style="margin-top: 40px;" />
          <p style="font-size: 0.9em; color: #888;">This message was sent from the contact form on your portfolio website.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('❌ Email error:', err);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get('/cloudinary-images', async (req, res) => {
  try {
    const { resources } = await cloudinary.search
      .expression('folder:portfolio') // only images in 'portfolio' folder
      .sort_by('created_at', 'desc')
      .max_results(50)
      .execute();

    const images = resources.map(img => ({
      id: img.asset_id,
      title: img.public_id.split('/').pop().replace(/[-_]/g, ' '),
      category: 'digital', // Or derive from metadata/tags
      image: img.secure_url,
      likes: Math.floor(Math.random() * 200) + 100,
      views: Math.floor(Math.random() * 2000) + 500,
    }));

    res.json(images);
  } catch (error) {
    console.error("Cloudinary fetch error:", error);
    res.status(500).json({ error: "Failed to fetch images from Cloudinary" });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
