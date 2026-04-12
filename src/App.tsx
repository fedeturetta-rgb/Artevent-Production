import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ConsentProvider } from "./contexts/ConsentContext";
import ConsentBanner from "./components/ConsentBanner";
import CustomCursor from "./components/CustomCursor";
import PrivacyCookiePolicy from "./pages/PrivacyCookiePolicy";
import CorporateVerona from "./pages/CorporateVerona";
import CorporateVicenza from "./pages/CorporateVicenza";
import CorporateAsiago from "./pages/CorporateAsiago";
import CorporatePadova from "./pages/CorporatePadova";
import CorporateTreviso from "./pages/CorporateTreviso";
import CorporateVenezia from "./pages/CorporateVenezia";
import CorporateBelluno from "./pages/CorporateBelluno";
import CorporateRovigo from "./pages/CorporateRovigo";
import CorporateTrento from "./pages/CorporateTrento";
import CorporateBolzano from "./pages/CorporateBolzano";
import CorporateVenetoTrentino from "./pages/CorporateVenetoTrentino";

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
            <ConsentBanner />
          </BrowserRouter>
        </TooltipProvider>
      </ConsentProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;