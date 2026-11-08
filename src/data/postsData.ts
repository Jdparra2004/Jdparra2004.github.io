export interface PostSection {
  type: "paragraph" | "heading" | "equation" | "code" | "list";
  text?: { es: string; en: string };
  equation?: string;
  code?: string;
  items?: Array<{ es: string; en: string }>;
}

export interface PostItem {
  id: string;
  title: { es: string; en: string };
  date: string;
  author: string;
  category: { es: string; en: string };
  readTime: { es: string; en: string };
  doi?: string;
  repository?: string;
  summary: { es: string; en: string };
  tags: string[];
  content: PostSection[];
}

export const postsData: PostItem[] = [
  {
    id: "optimizacion-multiobjetivo-biocombustibles-colombia",
    title: {
      es: "Impacto social en la optimización de cadenas logísticas de biocombustibles en Colombia: Enfoque Mono vs. Multiobjetivo",
      en: "Social Impact in Biofuel Supply Chain Optimization in Colombia: Single vs. Multiobjective Approaches",
    },
    date: "2026-06-27",
    author: "Juan David Parra Cantor (jaidi20)",
    category: {
      es: "Investigación y Optimización",
      en: "Research & Optimization",
    },
    readTime: {
      es: "7 min de lectura",
      en: "7 min read",
    },
    doi: "https://doi.org/10.24084/reepqj26-370",
    repository: "https://github.com/Jdparra2004/Multiobjetivo",
    summary: {
      es: "Análisis comparativo entre formulaciones monoobjetivo y multiobjetivo para el diseño de cadenas de suministro de biocombustibles derivados de residuos en Colombia, integrando métricas de impacto social y rentabilidad económica.",
      en: "Comparative analysis between single- and multiobjective mathematical formulations for residual biomass biofuel supply network design in Colombia, integrating quantitative social equity metrics and economic viability.",
    },
    tags: [
      "Optimización Multiobjetivo",
      "Biocombustibles",
      "Transición Energética",
      "Python",
      "DOI 10.24084/reepqj26-370",
    ],
    content: [
      {
        type: "paragraph",
        text: {
          es: "La planificación de cadenas de suministro para biocombustibles de segunda generación en economías emergentes suele abordarse desde una perspectiva estrictamente financiera: minimizar los costos logísticos o maximizar el valor presente neto. Sin embargo, cuando se trabaja con biomasa residual en el contexto colombiano, omitir la dimensión social produce configuraciones de red que concentran la infraestructura en corredores industriales ya consolidados y desaprovechan el potencial de desarrollo en regiones rurales vulnerables.",
          en: "Supply chain planning for second-generation biofuels in emerging economies is typically approached from a purely financial viewpoint: minimizing logistics expenditures or maximizing net present value. Nonetheless, when dealing with residual biomass in Colombia, neglecting social metrics yields infrastructure concentrated solely in well-established industrial corridors, overlooking the development potential of vulnerable rural regions.",
        },
      },
      {
        type: "heading",
        text: {
          es: "1. El dilema entre eficiencia económica e impacto territorial",
          en: "1. The Dilemma Between Economic Efficiency and Territorial Impact",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "En el marco del trabajo desarrollado dentro del Semillero de Automática y Diseño (A+D) de la Universidad Pontificia Bolivariana, formulamos un modelo matemático para evaluar el diseño de la red logística de biocombustibles derivados de residuos en Colombia. El estudio fue publicado en Renewable Energies, Environment and Power Quality Journal (ISSN 3020-531X, DOI: 10.24084/reepqj26-370) y distinguido con el Primer Puesto en la categoría Investigación Terminada en el Encuentro de Semilleros Multicampus UPB.",
          en: "As part of our work within the Automation and Design (A+D) Research Seedbed at Universidad Pontificia Bolivariana, we formulated a mathematical model to assess the logistics network design for residual biofuels in Colombia. The investigation was published in the Renewable Energies, Environment and Power Quality Journal (ISSN 3020-531X, DOI: 10.24084/reepqj26-370) and was honored with First Place in Finished Research at the UPB Multicampus Conference.",
        },
      },
      {
        type: "heading",
        text: {
          es: "2. Formulación Matemática y Frente de Pareto",
          en: "2. Mathematical Formulation and Pareto Front",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Para contrastar el comportamiento del sistema, implementamos dos esquemas de resolución en Python: Enfoque Monoobjetivo (minimización de costos totales anualizados) y Enfoque Multiobjetivo (balance simultáneo entre costo económico e impacto social regional ponderado por necesidades básicas insatisfechas).",
          en: "To compare system behavior, we implemented two solution schemes in Python: Single-objective (annualized cost minimization) and Multiobjective (simultaneous balance of economic expenditure and regional social impact weighted by unsatisfied basic needs).",
        },
      },
      {
        type: "equation",
        equation: "\\min_{F,\\,y}\\; f_1 = \\sum_{(i,j)\\in\\mathcal{R}} c_{ij}\\,F_{ij} + \\sum_{p\\in\\mathcal{P}} \\mathrm{CAPEX}_p\\,y_p + \\mathrm{OPEX}, \\qquad \\max_{y}\\; f_2 = \\sum_{p\\in\\mathcal{P}} E_p\\,V_p\\,y_p",
      },
      {
        type: "code",
        code: `def evaluar_solucion(flujos, plantas_activas, parametros):
    costo_transporte = sum(
        flujos[i, j] * parametros.costo_km[i, j]
        for (i, j) in parametros.rutas
    )
    costo_fijo = sum(
        plantas_activas[p] * parametros.capex_anual[p]
        for p in parametros.plantas
    )
    impacto_social = sum(
        plantas_activas[p] * parametros.empleos[p] * parametros.factor_vulnerabilidad[p]
        for p in parametros.plantas
    )
    return (costo_transporte + costo_fijo), impacto_social`,
      },
      {
        type: "heading",
        text: {
          es: "3. Hallazgos Clave",
          en: "3. Key Findings",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Al construir el frente de Pareto observamos que un incremento marginal en el costo logístico total (entre 4 % y 9 % respecto al óptimo económico puro) permite incrementar sustancialmente el indicador de impacto social regional, descentralizando la ubicación de nodos de pretratamiento hacia municipios con alta disponibilidad de biomasa.",
          en: "Constructing the Pareto front revealed that a marginal logistics cost increase (4% to 9% over the pure economic optimum) unlocks substantial regional social gains, decentralizing pretreatment nodes toward municipalities with high agro-industrial biomass density.",
        },
      },
    ],
  },
  {
    id: "compostaje-acelerado-saccharomyces-cerevisiae-colaeiq-2025",
    title: {
      es: "Revalorización de residuos de poda universitaria mediante inoculación con Saccharomyces cerevisiae hacia una economía circular",
      en: "Upcycling of University Green Waste via Inoculation with Saccharomyces cerevisiae toward a Circular Economy",
    },
    date: "2025-08-08",
    author: "Juan David Parra Cantor (jaidi20)",
    category: {
      es: "Bioprocesos y Economía Circular",
      en: "Bioprocesses & Circular Economy",
    },
    readTime: {
      es: "7 min de lectura",
      en: "7 min read",
    },
    summary: {
      es: "Evaluación experimental de la aceleración del compostaje aeróbico mediante biorreactores de 121 L inoculados con Saccharomyces cerevisiae, logrando reducir en un 50 % el tiempo de maduración. Trabajo ganador en el Concurso de Carteles del XXX COLAEIQ Honduras 2025.",
      en: "Experimental evaluation of aerobic composting acceleration using 121 L aerated bioreactors inoculated with commercial S. cerevisiae, cutting maturation time by 50%. Award-winning research at XXX COLAEIQ Honduras 2025.",
    },
    tags: [
      "Economía Circular",
      "Bioprocesos",
      "Saccharomyces cerevisiae",
      "Biorreactores",
      "XXX COLAEIQ Honduras 2025",
    ],
    content: [
      {
        type: "paragraph",
        text: {
          es: "El manejo convencional de residuos lignocelulósicos de poda en campus universitarios suele realizarse mediante pilas de compostaje pasivo cuyos tiempos de estabilización rondan las 12 semanas, con mermas volumétricas cercanas al 60 %. En esta investigación premiada en el XXX COLAEIQ Honduras 2025, intensificamos biotecnológicamente el proceso mediante inoculación controlada con Saccharomyces cerevisiae.",
          en: "Conventional pruning and green waste management on university campuses typically employs passive composting piles requiring around 12 weeks, with volumetric losses near 60%. In this research awarded at XXX COLAEIQ Honduras 2025, we intensified the process through controlled bioaugmentation with commercial Saccharomyces cerevisiae.",
        },
      },
      {
        type: "heading",
        text: {
          es: "1. Diseño Experimental en Biorreactores Aireados (121 L)",
          en: "1. Experimental Design in Aerated Bioreactors (121 L)",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Se operaron dos biorreactores de 121 L aireados por burbujeo con sacarosa (15 g/L) y levadura (15 g/L), dosificando 42.86 L/m³ de inóculo sobre seis celdas rotativas de 2.8 m³ cada una (450 kg de biomasa por celda).",
          en: "Two 121 L bubble-aerated bioreactors were operated with commercial sucrose (15 g/L) and yeast (15 g/L), delivering 42.86 L/m³ of inoculum across six 2.8 m³ rotating composting cells (450 kg biomass per cell).",
        },
      },
      {
        type: "equation",
        equation: "\\Delta V_{\\%} = 54.33\\% < 60\\%_{\\text{tradicional}}, \\qquad \\overline{\\mathrm{pH}} = 8.10 \\in [5.5,\\, 8.5], \\qquad \\Delta t_{\\text{proceso}} = -50\\%",
      },
      {
        type: "paragraph",
        text: {
          es: "El régimen termofílico (40-60 °C) aseguró la higienización del material y la estabilización alcalina del pH (8.10) amortiguó la acidificación inicial típica de la fase mesofílica, permitiendo obtener compost maduro de alta calidad en 6 semanas en lugar de 12.",
          en: "The active thermophilic regime (40–60 °C) ensured effective sanitization, while alkaline pH stabilization (mean 8.10) counteracted early mesophilic acidification, yielding mature high-grade biofertilizer in 6 weeks instead of 12.",
        },
      },
    ],
  },
  {
    id: "difusion-hidrogeno-diferencias-finitas-python",
    title: {
      es: "Simulación numérica de la difusión de hidrógeno y esfuerzos mecánicos mediante diferencias finitas",
      en: "Numerical Simulation of Hydrogen Diffusion and Coupled Mechanical Stresses via Finite Differences",
    },
    date: "2026-04-15",
    author: "Juan David Parra Cantor (jaidi20)",
    category: {
      es: "Métodos Numéricos y Transporte",
      en: "Numerical Methods & Transport",
    },
    readTime: {
      es: "6 min de lectura",
      en: "6 min read",
    },
    repository: "https://github.com/Jdparra2004/Simulacion_Hidrogeno",
    summary: {
      es: "Resolución numérica en Python del transporte transitorio de hidrógeno en geometrías cilíndricas y su acoplamiento con los perfiles de esfuerzo radial y tangencial.",
      en: "Python numerical resolution of transient hydrogen transport across cylindrical geometry and its mechanical coupling with radial and hoop stresses.",
    },
    tags: [
      "Métodos Numéricos",
      "Diferencias Finitas",
      "Hidrógeno",
      "Fenómenos de Transporte",
      "Python",
    ],
    content: [
      {
        type: "paragraph",
        text: {
          es: "El almacenamiento de hidrógeno plantea el desafío crítico de la fragilización: la difusión atómica en redes metálicas induce dilatación volumétrica y tensiones mecánicas severas.",
          en: "Hydrogen containment poses the critical challenge of embrittlement: atomic lattice diffusion induces local volumetric dilatation and severe mechanical stress fields.",
        },
      },
      {
        type: "heading",
        text: {
          es: "1. Discretización Radial de la Segunda Ley de Fick",
          en: "1. Radial Discretization of Fick's Second Law",
        },
      },
      {
        type: "equation",
        equation: "\\frac{\\partial C}{\\partial t} = D\\left(\\frac{\\partial^2 C}{\\partial r^2} + \\frac{1}{r}\\frac{\\partial C}{\\partial r}\\right), \\qquad C_i^{n+1} = C_i^{n} + \\Delta t\\, D\\left(\\frac{C_{i+1}^{n} - 2C_i^{n} + C_{i-1}^{n}}{\\Delta r^2} + \\frac{1}{r_i}\\,\\frac{C_{i+1}^{n} - C_{i-1}^{n}}{2\\,\\Delta r}\\right)",
      },
      {
        type: "paragraph",
        text: {
          es: "El módulo calcula en cada paso temporal los perfiles acoplados de esfuerzo radial y tangencial (circunferencial), renderizando vistas tridimensionales para evaluar zonas propensas a microfisuras.",
          en: "The algorithm calculates coupled radial and circumferential hoop stresses at each time step, rendering 3D visualizations to identify critical zones susceptible to microcrack nucleation.",
        },
      },
    ],
  },
  {
    id: "funciones-base-radial-metodos-numericos-ingenieria",
    title: {
      es: "Interpolación multivariable con Funciones de Base Radial (RBF) en Ingeniería Química",
      en: "Multivariate Interpolation with Radial Basis Functions (RBF) in Chemical Engineering",
    },
    date: "2026-02-10",
    author: "Juan David Parra Cantor (jaidi20)",
    category: {
      es: "Computación Científica",
      en: "Scientific Computing",
    },
    readTime: {
      es: "5 min de lectura",
      en: "5 min read",
    },
    repository: "https://github.com/Jdparra2004/RBF",
    summary: {
      es: "Fundamentos matemáticos e implementación en Python de redes de Funciones de Base Radial para reconstruir superficies termodinámicas y datos experimentales dispersos sin malla estructurada.",
      en: "Mathematical foundations and Python implementation of Radial Basis Function networks for meshless thermodynamic surface reconstruction from scattered experimental data.",
    },
    tags: [
      "Funciones de Base Radial",
      "Álgebra Lineal Numérica",
      "Python",
      "Ingeniería Química",
    ],
    content: [
      {
        type: "paragraph",
        text: {
          es: "Los datos experimentales en ingeniería química rara vez se adaptan a una cuadrícula regular. Las RBF permiten ajustar datos multidimensionales dispersos sin necesidad de mallas rígidas y evitando el fenómeno de Runge común en polinomios de alto grado.",
          en: "Experimental data in chemical engineering rarely conforms to structured grids. Radial Basis Functions enable high-dimensional scattered fitting without rigid meshes, overcoming the Runge phenomenon inherent in high-degree polynomials.",
        },
      },
      {
        type: "equation",
        equation: "s(\\mathbf{x}) = \\sum_{j=1}^{N} w_j\\, \\phi\\!\\left(\\lVert \\mathbf{x} - \\mathbf{x}_j \\rVert\\right), \\qquad \\Phi\\,\\mathbf{w} = \\mathbf{f}",
      },
    ],
  },
];
