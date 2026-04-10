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

const Footer = () => {
  const { language } = useLanguage();
  const { openPreferences } = useConsent();
  const copyright =
    language === "it"
      ? "© 2026 Artevent Production. Tutti i diritti riservati."
      : "© 2026 Artevent Production. All rights reserved.";
  const preferencesLabel = language === "it" ? "Preferenze Privacy" : "Privacy Preferences";
  const policyLabel = language === "it" ? "Privacy e Cookie Policy" : "Privacy and Cookie Policy";
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
