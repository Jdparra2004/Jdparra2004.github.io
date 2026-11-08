"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Trophy, Award, BookCheck, GraduationCap } from "lucide-react";

export default function StatsBar() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Trophy className="w-5 h-5 text-brand-gold" />,
      number: t.stats.stat1Number,
      label: t.stats.stat1Label,
      desc: t.stats.stat1Desc,
    },
    {
      icon: <Award className="w-5 h-5 text-brand-coral" />,
      number: t.stats.stat2Number,
      label: t.stats.stat2Label,
      desc: t.stats.stat2Desc,
    },
    {
      icon: <BookCheck className="w-5 h-5 text-brand-primary dark:text-brand-gold" />,
      number: t.stats.stat3Number,
      label: t.stats.stat3Label,
      desc: t.stats.stat3Desc,
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-brand-gold" />,
      number: t.stats.stat4Number,
      label: t.stats.stat4Label,
      desc: t.stats.stat4Desc,
    },
  ];

  return (
    <section className="py-12 border-b border-brand-border dark:border-brand-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-brand-border/60 dark:border-brand-dark-border/60 bg-brand-surface dark:bg-brand-dark-surface/60 hover:border-brand-gold/60 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-lg bg-brand-surface-subtle dark:bg-brand-dark-elevated">
                  {stat.icon}
                </span>
                <span className="text-2xl font-display font-extrabold text-brand-primary dark:text-brand-gold">
                  {stat.number}
                </span>
              </div>
              <h4 className="text-xs font-bold tracking-pill uppercase text-brand-ink dark:text-brand-dark-ink mb-1">
                {stat.label}
              </h4>
              <p className="text-xs text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
