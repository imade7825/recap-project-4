import React from "react";
import "../styles/ThemeCreator.css";
// import themes from "../data/db.js";
import Theme from "./Theme.jsx";

//const ThemeCreator = () => {
// part 3
// themes as prop
const ThemeCreator = ({ themes }) => {
  return (
    <div className="theme-creator">
      {/* <h2>Theme Creator</h2> */}
      {themes.map((theme) => (
        <Theme key={theme.id} theme={theme} />
      ))}
    </div>
  );
};

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
