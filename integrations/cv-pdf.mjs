import { copyFile, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import pdf from 'astro-pdf';

const CV_FILE_NAME = 'JhonCarlosCastilloAtencio-cv.pdf';
const CV_STAGING_FILE_NAME = '.cv-build.pdf';
const CV_SOURCE_ROUTE = 'cv-source';
const CV_SOURCE_PATHNAME = `/${CV_SOURCE_ROUTE}`;
const PUBLIC_PDF_DIRECTORY = fileURLToPath(new URL('../public/pdf/', import.meta.url));

export const excludeCvSource = (page) =>
  new URL(page).pathname.replace(/\/$/, '') !== CV_SOURCE_PATHNAME;

export default function cvPdf() {
  return pdf({
    pages: {
      [CV_SOURCE_PATHNAME]: {
        path: `/pdf/${CV_STAGING_FILE_NAME}`,
        ensurePath: true,
        waitUntil: 'networkidle0',
        throwOnFail: true,
        pdf: {
          format: 'A4',
          printBackground: true,
          preferCSSPageSize: true,
          tagged: true,
          waitForFonts: true,
        },
      },
    },
    runAfter: async (dir, generatedPaths) => {
      const stagingPathname = `/pdf/${CV_STAGING_FILE_NAME}`;

      if (!generatedPaths.includes(stagingPathname)) {
        throw new Error(`astro-pdf no generó ${stagingPathname}`);
      }

      const outputDirectory = fileURLToPath(dir);
      const stagingPath = join(outputDirectory, 'pdf', CV_STAGING_FILE_NAME);
      const distPath = join(outputDirectory, 'pdf', CV_FILE_NAME);
      const publicPath = join(PUBLIC_PDF_DIRECTORY, CV_FILE_NAME);
      const sourceRoutePath = join(outputDirectory, CV_SOURCE_ROUTE);

      await mkdir(PUBLIC_PDF_DIRECTORY, { recursive: true });
      await Promise.all([
        copyFile(stagingPath, distPath),
        copyFile(stagingPath, publicPath),
      ]);
      await rm(stagingPath);
      await rm(sourceRoutePath, { recursive: true, force: true });
    },
  });
}
