import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <AboutSection />
        <PortfolioSection />
        <PartnersSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
