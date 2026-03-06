import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Film Aziendali",
    description: "Storie cinematografiche che definiscono l'identità della tua azienda e risuonano con il tuo pubblico a livello emotivo.",
    image: "https://images.unsplash.com/photo-1654723011663-2ac59c385b16?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    title: "Copertura Eventi",
    description: "Copertura multi-camera e broadcast-quality di conferenze, gala, lanci di prodotto e eventi aziendali in tutto il mondo.",
    image: "https://images.unsplash.com/photo-1654723011680-0e037c2a4f18?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    title: "Brand Storytelling",
    description: "Narrazioni strategiche che trasformano il messaggio del tuo brand in storie visive coinvolgenti che generano engagement e fedeltà.",
    image: "https://images.unsplash.com/photo-1654723011662-e9be9ab3fe84?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    title: "Interviste Executive",
    description: "Produzioni professionali e curate che posizionano i tuoi leader come voci autorevoli e thought leader del settore.",
    image: "https://images.unsplash.com/photo-1664817550935-79d3b6255a82?q=80&w=800",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-gradient-dark">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-[11px] tracking-[0.5em] uppercase text-primary/80 mb-6">
            Cosa Facciamo
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light">
            La Nostra <span className="italic text-primary">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-light mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-xs leading-[2] tracking-wide mb-4">
                {service.description}
              </p>
              <a
                href="#contact"
                className="font-body text-[11px] tracking-[0.3em] uppercase text-primary/70 hover:text-primary transition-colors duration-500 border-b border-primary/30 pb-1"
              >
                Scopri
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
