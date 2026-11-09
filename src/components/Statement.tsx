"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Statement() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-brand-border dark:border-brand-dark-border bg-brand-surface-subtle/50 dark:bg-brand-dark-surface/50 py-16 px-4 sm:px-6 lg:px-8 text-center transition-colors">
      <div className="max-w-5xl mx-auto space-y-4">
        <p className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-brand-ink dark:text-brand-dark-ink leading-[1.15]">
          {t.statement.quote}{" "}
          <span className="text-brand-primary dark:text-brand-gold underline decoration-brand-gold/40 decoration-2 underline-offset-8">
            {t.statement.highlight1}
          </span>{" "}
          <span className="text-brand-ink-secondary dark:text-brand-dark-ink-secondary">
            {t.statement.highlight2}
          </span>
        </p>
        <p className="text-xs sm:text-sm font-semibold tracking-pill uppercase text-brand-gold max-w-2xl mx-auto pt-2">
          {t.statement.author}
        </p>
      </div>
    </section>
  );
}
