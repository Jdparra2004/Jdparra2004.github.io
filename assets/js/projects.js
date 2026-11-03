/* 
    PROJECTS.JS — Listado de proyectos
    Autor: Juan David Parra Cantor
    Descripción:
        Carga los proyectos desde data/projects.json
        y los muestra como tarjetas técnicas en projects.html
*/

document.addEventListener("DOMContentLoaded", function () {
    const projectsGrid = document.getElementById("projectsGrid");
    if (!projectsGrid) return;

    fetch("data/projects.json")
        .then(response => response.json())
        .then(data => {
            const projects = Array.isArray(data) ? data : (data.projects || []);
            projectsGrid.innerHTML = "";

            projects.forEach(project => {
                const card = document.createElement("article");
                card.classList.add("project-card");

                const tagsHtml = (project.technologies || [])
                    .slice(0, 5)
                    .map(tech => `<span class="tech-tag">${tech}</span>`)
                    .join("");

                card.innerHTML = `
                    <div class="project-card-meta">
                        <span class="project-status-badge">${project.status || "Activo"}</span>
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.shortDescription}</p>
                    <div class="project-tags">${tagsHtml}</div>
                    <div class="project-card-actions">
                        <a href="projects/project.html?id=${encodeURIComponent(project.id)}" class="card-btn">
                            Explorar documentación
                        </a>
                        ${project.repository ? `<a href="${project.repository}" target="_blank" rel="noopener noreferrer" class="card-link-secondary">Repositorio</a>` : ""}
                    </div>
                `;

                projectsGrid.appendChild(card);
            });
        })
        .catch(error => {
            projectsGrid.innerHTML = "<p>No fue posible cargar el catálogo de proyectos en este momento.</p>";
            console.error(error);
        });
});
