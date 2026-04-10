import { motion } from "framer-motion";

const CorporateAsiago = () => {
  return (
    <section className="min-h-screen px-6 py-32 max-w-5xl mx-auto">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-light mb-10"
      >
        Produzione Video Corporate ad Asiago.
      </motion.h1>

      <p className="mb-6 text-foreground/70">
        Offriamo servizi di produzione video corporate ad Asiago per aziende e attività che vogliono distinguersi con contenuti professionali e valorizzare il proprio brand.
      </p>

      <h2 className="text-2xl mb-6">Video aziendali ad Asiago per il tuo brand</h2>

      <p className="text-foreground/70 mb-6">
        I video aziendali ad Asiago sono uno strumento strategico per migliorare la percezione del brand e aumentare la visibilità della tua attività.
      </p>

      <p className="text-foreground/70 mb-10">
        Artevent Production realizza video corporate ad Asiago curando ogni fase: concept creativo, produzione e post-produzione professionale.
      </p>

      <h2 className="text-2xl mb-6">Produzione video corporate ad Asiago: cosa realizziamo</h2>

      <ul className="space-y-2 text-foreground/70 mb-10">
        <li>Video corporate e istituzionali</li>
        <li>Video aziendali per siti web e marketing</li>
        <li>Interviste executive</li>
        <li>Video promozionali e storytelling</li>
      </ul>

      <h2 className="text-2xl mb-6">Perché scegliere Artevent Production ad Asiago</h2>

      <p className="text-foreground/70 mb-10">
        Offriamo qualità visiva elevata, attenzione ai dettagli e una narrazione pensata per valorizzare il tuo brand in modo concreto.
      </p>

      <a
        href="/#contact"
        className="border px-8 py-4 inline-block hover:bg-primary transition"
      >
        Parliamo del tuo progetto
      </a>

    </section>
  );
};

export default CorporateAsiago;