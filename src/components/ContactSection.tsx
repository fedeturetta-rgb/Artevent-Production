import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-dark">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Inizia un Progetto
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Creiamo Qualcosa di{" "}
            <span className="text-gradient-gold">Potente</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Il Tuo Nome"
              required
              className="w-full bg-secondary border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="text"
              placeholder="Azienda"
              className="w-full bg-secondary border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <input
            type="email"
            placeholder="Indirizzo Email"
            required
            className="w-full bg-secondary border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            placeholder="Raccontaci del tuo progetto..."
            rows={5}
            required
            className="w-full bg-secondary border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-12 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-gold-light transition-colors duration-300 flex items-center gap-3 justify-center"
          >
            {submitted ? "Messaggio Inviato ✓" : (
              <>
                Creiamo Qualcosa di Potente
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
