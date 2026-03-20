import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Partner = {
  name: string;
  logoSrc?: string;
};

// Inserisci qui i tuoi loghi (consigliato: /public/images/partners/...).
const partners: Partner[] = [
  { name: "Microsoft" },
  { name: "Real Madrid" },
  { name: "Volvo" },
  { name: "Ralph Lauren" },
  { name: "Kansas City Chiefs" },
  { name: "Walmart" },
  { name: "Google" },
  { name: "Apple" },
  { name: "NBCUniversal" },
  { name: "Prime Video" },
  { name: "Shopify" },
];

const PartnersSection = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const copy = {
    label: language === "it" ? "Collaborazioni" : "Collaborations",
    heading: language === "it" ? "Aziende con cui abbiamo lavorato" : "Brands we have worked with",
  };

  return (
    <section id="partners" className="bg-gradient-dark pb-20">
      <div ref={ref} className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="px-6 sm:px-0 text-center mb-8"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary/70 mb-4">
            {copy.label}
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-light text-foreground/90">
            {copy.heading}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative border-y border-border/80 bg-black/25"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />

          <div className="flex items-center gap-10 overflow-x-auto px-6 py-7 md:gap-14 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.03 * index }}
                className="group flex h-11 min-w-[120px] shrink-0 items-center justify-center"
              >
                {partner.logoSrc ? (
                  <img
                    src={partner.logoSrc}
                    alt={partner.name}
                    className="max-h-10 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-95 group-hover:grayscale-0"
                    loading="lazy"
                  />
                ) : (
                  <span className="whitespace-nowrap font-body text-lg md:text-xl font-semibold tracking-tight text-foreground/45 transition-colors duration-300 group-hover:text-foreground/80">
                    {partner.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
