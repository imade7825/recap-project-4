import React, { useState } from "react";
import "../styles/ThemeCreator.css";
import "./ThemeDetail.jsx";
import ThemePreview from "./ThemePreview";
import ThemeDetail from "./ThemeDetail";
// part 4
const ThemeCreator = ({ themes, onDeleteTheme }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="theme-creator">
      {themes.map((theme) => (
        <div key={theme.id} className="theme-wrapper">
          <ThemePreview
            theme={theme}
            isExpanded={expandedId === theme.id}
            onToggle={() => handleToggle(theme.id)} //  Hier wird übergeben
          />
          {expandedId === theme.id && (
            <ThemeDetail theme={theme} onDelete={onDeleteTheme} />
          )}
        </div>
      ))}
    </div>
  );
};
// // part 3
// // themes as prop
// const ThemeCreator = ({ themes }) => {
//   return (
//     <div className="theme-creator">
//       {/* <h2>Theme Creator</h2> */}
//       {themes.map((theme) => (
//         <Theme key={theme.id} theme={theme} />
//       ))}
//     </div>
//   );
// };

// // part 2

//const ThemeCreator = () => {
// <div className="theme-creator">
//   <h2>Theme Creator</h2>
//   {themes.map((theme) => (
//     <Theme key={theme.id} theme={theme} />
//   ))}
// </div>

// Part 1 zu return einfügen

//const ThemeCreator = () => {
// const [selectedTheme] = useState(themes[1]); // Wählt das erste Theme ("Vivid Meadow")
// <div className="theme-creator" style={{ minHeight: '100vh', width: '100%' }}>
//   <h2>Theme Creator</h2>
//   <h3>{selectedTheme.name}</h3>
//   {selectedTheme.colors.map((color, index) => (
//     <article key={index} className="color-block">
//       <span className="text-container">
//         <p className="role-text">{color.role}</p>
//         <p className="value-text">{color.value}</p>
//       </span>
//       <span className="color-sample" style={{ backgroundColor: color.value }}></span>
//     </article>
//   ))}
// </div>
//};

export default ThemeCreator;
