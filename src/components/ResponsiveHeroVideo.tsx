import { useEffect, useState, type RefObject } from "react";

type ResponsiveHeroVideoProps = {
  className?: string;
  posterClassName?: string;
  desktopSrc: string;
  mobileSrc?: string;
  posterSrc?: string;
  delayMs?: number;
  videoRef?: RefObject<HTMLVideoElement | null>;
};

const MOBILE_BREAKPOINT = 768;

const ResponsiveHeroVideo = ({
  className = "",
  posterClassName = "",
  desktopSrc,
  mobileSrc,
  posterSrc = "/images/hero-bg.jpg",
  delayMs = 250,
  videoRef,
}: ResponsiveHeroVideoProps) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const resolvedVideoSrc = isMobile && mobileSrc ? mobileSrc : desktopSrc;

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    updateViewport();

    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    if (isMobile === null) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShouldLoadVideo(true);
    }, delayMs);

    return () => window.clearTimeout(timeoutId);
  }, [delayMs, isMobile]);

  return (
    <>
      <img
        src={posterSrc}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover ${posterClassName}`.trim()}
      />

      {shouldLoadVideo && resolvedVideoSrc ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover ${className}`.trim()}
        >
          <source src={resolvedVideoSrc} type="video/mp4" />
        </video>
      ) : null}
    </>
  );
};

export default ResponsiveHeroVideo;