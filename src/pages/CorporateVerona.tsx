import { motion } from "framer-motion";

const CorporateVerona = () => {
  return (
    <section className="min-h-screen px-6 py-32 max-w-5xl mx-auto">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-light mb-10"
      >
        Produzione Video Aziendali, Fotografia Corporate e Riprese Drone a Verona
      </motion.h1>

      <p className="mb-6 text-foreground/70">
        Artevent Production è specializzata nella produzione di video aziendali, fotografia corporate e riprese con drone a Verona, aiutando aziende e brand a comunicare con contenuti visivi di alto livello.
      </p>

      <p className="text-foreground/70 mb-10">
        Realizziamo video corporate, shooting fotografici aziendali e video aerei progettati per migliorare la percezione del brand, aumentare la visibilità e rafforzare la comunicazione aziendale.
      </p>

      <h2 className="text-2xl mb-6">Video aziendali e video corporate a Verona</h2>

      <p className="text-foreground/70 mb-6">
        Produciamo video aziendali e corporate a Verona per siti web, campagne marketing e comunicazione interna, sviluppando contenuti su misura per ogni brand.
      </p>

      <p className="text-foreground/70 mb-10">
        Ogni produzione video è progettata per trasmettere identità, valori e posizionamento in modo chiaro, professionale e coerente.
      </p>

      <h2 className="text-2xl mb-6">Fotografia aziendale e fotografia corporate a Verona</h2>

      <p className="text-foreground/70 mb-6">
        Realizziamo fotografia aziendale e corporate a Verona per creare un’immagine forte e coerente su sito web, social e materiali marketing.
      </p>

      <p className="text-foreground/70 mb-10">
        Produciamo ritratti professionali e contenuti visivi progettati per valorizzare l’identità aziendale.
      </p>

      <h2 className="text-2xl mb-6">Riprese con drone a Verona e video aerei</h2>

      <p className="text-foreground/70 mb-6">
        Le riprese con drone a Verona permettono di ottenere immagini ad alto impatto visivo e prospettive uniche per aziende e location.
      </p>

      <p className="text-foreground/70 mb-10">
        Utilizziamo droni professionali per realizzare video aerei cinematici e fotografia aerea integrata nelle produzioni corporate.
      </p>

      <h2 className="text-2xl mb-6">Servizi di produzione video e fotografia aziendale a Verona</h2>

      <ul className="space-y-2 text-foreground/70 mb-10">
        <li>Produzione video aziendali e corporate</li>
        <li>Fotografia aziendale e ritratti corporate</li>
        <li>Riprese con drone e video aerei</li>
        <li>Fotografia aerea professionale</li>
        <li>Interviste executive</li>
        <li>Contenuti per marketing e comunicazione</li>
      </ul>

      <h2 className="text-2xl mb-6">Metodo di lavoro</h2>

      <p className="text-foreground/70 mb-6">
        Analizziamo gli obiettivi aziendali per sviluppare un concept visivo efficace e coerente con il brand.
      </p>

      <p className="text-foreground/70 mb-10">
        Gestiamo tutte le fasi: ideazione, produzione video, fotografia, drone e post-produzione.
      </p>

      <h2 className="text-2xl mb-6">Perché scegliere Artevent Production a Verona</h2>

      <p className="text-foreground/70 mb-10">
        Approccio cinematografico, tecnologie avanzate e attenzione ai dettagli per contenuti visivi distintivi.
      </p>

      {/* SERVIZI */}
      <p className="text-foreground/70 mb-6">
        Scopri anche i nostri servizi di 
        <a href="/riprese-drone-verona" className="underline"> riprese con drone a Verona</a> 
        e 
        <a href="/fotografia-aziendale-verona" className="underline"> fotografia aziendale a Verona</a>.
      </p>

      {/* INTERLINK COMPLETI */}
      <p className="text-foreground/70 mb-10">
        Operiamo anche a 
        <a href="/produzione-video-corporate-vicenza" className="underline"> Vicenza</a>, 
        <a href="/produzione-video-corporate-padova" className="underline"> Padova</a>, 
        <a href="/produzione-video-corporate-treviso" className="underline"> Treviso</a>, 
        <a href="/produzione-video-corporate-venezia" className="underline"> Venezia</a>, 
        <a href="/produzione-video-corporate-belluno" className="underline"> Belluno</a>, 
        <a href="/produzione-video-corporate-rovigo" className="underline"> Rovigo</a>, 
        <a href="/produzione-video-corporate-asiago" className="underline"> Asiago</a>, 
        <a href="/produzione-video-corporate-trento" className="underline"> Trento</a> 
        e 
        <a href="/produzione-video-corporate-bolzano" className="underline"> Bolzano</a>.
      </p>

      <a href="/#contact" className="border px-8 py-4 inline-block hover:bg-primary transition">
        Parliamo del tuo progetto
      </a>

    </section>
  );
};

export default CorporateVerona;