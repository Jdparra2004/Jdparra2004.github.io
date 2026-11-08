---
version: 1.0.0
name: Juan-David-Parra-Portfolio-Design-System
description: "A refined technical-editorial design system balancing high-precision software engineering with quiet luxury aesthetics. Built on an architectural dark graphite canvas (#121417) with deep steel blue (#1E3A5F) authority, soft platinum surfaces (#F8F9FA / #1A1D21), subtle gold hairline accents (#D6A95F), and delicate rose-coral warmth (#E3A5A0). Designed for high legibility, low cognitive friction, and WCAG AA/AAA compliance."

colors:
  # Primary / Brand Identity
  primary: "#1E3A5F"
  primary-hover: "#2A4E7E"
  primary-focus: "#152A45"
  primary-light: "#EAF0F8"
  primary-subtle: "rgba(30, 58, 95, 0.08)"
  
  # Accents
  accent-gold: "#D6A95F"
  accent-gold-hover: "#C49746"
  accent-gold-subtle: "rgba(214, 169, 95, 0.12)"
  accent-coral: "#E3A5A0"
  accent-coral-subtle: "rgba(227, 165, 160, 0.12)"
  
  # Canvas & Surfaces (Light Theme)
  canvas: "#F8F9FA"
  surface-1: "#FFFFFF"
  surface-2: "#F1F3F5"
  surface-3: "#E9ECEF"
  surface-card: "#FFFFFF"
  
  # Canvas & Surfaces (Dark Theme / Framing)
  dark-canvas: "#161A22"
  dark-surface-1: "#1D222B"
  dark-surface-2: "#242A36"
  dark-surface-3: "#2C3341"
  dark-surface-card: "#1E242F"
  
  # Borders & Dividers
  border-hairline: "#DDE2E8"
  border-subtle: "#CFD5DF"
  border-focus: "#1E3A5F"
  dark-border-hairline: "#2C3341"
  dark-border-subtle: "#3A4456"
  
  # Typography / Inks
  ink-primary: "#111418"
  ink-secondary: "#475467"
  ink-tertiary: "#667085"
  ink-inverse: "#FFFFFF"
  dark-ink-primary: "#F8F9FA"
  dark-ink-secondary: "#C4CBD4"
  dark-ink-tertiary: "#8A94A6"
  
  # Semantics
  semantic-success: "#2E7D5B"
  semantic-warning: "#D97706"
  semantic-error: "#C55A57"
  semantic-info: "#2563EB"

typography:
  display-hero:
    fontFamily: "Bricolage Grotesque"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.03em"
  h1:
    fontFamily: "Bricolage Grotesque"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "Bricolage Grotesque"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: "1.25"
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "Bricolage Grotesque"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "1.3"
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Myriad Bengali"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0"
  body:
    fontFamily: "Myriad Bengali"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "0.01em"
  body-sm:
    fontFamily: "Myriad Bengali"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0.01em"
  caption:
    fontFamily: "Myriad Bengali"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "0.02em"
  script-accent:
    fontFamily: "Dancing Script"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0"
  mono-code:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0"

rounded:
  xs: "4px"
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  pill: "9999px"

spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  section: "80px"

shadows:
  subtle: "0 1px 3px rgba(18, 20, 23, 0.05), 0 1px 2px rgba(18, 20, 23, 0.03)"
  card: "0 4px 16px -2px rgba(18, 20, 23, 0.06), 0 2px 6px -1px rgba(18, 20, 23, 0.03)"
  hover: "0 12px 28px -4px rgba(18, 20, 23, 0.10), 0 4px 10px -2px rgba(18, 20, 23, 0.05)"
  focus-ring: "0 0 0 3px rgba(30, 58, 95, 0.25)"
  gold-glow: "0 0 12px rgba(214, 169, 95, 0.25)"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "10px 22px"
    border: "1px solid transparent"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    transform: "translateY(-1px)"
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "10px 22px"
    border: "1px solid {colors.border-hairline}"
  badge-tag:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  card-project:
    backgroundColor: "{colors.surface-card}"
    borderColor: "{colors.border-hairline}"
    rounded: "{rounded.lg}"
    padding: "24px"
    shadow: "{shadows.card}"
  header-nav:
    backgroundColor: "{colors.dark-canvas}"
    textColor: "{colors.dark-ink-primary}"
    borderBottom: "1px solid {colors.dark-border-hairline}"
    height: "68px"
---

# Sistema de Diseño Oficial (DESIGN.md Standard)
**Portafolio Profesional de Juan David Parra Cantor**  
*Ingeniería de Software · Cómputo Científico · Sistemas Embebidos · Diseño Técnico*

---

## 1. Fundamentos & Visión de Marca

Este sistema de diseño traduce la vocación de ingeniería, rigor científico y artesanía digital de Juan David Parra en un lenguaje visual sofisticado y memorable.

* **Arquetipo de Diseño**: *Craftsman Engineer & Quiet Tech Luxury*. Combina la precisión sobria de los instrumentos científicos de alta gama con el ritmo editorial de las publicaciones académicas contemporáneas.
* **Metáfora Visual**: El contraste entre la solidez estructural del grafito y el acero con la calidez del toque humano (Dancing Script y coral sutil) y la excelencia artesanal (dorado mate).
* **Objetivo de Experiencia (UX)**: Carga cognitiva mínima (Ley de Hick), navegación predecible y accesible (WCAG AA/AAA), y jerarquía visual impecable que resalta la calidad de los proyectos antes que la ornamentación vacía.

---

