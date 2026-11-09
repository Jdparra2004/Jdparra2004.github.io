export interface ProjectDownload {
  version: { es: string; en: string };
  platform: { es: string; en: string };
  url: string;
  type: string;
}

export interface ProjectItem {
  id: string;
  title: { es: string; en: string };
  shortDescription: { es: string; en: string };
  description: { es: string; en: string };
  typeLabel: { es: string; en: string }; // e.g. "Investigación Publicada", "Estudio Académico", "Repositorio de Aprendizaje"
  category: "optimization" | "bioprocesses" | "hydrogen" | "computing";
  status: { es: string; en: string };
  technologies: string[];
  repository?: string;
  startDate?: string;
  lastUpdate?: string;
  license?: string;
  downloads?: ProjectDownload[];
  gallery?: string[];
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "optimizacion-multiobjetivo",
    featured: true,
    category: "optimization",
    typeLabel: {
      es: "Investigación Publicada & DOI",
      en: "Peer-Reviewed Research & DOI",
    },
    title: {
      es: "Optimización Multiobjetivo de Cadenas Logísticas de Biocombustibles",
      en: "Multiobjective Optimization of Residual Biofuel Supply Chains",
    },
    shortDescription: {
      es: "Modelado matemático mono y multiobjetivo para el diseño de cadenas de suministro de biocombustibles derivados de residuos en Colombia. Publicación formal con DOI.",
      en: "Single- and multiobjective mathematical programming for waste-derived biofuel supply network design in Colombia. Peer-reviewed journal paper with DOI.",
    },
    description: {
      es: "Desarrollo de modelos de optimización matemática orientados al diseño y planificación de cadenas logísticas de biocombustibles a partir de biomasa residual en Colombia. Evalúa simultáneamente criterios económicos, ambientales y de impacto social (generación de empleo y desarrollo regional en zonas vulnerables mediante el método de epsilon-restricción y Frentes de Pareto). Esta investigación derivó en el artículo publicado en Renewable Energies, Environment and Power Quality Journal (DOI: 10.24084/reepqj26-370) y obtuvo el Primer Puesto en la categoría Investigación Terminada en el Encuentro de Semilleros Multicampus de la Universidad Pontificia Bolivariana.",
      en: "Mathematical optimization frameworks formulated for the strategic design and tactical planning of residual biomass-to-biofuel supply chains in Colombia. The model simultaneously balances economic expenditures, environmental metrics, and regional social development (job creation scaled by municipal vulnerability indices using the epsilon-constraint method and Pareto fronts). This research was published in Renewable Energies, Environment and Power Quality Journal (DOI: 10.24084/reepqj26-370) and earned First Place in Finished Research at the UPB Multicampus Conference.",
    },
    status: {
      es: "Publicado · DOI 10.24084/reepqj26-370",
      en: "Published · DOI 10.24084/reepqj26-370",
    },
    technologies: [
      "Python",
      "Optimización Multiobjetivo",
      "Investigación de Operaciones",
      "Frentes de Pareto",
      "Transición Energética",
      "MILP / MINLP",
    ],
    repository: "https://github.com/Jdparra2004/Multiobjetivo",
    license: "MIT",
    gallery: [], // No fake unrelated image
  },
  {
    id: "compostaje-economia-circular-colaeiq",
    featured: true,
    category: "bioprocesses",
    typeLabel: {
      es: "Investigación Premiada Internacional",
      en: "Award-Winning International Research",
    },
    title: {
      es: "Revalorización de Residuos de Poda mediante Biorreactores con S. cerevisiae",
      en: "Upcycling of University Pruning Waste using Aerated Bioreactors with S. cerevisiae",
    },
    shortDescription: {
      es: "Optimización biotecnológica del compostaje aeróbico hacia una economía circular en la UPB. Ganador del Concurso de Carteles Científicos del XXX COLAEIQ Honduras 2025.",
      en: "Biotechnological optimization of aerobic composting toward a circular economy at UPB. Winner of the Scientific Poster Competition at XXX COLAEIQ Honduras 2025.",
    },
    description: {
      es: "Estudio experimental de ingeniería química enfocado en la aceleración del compostaje de residuos de poda universitaria mediante inoculación dirigida con Saccharomyces cerevisiae comercial. Se diseñó y operó un sistema de dos biorreactores aireados de 121 L (sacarosa 15 g/L y levadura 15 g/L) aplicando 42.86 L/m³ de inóculo sobre seis celdas rotativas de 2.8 m³ cada una (450 kg por celda). El seguimiento semanal demostró estabilización alcalina del pH (media 8.10), régimen termofílico activo (40–60 °C), retención de volumen útil con 54.33 % de reducción y una disminución del 50 % en el tiempo total de producción de fertilizante orgánico. Trabajo distinguido y ganador en el Concurso de Carteles del XXX COLAEIQ 2025 en la UNAH (Honduras).",
      en: "Experimental chemical engineering research focused on accelerating the composting of university pruning waste through targeted inoculation with commercial Saccharomyces cerevisiae. A system of two 121 L aerated bubble bioreactors was designed and operated (sucrose 15 g/L and yeast 15 g/L), delivering 42.86 L/m³ of active inoculum over six rotating composting cells of 2.8 m³ each (450 kg per cell). Weekly tracking demonstrated alkaline pH stabilization (mean 8.10), active thermophilic regime (40–60 °C), retention of usable volume (54.33% reduction), and a 50% decrease in fertilizer processing time. Awarded 1st Place in the Scientific Poster Competition at the XXX COLAEIQ 2025 at UNAH (Honduras).",
    },
    status: {
      es: "Ganador Concurso de Carteles · XXX COLAEIQ Honduras 2025",
      en: "Poster Competition Winner · XXX COLAEIQ Honduras 2025",
    },
    technologies: [
      "Bioprocesos",
      "Saccharomyces cerevisiae",
      "Biorreactores (121 L)",
      "Economía Circular",
      "Control de pH y Temperatura",
      "Ingeniería Ambiental",
    ],
    repository: "",
    startDate: "Marzo 2025",
    lastUpdate: "Agosto 2025 (XXX COLAEIQ — Honduras)",
    downloads: [
      {
        version: { es: "Cartel Científico Oficial", en: "Official Scientific Poster" },
        platform: { es: "XXX COLAEIQ Honduras 2025 — UPB Medellín", en: "XXX COLAEIQ Honduras 2025 — UPB Medellín" },
        url: "/assets/docs/Cartel-COLAEIQ-2025-Compostaje.pdf",
        type: "PDF",
      },
      {
        version: { es: "Abstract de Investigación", en: "Research Abstract" },
        platform: { es: "Ambiente y Energía — Economía Circular", en: "Environment & Energy — Circular Economy" },
        url: "/assets/docs/Abstract-COLAEIQ-2025-Compostaje.pdf",
        type: "PDF",
      },
      {
        version: { es: "Certificado Oficial de Reconocimiento", en: "Official Recognition Certificate" },
        platform: { es: "UNAH · Tegucigalpa, Honduras", en: "UNAH · Tegucigalpa, Honduras" },
        url: "/assets/docs/Certificado-COLAEIQ-2025-Compostaje.pdf",
        type: "PDF",
      },
    ],
  },
  {
    id: "simulacion-difusion-hidrogeno",
    featured: true,
    category: "hydrogen",
    typeLabel: {
      es: "Estudio Académico & Métodos Numéricos",
      en: "Academic Study & Numerical Methods",
    },
    title: {
      es: "Difusión de Hidrógeno y Estrés Mecánico (Diferencias Finitas)",
      en: "Hydrogen Diffusion and Mechanical Stress Simulation (Finite Differences)",
    },
    shortDescription: {
      es: "Simulador computacional en Python por diferencias finitas para modelar el transporte de hidrógeno en geometrías cilíndricas y perfiles de esfuerzo mecánico radial y tangencial.",
      en: "Python finite-difference numerical simulator modeling transient hydrogen transport across cylindrical walls and coupled radial/hoop mechanical stress profiles.",
    },
    description: {
      es: "Estudio computacional desarrollado en el curso de Métodos Numéricos en la Universidad Pontificia Bolivariana. Se implementó un sistema modular en Python con interfaz gráfica para resolver las ecuaciones diferenciales parciales de difusión transitoria de hidrógeno (segunda ley de Fick en coordenadas cilíndricas) y acoplarlas con el cálculo de esfuerzos mecánicos radiales y tangenciales (circunferenciales), evaluando la propensión a fragilización estructural.",
      en: "Computational study developed for the Numerical Methods course at Universidad Pontificia Bolivariana. A modular Python system with GUI was implemented to solve partial differential equations of transient hydrogen diffusion (Fick's second law in radial cylindrical coordinates) coupled with radial and circumferential hoop stress calculations, evaluating structural embrittlement risks.",
    },
    status: {
      es: "Proyecto de Curso · Métodos Numéricos UPB",
      en: "Course Project · Numerical Methods UPB",
    },
    technologies: [
      "Python",
      "Diferencias Finitas",
      "Interfaz Gráfica PyQt",
      "Fenómenos de Transporte",
      "Mecánica de Materiales",
    ],
    repository: "https://github.com/Jdparra2004/Simulacion_Hidrogeno",
    license: "MIT",
    gallery: [
      "/assets/img/proyectos/hidrogeno/difusion.jpg",
      "/assets/img/proyectos/hidrogeno/radial.jpg",
      "/assets/img/proyectos/hidrogeno/tangencial.jpg",
      "/assets/img/proyectos/hidrogeno/main.png",
    ],
  },
  {
    id: "analisis-termodinamico-hidrogeno-notebooks",
    featured: false,
    category: "hydrogen",
    typeLabel: {
      es: "Cuadernos de Estudio & Termodinámica",
      en: "Study Notebooks & Thermodynamics",
    },
    title: {
      es: "Modelado Termodinámico y Energético del Hidrógeno en Jupyter",
      en: "Thermodynamic and Energy Modeling of Hydrogen in Jupyter Notebooks",
    },
    shortDescription: {
      es: "Cuadernos computacionales en Python para el estudio de propiedades termodinámicas, balances y almacenamiento de hidrógeno.",
      en: "Computational Python notebooks for studying thermodynamic properties, energy balances, and hydrogen storage.",
    },
    description: {
      es: "Repositorio de análisis numérico e ingeniería química desarrollado en Jupyter Notebooks (Python) para evaluar el comportamiento físico-químico del hidrógeno como vector en la transición energética. Integra rutinas de cálculo de propiedades de transporte, balances de materia y energía, curvas de compresión y visualización paramétrica.",
      en: "Applied chemical engineering and numerical repository written in Jupyter Notebooks (Python) to assess the thermodynamic behavior of hydrogen as an energy vector. Integrates transport property subroutines, enthalpy/entropy balances, compression and storage curves, and parametric visualizations.",
    },
    status: {
      es: "Estudio Académico · Transición Energética",
      en: "Academic Study · Energy Transition",
    },
    technologies: [
      "Python",
      "Jupyter Notebook",
      "Termodinámica Avanzada",
      "Vectores Energéticos",
    ],
    repository: "https://github.com/Jdparra2004/Hidrogeno",
    license: "MIT",
  },
  {
    id: "funciones-base-radial-rbf",
    featured: false,
    category: "computing",
    typeLabel: {
      es: "Repositorio de Aprendizaje",
      en: "Learning Repository",
    },
    title: {
      es: "Aproximación e Interpolación con Funciones de Base Radial (RBF)",
      en: "Multivariate Approximation and Interpolation with Radial Basis Functions (RBF)",
    },
    shortDescription: {
      es: "Implementación computacional de aprendizaje de funciones de base radial para interpolación multivariable y ajuste de superficies.",
      en: "Educational computational implementation of Radial Basis Function networks for multivariate interpolation and surface reconstruction.",
    },
    description: {
      es: "Repositorio formativo y de aprendizaje numérico centrado en el uso de Funciones de Base Radial (RBF) para la reconstrucción de superficies, interpolación de datos dispersos y resolución de sistemas en ingeniería química. Incluye cuadernos interactivos con análisis de condicionamiento matricial, selección de parámetros de forma y comparación frente a polinomios tradicionales.",
      en: "Educational and numerical learning repository exploring Radial Basis Functions (RBF) for meshless surface fitting, scattered data interpolation, and numerical differential modeling. Features interactive notebooks examining matrix conditioning numbers, shape parameter optimization, and comparison with polynomial methods.",
    },
    status: {
      es: "Repositorio de Aprendizaje · Computación Numérica",
      en: "Learning Repository · Numerical Computing",
    },
    technologies: [
      "Python",
      "Jupyter Notebook",
      "Álgebra Lineal Numérica",
      "Interpolación Multivariable",
      "NumPy / SciPy",
    ],
    repository: "https://github.com/Jdparra2004/RBF",
    license: "MIT",
  },
  {
    id: "algoritmos-programacion-interfaces-python",
    featured: false,
    category: "computing",
    typeLabel: {
      es: "Monitoría Académica UPB (Previa) & Material Docente",
      en: "Teaching Assistant Materials (Previous) & Practice",
    },
    title: {
      es: "Repositorio de Algoritmia Científica e Interfaces Gráficas en Python",
      en: "Scientific Algorithms and Python GUI Applications Repository",
    },
    shortDescription: {
      es: "Compendio de soluciones algorítmicas, interfaces de usuario (GUI) y talleres prácticos elaborados durante la experiencia como monitor académico en la UPB.",
      en: "Compilation of algorithmic solutions, graphical user interfaces (GUI), and practical workshops crafted during past teaching assistant experience at UPB.",
    },
    description: {
      es: "Compendio de módulos en Python y cuadernos computacionales desarrollados como material de apoyo durante la experiencia previa como monitor académico en los cursos de Programación y Métodos Numéricos en la Universidad Pontificia Bolivariana. Reúne implementaciones de algoritmos, talleres de evaluación y construcción de interfaces gráficas de usuario interactivas.",
      en: "Collection of Python modules and computational notebooks developed as instructional support material during past undergraduate teaching assistant experience at Universidad Pontificia Bolivariana. Encompasses algorithmic routines, practical evaluations, and interactive GUI applications.",
    },
    status: {
      es: "Experiencia Previa como Monitor · Docencia UPB",
      en: "Past Teaching Assistant Experience · UPB",
    },
    technologies: [
      "Python",
      "Interfaces Gráficas (GUI)",
      "Jupyter Notebook",
      "Algoritmia",
      "Docencia Universitaria",
    ],
    repository: "https://github.com/Jdparra2004/Talleres-Parcial",
    license: "MIT",
  },
  {
    id: "simuladores-dinamica-academicos",
    featured: false,
    category: "computing",
    typeLabel: {
      es: "Simuladores Educativos",
      en: "Educational Simulators",
    },
    title: {
      es: "Simuladores Físicos: Balística y Sistema Riel-Esfera",
      en: "Physics Simulation Suite: Ballistics and Rail-Sphere Dynamics",
    },
    shortDescription: {
      es: "Aplicaciones educativas en Python para el estudio interactivo de cinemática y dinámica de partículas.",
      en: "Python educational applications for interactive study of kinematics and particle dynamics.",
    },
    description: {
      es: "Conjunto de aplicaciones didácticas desarrolladas en Python para modelar y visualizar fenómenos clásicos de la física mecánica: el movimiento parabólico de proyectiles y la dinámica de una esfera sobre un riel.",
      en: "Educational simulation applications developed in Python modeling classical mechanical systems: projectile motion and rotational sphere-on-rail dynamics.",
    },
    status: {
      es: "Material Académico · Física Computacional",
      en: "Academic Material · Computational Physics",
    },
    technologies: [
      "Python",
      "Física Computacional",
      "Interfaz Gráfica (GUI)",
    ],
    repository: "https://github.com/Jdparra2004/Simulador-Movimiento-de-un-Proyectil",
    license: "MIT",
  },
  {
    id: "simulador-riel-y-esfera",
    featured: false,
    category: "computing",
    typeLabel: {
      es: "Simulador de Dinámica No Lineal",
      en: "Nonlinear Dynamics Simulator",
    },
    title: {
      es: "Simulador Dinámico: Sistema No Lineal Riel y Esfera",
      en: "Nonlinear Dynamic Simulator: Tilting Rail and Ball System",
    },
    shortDescription: {
      es: "Modelado físico-matemático y simulación en Python del acoplamiento rotacional y traslacional de una esfera sobre un riel basculante.",
      en: "Mathematical modeling and Python simulation of coupled translational-rotational dynamics of a ball on a tilting rail.",
    },
    description: {
      es: "Aplicación académica en Python orientada al análisis de sistemas dinámicos clásicos: el movimiento de rodadura sin deslizamiento de una esfera sobre un riel basculante, resolviendo ecuaciones acopladas de energía cinética, inercia y torque.",
      en: "Python academic application modeling non-slip rolling dynamics of a sphere over a tilting rail, solving coupled equations of kinetic energy, inertia, and torque.",
    },
    status: {
      es: "Estudio Académico · Dinámica",
      en: "Academic Study · Dynamics",
    },
    technologies: [
      "Python",
      "Dinámica de Sistemas",
      "Mecánica Clásica",
    ],
    repository: "https://github.com/Jdparra2004/Riel-y-Esfera",
    license: "MIT",
  },
];
