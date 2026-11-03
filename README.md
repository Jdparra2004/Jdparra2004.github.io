# Portafolio Profesional e Investigativo — Juan David Parra Cantor

Sitio web público, portafolio de investigación y blog técnico de **Juan David Parra Cantor** — Ingeniería Química (Universidad Pontificia Bolivariana, Medellín), Computación Científica en Python, Optimización Multiobjetivo y Transición Energética.

- **ORCID**: [0009-0008-0321-000X](https://orcid.org/0009-0008-0321-000X)
- **LinkedIn**: [linkedin.com/in/juan-david-parra](https://www.linkedin.com/in/juan-david-parra/)
- **GitHub**: [github.com/Jdparra2004](https://github.com/Jdparra2004)
- **Publicación Destacada**: *Social Impact in the Optimization of Logistics Chains for Waste-Derived Biofuels: Comparison between Mono- and Multi-Objective Approaches in Colombia* — DOI: [10.24084/reepqj26-370](https://doi.org/10.24084/reepqj26-370)

---

## Arquitectura del Repositorio

```text
/
├── index.html                  # Página de inicio y resumen ejecutivo
├── about.html                  # Trayectoria científica, académica y distinciones
├── projects.html               # Catálogo dinámico de proyectos e investigación
├── blog.html                   # Listado de artículos técnicos y notas de investigación
├── contacto.html               # Formulario nativo Netlify Forms con consentimiento Habeas Data
├── politica-privacidad.html    # Política de Tratamiento de Datos (Ley 1581 de 2012 / SIC)
├── terminos-condiciones.html   # Términos y Condiciones de Uso (Ley 1480 de 2011)
├── 404.html                    # Página de error personalizada
├── DESIGN.md                   # Especificación técnica de tokens de diseño (Stitch Standard)
├── MANUAL_DE_MARCA.md          # Manual oficial de identidad visual, voz y tono
├── netlify.toml                # Configuración de despliegue, redirecciones y cabeceras HTTP
├── admin/
│   ├── index.html              # Panel privado de administración editorial (Decap CMS + Netlify Identity)
│   └── config.yml              # Esquema de colecciones para editar blog y proyectos desde el navegador
├── blog/
│   └── post.html               # Plantilla dinámica de lectura de artículos técnicos
├── projects/
│   └── project.html            # Plantilla dinámica de detalle de proyecto
├── data/
│   ├── projects.json           # Base de datos estructurada de proyectos
│   └── posts.json              # Base de datos estructurada de artículos del blog
├── netlify/
│   └── functions/
│       └── apify-audit.mjs     # Función programada semanal de auditoría web con Apify
└── assets/
    ├── css/
    │   ├── theme.css           # Variables de marca, tokens cromáticos y declaraciones @font-face
    │   └── styles.css          # Estilos de maquetación, componentes y páginas legales
    ├── js/
    │   ├── blog.js             # Motor de renderizado del blog y artículos
    │   ├── projects.js         # Renderizado de tarjetas de proyectos
    │   ├── project.js          # Vista detallada de proyecto individual
    │   ├── contact.js          # Envío AJAX para Netlify Forms y validación Habeas Data
    │   └── cookies.js          # Gestión y consentimiento granular de cookies
    ├── fonts/                  # Fuentes locales optimizadas (Bricolage Grotesque, Myriad Bengali, Dancing Script)
    ├── img/                    # Logotipo, fotografía de perfil, favicons y capturas de proyectos
    └── docs/                   # Hoja de vida en formato PDF
```

---

## Gestión Editorial del Blog (`/admin`)

El blog es de lectura pública, mientras que la edición está restringida mediante **Decap CMS + Netlify Identity** en la ruta `/admin/`:

1. En el panel de Netlify del proyecto, activar **Identity** y configurar el registro como **Invite only** (Solo por invitación).
2. Activar **Git Gateway** dentro de `Identity > Services`.
3. Invitar al correo del autor (`juan.parrac@outlook.es` / `jdparra2004@gmail.com`) con el nombre visible `jaidi20`.
4. Al abrir el enlace de invitación recibido por correo, definir la contraseña personal de acceso.

---

## Cumplimiento Normativo Colombiano

El sitio cumple con la normativa colombiana vigente supervisada por la **Superintendencia de Industria y Comercio (SIC)**:
- **Ley 1581 de 2012 y Decreto 1377 de 2013**: Política de Tratamiento de Datos Personales y casilla de autorización expresa no premarcada en el formulario de contacto.
- **Gestión de Cookies**: Banner y modal de configuración granular (esenciales y analíticas) con persistencia en navegador.
- **Ley 1480 de 2011 (Art. 50)**: Términos y condiciones de uso y enlace institucional a `https://www.sic.gov.co`.
