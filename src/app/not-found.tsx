"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <span className="font-display font-extrabold text-7xl sm:text-9xl text-brand-primary dark:text-brand-gold">
          404
        </span>
        <h1 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-brand-ink dark:text-brand-dark-ink">
          Página no encontrada
        </h1>
        <p className="text-xs sm:text-sm text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
          La ruta que estás buscando no existe o fue reorganizada en la nueva arquitectura de Next.js.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary text-white dark:bg-brand-gold dark:text-brand-dark-canvas text-xs font-semibold tracking-pill uppercase shadow-md hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
