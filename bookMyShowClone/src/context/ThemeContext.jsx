import React, { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("themeMode") || "light");

  const toggleTheme = () => {
    const themeMode = theme === "light" ? "dark" : "light";
    setTheme(themeMode);
    localStorage.setItem("themeMode",themeMode)
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;