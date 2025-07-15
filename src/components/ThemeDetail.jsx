import React from "react";
import "../styles/ThemeCreator.css";
import "../styles/ThemePreview.css";
import ColorCard from "./ColorCard";
// import themesDB from "../data/db";

const ThemeDetail = ({ theme, onDelete }) => {
  return (
    <div className="theme-detail">
      {/* Titel and delete */}
      <div className="theme-header">
        <h3 className="theme-title">{theme.name}</h3>
        <button
          className="theme-delete-button"
          onClick={() => onDelete(theme.id)}
        >
          Delete
        </button>
      </div>

      <div className="theme-colors">
        {theme.colors.map((color, index) => (
          <article key={index} className="color-block">
            <span className="text-container">
              {/* <div className="color-info-section"> */}
                <ColorCard hex={color.value} name={color.name} />
              {/* </div> */}
              <div className="color-text-section">
                <p className="role-text">{color.name}</p>
                <p className="value-text">{color.value}</p>
              </div>
            </span>
            <span
              className="color-sample"
              style={{ backgroundColor: color.value }}
            ></span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ThemeDetail;
