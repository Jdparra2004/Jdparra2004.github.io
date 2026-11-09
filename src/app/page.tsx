"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Statement from "@/components/Statement";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { postsData } from "@/data/postsData";
import { ArrowRight, BookOpen, Compass, Mail, Sparkles } from "lucide-react";

export default function HomePage() {
  const { locale, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const cvUrl =
    locale === "en"
      ? "/assets/docs/Juan David Parra Cantor - CV English.pdf"
      : "/assets/docs/Juan David Parra Cantor - CV.pdf";

  const featuredProjects = projectsData.filter((p) => p.featured);
  const recentPosts = postsData.slice(0, 3);

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Key Numbers & Metrics */}
      <StatsBar />

      {/* 3. Statement Quote Band */}
      <Statement />

      {/* 4. Featured Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
                {t.featured.eyebrow}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-ink dark:text-brand-dark-ink uppercase tracking-tight">
              {t.featured.title}
            </h2>
            <p className="text-sm sm:text-base text-brand-ink-secondary dark:text-brand-dark-ink-secondary max-w-2xl">
              {t.featured.subtitle}
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-border dark:border-brand-dark-border text-xs font-bold tracking-pill uppercase hover:border-brand-gold hover:text-brand-gold transition-colors shrink-0"
          >
            <span>{t.featured.viewAll}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* 5. Recent Research & Blog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
              {t.blogPage.eyebrow}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-ink dark:text-brand-dark-ink uppercase tracking-tight">
              {t.blogPage.title}
            </h2>
            <p className="text-sm sm:text-base text-brand-ink-secondary dark:text-brand-dark-ink-secondary max-w-2xl">
              {t.blogPage.subtitle}
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-border dark:border-brand-dark-border text-xs font-bold tracking-pill uppercase hover:border-brand-gold hover:text-brand-gold transition-colors shrink-0"
          >
            <span>{t.featured.viewAll}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface hover:border-brand-gold/60 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">
                  <span className="font-mono-code">{post.date}</span>
                  <span>{post.readTime[locale]}</span>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold tracking-widest text-brand-gold uppercase">
                    {post.category[locale]}
                  </span>
                  <h3 className="font-display font-bold text-xl text-brand-ink dark:text-brand-dark-ink group-hover:text-brand-primary dark:group-hover:text-brand-gold transition-colors leading-snug">
                    {post.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed line-clamp-3">
                    {post.summary[locale]}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-border dark:border-brand-dark-border mt-6 flex items-center justify-between">
                <Link
                  href={`/blog#${post.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-pill uppercase text-brand-primary dark:text-brand-gold hover:underline"
                >
                  <span>{t.blogPage.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {post.doi && (
                  <span className="text-[10px] font-mono-code font-semibold px-2 py-0.5 rounded bg-brand-primary-light dark:bg-brand-dark-elevated text-brand-primary dark:text-brand-gold">
                    DOI
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Direct Contact CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-3xl border border-brand-border dark:border-brand-dark-border bg-gradient-to-r from-brand-primary to-brand-primary-focus text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold text-brand-dark-canvas text-xs font-bold tracking-widest uppercase">
              <Mail className="w-3.5 h-3.5" />
              {t.contactPage.eyebrow}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              {locale === "es" ? "¿Iniciamos una colaboración?" : "Let's start a collaboration"}
            </h2>
            <p className="text-sm sm:text-base text-brand-primary-light/90 leading-relaxed">
              {locale === "es"
                ? "Disponible para proyectos de investigación aplicada, modelado numérico en Python, optimización multiobjetivo y consultoría técnica en ingeniería química."
                : "Open to applied research initiatives, scientific modeling in Python, multiobjective optimization, and chemical engineering technical collaborations."}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-brand-gold text-brand-dark-canvas hover:bg-brand-gold-hover font-semibold text-xs tracking-pill uppercase transition-colors shadow-lg"
              >
                {t.nav.contact}
              </Link>
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full border border-white/40 hover:bg-white/10 text-white font-semibold text-xs tracking-pill uppercase transition-colors"
              >
                {t.hero.btnCv}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
