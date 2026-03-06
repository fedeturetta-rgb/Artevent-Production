import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-[11px] tracking-[0.5em] uppercase text-primary/80 mb-6">
            Artevent
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            Visione Cinematografica{" "}
            <span className="italic text-primary">& Maestria</span>
          </h2>
        </motion.div>

        {/* Text + Images */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-foreground/70 font-body text-sm leading-[2] mb-8">
              In Artevent Studio, fondiamo arte cinematografica e storytelling strategico. 
              Ogni fotogramma è costruito per elevare il tuo brand, coinvolgere il tuo pubblico 
              e lasciare un'impressione duratura. Collaboriamo con aziende Fortune 500, 
              startup ambiziose e leader visionari che comprendono il potere del cinema.
            </p>
            <p className="text-foreground/50 font-body text-sm leading-[2]">
              Il nostro team di registi, direttori della fotografia e montatori porta decenni 
              di esperienza combinata da Hollywood, la televisione e le più importanti 
              agenzie creative del mondo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1619955888965-354ae3b9fd68?q=80&w=800"
                alt="Produzione Artevent"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1768796371894-fa162449bc80?q=80&w=800"
                alt="Artevent dietro le quinte"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Director Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1654723011674-13e99382511d?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Regista al lavoro"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-primary/30 text-6xl font-display leading-none mb-6">"</div>
            <p className="font-display text-xl md:text-2xl font-light leading-relaxed italic text-foreground/80 mb-8">
              Creiamo esperienze cinematografiche che arricchiscono i brand 
              e catturano il pubblico.
            </p>
            <div className="luxwine-line-h mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground/70">
              Marco Bellini
            </p>
            <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground mt-1">
              Direttore Creativo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
