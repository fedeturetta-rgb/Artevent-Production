import CorporateLanding from "@/components/CorporateLanding";

const CorporateBelluno = () => {
  return (
    <CorporateLanding
      city="Belluno"
      seoTitle="Produzione Video e Fotografia Aziendale a Belluno | Artevent Production"
      heroLine1="Produzione Video Aziendali,"
      heroLine2="Fotografia e Riprese Drone a Belluno"
      introLead="Video corporate, fotografia aziendale e riprese aeree professionali per aziende e brand a Belluno."
      introBody="Artevent Production realizza contenuti visivi pensati per valorizzare aziende, strutture e brand locali con un linguaggio contemporaneo, curato in ogni fase della produzione."
      seoDescription="Produzione video corporate a Belluno, fotografia aziendale e riprese drone per aziende, strutture e brand locali che vogliono contenuti visivi curati e professionali."
      sections={[
        {
          title: "Video aziendali e video corporate a Belluno",
          body: "Produciamo video aziendali e corporate a Belluno per siti web, campagne marketing e comunicazione interna, sviluppando contenuti su misura per ogni brand.",
        },
        {
          title: "Fotografia aziendale",
          body: "Realizziamo fotografia aziendale e corporate a Belluno per creare un’immagine forte e coerente su sito web, social e materiali marketing.",
        },
        {
          title: "Riprese drone e video aerei a Belluno",
          body: "Le riprese con drone a Belluno permettono di ottenere immagini ad alto impatto visivo e prospettive uniche per aziende, location e contesti naturali.",
        },
      ]}
      services={[
        "Produzione video aziendali",
        "Video corporate e istituzionali",
        "Fotografia corporate e ritratti professionali",
        "Riprese con drone e video aerei",
        "Fotografia aerea",
        "Interviste executive",
      ]}
      relatedCitiesLine="Operiamo anche a"
    />
  );
};

export default CorporateBelluno;