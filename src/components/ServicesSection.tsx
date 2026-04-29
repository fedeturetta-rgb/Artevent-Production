import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Camera, Mic, Package, Clapperboard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    icon: Film,
    title: { it: "Film Aziendali", en: "Corporate Films" },
    description: {
      it: "Film cinematografici che catturano l'essenza e i valori della tua azienda con una produzione di livello hollywoodiano.",
      en: "Cinematic films that capture your company's essence and values with Hollywood-level production.",
    },
  },
  {
    icon: Camera,
    title: { it: "Copertura Eventi", en: "Event Coverage" },
    description: {
      it: "Documentazione multi-camera che trasforma conferenze e gala in narrazioni visive coinvolgenti.",
      en: "Multi-camera documentation that turns conferences and galas into engaging visual narratives.",
    },
  },
  {
    icon: Clapperboard,
    title: { it: "Brand Storytelling", en: "Brand Storytelling" },
    description: {
      it: "Contenuti narrativi strategici che creano connessioni emotive profonde con il tuo pubblico target.",
      en: "Strategic narrative content that creates deep emotional connections with your target audience.",
    },
  },
  {
    icon: Package,
    title: { it: "Video Prodotto", en: "Product Video" },
    description: {
      it: "Showcase di prodotto eleganti e ad alto impatto, progettati per convertire gli spettatori in clienti.",
      en: "Elegant, high-impact product showcases designed to convert viewers into customers.",
    },
  },
  {
    icon: Mic,
    title: { it: "Interviste Executive", en: "Executive Interviews" },
    description: {
      it: "Contenuti di thought-leadership professionali che posizionano i tuoi leader come autorita del settore.",
      en: "Professional thought-leadership content that positions your leaders as industry authorities.",
    },
  },
];

const ServicesSection = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const copy = {
    sectionLabel: language === "it" ? "Cosa Facciamo" : "What We Do",
    headingMain: language === "it" ? "I Nostri" : "Our",
    headingAccent: language === "it" ? "Servizi" : "Services",
    cta: language === "it" ? "Richiedi un Preventivo" : "Request a Quote",
  };

  return (
    <section id="services" className="px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: 36 } : {}}
          transition={{ duration: 0.8 }}
          className="w-px bg-primary/30 mx-auto mb-6"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-10"
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.42em] uppercase gold-text-soft mb-3">
            {copy.sectionLabel}
          </p>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-light leading-none">
            {copy.headingMain} <span className="italic gold-text-strong">{copy.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title.en}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background group cursor-pointer hover:bg-card transition-colors duration-700 overflow-hidden p-5 md:p-6"
            >
              <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary/60 mb-3 group-hover:text-primary transition-colors duration-500" strokeWidth={1} />
              <h3 className="font-display text-base md:text-xl font-light mb-2 tracking-wide leading-tight">
                {service.title[language]}
              </h3>
              <p className="text-muted-foreground font-body text-[11px] md:text-xs leading-[1.55] md:leading-[1.7] tracking-[0.02em]">
                {service.description[language]}
              </p>
            </motion.div>
          ))}
          {/* Empty cell to complete the grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-background p-5 md:p-6 flex items-center justify-center"
          >
            <a
              href="#contact"
              className="font-body text-[11px] tracking-[0.3em] uppercase gold-text-muted hover:text-primary transition-colors duration-500 border-b border-primary/30 pb-1"
            >
              {copy.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
