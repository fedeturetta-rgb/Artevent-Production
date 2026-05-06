import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ConsentProvider } from "./contexts/ConsentContext";
import ConsentBanner from "./components/ConsentBanner";
import CustomCursor from "./components/CustomCursor";
import { Analytics } from "@vercel/analytics/react";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyCookiePolicy = lazy(() => import("./pages/PrivacyCookiePolicy"));
const CorporateVerona = lazy(() => import("./pages/CorporateVerona"));
const CorporateVicenza = lazy(() => import("./pages/CorporateVicenza"));
const CorporateAsiago = lazy(() => import("./pages/CorporateAsiago"));
const CorporatePadova = lazy(() => import("./pages/CorporatePadova"));
const CorporateTreviso = lazy(() => import("./pages/CorporateTreviso"));
const CorporateVenezia = lazy(() => import("./pages/CorporateVenezia"));
const CorporateBelluno = lazy(() => import("./pages/CorporateBelluno"));
const CorporateRovigo = lazy(() => import("./pages/CorporateRovigo"));
const CorporateTrento = lazy(() => import("./pages/CorporateTrento"));
const CorporateBolzano = lazy(() => import("./pages/CorporateBolzano"));
const CorporateVenetoTrentino = lazy(() => import("./pages/CorporateVenetoTrentino"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ConsentProvider>
        <TooltipProvider>
          <CustomCursor />
          <Toaster />
          <Sonner />
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/privacy-cookie" element={<PrivacyCookiePolicy />} />
                <Route path="/produzione-video-corporate-verona" element={<CorporateVerona />} />
                <Route path="/produzione-video-corporate-vicenza" element={<CorporateVicenza />} />
                <Route path="/produzione-video-corporate-asiago" element={<CorporateAsiago />} />
                <Route path="/produzione-video-corporate-padova" element={<CorporatePadova />} />
                <Route path="/produzione-video-corporate-treviso" element={<CorporateTreviso />} />
                <Route path="/produzione-video-corporate-venezia" element={<CorporateVenezia />} />
                <Route path="/produzione-video-corporate-belluno" element={<CorporateBelluno />} />
                <Route path="/produzione-video-corporate-rovigo" element={<CorporateRovigo />} />
                <Route path="/produzione-video-corporate-trento" element={<CorporateTrento />} />
                <Route path="/produzione-video-corporate-bolzano" element={<CorporateBolzano />} />
                <Route path="/produzione-video-corporate-veneto-trentino" element={<CorporateVenetoTrentino />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <ConsentBanner />
          </BrowserRouter>
          <Analytics />
        </TooltipProvider>
      </ConsentProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;