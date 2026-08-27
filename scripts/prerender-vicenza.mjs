import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import React from "react";

const route = "/produzione-video-corporate-vicenza";
const title = "Produzione Video Aziendali a Vicenza | Artevent Production";
const description =
  "Produzione video corporate a Vicenza, fotografia aziendale e riprese drone per aziende e brand che vogliono migliorare posizionamento, visibilita e comunicazione.";
const canonical = `https://arteventproduction.com${route}`;

const escapeAttribute = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const replaceTitle = (html, value) =>
  html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(value)}</title>`);

const replaceHeadMetadata = (html) => {
  let result = replaceTitle(html, title);

  result = result.replace(
    /(<meta\b[^>]*\bid=["']meta-description["'][^>]*\bcontent=["'])[^"']*(["'])/i,
    (_match, prefix, suffix) => `${prefix}${escapeAttribute(description)}${suffix}`,
  );
  result = result.replace(
    /(<link\b[^>]*\bid=["']canonical-link["'][^>]*\bhref=["'])[^"']*(["'])/i,
    (_match, prefix, suffix) => `${prefix}${escapeAttribute(canonical)}${suffix}`,
  );

  return result;
};

const main = async () => {
  const projectRoot = resolve(import.meta.dirname, "..");
  const viteServer = await createServer({
    root: projectRoot,
    mode: "production",
    configFile: false,
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(projectRoot, "src"),
      },
    },
    server: { middlewareMode: true, hmr: false, ws: false },
    optimizeDeps: { noDiscovery: true },
    appType: "spa",
  });

  try {
    const { default: CorporateVicenza } = await viteServer.ssrLoadModule(
      "/src/pages/CorporateVicenza.tsx",
    );
    const renderedContent = renderToString(
      React.createElement(
        StaticRouter,
        { location: route },
        React.createElement(CorporateVicenza),
      ),
    );

    const templatePath = resolve(projectRoot, "dist/index.html");
    const template = await readFile(templatePath, "utf8");
    const prerenderedHtml = replaceHeadMetadata(
      template.replace('<div id="root"></div>', `<div id="root">${renderedContent}</div>`),
    );

    const outputDirectory = resolve(projectRoot, `dist${route}`);
    await mkdir(outputDirectory, { recursive: true });
    await writeFile(resolve(outputDirectory, "index.html"), prerenderedHtml, "utf8");
  } finally {
    await viteServer.close();
  }
};

await main();
