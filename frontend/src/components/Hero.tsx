import React from "react";
import { ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      style={{
        backgroundColor: "var(--vanilla)",
        minHeight: "100vh",
        paddingTop: "40px",
      }}
      className="flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decorative circle */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-8%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "var(--sand)",
          opacity: 0.35,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-5%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "var(--tobacco)",
          opacity: 0.12,
          zIndex: 0,
        }}
      />

      <div className="max-w-5xl w-full px-6 lg:px-12 relative z-10">
        <div className="flex justify-center items-center text-center">
          {/* Center Content */}
          <div className="space-y-12 max-w-5xl flex flex-col items-center">
            {/* Label */}
            <div className="flex items-center space-x-3">
              {/* Left line */}
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "var(--tobacco)",
                }}
              />

              {/* Text */}
              <span
                style={{
                  color: "var(--tobacco)",
                  fontSize: "0.95rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}
              >
                Designer & Illustrator · Gujarat, India
              </span>

              {/* Right line */}
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "var(--tobacco)",
                }}
              />
            </div>
            {/* Heading */}
            <h1
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(4.5rem, 9vw, 7rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--mahogany)",
                letterSpacing: "-0.01em",
              }}
            >
              <em style={{ fontWeight: 600, fontStyle: "italic" }}>
                Scribbling Stories
              </em>
              <br />
              One Pixel at a Time.
            </h1>

            {/* Description */}
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "1.25rem",
                lineHeight: 1.75,
                maxWidth: 850,
                textAlign: "center",
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 300,
              }}
            >
              An online space dedicated to bold visual storytelling, minimalist
              design, and custom digital illustrations that give brands and
              projects a distinct, creative identity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HashLink to="/#portfolio">
                <button
                  style={{
                    backgroundColor: "var(--mahogany)",
                    color: "var(--vanilla)",
                    border: "none",
                    padding: "18px 42px",
                    borderRadius: 100,
                    fontSize: "0.95rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 400,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  Explore my Work
                  <ArrowRight size={14} />
                </button>
              </HashLink>

              <HashLink to="/#contact">
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--mahogany)",
                    border: "1px solid var(--tobacco)",
                    padding: "18px 42px",
                    borderRadius: 100,
                    fontSize: "0.95rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 400,
                    cursor: "pointer",
                  }}
                >
                  Let's Collaborate
                </button>
              </HashLink>
            </div>

            {/* Stats */}
            <div
              style={{
                borderTop: "1px solid var(--sand)",
                paddingTop: "2rem",
              }}
              className="grid grid-cols-3 gap-10 w-full max-w-md"
            >
              {[
                { num: "150+", label: "Projects" },
                { num: "20+", label: "Clients" },
                { num: "2+", label: "Year" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "3rem",
                      fontWeight: 600,
                      color: "var(--mahogany)",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>

                  <div
                    style={{
                      fontSize: "0.9rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginTop: 4,
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
