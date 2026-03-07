import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const memberNames = ["Nome Cognome", "Nome Cognome", "Nome Cognome"];
const memberImages = ["", "", ""];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const t = translations.team;

  return (
    <section id="team" className="section-padding bg-gradient-dark">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div initial={{ height: 0 }} animate={inView ? { height: 60 } : {}} transition={{ duration: 0.8 }} className="w-px bg-primary/30 mx-auto mb-12" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
          <p className="font-body text-[11px] tracking-[0.5em] uppercase text-primary/80 mb-6">{t.label[lang]}</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            {t.title1[lang]} <span className="italic text-primary">{t.titleHighlight[lang]}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border/30">
          {t.items.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-background p-8 group hover-card-lift border-glow"
            >
              <div className="aspect-[3/4] mb-8 overflow-hidden bg-gradient-card border border-border">
                {memberImages[i] ? (
                  <img src={memberImages[i]} alt={memberNames[i]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-display text-2xl text-primary/40">
                          {memberNames[i].split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground">{t.photo[lang]}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="luxwine-line-h mb-6" />
              <h3 className="font-display text-xl md:text-2xl font-light mb-1">{memberNames[i]}</h3>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary/70 mb-4">{member.title[lang]}</p>
              <p className="font-body text-sm text-foreground/50 leading-relaxed">{member.description[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
