import React from "react";
import { Link } from "react-router-dom";
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

export default function About() {
  const containerStyle = {
    maxWidth: "900px",
    width: "100%",
    padding: "30px",
    backgroundColor: "rgba(0,0,0,0.5)",
    border: "3px solid #ff6f61",
    borderRadius: "15px",
    boxShadow: "0 0 20px #ff6f61, 0 0 30px rgba(255,111,97,0.5)",
    color: "white",
    textAlign: "center",
    boxSizing: "border-box",
    fontFamily: "'Oswald', sans-serif",
  };

  const sectionHeaderStyle = {
    background: "linear-gradient(90deg, #ff6f61, #f7d794)",
    padding: "12px 20px",
    borderRadius: "8px",
    marginTop: "15px",
    marginBottom: "15px",
    fontWeight: "bold",
    display: "inline-block",
    boxShadow: "0 0 10px #ff6f61, 0 0 15px rgba(255,111,97,0.5)",
  };

  return (
    <div
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div style={containerStyle}>
        {/* Clickable Logo */}
        <Link to="/">
          <img
            src="/logo.png"
            alt="Hyphy Logo"
            style={{
              width: "150px",
              cursor: "pointer",
              borderRadius: "50%",
              border: "3px solid #ff6f61",
              padding: "8px",
              backgroundColor: "rgba(0,0,0,0.6)",
              boxShadow: "0 0 15px #ff6f61",
              marginBottom: "15px",
            }}
          />
        </Link>

        {/* Drink Hyphy */}
        <h1
          style={{
            color: "#ff6f61",
            fontWeight: "900",
            marginTop: "10px",
            textShadow: "0 0 10px #ff6f61, 0 0 20px #ff6f61",
            letterSpacing: "2px",
            fontFamily: "'Oswald', sans-serif",
          }}
        >
          DRINK HYPHY
        </h1>

        {/* About Us Header */}
        <div style={sectionHeaderStyle}>About Us</div>

        {/* Info Box */}
        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
            backgroundColor: "rgba(0,0,0,0.4)",
            borderRadius: "10px",
            padding: "15px",
            border: "2px solid #ff6f61",
            boxShadow: "0 0 15px #ff6f61, 0 0 25px rgba(255,111,97,0.3)",
            color: "white",
            lineHeight: "1.6",
          }}
        >
          <p>
            Hyphy Bodega is your ultimate bar for unforgettable nights with friends!
            We serve a wide variety of drinks, cocktails, and curated mixes
            for every mood and occasion.
          </p>
          <p>
            Our mission is to deliver fun, energy, and good vibes.
            Perfect for chill nights, celebrations, or spontaneous hangouts.
          </p>

          {/* Social Media Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginTop: "15px",
              flexWrap: "wrap",
            }}
          >
            {[
              { href: "https://www.tiktok.com/@hyphybodega", icon: <FaTiktok size={20} />, label: "TikTok", bg: "#000" },
              { href: "https://www.instagram.com/drinkhyphy/", icon: <FaInstagram size={20} />, label: "Instagram Bar", bg: "#E1306C" },
              { href: "https://www.instagram.com/hyphybodega/", icon: <FaInstagram size={20} />, label: "Instagram Cafe", bg: "#E1306C" },
              { href: "https://www.facebook.com/drinkhyphy", icon: <FaFacebook size={20} />, label: "Facebook", bg: "#1877F2" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  fontWeight: "700",
                  textDecoration: "none",
                  color: "#ff6f61",
                  border: "2px solid #ff6f61",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  textShadow: "0 0 5px rgba(0,0,0,0.5)",
                  transition: "0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = social.bg;
                  e.target.style.color = "black";
                  e.target.style.boxShadow = `0 0 15px ${social.bg}, 0 0 25px rgba(255,111,97,0.5)`;
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(0,0,0,0.3)";
                  e.target.style.color = "#ff6f61";
                  e.target.style.boxShadow = "0 0 15px #ff6f61, 0 0 25px rgba(255,111,97,0.3)";
                  e.target.style.transform = "scale(1)";
                }}
              >
                {social.icon} {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
