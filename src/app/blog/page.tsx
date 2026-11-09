"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { postsData } from "@/data/postsData";
import { BookOpen, ExternalLink, Calendar, Clock, ChevronDown, ChevronUp, Copy, Check } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export default function BlogPage() {
  const { locale, t } = useLanguage();
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(id);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-16">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-10 h-[2px] bg-brand-gold" />
          <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
            {t.blogPage.eyebrow}
          </span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-brand-ink dark:text-brand-dark-ink uppercase tracking-tight">
          {t.blogPage.title}
        </h1>
        <p className="text-sm sm:text-base text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed max-w-2xl">
          {t.blogPage.subtitle}
        </p>
      </div>

      {/* Posts List */}
      <div className="space-y-12">
        {postsData.map((post) => {
          const isExpanded = expandedPostId === post.id;

          return (
            <article
              key={post.id}
              id={post.id}
              className="p-6 sm:p-9 rounded-2xl border border-brand-border/60 dark:border-brand-dark-border/60 bg-brand-surface dark:bg-brand-dark-surface/60 space-y-5 transition-all duration-300 hover:border-brand-gold/60"
            >
              {/* Meta row */}
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-4 text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">
                  <span className="flex items-center gap-1.5 font-mono-code">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-coral" />
                    {post.readTime[locale]}
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                  {post.category[locale]}
                </span>
              </div>

              {/* Title & Summary */}
              <div className="space-y-3">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-ink dark:text-brand-dark-ink leading-snug">
                  {post.title[locale]}
                </h2>
                <p className="text-sm sm:text-base text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
                  {post.summary[locale]}
                </p>
              </div>

              {/* Badges / Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {post.doi && (
                  <a
                    href={post.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-primary-light/60 dark:bg-brand-dark-elevated text-brand-primary dark:text-brand-gold font-mono-code text-xs font-semibold hover:underline"
                  >
                    <span>{post.doi.replace("https://doi.org/", "DOI: ")}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {post.repository && (
                  <a
                    href={post.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-border dark:border-brand-dark-border text-brand-ink-secondary dark:text-brand-dark-ink-secondary hover:text-brand-gold text-xs font-semibold"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>

              {/* Expandable Article Content */}
              {isExpanded && (
                <div className="pt-6 border-t border-brand-border dark:border-brand-dark-border space-y-6 animate-fadeIn">
                  {post.content.map((sec, sIdx) => {
                    if (sec.type === "heading" && sec.text) {
                      return (
                        <h3
                          key={sIdx}
                          className="font-display font-bold text-xl sm:text-2xl text-brand-ink dark:text-brand-dark-ink pt-4 border-t border-brand-border/40 dark:border-brand-dark-border/40"
                        >
                          {sec.text[locale]}
                        </h3>
                      );
                    }

                    if (sec.type === "paragraph" && sec.text) {
                      return (
                        <p
                          key={sIdx}
                          className="text-sm sm:text-base text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed"
                        >
                          {sec.text[locale]}
                        </p>
                      );
                    }

                    if (sec.type === "equation" && sec.equation) {
                      return (
                        <div
                          key={sIdx}
                          className="p-4 rounded-xl bg-brand-surface-subtle dark:bg-brand-dark-card border border-brand-border dark:border-brand-dark-border font-mono-code text-xs sm:text-sm text-center text-brand-primary dark:text-brand-gold overflow-x-auto"
                        >
                          {sec.equation}
                        </div>
                      );
                    }

                    if (sec.type === "code" && sec.code) {
                      const codeId = `${post.id}-${sIdx}`;
                      return (
                        <div
                          key={sIdx}
                          className="relative rounded-2xl overflow-hidden border border-brand-border dark:border-brand-dark-border bg-brand-dark-canvas text-brand-dark-ink"
                        >
                          <div className="flex items-center justify-between px-4 py-2 border-b border-brand-dark-border bg-brand-dark-surface text-xs text-brand-dark-ink-tertiary font-mono-code">
                            <span>Python 3 · Numerical Routine</span>
                            <button
                              onClick={() => handleCopy(sec.code!, codeId)}
                              className="inline-flex items-center gap-1 text-brand-gold hover:text-white"
                            >
                              {copiedCodeIndex === codeId ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  <span className="text-emerald-400">Copiado</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copiar</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="p-4 text-xs font-mono-code overflow-x-auto leading-relaxed text-emerald-300">
                            <code>{sec.code}</code>
                          </pre>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              )}

              {/* Action Toggle */}
              <div className="pt-4 border-t border-brand-border dark:border-brand-dark-border flex items-center justify-between">
                <button
                  onClick={() => toggleExpand(post.id)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-primary text-white dark:bg-brand-gold dark:text-brand-dark-canvas text-xs font-semibold tracking-pill uppercase hover:opacity-90 transition-opacity"
                >
                  <span>{isExpanded ? (locale === "es" ? "Contraer Artículo" : "Collapse Article") : t.blogPage.readMore}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <div className="hidden sm:flex items-center gap-1.5">
                  {post.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono-code text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary bg-brand-surface-subtle dark:bg-brand-dark-elevated"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </article>
          );
        })}
      </div>

    </div>
  );
}
