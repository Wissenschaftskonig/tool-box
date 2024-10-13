"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultValue: ThemeContextProps = {
  theme: "light",
  setTheme: () => {},
  handleToggle: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(defaultValue);

const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      const html = document.querySelector("html");
      if (html) {
        html.setAttribute("data-theme", theme);
        if (theme === "dark") {
          html.classList.add("dark");
          document.body.classList.add("dark");
        } else {
          html.classList.remove("dark");
          document.body.classList.remove("dark");
        }
      }
    }
  }, [theme]);

  const objectsPassed = { theme, setTheme, handleToggle };

  return (
    <ThemeContext.Provider value={objectsPassed}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
