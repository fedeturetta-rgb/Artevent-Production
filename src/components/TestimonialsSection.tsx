import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const names = ["Sarah Chen", "Marcus Reid", "Elena Rodriguez"];
const titles = ["VP Marketing, TechVault Inc.", "CEO, Meridian Group", "CMO, Apex Global"];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const { lang } = useLanguage();
  const t = translations.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % t.items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ height: 0 }} animate={inView ? { height: 60 } : {}} transition={{ duration: 0.8 }} className="w-px bg-primary/30 mx-auto mb-12" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <p className="font-body text-[11px] tracking-[0.5em] uppercase text-primary/80 mb-6">{t.label[lang]}</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light mb-20">
            {t.title1[lang]} <span className="italic text-primary">{t.titleHighlight[lang]}</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-display text-xl md:text-2xl lg:text-3xl font-light leading-relaxed italic text-foreground/80 mb-12 max-w-3xl">
                "{t.items[current].quote[lang]}"
              </p>
              <div className="luxwine-line-h mx-auto mb-6" />
              <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground/70">{names[current]}</p>
              <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground mt-1">{titles[current]}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-3 justify-center mt-16">
          {t.items.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`h-px transition-all duration-700 ${i === current ? "bg-primary w-10" : "bg-foreground/15 w-6"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
