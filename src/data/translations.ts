export type Locale = "es" | "en";

export interface TranslationDictionary {
  announcement: {
    badge: string;
    text: string;
    cta: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    blog: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    greeting: string;
    name: string;
    role: string;
    bio: string;
    btnProjects: string;
    btnResearch: string;
    btnCv: string;
    orcidBadge: string;
    statusLabel: string;
    statusValue: string;
    locationLabel: string;
    locationValue: string;
    institutionLabel: string;
    institutionValue: string;
  };
  statement: {
    quote: string;
    highlight1: string;
    highlight2: string;
    author: string;
  };
  stats: {
    stat1Number: string;
    stat1Label: string;
    stat1Desc: string;
    stat2Number: string;
    stat2Label: string;
    stat2Desc: string;
    stat3Number: string;
    stat3Label: string;
    stat3Desc: string;
    stat4Number: string;
    stat4Label: string;
    stat4Desc: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterOptimization: string;
    filterBioprocesses: string;
    filterHydrogen: string;
    filterComputing: string;
    viewProject: string;
    viewCode: string;
    downloadDoc: string;
    technologies: string;
    status: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    lead: string;
    downloadCv: string;
    exploreWork: string;
    academicTitle: string;
    academicDesc: string;
    researchTitle: string;
    researchDesc: string;
    seedbedTitle: string;
    seedbedDesc: string;
    competenciesTitle: string;
    competenciesDesc: string;
    areas: {
      mathOpt: { title: string; desc: string };
      scientificPython: { title: string; desc: string };
      energyTransition: { title: string; desc: string };
      bioprocesses: { title: string; desc: string };
    };
    awardsTitle: string;
    awardsList: Array<{ title: string; event: string; year: string; desc: string }>;
  };
  blogPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    readMore: string;
    minRead: string;
    backToBlog: string;
    doiLabel: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    privacyConsent: string;
    privacyLink: string;
    sendButton: string;
    sending: string;
    sentSuccess: string;
    sentError: string;
    channelsTitle: string;
    orcidDesc: string;
    locationDesc: string;
    responseCommitment: string;
  };
  legal: {
    privacyTitle: string;
    termsTitle: string;
    habeasDataNote: string;
    allRightsReserved: string;
  };
  modal: {
    close: string;
    detailsTitle: string;
    keyHighlights: string;
    downloads: string;
    sourceCode: string;
    status: string;
  };
}

