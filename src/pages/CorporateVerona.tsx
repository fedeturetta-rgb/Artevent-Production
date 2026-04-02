import { motion } from "framer-motion";

const CorporateVerona = () => {
  return (
    <section className="min-h-screen px-6 py-32 max-w-5xl mx-auto">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-light mb-10"
      >
        Produzione Video Corporate a Verona
      </motion.h1>

      <p className="mb-6 text-foreground/70">
        Realizziamo video corporate cinematografici a Verona per aziende che vogliono distinguersi, comunicare con impatto e posizionarsi a un livello superiore.
      </p>

      <h2 className="text-2xl mb-6">Video aziendali che valorizzano il tuo brand</h2>

      <p className="text-foreground/70 mb-6">
        Un video corporate non è solo un contenuto, ma uno strumento strategico che migliora la percezione del tuo brand e crea connessione con il tuo pubblico.
      </p>

      <p className="text-foreground/70 mb-10">
        Artevent Production sviluppa video aziendali a Verona con un approccio cinematografico, curando ogni fase: concept, produzione e post-produzione.
      </p>

      <h2 className="text-2xl mb-6">Cosa realizziamo</h2>

      <ul className="space-y-2 text-foreground/70 mb-10">
        <li>Video corporate e istituzionali</li>
        <li>Video aziendali per siti web e campagne</li>
        <li>Interviste executive</li>
        <li>Video per branding e marketing</li>
      </ul>

      <h2 className="text-2xl mb-6">Perché scegliere Artevent Production</h2>

      <p className="text-foreground/70 mb-10">
        Un approccio visivo di alto livello, attenzione ai dettagli e una narrazione pensata per valorizzare realmente il tuo brand.
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

export default CorporateVerona;