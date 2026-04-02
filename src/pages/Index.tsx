import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

type LazyMountProps = {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: number;
};

const LazyMount = ({ children, rootMargin = "300px 0px", minHeight = 120 }: LazyMountProps) => {
  const [mounted, setMounted] = useState(false);
  const markerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mounted) {
      return;
    }

    const marker = markerRef.current;
    if (!marker) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(marker);

    return () => observer.disconnect();
  }, [mounted, rootMargin]);

  if (mounted) {
    return <>{children}</>;
  }

  return <div ref={markerRef} style={{ minHeight }} aria-hidden="true" />;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <LazyMount minHeight={500}>
        <Suspense fallback={null}>
          <AboutSection />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight={700}>
        <Suspense fallback={null}>
          <PortfolioSection />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight={240}>
        <Suspense fallback={null}>
          <PartnersSection />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight={220}>
        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight={320}>
        <Suspense fallback={null}>
          <TeamSection />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight={300}>
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight={180}>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </LazyMount>
    </div>
  );
};

export default Index;
