import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const missionPhoto = {
  src: "/images/Rinaldi/sboccatura.jpg",
};

const MissionSection = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const copy = {
    sectionLabel: language === "it" ? "La Nostra Mission" : "Our Mission",
    heading1Line1: language === "it" ? "Catturare" : "Capturing",
    heading1Accent:
      language === "it" ? "l'Istante Perfetto" : "the Perfect Moment",
    paragraph1:
      language === "it"
        ? "La fotografia è il cuore pulsante della nostra visione creativa. Ogni scatto nasce dall'unione tra tecnica impeccabile e sensibilita artistica, trasformando momenti fugaci in immagini senza tempo. Dalla composizione alla post-produzione, ogni fase è curata con la stessa attenzione al dettaglio che contraddistingue il nostro lavoro cinematografico, perché un'immagine straordinaria vale più di mille parole."
        : "Photography is the heartbeat of our creative vision. Every shot is born from flawless technique and artistic sensitivity, turning fleeting moments into timeless imagery. From composition to post-production, every stage is handled with the same attention to detail that defines our cinematic work, because one outstanding image is worth more than a thousand words.",
    paragraph2:
      language === "it"
        ? "In Artevent Production, fondiamo arte cinematografica e storytelling strategico. Ogni fotogramma è costruito per elevare il tuo brand, coinvolgere il tuo pubblico e lasciare un'impressione duratura. Curiamo ogni singolo fotogramma con intenzione, unendo arte e storytelling strategico per elevare il tuo brand sopra il rumore."
        : "At Artevent Production, we blend cinematic craft with strategic storytelling. Every frame is built to elevate your brand, engage your audience, and leave a lasting impression. We shape every frame with intention, combining art and strategy to lift your brand above the noise.",
  };

  return (
    <section id="mission" className="relative overflow-hidden bg-gradient-dark pb-28 pt-0 md:min-h-[56.25vw] md:pb-28 md:pt-0">
      <motion.img
        src={missionPhoto.src}
        alt={language === "it" ? "Sfondo mission" : "Mission background"}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={inView ? { opacity: 0.9, scale: 1 } : {}}
        transition={{ duration: 0.9 }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="cinema-overlay absolute inset-0" />

      <div ref={ref} className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-6 py-16 translate-y-4 md:min-h-[56.25vw] md:px-12 md:py-28 md:translate-y-10 lg:px-20 lg:py-32 lg:translate-y-12 xl:px-32">
        {/* Top decorative line */}
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: 60 } : {}}
          transition={{ duration: 0.8 }}
          className="w-px bg-primary/30 mx-auto mb-8 md:mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase gold-text-soft mb-6">
            {copy.sectionLabel}
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-center font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6 md:mb-8">
              {copy.heading1Line1}{" "}
              <span className="italic gold-text-strong">{copy.heading1Accent}</span>
            </h3>
            <p className="text-foreground/70 font-body text-base md:text-lg leading-[1.8] md:leading-[2.2] mb-6 md:mb-8">
              {copy.paragraph1}
            </p>
            <p className="text-foreground/70 font-body text-base md:text-lg leading-[1.8] md:leading-[2.2]">
              {copy.paragraph2}
            </p>
            <div className="mt-8 md:mt-10 luxwine-line-h" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;