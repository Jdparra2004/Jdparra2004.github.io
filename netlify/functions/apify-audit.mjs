/**
 * ==============================================================================
 * NETLIFY SCHEDULED FUNCTION — Auditoría Semanal de Salud Web con Apify
 * Portafolio Profesional de Juan David Parra Cantor
 * ==============================================================================
 * Ejecuta una verificación semanal automatizada de las rutas públicas del sitio
 * utilizando el Actor ligero `apify/web-fetch` en la plataforma Apify.
 * Requiere configurar la variable de entorno secreta APIFY_TOKEN en Netlify.
 */

export default async (req) => {
    const apifyToken = process.env.APIFY_TOKEN;
    const siteUrl = process.env.URL || "https://juan-david-parra.netlify.app";

    if (!apifyToken) {
        return new Response(
            JSON.stringify({
                ok: false,
                message: "Variable de entorno APIFY_TOKEN no configurada en Netlify."
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    }

    const endpoint = "https://api.apify.com/v2/acts/apify~web-fetch/runs?waitForFinish=30";

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apifyToken}`
            },
            body: JSON.stringify({
                url: siteUrl
            })
        });

        const result = await response.json();

        return new Response(
            JSON.stringify({
                ok: response.ok,
                siteAudited: siteUrl,
                apifyRunId: result?.data?.id || null,
                status: result?.data?.status || "UNKNOWN"
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                ok: false,
                error: error.message
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};

export const config = {
    schedule: "@weekly"
};
