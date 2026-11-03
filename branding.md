# Sistema Visual y Manual de Marca

> **Documento Canónico Oficial**: Consulta el [MANUAL_DE_MARCA.md](file:///D:/2Portafolio/Jdparra2004.github.io/MANUAL_DE_MARCA.md) para el libro de marca extendido y el [DESIGN.md](file:///D:/2Portafolio/Jdparra2004.github.io/DESIGN.md) para la especificación completa de tokens de diseño bajo el estándar Stitch / Google DESIGN.md.

---

## 1. Identidad General

Este documento resume la identidad visual oficial del portafolio personal de **Juan David Parra Cantor**, definiendo las reglas de estilo, tipografías, colores, espaciados y lineamientos para asegurar coherencia y máxima elegancia en todo el sitio web previo y posterior a su despliegue en **Netlify**.

La línea gráfica combina una estética **técnica**, **minimalista** y de **artesanía de software (quiet luxury tech)**, inspirada en la disciplina de Linear y Stripe, combinada con detalles cálidos y humanistas.

---

## 2. Declaración Canónica de Tipografías (@font-face)

El proyecto emplea fuentes locales almacenadas en `assets/fonts/`:

```css
@font-face {
    font-family: "Bricolage Grotesque";
    src: url("../fonts/BricolageGrotesque/BricolageGrotesque-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Bricolage Grotesque";
    src: url("../fonts/BricolageGrotesque/BricolageGrotesque-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Myriad Bengali";
    src: url("../fonts/MyriadBengali/MyriadBengali-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Dancing Script";
    src: url("../fonts/DancingScript/DancingScript-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
```

### Roles Tipográficos:
1. **Bricolage Grotesque — (Titulares / Jerarquía principal)**
   - Uso: Títulos principales (`h1`, `h2`, `h3`), logotipos, encabezados de tarjeta.
   - Esencia: Geométrica, técnica, con carácter arquitectónico.
   - Regla: No usar en párrafos largos.

2. **Myriad Bengali — (Cuerpo / Lectura extendida)**
   - Uso: Textos explicativos, párrafos, notas de blog, documentación.
   - Esencia: Neutra, limpia, con altísima legibilidad en pantallas.
   - Regla: Tamaño base 1rem (16px), interlineado generoso (1.6 – 1.7).

3. **Dancing Script — (Firma & Gestos Humanistas)**
   - Uso: Firmas personales, dedicatorias, notas de autor o fechas emotivas.
   - Esencia: Manuscrita, fluida y cálida.
   - Regla: Uso moderado y reservado; **nunca** en botones o menús.

4. **Monospace Complementario — (Código y Cómputo)**
   - Uso: Fórmulas térmicas, variables matemáticas, snippets de código y comandos CLI.

---

## 3. Paleta de Colores Maestra

La paleta equilibra autoridad de ingeniería, contraste óptimo (WCAG AAA) y detalles cálidos premium.

### **Colores Estructurales**
* **Azul Acero Profundo (`#1E3A5F`)** — Color de marca primario
  * Uso: Encabezados destacados, botones principales, énfasis institucional.
* **Gris Grafito Noche (`#121417` / `#1D1F21`)** — Lienzo oscuro técnico
  * Uso: Header, footer, terminales y áreas de enfoque.
* **Gris Platino Suave (`#F8F9FA` / `#E6E8EB`)** — Lienzo claro editorial
  * Uso: Fondo principal del sitio, descanso visual.
* **Blanco Puro (`#FFFFFF`)** — Superficie de tarjetas
  * Uso: Tarjetas de proyectos, modales, campos de formulario.

### **Colores de Acento (Regla del 10%)**
* **Dorado Champán Mate (`#D6A95F`)** — Acento de excelencia técnica
  * Uso: Separadores milimétricos, anillos de foco accesibles, indicadores activos de navegación.
  * Regla: Nunca usar como fondo completo.
* **Coral Suave (`#E3A5A0`)** — Acento de calidez humana
  * Uso: Subrayados dinámicos en hovers, microindicadores, enlaces emotivos.
  * Regla: Máximo 5% del balance visual.

### **Estados y Semántica**
* **Verde Técnico (`#2E7D5B`)** — Proyectos activos, compilación exitosa.
* **Rojo Alerta (`#C55A57`)** — Errores de validación, estados críticos.

---

## 4. Jerarquía Tipográfica y Espaciado

### Títulos
* **Hero / Display**: Bricolage Grotesque, `2.5rem – 3.25rem` (40px – 52px), Azul Acero o Grafito Profundo.
* **H1 / H2**: Bricolage Grotesque, `1.75rem – 2.25rem` (28px – 36px).
* **H3**: Bricolage Grotesque, `1.25rem – 1.45rem` (20px – 23px).

### Textos de Párrafo
* **Párrafo base (`p`)**: Myriad Bengali, `1rem` (16px), color `#111418` o `#475467`. Interlineado `1.65`.
* **Lead / Intro**: Myriad Bengali, `1.15rem – 1.25rem`, interlineado `1.7`.

### Escala de Espaciado Modular (Múltiplos de 4px / 8px)
* `2xs`: 4px
* `xs`: 8px
* `sm`: 12px
* `md`: 16px
* `lg`: 24px
* `xl`: 32px
* `2xl`: 48px
* `3xl`: 64px
* `section`: 80px

---

## 5. Bordes, Sombras y Elevación

* **Bordes**:
  * Estándar elementos / inputs: `8px – 10px`
  * Tarjetas de proyectos: `16px`
  * Badges / Píldoras: `9999px`
* **Líneas divisorias**: `1px solid #E2E5EA` (en claro) y `1px solid #262B33` (en oscuro).
* **Sombras Técnicas**:
  * Tarjeta estática: `0 2px 8px -2px rgba(18, 20, 23, 0.05), 0 1px 3px 0 rgba(18, 20, 23, 0.03)`
  * Hover interactivo: `0 12px 28px -4px rgba(18, 20, 23, 0.08)`
  * Focus visible accesible: `0 0 0 3px rgba(214, 169, 95, 0.35)`

---

## 6. Componentes Clave

* **Navbar**: Fondo grafito noche (`#121417`) con `backdrop-filter: blur(12px)`. Enlaces con hover y activo en dorado mate (`#D6A95F`) y coral (`#E3A5A0`).
* **Botones Primarios**: Fondo Azul Acero (`#1E3A5F`), texto blanco, esquinas redondeadas 10px, elevación sutil al hover.
* **Tarjetas**: Superficie blanca, borde milimétrico, padding de 24px, badges de tecnologías y hover interactivo suave.

---

## 7. Preparación para Migración a Netlify

* Archivo de configuración central: `netlify.toml` con cabeceras de seguridad (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) y políticas de caché inmutable para fuentes locales e imágenes.
* Formulario de contacto habilitado mediante atributo `data-netlify="true"`.
* Rutas y redirecciones limpias sin extensión `.html` y página 404 personalizada.

---

*Para detalles exhaustivos, consulta los archivos [MANUAL_DE_MARCA.md](file:///D:/2Portafolio/Jdparra2004.github.io/MANUAL_DE_MARCA.md) y [DESIGN.md](file:///D:/2Portafolio/Jdparra2004.github.io/DESIGN.md).*
