import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { getVideoEmbedUrl, isEmbeddableVideoUrl } from "@/lib/video";

const carouselPhotos = [
  {
    src: "/images/Acciaio/1.jpg",
  },
  {
    src: "/images/Ally/1.jpg",
  },
  {
    src: "/images/CaRugate/1.jpg",
  },
  {
    src: "/images/Castelmani/5.jpg",
  },
  {
    src: "/images/Dolomiti/1.jpg",
  },
  {
    src: "/images/Macchine/1.jpg",
  },
  {
    src: "/images/moda/1.jpg",
  },
  {
    src: "/images/Ormaneto/1.jpg",
  },
  {
    src: "/images/Parrucchiere/1.jpg",
  },
  {
    src: "/images/Saracino/1.jpg",
  },
  {
    src: "/images/Velario/3.jpg",
  },
];

const AboutCarousel = ({ language }: { language: "it" | "en" }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? carouselPhotos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === carouselPhotos.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrent((c) => (c === carouselPhotos.length - 1 ? 0 : c + 1));
    }, 3000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative aspect-[3/2] bg-card border border-border overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={carouselPhotos[current].src}
            alt={language === "it" ? `Foto ${current + 1}` : `Photo ${current + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:border-primary transition-colors duration-300"
      >
        <ChevronLeft className="w-4 h-4 text-foreground/70" strokeWidth={1} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:border-primary transition-colors duration-300"
      >
        <ChevronRight className="w-4 h-4 text-foreground/70" strokeWidth={1} />
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {carouselPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-5" : "bg-border hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoUrl = "https://drive.google.com/file/d/1txr3GK9RK6-8h_SVGQV1Llt5DIZPR5KA/view?usp=share_link";
  const thumbnailUrl = "/videos/SHOWREEL_homepage_16-9_comp.mp4";
  const copy = {
    sectionLabel: language === "it" ? "Chi è Artevent Production" : "Who Is Artevent Production",
    heading1Line1: language === "it" ? "Dove la Visione Incontra" : "Where Vision Meets",
    heading1Accent:
      language === "it" ? "l'Arte Cinematografica" : "Cinematic Art",
    paragraph1a:
      language === "it"
        ? "In Artevent Production, fondiamo arte cinematografica e storytelling strategico. Ogni fotogramma è costruito per elevare il tuo brand, coinvolgere il tuo pubblico e lasciare un'impressione duratura."
        : "At Artevent Production, we blend cinematic craft with strategic storytelling. Every frame is built to elevate your brand, engage your audience, and leave a lasting impression.",
    paragraph1b:
      language === "it"
        ? "Curiamo ogni singolo fotogramma con intenzione, unendo arte e storytelling strategico per elevare il tuo brand sopra il rumore."
        : "We shape every frame with intention, combining art and strategy to lift your brand above the noise.",
    watchReel: language === "it" ? "Guarda il Nostro Reel" : "Watch Our Reel",
    heading2Line1:
      language === "it" ? "L'Arte di Catturare" : "The Art of Capturing",
    heading2Accent:
      language === "it" ? "l'Istante Perfetto" : "the Perfect Moment",
    paragraph2a:
      language === "it"
        ? "La fotografia è il cuore pulsante della nostra visione creativa. Ogni scatto nasce dall'unione tra tecnica impeccabile e sensibilità artistica, trasformando momenti fugaci in immagini senza tempo."
        : "Photography is the heartbeat of our creative vision. Every shot is born from flawless technique and artistic sensitivity, turning fleeting moments into timeless imagery.",
    paragraph2b:
      language === "it"
        ? "Dalla composizione alla post-produzione, ogni fase è curata con la stessa attenzione al dettaglio che contraddistingue il nostro lavoro cinematografico, perché un'immagine straordinaria vale più di mille parole."
        : "From composition to post-production, every stage is handled with the same attention to detail that defines our cinematic work, because one outstanding image is worth more than a thousand words.",
    unsupportedVideo:
      language === "it"
        ? "Il tuo browser non supporta il tag video."
        : "Your browser does not support the video tag.",
  };

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
            {copy.sectionLabel}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-light leading-tight mb-8">
              {copy.heading2Line1}{" "}
              <span className="italic text-primary">{copy.heading2Accent}</span>
            </h3>
            <p className="text-foreground/70 font-body text-sm leading-[2] mb-8">
              {copy.paragraph2a}
            </p>
            <p className="text-foreground/50 font-body text-sm leading-[2]">
              {copy.paragraph2b}
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
            <AboutCarousel language={language} />
          </motion.div>
        </div>

        {/* Photography sub-section — mirrored layout (image left, text right) */}
        <div className="grid sm:grid-cols-2 gap-20 items-center mt-28">
          {/* Visual - left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative order-2 sm:order-1"
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
                preload="metadata"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-700">
                <div className="text-center">
                  <div className="w-20 h-20 border border-primary/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-primary transition-colors duration-700">
                    <div className="w-0 h-0 border-l-[14px] border-l-primary/70 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent ml-1 group-hover:border-l-primary transition-colors duration-700" />
                  </div>
                  <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                    {copy.watchReel}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text - right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-1 sm:order-2"
          >
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-light leading-tight mb-8">
              {copy.heading1Line1}{" "}
              <span className="italic text-primary">{copy.heading1Accent}</span>
            </h3>
            <p className="text-foreground/70 font-body text-sm leading-[2] mb-8">
              {copy.paragraph1a}
            </p>
            <p className="text-foreground/50 font-body text-sm leading-[2]">
              {copy.paragraph1b}
            </p>
            <div className="luxwine-line-h mt-10" />
          </motion.div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl bg-black border-border">
          <DialogClose className="absolute top-4 right-4 z-50" />
          <div className="w-full aspect-video">
            {isEmbeddableVideoUrl(videoUrl) ? (
              <iframe
                width="100%"
                height="100%"
                src={getVideoEmbedUrl(videoUrl)}
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
                {copy.unsupportedVideo}
              </video>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
