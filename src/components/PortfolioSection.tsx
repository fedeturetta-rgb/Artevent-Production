import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, Play } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const projectsData = [
  { videoUrl: "public/videos/hero-bg.mov", thumbnailUrl: "src/assets/ARTEVENT22.jpg" },
  { videoUrl: "https://player.vimeo.com/video/987654321", thumbnailUrl: "/videos/project2-thumb.jpg" },
  { videoUrl: "https://player.vimeo.com/video/987654321", thumbnailUrl: "/videos/project2-thumb.jpg" },
  { videoUrl: "https://player.vimeo.com/video/555333111", thumbnailUrl: "/videos/project4-thumb.jpg" },
  { videoUrl: "https://player.vimeo.com/video/111222333", thumbnailUrl: "/videos/project5-thumb.jpg" },
  { videoUrl: "https://player.vimeo.com/video/222333444", thumbnailUrl: "/videos/project6-thumb.jpg" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = translations.portfolio;

  return (
    <section id="portfolio" className="section-padding bg-gradient-dark">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div initial={{ height: 0 }} animate={inView ? { height: 60 } : {}} transition={{ duration: 0.8 }} className="w-px bg-primary/30 mx-auto mb-12" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-24">
          <p className="font-body text-[11px] tracking-[0.5em] uppercase text-primary/80 mb-6">{t.label[lang]}</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light">
            {t.title1[lang]} <span className="italic text-primary">{t.titleHighlight[lang]}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="group cursor-pointer relative aspect-[4/3] bg-gradient-card border border-border overflow-hidden hover-card-lift"
            >
              {projectsData[i]?.thumbnailUrl && (
                <img src={projectsData[i].thumbnailUrl} alt={project.title[lang]} className="absolute inset-0 w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="font-body text-[10px] tracking-[0.4em] uppercase text-primary/70 mb-2">{project.category[lang]}</span>
                <h3 className="font-display text-xl font-light tracking-wide">{project.title[lang]}</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 border border-primary/40 rounded-full flex items-center justify-center bg-background/30 backdrop-blur-sm">
                  <Play className="w-5 h-5 text-primary ml-0.5" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button onClick={() => setSelected(null)} className="absolute top-8 right-8 text-foreground/40 hover:text-foreground transition-colors">
              <X className="w-6 h-6" strokeWidth={1} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-card border border-border flex items-center justify-center mb-8">
                {(() => {
                  const url = projectsData[selected]?.videoUrl || "";
                  if (url.includes("youtube.com") || url.includes("youtu.be") || url.includes("vimeo.com")) {
                    return <iframe width="100%" height="100%" src={url} title={t.items[selected].title[lang]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg" />;
                  }
                  return (
                    <video width="100%" height="100%" controls autoPlay className="rounded-lg bg-black">
                      <source src={url} type="video/mp4" />
                    </video>
                  );
                })()}
              </div>
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary/70 mb-3">{t.items[selected].category[lang]}</p>
              <h3 className="font-display text-3xl font-light mb-4 tracking-wide">{t.items[selected].title[lang]}</h3>
              <p className="text-muted-foreground font-body text-sm leading-[2]">{t.items[selected].description[lang]}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
