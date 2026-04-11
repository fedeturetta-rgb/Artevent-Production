import { motion } from "framer-motion";

const CorporateBelluno = () => {
  return (
    <section className="min-h-screen px-6 py-32 max-w-5xl mx-auto">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-light mb-10"
      >
        Produzione Video Aziendali, Fotografia Corporate e Riprese Drone a Belluno
      </motion.h1>

      <p className="mb-6 text-foreground/70">
        Artevent Production realizza video aziendali, fotografia corporate e riprese con drone a Belluno per aziende e attività che vogliono distinguersi con contenuti visivi professionali.
      </p>

      <p className="text-foreground/70 mb-10">
        Creiamo contenuti progettati per valorizzare il brand, migliorare la percezione aziendale e comunicare in modo efficace attraverso video, fotografia e riprese aeree.
      </p>

      <h2 className="text-2xl mb-6">Video aziendali e video corporate a Belluno</h2>

      <p className="text-foreground/70 mb-6">
        Produciamo video aziendali e corporate a Belluno per siti web, campagne marketing e comunicazione aziendale, sviluppando contenuti su misura.
      </p>

      <p className="text-foreground/70 mb-10">
        Ogni produzione video è progettata per trasmettere identità, valori e posizionamento in modo chiaro e professionale.
      </p>

      <h2 className="text-2xl mb-6">Fotografia aziendale e fotografia corporate a Belluno</h2>

      <p className="text-foreground/70 mb-6">
        Realizziamo fotografia aziendale e corporate a Belluno per creare un’immagine coerente e professionale su sito web e materiali marketing.
      </p>

      <p className="text-foreground/70 mb-10">
        Produciamo ritratti professionali e contenuti visivi progettati per valorizzare aziende e attività locali.
      </p>

      <h2 className="text-2xl mb-6">Riprese con drone a Belluno e video aerei</h2>

      <p className="text-foreground/70 mb-6">
        Le riprese con drone a Belluno permettono di valorizzare il territorio e le aziende con immagini ad alto impatto visivo.
      </p>

      <p className="text-foreground/70 mb-10">
        Utilizziamo droni professionali per realizzare video aerei cinematici e fotografia aerea integrata nelle produzioni corporate.
      </p>

      <h2 className="text-2xl mb-6">Servizi di produzione video e fotografia aziendale a Belluno</h2>

      <ul className="space-y-2 text-foreground/70 mb-10">
        <li>Produzione video aziendali e corporate</li>
        <li>Fotografia aziendale e ritratti corporate</li>
        <li>Riprese con drone e video aerei</li>
        <li>Fotografia aerea professionale</li>
        <li>Contenuti per marketing e promozione</li>
        <li>Produzioni visive per aziende e attività locali</li>
      </ul>

      <h2 className="text-2xl mb-6">Metodo di lavoro</h2>

      <p className="text-foreground/70 mb-6">
        Analizziamo gli obiettivi per sviluppare un concept visivo efficace e coerente con il brand.
      </p>

      <p className="text-foreground/70 mb-10">
        Gestiamo tutte le fasi: ideazione, produzione video, fotografia, drone e post-produzione.
      </p>

      <h2 className="text-2xl mb-6">Perché scegliere Artevent Production a Belluno</h2>

      <p className="text-foreground/70 mb-10">
        Approccio cinematografico, tecnologie avanzate e attenzione ai dettagli per contenuti visivi distintivi e professionali.
      </p>

      {/* SERVIZI */}
      <p className="text-foreground/70 mb-6">
        Scopri anche i nostri servizi di 
        <a href="/riprese-drone-belluno" className="underline"> riprese con drone a Belluno</a> 
        e 
        <a href="/fotografia-aziendale-belluno" className="underline"> fotografia aziendale a Belluno</a>.
      </p>

      {/* INTERLINK COMPLETI */}
      <p className="text-foreground/70 mb-10">
        Operiamo anche a 
        <a href="/produzione-video-corporate-verona" className="underline"> Verona</a>, 
        <a href="/produzione-video-corporate-vicenza" className="underline"> Vicenza</a>, 
        <a href="/produzione-video-corporate-padova" className="underline"> Padova</a>, 
        <a href="/produzione-video-corporate-treviso" className="underline"> Treviso</a>, 
        <a href="/produzione-video-corporate-venezia" className="underline"> Venezia</a>, 
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

export default CorporateBelluno;