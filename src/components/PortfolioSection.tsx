// @ts-nocheck
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./ui/carousel";
import { useLanguage } from "../contexts/LanguageContext";
import { getVideoEmbedUrl, isEmbeddableVideoUrl } from "../lib/video";
import { cn } from "../lib/utils";

type MediaItem =
  | {
      type: "image";
      src: string;
      alt?: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
    };

type Project = {
  videoUrl: string;
  thumbnailUrl: string;
  gallery?: string[];
  media?: MediaItem[];
};

type SelectedProjectState = {
  projectIndex: number;
  mediaIndex: number;
};

const projects: Project[] = [
  {
    videoUrl: "", //PARRUCCHIERE
    thumbnailUrl: "/videos/1_comp_original.mp4",
    media: [
      {
        type: "video",
        src: "https://drive.google.com/file/d/1T4l5_xxfhaF2RuGplF5Jk3qaNkx9LzC6/view?usp=sharing",
        poster: "/videos/1_comp_original.mp4",
      },
      { type: "image", src: "/images/Parrucchiere/1.jpg", alt: "" },
      { type: "image", src: "/images/Parrucchiere/2.jpg", alt: "" },
      { type: "image", src: "/images/Parrucchiere/3.jpg", alt: "" },
      { type: "image", src: "/images/Parrucchiere/6.jpg", alt: "" },
      { type: "image", src: "/images/Parrucchiere/4.jpg", alt: "" },
      { type: "image", src: "/images/Parrucchiere/5.jpg", alt: "" },
      { type: "image", src: "/images/Parrucchiere/7.jpg", alt: "" },
      { type: "image", src: "/images/Parrucchiere/8.jpg", alt: "" },
      { type: "image", src: "/images/Parrucchiere/9.jpg", alt: "" },
      { type: "image", src: "/images/Parrucchiere/10.jpg", alt: "" },
    ],
  },
  {
    videoUrl: "", //ORMANETO
    thumbnailUrl: "/videos/10_comp_original.mp4",
    media: [
      {
        type: "video",
        src: "https://drive.google.com/file/d/1G6g3gW0Pooj3EWPSs6cdGjeBdguUPf3L/view?usp=sharing",
        poster: "/videos/10_comp_original.mp4",
      },
      { type: "image", src: "/images/Ormaneto/1.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/2.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/3.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/4.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/5.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/6.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/7.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/8.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/9.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/10.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/11.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/12.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/13.jpg", alt: "" },
      { type: "image", src: "/images/Ormaneto/14.jpg", alt: "" },
    ],
  },
  {
    videoUrl: "", //CASTELMANI
    thumbnailUrl: "/videos/2_comp_original.mp4",
    media: [
      {
        type: "video",
        src: "https://drive.google.com/file/d/1OeeHNeU1gwGlGViQMcSpNwWywnE34TGF/view?usp=sharing",
        poster: "/videos/2_comp_original.mp4",
      },
      { type: "image", src: "/images/Castelmani/1.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/2.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/3.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/6.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/4.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/5.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/7.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/8.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/9.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/10.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/11.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/12.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/13.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/14.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/15.jpg", alt: "" },
      { type: "image", src: "/images/Castelmani/16.jpg", alt: "" },
    ],
  },
  {
    videoUrl: "", //LIDL
    thumbnailUrl: "/images/LIDL/lidl.jpg",
    media: [
      {
        type: "video",
        src: "https://drive.google.com/file/d/1BDzI9FG54VJiB63BOys2Qy6dLg90RXcR/view?usp=sharing",
        poster: "/videos/6_comp_original.mp4",
      },
      {
        type: "video",
        src: "https://drive.google.com/file/d/1nYpn3L4zZpyhDJWO7AEXR0j8WuTo2N6q/view?usp=sharing",
        poster: "",
      },
    ],
  },
  {
    videoUrl: "", //FORNI
    thumbnailUrl: "/images/Acciaio/5.jpg",
    media: [
      { type: "image", src: "/images/Acciaio/1.jpg", alt: "" },
      { type: "image", src: "/images/Acciaio/2.jpg", alt: "" },
      { type: "image", src: "/images/Acciaio/3.jpg", alt: "" },
      { type: "image", src: "/images/Acciaio/4.jpg", alt: "" },
      { type: "image", src: "/images/Acciaio/5.jpg", alt: "" },
      { type: "image", src: "/images/Acciaio/6.jpg", alt: "" },
    ],
  },
  {
    videoUrl: "", //RINALDI
    thumbnailUrl: "",
    media: [
      { type: "image", src: "/images/Rinaldi/1.jpg", alt: "" },
      { type: "image", src: "/images/Rinaldi/2.jpg", alt: "" },
      { type: "image", src: "/images/Rinaldi/3.jpg", alt: "" },
      { type: "image", src: "/images/Rinaldi/4.jpg", alt: "" },
      { type: "image", src: "/images/Rinaldi/5.jpg", alt: "" },
      { type: "image", src: "/images/Rinaldi/6.jpg", alt: "" },
      { type: "image", src: "/images/Rinaldi/7.jpg", alt: "" },
      { type: "image", src: "/images/Rinaldi/7.jpg", alt: "" },
    ],
  },
  {
    videoUrl: "", //MODA
    thumbnailUrl: "",
    media: [
      { type: "image", src: "/images/moda/1.jpg", alt: "" },
      { type: "image", src: "/images/moda/2.jpg", alt: "" },
      { type: "image", src: "/images/moda/3.jpg", alt: "" },
      { type: "image", src: "/images/moda/4.jpg", alt: "" },
      { type: "image", src: "/images/moda/5.jpg", alt: "" },
      { type: "image", src: "/images/moda/6.jpg", alt: "" },
      { type: "image", src: "/images/moda/7.jpg", alt: "" },
      { type: "image", src: "/images/moda/8.jpg", alt: "" },
      { type: "image", src: "/images/moda/9.jpg", alt: "" },
      { type: "image", src: "/images/moda/10.jpg", alt: "" },
    ],
  },
  {
    videoUrl: "", //MACCHINE
    thumbnailUrl: "/images/Macchine/14.jpg",
    media: [
      {
        type: "video",
        src: "https://drive.google.com/file/d/1Y81YLTmMhbw_Xyylde7SLH3qlzAvkRvO/view?usp=sharing",
        poster: "/videos/14_comp.mp4",
      },
      {
        type: "video",
        src: "https://drive.google.com/file/d/1L7Vvqlin2-hsEwHhxWZXSQhj1MPqzhf6/view?usp=sharing",
        poster: "/videos/11_comp_original.mp4",
      },
      { type: "image", src: "/images/Macchine/14.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/13.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/12.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/11.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/10.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/9.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/8.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/7.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/6.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/5.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/4.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/3.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/2.jpg", alt: "" },
      { type: "image", src: "/images/Macchine/1.jpg", alt: "" },

    ],
  },

  // RIQUADRI NASCOSTI
  {
    videoUrl: "", //SARACINO
    thumbnailUrl: "/videos/13_comp_original.mp4",
    media: [
      {
        type: "video",
        src: "https://drive.google.com/file/d/1XHi_FwnCJhQFpLaliPWhXU1OexbxECdS/view?usp=sharing",
        poster: "/videos/13_comp_original.mp4",
      },
      { type: "image", src: "/images/Saracino/1.jpg", alt: "" },
      { type: "image", src: "/images/Saracino/2.jpg", alt: "" },
      { type: "image", src: "/images/Saracino/3.jpg", alt: "" },
      { type: "image", src: "/images/Saracino/6.jpg", alt: "" },
      { type: "image", src: "/images/Saracino/4.jpg", alt: "" },
      { type: "image", src: "/images/Saracino/5.jpg", alt: "" },
      { type: "image", src: "/images/Saracino/7.jpg", alt: "" },
      { type: "image", src: "/images/Saracino/8.jpg", alt: "" },
      { type: "image", src: "/images/Saracino/9.jpg", alt: "" },
      { type: "image", src: "/images/Saracino/10.jpg", alt: "" },
      { type: "image", src: "/images/Saracino/11.jpg", alt: "" },
      { type: "image", src: "/images/Saracino/12.jpg", alt: "" },
    ],
  },
  {
    videoUrl: "", //RIGHETTO
    thumbnailUrl: "/images/Righetto/Righetto1.jpg",
    media: [
      {
        type: "video",
        src: "https://drive.google.com/file/d/13LoXFtySVKui4RwrxGAx2xp7JKJc5P0L/view?usp=sharing",
        poster: "/videos/12_comp_original.mp4",
      },
    ],
  },
  {
    videoUrl: "", //OCSA
    thumbnailUrl: "/images/Ocsa/Ocsa1.jpg",
    media: [
      {
        type: "video",
        src: "https://drive.google.com/file/d/1rDOBecbkm1_vBHT7SGn8cwsS4rvmFZCS/view?usp=sharing",
        poster: "/videos/9_comp_original.mp4",
      },
    ],
  },
  {
    videoUrl: "", //FRANCHIN
    thumbnailUrl: "/images/Franchin/Franchin1.jpg",
    media: [
      {
        type: "video",
        src: "https://drive.google.com/file/d/15X-vQL06C_5QsN415ECNac_Pptf80Lvx/view?usp=sharing",
        poster: "/videos/4_comp_original.mp4",
      },
    ],
  },
  {
    videoUrl: "", //ALLY
    thumbnailUrl: "/images/Ally/2.jpg",
    media: [
      { type: "image", src: "/images/Ally/1.jpg", alt: "" },
      { type: "image", src: "/images/Ally/2.jpg", alt: "" },
      { type: "image", src: "/images/Ally/3.jpg", alt: "" },
      { type: "image", src: "/images/Ally/6.jpg", alt: "" },
      { type: "image", src: "/images/Ally/4.jpg", alt: "" },
      { type: "image", src: "/images/Ally/5.jpg", alt: "" },
      { type: "image", src: "/images/Ally/7.jpg", alt: "" },
      { type: "image", src: "/images/Ally/8.jpg", alt: "" },
      { type: "image", src: "/images/Ally/9.jpg", alt: "" },
      { type: "image", src: "/images/Ally/10.jpg", alt: "" },
      { type: "image", src: "/images/Ally/11.jpg", alt: "" },
      { type: "image", src: "/images/Ally/12.jpg", alt: "" },
      { type: "image", src: "/images/Ally/13.jpg", alt: "" },
      { type: "image", src: "/images/Ally/14.jpg", alt: "" },
      { type: "image", src: "/images/Ally/15.jpg", alt: "" },
      { type: "image", src: "/images/Ally/16.jpg", alt: "" },
      
    ],
  },
  {
    videoUrl: "", //VELARIO
    thumbnailUrl: "/images/Velario/3.jpg",
    media: [
      { type: "image", src: "/images/Velario/1.jpg", alt: "" },
      { type: "image", src: "/images/Velario/2.jpg", alt: "" },
      { type: "image", src: "/images/Velario/3.jpg", alt: "" },
      { type: "image", src: "/images/Velario/4.jpg", alt: "" },
      { type: "image", src: "/images/Velario/5.jpg", alt: "" },
    ],
  },
  {
    videoUrl: "", //DOLOMITI
    thumbnailUrl: "/images/Dolomiti/Dolomiti1.jpg",
    media: [
      {
        type: "video",
        src: "https://drive.google.com/file/d/16ME0EaJ8sI7aqlxoYC2M1nyNMGYef6k5/view?usp=sharing",
        poster: "/videos/8_comp_original.mp4",
      },
      { type: "image", src: "/images/Dolomiti/1.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/2.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/3.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/4.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/5.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/6.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/7.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/8.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/9.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/10.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/11.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/12.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/13.jpg", alt: "" },
      { type: "image", src: "/images/Dolomiti/14.jpg", alt: "" },
    ],
  },
];

