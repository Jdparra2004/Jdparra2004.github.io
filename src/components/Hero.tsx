"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, BookOpen, Compass, Award, ExternalLink, MapPin } from "lucide-react";

export default function Hero() {
  const { locale, t } = useLanguage();

  const cvUrl =
    locale === "en"
      ? "/assets/docs/Juan David Parra Cantor - CV English.pdf"
      : "/assets/docs/Juan David Parra Cantor - CV.pdf";

  return (
    <section className="relative overflow-hidden border-b border-brand-border dark:border-brand-dark-border py-12 lg:py-20">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-primary-light/40 dark:bg-brand-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-brand-gold" />
              <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* Monumental Headline */}
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-widest text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary uppercase">
                {t.hero.greeting}
              </p>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-brand-ink dark:text-brand-dark-ink uppercase leading-[1.08]">
                JUAN DAVID <br />
                <span className="text-brand-primary dark:text-brand-gold">PARRA CANTOR</span>
              </h1>
            </div>

            {/* Subtitle / Role Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface w-fit text-xs font-semibold text-brand-primary dark:text-brand-gold">
              <Award className="w-4 h-4 text-brand-gold" />
              <span>{t.hero.role}</span>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed max-w-2xl">
              {t.hero.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-primary text-white hover:bg-brand-primary-hover dark:bg-brand-gold dark:text-brand-dark-canvas dark:hover:bg-brand-gold-hover font-semibold text-xs tracking-pill uppercase transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Compass className="w-4 h-4" />
                <span>{t.hero.btnProjects}</span>
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-brand-border-subtle dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface hover:border-brand-primary dark:hover:border-brand-gold text-brand-ink dark:text-brand-dark-ink font-semibold text-xs tracking-pill uppercase transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 text-brand-gold" />
                <span>{t.hero.btnResearch}</span>
              </Link>

              <a
                href="https://orcid.org/0009-0008-0321-000X"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-semibold tracking-pill text-brand-ink-secondary dark:text-brand-dark-ink-secondary hover:text-brand-gold uppercase transition-colors"
              >
                <span>ORCID</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Metadata Row */}
            <div className="pt-4 border-t border-brand-border dark:border-brand-dark-border grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="block text-[10px] font-semibold text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary tracking-widest uppercase">
                  {t.hero.statusLabel}
                </span>
                <span className="font-semibold text-brand-ink dark:text-brand-dark-ink">
                  {t.hero.statusValue}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-semibold text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary tracking-widest uppercase">
                  {t.hero.locationLabel}
                </span>
                <span className="font-semibold text-brand-ink dark:text-brand-dark-ink flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-gold inline" />
                  {t.hero.locationValue}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[10px] font-semibold text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary tracking-widest uppercase">
                  {t.hero.institutionLabel}
                </span>
                <span className="font-semibold text-brand-ink dark:text-brand-dark-ink">
                  {t.hero.institutionValue}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Floating Metadata Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface shadow-2xl group">
              {/* Image banner / portrait */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/img/perfil/profile_pic.jpg"
                  alt="Juan David Parra Cantor - Ingeniero Químico UPB"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Fallback to banner if profile pic not found
                    (e.currentTarget as HTMLImageElement).src = "/assets/img/perfil/banner.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-canvas/90 via-brand-dark-canvas/20 to-transparent" />
              </div>

              {/* Floating Caption Overlay at bottom */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-brand-dark-canvas/80 border border-brand-dark-border text-white">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-gold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      UPB Medellín · Semillero A+D
                    </span>
                    <h3 className="font-display font-bold text-lg text-white mt-0.5">
                      Juan David Parra Cantor
                    </h3>
                    <p className="text-xs text-brand-dark-ink-secondary">
                      {locale === "es"
                        ? "Investigación en Optimización & Biorreactores"
                        : "Research in Optimization & Bioreactors"}
                    </p>
                  </div>

                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-brand-dark-canvas transition-colors"
                    aria-label={locale === "es" ? "Ver CV en PDF" : "View Resume PDF"}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
