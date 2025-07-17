import React, { useState } from "react";
import "../styles/ThemeCreator.css";

import ThemPreview from "./ThemePreview";
import ThemeDetail from "./ThemeDetail";

const Theme = ({ theme, onDelete, onEdit}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleView = () => setIsExpanded((prev) => !prev);

  return (
    // <div style={{ width: "100%" }}>
    <div onClick={toggleView} style={{ cursor: "pointer" }}>
      <ThemPreview theme={theme} isExpanded={isExpanded} />
      {/* {isExpanded && <ThemeDetail theme={theme} />} */}
      {isExpanded && <ThemeDetail theme={theme} onDelete={onDelete} onEdit={onEdit} />}
    </div>
  );
};
export default Theme;
