export const translations = {
  es: {
    nav: {
      projects: "Proyectos",
      content: "Contenido",
      approach: "Enfoque",
      trajectory: "Trayectoria",
      tech: "Tech",
      contact: "Contacto",
    },
    hero: {
      subtitle1: "Sistemas con criterio.",
      subtitle2: "Código con ",
      intention: "intención",
      description: "Ingeniería de Software & Narrativa Digital. Diseño sistemas con Django y React mientras documento el proceso para elevar el estándar técnico.",
      cta_view: "Ver Proyectos",
      cta_talk: "Hablemos",
    },
    projects: {
      title1: "Soluciones de",
      title2: "Arquitectura.",
      case_studies: "Case Studies by Par Digital",
      view_prod: "Ver en Producción",
      tech_label: "Tecnología",
      challenge: "El Desafío",
      decision: "Decisión Crítica",
      architecture: "Arquitectura",
      outcome: "Resultado",
      items: [
        {
          title: "Victoria Estrella (Romi Joyería)",
          category: "Sistema de Control de Joyas | Par Digital",
          problem: "Control de stock crítico para piezas de plata y moissanita con alta rotación. La gestión manual impedía el escalamiento del negocio.",
          technical_decision: "Arquitectura distribuida con Firebase Realtime para sincronización instantánea en múltiples puntos de venta.",
          architecture: "Sistema cloud-native optimizado para dispositivos móviles. Base de datos NoSQL con triggers para alertas de stock bajo.",
          outcome: "Precisión absoluta en inventario. El sistema permitió a la dueña delegar la operación con confianza total en los datos.",
        },
        {
          title: "LINTAC Access & Inventory",
          category: "Gestión de Activos IT | Par Digital",
          problem: "Institución con cientos de activos gestionados en Excel. Pérdida de trazabilidad y riesgos de seguridad en el control de acceso.",
          technical_decision: "Centralización de procesos mediante Django Rest Framework y una capa de servicios desacoplada.",
          architecture: "Dockerized monolithic architecture. PostgreSQL como fuente única de verdad con auditoría de cambios en tiempo real.",
          outcome: "Trazabilidad del 100% del hardware. Reducción drástica en tiempos de auditoría interna y control de acceso unificado.",
        },
        {
          title: "Dulzuras Nicky Nicole",
          category: "E-Commerce de Proximidad | Par Digital",
          problem: "Colapso en la atención vía WhatsApp y falta de catálogo visual autogestionable.",
          technical_decision: "Validación de pedidos en Cloud Functions para reducir carga manual en el equipo de ventas.",
          architecture: "SPA de alto rendimiento integrada con API de WhatsApp para flujo de conversión directo.",
          outcome: "Digitalización total del catálogo. Aumento en el ticket promedio gracias a la facilidad del armado de pedidos digital.",
        }
      ]
    },
    content: {
      section_label: "Documentación & Media",
      title1: "Insights",
      title2: "Hub.",
      description: "Como ByHijar, comparto mi proceso de arquitectura y gestión con una comunidad de +100k personas. Humanizando la ingeniería para crear mejores negocios.",
      status: "Status: Live",
      card_title: "Documentando la construcción de Par Digital.",
      card_desc: "Muestro cómo construyo sistemas desde cero en TikTok e Instagram, validando la metodología que aplicamos con nuestros clientes de consultoría.",
      cta_youtube: "Ver Contenido (TikTok)",
      steps: [
        { title: "Arquitectura Real", desc: "Mostrando los retos técnicos detrás de cada sistema que diseñamos." },
        { title: "Gestión Freelance", desc: "Compartiendo la realidad de manejar proyectos de alto impacto de forma independiente." },
        { title: "Innovación Retail", desc: "Explorando cómo la tecnología transforma negocios tradicionales como joyerías y e-commerce." }
      ],
      vision: [
        { label: "El Creador", desc: "ByHijar: La cara y el cerebro estratégico detrás de la arquitectura de cada solución." },
        { label: "La Ejecución", desc: "Par Digital: La firma de consultoría que transforma esos diseños en software robusto y estable." },
        { label: "El Impacto", desc: "Uniendo narrativa digital y técnica pura para elevar el estándar del desarrollo de software local." }
      ]
    },
    approach: {
      section_label: "Enfoque",
      title1: "Ingeniería",
      title2: "aplicada.",
      description: "No escribimos código por escribir. Diseñamos sistemas que se convierten en el motor de crecimiento de tu empresa.",
      items: [
        { title: "Estrategia ByHijar", desc: "Entendimiento profundo del negocio antes de tocar una sola tecla. Diseño de sistemas con propósito comercial." },
        { title: "Sello Par Digital", desc: "Software que no falla. Implementaciones con estándares de industria y cimientos escalables para los próximos 5 años." },
        { title: "Foco en Resultados", desc: "Eliminamos el caos operativo (planillas, WhatsApp desordenado) y lo reemplazamos por claridad y automatización." },
        { title: "Documentación Viva", desc: "Cada sistema viene con una narrativa técnica clara, permitiendo que el conocimiento sea accesible y no una caja negra." }
      ]
    },
    trajectory: {
      section_label: "Trayectoria",
      title: "Manifiesto.",
      manifesto_main: "ByHijar diseña la visión. Par Digital construye la realidad.",
      p1: "En la intersección entre la narrativa digital y la ingeniería de software, he construido una firma que no solo entrega código, sino activos financieros. Mi enfoque personal bajo ByHijar garantiza que cada sistema entienda el pulso del mercado actual.",
      p2: "Par Digital es mi brazo ejecutor: procesos refinados, estabilidad garantizada y una obsesión por la calidad. Si buscas un programador que desaparece, no somos nosotros. Si buscas cimientos para que tu negocio (como tu joyería) escale sin fricciones, has llegado al lugar indicado.",
    },
    tech: {
      section_label: "Herramientas",
      title: "Stack Técnico",
      description: "El arsenal tecnológico que ByHijar y Par Digital utilizan para garantizar sistemas estables y de alto rendimiento.",
      categories: ["Frontend", "Backend y Bases de Datos", "Gestión y Herramientas IT", "Diseño Gráfico", "Contenido & Producción"]
    },
    contact: {
      section_label: "Solicitud",
      title1: "Lleva tu negocio",
      title2: "al siguiente nivel.",
      description: "¿Tu operación está limitada por procesos manuales? Diseñemos el sistema que tu negocio necesita para escalar.",
      scope_label: "Consultoría Especializada",
      scope_items: ["Sistemas para Retail & Joyerías", "Automatización de Inventarios", "Arquitectura Cloud & APIs"],
      chat_cta: "Consultoría Directa (WhatsApp)",
      labels: {
        identity: "Identidad",
        name_placeholder: "Nombre / Organización",
        contact: "Contacto",
        email_placeholder: "correo@organizacion.com",
        context: "Contexto & Requerimiento",
        message_placeholder: "Describe el problema. Si tienes una joyería o retail, cuéntame sobre tu gestión de stock actual.",
        submit: "Enviar Solicitud",
        sending: "Procesando Consulta...",
      },
      status: {
        ok: "Solicitud recibida por el equipo. ByHijar analizará tu caso personalmente.",
        error: "Error en el envío. Por favor contacta vía WhatsApp.",
        captcha: "Verificación requerida para seguridad.",
      }
    },
    footer: {
      builder: "ByHijar x Par Digital",
      location: "Santiago, Chile",
      built_with: "Sistemas con criterio."
    }
  },
  en: {
    nav: {
      projects: "Projects",
      content: "Content",
      approach: "Approach",
      trajectory: "Manifesto",
      tech: "Tech",
      contact: "Contact",
    },
    hero: {
      subtitle1: "Systems with criteria.",
      subtitle2: "Code with ",
      intention: "intention",
      description: "Software Engineering & Digital Narrative. Designing systems while documenting the process to raise technical standards.",
      cta_view: "View Projects",
      cta_talk: "Let's Talk",
    },
    projects: {
      title1: "Architectural",
      title2: "Solutions.",
      case_studies: "Case Studies by Par Digital",
      view_prod: "View Live",
      tech_label: "Technology",
      challenge: "The Challenge",
      decision: "Critical Decision",
      architecture: "Architecture",
      outcome: "Outcome",
      items: [
        {
          title: "Victoria Estrella (Romi Jewelry)",
          category: "Jewelry Control System | Par Digital",
          problem: "Critical stock control for high-turnover silver and moissanite pieces. Manual management prevented business scaling.",
          technical_decision: "Distributed architecture with Firebase Realtime for instant synchronization across multiple points of sale.",
          architecture: "Cloud-native system optimized for mobile devices. NoSQL database with triggers for low stock alerts.",
          outcome: "Absolute inventory accuracy. The system allowed the owner to delegate operations with total confidence in the data.",
        },
        {
          title: "LINTAC Access & Inventory",
          category: "IT Asset Management | Par Digital",
          problem: "Institution with hundreds of assets managed in Excel. Loss of traceability and security risks in access control.",
          technical_decision: "Process centralization via Django Rest Framework and a decoupled service layer.",
          architecture: "Dockerized monolithic architecture. PostgreSQL as single source of truth with real-time audit logs.",
          outcome: "100% hardware traceability. Drastic reduction in internal audit times and unified access control.",
        },
        {
          title: "Dulzuras Nicky Nicole",
          category: "Proximity E-Commerce | Par Digital",
          problem: "Collapse in WhatsApp customer service and lack of a self-managed visual catalog.",
          technical_decision: "Order validation in Cloud Functions to reduce manual burden on the sales team.",
          architecture: "High-performance SPA integrated with WhatsApp API for direct conversion flow.",
          outcome: "100% catalog digitization. Increased average ticket thanks to the ease of digital order assembly.",
        }
      ]
    },
    content: {
      section_label: "Documentation & Media",
      title1: "Insights",
      title2: "Hub.",
      description: "As ByHijar, I share my architecture and management process with a community of +100k people. Humanizing engineering to create better businesses.",
      status: "Status: Live",
      card_title: "Documenting Par Digital's building process.",
      card_desc: "I show how I build systems from scratch on TikTok and Instagram, validating the methodology we apply with our consulting clients.",
      cta_youtube: "View Content (TikTok)",
      steps: [
        { title: "Real Architecture", desc: "Showing the technical challenges behind every system we design." },
        { title: "Freelance Management", desc: "Sharing the reality of managing high-impact projects independently." },
        { title: "Retail Innovation", desc: "Exploring how technology transforms traditional businesses like jewelry and e-commerce." }
      ],
      vision: [
        { label: "The Creator", desc: "ByHijar: The face and strategic brain behind every solution's architecture." },
        { label: "The Execution", desc: "Par Digital: The consulting firm that transforms those designs into robust and stable software." },
        { label: "The Impact", desc: "Uniting digital narrative and pure technique to raise the bar of local software development." }
      ]
    },
    approach: {
      section_label: "Approach",
      title1: "Applied",
      title2: "Engineering.",
      description: "We don't write code for the sake of it. We design systems that become your company's growth engine.",
      items: [
        { title: "ByHijar Strategy", desc: "Deep business understanding before touching a single key. System design with commercial purpose." },
        { title: "Par Digital Seal", desc: "Software that doesn't fail. Implementations with industry standards and scalable foundations for the next 5 years." },
        { title: "Results Focused", desc: "We eliminate operational chaos (spreadsheets, messy WhatsApp) and replace it with clarity and automation." },
        { title: "Living Documentation", desc: "Every system comes with a clear technical narrative, making knowledge accessible and not a black box." }
      ]
    },
    trajectory: {
      section_label: "Manifesto",
      title: "Philosophy.",
      manifesto_main: "ByHijar designs the vision. Par Digital builds the reality.",
      p1: "At the intersection of digital narrative and software engineering, I have built a firm that delivers financial assets, not just code. My personal approach under ByHijar ensures each system understands today's market pulse.",
      p2: "Par Digital is my execution arm: refined processes, guaranteed stability, and an obsession with quality. If you're looking for a programmer who disappears, that's not us. If you seek foundations for your business (like your jewelry) to scale frictionlessly, you've come to the right place.",
    },
    tech: {
      section_label: "Tools",
      title: "Technical Stack",
      description: "The technological arsenal that ByHijar and Par Digital use to ensure stable and high-performance systems.",
      categories: ["Frontend", "Backend & Databases", "IT Management & Tools", "Graphic Design", "Content & Production"]
    },
    contact: {
      section_label: "Inquiry",
      title1: "Take your business",
      title2: "to the next level.",
      description: "Is your operation limited by manual processes? Let's design the system your business needs to scale.",
      scope_label: "Specialized Consulting",
      scope_items: ["Retail & Jewelry Systems", "Inventory Automation", "Cloud Architecture & APIs"],
      chat_cta: "Direct Consulting (WhatsApp)",
      labels: {
        identity: "Identity",
        name_placeholder: "Name / Organization",
        contact: "Contact",
        email_placeholder: "email@organization.com",
        context: "Context & Requirement",
        message_placeholder: "Describe the problem. If you have a jewelry or retail business, tell me about your current stock management.",
        submit: "Send Inquiry",
        sending: "Processing Inquiry...",
      },
      status: {
        ok: "Inquiry received. ByHijar will analyze your case personally.",
        error: "Sending error. Please contact via WhatsApp.",
        captcha: "Verification required for security.",
      }
    },
    footer: {
      builder: "ByHijar x Par Digital",
      location: "Santiago, Chile",
      built_with: "Systems with criteria."
    }
  }
};
