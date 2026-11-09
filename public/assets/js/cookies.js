/**
 * ==============================================================================
 * COOKIES.JS — Sistema Estético de Gestión y Consentimiento de Cookies
 * Cumplimiento: Ley 1581 de 2012 (Habeas Data Colombia) y Directrices SIC
 * Portafolio: Juan David Parra Cantor
 * ==============================================================================
 */

(function () {
    const STORAGE_KEY = "jd_cookie_consent_v1";

    // Inyectar estilos CSS para el banner y modal
    function inyectarEstilos() {
        if (document.getElementById("cookie-consent-styles")) return;

        const style = document.createElement("style");
        style.id = "cookie-consent-styles";
        style.textContent = `
            /* Contenedor Flotante del Banner */
            .cookie-banner-wrapper {
                position: fixed;
                bottom: 24px;
                right: 24px;
                max-width: 440px;
                width: calc(100% - 48px);
                background: rgba(18, 20, 23, 0.94);
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
                border: 1px solid rgba(214, 169, 95, 0.28);
                border-radius: 16px;
                padding: 22px 24px;
                box-shadow: 0 20px 40px -8px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05);
                z-index: 99999;
                font-family: var(--font-body, 'Myriad Bengali', sans-serif);
                color: #F8F9FA;
                animation: cookieSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }

            @keyframes cookieSlideUp {
                from {
                    opacity: 0;
                    transform: translateY(24px) scale(0.97);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }

            .cookie-banner-header {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 10px;
            }

            .cookie-icon {
                color: #D6A95F;
                display: flex;
                align-items: center;
            }

            .cookie-title {
                font-family: var(--font-title, 'Bricolage Grotesque', sans-serif);
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0;
                color: #F8F9FA;
                letter-spacing: -0.01em;
            }

            .cookie-text {
                font-size: 0.92rem;
                line-height: 1.55;
                color: #C4CBD4;
                margin: 0 0 18px 0;
            }

            .cookie-text a {
                color: #D6A95F;
                text-decoration: underline;
                text-underline-offset: 3px;
                transition: color 0.2s ease;
            }

            .cookie-text a:hover {
                color: #E3A5A0;
            }

            .cookie-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }

            .cookie-btn-primary {
                flex: 1 1 120px;
                background: #1E3A5F;
                color: #FFFFFF;
                border: 1px solid rgba(214, 169, 95, 0.4);
                padding: 10px 16px;
                border-radius: 8px;
                font-size: 0.88rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                text-align: center;
                min-height: 40px;
            }

            .cookie-btn-primary:hover {
                background: #2A4E7E;
                transform: translateY(-1px);
                border-color: #D6A95F;
            }

            .cookie-btn-secondary {
                flex: 1 1 110px;
                background: rgba(255, 255, 255, 0.06);
                color: #F8F9FA;
                border: 1px solid rgba(255, 255, 255, 0.12);
                padding: 10px 14px;
                border-radius: 8px;
                font-size: 0.88rem;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
                text-align: center;
                min-height: 40px;
            }

            .cookie-btn-secondary:hover {
                background: rgba(255, 255, 255, 0.12);
                color: #FFFFFF;
            }

            .cookie-btn-config {
                width: 100%;
                background: transparent;
                border: none;
                color: #8A94A6;
                padding: 6px 0 0 0;
                font-size: 0.82rem;
                text-decoration: underline;
                cursor: pointer;
                text-align: center;
                transition: color 0.2s ease;
            }

            .cookie-btn-config:hover {
                color: #D6A95F;
            }

            /* Modal de Configuración Granular */
            .cookie-modal-overlay {
                position: fixed;
                inset: 0;
                background: rgba(10, 12, 15, 0.75);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                z-index: 100000;
                animation: cookieFadeIn 0.25s ease forwards;
            }

            @keyframes cookieFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            .cookie-modal-card {
                background: #181B1F;
                border: 1px solid rgba(214, 169, 95, 0.35);
                border-radius: 18px;
                max-width: 520px;
                width: 100%;
                padding: 28px;
                color: #F8F9FA;
                box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.6);
            }

            .cookie-modal-card h3 {
                font-family: var(--font-title, 'Bricolage Grotesque', sans-serif);
                font-size: 1.35rem;
                margin: 0 0 8px 0;
                color: #F8F9FA;
            }

            .cookie-modal-intro {
                font-size: 0.92rem;
                color: #C4CBD4;
                line-height: 1.5;
                margin-bottom: 20px;
            }

            .cookie-pref-item {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 16px;
                padding: 14px 0;
                border-top: 1px solid rgba(255, 255, 255, 0.08);
            }

            .cookie-pref-info h4 {
                font-size: 0.98rem;
                margin: 0 0 4px 0;
                color: #FFFFFF;
            }

            .cookie-pref-info p {
                font-size: 0.84rem;
                color: #8A94A6;
                margin: 0;
                line-height: 1.45;
            }

            .cookie-switch {
                position: relative;
                display: inline-block;
                width: 44px;
                height: 24px;
                flex-shrink: 0;
            }

            .cookie-switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .cookie-slider {
                position: absolute;
                cursor: pointer;
                top: 0; left: 0; right: 0; bottom: 0;
                background-color: #333A44;
                transition: .3s;
                border-radius: 24px;
            }

            .cookie-slider:before {
                position: absolute;
                content: "";
                height: 18px;
                width: 18px;
                left: 3px;
                bottom: 3px;
                background-color: white;
                transition: .3s;
                border-radius: 50%;
            }

            input:checked + .cookie-slider {
                background-color: #D6A95F;
            }

            input:disabled + .cookie-slider {
                opacity: 0.6;
                cursor: not-allowed;
            }

            input:checked + .cookie-slider:before {
                transform: translateX(20px);
            }

            .cookie-modal-actions {
                display: flex;
                gap: 12px;
                justify-content: flex-end;
                margin-top: 24px;
                padding-top: 16px;
                border-top: 1px solid rgba(255, 255, 255, 0.08);
            }

            @media (max-width: 600px) {
                .cookie-banner-wrapper {
                    bottom: 12px;
                    right: 12px;
                    left: 12px;
                    width: auto;
                    padding: 18px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Obtener configuración guardada
    function obtenerConsentimiento() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    // Guardar consentimiento
    function guardarConsentimiento(config) {
        try {
            const data = {
                essential: true,
                analytics: !!config.analytics,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            cerrarBanner();
            cerrarModal();
        } catch (e) {
            console.error("Error al guardar consentimiento de cookies:", e);
        }
    }

    function cerrarBanner() {
        const banner = document.getElementById("jd-cookie-banner");
        if (banner) banner.remove();
    }

    function cerrarModal() {
        const modal = document.getElementById("jd-cookie-modal");
        if (modal) modal.remove();
    }

    // Renderizar modal de preferencias
    function abrirConfiguracionCookies() {
        inyectarEstilos();
        cerrarModal();

        const config = obtenerConsentimiento() || { essential: true, analytics: false };

        const modal = document.createElement("div");
        modal.id = "jd-cookie-modal";
        modal.className = "cookie-modal-overlay";
        modal.innerHTML = `
            <div class="cookie-modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-cookie-title">
                <h3 id="modal-cookie-title">Preferencias de Privacidad y Cookies</h3>
                <p class="cookie-modal-intro">
                    En cumplimiento de la <strong>Ley 1581 de 2012</strong> (Habeas Data) y las directrices de la <strong>Superintendencia de Industria y Comercio (SIC)</strong>, puedes gestionar de forma transparente qué cookies permites almacenar en tu navegador.
                </p>

                <div class="cookie-pref-item">
                    <div class="cookie-pref-info">
                        <h4>Cookies Técnicas Necesarias</h4>
                        <p>Imprescindibles para el funcionamiento seguro de la web, persistencia de sesión y preferencias de visualización. No pueden desactivarse.</p>
                    </div>
                    <label class="cookie-switch">
                        <input type="checkbox" checked disabled>
                        <span class="cookie-slider"></span>
                    </label>
                </div>

                <div class="cookie-pref-item">
                    <div class="cookie-pref-info">
                        <h4>Cookies de Rendimiento y Analítica</h4>
                        <p>Recopilan datos anónimos de navegación para optimizar la velocidad y entender qué proyectos técnicos interesan más a los visitantes.</p>
                    </div>
                    <label class="cookie-switch">
                        <input type="checkbox" id="pref-analytics" ${config.analytics ? "checked" : ""}>
                        <span class="cookie-slider"></span>
                    </label>
                </div>

                <div class="cookie-modal-actions">
                    <button type="button" class="cookie-btn-secondary" id="btn-cancel-modal">Cerrar</button>
                    <button type="button" class="cookie-btn-primary" id="btn-save-modal">Guardar Preferencias</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector("#btn-cancel-modal").addEventListener("click", cerrarModal);
        modal.querySelector("#btn-save-modal").addEventListener("click", function () {
            const analyticsConsent = modal.querySelector("#pref-analytics").checked;
            guardarConsentimiento({ analytics: analyticsConsent });
        });

        modal.addEventListener("click", function (e) {
            if (e.target === modal) cerrarModal();
        });
    }

    // Renderizar Banner flotante elegante
    function mostrarBanner() {
        if (obtenerConsentimiento()) return;

        inyectarEstilos();

        const banner = document.createElement("div");
        banner.id = "jd-cookie-banner";
        banner.className = "cookie-banner-wrapper";
        banner.setAttribute("role", "region");
        banner.setAttribute("aria-label", "Consentimiento de cookies");
        banner.innerHTML = `
            <div class="cookie-banner-header">
                <span class="cookie-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                        <path d="M8.5 8.5v.01"></path>
                        <path d="M16 15.5v.01"></path>
                        <path d="M12 12v.01"></path>
                        <path d="M11 17v.01"></path>
                        <path d="M7 13v.01"></path>
                    </svg>
                </span>
                <h3 class="cookie-title">Gestión de Privacidad & Cookies</h3>
            </div>
            <p class="cookie-text">
                Este sitio utiliza cookies para garantizar una navegación técnica segura y medir el rendimiento del portafolio. Respetamos tu privacidad conforme a la Ley 1581 de 2012 (Habeas Data Colombia). Conoce más en nuestra <a href="politica-privacidad.html">Política de Tratamiento de Datos</a>.
            </p>
            <div class="cookie-buttons">
                <button type="button" class="cookie-btn-primary" id="btn-cookie-accept-all">Aceptar todas</button>
                <button type="button" class="cookie-btn-secondary" id="btn-cookie-essential-only">Solo esenciales</button>
                <button type="button" class="cookie-btn-config" id="btn-cookie-open-config">Personalizar cookies</button>
            </div>
        `;

        document.body.appendChild(banner);

        banner.querySelector("#btn-cookie-accept-all").addEventListener("click", function () {
            guardarConsentimiento({ analytics: true });
        });

        banner.querySelector("#btn-cookie-essential-only").addEventListener("click", function () {
            guardarConsentimiento({ analytics: false });
        });

        banner.querySelector("#btn-cookie-open-config").addEventListener("click", function () {
            abrirConfiguracionCookies();
        });
    }

    // Exponer función global para abrir configuración desde el footer
    window.abrirConfiguracionCookies = abrirConfiguracionCookies;

    // Inicializar al cargar el DOM
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", mostrarBanner);
    } else {
        mostrarBanner();
    }
})();
