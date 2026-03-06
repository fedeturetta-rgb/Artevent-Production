import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Artevent ha trasformato la nostra brand story in qualcosa di veramente cinematografico. La qualità del loro lavoro rivaleggia con quella delle migliori agenzie di New York o Los Angeles.",
    name: "Sarah Mitchell",
    title: "CMO, Nexus Technologies",
  },
  {
    quote: "Lavorare con Artevent è stato un punto di svolta. Non hanno semplicemente ripreso il nostro evento, hanno creato un'esperienza di cui i partecipanti parlano ancora mesi dopo.",
    name: "James Thornton",
    title: "VP Events, Horizon Group",
  },
  {
    quote: "La serie di interviste executive che hanno prodotto è stato il contenuto più efficace di sempre. Professionale, curato e profondamente strategico nel suo approccio narrativo.",
    name: "Elena Rodriguez",
    title: "Direttore Comunicazione, Velocity Inc.",
  },
  {
    quote: "Dalla pre-produzione alla consegna finale, ogni fase è stata gestita con un'attenzione incredibile ai dettagli. Artevent capisce cosa serve ai brand enterprise.",
    name: "Michael Chen",
    title: "Head of Marketing, Summit Capital",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-gradient-dark">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] tracking-[0.5em] uppercase text-primary/80 mb-6">
            Testimonianze
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light mb-20">
            Le Voci dei <span className="italic text-primary">Clienti</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="text-primary/30 text-5xl font-display leading-none mb-8">"</div>
              <p className="font-display text-lg md:text-xl lg:text-2xl font-light leading-relaxed italic text-foreground/80 mb-10 max-w-3xl">
                {testimonials[current].quote}
              </p>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground/70">
                {testimonials[current].name}
              </p>
              <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground mt-1">
                {testimonials[current].title}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="text-foreground/30 hover:text-primary transition-colors duration-300"
            aria-label="Precedente"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1} />
          </button>
          <span className="font-body text-[11px] tracking-[0.2em] text-muted-foreground">
            {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            className="text-foreground/30 hover:text-primary transition-colors duration-300"
            aria-label="Successivo"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
