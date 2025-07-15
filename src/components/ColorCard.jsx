import React, { useEffect, useState } from "react";
import "../styles/ThemeCreator.css";

const ColorCard = ({ hex }) => {
  const [colorName, setColorName] = useState("Loading...");

  useEffect(() => {
    const fetchColorName = async () => {
      const hexValue = typeof hex === "string" ? hex.replace("#", "") : "";
      if (!hexValue) {
        setColorName("Invalid color");
        return;
      }

      try {
        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${hexValue}`
        );
        const data = await response.json();
        setColorName(data.name.value);
      } catch (err) {
        console.error("Failed to fetch color name", err);
        setColorName("Unknown");
      }
    };
    fetchColorName();
  }, [hex]);

  return (
    <div className="color-card">
      <div 
        // className="color-block" 
        style={{ backgroundColor: hex }}
        title={`${hex} - ${colorName}`}
      ></div>
      {/* <div className="color-name">{colorName}</div> */}
    </div>
  );
};

export default ColorCard;
