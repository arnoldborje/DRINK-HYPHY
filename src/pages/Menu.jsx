import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGlassMartiniAlt,
  FaBeer,
  FaFireAlt,
  FaPlusCircle,
  FaHamburger,
  FaCoffee,
  FaMugHot,
  FaLemon,
  FaWineBottle,
} from "react-icons/fa";

export default function Menu() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeCategory, setActiveCategory] = useState("alcohol");

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const formatItems = (items) => {
    return items
      .map((item) => {
        const match = item.match(/(.+?)\s*₱(\d+)/);
        if (!match) return null;
        return { name: match[1].trim(), price: Number(match[2]) };
      })
      .filter(Boolean)
      .sort((a, b) => b.price - a.price);
  };

  const sectionHeaderStyle = {
    background: "linear-gradient(90deg, #ff6f61, #f7d794)",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "15px",
    marginBottom: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    userSelect: "none",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    alignItems: "center",
  };

  const alcoholMenu = [
    {
      title: "HYPHY CUP",
      icon: <FaWineBottle />,
      items: formatItems([
        "Blue Lemonade ₱549",
        "Strawberry ₱549",
        "Grapes ₱549",
        "Lychee ₱549",
        "Green Apple ₱549",
        "Spike Tea ₱199",
      ]),
      note: "12oz ₱199 | 1L ₱549",
    },
    {
      title: "Cocktails",
      icon: <FaGlassMartiniAlt />,
      items: formatItems([
        "Old Fashioned ₱299",
        "Amaretto Sour ₱299",
        "Mango Chili Margarita ₱299",
        "Jack Coke Float ₱299",
        "Jager Bomb ₱279",
        "Jack Coke ₱279",
        "Jager Tonic ₱249",
        "Vodka Bomb ₱249",
        "Cranberry Vodka ₱249",
        "Gin & Tonic ₱249",
      ]),
    },
    {
      title: "Beers",
      icon: <FaBeer />,
      items: formatItems([
        "Stallion ₱199",
        "Pale Pilsen ₱199",
        "Smirnoff ₱199",
      ]),
    },
    {
      title: "No Hard Feelings",
      icon: <FaFireAlt />,
      items: formatItems([
        "JW Black Label 700ml ₱2999",
        "Jack Daniels Old No.7 700ml ₱2799",
        "Tanqueray Gin 750ml ₱2899",
        "Jagermeister 700ml ₱2699",
        "Jose Cuervo Gold 700ml ₱2499",
        "Absolut Blue Vodka 700ml ₱2199",
        "Black Label Shot ₱299",
        "Jack Coke Float ₱299",
        "Jack Daniels Shot ₱269",
        "Cuervo Shot ₱249",
      ]),
    },
    {
      title: "Add-ons",
      icon: <FaPlusCircle />,
      items: formatItems([
        "Redbull ₱179",
        "Extra Bodega Shot ₱149",
        "Coke ₱99",
        "Sprite ₱99",
        "Salt & Lemon ₱79",
        "H₂O ₱59",
      ]),
    },
  ];

  const foodMenu = [
    {
      title: "Munchies",
      icon: <FaHamburger />,
      items: formatItems([
        "Double Trouble ₱309",
        "Bodega Banger – Good ol' cheeseburger w/ fries ₱299",
        "Nacho Bidness ₱279",
        "Hella Loaded ₱279",
        "Hot Chicken Killa Sammich ₱279",
        "OG Chicken Sammich ₱279",
        "Chick' N Waffles ₱249",
        "Bodega Crunchwrap ₱219",
        "Stacked Up ₱199",
        "Esquitos ₱189",
      ]),
    },
    {
      title: "Nitro Brews",
      icon: <FaCoffee />,
      items: formatItems([
        "BODE-CCINO ₱179",
        "DIRTY FROOT LOOPS CEREAL MILK ₱179",
        "DIRTY FROSTED FLAKES CEREAL MILK ₱179",
        "DIRTY MATCHA ₱179",
        "SEASALT LATTE ₱169",
        "SPANISH TING ₱169",
        "NITRO COLD BREW ₱159",
      ]),
    },
    {
      title: "Non-Coffee",
      icon: <FaMugHot />,
      items: formatItems([
        "Matcha Latte ₱179",
        "Ube Matcha ₱179",
        "Strawberry Matcha ₱179",
        "Chocolate Matcha ₱179",
        "Frosted Flakes Cereal Milk ₱169",
        "Froot Loops Cereal Milk ₱169",
        "Chocolate Drink w/ Seasalt Foam ₱169",
        "Mango Oat Milk ₱169",
        "Strawberry Oat Milk ₱169",
        "Oat Milk ₱49",
      ]),
    },
    {
      title: "Refreshers",
      icon: <FaLemon />,
      items: formatItems([
        "White Lady 1L ₱199",
        "Mangonada Fizz ₱179",
        "Strawberry Lemon Fizz ₱169",
      ]),
    },
  ];

  const menuData = activeCategory === "alcohol" ? alcoholMenu : foodMenu;

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
          maxWidth: "900px",
          width: "100%",
          padding: "30px",
          backgroundColor: "rgba(0,0,0,0.5)",
          border: "3px solid #ff6f61",
          borderRadius: "15px",
          boxShadow: "0 0 20px #ff6f61, 0 0 30px rgba(255,111,97,0.5)",
          textAlign: "center",
          color: "white",
        }}
      >
        <Link to="/">
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
        </Link>

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

        {/* CATEGORY BUTTONS */}
