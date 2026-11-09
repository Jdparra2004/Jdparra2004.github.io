"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, FileText } from "lucide-react";

export default function Header() {
  const { locale, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cvUrl =
    locale === "en"
      ? "/assets/docs/Juan David Parra Cantor - CV English.pdf"
      : "/assets/docs/Juan David Parra Cantor - CV.pdf";

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-brand-surface/90 dark:bg-brand-dark-canvas/90 border-b border-brand-border dark:border-brand-dark-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group py-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/perfil/logo.png"
            alt="Logo Juan David Parra Cantor"
            className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-tight tracking-tight text-brand-ink dark:text-brand-dark-ink group-hover:text-brand-primary dark:group-hover:text-brand-gold transition-colors">
              JUAN DAVID PARRA
            </span>
            <span className="text-[11px] font-semibold tracking-pill text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary uppercase">
              Ingeniería Química · UPB
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-pill uppercase transition-colors duration-150 py-1 border-b-2 ${
                  active
                    ? "text-brand-primary dark:text-brand-gold border-brand-primary dark:border-brand-gold"
                    : "text-brand-ink-secondary dark:text-brand-dark-ink-secondary border-transparent hover:text-brand-primary dark:hover:text-brand-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Controls & Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <ThemeToggle />

          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary dark:border-brand-gold/80 bg-brand-primary-light/40 dark:bg-brand-gold/10 text-brand-primary dark:text-brand-gold text-xs font-semibold tracking-pill uppercase hover:bg-brand-primary hover:text-white dark:hover:bg-brand-gold dark:hover:text-brand-dark-canvas transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV PDF</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-brand-border dark:border-brand-dark-border flex items-center justify-center text-brand-ink dark:text-brand-dark-ink hover:text-brand-gold hover:border-brand-gold transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold tracking-pill uppercase py-2 px-3 rounded-lg transition-colors ${
                    active
                      ? "bg-brand-primary text-white dark:bg-brand-gold dark:text-brand-dark-canvas"
                      : "text-brand-ink-secondary dark:text-brand-dark-ink-secondary hover:bg-brand-surface-subtle dark:hover:bg-brand-dark-elevated hover:text-brand-primary dark:hover:text-brand-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-brand-border dark:border-brand-dark-border flex flex-col gap-3">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-brand-primary text-white dark:bg-brand-gold dark:text-brand-dark-canvas text-xs font-semibold tracking-pill uppercase"
            >
              <FileText className="w-4 h-4" />
              <span>{locale === "es" ? "Descargar Curriculum (PDF)" : "Download Resume (PDF)"}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
