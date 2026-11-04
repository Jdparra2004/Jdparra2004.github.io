/* 
    CONTACT.JS — Lógica del formulario de contacto (Netlify Forms + FormSubmit gratuito)
    Autor: Juan David Parra Cantor
    Descripción:
        Valida el consentimiento expreso de Habeas Data (Ley 1581 de 2012),
        almacena el envío en Netlify Forms y despacha simultáneamente la
        notificación por correo electrónico de forma 100 % gratuita a
        juan.parrac@outlook.es sin requerir el plan Pro de Netlify.
*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const subjectSelect = document.getElementById("subject");
    const customSubjectContainer = document.getElementById("customSubjectContainer");
    const customSubjectInput = document.getElementById("customSubject");
    const statusText = document.getElementById("formStatus");
    const submitBtn = document.getElementById("submitBtn");

    subjectSelect.addEventListener("change", function () {
        if (subjectSelect.value === "Otro") {
            customSubjectContainer.style.display = "block";
            customSubjectInput.required = true;
        } else {
            customSubjectContainer.style.display = "none";
            customSubjectInput.required = false;
            customSubjectInput.value = "";
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const legalConsent = document.getElementById("legalConsent");
        if (!legalConsent || !legalConsent.checked) {
            statusText.textContent = "Debes autorizar el tratamiento de datos personales (Habeas Data) para continuar.";
            statusText.style.color = "var(--color-status-error, #C55A57)";
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando...";
        statusText.textContent = "";

        const formData = new FormData(form);
        const asuntoElegido = (subjectSelect.value === "Otro" && customSubjectInput.value.trim() !== "")
            ? customSubjectInput.value.trim()
            : subjectSelect.value;

        if (asuntoElegido) {
            formData.set("subject", asuntoElegido);
        }

        // 1. Registro en el panel de Netlify Forms (gratuito en plan Starter)
        const netlifyPromise = fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then(function (r) {
            if (!r.ok) throw new Error("Netlify error");
            return r;
        });

        // 2. Envío directo y gratuito al correo vía FormSubmit AJAX (sin plan Pro)
        const emailPayload = {
            _subject: "[Portafolio Web] " + (asuntoElegido || "Nuevo mensaje de contacto"),
            _template: "table",
            _captcha: "false",
            Nombre: formData.get("name"),
            Correo: formData.get("email"),
            Asunto: asuntoElegido,
            Mensaje: formData.get("message"),
            Habeas_Data: formData.get("legalConsent")
        };

        const emailPromise = fetch("https://formsubmit.co/ajax/juan.parrac@outlook.es", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(emailPayload)
        }).then(function (r) {
            if (!r.ok) throw new Error("Email error");
            return r.json();
        });

        Promise.allSettled([netlifyPromise, emailPromise])
            .then(function (results) {
                const netlifyOk = results[0].status === "fulfilled";
                const emailOk = results[1].status === "fulfilled";

                if (netlifyOk || emailOk) {
                    statusText.textContent = "Mensaje enviado y registrado correctamente. Te responderé a la brevedad.";
                    statusText.style.color = "var(--color-status-success, #2E7D5B)";
                    form.reset();
                    customSubjectContainer.style.display = "none";
                } else {
                    throw new Error("Ambos canales fallaron");
                }
            })
            .catch(function () {
                statusText.textContent = "No fue posible procesar el envío en este momento. También puedes escribir directamente a juan.parrac@outlook.es.";
                statusText.style.color = "var(--color-status-error, #C55A57)";
            })
            .finally(function () {
                submitBtn.disabled = false;
                submitBtn.textContent = "Enviar mensaje";
            });
    });
});
