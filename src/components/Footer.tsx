import { Instagram, Youtube } from "lucide-react";
import { useConsent } from "@/contexts/ConsentContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

// Configura il percorso del logo qui
const logoUrl = "/images/Logo_ARTEVENT_PRODUCTION_bianco.png";

// Inserisci qui i collegamenti social pubblici.
const socialLinks = {
  instagram: "https://www.instagram.com/artevent_production",
  youtube: "https://youtube.com/@artevent_production",
};

const cityLinks = [
  { label: "Verona", to: "/produzione-video-corporate-verona" },
  { label: "Vicenza", to: "/produzione-video-corporate-vicenza" },
  { label: "Asiago", to: "/produzione-video-corporate-asiago" },
  { label: "Padova", to: "/produzione-video-corporate-padova" },
  { label: "Treviso", to: "/produzione-video-corporate-treviso" },
  { label: "Venezia", to: "/produzione-video-corporate-venezia" },
  { label: "Belluno", to: "/produzione-video-corporate-belluno" },
  { label: "Rovigo", to: "/produzione-video-corporate-rovigo" },
  { label: "Trento", to: "/produzione-video-corporate-trento" },
  { label: "Bolzano", to: "/produzione-video-corporate-bolzano" },
];

const regionalHubPath = "/produzione-video-corporate-veneto-trentino";

const Footer = () => {
  const { language } = useLanguage();
  const { openPreferences } = useConsent();
  const copyright =
    language === "it"
      ? "© 2026 Artevent Production. Tutti i diritti riservati."
      : "© 2026 Artevent Production. All rights reserved.";
  const preferencesLabel = language === "it" ? "Preferenze Privacy" : "Privacy Preferences";
  const policyLabel = language === "it" ? "Privacy e Cookie Policy" : "Privacy and Cookie Policy";
  const cityLinksLabel =
    language === "it" ? "Video corporate in Veneto e Trentino" : "Corporate video production in Veneto and Trentino";
  const cityLinksDescription =
    language === "it"
      ? "Operiamo tra Veneto e Trentino con produzioni video corporate, fotografia aziendale e riprese drone per brand, imprese, hospitality ed eventi."
      : "We work across Veneto and Trentino producing corporate videos, photography, and drone footage for brands, businesses, hospitality, and events.";
  const hubLabel =
    language === "it" ? "Panoramica sedi e aree operative" : "View coverage and locations";
  const availableSocialLinks = [
    {
      name: "Instagram",
      label: language === "it" ? "Apri Instagram" : "Open Instagram",
      cursorLabel: language === "it" ? "Apri Instagram" : "Open Instagram",
      href: socialLinks.instagram,
      icon: Instagram,
    },
    {
      name: "YouTube",
      label: language === "it" ? "Apri YouTube" : "Open YouTube",
      cursorLabel: language === "it" ? "Apri YouTube" : "Open YouTube",
      href: socialLinks.youtube,
      icon: Youtube,
    },
  ];

  return (
    <footer className="px-6 py-16 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo */}
          <a href="#home" className="text-center">
            <img
              src={logoUrl}
              alt="Artevent Studio"
              className="h-8 object-contain"
            />
          </a>

          {/* Social */}
          <div className="flex items-center gap-8">
            {availableSocialLinks.map(({ name, label, cursorLabel, href, icon: Icon }) => {
              const hasLink = href.trim().length > 0;

              if (!hasLink) {
                return (
                  <span
                    key={name}
                    className="text-foreground/20 transition-colors duration-500"
                    aria-label={label}
                  >
                    <Icon className="w-12 h-12" strokeWidth={1} />
                  </span>
                );
              }

              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label={cursorLabel}
                  className="text-foreground/20 hover:text-primary transition-colors duration-500"
                  aria-label={label}
                >
                  <Icon className="w-12 h-12" strokeWidth={1} />
                </a>
              );
            })}
          </div>

          <div className="w-full max-w-4xl border-t border-foreground/10 pt-8">
            <p className="mb-5 font-body text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
              {cityLinksLabel}
            </p>
            <p className="mx-auto mb-6 max-w-3xl text-sm leading-7 text-foreground/60 md:text-[15px]">
              {cityLinksDescription}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              {cityLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-body text-[11px] uppercase tracking-[0.24em] text-foreground/65 transition-colors duration-500 hover:text-primary"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-7 flex justify-center">
              <Link
                to={regionalHubPath}
                className="border border-primary/25 px-5 py-3 font-body text-[10px] uppercase tracking-[0.3em] text-foreground/72 transition-all duration-500 hover:border-primary hover:text-primary"
              >
                {hubLabel}
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/privacy-cookie"
              className="font-body text-[10px] tracking-[0.3em] uppercase gold-text-muted transition-colors hover:text-primary"
            >
              {policyLabel}
            </Link>
            <button
              type="button"
              onClick={openPreferences}
              className="font-body text-[10px] tracking-[0.3em] uppercase gold-text-muted transition-colors hover:text-primary"
            >
              {preferencesLabel}
            </button>
          </div>

          {/* Copyright */}
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
