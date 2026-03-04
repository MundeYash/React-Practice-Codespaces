import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import "./ThemeSwitcherStyle.css";

const Content = () => {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <h1>Theme Switcher using Context API</h1>
      <ThemeToggle />
    </div>
  );
};

const ThemeSwitcherHelper = () => {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
};

export default ThemeSwitcherHelper;
