import React from "react";
import { Link } from "react-router-dom";

export default function Location() {
  const infoBoxStyle = {
    maxWidth: "700px",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.7)", // slightly darker for better text visibility
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid #ff6f61",
    color: "white",
    textAlign: "center",
    margin: "20px auto",
    boxSizing: "border-box",
    boxShadow: "0 0 15px rgba(255,111,97,0.5)", // subtle glow
  };

  const sectionHeaderStyle = {
    background: "linear-gradient(90deg, #ff6f61, #f7d794)",
    padding: "8px 12px",
    borderRadius: "5px",
    marginTop: "10px",
    marginBottom: "10px",
    fontWeight: "bold",
    display: "inline-block",
    cursor: "default",
    textShadow: "0 0 6px #ff6f61", // subtle glow
  };

  const paragraphStyle = {
    textShadow: "0 0 6px black",
    fontSize: "16px",
    lineHeight: "1.6",
    color: "white",
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
        textAlign: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", maxWidth: "900px", padding: "0 10px", boxSizing: "border-box" }}>
        <Link to="/">
          <img
            src="/logo.png"
            alt="Hyphy Logo"
            style={{
              width: "150px",
              cursor: "pointer",
              borderRadius: "50%",
              border: "4px solid #ff6f61",
              padding: "8px",
              backgroundColor: "rgba(0,0,0,0.6)",
              boxShadow: "0 0 15px #ff6f61",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Link>

        <h1
          style={{
            color: "#ff6f61",
            fontWeight: "900",
            marginTop: "15px",
            textShadow: "0 0 10px #ff6f61, 0 0 20px #ff6f61",
            letterSpacing: "2px",
            fontFamily: "'Oswald', sans-serif",
          }}
        >
          DRINK HYPHY
        </h1>

        <h4
          style={{
            color: "#ff6f61",
            textShadow: "0 0 6px #ff6f61",
            marginTop: "10px",
            marginBottom: "15px",
          }}
        >
          Our Location
        </h4>

        <div style={infoBoxStyle}>
          <div style={sectionHeaderStyle}>HYPHY BODEGA</div>

          <p style={paragraphStyle}>
            Blk. 7 Lot 4, Stall 2, Fil-Am Friendship Highway,<br />
            Brgy. Cutcut, Angeles City, Pampanga
          </p>

          <iframe
            title="Hyphy Bodega Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.271780351474!2d120.57098631524295!3d15.13078928856661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f30006716663%3A0x7b0a0fe34f5b7cd3!2sHyphy%20Bodega!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "10px", boxShadow: "0 0 10px #ff6f61" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
