import { createContext, useContext, useEffect, useState } from "react";
import { THEMES } from "../constants";

export const ThemeContext = createContext(null);
export const useThemeContext = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || THEMES.LIGHT
  );
  const toggleTheme = () => {
    setTheme((prevState) =>
      prevState === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    );
    // localStorage.setItem(
    //   "theme",
    //   theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    // );
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
