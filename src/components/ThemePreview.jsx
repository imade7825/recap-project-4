import { IconArrowUp, IconArrowDown } from "@tabler/icons-react";
import "../styles/ThemePreview.css";
const ThemePreview = ({ theme, isExpanded,onToggle }) => {
  return (
    <div className="them-preview">
      {/* Name and Toggle */}
      <div className="theme-header">
        <h3 className="theme-title">{theme.name}</h3>

        <span className="theme-toggle-raw" onClick={onToggle}>
          {isExpanded ? (
            <IconArrowUp color="green" size={32} />
          ) : (
            <IconArrowDown color="red" size={32} />
          )}
        </span>
      </div>

      {/* Farbkaesten */}
      <div className="theme-colors">
        {theme.colors.map((color, i) => (
          <div
            key={i}
            className="color-box"
            style={{ backgroundColor: color.value }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ThemePreview;
