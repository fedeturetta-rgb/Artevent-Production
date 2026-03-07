import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Camera, Mic, Package, Clapperboard } from "lucide-react";
import filmAziendaliThumb from "@/assets/film-aziendali-thumb.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [Film, Camera, Clapperboard, Package, Mic];
const thumbs = [filmAziendaliThumb, filmAziendaliThumb, undefined, undefined, undefined];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const t = translations.services;

  return (
    <section id="services" className="section-padding">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div initial={{ height: 0 }} animate={inView ? { height: 60 } : {}} transition={{ duration: 0.8 }} className="w-px bg-primary/30 mx-auto mb-12" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-24">
          <p className="font-body text-[11px] tracking-[0.5em] uppercase text-primary/80 mb-6">{t.label[lang]}</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light">
            {t.title1[lang]} <span className="italic text-primary">{t.titleHighlight[lang]}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            const thumb = thumbs[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`bg-background group cursor-pointer hover:bg-card transition-colors duration-700 overflow-hidden ${thumb ? '' : 'p-10 md:p-12'}`}
              >
                {thumb ? (
                  <div className="relative">
                    <img src={thumb} alt={item.title[lang]} className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="p-10 md:p-12">
                      <Icon className="w-7 h-7 text-primary/60 mb-8 group-hover:text-primary transition-colors duration-500" strokeWidth={1} />
                      <h3 className="font-display text-xl md:text-2xl font-light mb-4 tracking-wide">{item.title[lang]}</h3>
                      <p className="text-muted-foreground font-body text-xs leading-[2] tracking-wide">{item.description[lang]}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <Icon className="w-7 h-7 text-primary/60 mb-8 group-hover:text-primary transition-colors duration-500" strokeWidth={1} />
                    <h3 className="font-display text-xl md:text-2xl font-light mb-4 tracking-wide">{item.title[lang]}</h3>
                    <p className="text-muted-foreground font-body text-xs leading-[2] tracking-wide">{item.description[lang]}</p>
                  </>
                )}
              </motion.div>
            );
          })}
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="bg-background p-10 md:p-12 flex items-center justify-center">
            <a href="#contact" className="font-body text-[11px] tracking-[0.3em] uppercase text-primary/70 hover:text-primary transition-colors duration-500 border-b border-primary/30 pb-1">
              {t.requestQuote[lang]}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
