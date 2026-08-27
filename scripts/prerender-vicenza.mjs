import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import React from "react";

const routes = [
  {
    route: "/produzione-video-corporate-verona",
    modulePath: "/src/pages/CorporateVerona.tsx",
    title: "Video Corporate e Riprese Drone a Verona | Artevent Production",
    description:
      "Produzione video corporate a Verona, fotografia aziendale e riprese drone per brand, aziende e hospitality. Artevent Production realizza contenuti visivi professionali per marketing e comunicazione.",
  },
  {
    route: "/produzione-video-corporate-vicenza",
    modulePath: "/src/pages/CorporateVicenza.tsx",
    title: "Produzione Video Aziendali a Vicenza | Artevent Production",
    description:
      "Produzione video corporate a Vicenza, fotografia aziendale e riprese drone per aziende e brand che vogliono migliorare posizionamento, visibilita e comunicazione.",
  },
  {
    route: "/produzione-video-corporate-asiago",
    modulePath: "/src/pages/CorporateAsiago.tsx",
    title: "Video Corporate e Riprese Drone ad Asiago | Artevent Production",
    description:
      "Produzione video corporate ad Asiago, fotografia aziendale e riprese drone per attività, strutture e brand che vogliono distinguersi con contenuti professionali e autentici.",
  },
  {
    route: "/produzione-video-corporate-padova",
    modulePath: "/src/pages/CorporatePadova.tsx",
    title: "Video Corporate, Foto e Drone a Padova | Artevent Production",
    description:
      "Produzione video corporate a Padova, fotografia aziendale e riprese drone per aziende e brand che vogliono rafforzare il proprio posizionamento con contenuti professionali.",
  },
  {
    route: "/produzione-video-corporate-treviso",
    modulePath: "/src/pages/CorporateTreviso.tsx",
    title: "Video Corporate e Fotografia Aziendale a Treviso | Artevent Production",
    description:
      "Produzione video corporate a Treviso, fotografia aziendale e riprese drone per aziende e brand che vogliono comunicare con contenuti visivi di alto livello.",
  },
  {
    route: "/produzione-video-corporate-venezia",
    modulePath: "/src/pages/CorporateVenezia.tsx",
    title: "Produzione Video Corporate a Venezia | Artevent Production",
    description:
      "Produzione video corporate a Venezia, fotografia aziendale e riprese drone per aziende, brand e contesti di rappresentanza che richiedono contenuti visivi di alto livello.",
  },
  {
    route: "/produzione-video-corporate-belluno",
    modulePath: "/src/pages/CorporateBelluno.tsx",
    title: "Produzione Video e Fotografia Aziendale a Belluno | Artevent Production",
    description:
      "Produzione video corporate a Belluno, fotografia aziendale e riprese drone per aziende, strutture e brand locali che vogliono contenuti visivi curati e professionali.",
  },
  {
    route: "/produzione-video-corporate-rovigo",
    modulePath: "/src/pages/CorporateRovigo.tsx",
    title: "Video Aziendali e Riprese Drone a Rovigo | Artevent Production",
    description:
      "Produzione video corporate a Rovigo, fotografia aziendale e riprese drone per aziende e attivita del territorio che vogliono valorizzare identita, servizi e progetti.",
  },
  {
    route: "/produzione-video-corporate-trento",
    modulePath: "/src/pages/CorporateTrento.tsx",
    title: "Produzione Video Corporate e Foto a Trento | Artevent Production",
    description:
      "Produzione video corporate a Trento, fotografia aziendale e riprese drone per aziende, brand e progetti architettonici che richiedono contenuti visivi professionali.",
  },
  {
    route: "/produzione-video-corporate-bolzano",
    modulePath: "/src/pages/CorporateBolzano.tsx",
    title: "Video Corporate e Riprese Drone a Bolzano | Artevent Production",
    description:
      "Produzione video corporate a Bolzano, fotografia aziendale e riprese drone per aziende, hotel e realta turistiche che vogliono contenuti visivi di alto livello.",
  },
  {
    route: "/produzione-video-corporate-veneto-trentino",
    modulePath: "/src/pages/CorporateVenetoTrentino.tsx",
    title: "Produzione Video Corporate in Veneto e Trentino | Artevent Production",
    description:
      "Artevent Production realizza video corporate, fotografia aziendale e riprese drone in Veneto e Trentino, con operativita a Verona, Vicenza, Asiago, Padova, Treviso, Venezia, Belluno, Rovigo, Trento e Bolzano.",
  },
];

const SITE_URL = "https://www.arteventproduction.com";

const escapeAttribute = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const replaceTitle = (html, value) =>
  html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(value)}</title>`);

const replaceHeadMetadata = (html, { title, description, route }) => {
  let result = replaceTitle(html, title);
  const canonical = `${SITE_URL}${route}`;

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
    const templatePath = resolve(projectRoot, "dist/index.html");
    const template = await readFile(templatePath, "utf8");

    for (const routeConfig of routes) {
      const { default: Page } = await viteServer.ssrLoadModule(routeConfig.modulePath);
      const renderedContent = renderToString(
        React.createElement(
          StaticRouter,
          { location: routeConfig.route },
          React.createElement(Page),
        ),
      );

      const prerenderedHtml = replaceHeadMetadata(
        template.replace('<div id="root"></div>', `<div id="root">${renderedContent}</div>`),
        {
          route: routeConfig.route,
          title: routeConfig.title,
          description: routeConfig.description,
        },
      );

      const outputDirectory = resolve(projectRoot, `dist${routeConfig.route}`);
      await mkdir(outputDirectory, { recursive: true });
      await writeFile(resolve(outputDirectory, "index.html"), prerenderedHtml, "utf8");
    }
  } finally {
    await viteServer.close();
  }
};

await main();
