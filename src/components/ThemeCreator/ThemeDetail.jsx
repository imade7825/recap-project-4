import React from "react";
import "./ThemeCreator.css";

const ThemeDetail = ({ theme }) => {
  return (
    <div>
      {theme.colors.map((color, index) => (
        <article key={index} className="color-block">
          <span className="text-container">
            <p className="role-text">{color.role}</p>
            <p className="value-text">{color.value}</p>
          </span>
          <span
            className="color-sample"
            style={{ backgroundColor: color.value }}
          ></span>
        </article>
      ))}
    </div>
  );
};

export default ThemeDetail
