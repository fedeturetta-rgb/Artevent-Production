import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/hero-bg.mov" type="video/quicktime" />
        </video>
        <div className="cinema-overlay absolute inset-0" />
      </div>

      {/* Side slide indicators */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-1">
        {["01", "02", "03"].map((num, i) => (
          <div key={num} className="flex items-center gap-3">
            {i === 0 && <div className="w-px h-5 bg-primary" />}
            <span
              className={`font-body text-[11px] tracking-[0.3em] transition-all duration-500 ${
                i === 0 ? "text-foreground" : "text-foreground/20"
              }`}
            >
              {num}
            </span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-body text-[11px] md:text-xs tracking-[0.4em] uppercase text-primary/80 mb-10"
        >
          Tradizione, Innovazione e Visione
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] mb-14 tracking-[0.06em] uppercase"
        >
          Raccontiamo Storie{" "}
          <br />
          Che Muovono i Brand
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <a
            href="#about"
            className="inline-block px-12 py-4 border border-foreground/20 text-foreground/80 font-body font-medium text-[11px] uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all duration-500"
          >
            Continua il Viaggio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
