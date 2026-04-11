import { motion } from "framer-motion";

const DroneVerona = () => {
  return (
    <section className="min-h-screen px-6 py-32 max-w-5xl mx-auto">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-light mb-10"
      >
        Riprese con Drone a Verona, Video Aerei e Fotografia Aerea Professionale
      </motion.h1>

      <p className="mb-6 text-foreground/70">
        Artevent Production realizza riprese con drone a Verona per aziende, brand e attività che vogliono ottenere contenuti visivi ad alto impatto. Produciamo video aerei e fotografia aerea professionale per valorizzare location, strutture e progetti.
      </p>

      <p className="text-foreground/70 mb-10">
        Le riprese drone rappresentano uno degli strumenti più efficaci per distinguersi visivamente, offrendo prospettive uniche e cinematiche impossibili da ottenere da terra.
      </p>

      <h2 className="text-2xl mb-6">Riprese con drone a Verona per aziende</h2>

      <p className="text-foreground/70 mb-6">
        Realizziamo riprese con drone a Verona per aziende che vogliono migliorare la propria comunicazione visiva attraverso video aerei professionali.
      </p>

      <p className="text-foreground/70 mb-10">
        I video drone sono ideali per presentazioni aziendali, contenuti marketing, siti web e campagne pubblicitarie.
      </p>

      <h2 className="text-2xl mb-6">Video aerei cinematici</h2>

      <p className="text-foreground/70 mb-6">
        Produciamo video aerei cinematici a Verona con droni professionali, progettati per integrarsi perfettamente in produzioni video corporate e commerciali.
      </p>

      <p className="text-foreground/70 mb-10">
        Ogni ripresa è studiata per valorizzare il contesto e creare un forte impatto visivo.
      </p>

      <h2 className="text-2xl mb-6">Fotografia aerea professionale</h2>

      <p className="text-foreground/70 mb-6">
        Oltre ai video, realizziamo fotografia aerea a Verona per aziende, immobili, strutture ricettive e progetti architettonici.
      </p>

      <p className="text-foreground/70 mb-10">
        Le immagini aeree permettono di comunicare in modo immediato valore, dimensione e contesto.
      </p>

      <h2 className="text-2xl mb-6">Quando utilizzare le riprese drone</h2>

      <ul className="space-y-2 text-foreground/70 mb-10">
        <li>Presentazione aziende e sedi</li>
        <li>Video corporate e promozionali</li>
        <li>Settore immobiliare e turismo</li>
        <li>Hotel, resort e strutture ricettive</li>
        <li>Industria e impianti produttivi</li>
        <li>Eventi e produzioni video</li>
      </ul>

      <h2 className="text-2xl mb-6">Riprese drone sicure e professionali</h2>

      <p className="text-foreground/70 mb-6">
        Operiamo nel rispetto delle normative vigenti, utilizzando droni certificati e piloti qualificati per garantire sicurezza e qualità delle riprese.
      </p>

      <p className="text-foreground/70 mb-10">
        Pianifichiamo ogni operazione per ottenere il massimo risultato visivo in totale sicurezza.
      </p>

      <h2 className="text-2xl mb-6">Perché scegliere Artevent Production per le riprese drone a Verona</h2>

      <p className="text-foreground/70 mb-10">
        Approccio cinematografico, esperienza sul campo e attenzione ai dettagli ci permettono di realizzare contenuti aerei di alto livello, perfettamente integrati nelle produzioni video aziendali.
      </p>

      {/* CROSS LINK */}
      <p className="text-foreground/70 mb-6">
        Scopri anche la nostra 
        <a href="/produzione-video-corporate-verona" className="underline"> produzione video corporate a Verona</a> 
        e la 
        <a href="/fotografia-aziendale-verona" className="underline"> fotografia aziendale a Verona</a>.
      </p>

      {/* INTERLINK GEO */}
      <p className="text-foreground/70 mb-10">
        Offriamo riprese drone anche a 
        <a href="/riprese-drone-vicenza"> Vicenza</a>, 
        <a href="/riprese-drone-padova"> Padova</a>, 
        <a href="/riprese-drone-treviso"> Treviso</a>, 
        <a href="/riprese-drone-venezia"> Venezia</a>, 
        <a href="/riprese-drone-belluno"> Belluno</a>, 
        <a href="/riprese-drone-rovigo"> Rovigo</a>, 
        <a href="/riprese-drone-asiago"> Asiago</a>, 
        <a href="/riprese-drone-trento"> Trento</a> 
        e 
        <a href="/riprese-drone-bolzano"> Bolzano</a>.
      </p>

      <a href="/#contact" className="border px-8 py-4 inline-block hover:bg-primary transition">
        Richiedi un preventivo
      </a>

    </section>
  );
};

export default DroneVerona;