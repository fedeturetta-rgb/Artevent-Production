import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Camera, Mic, Package, Clapperboard } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Film Aziendali",
    description: "Film cinematografici che catturano l'essenza e i valori della tua azienda con una produzione di livello hollywoodiano.",
  },
  {
    icon: Camera,
    title: "Copertura Eventi",
    description: "Documentazione multi-camera che trasforma conferenze e gala in narrazioni visive coinvolgenti.",
  },
  {
    icon: Clapperboard,
    title: "Brand Storytelling",
    description: "Contenuti narrativi strategici che creano connessioni emotive profonde con il tuo pubblico target.",
  },
  {
    icon: Package,
    title: "Video Prodotto",
    description: "Showcase di prodotto eleganti e ad alto impatto, progettati per convertire gli spettatori in clienti.",
  },
  {
    icon: Mic,
    title: "Interviste Executive",
    description: "Contenuti di thought-leadership professionali che posizionano i tuoi leader come autorità del settore.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Cosa Facciamo
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            I Nostri <span className="text-gradient-gold">Servizi</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gradient-card border-glow rounded-sm p-8 hover-card-lift group cursor-pointer"
            >
              <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
