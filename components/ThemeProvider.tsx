"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const themes = [
  { id: "midnight", label: "Midnight", swatch: "#3e8ef7" },
  { id: "aurora", label: "Aurora", swatch: "#21c7a8" },
  { id: "sunset", label: "Sunset", swatch: "#ff8a4c" },
  { id: "paper", label: "Paper", swatch: "#d9485f" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

const ThemeContext = createContext<{
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
}>({
  theme: "midnight",
  setTheme: () => undefined,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>("midnight");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("tnplab-theme") as ThemeId | null;
    if (themes.some((item) => item.id === savedTheme)) setTheme(savedTheme as ThemeId);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("tnplab-theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}