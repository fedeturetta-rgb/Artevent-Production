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
  const phoneContacts = contactInfo.filter((item) => item.icon === Phone);
  const emailContact = contactInfo.find((item) => item.icon === Mail);
  const addressContacts = contactInfo.filter((item) => item.icon === MapPin);

  const copy = {
    sectionLabel: language === "it" ? "Contatti" : "Contact us",
    headingMain: language === "it" ? "Portiamo il tuo brand a livello" : "Elevate your brand to a",
    headingAccent: language === "it" ? "Cinematografico" : "Cinematic Level",
    phoneCursorLabel: language === "it" ? "chiama" : "call",
    emailCursorLabel: language === "it" ? "scrivi" : "write",
    addressCursorLabel: language === "it" ? "naviga" : "navigate",
  }; //Portiamo il tuo brand a livello cinematografico

  const renderContactCard = (
    item: (typeof contactInfo)[number],
    index: number,
    className = "",
  ) => {
    const cursorLabel =
      item.icon === Phone
        ? copy.phoneCursorLabel
        : item.icon === Mail
          ? copy.emailCursorLabel
          : copy.addressCursorLabel;

    return (
    <motion.a
      key={`${item.href}-${index}`}
      href={item.href}
      target={item.icon === MapPin ? "_blank" : undefined}
      rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
      data-cursor-label={cursorLabel}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className={`bg-background px-3 py-4 md:px-5 md:py-6 group hover-card-lift border-glow text-center flex flex-col items-center min-w-0 ${className}`}
    >
      <div className="w-8 h-8 md:w-10 md:h-10 border border-primary/20 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:border-primary/50 transition-colors duration-500">
        <item.icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary/60 group-hover:text-primary transition-colors duration-500" strokeWidth={1} />
      </div>
      <p className="font-body text-[11px] md:text-[13px] tracking-[0.16em] md:tracking-[0.35em] uppercase gold-text-muted mb-2 md:mb-3">
        {item.label[language]}
      </p>
      <p className="font-body text-[15px] sm:text-base md:text-lg text-foreground/70 group-hover:text-foreground transition-colors duration-500 leading-snug sm:leading-relaxed break-words">
        {item.value}
      </p>
    </motion.a>
    );
  };

  return (
    <section id="contact" className="relative overflow-hidden section-padding bg-gradient-dark">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-background via-background/78 to-transparent md:h-36" />

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
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase gold-text-soft mb-6">
            {copy.sectionLabel}
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light">
            {copy.headingMain}{" "}
            <span className="italic gold-text-strong">{copy.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="-mx-2 grid grid-cols-2 gap-3 sm:mx-0 md:grid-cols-6 md:gap-4">
          {phoneContacts.map((item, i) => renderContactCard(item, i, i === 0 ? "md:col-span-2 md:col-start-2" : "md:col-span-2"))}
          {emailContact && renderContactCard(emailContact, phoneContacts.length, "col-span-2 md:col-span-4 md:col-start-2 md:mx-0 md:max-w-none")}
          {addressContacts.map((item, i) => renderContactCard(
            item,
            phoneContacts.length + 1 + i,
            addressContacts.length === 1 ? "col-span-2 md:col-span-4 md:col-start-2 md:mx-0 md:max-w-none" : "col-span-2 md:col-span-4 md:col-start-2",
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
