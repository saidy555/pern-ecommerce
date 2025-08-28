import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  // theme state and useeffect
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");

    // Fallback to system preference
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const defaultTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(defaultTheme);
    document.documentElement.setAttribute("data-theme", defaultTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const value = {
    theme,
    toggleTheme,
  };

  return <ThemeContext value={value}> {children}</ThemeContext>;
}
