import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const THEMES = [
  { id: "light", name: "Light Mode", icon: "☀️", bg: "bg-slate-50", text: "text-slate-900" },
  { id: "midnight", name: "Quant Midnight", icon: "🌙", bg: "bg-slate-950", text: "text-slate-100" },
  { id: "cyberpunk", name: "Cyberpunk Neon", icon: "⚡", bg: "bg-black", text: "text-cyan-400" },
  { id: "emerald", name: "Emerald Forest", icon: "🌿", bg: "bg-emerald-950", text: "text-emerald-100" },
];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);

    if (theme === "midnight" || theme === "cyberpunk" || theme === "emerald") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
