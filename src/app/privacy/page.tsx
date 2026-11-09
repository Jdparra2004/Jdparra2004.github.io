"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
          <Shield className="w-5 h-5 text-brand-gold" />
          <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
            Habeas Data · Colombia
          </span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-ink dark:text-brand-dark-ink uppercase">
          {t.legal.privacyTitle}
        </h1>
        <p className="text-xs font-mono-code text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">
          {t.legal.habeasDataNote}
        </p>
      </div>

      <div className="p-8 sm:p-10 rounded-3xl border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface space-y-6 text-sm text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-brand-ink dark:text-brand-dark-ink uppercase">
            1. Identificación del Responsable del Tratamiento
          </h2>
          <p>
            El responsable del tratamiento de los datos personales recolectados a través de este portal web es Juan David Parra Cantor, identificado con ORCID 0009-0008-0321-000X, domiciliado en Medellín, Colombia, estudiante de Ingeniería Química e investigador de la Universidad Pontificia Bolivariana.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-brand-ink dark:text-brand-dark-ink uppercase">
            2. Finalidad de la Recolección de Datos
          </h2>
          <p>
            Los datos personales suministrados voluntariamente en el formulario de contacto (nombre, correo electrónico, asunto y contenido del mensaje) se tratarán con la exclusiva finalidad de atender solicitudes académicas, consultas técnicas, invitaciones de investigación o propuestas de colaboración profesional.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-brand-ink dark:text-brand-dark-ink uppercase">
            3. Derechos de los Titulares (Ley 1581 de 2012)
          </h2>
          <p>
            De conformidad con la legislación colombiana, el titular de los datos tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales, así como a revocar la autorización otorgada en cualquier momento mediante comunicación remitida a través del canal de contacto.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-brand-ink dark:text-brand-dark-ink uppercase">
            4. Política de Cookies y Almacenamiento Local
          </h2>
          <p>
            Este sitio utiliza almacenamiento local técnico (`localStorage`) para recordar la preferencia de idioma (Español / Inglés) y la preferencia de visualización (modo oscuro / claro). No se emplean cookies de rastreo publicitario ni cesión a terceras partes sin autorización previa.
          </p>
        </section>
      </div>
    </div>
  );
}
