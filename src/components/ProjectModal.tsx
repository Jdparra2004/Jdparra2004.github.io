"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "@/data/projectsData";
import { useLanguage } from "@/context/LanguageContext";
import { X, FileDown, CheckCircle2, Calendar, Award } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { locale, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-dark-canvas/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl rounded-3xl border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden max-h-[90vh] flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-brand-border dark:border-brand-dark-border">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-pill uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {project.status[locale]}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-ink dark:text-brand-dark-ink mt-2">
              {project.title[locale]}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-brand-border dark:border-brand-dark-border text-brand-ink-secondary dark:text-brand-dark-ink-secondary hover:text-brand-gold hover:border-brand-gold transition-colors shrink-0"
            aria-label={t.modal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="py-6 space-y-6 overflow-y-auto pr-1">
          {/* Detailed Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold tracking-widest text-brand-gold uppercase">
              {t.modal.detailsTitle}
            </h4>
            <p className="text-sm sm:text-base text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
              {project.description[locale]}
            </p>
          </div>

          {/* Metadata Row (only if dates actually exist) */}
          {(Boolean(project.startDate) || Boolean(project.lastUpdate)) && (
            <div className="flex flex-wrap items-center gap-6 py-2 border-y border-brand-border/60 dark:border-brand-dark-border/60 text-xs text-brand-ink-secondary dark:text-brand-dark-ink-secondary">
              {project.startDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">Inicio:</span>
                  <span className="font-medium text-brand-ink dark:text-brand-dark-ink">{project.startDate}</span>
                </div>
              )}
              {project.lastUpdate && (
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-brand-coral" />
                  <span className="text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">Hito / Congreso:</span>
                  <span className="font-medium text-brand-ink dark:text-brand-dark-ink">{project.lastUpdate}</span>
                </div>
              )}
            </div>
          )}

          {/* Real Scientific / Simulation Images if available */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-widest text-brand-gold uppercase">
                {locale === "es" ? "Gráficos y Perfiles de Simulación" : "Simulation Profiles & Graphics"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.gallery.map((imgUrl, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-brand-border dark:border-brand-dark-border bg-black/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgUrl} alt="Gráfico de simulación" className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold tracking-widest text-brand-ink dark:text-brand-dark-ink uppercase">
              {t.projectsPage.technologies}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary-light/60 dark:bg-brand-dark-elevated text-brand-primary dark:text-brand-gold border border-brand-border dark:border-brand-dark-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Downloads / Scientific Assets */}
          {project.downloads && project.downloads.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold tracking-widest text-brand-gold uppercase">
                {t.modal.downloads}
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {project.downloads.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-brand-border dark:border-brand-dark-border hover:border-brand-gold bg-brand-surface dark:bg-brand-dark-card transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-brand-primary/10 dark:bg-brand-gold/10 text-brand-primary dark:text-brand-gold">
                        <FileDown className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-brand-ink dark:text-brand-dark-ink group-hover:text-brand-gold transition-colors block">
                          {item.version[locale]}
                        </span>
                        <span className="text-[11px] text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">
                          {item.platform[locale]}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-surface-subtle dark:bg-brand-dark-elevated text-brand-ink-secondary dark:text-brand-dark-ink-secondary">
                      {item.type}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-brand-border dark:border-brand-dark-border flex items-center justify-between gap-4">
          {project.repository ? (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary text-white dark:bg-brand-gold dark:text-brand-dark-canvas text-xs font-semibold tracking-pill uppercase hover:opacity-90 transition-opacity"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{t.modal.sourceCode}</span>
            </a>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-brand-border dark:border-brand-dark-border text-xs font-semibold tracking-pill uppercase text-brand-ink-secondary dark:text-brand-dark-ink-secondary hover:text-brand-gold hover:border-brand-gold transition-colors"
          >
            {t.modal.close}
          </button>
        </div>

      </div>
    </div>
  );
}
