import { useEffect, useState } from "react";

const STORAGE_KEY = "usehooks-ts-dark-mode";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(isDarkMode));
    } catch (e) {
      console.warn("Unable to access localStorage:", e);
    }
    const html = document.documentElement;

    if (isDarkMode) {
      html.classList.add("dark");
      html.style.setProperty("color-scheme", "dark");
    } else {
      html.classList.remove("dark");
      html.style.setProperty("color-scheme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };

  return { isDarkMode, toggleDarkMode };
};