export const translations: Record<Locale, TranslationDictionary> = {
  es: {
    announcement: {
      badge: "INVESTIGACIÓN ACTIVA",
      text: "Ingeniería Química · Optimización Multiobjetivo · UPB Medellín",
      cta: "Ver Publicaciones",
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      blog: "Investigación",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "ORCID: 0009-0008-0321-000X · Semillero A+D UPB",
      greeting: "Hola, soy",
      name: "Juan David Parra Cantor",
      role: "Ingeniería Química · Optimización Multiobjetivo · Computación Científica",
      bio: "Estudiante de 8.° semestre de Ingeniería Química en la Universidad Pontificia Bolivariana (Medellín, Colombia). Especializado en optimización matemática, algoritmos en Python para la transición energética y bioprocesos sostenibles.",
      btnProjects: "Explorar Proyectos",
      btnResearch: "Artículos Científicos",
      btnCv: "Descargar CV (PDF)",
      orcidBadge: "Perfil Académico ORCID",
      statusLabel: "ESTADO ACADÉMICO",
      statusValue: "8.° Semestre ChE · Investigador Semillero A+D",
      locationLabel: "UBICACIÓN",
      locationValue: "Medellín, Colombia",
      institutionLabel: "INSTITUCIÓN",
      institutionValue: "Universidad Pontificia Bolivariana",
    },
    statement: {
      quote: "LA INGENIERÍA QUÍMICA MODERNA CONVERGE CON LA",
      highlight1: "OPTIMIZACIÓN MULTIOBJETIVO",
      highlight2: "Y EL RIGOR NUMÉRICO",
      author: "Juan David Parra Cantor — Enfoque computacional aplicado al impacto territorial y la sostenibilidad",
    },
    stats: {
      stat1Number: "1.°",
      stat1Label: "PUESTO MULTICAMPUS UPB",
      stat1Desc: "Investigación Terminada en Cadenas de Biocombustibles",
      stat2Number: "Premio",
      stat2Label: "XXX COLAEIQ HONDURAS 2025",
      stat2Desc: "Ganador en Concurso Científico de Carteles",
      stat3Number: "DOI",
      stat3Label: "PUBLICACIÓN CIENTÍFICA",
      stat3Desc: "Artículo indexado en RE&PQJ (ISSN 3020-531X)",
      stat4Number: "8.°",
      stat4Label: "SEMESTRE ACADÉMICO",
      stat4Desc: "Ingeniería Química · Escuela de Ingenierías UPB",
    },
    featured: {
      eyebrow: "INVESTIGACIÓN DESTACADA",
      title: "PROYECTOS Y PUBLICACIONES",
      subtitle: "Modelado físico-químico, algoritmos numéricos en Python y biotecnología aplicada con impacto ambiental y social comprobado.",
      viewAll: "Ver todos los proyectos",
    },
    projectsPage: {
      eyebrow: "PORTAFOLIO CIENTÍFICO Y TÉCNICO",
      title: "PROYECTOS Y DESARROLLOS",
      subtitle: "Colección de modelos matemáticos, simuladores por diferencias finitas, optimización en Python y bioprocesos de economía circular.",
      filterAll: "Todos",
      filterOptimization: "Optimización",
      filterBioprocesses: "Bioprocesos",
      filterHydrogen: "Hidrógeno & Transporte",
      filterComputing: "Computación Numérica",
      viewProject: "Ver Detalles",
      viewCode: "Repositorio GitHub",
      downloadDoc: "Descargar Documento",
      technologies: "Tecnologías & Métodos",
      status: "Estado de Investigación",
    },
    aboutPage: {
      eyebrow: "TRAYECTORIA Y PERFIL",
      title: "SOBRE MÍ",
      lead: "Ingeniero Químico en formación con sólida base en matemáticas aplicadas, fenómenos de transporte, investigación de operaciones y programación científica en Python.",
      downloadCv: "Descargar Curriculum Vitae",
      exploreWork: "Ver Proyectos",
      academicTitle: "Formación Universitaria",
      academicDesc: "Cursando el 8.° semestre del programa de Ingeniería Química en la Universidad Pontificia Bolivariana (Medellín). Enfoque en modelado de procesos, balances de materia y energía, termodinámica avanzada y simulación computacional.",
      researchTitle: "Líneas de Investigación",
      researchDesc: "Desarrollo de algoritmos de optimización mono y multiobjetivo (método de epsilon-restricción, Frentes de Pareto) orientados a cadenas de suministro sostenibles, transporte de masa con fragilización por hidrógeno y aceleración biotecnológica de biomasa residual.",
      seedbedTitle: "Semillero Automática y Diseño (A+D)",
      seedbedDesc: "Miembro activo del Semillero A+D de la UPB, donde lidero proyectos de formulación matemática, logística inversa y simulación de sistemas complejos.",
      competenciesTitle: "Competencias Técnicas Clave",
      competenciesDesc: "Herramientas, lenguajes y fundamentos aplicados en proyectos de investigación:",
      areas: {
        mathOpt: {
          title: "Optimización Multiobjetivo & OR",
          desc: "Formulación de problemas lineales y no lineales (MILP / MINLP), frentes de Pareto, ponderación de impacto social y económico.",
        },
        scientificPython: {
          title: "Computación Científica en Python",
          desc: "NumPy, SciPy, Matplotlib 3D, Jupyter Notebooks, discretización por diferencias finitas y funciones de base radial (RBF).",
        },
        energyTransition: {
          title: "Transición Energética e Hidrógeno",
          desc: "Simulación de difusión transitoria de H2, acoplamiento con esfuerzos radiales/tangenciales y balances termodinámicos.",
        },
        bioprocesses: {
          title: "Bioprocesos & Economía Circular",
          desc: "Diseño y operación de biorreactores aeróbicos (121 L), bioaumentación con levaduras comerciales y compostaje acelerado.",
        },
      },
      awardsTitle: "Reconocimientos y Premios",
      awardsList: [
        {
          title: "Ganador Concurso de Carteles Científicos",
          event: "XXX Congreso Latinoamericano de Estudiantes de Ingeniería Química (COLAEIQ 2025)",
          year: "Tegucigalpa, Honduras — Agosto 2025",
          desc: "Investigación sobre revalorización de residuos de poda universitaria con biorreactores y S. cerevisiae, reduciendo el ciclo en 50 %.",
        },
        {
          title: "Primer Puesto — Categoría Investigación Terminada",
          event: "Encuentro de Semilleros Multicampus UPB",
          year: "Medellín, Colombia — 2025",
          desc: "Modelo matemático de optimización multiobjetivo para cadenas de suministro de biocombustibles derivados de residuos en Colombia.",
        },
        {
          title: "Artículo Científico Publicado (DOI)",
          event: "Renewable Energies, Environment and Power Quality Journal (ISSN 3020-531X)",
          year: "DOI: 10.24084/reepqj26-370 — 2026",
          desc: "Publicación formal indexada sobre el impacto social y logístico del modelado multiobjetivo en bioenergía.",
        },
      ],
    },
    blogPage: {
      eyebrow: "DIVULGACIÓN Y PAPERS",
      title: "ARTÍCULOS E INVESTIGACIÓN",
      subtitle: "Análisis técnico detallado, formulaciones matemáticas, código reproducible y resultados experimentales de proyectos en desarrollo.",
      readMore: "Leer Artículo Completo",
      minRead: "min de lectura",
      backToBlog: "← Volver a todos los artículos",
      doiLabel: "DOI Oficial:",
    },
    contactPage: {
      eyebrow: "COMUNICACIÓN DIRECTA",
      title: "CONTACTO PROFESIONAL",
      subtitle: "¿Te interesa colaborar en investigación, desarrollo computacional o proyectos de ingeniería química? Hablemos.",
      nameLabel: "Nombre Completo",
      namePlaceholder: "Ej. Dra. María Gómez / Ing. Carlos Mendoza",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "tu-correo@institucion.edu / empresa.com",
      subjectLabel: "Asunto / Línea de Interés",
      subjectPlaceholder: "Colaboración en Optimización / Consulta de Investigación",
      messageLabel: "Mensaje",
      messagePlaceholder: "Describe tu propuesta, consulta académica o proyecto...",
      privacyConsent: "Acepto el tratamiento de mis datos de contacto conforme a la Política de Privacidad y la Ley 1581 de 2012 (Colombia).",
      privacyLink: "Ver política",
      sendButton: "Enviar Mensaje",
      sending: "Enviando...",
      sentSuccess: "¡Mensaje recibido con éxito! Me comunicaré a la brevedad posible.",
      sentError: "Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo o escríbeme directamente.",
      channelsTitle: "Canales Directos e Institucionales",
      orcidDesc: "Identificador de investigador Open Researcher and Contributor ID",
      locationDesc: "Medellín, Antioquia, Colombia (Presencial y Remoto)",
      responseCommitment: "Compromiso de respuesta habitual en menos de 24 a 48 horas laborales.",
    },
    legal: {
      privacyTitle: "Política de Privacidad y Tratamiento de Datos Personales",
      termsTitle: "Términos y Condiciones de Uso",
      habeasDataNote: "Cumplimiento normativo Ley 1581 de 2012 (Habeas Data) y Decreto 1377 de 2013 · República de Colombia.",
      allRightsReserved: "Todos los derechos reservados. Desarrollado con Next.js & React.",
    },
    modal: {
      close: "Cerrar",
      detailsTitle: "Detalles de la Investigación",
      keyHighlights: "Aspectos Clave y Métodos",
      downloads: "Documentos & Descargas Oficiales",
      sourceCode: "Código Fuente en GitHub",
      status: "Estado",
    },
  },
  en: {
    announcement: {
      badge: "ACTIVE RESEARCH",
      text: "Chemical Engineering · Multiobjective Optimization · UPB Medellín",
      cta: "View Publications",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      blog: "Research",
      contact: "Contact",
    },
    hero: {
      eyebrow: "ORCID: 0009-0008-0321-000X · A+D Research Group UPB",
      greeting: "Hello, I am",
      name: "Juan David Parra Cantor",
      role: "Chemical Engineering Undergraduate · Scientific Computing · Energy Transition",
      bio: "8th-semester Chemical Engineering student at Universidad Pontificia Bolivariana (Medellín, Colombia). Focused on multiobjective mathematical optimization, numerical simulation in Python for the energy transition, and sustainable bioprocesses.",
      btnProjects: "Explore Projects",
      btnResearch: "Research Papers",
      btnCv: "Download CV (PDF)",
      orcidBadge: "ORCID Academic Profile",
      statusLabel: "ACADEMIC STATUS",
      statusValue: "8th Sem ChE · A+D Research Group Fellow",
      locationLabel: "LOCATION",
      locationValue: "Medellín, Colombia",
      institutionLabel: "INSTITUTION",
      institutionValue: "Universidad Pontificia Bolivariana",
    },
    statement: {
      quote: "MODERN CHEMICAL ENGINEERING CONVERGES WITH",
      highlight1: "MULTIOBJECTIVE OPTIMIZATION",
      highlight2: "AND NUMERICAL RIGOR",
      author: "Juan David Parra Cantor — Computational approach applied to regional development and sustainability",
    },
    stats: {
      stat1Number: "1st",
      stat1Label: "UPB MULTICAMPUS AWARD",
      stat1Desc: "Finished Research in Biofuel Supply Chains",
      stat2Number: "Award",
      stat2Label: "XXX COLAEIQ HONDURAS 2025",
      stat2Desc: "Winner of the Scientific Poster Competition",
      stat3Number: "DOI",
      stat3Label: "PEER-REVIEWED PAPER",
      stat3Desc: "Published in RE&PQJ (ISSN 3020-531X)",
      stat4Number: "8th",
      stat4Label: "ACADEMIC SEMESTER",
      stat4Desc: "Chemical Engineering · UPB School of Engineering",
    },
    featured: {
      eyebrow: "FEATURED RESEARCH",
      title: "PROJECTS & PUBLICATIONS",
      subtitle: "Physicochemical modeling, Python numerical algorithms, and applied biotechnology with proven environmental and territorial impact.",
      viewAll: "View all projects",
    },
    projectsPage: {
      eyebrow: "SCIENTIFIC & TECHNICAL PORTFOLIO",
      title: "PROJECTS & DEVELOPMENTS",
      subtitle: "A curated collection of mathematical models, finite-difference simulators, Python optimization tools, and circular economy bioprocesses.",
      filterAll: "All",
      filterOptimization: "Optimization",
      filterBioprocesses: "Bioprocesses",
      filterHydrogen: "Hydrogen & Transport",
      filterComputing: "Numerical Computing",
      viewProject: "View Details",
      viewCode: "GitHub Repository",
      downloadDoc: "Download Document",
      technologies: "Technologies & Methods",
      status: "Research Status",
    },
    aboutPage: {
      eyebrow: "BACKGROUND & PROFILE",
      title: "ABOUT ME",
      lead: "Chemical Engineering undergraduate with a strong foundation in applied mathematics, transport phenomena, operations research, and scientific programming in Python.",
      downloadCv: "Download Curriculum Vitae",
      exploreWork: "View Projects",
      academicTitle: "University Education",
      academicDesc: "Currently in the 8th semester of the Chemical Engineering program at Universidad Pontificia Bolivariana (Medellín). Strong emphasis on process modeling, mass and energy balances, advanced thermodynamics, and numerical simulation.",
      researchTitle: "Research Lines",
      researchDesc: "Formulation of single and multiobjective optimization models (epsilon-constraint method, Pareto fronts) for sustainable supply networks, mass transport coupled with hydrogen embrittlement, and biotechnological enhancement of organic residues.",
      seedbedTitle: "Automation & Design Research Group (A+D)",
      seedbedDesc: "Active student researcher at UPB's A+D Seedbed, leading mathematical programming, reverse logistics models, and simulation pipelines.",
      competenciesTitle: "Key Technical Competencies",
      competenciesDesc: "Tools, programming languages, and engineering principles applied in research:",
      areas: {
        mathOpt: {
          title: "Multiobjective Optimization & OR",
          desc: "Linear and nonlinear mathematical programming (MILP / MINLP), Pareto fronts, territorial vulnerability and economic trade-offs.",
        },
        scientificPython: {
          title: "Scientific Computing in Python",
          desc: "NumPy, SciPy, Matplotlib 3D, Jupyter Notebooks, finite difference schemes, and Radial Basis Function (RBF) networks.",
        },
        energyTransition: {
          title: "Energy Transition & Hydrogen",
          desc: "Transient H2 diffusion modeling, coupled radial/tangential stress evaluation, and thermodynamic energy balances.",
        },
        bioprocesses: {
          title: "Bioprocesses & Circular Economy",
          desc: "Operation of 121 L aerated bubble bioreactors, bioaugmentation with commercial Saccharomyces cerevisiae, and accelerated composting.",
        },
      },
      awardsTitle: "Honors and Awards",
      awardsList: [
        {
          title: "Scientific Poster Competition Winner",
          event: "XXX Latin American Congress of Chemical Engineering Students (COLAEIQ 2025)",
          year: "Tegucigalpa, Honduras — August 2025",
          desc: "Experimental study on pruning residue upcycling via bioreactors and S. cerevisiae, cutting cycle time by 50%.",
        },
        {
          title: "1st Place — Finished Research Category",
          event: "UPB Multicampus Research Seedbeds Conference",
          year: "Medellín, Colombia — 2025",
          desc: "Multiobjective optimization model for residual biomass biofuel supply chains across Colombia.",
        },
        {
          title: "Peer-Reviewed Scientific Article (DOI)",
          event: "Renewable Energies, Environment and Power Quality Journal (ISSN 3020-531X)",
          year: "DOI: 10.24084/reepqj26-370 — 2026",
          desc: "Indexed publication evaluating social and economic trade-offs in biofuel network design.",
        },
      ],
    },
    blogPage: {
      eyebrow: "DISSEMINATION & PAPERS",
      title: "ARTICLES & RESEARCH",
      subtitle: "In-depth engineering analysis, mathematical formulations, reproducible code, and experimental validation from ongoing projects.",
      readMore: "Read Full Article",
      minRead: "min read",
      backToBlog: "← Back to all articles",
      doiLabel: "Official DOI:",
    },
    contactPage: {
      eyebrow: "DIRECT COMMUNICATION",
      title: "PROFESSIONAL CONTACT",
      subtitle: "Interested in academic collaboration, computational development, or chemical engineering research? Let's connect.",
      nameLabel: "Full Name",
      namePlaceholder: "E.g. Dr. Maria Gomez / Eng. Carlos Mendoza",
      emailLabel: "Email Address",
      emailPlaceholder: "your-email@institution.edu / company.com",
      subjectLabel: "Subject / Area of Interest",
      subjectPlaceholder: "Optimization Collaboration / Research Inquiry",
      messageLabel: "Message",
      messagePlaceholder: "Describe your inquiry, project proposal, or research topic...",
      privacyConsent: "I agree to the processing of my contact information in accordance with the Privacy Policy and Colombian Law 1581 of 2012.",
      privacyLink: "View policy",
      sendButton: "Send Message",
      sending: "Sending...",
      sentSuccess: "Message received successfully! I will get back to you as soon as possible.",
      sentError: "An error occurred while sending your message. Please try again or reach out directly.",
      channelsTitle: "Direct & Institutional Channels",
      orcidDesc: "Open Researcher and Contributor ID identifier",
      locationDesc: "Medellín, Antioquia, Colombia (On-site & Remote)",
      responseCommitment: "Typical response turnaround within 24 to 48 business hours.",
    },
    legal: {
      privacyTitle: "Privacy Policy & Personal Data Protection",
      termsTitle: "Terms and Conditions of Use",
      habeasDataNote: "Regulatory compliance under Colombian Law 1581 of 2012 (Habeas Data) and Decree 1377 of 2013.",
      allRightsReserved: "All rights reserved. Built with Next.js & React.",
    },
    modal: {
      close: "Close",
      detailsTitle: "Research Project Details",
      keyHighlights: "Key Highlights & Methods",
      downloads: "Official Documents & Downloads",
      sourceCode: "Source Code on GitHub",
      status: "Status",
    },
  },
};
