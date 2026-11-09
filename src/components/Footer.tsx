"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const { locale, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-canvas text-brand-ink-secondary dark:text-brand-dark-ink-secondary transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/perfil/logo.png"
                alt="Logo Juan David Parra"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display font-bold text-lg text-brand-ink dark:text-brand-dark-ink tracking-tight uppercase">
                Juan David Parra Cantor
              </span>
            </div>
            <p className="text-xs leading-relaxed text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary max-w-md">
              {locale === "es"
                ? "Ingeniería Química · Computación Científica en Python · Optimización Multiobjetivo · Transición Energética. Universidad Pontificia Bolivariana (Medellín, Colombia)."
                : "Chemical Engineering · Scientific Computing in Python · Multiobjective Optimization · Energy Transition. Universidad Pontificia Bolivariana (Medellín, Colombia)."}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold">
              <ShieldCheck className="w-4 h-4" />
              <span>ORCID: 0009-0008-0321-000X</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold tracking-widest text-brand-ink dark:text-brand-dark-ink uppercase">
              {locale === "es" ? "Navegación" : "Navigation"}
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-brand-primary dark:hover:text-brand-gold transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-primary dark:hover:text-brand-gold transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-primary dark:hover:text-brand-gold transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-primary dark:hover:text-brand-gold transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-primary dark:hover:text-brand-gold transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Direct Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold tracking-widest text-brand-ink dark:text-brand-dark-ink uppercase">
              {locale === "es" ? "Enlaces & Legal" : "Links & Legal"}
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://orcid.org/0009-0008-0321-000X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand-gold transition-colors"
                >
                  <span>{locale === "es" ? "Perfil ORCID" : "ORCID Profile"}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Jdparra2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand-gold transition-colors"
                >
                  <span>GitHub (@Jdparra2004)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-primary dark:hover:text-brand-gold transition-colors">
                  {t.legal.privacyTitle}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-primary dark:hover:text-brand-gold transition-colors">
                  {t.legal.termsTitle}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-brand-border/50 dark:border-brand-dark-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">
          <p className="text-center sm:text-left">
            © {currentYear} Juan David Parra Cantor · {locale === "es" ? "Ingeniería Química, Optimización & Computación Científica" : "Chemical Engineering, Optimization & Scientific Computing"}
          </p>
        </div>

      </div>
    </footer>
  );
}
