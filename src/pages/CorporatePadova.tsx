import CorporateLanding from "@/components/CorporateLanding";

const CorporatePadova = () => {
  return (
    <CorporateLanding
      city="Padova"
      seoTitle="Video Corporate, Foto e Drone a Padova | Artevent Production"
      heroLine1="Produzione Video Aziendali,"
      heroLine2="Fotografia e Riprese Drone a Padova"
      introLead="Video corporate, fotografia aziendale e riprese aeree professionali per aziende e brand a Padova."
      introBody="Offriamo servizi di produzione video corporate a Padova per aziende che vogliono distinguersi con contenuti professionali, comunicare in modo efficace e rafforzare il proprio posizionamento."
      seoDescription="Produzione video corporate a Padova, fotografia aziendale e riprese drone per aziende e brand che vogliono rafforzare il proprio posizionamento con contenuti professionali."
      sections={[
        {
          title: "Video aziendali e video corporate a Padova",
          body: "I video aziendali a Padova sono uno strumento strategico per migliorare la percezione del brand e aumentare la visibilità della tua attività.",
        },
        {
          title: "Fotografia aziendale",
          body: "Realizziamo fotografia corporate per siti web, social e materiali marketing, con un linguaggio visivo coerente e professionale.",
        },
        {
          title: "Riprese drone e video aerei a Padova",
          body: "Artevent Production realizza video corporate a Padova curando ogni fase: concept creativo, produzione e post-produzione professionale, anche con riprese aeree dedicate.",
        },
      ]}
      services={[
        "Video corporate e istituzionali",
        "Video aziendali per siti web e marketing",
        "Interviste executive",
        "Video promozionali e storytelling",
      ]}
      relatedCitiesLine="Operiamo anche a"
    />
  );
};

export default CorporatePadova;