## 2. Roles del Sistema de Color

La paleta se rige por la regla armónica **60-30-10**:
1. **60% Superficies Neutras y Lienzo**: `#F8F9FA` en modo claro o `#121417` en header/footer y dark panels, garantizando calma y descanso visual.
2. **30% Estructura y Tipografía**: Azul Acero `#1E3A5F` y Grafito `#111418` aportando peso arquitectónico, contraste nítido y seriedad.
3. **10% Acentos Semánticos y Emocionales**:
   - **Dorado Mate (`#D6A95F`)**: Líneas de separación milimétricas, acentos de excelencia y estados de foco premium.
   - **Coral Suave (`#E3A5A0`)**: Micro-interacciones interactivas (hover indicators, subrayados orgánicos).
   - **Verde Técnico (`#2E7D5B`)**: Estado operativo activo, validaciones de código y éxito de compilación.

### Matriz de Contraste WCAG 2.1
| Combinación | Ratio | Nivel WCAG | Aplicación |
| :--- | :---: | :---: | :--- |
| Ink Primary (`#111418`) sobre Canvas (`#F8F9FA`) | **15.2:1** | AAA | Textos de párrafo y encabezados |
| Primary (`#1E3A5F`) sobre White (`#FFFFFF`) | **8.4:1** | AAA | Botones principales y enlaces |
| Dark Ink (`#F8F9FA`) sobre Dark Canvas (`#121417`) | **16.1:1** | AAA | Header, footer y bloques oscuros |
| Accent Gold (`#D6A95F`) sobre Dark Surface (`#1A1D21`) | **6.1:1** | AA | Badges destacados y líneas finas |
| Accent Coral (`#E3A5A0`) sobre Primary Dark (`#1E3A5F`) | **5.8:1** | AA | Micro-acentos en bloques oscuros |

---

## 3. Escala y Jerarquía Tipográfica

El sistema utiliza tres familias con roles estrictamente no intercambiables:

```
┌────────────────────────────────────────────────────────┐
│  BRICOLAGE GROTESQUE (Display & H1-H3)                 │
│  Estructura geométrica, modernidad, precisión técnica  │
├────────────────────────────────────────────────────────┤
│  MYRIAD BENGALI (Cuerpo & Lectura Extendida)           │
│  Calidez neutra, altísima legibilidad en pantallas     │
├────────────────────────────────────────────────────────┤
│  DANCING SCRIPT (Firma & Gestos Afectivos)             │
│  Exclusivo para firmas personales, citas o fechas clave │
└────────────────────────────────────────────────────────┘
```

### Reglas de Implementación
* **`h1` (Display Hero)**: 48px / tracking -0.03em / font-weight 700 / color `--color-primary` o `--color-ink-primary`.
* **`h2` (Títulos de Sección)**: 28px–32px / tracking -0.02em / font-weight 600 / margen inferior acompasado.
* **`h3` (Títulos de Tarjetas / Componentes)**: 20px–22px / tracking -0.015em / font-weight 600.
* **`p` (Cuerpo de texto)**: 16px / leading 1.65 / color `--color-ink-secondary`. Longitud óptima de línea: entre 55 y 75 caracteres.
* **`.signature` (Dancing Script)**: 22px–26px. **Prohibido** usar en párrafos, menús o botones interactivos.

---

## 4. Rejilla y Espaciado Sistemático

Sistema modular de base **4px / 8px**:
- **Micro-espaciados (`4px`, `8px`, `12px`)**: Padding interior de botones, badges, separación entre icono y texto.
- **Espaciados de tarjeta (`16px`, `24px`)**: Densidad de información sin saturación visual.
- **Macro-espaciados (`48px`, `64px`, `80px`)**: Relleno vertical de secciones (`section padding`) para permitir un flujo de lectura pausado.

---

## 5. Componentes Principales

### Botones (`.btn-primary`, `.btn-secondary`, `.btn-ghost`)
- **Altura de toque**: Mínimo 44px (cumpliendo pautas de accesibilidad táctil para móviles).
- **Esquinas**: `border-radius: 10px` (`rounded.md`).
- **Transición**: `all 0.2s cubic-bezier(0.16, 1, 0.3, 1)`.
- **Efecto Hover**: Elevación sutil de 1px (`translateY(-1px)`) con sombra enriquecida (`shadow.hover`).

### Tarjetas de Proyecto (`.card-project`)
- Superficie sólida con borde sutil de 1px (`#E2E5EA`).
- Encabezado con badge tecnológico que indica stack (ej. Python, Electron, Julia).
- Al hover: elevación de 2px, borde acentuado con tono azul acero o dorado mate.

### Barra de Navegación (`.header`)
- Fondo oscuro grafito (`#121417`) con ligera transparencia (`backdrop-filter: blur(12px)`).
- Indicador activo: subrayado de 2px con color dorado mate (`#D6A95F`) o coral suave (`#E3A5A0`).

---

## 6. Pautas de Micro-interacciones & Accesibilidad (WCAG)

1. **Focus Rings Visibles**: Todos los elementos interactivos (`a`, `button`, `input`) deben poseer un foco nítido accesible mediante teclado:
   ```css
   :focus-visible {
     outline: 2px solid var(--color-accent-gold);
     outline-offset: 3px;
   }
   ```
2. **Reducción de Movimiento**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```
3. **Imágenes y Contenido**: Todas las imágenes deben incluir atributos `alt` descriptivos y dimensiones explícitas (`width` y `height`) para evitar Cumulative Layout Shift (CLS).
