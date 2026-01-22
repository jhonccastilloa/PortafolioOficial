# AGENTS.md

This file provides guidance for agentic coding assistants working in this Astro portfolio project.

## Build Commands

```bash
npm run dev             # Start local dev server at localhost:4321
npm run start           # Alias for dev
npm run build           # Build production site to ./dist/ (runs astro check, build, and copy-to-nginx)
npm run preview         # Preview production build locally
npm run astro check     # Run Astro's type checking
npm run astro -- --help # Get help with Astro CLI commands
```

**No linting or testing commands** are currently configured. No tests exist in this project.

## Project Structure

- `src/components/` - Reusable Astro components (Card, Header, SkillItem, etc.)
- `src/sections/` - Page section components (Hero, About, Skill, Study, etc.)
- `src/layouts/` - Layout components (Layout.astro)
- `src/pages/` - Route pages (index.astro)
- `src/interfaces/` - TypeScript type definitions (types.d.ts)
- `src/styles/` - Global styles (global.css)
- `src/assets/images/` - Image assets (including projects subdirectory)
- `public/` - Static assets accessible at root path

## Code Style Guidelines

### Astro Components (.astro)

**Frontmatter Structure:**
```
---
import statements go here
interface Props { ... }  // Define props interface
const { prop1, prop2 } = Astro.props;  // Destructure props
const { prop, ...rest } = Astro.props as SomeType;  // Type assertion + rest pattern
---
```

**Key Points:**
- Define Props interface at top of frontmatter
- Use `Astro.props` to access component props
- Use type assertions for shared types: `Astro.props as Tecnology`
- Use `...rest` pattern to spread remaining props (common in icons)
- Destructure with renaming for reserved keywords: `const { class: className } = Astro.props`
- Place client-side JavaScript in `<script>` tags when needed
- Place scoped styles in `<style>` tags (scoped by default)
- Use `<style is:global>` for global styles

### TypeScript

- TypeScript strict mode enabled via `astro/tsconfigs/strict`
- Type definitions are in `src/interfaces/types.d.ts`
- Use `interface` for Props in Astro components
- Use `import type` for type-only imports
- Define shared types like `Tecnology` and `IconProps` in interfaces folder
- Run `npm run astro check` to type-check the codebase

### Naming Conventions

- **Component files:** PascalCase (e.g., `Header.astro`, `SkillItem.astro`)
- **CSS classes:** BEM-style with double underscores (e.g., `hero__nav`, `skillItem__rates`)
- **Props interfaces:** PascalCase ending with "Props" (e.g., `IconProps`)
- **Type names:** PascalCase (e.g., `Tecnology`)
- **Props:** camelCase
- **Constants:** UPPER_SNAKE_CASE (e.g., `ICONS`, `navItems`)
- **Variables:** camelCase

### CSS Styling

- Use scoped `<style>` tags in components (default)
- CSS custom properties in global.css: `--primary-color`, `--text-color`, `--text-base`, etc.
- Use `var(--variable-name)` to reference custom properties
- Mobile-first responsive design with `@media (min-width: 768px)` breakpoint
- Transition effects commonly use 500ms ease timing
- Color variables: `--primary-color: #01be96`, `--background-color: #191923`, `--text-color: #fff`

### Imports

```javascript
// Component imports (default)
import Component from './Component.astro'

// Type imports (named, with type keyword)
import type { Tecnology, IconProps } from '../interfaces/types'

// Asset imports
import image from '../assets/images/example.jpg'

// Library imports
import { Image } from 'astro:assets'
```

### Conditional Rendering

Use ternary operators and conditional rendering:
```javascript
{Icon ? (
  <Icon class="bx" color="var(--text-color)" />
) : (
  <i class={`bx ${icon}`} />
)}
```

### Spread Attributes

Spread additional props using the `...rest` pattern:
```javascript
const { color, class: className, ...rest } = Astro.props as IconProps;
<svg class={className} fill={color} {...rest}>
```

### Event Handling

- Use optional chaining for null safety: `btnMenu?.addEventListener("click", ...)`
- Use arrow functions for event handlers
- DOM queries: `document.querySelector`, `document.querySelectorAll`
- IntersectionObserver for scroll-based effects

### Exports

Each directory has an `index.ts` that exports all items:
```javascript
export { default as Card } from './Card.astro'
export { default as Header } from './Header.astro'
```

### Images

- Use `import.meta.glob` for dynamic image imports
- Use Astro's `<Image />` component for optimized images
- Set `loading="eager"` for above-fold images
- Provide descriptive alt text for accessibility

### Icons

- Boxicons library for most icons (e.g., `bx bx-menu`, `bxl-github`)
- Icon classes follow pattern: `bx` + icon name (e.g., `bxl-github`)
- Custom icons are in `src/components/icons/` as .astro components
- Custom icons accept `IconProps` interface with `color` and optional `class` properties
- Use `class` prop renaming for the reserved keyword: `const { class: className } = ...`

### General Practices

- Use semantic HTML5 elements (section, article, figure, etc.)
- External links: `target="_blank"` and `rel="noopener noreferrer"`
- Components organized by responsibility (UI components vs page sections)
- SectionContainer wraps page sections with id and optional isAlter prop
- Global styles reset with `* { box-sizing: inherit; margin: 0; padding: 0; }`

### Docker Integration

The build includes a `copy-to-nginx` script that copies built files to a Docker container named `mi-nginx-ssl`. This is specific to the deployment setup and should not be modified without understanding the Docker configuration.
