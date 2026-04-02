import { Instagram, Linkedin, Youtube } from "lucide-react";
import { useConsent } from "@/contexts/ConsentContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

// Configura il percorso del logo qui
const logoUrl = "/images/Logo_ARTEVENT_PRODUCTION_bianco.png";

const Footer = () => {
  const { language } = useLanguage();
  const { openPreferences } = useConsent();
  const copyright =
    language === "it"
      ? "© 2026 Artevent Production. Tutti i diritti riservati."
      : "© 2026 Artevent Production. All rights reserved.";
  const preferencesLabel = language === "it" ? "Preferenze Privacy" : "Privacy Preferences";
  const policyLabel = language === "it" ? "Privacy e Cookie Policy" : "Privacy and Cookie Policy";

  return (
    <footer className="border-t border-border px-6 md:px-12 py-16">
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
            {[Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-foreground/20 hover:text-primary transition-colors duration-500"
                aria-label="Social media"
              >
                <Icon className="w-4 h-4" strokeWidth={1} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/privacy-cookie"
              className="font-body text-[10px] tracking-[0.3em] uppercase text-primary/70 transition-colors hover:text-primary"
            >
              {policyLabel}
            </Link>
            <button
              type="button"
              onClick={openPreferences}
              className="font-body text-[10px] tracking-[0.3em] uppercase text-primary/70 transition-colors hover:text-primary"
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
