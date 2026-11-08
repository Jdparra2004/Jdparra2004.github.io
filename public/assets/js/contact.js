/* 
    CONTACT.JS — Lógica del formulario de contacto (EmailJS + respaldo en Netlify Forms)
    Autor: Juan David Parra Cantor
    Descripción:
        Maneja la interacción del formulario de contacto, valida el
        consentimiento expreso de Habeas Data (Ley 1581 de 2012) y envía
        el mensaje usando EmailJS (correo principal + autorespuesta automática
        al usuario), guardando copia en Netlify Forms.
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

        const subjectFinal =
            subjectSelect.value === "Otro" && customSubjectInput.value.trim() !== ""
                ? customSubjectInput.value.trim()
                : subjectSelect.value;

        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: subjectFinal,
            message: document.getElementById("message").value,
            time: new Date().toLocaleString()
        };

        // Respaldo opcional silencioso en Netlify Forms
        try {
            const formData = new FormData(form);
            formData.set("subject", subjectFinal);
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            }).catch(function () {});
        } catch (_) {}

        // Envío principal mediante EmailJS (te llega a ti + autorespuesta al remitente)
        emailjs
            .send(
                "service_1i5dw85",      // Service ID
                "template_754zb2j",     // Template principal (admin)
                templateParams
            )
            .then(function () {
                // Autorespuesta automática al usuario
                emailjs.send(
                    "service_1i5dw85",
                    "template_rcpxxey",
                    templateParams
                );

                statusText.textContent = "Mensaje enviado correctamente. Revisaré tu solicitud y te responderé pronto.";
                statusText.style.color = "var(--color-status-success, #2E7D5B)";
                form.reset();
                customSubjectContainer.style.display = "none";
            })
            .catch(function () {
                statusText.textContent = "Ocurrió un error al enviar el mensaje. Intenta nuevamente.";
                statusText.style.color = "var(--color-status-error, #C55A57)";
            })
            .finally(function () {
                submitBtn.disabled = false;
                submitBtn.textContent = "Enviar mensaje";
            });
    });
});
