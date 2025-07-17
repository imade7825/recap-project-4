import React, { useState } from "react";
import ThemePreview from "./ThemePreview";
import ThemeDetail from "./ThemeDetail";
import ThemeForm from "./ThemeForm.jsx";
import "../styles/ThemeCreator.css";

// verfolge, welcher zustand (preview, details, edit) pro theme angezeigt wird
const ThemeCreator = ({ themes, onDeleteTheme, onEditTheme }) => {
  const [displayStates, setDisplayStates] = useState({});

  // Umschalten zwischen Ansichtzustände
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
