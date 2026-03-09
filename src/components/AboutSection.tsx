import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, Aperture, Focus, Sun } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

const photoFeatures = [
  {
    icon: Camera,
    title: "Fotografia d'Autore",
    description: "Scatti che raccontano storie uniche, con un'estetica cinematografica e una cura maniacale per ogni dettaglio.",
  },
  {
    icon: Aperture,
    title: "Ritratti & Branding",
    description: "Ritratti professionali e immagini di brand che comunicano personalità, valori e autenticità.",
  },
  {
    icon: Focus,
    title: "Eventi & Reportage",
    description: "Copertura fotografica discreta e raffinata per eventi aziendali, conferenze e occasioni speciali.",
  },
  {
    icon: Sun,
    title: "Still Life & Prodotto",
    description: "Fotografia di prodotto con illuminazione studiata per esaltare texture, materiali e design.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoUrl = "https://player.vimeo.com/video/1171592073";
  const thumbnailUrl = "/videos/SHOWREEL_homepage_16.9.mp4";

  return (
    <section id="about" className="section-padding bg-gradient-dark">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Top decorative line */}
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
            Chi è Artevent Studio
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            Dove la Visione Incontra{" "}
            <span className="italic text-primary">l'Arte Cinematografica</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-foreground/70 font-body text-sm leading-[2] mb-8">
              In Artevent Studio, fondiamo arte cinematografica e storytelling strategico. 
              Ogni fotogramma è costruito per elevare il tuo brand, coinvolgere il tuo pubblico 
              e lasciare un'impressione duratura.
            </p>
            <p className="text-foreground/50 font-body text-sm leading-[2]">
              Con un team di registi, direttori della fotografia e montatori pluripremiati,
              curiamo ogni singolo fotogramma con intenzione — unendo arte e storytelling
              strategico per elevare il tuo brand sopra il rumore.
            </p>
            <div className="luxwine-line-h mt-10" />
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div
              onClick={() => setIsVideoOpen(true)}
              className="aspect-[16/9] bg-gradient-card border border-border overflow-hidden relative group cursor-pointer transition-all duration-700 hover:border-primary"
            >
              <video
                src={thumbnailUrl}
                className="w-full h-full object-contain"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-700">
                <div className="text-center">
                  <div className="w-20 h-20 border border-primary/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-primary transition-colors duration-700">
                    <div className="w-0 h-0 border-l-[14px] border-l-primary/70 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent ml-1 group-hover:border-l-primary transition-colors duration-700" />
                  </div>
                  <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                    Guarda il Nostro Reel
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Photography sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-28"
        >
          <div className="luxwine-line mx-auto mb-12" />

          <div className="text-center mb-16">
            <p className="font-body text-[11px] tracking-[0.5em] uppercase text-primary/80 mb-6">
              Fotografia
            </p>
            <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
              L'Arte di Catturare{" "}
              <span className="italic text-primary">l'Istante Perfetto</span>
            </h3>
            <p className="text-foreground/50 font-body text-sm leading-[2] max-w-2xl mx-auto mt-8">
              La fotografia è il cuore pulsante della nostra visione creativa. 
              Ogni scatto nasce dall'unione tra tecnica impeccabile e sensibilità artistica, 
              trasformando momenti fugaci in immagini senza tempo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {photoFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                className="group bg-gradient-card border border-border p-8 lg:p-10 hover-card-lift"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors duration-700">
                    <feature.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-700" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl lg:text-2xl font-light mb-3 group-hover:text-primary transition-colors duration-700">
                      {feature.title}
                    </h4>
                    <p className="text-foreground/50 font-body text-sm leading-[1.8]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl bg-black border-border">
          <DialogClose className="absolute top-4 right-4 z-50" />
          <div className="w-full aspect-video">
            {videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") || videoUrl.includes("vimeo.com") ? (
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title="Artevent Studio Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            ) : (
              <video
                width="100%"
                height="100%"
                controls
                autoPlay
                className="rounded-lg bg-black"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
