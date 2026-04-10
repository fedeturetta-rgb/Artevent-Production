import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const teamMembers = [
  {
    name: "Guido Frigo",
    title: { it: "Fotografo & DoP", en: "Photographer & DoP" },
    description: {
      it: "Oltre 25 anni di esperienza nel mondo della fotografia corporate per brand internazionali e di reportage.",
      en: "Over 25 years of experience in corporate photography for international brands and reportage.",
    },
    image: "/images/Guido.JPG", // Inserisci il percorso dell'immagine, es: "/images/team-1.jpg"
    imagePosition: "75% 100%", // Modifica qui per riposizionare la foto //"50% 50%" centro, "50% 20%" più in alto, "40% 35%" un po’ a sinistra, "60% 30%" un po’ a destra
    imageScale: 1.00, // Modifica qui per ingrandire/ridurre la foto
    imageOffsetX: "0%", // Offset reale orizzontale: es. "-8%", "10%"
    imageOffsetY: "0%", // Offset reale verticale: es. "-12%", "8%"

  },
  {
    name: "Federico Turetta",
    title: { it: "Videografo & Dronista", en: "Videographer & Dronist" },
    description: {
      it: "Dronista certificato, specializzato in montaggio narrativo e post-produzione per produzioni premium.",
      en: "Certified drone operator, specialized in narrative editing and post-production for premium productions.",
    },
    image: "/images/Fede.JPG",
    imagePosition: "21% 10%", // Modifica qui per riposizionare la foto //"50% 50%" centro, "50% 20%" più in alto, "40% 35%" un po’ a sinistra, "60% 30%" un po’ a destra
    imageScale: 1.11, // Modifica qui per ingrandire/ridurre la foto
    imageOffsetX: "0%", // Offset reale orizzontale: es. "-8%", "10%"
    imageOffsetY: "-5%", // Offset reale verticale: es. "-12%", "8%"

  },
];

const TeamSection = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const copy = {
    sectionLabel: language === "it" ? "Il Nostro Team" : "Our Team",
    headingMain: language === "it" ? "Le Menti" : "The Creative",
    headingAccent: language === "it" ? "Creative" : "Minds",
    photoFallback: language === "it" ? "Foto" : "Photo",
  };

  return (
    <section id="team" className="relative overflow-hidden section-padding bg-gradient-dark">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-background via-background/78 to-transparent md:h-36" />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: 60 } : {}}
          transition={{ duration: 0.8 }}
          className="w-px bg-primary/30 mx-auto mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase gold-text-soft mb-6">
            {copy.sectionLabel}
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            {copy.headingMain} <span className="italic gold-text-strong">{copy.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {teamMembers.map((member, i) => {
            const isReversed = i % 2 === 1;

            return (
              <div key={member.name} className="grid items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className={isReversed ? "order-2 lg:order-2" : "order-2 lg:order-1"}
                >
                  <div className="luxwine-line-h mb-6 md:mb-8" />
                  <h3 className="font-display text-3xl md:text-5xl font-light mb-3 leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-body text-xs md:text-sm tracking-[0.3em] uppercase gold-text-muted mb-6 md:mb-8">
                    {member.title[language]}
                  </p>
                  <p className="font-body text-base md:text-lg text-foreground/70 leading-[2.2] break-words max-w-xl">
                    {member.description[language]}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.1 }}
                  className={isReversed ? "order-1 lg:order-1" : "order-1 lg:order-2"}
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-gradient-card">
                    {member.image ? (
                      <>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="block h-full w-full object-cover transition-all duration-700"
                          style={{
                            objectPosition: member.imagePosition ?? "50% 50%",
                            transform: `translate(${member.imageOffsetX ?? "0%"}, ${member.imageOffsetY ?? "0%"}) scale(${member.imageScale ?? 1})`,
                            transformOrigin: "center",
                          }}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_52%,hsl(var(--deep-black)/0.14)_74%,hsl(var(--deep-black)/0.36)_100%)]" />
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="text-center">
                          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20">
                            <span className="font-display text-2xl text-primary/40">
                              {member.name.split(" ").map((part) => part[0]).join("")}
                            </span>
                          </div>
                          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
                            {copy.photoFallback}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
