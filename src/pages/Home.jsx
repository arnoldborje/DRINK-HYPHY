import React from "react";
import { Link } from "react-router-dom";
import { FaListUl, FaMapMarkerAlt, FaInfoCircle, FaEllipsisH } from "react-icons/fa";

export default function Home() {
  const handleShare = (path) => {
    const url = `${window.location.origin}${path}`;
    if (navigator.share) {
      navigator
        .share({ title: "Drink Hyphy", url })
        .catch((err) => console.log("Share canceled", err));
    } else {
      navigator.clipboard.writeText(url);
      alert(`Link copied: ${url}`);
    }
  };

  const buttons = [
    { label: "Menu", path: "/menu", icon: <FaListUl /> },
    { label: "Location", path: "/location", icon: <FaMapMarkerAlt /> },
    { label: "About Us", path: "/about", icon: <FaInfoCircle /> },
  ];

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
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "30px",
          backgroundColor: "rgba(0,0,0,0.5)",
          border: "3px solid #ff6f61",
          borderRadius: "15px",
          boxShadow: "0 0 20px #ff6f61, 0 0 30px rgba(255,111,97,0.5)",
          textAlign: "center",
        }}
      >
        <img
          src="/logo.png"
          alt="Hyphy Logo"
          style={{
            width: "150px",
            borderRadius: "50%",
            border: "3px solid #ff6f61",
            padding: "8px",
            backgroundColor: "rgba(0,0,0,0.6)",
            boxShadow: "0 0 15px #ff6f61",
            marginBottom: "15px",
          }}
        />

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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30px",
            gap: "15px",
          }}
        >
          {buttons.map((btn) => (
            <Link
  key={btn.label}
  to={btn.path === "/about" ? "/about" : btn.path}
  style={{
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 15px",
    border: "3px solid rgba(255,111,97,0.6)", // semi-transparent border
    borderRadius: "10px",
    color: "#ff6f61",
    textDecoration: "none",
    fontWeight: "700",
    letterSpacing: "1px",
    textShadow: "0 0 8px #ff6f61",
    backgroundColor: "rgba(0,0,0,0.2)", // semi-transparent fill
    textAlign: "center",
    transition: "0.2s",
    backdropFilter: "blur(5px)", // subtle glass effect
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#ff6f61";
    e.target.style.color = "black";
    e.target.style.boxShadow = "0 0 20px #ff6f61, 0 0 25px rgba(255,111,97,0.7)";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "rgba(0,0,0,0.2)";
    e.target.style.color = "#ff6f61";
    e.target.style.boxShadow = "0 0 10px rgba(255,111,97,0.5)";
  }}
>
  {/* Left icon */}
  <div style={{ marginLeft: "10px" }}>{btn.icon}</div>

  {/* Center text */}
  <div style={{ flex: 1, textAlign: "center" }}>{btn.label}</div>

  {/* Right 3-dot share */}
  <FaEllipsisH
    onClick={(e) => {
      e.preventDefault();
      handleShare(btn.path);
    }}
    style={{
      marginRight: "10px",
      cursor: "pointer",
      transition: "0.2s",
      color: "#ff6f61",
    }}
    onMouseEnter={(e) => {
      e.target.style.color = "black";
      e.target.style.transform = "scale(1.2)";
    }}
    onMouseLeave={(e) => {
      e.target.style.color = "#ff6f61";
      e.target.style.transform = "scale(1)";
    }}
  />
</Link>

          ))}
        </div>
      </div>
    </div>
  );
}
