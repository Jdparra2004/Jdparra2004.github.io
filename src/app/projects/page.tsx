"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData, ProjectItem } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { Compass, Filter } from "lucide-react";

export default function ProjectsPage() {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { key: "all", label: t.projectsPage.filterAll },
    { key: "optimization", label: t.projectsPage.filterOptimization },
    { key: "bioprocesses", label: t.projectsPage.filterBioprocesses },
    { key: "hydrogen", label: t.projectsPage.filterHydrogen },
    { key: "computing", label: t.projectsPage.filterComputing },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="w-10 h-[2px] bg-brand-gold" />
          <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
            {t.projectsPage.eyebrow}
          </span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-brand-ink dark:text-brand-dark-ink uppercase tracking-tight">
          {t.projectsPage.title}
        </h1>
        <p className="text-sm sm:text-base text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
          {t.projectsPage.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface w-fit">
        {filterTabs.map((tab) => {
          const isActive = activeCategory === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-pill uppercase transition-all duration-200 ${
                isActive
                  ? "bg-brand-primary text-white dark:bg-brand-gold dark:text-brand-dark-canvas shadow-sm"
                  : "text-brand-ink-secondary dark:text-brand-dark-ink-secondary hover:text-brand-gold hover:bg-brand-surface-subtle dark:hover:bg-brand-dark-elevated"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenModal={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
