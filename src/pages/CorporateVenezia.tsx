import CorporateLanding from "@/components/CorporateLanding";

const CorporateVenezia = () => {
  return (
    <CorporateLanding
      city="Venezia"
      seoTitle="Produzione Video Corporate a Venezia | Artevent Production"
      heroLine1="Produzione Video Aziendali,"
      heroLine2="Fotografia e Riprese Drone a Venezia"
      introLead="Video corporate, fotografia aziendale e riprese aeree professionali per aziende e brand a Venezia."
      introBody="Artevent Production è specializzata nella produzione di video aziendali, fotografia corporate e riprese con drone a Venezia, aiutando aziende e brand a comunicare con contenuti visivi di alto livello."
      seoDescription="Produzione video corporate a Venezia, fotografia aziendale e riprese drone per aziende, brand e contesti di rappresentanza che richiedono contenuti visivi di alto livello."
      sections={[
        {
          title: "Video aziendali e video corporate a Venezia",
          body: "Produciamo video aziendali e corporate a Venezia per siti web, campagne marketing e comunicazione interna, sviluppando contenuti su misura per ogni brand.",
        },
        {
          title: "Fotografia aziendale",
          body: "Realizziamo fotografia aziendale e corporate a Venezia per creare un’immagine forte e coerente su sito web, social e materiali marketing.",
        },
        {
          title: "Riprese drone e video aerei a Venezia",
          body: "Le riprese con drone a Venezia permettono di ottenere immagini ad alto impatto visivo e prospettive uniche per aziende, location e contesti di rappresentanza.",
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

export default CorporateVenezia;