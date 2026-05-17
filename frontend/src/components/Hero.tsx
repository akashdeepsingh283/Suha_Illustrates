import React from "react";
import { ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      style={{
        backgroundColor: "var(--vanilla)",
        paddingTop: "clamp(2rem, 5vw, 3rem)",
        paddingBottom: "clamp(2rem, 5vw, 3rem)",
      }}
      className="flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          right: "-12%",
          width: "clamp(200px, 45vw, 520px)",
          height: "clamp(200px, 45vw, 520px)",
          borderRadius: "50%",
          background: "var(--sand)",
          opacity: 0.35,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "3%",
          left: "-8%",
          width: "clamp(120px, 28vw, 320px)",
          height: "clamp(120px, 28vw, 320px)",
          borderRadius: "50%",
          background: "var(--tobacco)",
          opacity: 0.12,
          zIndex: 0,
        }}
      />

      <div className="max-w-5xl w-full px-5 sm:px-6 lg:px-12 relative z-10 py-12 sm:py-16">
        <div className="flex justify-center items-center text-center">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 max-w-5xl flex flex-col items-center">

            {/* Label */}
            <div className="flex items-center space-x-3">
              <div style={{ width: 28, height: 1, background: "var(--tobacco)", flexShrink: 0 }} />
              <span
                style={{
                  color: "var(--tobacco)",
                  fontSize: "clamp(0.65rem, 2.2vw, 0.95rem)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}
              >
                Designer & Illustrator · Gujarat, India
              </span>
              <div style={{ width: 28, height: 1, background: "var(--tobacco)", flexShrink: 0 }} />
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(3rem, 10vw, 7rem)",
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
                fontSize: "clamp(0.9rem, 3vw, 1.15rem)",
                lineHeight: 1.75,
                maxWidth: 680,
                textAlign: "center",
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 300,
                padding: "0 4px",
              }}
            >
              An online space dedicated to bold visual storytelling, minimalist
              design, and custom digital illustrations that give brands and
              projects a distinct, creative identity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
              <HashLink to="/#portfolio" className="w-full sm:w-auto">
                <button
                  style={{
                    backgroundColor: "var(--mahogany)",
                    color: "var(--vanilla)",
                    border: "none",
                    padding: "15px 32px",
                    borderRadius: 100,
                    fontSize: "clamp(0.78rem, 2.5vw, 0.95rem)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 400,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    width: "100%",
                  }}
                >
                  Explore my Work
                  <ArrowRight size={14} />
                </button>
              </HashLink>

              <HashLink to="/#contact" className="w-full sm:w-auto">
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--mahogany)",
                    border: "1px solid var(--tobacco)",
                    padding: "15px 32px",
                    borderRadius: 100,
                    fontSize: "clamp(0.78rem, 2.5vw, 0.95rem)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  Let's Collaborate
                </button>
              </HashLink>
            </div>

            {/* Stats */}
            <div
              style={{ borderTop: "1px solid var(--sand)", paddingTop: "1.5rem" }}
              className="grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-xs sm:max-w-md"
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
                      fontSize: "clamp(2rem, 6vw, 3rem)",
                      fontWeight: 600,
                      color: "var(--mahogany)",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(0.65rem, 2vw, 0.9rem)",
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