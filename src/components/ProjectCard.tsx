"use client";

import React from "react";
import { ProjectItem } from "@/data/projectsData";
import { useLanguage } from "@/context/LanguageContext";
import { FileDown, ArrowUpRight, Award, BookOpen } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const { locale, t } = useLanguage();
  const hasRealImage = project.gallery && project.gallery.length > 0;

  return (
    <article className="flex flex-col justify-between rounded-2xl border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface p-7 hover:border-brand-gold/60 transition-all duration-300 group hover:shadow-lg">
      
      <div className="space-y-4">
        
        {/* Real image preview if available */}
        {hasRealImage && (
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-brand-border/60 dark:border-brand-dark-border/60 bg-black/30 mb-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.gallery![0]}
              alt={project.title[locale]}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Status and Category Meta */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] font-semibold tracking-pill uppercase text-brand-gold">
            {project.typeLabel[locale]}
          </span>
          <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-full bg-brand-surface-subtle dark:bg-brand-dark-elevated text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary border border-brand-border/50 dark:border-brand-dark-border/50">
            {project.status[locale]}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2.5">
          <h3 className="font-display font-bold text-xl text-brand-ink dark:text-brand-dark-ink group-hover:text-brand-primary dark:group-hover:text-brand-gold transition-colors leading-snug">
            {project.title[locale]}
          </h3>
          <p className="text-xs sm:text-sm text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed line-clamp-3">
            {project.shortDescription[locale]}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-md text-[10px] font-medium tracking-wide bg-brand-surface-subtle dark:bg-brand-dark-elevated text-brand-ink-secondary dark:text-brand-dark-ink-secondary"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

      </div>

      {/* Card Action Row */}
      <div className="pt-5 border-t border-brand-border/60 dark:border-brand-dark-border/60 mt-6 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-pill text-brand-primary dark:text-brand-gold hover:underline uppercase"
        >
          <span>{t.projectsPage.viewProject}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-brand-ink-secondary dark:text-brand-dark-ink-secondary hover:text-brand-gold transition-colors"
              aria-label="Repositorio GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.downloads && project.downloads.length > 0 && (
            <a
              href={project.downloads[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-brand-ink-secondary dark:text-brand-dark-ink-secondary hover:text-brand-gold transition-colors"
              aria-label="Descargar Documento"
            >
              <FileDown className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </article>
  );
}
