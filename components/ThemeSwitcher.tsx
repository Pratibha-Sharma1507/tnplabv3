"use client";

import { themes, useTheme } from "@/components/ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <label className="theme-switcher" title="Choose theme">
      <span className="sr-only">Choose theme</span>
      <span className="theme-switcher__dot" style={{ backgroundColor: themes.find((item) => item.id === theme)?.swatch }} />
      <select value={theme} onChange={(event) => setTheme(event.target.value as typeof theme)} aria-label="Choose theme">
        {themes.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
      </select>
    </label>
  );
}