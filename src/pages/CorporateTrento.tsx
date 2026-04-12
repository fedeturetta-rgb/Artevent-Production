import CorporateLanding from "@/components/CorporateLanding";

const CorporateTrento = () => {
  return (
    <CorporateLanding
      city="Trento"
      seoTitle="Produzione Video Corporate e Foto a Trento | Artevent Production"
      heroLine1="Produzione Video Aziendali,"
      heroLine2="Fotografia e Riprese Drone a Trento"
      introLead="Video corporate, fotografia aziendale e riprese aeree professionali per aziende e brand a Trento."
      introBody="Artevent Production è specializzata nella produzione di video aziendali, fotografia corporate e riprese con drone a Trento, aiutando aziende e brand a comunicare con contenuti visivi di alto livello."
      seoDescription="Produzione video corporate a Trento, fotografia aziendale e riprese drone per aziende, brand e progetti architettonici che richiedono contenuti visivi professionali."
      sections={[
        {
          title: "Video aziendali e video corporate a Trento",
          body: "Produciamo video aziendali e corporate a Trento per siti web, campagne marketing e comunicazione interna, sviluppando contenuti su misura per ogni brand.",
        },
        {
          title: "Fotografia aziendale",
          body: "Realizziamo fotografia aziendale e corporate a Trento per creare un’immagine forte e coerente su sito web, social e materiali marketing.",
        },
        {
          title: "Riprese drone e video aerei a Trento",
          body: "Le riprese con drone a Trento permettono di ottenere immagini ad alto impatto visivo e prospettive uniche per aziende, location e progetti architettonici.",
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

export default CorporateTrento;