import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Artevent Studio ha trasformato la nostra conferenza annuale in un capolavoro cinematografico. La qualità ha superato ogni nostra aspettativa.",
    name: "Sarah Chen",
    title: "VP Marketing, TechVault Inc.",
  },
  {
    quote: "Il loro approccio allo storytelling ha elevato il nostro brand a un livello che ha impattato direttamente la nostra pipeline di vendite enterprise.",
    name: "Marcus Reid",
    title: "CEO, Meridian Group",
  },
  {
    quote: "Professionali, creativi e incredibilmente strategici. Artevent sa come muovere il pubblico attraverso il cinema.",
    name: "Elena Rodriguez",
    title: "CMO, Apex Global",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Le Voci dei Clienti
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">
            Scelti dai <span className="text-gradient-gold">Leader del Settore</span>
          </h2>
        </motion.div>

        <div className="relative">
          <Quote className="w-12 h-12 text-primary/20 mx-auto mb-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display text-xl md:text-2xl leading-relaxed italic text-foreground/90 mb-10">
                "{testimonials[current].quote}"
              </p>
              <div>
                <p className="font-body font-semibold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {testimonials[current].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button onClick={prev} className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
