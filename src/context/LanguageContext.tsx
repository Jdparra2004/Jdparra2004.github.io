"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Locale, TranslationDictionary } from "@/data/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationDictionary;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [theme, setThemeState] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Language preference initialization
    const savedLocale = localStorage.getItem("portfolio_lang") as Locale | null;
    if (savedLocale === "es" || savedLocale === "en") {
      setLocaleState(savedLocale);
    } else {
      const browserLang = navigator.language?.toLowerCase() || "";
      if (browserLang.startsWith("en")) {
        setLocaleState("en");
      }
    }

    // 2. Theme preference initialization (default is dark luxury)
    const savedTheme = localStorage.getItem("portfolio_theme") as "dark" | "light" | null;
    if (savedTheme === "dark" || savedTheme === "light") {
      setThemeState(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      document.documentElement.classList.add("dark");
    }

    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("portfolio_lang", newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // fallback
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setThemeState(nextTheme);
    try {
      localStorage.setItem("portfolio_theme", nextTheme);
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch {
      // fallback
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t: translations[locale],
        theme,
        toggleTheme,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
