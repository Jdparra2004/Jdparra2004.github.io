"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FileText, Award, GraduationCap, Microscope, Code, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const { locale, t } = useLanguage();

  const cvUrl =
    locale === "en"
      ? "/assets/docs/Juan David Parra Cantor - CV English.pdf"
      : "/assets/docs/Juan David Parra Cantor - CV.pdf";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-20">
      
      {/* 1. Profile Header / Bio Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-brand-gold" />
            <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
              {t.aboutPage.eyebrow}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-brand-ink dark:text-brand-dark-ink uppercase tracking-tight">
            {t.aboutPage.title}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-brand-primary dark:text-brand-gold leading-relaxed">
            {t.aboutPage.lead}
          </p>

          <p className="text-sm sm:text-base text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
            {t.hero.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-primary text-white hover:bg-brand-primary-hover dark:bg-brand-gold dark:text-brand-dark-canvas dark:hover:bg-brand-gold-hover font-semibold text-xs tracking-pill uppercase transition-all shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>{t.aboutPage.downloadCv}</span>
            </a>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-brand-border dark:border-brand-dark-border text-xs font-semibold tracking-pill uppercase hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              <span>{t.aboutPage.exploreWork}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/perfil/profile_pic.jpg"
              alt="Fotografía Juan David Parra Cantor"
              className="w-full aspect-[4/5] object-cover object-center"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/assets/img/perfil/banner.png";
              }}
            />
            <div className="p-6 bg-brand-surface dark:bg-brand-dark-surface border-t border-brand-border dark:border-brand-dark-border space-y-2">
              <span className="text-[11px] font-bold tracking-widest uppercase text-brand-gold">
                ORCID: 0009-0008-0321-000X
              </span>
              <h3 className="font-display font-bold text-lg text-brand-ink dark:text-brand-dark-ink">
                Juan David Parra Cantor
              </h3>
              <p className="text-xs text-brand-ink-secondary dark:text-brand-dark-ink-secondary">
                Universidad Pontificia Bolivariana · Semillero Automática y Diseño (A+D)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Academic & Research Groups Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-7 rounded-2xl border border-brand-border/60 dark:border-brand-dark-border/60 bg-brand-surface dark:bg-brand-dark-surface/60 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-surface-subtle dark:bg-brand-dark-elevated text-brand-primary dark:text-brand-gold flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-xl text-brand-ink dark:text-brand-dark-ink uppercase">
            {t.aboutPage.academicTitle}
          </h3>
          <p className="text-xs sm:text-sm text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
            {t.aboutPage.academicDesc}
          </p>
        </div>

        <div className="p-7 rounded-2xl border border-brand-border/60 dark:border-brand-dark-border/60 bg-brand-surface dark:bg-brand-dark-surface/60 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-surface-subtle dark:bg-brand-dark-elevated text-brand-gold flex items-center justify-center">
            <Microscope className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-xl text-brand-ink dark:text-brand-dark-ink uppercase">
            {t.aboutPage.seedbedTitle}
          </h3>
          <p className="text-xs sm:text-sm text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
            {t.aboutPage.seedbedDesc}
          </p>
        </div>
      </section>

      {/* 3. Core Technical Competencies */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
            {t.aboutPage.competenciesTitle}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-ink dark:text-brand-dark-ink uppercase">
            {locale === "es" ? "Áreas de Dominio Metodológico" : "Methodological Focus Areas"}
          </h2>
          <p className="text-xs sm:text-sm text-brand-ink-secondary dark:text-brand-dark-ink-secondary max-w-2xl">
            {t.aboutPage.competenciesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(t.aboutPage.areas).map(([key, area]) => (
            <div
              key={key}
              className="p-6 rounded-2xl border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface space-y-3"
            >
              <div className="p-2 w-fit rounded-lg bg-brand-primary/10 dark:bg-brand-gold/10 text-brand-primary dark:text-brand-gold">
                <Code className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-lg text-brand-ink dark:text-brand-dark-ink leading-tight">
                {area.title}
              </h4>
              <p className="text-xs text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Honors, Awards & Publications */}
      <section className="space-y-8 pt-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
            {t.aboutPage.awardsTitle}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-ink dark:text-brand-dark-ink uppercase">
            {locale === "es" ? "Reconocimientos y Distinciones" : "Honors & Distinctions"}
          </h2>
        </div>

        <div className="space-y-4">
          {t.aboutPage.awardsList.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface/80 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand-gold/60 transition-colors"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-pill uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                    <Award className="w-3.5 h-3.5 inline mr-1" />
                    {item.year}
                  </span>
                  <span className="text-xs font-semibold text-brand-primary dark:text-brand-primary-light">
                    {item.event}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-ink dark:text-brand-dark-ink">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-brand-border dark:border-brand-dark-border text-xs font-semibold tracking-pill uppercase hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  <span>Ver Proyecto</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
