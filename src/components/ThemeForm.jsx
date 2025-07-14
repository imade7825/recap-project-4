import React, { useRef } from "react";
//import { v4 as uuid } from "uuid";
import "../styles/ThemeForm.css";

const ThemeForm = ({ onAddTheme }) => {
  const nameInput = useRef();
  const colorInput = [useRef(), useRef(), useRef(), useRef()];
  const handleSubmit = (e) => {
    e.preventDefault(); // Verhindert Seitenreload

    const name = nameInput.current.value.trim();
    if (!name) return; // Name is required

    //color infos
    const colors = colorInput.map((ref, i) => ({
      role: `Color ${i + 1}`,
      value: ref.current.value,
    }));

    //New Theme object
    const newTheme = { name, colors };
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
