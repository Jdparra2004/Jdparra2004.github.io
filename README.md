# Portafolio Profesional e Investigativo — Juan David Parra Cantor

Sitio web y portafolio científico de **Juan David Parra Cantor** — Ingeniería Química (Universidad Pontificia Bolivariana, Medellín), Computación Científica en Python, Optimización Multiobjetivo y Transición Energética.

- **ORCID**: [0009-0008-0321-000X](https://orcid.org/0009-0008-0321-000X)
- **LinkedIn**: [linkedin.com/in/juan-david-parra](https://www.linkedin.com/in/juan-david-parra/)
- **GitHub**: [github.com/Jdparra2004](https://github.com/Jdparra2004)
- **Publicación Destacada**: *Social Impact in the Optimization of Logistics Chains for Waste-Derived Biofuels: Comparison between Mono- and Multi-Objective Approaches in Colombia* — DOI: [10.24084/reepqj26-370](https://doi.org/10.24084/reepqj26-370)

---

## 🚀 Arquitectura Tecnológica (Next.js & TypeScript)

El sitio fue migrado de maquetación HTML estática a una arquitectura moderna y modular basada en **Next.js 14 (App Router)** con exportación estática (`output: 'export'`), permitiendo un rendimiento ultra-rápido, código estructurado en componentes y compatibilidad total con **GitHub Pages** y **Netlify**.

### Stack Principal
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Site Generation)
- **Librería UI**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 3](https://tailwindcss.com/) con tokens de diseño oficiales
- **Tipografías**: Bricolage Grotesque, Inter, Myriad Bengali, JetBrains Mono
- **Iconografía**: [Lucide React](https://lucide.dev/) + SVG nativos
- **Despliegue**: GitHub Pages (GitHub Actions) & Netlify (`publish = "out"`)

---

## 📁 Estructura del Proyecto

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Flujo CI/CD automatizado para GitHub Pages
├── archive-legacy-html/        # Respaldo histórico de archivos HTML anteriores
├── netlify/
│   └── functions/
│       └── apify-audit.mjs     # Función serverless de auditoría programada
├── public/
│   ├── admin/                  # CMS editorial (Decap CMS)
│   ├── assets/
│   │   ├── docs/               # Artículos, carteles COLAEIQ y CV en PDF
│   │   ├── fonts/              # Fuentes tipográficas locales optimizadas
│   │   └── img/
│   │       ├── perfil/         # Logotipo y fotografía oficial
│   │       └── proyectos/      # Gráficos reales de simulación (difusión, esfuerzos)
│   └── .nojekyll               # Configuración para GitHub Pages
├── src/
│   ├── app/                    # Rutas de Next.js App Router
│   │   ├── about/page.tsx      # Perfil académico, semillero A+D y distinciones
│   │   ├── blog/page.tsx       # Artículos con ecuaciones LaTeX y código Python
│   │   ├── contact/page.tsx    # Formulario con validación y canales directos
│   │   ├── privacy/page.tsx    # Política de Tratamiento de Datos (Habeas Data)
│   │   ├── projects/page.tsx   # Catálogo interactivo con filtros por categoría
│   │   ├── terms/page.tsx      # Términos y condiciones legales
│   │   ├── globals.css         # Estilos globales, variables y fondos con profundidad
│   │   ├── layout.tsx          # Estructura raíz con Header, Footer y Providers
│   │   ├── not-found.tsx       # Página de error 404 personalizada
│   │   └── page.tsx            # Página de inicio con hero, stats y destacados
│   ├── components/             # Componentes reutilizables
│   │   ├── Header.tsx          # Barra de navegación con logo y controles
│   │   ├── Footer.tsx          # Pie de página minimalista
│   │   ├── Hero.tsx            # Presentación editorial en 2 columnas
│   │   ├── StatsBar.tsx        # Métricas de impacto y reconocimientos
│   │   ├── Statement.tsx       # Franja de filosofía científica
│   │   ├── ProjectCard.tsx     # Tarjeta de proyecto con categorización real
│   │   ├── ProjectModal.tsx    # Modal interactivo con descargas oficiales
│   │   ├── LanguageSwitch.tsx  # Conmutador de idioma (ES / EN)
│   │   └── ThemeToggle.tsx     # Conmutador de modo claro / oscuro
│   ├── context/
│   │   └── LanguageContext.tsx # Estado de internacionalización y tema (localStorage)
│   └── data/
│       ├── projectsData.ts     # Base de datos tipada de proyectos e investigaciones
│       ├── postsData.ts        # Base de datos de artículos y papers científicos
│       └── translations.ts     # Diccionario bilingüe completo (Español / Inglés)
├── next.config.mjs             # Configuración de exportación estática de Next.js
├── netlify.toml                # Configuración de compilación y cabeceras en Netlify
├── tailwind.config.ts          # Tokens de marca (Azul Acero, Dorado, Coral, Pizarra)
└── tsconfig.json               # Configuración de TypeScript
```

---

## 🌐 Funcionalidades Principales

1. **Bilingüismo Completo (ES / EN)**:
   - Todo el contenido de investigación, papers, bio y textos de interfaz está traducido con rigor técnico al inglés.
   - Selector interactivo con persistencia automática de preferencias en el navegador.

2. **Estética Oficial y Fondos con Profundidad**:
   - Paleta de marca: Azul Acero Profundo (`#1E3A5F`), Dorado (`#D6A95F`), Coral (`#E3A5A0`).
   - Lienzo refinado en tonos grafito/pizarra (`#161A22` / `#1D222B`) con degradados radiales sutiles para evitar fondos planos artificiales.
   - Modo claro alternativo disponible mediante el botón de tema.

3. **Investigaciones y Desarrollos Reales**:
   - **Optimización Multiobjetivo**: Publicación indexada en RE&PQJ (DOI: [10.24084/reepqj26-370](https://doi.org/10.24084/reepqj26-370)) y 1.° Puesto Multicampus UPB.
   - **Revalorización de Residuos con Biorreactores**: Ganador del Concurso de Carteles Científicos del XXX COLAEIQ Honduras 2025.
   - **Simulación Numérica de Difusión de Hidrógeno**: Gráficos reales de perfiles de difusión y esfuerzos radiales/tangenciales generados en Python.
   - **Repositorios de Aprendizaje & Algoritmia**: Interpolación RBF y cuadernos de modelado termodinámico.

4. **Diseño Responsive & Accesible**:
   - Adaptación fluida para dispositivos móviles, tablets y monitores ultra-anchos.
   - Menú móvil desplegable accesible.

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local (http://localhost:3000)
npm run dev

# Compilar y exportar el sitio estático para producción (/out)
npm run build

# Previsualizar el build de producción localmente
npm run start
```

---

## 📦 Despliegue Continuo (CI/CD)

- **GitHub Pages**: Al hacer push a la rama `main` (o mediante workflow dispatch), GitHub Actions ejecuta `.github/workflows/deploy.yml`, compila Next.js y publica automáticamente la carpeta `out/`.
- **Netlify**: Vinculado al repositorio; lee `netlify.toml`, ejecuta `npm run build` y publica el directorio `out` con cabeceras de caché inmutable para assets estáticos.

---

## ⚖️ Cumplimiento Normativo

El sitio web opera bajo la legislación colombiana vigente supervisada por la **Superintendencia de Industria y Comercio (SIC)**:
- **Ley 1581 de 2012 y Decreto 1377 de 2013 (Habeas Data)**: Política de Tratamiento de Datos Personales en el formulario de contacto.
- **Ley 527 de 1999**: Validez de mensajes de datos y comercio electrónico.
- **Ley 23 de 1982**: Propiedad intelectual y citas de investigación académica.