const DIRECT_VIDEO_FILE_PATTERN = /\.(mp4|webm|ogg|mov)$/i;

function isDirectVideoFile(src: string): boolean {
  return DIRECT_VIDEO_FILE_PATTERN.test(src);
}

function isValidMediaItem(media: MediaItem): boolean {
  if (media.type === "image") {
    return Boolean(media.src);
  }

  return Boolean(media.src);
}

function getProjectMedia(project: Project): MediaItem[] {
  if (project.media?.length) {
    return project.media.filter(isValidMediaItem);
  }

  const media: MediaItem[] = [];//

  if (project.videoUrl) {
    media.push({ type: "video", src: project.videoUrl, poster: project.thumbnailUrl });
  } else if (project.thumbnailUrl && isDirectVideoFile(project.thumbnailUrl) && !project.gallery?.length) {
    media.push({ type: "video", src: project.thumbnailUrl, poster: project.thumbnailUrl });
  }

  if (project.gallery?.length) {
    media.push(...project.gallery.map((src) => ({ type: "image" as const, src })));
  }

  return media;
}

function projectHasVideo(project: Project): boolean {
  return getProjectMedia(project).some((media) => media.type === "video");
}

function getPreviewMedia(project: Project): MediaItem | null {
  const projectMedia = getProjectMedia(project);

  if (project.thumbnailUrl) {
    if (isDirectVideoFile(project.thumbnailUrl)) {
      return { type: "video", src: project.thumbnailUrl, poster: project.thumbnailUrl };
    }

    return { type: "image", src: project.thumbnailUrl };
  }

  if (projectMedia.length) {
    return projectMedia[0];
  }

  if (project.videoUrl) {
    return { type: "video", src: project.videoUrl };
  }

  return null;
}

