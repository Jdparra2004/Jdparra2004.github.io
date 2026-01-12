/* 
    CONTACT.JS — Lógica del formulario de contacto
    Autor: Juan David Parra Cantor
    Descripción:
        Maneja la interacción del formulario de contacto,
        valida los campos y envía el mensaje usando EmailJS.
 */

document.addEventListener("DOMContentLoaded", function () {

    /* Referencias al formulario y elementos */
    const form = document.getElementById("contactForm");
    const subjectSelect = document.getElementById("subject");
    const customSubjectContainer = document.getElementById("customSubjectContainer");
    const customSubjectInput = document.getElementById("customSubject");
    const statusText = document.getElementById("formStatus");
    const submitBtn = document.getElementById("submitBtn");

    /* 
    Control del campo "Otro" en Asunto
    */
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

    /* 
        Envío del formulario
    */
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        /* Estado visual inicial */
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando...";
        statusText.textContent = "";

        /* Resolver asunto final */
        const subjectFinal =
            subjectSelect.value === "Otro"
                ? customSubjectInput.value
                : subjectSelect.value;

        /* Parámetros enviados al template de EmailJS */
        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: subjectFinal,
            message: document.getElementById("message").value,
            time: new Date().toLocaleString()
        };

        /* Envío mediante EmailJS */
        emailjs
            .send(
                "service_1i5dw85",
                "template_754zb2j",
                templateParams
            )
            .then(function () {
                statusText.textContent = "Mensaje enviado correctamente.";
                statusText.style.color = "green";
                form.reset();
                customSubjectContainer.style.display = "none";
            })
            .catch(function () {
                statusText.textContent =
                    "Ocurrió un error al enviar el mensaje. Intenta nuevamente.";
                statusText.style.color = "red";
            })
            .finally(function () {
                submitBtn.disabled = false;
                submitBtn.textContent = "Enviar mensaje";
            });
    });
});
