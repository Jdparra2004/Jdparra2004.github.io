"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface p-1 text-xs">
      <button
        onClick={() => setLocale("es")}
        className={`px-2.5 py-1 rounded-full font-semibold transition-all duration-150 ${
          locale === "es"
            ? "bg-brand-primary text-white shadow-sm"
            : "text-brand-ink-secondary dark:text-brand-dark-ink-secondary hover:text-brand-gold"
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1 rounded-full font-semibold transition-all duration-150 ${
          locale === "en"
            ? "bg-brand-primary text-white shadow-sm"
            : "text-brand-ink-secondary dark:text-brand-dark-ink-secondary hover:text-brand-gold"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
