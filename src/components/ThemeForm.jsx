import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import "../styles/ThemeForm.css";

const ThemeForm = ({ onAddTheme }) => {
  const nameInput = useRef();
  const colorInput = [useRef(), useRef(), useRef(), useRef()];

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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Verhindert Seitenreload

    const name = nameInput.current.value.trim();
    if (!name) return; // Name is required

    // //color infos
    // const colors = colorInput.map((ref, i) => ({
    //   role: `Color ${i + 1}`,
    //   value: ref.current.value,
    // }));

    // Fetch color names for all colors
    const colors = await Promise.all(
      colorInput.map(async (ref, i) => {
        const hex = ref.current.value;
        const colorName = await fetchColorName(hex);
        return {
          role: `Color ${i + 1}`,
          value: hex,
          name: colorName,
        };
      })
    );

    //New Theme object
    const newTheme = { id: uuid(), name, colors };
    onAddTheme(newTheme); //Add new Theme to the App}
    e.target.reset(); //Delete
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
        {colorInput.map((ref, index) => (
          <input
            key={index}
            type="color"
            ref={ref}
            defaultValue="#000000"
            className="theme-form__colors-input"
          />
        ))}
      </div>

      {/* Send */}
      <button type="submit" className="theme-form__submit">
        Add Theme
      </button>
    </form>
  );
};

export default ThemeForm;
