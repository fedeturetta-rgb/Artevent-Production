import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations.about;

  const videoUrl = "https://player.vimeo.com/video/1171082957";
  const thumbnailUrl = "public/videos/hero-bg.mov";

  return (
    <section id="about" className="section-padding bg-gradient-dark">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div initial={{ height: 0 }} animate={inView ? { height: 60 } : {}} transition={{ duration: 0.8 }} className="w-px bg-primary/30 mx-auto mb-12" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
          <p className="font-body text-[11px] tracking-[0.5em] uppercase text-primary/80 mb-6">{t.label[lang]}</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            {t.title1[lang]}{" "}
            <span className="italic text-primary">{t.titleHighlight[lang]}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-foreground/70 font-body text-sm leading-[2] mb-8">{t.p1[lang]}</p>
            <p className="text-foreground/50 font-body text-sm leading-[2]">{t.p2[lang]}</p>
            <div className="luxwine-line-h mt-10" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="relative">
            <div onClick={() => setIsVideoOpen(true)} className="aspect-[4/3] bg-gradient-card border border-border overflow-hidden relative group cursor-pointer transition-all duration-700 hover:border-primary">
              <img src={thumbnailUrl} alt="Video Thumbnail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-700">
                <div className="text-center">
                  <div className="w-20 h-20 border border-primary/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-primary transition-colors duration-700">
                    <div className="w-0 h-0 border-l-[14px] border-l-primary/70 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent ml-1 group-hover:border-l-primary transition-colors duration-700" />
                  </div>
                  <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">{t.watchReel[lang]}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl bg-black border-border">
          <DialogClose className="absolute top-4 right-4 z-50" />
          <div className="w-full aspect-video">
            {videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") || videoUrl.includes("vimeo.com") ? (
              <iframe width="100%" height="100%" src={videoUrl} title="Artevent Studio Reel" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg" />
            ) : (
              <video width="100%" height="100%" controls autoPlay className="rounded-lg bg-black">
                <source src={videoUrl} type="video/mp4" />
              </video>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
