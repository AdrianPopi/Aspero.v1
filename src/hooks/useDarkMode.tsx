// src/hooks/useDarkMode.ts
import { useState, useEffect, useLayoutEffect } from "react";

const STORAGE_KEY = "aspero-dark-mode";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

export const useDarkMode = () => {
  // Plecăm cu `undefined` → ştim că încă nu am decis tema.
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined);

  /** Aplică / scoate clasa + color-scheme */
  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    html.classList.toggle("dark", dark);
    html.style.setProperty("color-scheme", dark ? "dark" : "light");
  };

  // La **primul** paint în browser citim localStorage sau preferinţa sistemului.
  useIsomorphicLayoutEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const dark = stored !== null ? JSON.parse(stored) : prefersDark;

    setIsDarkMode(dark);
    applyTheme(dark);
  }, []);

  // Când utilizatorul apasă butonul.
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      applyTheme(next);
      return next;
    });
  };

  return {
    // până când decidem, presupunem light (evităm flash alb → negru pe mobil)
    isDarkMode: isDarkMode ?? false,
    toggleDarkMode,
  };
};
