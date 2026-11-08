"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-brand-primary text-white border-b border-brand-primary-focus/40 py-2 px-4 text-xs font-semibold tracking-pill">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-gold text-brand-dark-canvas font-bold text-[10px] tracking-widest uppercase">
            <Award className="w-3 h-3" />
            {t.announcement.badge}
          </span>
          <span className="hidden sm:inline text-brand-primary-light/90">
            {t.announcement.text}
          </span>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-brand-gold hover:text-white transition-colors duration-150 uppercase tracking-widest shrink-0"
        >
          <span>{t.announcement.cta}</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
