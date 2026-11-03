# MANUAL DE IDENTIDAD DE MARCA Y GUÍA DE ESTILOS
**Portafolio Profesional y Plataforma Pública**  
**Juan David Parra Cantor — Software Engineer & Scientific Computing**  
*Versión 1.0 (2026) · Norma Stitch / DESIGN.md & UI-UX Pro Max*

---

```
   ██████╗  █████╗ ██████╗ ██████╗  █████╗ 
   ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗
   ██████╔╝███████║██████╔╝██████╔╝███████║
   ██╔═══╝ ██╔══██║██╔══██╗██╔══██╗██╔══██║
   ██║     ██║  ██║██║  ██║██║  ██║██║  ██║
   ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
   P R E C I S I Ó N   ·   A R T E S A N Í A   ·   E L E G A N C I A
```

---

## ÍNDICE GENERAL

1. [Manifiesto y Fundamentos de la Marca](#1-manifiesto-y-fundamentos-de-la-marca)
2. [Pilares de Posicionamiento y Personalidad](#2-pilares-de-posicionamiento-y-personalidad)
3. [Identidad Visual: El Logotipo y la Marca](#3-identidad-visual-el-logotipo-y-la-marca)
4. [Sistema Cromático Maestro](#4-sistema-cromático-maestro)
5. [Sistema Tipográfico Oficial y Jerarquía](#5-sistema-tipográfico-oficial-y-jerarquía)
6. [Métrica Espacial, Rejilla y Radios](#6-métrica-espacial-rejilla-y-radios)
7. [Sistema de Elevación, Sombras y Profundidad](#7-sistema-de-elevación-sombras-y-profundidad)
8. [Biblioteca de Componentes UI / UX](#8-biblioteca-de-componentes-ui--ux)
9. [Leyes Cognitivas UX y Accesibilidad (WCAG 2.1 AA/AAA)](#9-leyes-cognitivas-ux-y-accesibilidad-wcag-21-aaaaa)
10. [Voz, Tono y Estilo Editorial](#10-voz-tono-y-estilo-editorial)
11. [Guía de Migración y Despliegue en Netlify](#11-guía-de-migración-y-despliegue-en-netlify)

---

## 1. MANIFIESTO Y FUNDAMENTOS DE LA MARCA

La marca personal de **Juan David Parra Cantor** representa el punto de encuentro entre el **cálculo riguroso de la ingeniería**, el **desarrollo de software de alto rendimiento** y una **estética visual serena y contemporánea**.

En una era saturada de sitios ruidosos, animaciones invasivas y plantillas genéricas, este sitio se concibe como un **objeto de diseño de ingeniería**:
- **Preciso**: cada componente cumple una función técnica o informativa clara.
- **Sobrio y Elegante**: se nutre del movimiento *quiet luxury tech* (inspirado en la disciplina de Linear, Stripe y herramientas de computación científica).
- **Humano**: incorpora gestos caligráficos mesurados que recuerdan que detrás de cada algoritmo hay una persona curiosa, creativa y dedicada.

> *"La elegancia no consiste en llamar la atención de forma ruidosa, sino en ser recordado por la precisión, la claridad y la pureza de lo construido."*

---

## 2. PILARES DE POSICIONAMIENTO Y PERSONALIDAD

| Pilar | Concepto Clave | Traducción Visual y de Experiencia |
| :--- | :--- | :--- |
| **1. Rigor de Ingeniería** | Soluciones fundamentadas, código limpio y computación científica. | Tipografía geométrica sólida (*Bricolage Grotesque*), azul acero industrial, contrastes limpios. |
| **2. Artesanía de Software** | Cuidado meticuloso por los detalles, arquitectura modular y documentación impecable. | Bordes finos milimétricos (hairlines), detalles dorados mate (*Champagne Gold*), layout estructurado. |
| **3. Claridad Cognitiva** | Reducción de fatiga visual; lectura fluida y descanso ocular. | Tipografía de lectura neutra (*Myriad Bengali*), espaciados generosos en múltiplos de 8px, cero clutter. |
| **4. Calidez Humana** | Cercanía, ética profesional y pasión genuina por aprender y enseñar. | Acentos suaves en tono coral (*Soft Coral*) y firma personal en *Dancing Script*. |

---

## 3. IDENTIDAD VISUAL: EL LOGOTIPO Y LA MARCA

### 3.1. Anatomía y Construcción
El imagotipo oficial combina el monograma / isotipo de **Juan David Parra** (`assets/img/perfil/logo.png`) con la firma nominal.
- **Morfología**: Estructura geométrica sobria, con bordes vectoriales definidos.
- **Equilibrio visual**: No debe ser alterado en proporciones, rotado ni sometido a sombras difusas exageradas.

### 3.2. Área de Protección / Zona de Aislamiento
Para garantizar impacto y legibilidad, ningún elemento textual o gráfico debe invadir el perímetro del logotipo:
```
       ┌───────────────────────────────┐
       │             X                 │
       │   ┌───────────────────────┐   │
       │ X │        [ LOGO ]       │ X │   (Donde X = 50% de la altura
       │   └───────────────────────┘   │    total del imagotipo)
       │             X                 │
       └───────────────────────────────┘
```

### 3.3. Tamaños Mínimos Recomendados
- **Pantalla / Digital (Favicon & Nav)**: Mínimo `32px × 32px` en navbar; `16px × 16px` exclusivo para favicons simplificados.
- **Impresión / PDF (Currículum vitae / Documentos técnicos)**: Mínimo `12 mm` de ancho.

### 3.4. Reglas de Uso Incorrecto (Prohibiciones Estrictas)
- **No distorsionar**: No comprimir o alargar la relación de aspecto.
- **No aplicar sombras agresivas**: Prohibido usar sombras paralelas de color negro saturado o resplandores de neón.
- **No alterar la paleta**: Prohibido teñir el isotipo en colores no autorizados (ej. verde flúor, magenta).
- **No colocar sobre fondos fotográficos ruidosos**: Si el fondo es una imagen, debe colocarse sobre un contenedor con superficie sólida o una máscara oscura con opacidad mínima del 85%.

---

## 4. SISTEMA CROMÁTICO MAESTRO

El sistema de color se estructura bajo el estándar de variables de diseño (*Tokens semánticos*) para garantizar interoperabilidad entre CSS puro, Tailwind, o cualquier framework moderno.

### 4.1. Paleta Primaria & Acentos

```
┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│   AZUL ACERO   │  │  GRIS GRAFITO  │  │  GRIS PLATINO  │
│    #1E3A5F     │  │    #121417     │  │    #F8F9FA     │
│   (Primario)   │  │ (Dark Canvas)  │  │ (Light Canvas) │
└────────────────┘  └────────────────┘  └────────────────┘
┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│  DORADO MATE   │  │  CORAL SUAVE   │  │ VERDE TÉCNICO  │
│    #D6A95F     │  │    #E3A5A0     │  │    #2E7D5B     │
│(Acento Premium)│  │(Acento Cálido) │  │(Estado Activo) │
└────────────────┘  └────────────────┘  └────────────────┘
```

### 4.2. Especificaciones Cromáticas y Espacios de Color

| Nombre de Color | Token CSS | HEX | RGB | HSL | Rol Principal |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Azul Acero Profundo** | `--color-primary` | `#1E3A5F` | `30, 58, 95` | `214°, 52%, 25%` | Marca, botones primarios, títulos institucionales |
| **Azul Acero Interactivo**| `--color-primary-hover`| `#2A4E7E` | `42, 78, 126`| `214°, 50%, 33%` | Estados hover de acción principal |
| **Gris Grafito Noche** | `--color-dark-canvas` | `#121417` | `18, 20, 23` | `216°, 12%, 8%` | Fondo de Header, Footer y paneles técnicos |
| **Grafito Elevado (Surface)**| `--color-dark-surface` | `#1A1D21` | `26, 29, 33` | `214°, 12%, 12%` | Tarjetas y contenedores en modo oscuro |
| **Gris Platino Suave** | `--color-canvas` | `#F8F9FA` | `248, 249, 250`| `210°, 17%, 98%` | Fondo principal del sitio (modo claro editorial) |
| **Blanco Nieve Puro** | `--color-surface` | `#FFFFFF` | `255, 255, 255`| `0°, 0%, 100%` | Tarjetas de proyectos, modales, formularios |
| **Dorado Champán Mate** | `--color-accent-gold` | `#D6A95F` | `214, 169, 95` | `37°, 60%, 61%` | Indicadores de excelencia, focus rings, hairlines |
| **Coral Suave Humano** | `--color-accent-coral`| `#E3A5A0` | `227, 165, 160`| `5°, 53%, 76%` | Subrayados interactivos, microdetalles humanos |
| **Verde Técnico** | `--color-status-success`| `#2E7D5B`| `46, 125, 91` | `154°, 46%, 34%`| Insignias de proyecto activo, validación |
| **Rojo Alerta / Error** | `--color-status-error`| `#C55A57` | `197, 90, 87` | `2°, 49%, 56%` | Errores de validación, estados críticos |

### 4.3. Regla de Proporción Cromática (60-30-10)
- **60% (Dominante Neutro)**: Lienzo (`#F8F9FA` en light / `#121417` en dark headers/footers).
- **30% (Estructural)**: Tinta de lectura (`#111418`), Azul Acero (`#1E3A5F`) y bordes arquitectónicos (`#E2E5EA`).
- **10% (Acentos de Precisión)**: Dorado (`#D6A95F`) y Coral (`#E3A5A0`). **Nunca** usar el dorado o el coral como fondo de página completa.

---

## 5. SISTEMA TIPOGRÁFICO OFICIAL Y JERARQUÍA

El proyecto cuenta con tres familias locales almacenadas en `assets/fonts/` que confieren una personalidad tipográfica inconfundible y eliminan la dependencia de CDNs externos (mejorando privacidad y velocidad).

### 5.1. Familias y Funciones

1. **Bricolage Grotesque (Variable / Bold / Regular)**
   - **Rol**: Titulares, encabezados principales (H1, H2, H3) e identidad gráfica.
   - **Esencia**: Personalidad arquitectónica, moderna, técnica, con curvas incisivas.
   - **Regla**: Prohibido utilizar en párrafos largos mayores a 3 líneas.

2. **Myriad Bengali (Regular / Bold)**
   - **Rol**: Textos de cuerpo, descripciones de proyectos, artículos de blog y formularios.
   - **Esencia**: Neutra, geométrica-humanista, con proporción abierta que reduce la fatiga visual.
   - **Regla**: Usar siempre con interlineado holgado (`1.6` a `1.7`) y tamaño mínimo de 15–16px.

3. **Dancing Script (Bold / Regular)**
   - **Rol**: Firma personal, citas de autor, pequeños guiños emotivos.
   - **Esencia**: Trazo caligráfico fluido, orgánico y manuscrito.
   - **Regla**: **Uso estrictamente ornamental y contenido**. Prohibido usar en menús de navegación, botones o textos explicativos.

4. **Monospace Complementario (Stack de Sistema)**
   - `font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;`
   - **Rol**: Código fuente, fórmulas matemáticas, variables térmicas, comandos CLI y datos numéricos.

### 5.2. Escala Tipográfica Modular (Ratio Mayor ~ 1.25)

```css
/* Escala de Tamaño y Espaciado de Texto */
--text-hero:     clamp(2.25rem, 5vw, 3.25rem); /* 36px - 52px */  /* h1 */
--text-h2:       clamp(1.75rem, 3vw, 2.125rem);/* 28px - 34px */  /* h2 */
--text-h3:       1.375rem;                      /* 22px */         /* h3 */
--text-lead:     1.1875rem;                     /* 19px */         /* p.lead */
--text-body:     1.000rem;                      /* 16px */         /* p, li */
--text-sm:       0.875rem;                      /* 14px */         /* buttons, metadata */
--text-xs:       0.750rem;                      /* 12px */         /* tags, badges */
```

### 5.3. Declaración CSS `@font-face` Canónica
```css
@font-face {
  font-family: 'Bricolage Grotesque';
  src: url('../fonts/BricolageGrotesque/BricolageGrotesque-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Bricolage Grotesque';
  src: url('../fonts/BricolageGrotesque/BricolageGrotesque-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Myriad Bengali';
  src: url('../fonts/MyriadBengali/MyriadBengali-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Dancing Script';
  src: url('../fonts/DancingScript/DancingScript-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

---

## 6. MÉTRICA ESPACIAL, REJILLA Y RADIOS

Para lograr la elegancia matemática requerida en el sitio, todo espaciado se calcula sobre una escala modular en múltiplos de **4px / 8px**.

```css
:root {
  --space-2xs: 4px;   /* Micro separación */
  --space-xs:  8px;   /* Padding compacto */
  --space-sm:  12px;  /* Espaciado de badges */
  --space-md:  16px;  /* Margen interno base */
  --space-lg:  24px;  /* Padding en tarjetas */
  --space-xl:  32px;  /* Separación entre bloques */
  --space-2xl: 48px;  /* Separación de módulos */
  --space-3xl: 64px;  /* Padding vertical de secciones */
  --space-4xl: 96px;  /* Separación mayor */

  /* Curvatura de bordes (Borders Radius) */
  --radius-xs:   4px;
  --radius-sm:   6px;
  --radius-md:   10px; /* Botones y campos */
  --radius-lg:   16px; /* Tarjetas de proyectos */
  --radius-xl:   24px; /* Paneles destacados */
  --radius-full: 9999px; /* Badges y píldoras */
}
```

---

## 7. SISTEMA DE ELEVACIÓN, SOMBRAS Y PROFUNDIDAD

La estética rechaza sombras pesadas y difuminados negros agresivos. Se emplean sombras tenues multicapa basadas en el tono grafito de la marca (`rgba(18, 20, 23, ...)`):

```css
:root {
  /* Elevación 1: Tarjetas estáticas y contenedores */
  --shadow-card: 0 2px 8px -2px rgba(18, 20, 23, 0.05),
                 0 1px 3px 0 rgba(18, 20, 23, 0.03);

  /* Elevación 2: Hover interactivo en tarjetas de proyectos */
  --shadow-hover: 0 12px 28px -4px rgba(18, 20, 23, 0.08),
                  0 4px 10px -2px rgba(18, 20, 23, 0.04);

  /* Elevación 3: Modales, menús desplegables y sticky header */
  --shadow-float: 0 20px 40px -8px rgba(18, 20, 23, 0.12),
                  0 6px 16px -4px rgba(18, 20, 23, 0.06);

  /* Resplandor de acento sutil (Focus & Highlights) */
  --shadow-accent-gold: 0 0 0 3px rgba(214, 169, 95, 0.28);
  --shadow-accent-blue: 0 0 0 3px rgba(30, 58, 95, 0.25);
}
```

---

## 8. BIBLIOTECA DE COMPONENTES UI / UX

### 8.1. Botones de Acción (Call to Action)
- **Botón Primario (`.btn-primary`)**:
  - Fondo: `--color-primary` (`#1E3A5F`).
  - Texto: Blanco (`#FFFFFF`).
  - Altura táctil: 44px mínimo (según directrices de accesibilidad móvil).
  - Hover: Fondo `--color-primary-hover` (`#2A4E7E`), desplazamiento vertical sutil `translateY(-1px)`.
- **Botón Secundario (`.btn-secondary`)**:
  - Fondo: Superficie clara (`#FFFFFF` o transparente con borde).
  - Borde: `1px solid var(--color-border-hairline)`.
  - Texto: `--color-primary`.
  - Hover: Fondo suave `--color-primary-subtle`, borde `--color-primary`.
- **Botón Ghost / Enlace (`.btn-ghost`)**:
  - Sin fondo ni borde estático; subrayado dinámico en coral suave o dorado.

### 8.2. Tarjetas de Proyecto (`.card`, `.card-project`)
- Fondo: Blanco puro (`#FFFFFF`) sobre lienzo platino (`#F8F9FA`).
- Borde: `1px solid #E2E5EA` (hairline).
- Radio: `16px` (`--radius-lg`).
- Padding: `24px`.
- Elementos internos obligatorios:
  1. **Tag de categoría / estado** (ej. "Software Embebido", "Termodinámica", "En Construcción").
  2. **Título del proyecto** en *Bricolage Grotesque*.
  3. **Descripción sucinta** en *Myriad Bengali*.
  4. **Stack técnico** (badges compactos en píldora: Python, Electron, Julia, etc.).
  5. **Enlace / Botón de inspección**.

### 8.3. Cabecera y Navegación (`.header`)
- Estilo: Barra superior flotante o fija con fondo grafito noche (`#121417`) y ligera translucidez con desenfoque de fondo (`backdrop-filter: blur(12px)`).
- Enlace activo: Marcado con borde inferior o punto de realce en dorado mate (`#D6A95F`).
- Enlaces normales: Gris plata (`#C4CBD4`), con transición suave hacia blanco y subrayado coral al interactuar.

### 8.4. Pie de Página (`.footer`)
- Fondo: Grafito noche (`#121417`).
- Contenido: Copyright, firma de artesanía digital ("Construido con precisión e ingeniería"), enlaces a GitHub, LinkedIn y contacto directo.

---

## 9. LEYES COGNITIVAS UX Y ACCESIBILIDAD (WCAG 2.1 AA/AAA)

Para que el sitio sea verdaderamente público y elegante, debe brindar una experiencia impecable a cualquier visitante o reclutador técnico internacional:

1. **Ley de Hick-Hyman**: Limitar las opciones por vista. Cada página posee un único objetivo principal (ver proyectos, leer sobre Juan David, o enviar un mensaje).
2. **Ley de Fitts**: Todos los botones y elementos de navegación tienen una zona de contacto de mínimo `44px × 44px`.
3. **Contraste de Color (WCAG 2.1 AA/AAA)**:
   - El texto principal `#111418` sobre fondo `#F8F9FA` supera un ratio de **15.2:1** (supera con holgura el mínimo AAA de 7.0:1).
   - Los botones primarios con texto blanco sobre `#1E3A5F` tienen un ratio de **8.4:1** (Nivel AAA).
4. **Navegación por Teclado y Anillos de Foco**: Ningún elemento oculta el `:focus` sin reemplazarlo por `:focus-visible`.
5. **Preferencia de Movimiento Reducido (`prefers-reduced-motion`)**: Toda animación respeta la configuración del sistema del usuario.

---

## 10. VOZ, TONO Y ESTILO EDITORIAL

La forma en que Juan David comunica sus proyectos debe ser idéntica a la calidad de su código:

| Atributo | Lo que ES | Lo que NO ES |
| :--- | :--- | :--- |
| **Riguroso** | Explica la arquitectura, los datos y las decisiones técnicas tomadas. | No usa exageraciones vacías como "la mejor app del mundo". |
| **Directo** | Frases concisas, explicaciones claras del problema y la solución. | No usa rodeos corporativos ni relleno innecesario. |
| **Humilde pero Competente** | Comparte lecciones aprendidas, desafíos resueltos y código abierto. | No es pretencioso ni distante. |
| **Elegante** | Redacción cuidada, ortografía impecable y puntuación precisa. | No usa jerga informal descuidada ni lenguaje puramente publicitario. |

---

## 11. GUÍA DE MIGRACIÓN Y DESPLIEGUE EN NETLIFY

Dado que la meta del usuario es migrar el portafolio a **Netlify** para convertirlo en su plataforma pública definitiva, se establecen las directrices de despliegue:

### 11.1. Archivo de Configuración `netlify.toml`
En la raíz del proyecto, crear o mantener el archivo `netlify.toml` con las siguientes directivas de producción:

```toml
[build]
  publish = "."

# Reglas de redirección limpias para SPA / Páginas HTML
[[redirects]]
  from = "/proyectos"
  to = "/projects.html"
  status = 200

[[redirects]]
  from = "/sobre-mi"
  to = "/about.html"
  status = 200

[[redirects]]
  from = "/contacto"
  to = "/contacto.html"
  status = 200

# Manejo de error 404 personalizado
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404

# Cabeceras de seguridad y optimización de caché
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"

# Caché inmutable para fuentes locales e imágenes estáticas
[[headers]]
  for = "/assets/fonts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/assets/img/*"
  [headers.values]
    Cache-Control = "public, max-age=2592000"
```

### 11.2. Lista de Verificación Pre-Migración
- [x] Manual de marca formalizado (`MANUAL_DE_MARCA.md`).
- [x] Especificación de tokens y componentes bajo estándar Google DESIGN.md (`DESIGN.md`).
- [ ] Variables CSS unificadas en `assets/css/theme.css`.
- [ ] Formulario de contacto habilitado para Netlify Forms agregando `data-netlify="true"` en `contacto.html`.
- [ ] Archivo `netlify.toml` configurado con headers de seguridad y caché.
- [ ] Validación de etiquetas Open Graph (`og:image`, `og:title`, `og:description`) para vista previa rica en LinkedIn, Twitter y WhatsApp.

---

*Manual elaborado con los más altos estándares de UI/UX, arquitectura de diseño y accesibilidad web. Documento oficial del proyecto de Juan David Parra Cantor.*
