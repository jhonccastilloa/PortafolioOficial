# Portafolio de Jhon Castillo

Portafolio profesional de **Jhon Castillo**, Frontend & Mobile Developer especializado en React, React Native y TypeScript. El sitio presenta experiencia profesional, casos de estudio, capacidades técnicas y medios de contacto.

**Sitio publicado:** [jcastilloa.netlify.app](https://jcastilloa.netlify.app)

## Características

- Casos de estudio y experiencia profesional.
- Capacidades organizadas por frontend, mobile, backend e infraestructura.
- Diseño responsive y navegación por secciones.
- Descarga directa del CV.
- Metadatos SEO, URL canónica, sitemap y datos estructurados de Schema.org.

## Tecnologías

- [Astro 5](https://astro.build/)
- TypeScript en modo estricto
- CSS con estilos globales y estilos encapsulados por componente
- Integración de sitemap mediante `@astrojs/sitemap`

## Requisitos

- Node.js `18.17.1+`, `20.3.0+` o `22+`
- npm `9.6.5+`

## Instalación local

```bash
git clone https://github.com/jhonccastilloa/PortafolioOficial.git
cd PortafolioOficial
npm install
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:4321`.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run start` | Alias de `npm run dev`. |
| `npm run build` | Comprueba los tipos y genera el sitio en `dist/`. |
| `npm run preview` | Previsualiza localmente la compilación de producción. |
| `npm run astro check` | Ejecuta las comprobaciones de Astro y TypeScript. |
| `npm run astro -- --help` | Muestra la ayuda de la CLI de Astro. |

## Estructura del proyecto

```text
PortafolioOficial/
├── public/                 # Recursos estáticos y CV
├── src/
│   ├── assets/             # Imágenes procesadas por Astro
│   ├── components/         # Componentes reutilizables
│   ├── interfaces/         # Tipos compartidos de TypeScript
│   ├── layouts/            # Estructura general de las páginas
│   ├── pages/              # Rutas del sitio
│   ├── sections/           # Secciones principales del portafolio
│   └── styles/             # Estilos globales y variables CSS
├── astro.config.mjs        # Configuración de Astro y sitemap
├── package.json
└── tsconfig.json
```

## Autor

**Jhon Castillo**

- [GitHub](https://github.com/jhonccastilloa)
- [LinkedIn](https://www.linkedin.com/in/jccastilloa)
- [Correo](mailto:jhoncarloscastilloatencio@gmail.com)
