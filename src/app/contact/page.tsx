"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const { locale, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    customSubject: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const subjectOptions = [
    {
      value: "Colaboración en investigación",
      label: locale === "es" ? "Colaboración en investigación" : "Research Collaboration",
    },
    {
      value: "Proyecto profesional / Consultoría",
      label: locale === "es" ? "Proyecto profesional / Consultoría" : "Professional Project / Consulting",
    },
    {
      value: "Asesoría académica (Química / Python)",
      label: locale === "es" ? "Asesoría académica (Química / Python)" : "Academic Mentoring (Chemistry / Python)",
    },
    {
      value: "Consulta técnica sobre repositorio",
      label: locale === "es" ? "Consulta técnica sobre repositorio" : "Technical Inquiry about Repository",
    },
    {
      value: "Consulta / Reclamo Habeas Data (PQR)",
      label: locale === "es" ? "Consulta / Reclamo Habeas Data (PQR)" : "Data Privacy (Habeas Data) Inquiry",
    },
    {
      value: "Otro",
      label: locale === "es" ? "Otro asunto" : "Other subject",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      setStatus("error");
      setErrorMessage(
        locale === "es"
          ? "Debes aceptar la política de tratamiento de datos personales para continuar."
          : "You must accept the personal data processing policy to proceed."
      );
      return;
    }

    setStatus("sending");

    const subjectFinal =
      formData.subject === "Otro" && formData.customSubject.trim() !== ""
        ? formData.customSubject.trim()
        : formData.subject || (locale === "es" ? "Contacto general desde el portafolio" : "Portfolio General Inquiry");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: subjectFinal,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      // 1. Envío principal mediante EmailJS (directo a tu bandeja de entrada)
      await emailjs.send(
        "service_1i5dw85",     // Service ID oficial
        "template_754zb2j",    // Template principal (admin)
        templateParams,
        "gj8TMdXOaWDqBYHnp"    // Public Key
      );

      // 2. Autorespuesta automática al remitente (no bloqueante)
      emailjs
        .send(
          "service_1i5dw85",
          "template_rcpxxey",
          templateParams,
          "gj8TMdXOaWDqBYHnp"
        )
        .catch(() => {});

      // 3. Respaldo silencioso en Netlify Forms
      try {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "contact",
            name: formData.name,
            email: formData.email,
            subject: subjectFinal,
            message: formData.message,
            consent: "accepted",
          }).toString(),
        }).catch(() => {});
      } catch (_) {}

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        customSubject: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      console.error("EmailJS Error:", err);

      // Fallback secundario vía REST API de EmailJS
      try {
        const restRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_1i5dw85",
            template_id: "template_754zb2j",
            user_id: "gj8TMdXOaWDqBYHnp",
            template_params: templateParams,
          }),
        });

        if (restRes.ok) {
          setStatus("success");
          setFormData({
            name: "",
            email: "",
            subject: "",
            customSubject: "",
            message: "",
            consent: false,
          });
          return;
        }
      } catch (_) {}

      setStatus("error");
      setErrorMessage(
        locale === "es"
          ? "Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo o escríbeme directamente."
          : "An error occurred while sending your message. Please try again or reach out directly."
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-14">
      
      {/* Header */}
      <div className="space-y-3 max-w-2xl">
        <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
          {t.contactPage.eyebrow}
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-brand-ink dark:text-brand-dark-ink uppercase tracking-tight">
          {t.contactPage.title}
        </h1>
        <p className="text-sm sm:text-base text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
          {t.contactPage.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold tracking-pill uppercase text-brand-ink dark:text-brand-dark-ink">
                  {t.contactPage.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contactPage.namePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface text-xs text-brand-ink dark:text-brand-dark-ink focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold tracking-pill uppercase text-brand-ink dark:text-brand-dark-ink">
                  {t.contactPage.emailLabel} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contactPage.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface text-xs text-brand-ink dark:text-brand-dark-ink focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold tracking-pill uppercase text-brand-ink dark:text-brand-dark-ink">
                {t.contactPage.subjectLabel}
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface text-xs text-brand-ink dark:text-brand-dark-ink focus:outline-none focus:border-brand-gold transition-colors"
              >
                <option value="">
                  {locale === "es" ? "Selecciona una línea de interés..." : "Select an area of interest..."}
                </option>
                {subjectOptions.map((opt, i) => (
                  <option key={i} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {formData.subject === "Otro" && (
              <div className="space-y-1.5 animate-fadeIn">
                <label className="block text-xs font-semibold tracking-pill uppercase text-brand-gold">
                  {locale === "es" ? "Especifica el asunto *" : "Specify Subject *"}
                </label>
                <input
                  type="text"
                  required
                  value={formData.customSubject}
                  onChange={(e) => setFormData({ ...formData, customSubject: e.target.value })}
                  placeholder={locale === "es" ? "Escribe el asunto específico..." : "Describe the specific subject..."}
                  className="w-full px-4 py-3 rounded-lg border border-brand-gold/60 bg-brand-surface dark:bg-brand-dark-surface text-xs text-brand-ink dark:text-brand-dark-ink focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold tracking-pill uppercase text-brand-ink dark:text-brand-dark-ink">
                {t.contactPage.messageLabel} *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.contactPage.messagePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-brand-border dark:border-brand-dark-border bg-brand-surface dark:bg-brand-dark-surface text-xs text-brand-ink dark:text-brand-dark-ink focus:outline-none focus:border-brand-gold transition-colors resize-y"
              />
            </div>

            {/* Legal consent check */}
            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="consentCheck"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-0.5 rounded border-brand-border text-brand-primary focus:ring-brand-gold"
              />
              <label htmlFor="consentCheck" className="text-xs text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
                {t.contactPage.privacyConsent}{" "}
                <Link href="/privacy" className="text-brand-gold underline hover:text-white">
                  {t.contactPage.privacyLink}
                </Link>
              </label>
            </div>

            {/* Status alerts */}
            {status === "success" && (
              <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{t.contactPage.sentSuccess}</span>
              </div>
            )}

            {status === "error" && (
              <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage || t.contactPage.sentError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-3.5 rounded-full bg-brand-primary text-white hover:bg-brand-primary-hover dark:bg-brand-gold dark:text-brand-dark-canvas dark:hover:bg-brand-gold-hover font-semibold text-xs tracking-pill uppercase transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{status === "sending" ? t.contactPage.sending : t.contactPage.sendButton}</span>
            </button>
          </form>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-5 space-y-8 pt-2 lg:pl-6 lg:border-l border-brand-border/60 dark:border-brand-dark-border/60">
          
          <div className="space-y-2">
            <h3 className="font-display font-bold text-lg text-brand-ink dark:text-brand-dark-ink uppercase tracking-tight">
              {t.contactPage.channelsTitle}
            </h3>
            <p className="text-xs text-brand-ink-secondary dark:text-brand-dark-ink-secondary leading-relaxed">
              {locale === "es"
                ? "Comunicación directa para iniciativas académicas, proyectos conjuntos y consultas de investigación."
                : "Direct channels for academic research, collaborative ventures, and technical inquiries."}
            </p>
          </div>

          <div className="space-y-6 text-xs divide-y divide-brand-border/50 dark:divide-brand-dark-border/50">
            
            <div className="pt-4 first:pt-0 space-y-1">
              <span className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider block">
                Identificador Científico
              </span>
              <a
                href="https://orcid.org/0009-0008-0321-000X"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-ink dark:text-brand-dark-ink hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
              >
                <span>ORCID: 0009-0008-0321-000X</span>
                <ArrowUpRight className="w-3 h-3 text-brand-gold" />
              </a>
              <p className="text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">
                {t.contactPage.orcidDesc}
              </p>
            </div>

            <div className="pt-4 space-y-1">
              <span className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider block">
                Código & Repositorios
              </span>
              <a
                href="https://github.com/Jdparra2004"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-ink dark:text-brand-dark-ink hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
              >
                <span>github.com/Jdparra2004</span>
                <ArrowUpRight className="w-3 h-3 text-brand-gold" />
              </a>
              <p className="text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">
                {locale === "es" ? "Algoritmos numéricos y proyectos de código abierto" : "Numerical algorithms and open source projects"}
              </p>
            </div>

            <div className="pt-4 space-y-1">
              <span className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider block">
                Ubicación & Afiliación
              </span>
              <span className="font-medium text-brand-ink dark:text-brand-dark-ink block">
                Universidad Pontificia Bolivariana (UPB)
              </span>
              <p className="text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary">
                {t.contactPage.locationDesc}
              </p>
            </div>

          </div>

          <p className="text-xs text-brand-ink-tertiary dark:text-brand-dark-ink-tertiary pt-4 border-t border-brand-border/50 dark:border-brand-dark-border/50 leading-relaxed">
            {t.contactPage.responseCommitment}
          </p>

        </div>

      </div>

    </div>
  );
}
