import React from "react";
import "../styles/ThemeCreator.css";
import "../styles/ThemePreview.css";
import ColorCard from "./ColorCard";
import { IconArrowUp, IconArrowDown } from "@tabler/icons-react";
// import themesDB from "../data/db";

const ThemeDetail = ({ theme, onDelete, onEdit, onToggle }) => {
  return (
    <div className="theme-detail">
      {/* Titel and delete */}
      <div className="theme-header">
        <h3 className="theme-title">{theme.name}</h3>

        <div className="theme-buttons">
          <button className="theme-edit-button" onClick={onEdit}>
            Edit
          </button>
          <button
            className="theme-delete-button"
            onClick={() => onDelete(theme.id)}
          >
            Delete
          </button>
          <span className="theme-toggle-raw" onClick={onToggle}>
            <IconArrowUp color="green" size={32} />
          </span>
        </div>
      </div>

      <div className="theme-colors">
        {theme.colors.map((color, index) => (
          <article key={index} className="color-block">
            <span className="text-container">
              <ColorCard hex={color.value} name={color.name} />
              <p className="role-text">{color.role}</p>
              <p className="role-text">{color.name}</p>
              <p className="value-text">{color.value}</p>
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
