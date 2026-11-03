/* 
    CONTACT.JS — Lógica del formulario de contacto con Netlify Forms
    Autor: Juan David Parra Cantor
    Descripción:
        Valida el consentimiento expreso de Habeas Data (Ley 1581 de 2012)
        y procesa el envío nativo mediante Netlify Forms (URL-encoded POST).
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
        if (subjectSelect.value === "Otro" && customSubjectInput.value.trim() !== "") {
            formData.set("subject", customSubjectInput.value.trim());
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Respuesta no satisfactoria del servidor");
                }
                statusText.textContent = "Mensaje registrado correctamente. Te responderé a la brevedad.";
                statusText.style.color = "var(--color-status-success, #2E7D5B)";
                form.reset();
                customSubjectContainer.style.display = "none";
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