<div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px 0" }}>
  {[
    { label: "Alcohol Menu", category: "alcohol" },
    { label: "Food & Beverages", category: "food" },
  ].map((btn) => (
    <button
      key={btn.category}
      onClick={() => {
        setActiveCategory(btn.category);
        setActiveSection(null);
      }}
      style={{
        padding: "10px 20px",
        borderRadius: "10px",
        border: "3px solid rgba(255,111,97,0.6)", // semi-transparent border
        backgroundColor: activeCategory === btn.category ? "#ff6f61" : "rgba(0,0,0,0.2)",
        color: activeCategory === btn.category ? "black" : "#ff6f61",
        fontWeight: "bold",
        cursor: "pointer",
        textShadow: activeCategory === btn.category ? "0 0 10px #ff6f61" : "none",
        boxShadow: activeCategory === btn.category
          ? "0 0 20px #ff6f61, 0 0 25px rgba(255,111,97,0.7)"
          : "0 0 10px rgba(255,111,97,0.5)",
        transition: "0.3s",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#ff6f61";
        e.target.style.color = "black";
        e.target.style.boxShadow = "0 0 20px #ff6f61, 0 0 25px rgba(255,111,97,0.7)";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor =
          activeCategory === btn.category ? "#ff6f61" : "rgba(0,0,0,0.2)";
        e.target.style.color = activeCategory === btn.category ? "black" : "#ff6f61";
        e.target.style.boxShadow =
          activeCategory === btn.category
            ? "0 0 20px #ff6f61, 0 0 25px rgba(255,111,97,0.7)"
            : "0 0 10px rgba(255,111,97,0.5)";
      }}
    >
      {btn.label}
    </button>
  ))}
</div>


        {/* MENU SECTIONS */}
        <div className="menu-sections text-start">
          {menuData.map((section) => (
            <div key={section.title}>
              <div style={sectionHeaderStyle} onClick={() => toggleSection(section.title)}>
                {section.icon} {section.title}
              </div>

              {activeSection === section.title && (
                <div className="fade-in" style={{ padding: "10px 15px" }}>
                  {section.note && (
  <p
    style={{
      textAlign: "center",
      fontWeight: "bold",
      color: "#ff6f61",
      marginBottom: "10px",
      textShadow: "0 0 8px rgba(255,111,97,0.7)",
      letterSpacing: "1px",
    }}
  >
    {section.note}
  </p>
)}

                  
                  <ul style={{ listStyle: "none", padding: 0 }}>
  {section.items.map((item, idx) => (
    <li
      key={idx}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        borderBottom: "1px dotted #ff6f61",
        color: "#fff",
        fontWeight: "600",
        textShadow: "0 0 5px rgba(0,0,0,0.7)",
        fontSize: "1rem",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.target.style.color = "#ff6f61"; // glow color
        e.target.style.textShadow = "0 0 10px #ff6f61, 0 0 5px rgba(0,0,0,0.7)";
        e.target.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.target.style.color = "#fff";
        e.target.style.textShadow = "0 0 5px rgba(0,0,0,0.7)";
        e.target.style.transform = "scale(1)";
      }}
    >
      <span>{item.name}</span>
      <span>₱{item.price}</span>
    </li>
  ))}
</ul>



                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
