import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type ConsentState = {
  analytics: boolean;
  version: number;
  updatedAt: string;
};

type ConsentContextValue = {
  consent: ConsentState | null;
  hasAnswered: boolean;
  allowAnalytics: boolean;
  isBannerOpen: boolean;
  acceptAnalytics: () => void;
  rejectAnalytics: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
};

const CONSENT_STORAGE_KEY = "site-consent";
const CONSENT_VERSION = 1;

const ConsentContext = createContext<ConsentContextValue | undefined>(undefined);

function buildConsent(analytics: boolean): ConsentState {
  return {
    analytics,
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  };
}

export const ConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const rawConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!rawConsent) {
        setIsBannerOpen(true);
        return;
      }

      const parsedConsent = JSON.parse(rawConsent) as Partial<ConsentState>;
      if (parsedConsent.version !== CONSENT_VERSION) {
        setIsBannerOpen(true);
        return;
      }

      setConsent({
        analytics: Boolean(parsedConsent.analytics),
        version: CONSENT_VERSION,
        updatedAt: parsedConsent.updatedAt ?? new Date().toISOString(),
      });
    } catch {
      setIsBannerOpen(true);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const persistConsent = (nextConsent: ConsentState) => {
    setConsent(nextConsent);
    setIsBannerOpen(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(nextConsent));
    }
  };

  const acceptAnalytics = () => {
    persistConsent(buildConsent(true));
  };

  const rejectAnalytics = () => {
    persistConsent(buildConsent(false));
  };

  const openPreferences = () => {
    if (isLoaded) {
      setIsBannerOpen(true);
    }
  };

  const closePreferences = () => {
    if (consent) {
      setIsBannerOpen(false);
    }
  };

  const value = useMemo(
    () => ({
      consent,
      hasAnswered: Boolean(consent),
      allowAnalytics: Boolean(consent?.analytics),
      isBannerOpen,
      acceptAnalytics,
      rejectAnalytics,
      openPreferences,
      closePreferences,
    }),
    [consent, isBannerOpen],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
};

export const useConsent = () => {
  const context = useContext(ConsentContext);

  if (!context) {
    throw new Error("useConsent must be used within ConsentProvider");
  }

  return context;
};
