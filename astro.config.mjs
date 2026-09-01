import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cvPdf, { excludeCvSource } from './integrations/cv-pdf.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://jcastilloa.netlify.app',
  integrations: [
    sitemap({ filter: excludeCvSource }),
    cvPdf(),
  ],
});
