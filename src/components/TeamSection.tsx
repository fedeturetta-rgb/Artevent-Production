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
    <section id="team" className="section-padding bg-gradient-dark">
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
          <p className="font-body text-[11px] tracking-[0.5em] uppercase text-primary/80 mb-6">
            {copy.sectionLabel}
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            {copy.headingMain} <span className="italic text-primary">{copy.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-background p-4 md:p-8 group hover-card-lift border-glow min-w-0"
            >
              {/* Photo */}
              <div className="aspect-[3/4] mb-4 md:mb-8 overflow-hidden bg-gradient-card border border-border">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="block w-full h-full object-cover transition-all duration-700"
                    style={{
                      objectPosition: member.imagePosition ?? "50% 50%",
                      transform: `translate(${member.imageOffsetX ?? "0%"}, ${member.imageOffsetY ?? "0%"}) scale(${member.imageScale ?? 1})`,
                      transformOrigin: "center",
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-display text-2xl text-primary/40">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
                        {copy.photoFallback}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="luxwine-line-h mb-4 md:mb-6" />
              <h3 className="font-display text-base md:text-2xl font-light mb-1 leading-tight">
                {member.name}
              </h3>
              <p className="font-body text-[8px] md:text-[10px] tracking-[0.16em] md:tracking-[0.3em] uppercase text-primary/70 mb-3 md:mb-4">
                {member.title[language]}
              </p>
              <p className="font-body text-xs md:text-sm text-foreground/50 leading-relaxed break-words">
                {member.description[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
