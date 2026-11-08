"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface flex items-center justify-center text-brand-ink-secondary dark:text-brand-dark-ink-secondary hover:text-brand-gold hover:border-brand-gold transition-colors duration-150"
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-brand-gold" />
      ) : (
        <Moon className="w-4 h-4 text-brand-primary" />
      )}
    </button>
  );
}
