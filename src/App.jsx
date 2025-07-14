import React, { useState } from "react";
import "./App.css";
import ThemeCreator from "./components/ThemeCreator";
import ThemeForm from "./components/ThemeForm";
import themesDB from "./data/db";
import { v4 as uuid } from "uuid";
import "./styles/ThemeCreator.css";

function App() {
  //Initial state with themes from db
  const [themes, setThemes] = useState(themesDB);

  // insert a new thems to the list
  const handleAddTehme = (newTheme) => {
    const themeWithId = {...newTheme, id: uuid()}
    setThemes((prev) => [themeWithId, ...prev]);
  };
  return (
    <div className="App">
      
      {/* Show the formular */}
      <ThemeForm onAddTheme={handleAddTehme} />

      {/* Show theme list */}
      <ThemeCreator themes={themes} />
    </div>
  );
}

export default App;
