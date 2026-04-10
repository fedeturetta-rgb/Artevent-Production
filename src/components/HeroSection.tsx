import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { getVideoEmbedUrl, isEmbeddableVideoUrl } from "@/lib/video";

// Video 16:9 usato su desktop (già presente)
const desktopVideoPath = "/videos/Homepage_16:9_comp.mp4";

// Video 9:16 usato su mobile. Inserisci il percorso del tuo file in public/videos/
// Esempio: "/videos/SHOWREEL_homepage_9.16.mp4"
// Lascia stringa vuota per usare anche su mobile il video desktop 16:9
const mobileVideoPath = "/videos/Homepage_9:16_comp.mp4";

const HeroSection = () => {
  const { language } = useLanguage();
  const loadHeroVideo = true;
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(true);
  const videoUrl = "https://drive.google.com/file/d/1txr3GK9RK6-8h_SVGQV1Llt5DIZPR5KA/view?usp=share_link";

  const toggleHeroVideoPlayback = async () => {
    const videos = [desktopVideoRef.current, mobileVideoRef.current].filter(
      (video): video is HTMLVideoElement => video !== null,
    );

    if (isHeroVideoPlaying) {
      videos.forEach((video) => video.pause());
      setIsHeroVideoPlaying(false);
      return;
    }

    await Promise.all(
      videos.map(async (video) => {
        try {
          await video.play();
        } catch {
          // Ignore playback rejections from inactive/hidden video elements.
        }
      }),
    );

    setIsHeroVideoPlaying(true);
  };

  const copy = {
    eyebrow:
      language === "it"
        ? "Produzione Foto/Video Corporate"
        : "Corporate Photo/Video Production",
    titleLine1: language === "it" ? "Raccontiamo Storie" : "We Tell Stories",
    titleLine2: language === "it" ? "Che Muovono i Brand" : "That Move Brands",
    watchReel: language === "it" ? "Guarda il Nostro Reel" : "Watch Our Reel",
    pauseCursorLabel: language === "it" ? "pausa" : "pause",
    playCursorLabel: language === "it" ? "riproduci" : "play",
    pauseHeroVideo: language === "it" ? "Metti in pausa il video" : "Pause background video",
    playHeroVideo: language === "it" ? "Riproduci il video" : "Play background video",
    unsupportedVideo:
      language === "it"
        ? "Il tuo browser non supporta il tag video."
        : "Your browser does not support the video tag.",
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        {/* Video 16:9 — desktop; se mobileVideoPath è vuoto, visibile anche su mobile */}
        {loadHeroVideo && (
          <video
            ref={desktopVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`w-full h-full object-cover ${
              mobileVideoPath ? "hidden md:block" : ""
            }`}
          >
            <source src={desktopVideoPath} type="video/mp4" />
          </video>
        )}

        {/* Video 9:16 — solo mobile */}
        {loadHeroVideo && mobileVideoPath && (
          <video
            ref={mobileVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="block md:hidden w-full h-full object-cover"
          >
            <source src={mobileVideoPath} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--deep-black))_0%,hsl(var(--deep-black)/0.5)_14%,hsl(var(--deep-black)/0.08)_34%,hsl(var(--deep-black)/0.01)_58%,hsl(var(--deep-black)/0.46)_76%,hsl(var(--deep-black)/0.72)_90%,hsl(var(--deep-black))_100%)]" />
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Vertical line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 60 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-px bg-primary/40 mx-auto mb-10"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-body text-xs md:text-sm tracking-[0.5em] uppercase gold-text-soft mb-8"
        >
          {copy.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="w-full text-center font-display text-[clamp(1.9rem,8vw,3rem)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] uppercase mb-10 tracking-wide"
        >
          <span className="flex w-full justify-center whitespace-nowrap text-center">{copy.titleLine1}</span>
          <span className="flex w-full justify-center whitespace-nowrap text-center">{copy.titleLine2}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-14"
        >
          <a
            href="#portfolio" //per far apparire il tasto togli la scritta "hidden" dopo className
            className="hidden px-10 py-4 border border-foreground/20 text-foreground/80 font-body font-medium text-[11px] uppercase tracking-[0.3em] hover:bg-primary transition-all duration-500" 
          >
            Scopri la mission
          </a>
          <a
            href="#mission" //per far apparire il tasto togli la scritta "hidden" dopo className
            className="hidden px-10 py-4 border border-foreground/20 text-foreground/80 font-body font-medium text-[11px] uppercase tracking-[0.3em] hover:bg-primary transition-all duration-500"
          >
            Scopri i Lavori
          </a>
          <a
            href="#contact" //per far apparire il tasto togli la scritta "hidden" dopo className
            className="hidden px-10 py-4 border border-foreground/20 text-foreground/80 font-body font-medium text-[11px] uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all duration-500"
          >
            scopri i servizi
          </a>
        </motion.div>
      </div>

      {/* Bottom reel trigger */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button
          type="button"
          onClick={() => setIsVideoOpen(true)}
          className="group flex flex-col items-center"
        >
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 transition-colors duration-700 group-hover:border-primary">
            <div className="ml-1 h-0 w-0 border-b-[9px] border-l-[14px] border-t-[9px] border-b-transparent border-l-primary/70 border-t-transparent transition-colors duration-700 group-hover:border-l-primary" />
          </div>
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            {copy.watchReel}
          </p>
        </button>
      </motion.div>

      {loadHeroVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="absolute bottom-6 right-6 z-20 md:bottom-8 md:right-8"
        >
          <button
            type="button"
            onClick={toggleHeroVideoPlayback}
            aria-label={isHeroVideoPlaying ? copy.pauseHeroVideo : copy.playHeroVideo}
            data-cursor-label={isHeroVideoPlaying ? copy.pauseCursorLabel : copy.playCursorLabel}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/35 bg-background/25 text-primary/85 backdrop-blur-sm transition-all duration-500 hover:border-primary hover:bg-background/35 hover:text-primary"
          >
            {isHeroVideoPlaying ? (
              <Pause className="h-4 w-4" strokeWidth={1.8} />
            ) : (
              <Play className="ml-0.5 h-4 w-4" fill="currentColor" strokeWidth={1.8} />
            )}
          </button>
        </motion.div>
      )}

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl border-border bg-black">
          <DialogClose className="absolute right-4 top-4 z-50" />
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

export default HeroSection;
