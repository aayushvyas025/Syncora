import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || "dark",
  );

  function toggleTheme(theme) {
    localStorage.setItem("app-theme", theme);
    setTheme(theme);
  }
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}

export default ThemeProvider;
