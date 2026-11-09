"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-pill uppercase text-brand-gold hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{t.legal.backHome}</span>
      </Link>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-brand-gold" />
          <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
            {t.legal.privacyEyebrow}
          </span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-ink dark:text-brand-dark-ink uppercase">
          {t.legal.privacyTitle}
        </h1>
        <p className="text-xs font-mono-code text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">
          {t.legal.privacySubtitle}
        </p>
      </div>

      <div className="p-8 sm:p-10 rounded-2xl border border-brand-border/80 dark:border-brand-dark-border/80 bg-brand-surface dark:bg-brand-dark-surface space-y-8 text-sm text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
        {t.legal.privacySections.map((sec, i) => (
          <section key={i} className="space-y-2">
            <h2 className="font-display font-bold text-base sm:text-lg text-brand-ink dark:text-brand-dark-ink uppercase tracking-wide">
              {sec.title}
            </h2>
            <p className="text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
              {sec.content}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
