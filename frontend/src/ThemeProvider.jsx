import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, steTheme] = useState("dark");
  const toggleTheme = () => {
    steTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export const useTheme = () => useContext(ThemeContext);