function getMediaThumbnail(media: MediaItem, fallback: string): string {
  if (media.type === "image") {
    return media.src;
  }

  return media.poster ?? fallback;
}

function isVideoThumbnail(src: string): boolean {
  return isDirectVideoFile(src);
}

function getImageThumbnailFallback(project: Project, media?: MediaItem): string {
  if (media?.type === "video" && media.poster && !isDirectVideoFile(media.poster)) {
    return media.poster;
  }

  if (project.thumbnailUrl && !isDirectVideoFile(project.thumbnailUrl)) {
    return project.thumbnailUrl;
  }

  const mediaImage = project.media?.find((item) => item.type === "image");
  if (mediaImage && mediaImage.type === "image") {
    return mediaImage.src;
  }

  if (project.gallery?.length) {
    return project.gallery[0];
  }

  return "/images/hero-bg.jpg";
}

function getMediaThumbnailImage(project: Project, media: MediaItem, fallback: string): string | null {
  const thumbnailSrc = getMediaThumbnail(media, fallback);

  if (thumbnailSrc && !isVideoThumbnail(thumbnailSrc)) {
    return thumbnailSrc;
  }

  const fallbackImage = getImageThumbnailFallback(project, media);
  return fallbackImage && !isVideoThumbnail(fallbackImage) ? fallbackImage : null;
}

