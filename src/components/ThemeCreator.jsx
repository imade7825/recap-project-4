import React, { useState } from "react";
import "../styles/ThemeCreator.css";
import "./ThemeDetail.jsx";
import ThemePreview from "./ThemePreview";
import ThemeDetail from "./ThemeDetail";
import ThemeForm from "./ThemeForm.jsx";
// part 4
const ThemeCreator = ({ themes, onDeleteTheme, onEditTheme }) => {
  const [displayStates, setDisplayStates] = useState({});

  const handleDispalyChange = (id, newState) => {
    setDisplayStates((prev) => ({
      ...prev,
      [id]: prev[id] === newState ? "preview" : newState,
    }));
  };
  return (
    <div className="theme-creator">
      {themes?.map((theme) => {
        const state = displayStates[theme.id] || "preview";
        return (
          <div key={theme.id}>
            {state === "preview" && (
              <ThemePreview
                theme={theme}
                isExpanded={false}
                onToggle={() => handleDispalyChange(theme.id, "details")}
              />
            )}
            {state === "details" && (
              <ThemeDetail
                theme={theme}
                onDelete={onDeleteTheme}
                onEdit={() => handleDispalyChange(theme.id, "edit")}
                onToggle={() => handleDispalyChange(theme.id, "preview")}
              />
            )}
            {state === "edit" && (
              <ThemeForm
                initialData={theme}
                onSubmit={(updated) => {
                  if (onEditTheme) {
                    onEditTheme(updated);
                    handleDispalyChange(theme.id, "details");
                  } else {
                    console.error("onEditTheme is not defined");
                  }
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ThemeCreator;

// <div key={theme.id} className="theme-wrapper">
//   <ThemePreview
//     theme={theme}
//     isExpanded={expandedId === theme.id}
//     onToggle={() => handleToggle(theme.id)} //  Hier wird übergeben
//   />
//   {expandedId === theme.id && (
//     <ThemeDetail
//       theme={theme}
//       onDelete={onDeleteTheme}
//       onEditTheme={handleEditTheme}
//     />
//   )}
// </div>
//   ))}
// </div>
// );
// };
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
