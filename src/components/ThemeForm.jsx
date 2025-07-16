import React, { useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";
import "../styles/ThemeForm.css";
import themesDB from "../data/db";

const ThemeForm = ({ onAddTheme, onSubmit, initialData }) => {
  const nameInput = useRef();
  const colorInput =useRef([useRef(), useRef(), useRef(), useRef()]);

  const fetchColorName = async (hex) => {
    const hexValue = hex.replace("#", "");
    try {
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${hexValue}`
      );
      const data = await response.json();
      return data.name.value || "Unknown";
    } catch (err) {
      console.error("Failed to fetch color name", err);
      return "Unknown";
    }
  };

  // Um Werte zu setzen
  useEffect(() => {
    if (initialData) {
      nameInput.current.value = initialData.name;
      initialData.colors.forEach((color, i) => {
        if (colorInput.current[i].current) {
          colorInput.current[i].current.value = color.value;
        }
      });
    }
  }, [initialData]);

  // Role aus themesDB holen primary ... und an role abgeben unten im return
  const selectedTheme = themesDB.find((t) => t.name === "Vivid Meadow"); 
  const roleList = selectedTheme ? selectedTheme.colors.map((c) => c.role) : [];

  const handleSubmit = async (e) => {
    e.preventDefault(); // Verhindert Seitenreload

    const name = nameInput.current.value.trim();
    if (!name) return; // Name is required

    // Fetch color names for all colors
    const colors = await Promise.all(
      colorInput.current.map(async (ref, i) => {
        const hex = ref.current.value;
        const colorName = await fetchColorName(hex);
        return {
          role: roleList[i],
          value: hex,
          name: colorName,
        };
      })
    );

    //New Theme object
    const newTheme = {
      id: initialData?.id || uuid(),
      name,
      colors,
    };
    if (onSubmit) {
      onSubmit(newTheme);
    } else {
      onAddTheme(newTheme); //Add new Theme to the App
      e.target.reset(); //Delete
    }
  };
  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <h2 className="theme-form__title">Theme Creator</h2>
      {/* Input name */}
      <input
        type="text"
        ref={nameInput}
        placeholder="Theme name"
        required
        className="theme-form__input"
      />

      {/* color picker */}
      <div className="theme-form__colors">
        {colorInput.current.map((ref, index) => (
          <input
            key={index}
            type="color"
            ref={ref}
            defaultValue="#d3d3d3"
            className="theme-form__colors-input"
          />
        ))}
      </div>

      {/* Send */}
      <div className="theme-preview">
        <button type="submit" className="theme-form__submit">
          {initialData ? "Save Changes" : "Add Theme"}
        </button>
      </div>
    </form>
  );
};

export default ThemeForm;