const PortfolioSection = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const thumbnailStripRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<SelectedProjectState | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [collapsedGridHeight, setCollapsedGridHeight] = useState<number | null>(null);
  const [playingMediaKey, setPlayingMediaKey] = useState<string | null>(null);
  const selectedProject =
    selected !== null && selected.projectIndex >= 0 && selected.projectIndex < projects.length
      ? projects[selected.projectIndex]
      : null;
  const selectedMedia = selectedProject ? getProjectMedia(selectedProject) : [];
  const getProjectLabel = (projectIndex: number) =>
    language === "it" ? `Progetto ${projectIndex + 1}` : `Project ${projectIndex + 1}`;
  const getSelectedMediaKey = (projectIndex: number, mediaIndex: number) => `${projectIndex}-${mediaIndex}`;

  const openProject = (projectIndex: number, mediaIndex = 0) => {
    setSelected({ projectIndex, mediaIndex });
  };

  useEffect(() => {
    if (selected === null) {
      setActiveSlide(0);
      return;
    }

    const safeMediaIndex = Math.min(Math.max(selected.mediaIndex, 0), Math.max(selectedMedia.length - 1, 0));
    setActiveSlide(safeMediaIndex);
    carouselApi?.scrollTo(safeMediaIndex, true);
  }, [selected, selectedMedia.length, carouselApi]);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateActiveSlide = () => {
      setActiveSlide(carouselApi.selectedScrollSnap());
    };

    updateActiveSlide();
    carouselApi.on("select", updateActiveSlide);
    carouselApi.on("reInit", updateActiveSlide);

    return () => {
      carouselApi.off("select", updateActiveSlide);
      carouselApi.off("reInit", updateActiveSlide);
    };
  }, [carouselApi]);

  useEffect(() => {
    const strip = thumbnailStripRef.current;
    if (!strip) {
      return;
    }

    const activeThumbnail = strip.querySelector<HTMLElement>(`[data-thumbnail-index="${activeSlide}"]`);
    activeThumbnail?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [activeSlide, selected]);

  useEffect(() => {
    setPlayingMediaKey(null);
  }, [selected?.projectIndex, activeSlide]);

  useEffect(() => {
    if (!selectedProject || selectedMedia.length <= 1) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        carouselApi?.scrollPrev();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        carouselApi?.scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, selectedMedia.length, carouselApi]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) {
      return;
    }

    const updateCollapsedGridHeight = () => {
      const firstCard = grid.firstElementChild as HTMLElement | null;
      if (!firstCard) {
        setCollapsedGridHeight(null);
        return;
      }

      const computedStyle = window.getComputedStyle(grid);
      const rowGap = Number.parseFloat(computedStyle.rowGap || "0");
      const cardHeight = firstCard.getBoundingClientRect().height;

      setCollapsedGridHeight(cardHeight * 2.25 + rowGap * 2);
    };

    updateCollapsedGridHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateCollapsedGridHeight();
    });

    resizeObserver.observe(grid);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const copy = {
    sectionLabel: language === "it" ? "Lavori Selezionati" : "Selected Work",
    headingMain: language === "it" ? "Il Nostro" : "Our",
    headingAccent: language === "it" ? "Portfolio" : "Portfolio",
    dragHint: language === "it" ? "Trascina il carosello o usa le frecce" : "Drag the carousel or use the arrows",
    quickOpen: language === "it" ? "Apri direttamente foto o video" : "Open a specific photo or video",
    expand: language === "it" ? "ESPANDI" : "EXPAND",
    collapse: language === "it" ? "RIDUCI" : "COLLAPSE",
  };

  const desktopTailCount = projects.length % 3;
  const desktopTailStartIndex = desktopTailCount === 0 ? projects.length : projects.length - desktopTailCount;

  const renderProjectCard = (
    project: Project,
    projectIndex: number,
    index: number,
    options?: {
      extraClassName?: string;
      keySuffix?: string;
    },
  ) => {
    const previewMedia = getPreviewMedia(project);
    const projectMedia = getProjectMedia(project);
    const isLastOddMobileCard = projects.length % 2 === 1 && index === projects.length - 1;
    const isDesktopTailCard = desktopTailCount > 0 && index >= desktopTailStartIndex;

    return (
      <motion.div
        key={`portfolio-item-${projectIndex}${options?.keySuffix ? `-${options.keySuffix}` : ""}`}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        onClick={() => openProject(projectIndex, 0)}
        data-cursor-label="view"
        className={cn(
          "group relative w-full cursor-pointer aspect-[3/2] overflow-hidden border border-border bg-gradient-card hover-card-lift",
          isLastOddMobileCard && "col-span-2 mx-auto w-[calc((100%-0.75rem)/2)] sm:col-span-1 sm:mx-0 sm:w-auto",
          isDesktopTailCard && "sm:hidden",
          options?.extraClassName,
        )}
      >
        {previewMedia ? (() => {
          const staticThumbnail = getMediaThumbnailImage(project, previewMedia, project.thumbnailUrl);

          return (
            <img
              src={staticThumbnail}
              alt={previewMedia.type === "image" ? previewMedia.alt ?? getProjectLabel(projectIndex) : getProjectLabel(projectIndex)}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
              loading="lazy"
              decoding="async"
            />
          );
        })() : null}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_64%,hsl(var(--deep-black)/0.1)_82%,hsl(var(--deep-black)/0.3)_100%)]" />

        <div className="absolute right-2 top-2 sm:right-4 sm:top-4 rounded-full border border-primary/40 bg-background/30 px-2 py-1 sm:px-3 text-[8px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.3em] uppercase text-primary/80 backdrop-blur-sm">
          {projectMedia.length} media
        </div>

        {projectMedia.length > 0 && (
          <div className="hidden sm:block absolute left-2 right-2 bottom-1 z-10 sm:left-4 sm:right-4 sm:bottom-4">
            <p className="mb-2 text-[8px] sm:text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.3em] text-foreground/60 opacity-90 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
              {copy.quickOpen}
            </p>
            <div className="flex gap-1.5 sm:gap-2 overflow-x-auto opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
              {projectMedia.map((media, mediaIndex) => {
                const thumbnailSrc = getMediaThumbnail(media, project.thumbnailUrl);

                return (
                  <button
                    key={`portfolio-preview-${projectIndex}-${mediaIndex}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      openProject(projectIndex, mediaIndex);
                    }}
                    data-cursor-label="open"
                    className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-border/80 bg-background/70 backdrop-blur-sm transition-colors hover:border-primary"
                    aria-label={`${language === "it" ? "Apri media" : "Open media"} ${mediaIndex + 1} ${language === "it" ? "per" : "for"} ${getProjectLabel(projectIndex)}`}
                  >
                    {thumbnailSrc ? (
                      isVideoThumbnail(thumbnailSrc) ? (
                        <video
                          src={thumbnailSrc}
                          className="h-full w-full object-cover"
                          muted
                          playsInline
                          loop
                          autoPlay
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={
                            isVideoThumbnail(thumbnailSrc)
                              ? getImageThumbnailFallback(project, media)
                              : thumbnailSrc
                          }
                          alt={`${getProjectLabel(projectIndex)} preview ${mediaIndex + 1}`}
                          className="h-full w-full object-cover"
                          draggable={false}
                          loading="lazy"
                          decoding="async"
                        />
                      )
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-background/70">
                        <Play className="h-4 w-4 text-primary" strokeWidth={1.5} />
                      </div>
                    )}
                    {media.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Play className="h-3.5 w-3.5 text-white" fill="currentColor" strokeWidth={1.5} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </motion.div>
    );
  };

  return (
    <section id="portfolio" className="relative overflow-hidden bg-gradient-dark px-6 pb-12 pt-16 sm:pb-14 sm:pt-20 md:px-12 lg:px-20 lg:pt-20 xl:px-32">
      <div ref={ref} className="max-w-6xl mx-auto">
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
          className="text-center mb-24"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase gold-text-soft mb-6">
            {copy.sectionLabel}
          </p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light">
            {copy.headingMain} <span className="italic gold-text-strong">{copy.headingAccent}</span>
          </h2>
        </motion.div>

        <div
          className="relative"
          style={
            !isExpanded && collapsedGridHeight
              ? { maxHeight: `${collapsedGridHeight}px`, overflow: "hidden" }
              : undefined
          }
        >
          <div ref={gridRef} className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {projects.map((project, index) => renderProjectCard(project, index, index))}
            {desktopTailCount > 0 && (
              <div className="hidden sm:col-span-3 sm:flex sm:justify-center sm:gap-4">
                {projects.slice(desktopTailStartIndex).map((project, tailIndex) => {
                  const projectIndex = desktopTailStartIndex + tailIndex;

                  return renderProjectCard(project, projectIndex, projectIndex, {
                    extraClassName: "sm:block sm:w-[calc((100%-2rem)/3)]",
                    keySuffix: "desktop-tail",
                  });
                })}
              </div>
            )}
          </div>

          {!isExpanded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-background/75 to-background" />
          )}
        </div>

        <div className="mt-12 flex justify-center sm:mt-14">
          <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            data-cursor-label={isExpanded ? "collapse" : "expand"}
            className="min-w-[160px] border border-border bg-background px-6 py-3 font-body text-[10px] tracking-[0.35em] uppercase text-foreground/80 transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            {isExpanded ? copy.collapse : copy.expand}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              data-cursor-label="close"
              className="absolute top-6 right-6 z-10 text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Close portfolio media"
            >
              <X className="w-6 h-6" strokeWidth={1} />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="w-full max-w-6xl max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative flex max-h-full flex-col overflow-hidden rounded-[28px] border border-border bg-card/80 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.35)] sm:p-6">
                <div className="relative min-h-0 flex-1">
                  <Carousel
                    setApi={setCarouselApi}
                    opts={{ loop: selectedMedia.length > 1 }}
                    className="h-full cursor-grab select-none active:cursor-grabbing"
                  >
                    <CarouselContent className="-ml-0">
                      {selectedMedia.map((media, index) => (
                        <CarouselItem key={`selected-project-media-${selected.projectIndex}-${index}`} className="pl-0">
                          <div className="aspect-[16/10] max-h-[58vh] overflow-hidden rounded-[22px] border border-border bg-background/70 flex items-center justify-center sm:max-h-[72vh]">
                            {media.type === "image" ? (
                              <img
                                src={media.src}
                                alt={media.alt ?? `${getProjectLabel(selected.projectIndex)} ${index + 1}`}
                                className="w-full h-full object-contain"
                                draggable={false}
                                loading="lazy"
                                decoding="async"
                              />
                            ) : (
                              (() => {
                                const mediaKey = getSelectedMediaKey(selected.projectIndex, index);
                                const thumbnailSrc = getMediaThumbnail(media, selectedProject.thumbnailUrl);

                                if (playingMediaKey === mediaKey) {
                                  return isEmbeddableVideoUrl(media.src) ? (
                                    <iframe
                                      src={getVideoEmbedUrl(media.src)}
                                      title={`${getProjectLabel(selected.projectIndex)} ${index + 1}`}
                                      className="h-full w-full"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    />
                                  ) : (
                                    <video
                                      className="h-full w-full bg-black"
                                      controls
                                      autoPlay
                                      playsInline
                                      poster={media.poster}
                                      preload="metadata"
                                    >
                                      <source src={media.src} type="video/mp4" />
                                    </video>
                                  );
                                }

                                return (
                                  <div className="relative h-full w-full">
                                    {thumbnailSrc ? (
                                      isVideoThumbnail(thumbnailSrc) ? (
                                        <video
                                          src={thumbnailSrc}
                                          className="pointer-events-none h-full w-full object-contain"
                                          muted
                                          playsInline
                                          loop
                                          autoPlay
                                          preload="metadata"
                                        />
                                      ) : (
                                        <img
                                          src={thumbnailSrc}
                                          alt={`${getProjectLabel(selected.projectIndex)} ${index + 1}`}
                                          className="pointer-events-none h-full w-full object-contain"
                                          draggable={false}
                                          loading="lazy"
                                          decoding="async"
                                        />
                                      )
                                    ) : (
                                      <video
                                        className="pointer-events-none h-full w-full bg-black object-contain"
                                        muted
                                        playsInline
                                        loop
                                        autoPlay
                                        poster={media.poster}
                                        preload="metadata"
                                      >
                                        <source src={media.src} type="video/mp4" />
                                      </video>
                                    )}

                                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/15">
                                      <button
                                        type="button"
                                        onClick={() => setPlayingMediaKey(mediaKey)}
                                        data-cursor-label="play"
                                        className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-background/35 backdrop-blur-sm transition-colors duration-300 hover:border-primary"
                                        aria-label={`Play media ${index + 1}`}
                                      >
                                        <Play className="h-7 w-7 text-primary ml-1" fill="currentColor" strokeWidth={1.5} />
                                      </button>
                                    </div>
                                  </div>
                                );
                              })()
                            )}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>

                  {selectedMedia.length > 1 && (
                    <>
                      <button
                        onClick={() => carouselApi?.scrollPrev()}
                        data-cursor-label="back"
                        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground/80 backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
                        aria-label="Previous media"
                      >
                        <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
                      </button>
                      <button
                        onClick={() => carouselApi?.scrollNext()}
                        data-cursor-label="next"
                        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground/80 backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
                        aria-label="Next media"
                      >
                        <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
                      </button>
                    </>
                  )}
                </div>

                <div className="mt-4 min-w-0 sm:mt-6 sm:flex sm:justify-end">
                  <div className="min-w-0 sm:text-right">
                    <p className="font-body text-[10px] tracking-[0.35em] uppercase text-foreground/50 mb-3">
                      {copy.dragHint}
                    </p>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-card/90 to-transparent" />
                      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-card/90 to-transparent" />
                      <div
                        ref={thumbnailStripRef}
                        className="flex w-full max-w-full items-center gap-2 overflow-x-auto px-1 pb-2"
                      >
                        {selectedMedia.map((_, index) => (
                          <button
                            key={`selected-project-thumb-${selected.projectIndex}-${index}`}
                            onClick={() => carouselApi?.scrollTo(index)}
                            data-thumbnail-index={index}
                            data-cursor-label="open"
                            className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 sm:h-14 sm:w-14 ${
                              index === activeSlide
                                ? "border-primary shadow-[0_0_0_1px_rgba(212,175,55,0.45)]"
                                : "border-border hover:border-primary/50"
                            }`}
                            aria-label={`Go to media ${index + 1}`}
                          >
                            {(() => {
                              const media = selectedMedia[index];
                              const thumbnailSrc = getMediaThumbnail(media, selectedProject.thumbnailUrl);

                              return thumbnailSrc ? (
                                isVideoThumbnail(thumbnailSrc) ? (
                                  <video
                                    src={thumbnailSrc}
                                    className="h-full w-full object-cover"
                                    muted
                                    playsInline
                                    loop
                                    autoPlay
                                    preload="metadata"
                                  />
                                ) : (
                                  <img
                                    src={thumbnailSrc}
                                    alt={`${getProjectLabel(selected.projectIndex)} thumbnail ${index + 1}`}
                                    className="h-full w-full object-cover"
                                    draggable={false}
                                    loading="lazy"
                                    decoding="async"
                                  />
                                )
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-background/70">
                                  <Play className="h-4 w-4 text-primary" strokeWidth={1.5} />
                                </div>
                              );
                            })()}
                            {selectedMedia[index].type === "video" && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                                <Play className="h-4 w-4 text-white" fill="currentColor" strokeWidth={1.5} />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-background/72 to-background" />
    </section>
  );
};

export default PortfolioSection;
