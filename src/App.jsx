import React, { useState } from "react";
import "./App.css";
import ThemeCreator from "./components/ThemeCreator";
import ThemeForm from "./components/ThemeForm";
import themesDB from "./data/db";
import { v4 as uuid } from "uuid";
import "./styles/ThemeCreator.css";
import "./components/ThemeDetail.jsx";

function App() {
  //Initial state with themes from db
  const [themes, setThemes] = useState(themesDB);

  // insert a new thems to the list
  const handleAddTehme = (newTheme) => {
    const themeWithId = { ...newTheme, id: uuid() };
    setThemes((prev) => [themeWithId, ...prev]);
  };

  // delete a theme
  const handleDeleteTheme = (id) => {
    setThemes((prev) => prev.filter((theme) => theme.id != id));
  };
  return (
    <div className="App">
      {/* Show the formular */}
      <ThemeForm onAddTheme={handleAddTehme} />

      {/* Show theme list */}
      {/* <ThemeCreator themes={themes} /> */}
      <ThemeCreator themes={themes} onDeleteTheme={handleDeleteTheme} />
    </div>
  );
}

export default App;
