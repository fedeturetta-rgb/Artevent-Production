import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const contactInfo = [
  {
    icon: Phone,
    label: { it: "Guido", en: "Guido" },
    value: "+39 347 120 64 41",
    href: "tel:+393471206441",
  },
  {
    icon: Phone,
    label: { it: "Federico", en: "Federico" },
    value: "+39 349 218 24 79",
    href: "tel:+393492182479",
  },
  {
    icon: Mail,
    label: { it: "Email", en: "Email" },
    value: "info@arteventproduction.com",
    href: "mailto:info@arteventproduction.com",
  },
  {
    icon: MapPin,
    label: { it: "Indirizzo", en: "Address" },
    value: "Via Callesella, 1425, 37040 Zimella VR",
    href: "https://maps.app.goo.gl/j3BSYqzer5mX5bsb7",
  },
];

const ContactSection = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const copy = {
    sectionLabel: language === "it" ? "Contatti" : "Contact us",
    headingMain: language === "it" ? "Portiamo il tuo brand a livello" : "Elevate your brand to a",
    headingAccent: language === "it" ? "Cinematografico" : "Cinematic Level",
  }; //Portiamo il tuo brand a livello cinematografico

  return (
    <section id="contact" className="section-padding bg-gradient-dark">
      <div ref={ref} className="max-w-4xl mx-auto">
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
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light">
            {copy.headingMain}{" "}
            <span className="italic text-primary">{copy.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {contactInfo.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.icon === MapPin ? "_blank" : undefined}
              rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-background px-3 py-4 md:px-5 md:py-6 group hover-card-lift border-glow text-center flex flex-col items-center min-w-0"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 border border-primary/20 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:border-primary/50 transition-colors duration-500">
                <item.icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary/60 group-hover:text-primary transition-colors duration-500" strokeWidth={1} />
              </div>
              <p className="font-body text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.35em] uppercase text-primary/70 mb-2 md:mb-3">
                {item.label[language]}
              </p>
              <p className="font-body text-xs md:text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-500 leading-relaxed break-words">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
