interface CvLink {
  label: string;
  href: string;
}

interface CvExperience {
  company: string;
  period: string;
  role: string;
  bullets: string[];
}

interface CvProject {
  name: string;
  href?: string;
  period: string;
  descriptor: string;
  summary: string;
  technologies: string[];
}

interface CvSkillGroup {
  label: string;
  technologies: string[];
}

interface CvData {
  name: string;
  headline: string;
  location: string;
  phone: string;
  email: string;
  links: CvLink[];
  profile: string;
  experience: CvExperience[];
  projects: CvProject[];
  skills: CvSkillGroup[];
  education: {
    degree: string;
    institution: string;
    period: string;
  };
}

export const cv: CvData = {
  name: "Jhon Castillo",
  headline: "Desarrollador Mobile · React Native · TypeScript · Banca Digital",
  location: "Perú",
  phone: "+51 941 882 754",
  email: "jhoncarloscastilloatencio@gmail.com",
  links: [
    {
      label: "linkedin.com/in/jccastilloa",
      href: "https://www.linkedin.com/in/jccastilloa",
    },
    {
      label: "jcastilloa.dhyrium.website",
      href: "https://jcastilloa.dhyrium.website",
    },
    {
      label: "github.com/jhonccastilloa",
      href: "https://github.com/jhonccastilloa",
    },
  ],
  profile:
    "Ingeniero de Sistemas y desarrollador mobile especializado en React Native y TypeScript, con más de 3 años de experiencia en aplicaciones financieras para Latinoamérica. He participado en más de 14 productos bancarios, implementando onboarding, biometría, autenticación multifactor, operaciones transaccionales y seguridad mobile. También cuento con experiencia en React web, APIs REST y automatización de releases para Android/iOS con Fastlane y GitLab CI.",
  experience: [
    {
      company: "Bantotal",
      period: "Feb 2023 - Actualidad",
      role: "Desarrollador Mobile · React Native",
      bullets: [
        "Desarrollo y mantengo funcionalidades mobile y frontend en más de 14 aplicaciones financieras para instituciones de Latinoamérica.",
        "Implementé flujos críticos de onboarding, autenticación multifactor, biometría, recuperación de credenciales, transferencias, pagos, recargas y depósitos a plazo fijo.",
        "Implementé SSL pinning, soft token y validaciones de seguridad; además, resolví incidencias productivas y ajustes de compatibilidad Android/iOS.",
        "Participo en releases y automatización con Fastlane, GitLab CI, Firebase App Distribution y TestFlight para distribuir y validar versiones Android/iOS.",
      ],
    },
    {
      company: "Desarrollo freelance · Tiempo parcial",
      period: "Jul 2023 - Actualidad",
      role: "Desarrollador Frontend & Full Stack · Plataforma de expedientes técnicos en producción",
      bullets: [
        "Desarrollo y mantengo para un cliente una plataforma empresarial que gestiona expedientes, tareas, planillas y documentos.",
        "Implementé interfaces operativas, permisos, estado remoto y flujos de composición, foliación, impresión y exportación de PDF para centralizar la operación documental.",
        "Construí el frontend con React, TypeScript y React Query, junto con APIs REST en Node.js/Express y PostgreSQL.",
        "Despliego y mantengo la solución en infraestructura self-hosted y servidores VPS con Docker, Nginx, DNS, TLS, backups y monitoreo.",
      ],
    },
    {
      company: "Dirección Regional de Educación Puno",
      period: "2021 - 2022",
      role: "Practicante en el Área de Informática",
      bullets: [
        "Desarrollé sistemas web para consultas, convocatorias y procesamiento de información administrativa, además de brindar soporte a aplicaciones internas.",
      ],
    },
  ],
  projects: [
    {
      name: "OWASP-BP",
      href: "https://github.com/jhonccastilloa/owasp-mobile-bp/tree/development",
      period: "2024 - Actualidad",
      descriptor: "Herramienta CLI de seguridad mobile · Proyecto open source",
      summary:
        "Desarrollé una herramienta en TypeScript que analiza proyectos React Native y automatiza correcciones de seguridad para Android e iOS. Verifica permisos, SSL pinning, tráfico de red, configuraciones de build y dependencias vulnerables, y genera reportes PDF.",
      technologies: [
        "TypeScript",
        "Node.js",
        "React Native",
        "Android",
        "iOS",
        "OWASP",
        "PDFMake",
      ],
    },
    {
      name: "DebtMate",
      period: "2026 - Actualidad",
      descriptor: "Producto mobile personal · Diseño y desarrollo full stack · Uso personal",
      summary:
        "Aplicación Android para registrar deudas, consultar balances por contacto y mantener cuentas compartidas. Diseñé la experiencia mobile, la autenticación y una API REST propia con Express, Prisma y OpenAPI.",
      technologies: [
        "React Native",
        "TypeScript",
        "React Query",
        "Zustand",
        "Express",
        "Prisma",
        "OpenAPI",
        "Firebase",
      ],
    },
  ],
  skills: [
    {
      label: "Mobile",
      technologies: [
        "React Native",
        "TypeScript",
        "Android",
        "iOS",
        "React Query",
        "Redux",
        "Zustand",
      ],
    },
    {
      label: "Seguridad mobile y CI/CD",
      technologies: [
        "OWASP",
        "SSL pinning",
        "Fastlane",
        "GitLab CI",
        "Firebase App Distribution",
        "TestFlight",
      ],
    },
    {
      label: "Frontend",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Angular", "Astro"],
    },
    {
      label: "Backend y APIs",
      technologies: [
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "REST",
        "OpenAPI",
      ],
    },
    {
      label: "Infraestructura",
      technologies: [
        "Docker",
        "Nginx",
        "VPS",
        "DigitalOcean",
        "DNS",
        "TLS",
        "Backups",
        "Monitoreo",
      ],
    },
  ],
  education: {
    degree: "Ingeniero de Sistemas",
    institution: "Universidad Nacional del Altiplano",
    period: "2017 - 2022",
  },
};
