/* 
    BLOG.JS — Motor de publicaciones y artículos técnicos
    Autor: Juan David Parra Cantor (jaidi20)
    Descripción:
        Renderiza el listado de artículos en blog.html y la vista
        completa de lectura en blog/post.html a partir de data/posts.json.
*/

document.addEventListener("DOMContentLoaded", function () {
    const blogGrid = document.getElementById("blogGrid");
    const postContainer = document.getElementById("blogPostContainer");

    if (blogGrid) {
        cargarListadoArticulos(blogGrid);
    }

    if (postContainer) {
        cargarArticuloIndividual(postContainer);
    }

    function cargarListadoArticulos(contenedor) {
        fetch("data/posts.json")
            .then(res => res.json())
            .then(data => {
                const posts = Array.isArray(data) ? data : (data.posts || []);
                contenedor.innerHTML = "";

                posts.forEach(post => {
                    const article = document.createElement("article");
                    article.className = "project-card blog-card";

                    const tagsHtml = (post.tags || [])
                        .map(tag => `<span class="tech-tag">${tag}</span>`)
                        .join("");

                    article.innerHTML = `
                        <div class="project-card-meta">
                            <span class="project-status-badge">${post.category || "Artículo Técnico"}</span>
                            <span class="blog-date">${formatearFecha(post.date)} · ${post.readTime || "5 min"}</span>
                        </div>
                        <h3>${post.title}</h3>
                        <p>${post.summary}</p>
                        <div class="project-tags">${tagsHtml}</div>
                        <div class="project-card-actions">
                            <a href="blog/post.html?id=${encodeURIComponent(post.id)}" class="card-btn">
                                Leer artículo completo
                            </a>
                            ${post.doi ? `<a href="${post.doi}" target="_blank" rel="noopener noreferrer" class="card-link-secondary">Publicación DOI</a>` : ""}
                            ${!post.doi && post.repository ? `<a href="${post.repository}" target="_blank" rel="noopener noreferrer" class="card-link-secondary">Código en GitHub</a>` : ""}
                        </div>
                    `;

                    contenedor.appendChild(article);
                });
            })
            .catch(err => {
                contenedor.innerHTML = "<p>No fue posible cargar las publicaciones en este momento.</p>";
                console.error(err);
            });
    }

    function cargarArticuloIndividual(contenedor) {
        const params = new URLSearchParams(window.location.search);
        const postId = params.get("id");

        if (!postId) {
            contenedor.innerHTML = "<p>Artículo no especificado.</p>";
            return;
        }

        fetch("../data/posts.json")
            .then(res => res.json())
            .then(data => {
                const posts = Array.isArray(data) ? data : (data.posts || []);
                const post = posts.find(p => p.id === postId);

                if (!post) {
                    contenedor.innerHTML = "<p>El artículo solicitado no existe.</p>";
                    return;
                }

                document.title = `${post.title} — Juan David Parra Cantor`;

                let cuerpoHtml = "";
                if (Array.isArray(post.content)) {
                    cuerpoHtml = post.content.map(bloque => {
                        if (bloque.type === "heading") {
                            return `<h2>${bloque.text}</h2>`;
                        }
                        if (bloque.type === "equation") {
                            return `<div class="math-block">$$${bloque.text}$$</div>`;
                        }
                        if (bloque.type === "code") {
                            return `<pre class="code-block"><code>${escaparHtml(bloque.text)}</code></pre>`;
                        }
                        if (bloque.type === "list" && Array.isArray(bloque.items)) {
                            const items = bloque.items.map(i => `<li>${i}</li>`).join("");
                            return `<ul class="legal-list">${items}</ul>`;
                        }
                        return `<p>${bloque.text}</p>`;
                    }).join("");
                } else if (typeof post.body === "string") {
                    cuerpoHtml = post.body
                        .split(/\n\n+/)
                        .map(p => `<p>${p}</p>`)
                        .join("");
                }

                const tagsHtml = (post.tags || [])
                    .map(t => `<span class="tech-tag">${t}</span>`)
                    .join("");

                contenedor.innerHTML = `
                    <header class="legal-header">
                        <span class="legal-badge">${post.category || "Investigación"}</span>
                        <h1>${post.title}</h1>
                        <p class="legal-updated">
                            Por <strong>${post.author || "Juan David Parra Cantor (jaidi20)"}</strong> · ${formatearFecha(post.date)} · ${post.readTime || "Lectura técnica"}
                        </p>
                        <div class="project-tags" style="margin-top: 14px;">${tagsHtml}</div>
                    </header>

                    <div class="legal-content blog-article-body">
                        ${cuerpoHtml}
                    </div>

                    <footer class="blog-article-footer">
                        <div class="blog-references">
                            ${post.doi ? `<a href="${post.doi}" target="_blank" rel="noopener noreferrer" class="btn-primary">Consultar DOI oficial</a>` : ""}
                            ${post.repository ? `<a href="${post.repository}" target="_blank" rel="noopener noreferrer" class="btn-secondary">Ver repositorio en GitHub</a>` : ""}
                            <a href="../blog.html" class="btn-secondary">Volver al listado de artículos</a>
                        </div>
                    </footer>
                `;

                renderizarEcuaciones(contenedor);
            })
            .catch(err => {
                contenedor.innerHTML = "<p>Error al cargar el contenido del artículo.</p>";
                console.error(err);
            });
    }

    // Renderiza LaTeX con MathJax una vez que el contenido dinámico está en el DOM
    function renderizarEcuaciones(contenedor, intentos = 0) {
        if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
            window.MathJax.typesetPromise([contenedor]).catch(err => console.error(err));
        } else if (intentos < 50) {
            setTimeout(() => renderizarEcuaciones(contenedor, intentos + 1), 100);
        }
    }

    function formatearFecha(fechaIso) {
        if (!fechaIso) return "";
        const partes = fechaIso.split("-");
        if (partes.length !== 3) return fechaIso;
        const meses = [
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];
        const anio = partes[0];
        const mes = meses[parseInt(partes[1], 10) - 1] || partes[1];
        const dia = parseInt(partes[2], 10);
        return `${dia} de ${mes} de ${anio}`;
    }

    function escaparHtml(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
});
