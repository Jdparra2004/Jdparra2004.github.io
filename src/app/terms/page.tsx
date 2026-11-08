"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Scale, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-pill uppercase text-brand-gold hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{locale === "es" ? "Volver al inicio" : "Back to Home"}</span>
      </Link>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-brand-gold" />
          <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
            Marco Normativo
          </span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-ink dark:text-brand-dark-ink uppercase">
          {t.legal.termsTitle}
        </h1>
        <p className="text-xs font-mono-code text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">
          Ley 527 de 1999 (Mensajes de Datos) & Ley 23 de 1982 (Propiedad Intelectual)
        </p>
      </div>

      <div className="p-8 sm:p-10 rounded-3xl border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface space-y-6 text-sm text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-brand-ink dark:text-brand-dark-ink uppercase">
            1. Propiedad Intelectual y Derechos de Autor
          </h2>
          <p>
            Los contenidos, textos, modelos computacionales, figuras, abstracts científicos y proyectos publicados en este portal son autoría de Juan David Parra Cantor y sus respectivos coautores e instituciones académicas colaboradoras (Universidad Pontificia Bolivariana). El material bajo licencias de código abierto (MIT) se rige bajo los términos explicitados en sus repositorios oficiales en GitHub.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-brand-ink dark:text-brand-dark-ink uppercase">
            2. Citas Científicas y Reutilización Académica
          </h2>
          <p>
            Se autoriza el uso académico y cita de los resúmenes, ecuaciones y algoritmos siempre que se atribuya adecuadamente la autoría correspondiente y los identificadores persistentes asociados (por ejemplo, DOI: 10.24084/reepqj26-370 o referencia a las memorias del XXX COLAEIQ Honduras 2025).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-brand-ink dark:text-brand-dark-ink uppercase">
            3. Descargo de Responsabilidad
          </h2>
          <p>
            Los modelos numéricos, simulaciones y cuadernos interactivos se proporcionan con propósitos investigativos y educativos. Aunque se procura la máxima exactitud físico-química y matemática, el autor no se hace responsable por usos no autorizados o interpretaciones externas descontextualizadas de los resultados experimentales.
          </p>
        </section>
      </div>
    </div>
  );
}
