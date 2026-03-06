import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

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
    <section id="contact" className="section-padding bg-background">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-[11px] tracking-[0.5em] uppercase text-primary/80 mb-6">
            Contattaci
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light mb-6">
            Inizia il Tuo <span className="italic text-primary">Progetto</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto leading-[2]">
            Creiamo qualcosa di potente insieme. Che tu abbia un brief completo o solo un'idea, 
            ci piacerebbe sentirti. Il nostro team ti risponderà entro 24 ore.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="flex items-start gap-5">
              <Mail className="w-5 h-5 text-primary/60 mt-0.5" strokeWidth={1} />
              <div>
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-foreground/50 mb-2">Email</p>
                <p className="font-body text-sm text-foreground/80">hello@arteventstudio.com</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <Phone className="w-5 h-5 text-primary/60 mt-0.5" strokeWidth={1} />
              <div>
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-foreground/50 mb-2">Telefono</p>
                <p className="font-body text-sm text-foreground/80">+39 02 1234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <MapPin className="w-5 h-5 text-primary/60 mt-0.5" strokeWidth={1} />
              <div>
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-foreground/50 mb-2">Sede</p>
                <p className="font-body text-sm text-foreground/80">Milano, Italia</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Nome"
                required
                className="w-full bg-transparent border-b border-border px-0 py-4 font-body text-xs tracking-wider text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors duration-500"
              />
              <input
                type="text"
                placeholder="Azienda"
                className="w-full bg-transparent border-b border-border px-0 py-4 font-body text-xs tracking-wider text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors duration-500"
              />
            </div>
            <input
              type="email"
              placeholder="Indirizzo Email"
              required
              className="w-full bg-transparent border-b border-border px-0 py-4 font-body text-xs tracking-wider text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors duration-500"
            />
            <textarea
              placeholder="Dettagli del progetto"
              rows={4}
              required
              className="w-full bg-transparent border-b border-border px-0 py-4 font-body text-xs tracking-wider text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors duration-500 resize-none"
            />
            <div className="flex gap-6 pt-2">
              <button
                type="submit"
                className="px-10 py-4 bg-primary/90 text-primary-foreground font-body font-medium text-[11px] uppercase tracking-[0.3em] hover:bg-primary transition-all duration-500"
              >
                {submitted ? "Inviato ✓" : "Invia Messaggio"}
              </button>
              <a
                href="#portfolio"
                className="px-10 py-4 border border-foreground/20 text-foreground/70 font-body font-medium text-[11px] uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all duration-500"
              >
                Vedi Lavori
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
