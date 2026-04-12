import { useEffect } from "react";

const SITE_URL = "https://arteventproduction.com";
const DEFAULT_IMAGE_PATH = "/images/hero-bg.jpg";

const toAbsoluteUrl = (pathOrUrl: string) => {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
};

const DEFAULT_IMAGE = toAbsoluteUrl(DEFAULT_IMAGE_PATH);

const DEFAULT_SEO = {
  title: "Artevent Production | Video Corporate, Riprese Drone e Fotografia",
  description:
    "Artevent Production realizza video corporate, riprese drone e fotografia professionale per aziende, brand, hospitality ed eventi.",
  canonical: `${SITE_URL}/`,
  image: DEFAULT_IMAGE,
};

type SeoHeadProps = {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
};

const setMetaContent = (id: string, value: string) => {
  const element = document.getElementById(id);

  if (element) {
    element.setAttribute("content", value);
  }
};

const setLinkHref = (id: string, value: string) => {
  const element = document.getElementById(id);

  if (element) {
    element.setAttribute("href", value);
  }
};

const SeoHead = ({ title, description, canonicalPath, image = DEFAULT_IMAGE }: SeoHeadProps) => {
  useEffect(() => {
    const canonical = `${SITE_URL}${canonicalPath}`;
    const absoluteImage = toAbsoluteUrl(image);

    document.title = title;
    setMetaContent("meta-description", description);
    setMetaContent("meta-robots", "index, follow");
    setMetaContent("og-title", title);
    setMetaContent("og-description", description);
    setMetaContent("og-url", canonical);
    setMetaContent("og-image", absoluteImage);
    setMetaContent("twitter-title", title);
    setMetaContent("twitter-description", description);
    setMetaContent("twitter-image", absoluteImage);
    setLinkHref("canonical-link", canonical);

    return () => {
      document.title = DEFAULT_SEO.title;
      setMetaContent("meta-description", DEFAULT_SEO.description);
      setMetaContent("meta-robots", "index, follow");
      setMetaContent("og-title", DEFAULT_SEO.title);
      setMetaContent("og-description", DEFAULT_SEO.description);
      setMetaContent("og-url", DEFAULT_SEO.canonical);
      setMetaContent("og-image", DEFAULT_SEO.image);
      setMetaContent("twitter-title", DEFAULT_SEO.title);
      setMetaContent("twitter-description", DEFAULT_SEO.description);
      setMetaContent("twitter-image", DEFAULT_SEO.image);
      setLinkHref("canonical-link", DEFAULT_SEO.canonical);
    };
  }, [canonicalPath, description, image, title]);

  return null;
};

export default SeoHead;