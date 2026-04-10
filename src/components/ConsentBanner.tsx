import { useConsent } from "@/contexts/ConsentContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const ConsentBanner = () => {
  const { acceptAnalytics, rejectAnalytics, closePreferences, hasAnswered, isBannerOpen } = useConsent();
  const { language } = useLanguage();

  if (!isBannerOpen) {
    return null;
  }

  const copy = {
    title: language === "it" ? "Informativa su dati statistici e analytics" : "Notice on analytics and statistical data",
    description:
      language === "it"
        ? "Con il tuo consenso possiamo attivare strumenti analytics per misurare traffico, interazioni e prestazioni del sito. In assenza di consenso, tali strumenti devono restare disattivati. La scelta non incide sulla visualizzazione dei video o dei contenuti principali del sito."
        : "With your consent, analytics tools may be enabled to measure traffic, interactions and website performance. Without consent, those tools must remain disabled. This choice does not affect the display of videos or the main website content.",
    accept: language === "it" ? "Acconsento" : "I consent",
    reject: language === "it" ? "Rifiuto" : "I refuse",
    close: language === "it" ? "Chiudi" : "Close",
    policy: language === "it" ? "Leggi privacy e cookie policy" : "Read privacy and cookie policy",
    note:
      language === "it"
        ? "Puoi modificare la scelta in qualsiasi momento dal footer del sito."
        : "You can change your choice at any time from the website footer.",
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 md:px-6 md:pb-6">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-border bg-background/95 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 font-display text-2xl font-light text-foreground">{copy.title}</p>
            <p className="mb-3 text-sm leading-7 text-foreground/75">{copy.description}</p>
            <p className="font-body text-[10px] uppercase tracking-[0.3em] text-foreground/50">{copy.note}</p>
            <Link
              to="/privacy-cookie"
              className="mt-4 inline-block font-body text-[10px] uppercase tracking-[0.3em] gold-text-soft transition-colors hover:text-primary"
            >
              {copy.policy}
            </Link>
            {hasAnswered && (
              <button
                type="button"
                onClick={closePreferences}
                className="mt-4 ml-4 font-body text-[10px] uppercase tracking-[0.3em] gold-text-soft transition-colors hover:text-primary"
              >
                {copy.close}
              </button>
            )}
          </div>

          <div className="flex flex-col gap-3 md:min-w-[220px]">
            <button
              type="button"
              onClick={acceptAnalytics}
              className="border border-primary bg-primary px-5 py-3 font-body text-[10px] uppercase tracking-[0.35em] text-background transition-opacity hover:opacity-90"
            >
              {copy.accept}
            </button>
            <button
              type="button"
              onClick={rejectAnalytics}
              className="border border-border bg-background px-5 py-3 font-body text-[10px] uppercase tracking-[0.35em] text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              {copy.reject}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
