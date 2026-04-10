import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Partner = {
  name: string;
  logoSrc?: string;
};

const sharedPartnerLogo = "/images/partners/Lidl.png";

// Logo unico replicato nei 9 slot della versione griglia.
const partners: Partner[] = [
  { name: "Lidl", logoSrc: "/images/partners/Lidl.png" },
  { name: "Franchin", logoSrc: "/images/partners/franchin.png" },
  { name: "Toyota", logoSrc: "/images/partners/toyota.png" },
  { name: "Castelmani", logoSrc: "/images/partners/castelmani.png" },
  { name: "Fineco Bank", logoSrc: "/images/partners/FinecoBank_Logo.svg.png" },
  { name: "Ocsa", logoSrc: "/images/partners/ocsa.png" },
  { name: "Brugi", logoSrc: "/images/partners/logo-brugi-store-este.png" },
  { name: "Ormaneto", logoSrc: "/images/partners/ormaneto.png" },
  { name: "Motorola", logoSrc: "/images/partners/motorola.png" },
  { name: "Righetto", logoSrc: "/images/partners/righetto.png" },
  { name: "Samsung", logoSrc: "/images/partners/samsung.png" },
  { name: "Rinaldi", logoSrc: "/images/partners/rinaldi.png" },
  { name: "Verona", logoSrc: "/images/partners/verona.png" },
  { name: "Ross", logoSrc: "/images/partners/ross.png" },
  { name: "Atrepan", logoSrc: "/images/partners/atrepan.png" },
  { name: "Saracino", logoSrc: "/images/partners/saracino.png" },
];

const PartnerLogo = ({ partner }: { partner: Partner }) => {
  if (partner.logoSrc) {
    return (
      <img
        src={partner.logoSrc}
        alt={partner.name}
        className="max-h-12 md:max-h-20 w-auto transition-all duration-300"
        loading="lazy"
      />
    );
  }

  return (
    <span className="whitespace-nowrap font-body text-base md:text-lg font-semibold tracking-tight text-foreground/45 transition-colors duration-300 group-hover:text-foreground/80">
      {partner.name}
    </span>
  );
};

const PartnersSection = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const copy = {
    label: language === "it" ? "Collaborazioni" : "Collaborations",
    headingMain: language === "it" ? "Ci Hanno Concesso La Loro" : "They Have Placed Their",
    headingAccent: language === "it" ? "Fiducia" : "Trust",
  };

  return (
    <section id="partners" className="relative overflow-hidden bg-gradient-dark pt-20 md:pt-32 pb-4 md:pb-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-background via-background/78 to-transparent md:h-36" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-b from-transparent via-background/78 to-background md:h-36" />

      <div ref={ref} className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-12">
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
          className="px-6 sm:px-0 text-center mb-16 md:mb-20"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase gold-text-soft mb-6">
            {copy.label}
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light">
            {copy.headingMain} <span className="italic gold-text-strong">{copy.headingAccent}</span>
          </h2>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mb-16 md:mb-20"
      >
        <p className="mb-4 px-6 font-body text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
        </p>

        <div className="relative w-full overflow-hidden border-y border-border/80 bg-black/25 py-4 md:py-7">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <motion.div
            className="flex w-max items-center gap-6 md:gap-14"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group flex h-8 min-w-[96px] shrink-0 items-center justify-center px-1 md:h-11 md:min-w-[130px]"
              >
                <PartnerLogo partner={partner} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnersSection;
