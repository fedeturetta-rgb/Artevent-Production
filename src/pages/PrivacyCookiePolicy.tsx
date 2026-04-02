import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyCookiePolicy = () => {
  const { language } = useLanguage();

  const copy = {
    back: language === "it" ? "Torna al sito" : "Back to site",
    title: language === "it" ? "Privacy e Cookie Policy" : "Privacy and Cookie Policy",
    intro:
      language === "it"
        ? "Questa pagina riassume in modo sintetico come il sito gestisce le preferenze privacy, gli strumenti tecnici e l'eventuale raccolta dati tramite analytics."
        : "This page provides a concise summary of how the website handles privacy preferences, technical tools and any data collection through analytics.",
    sections:
      language === "it"
        ? [
            [
              "Titolare del trattamento",
              "Il titolare del trattamento e' Artevent di Guido Frigo, P. IVA 04302240231, C.F. FRGGDU78A12I775Z, con sede in Via Callesella 1425, 37040 Zimella (Verona), Italia.",
            ],
            [
              "Contatti privacy",
              "Per richieste relative a privacy, dati personali o esercizio dei diritti puoi contattare Guido Frigo ai recapiti pubblicati sul sito, incluso l'indirizzo email info@arteventstudio.com e il numero +39 347 120 64 41.",
            ],
            [
              "Dati tecnici essenziali",
              "Il sito utilizza strumenti tecnici necessari al funzionamento dell'interfaccia, inclusa la memorizzazione locale della preferenza linguistica. Questi strumenti non dipendono dal consenso analytics.",
            ],
            [
              "Analytics",
              "Il consenso richiesto dal banner riguarda esclusivamente l'eventuale raccolta di dati statistici e di misurazione del traffico. In caso di rifiuto, gli strumenti analytics devono rimanere disattivati.",
            ],
            [
              "Video e contenuti multimediali",
              "La visualizzazione dei video non viene bloccata dal banner analytics. Le preferenze impostate in questo banner non modificano direttamente la disponibilita' dei contenuti video sul sito.",
            ],
            [
              "Come modificare la scelta",
              "Le preferenze possono essere riaperte in qualsiasi momento dal footer tramite il collegamento 'Preferenze Privacy'.",
            ],
          ]
        : [
            [
              "Data controller",
              "The data controller is Artevent di Guido Frigo, VAT no. 04302240231, tax code FRGGDU78A12I775Z, with registered address at Via Callesella 1425, 37040 Zimella (Verona), Italy.",
            ],
            [
              "Privacy contacts",
              "For requests relating to privacy, personal data or the exercise of data subject rights, you can contact Guido Frigo through the contact details published on the website, including info@arteventstudio.com and +39 347 120 64 41.",
            ],
            [
              "Essential technical data",
              "The website uses technical tools necessary for interface operation, including local storage of the language preference. These tools do not depend on analytics consent.",
            ],
            [
              "Analytics",
              "The banner consent only concerns potential statistical and traffic measurement tools. If the user rejects consent, analytics tools must remain disabled.",
            ],
            [
              "Videos and media content",
              "Video playback is not blocked by the analytics banner. The preferences set in this banner do not directly change video availability on the website.",
            ],
            [
              "How to change your choice",
              "Preferences can be reopened at any time from the footer through the 'Privacy Preferences' link.",
            ],
          ],
  };

  return (
    <main className="min-h-screen bg-gradient-dark px-6 py-16 md:px-12">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="mb-8 inline-block font-body text-[10px] uppercase tracking-[0.35em] text-primary/80 transition-colors hover:text-primary"
        >
          {copy.back}
        </Link>

        <h1 className="mb-6 font-display text-4xl font-light md:text-6xl">{copy.title}</h1>
        <p className="mb-12 max-w-3xl text-sm leading-7 text-foreground/75">{copy.intro}</p>

        <div className="space-y-10">
          {copy.sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="mb-3 font-display text-2xl font-light">{title}</h2>
              <p className="text-sm leading-7 text-foreground/70">{body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PrivacyCookiePolicy;
