import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const siteUrl = 'https://jcastilloa.netlify.app';
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap-index.xml`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  );
};
