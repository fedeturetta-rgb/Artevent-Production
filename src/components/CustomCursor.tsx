import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const pointerQuery = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

const interactiveSelector = [
  "a",
  "button",
  "summary",
  "label[for]",
  "[role='button']",
  "[data-cursor='interactive']",
  ".cursor-pointer",
  ".cursor-grab",
  ".cursor-grabbing",
].join(", ");

const textInputSelector = "input, textarea, select, [contenteditable='true']";

const cursorLabelCopy = {
  it: {
    open: "APRI",
    view: "VEDI",
    play: "RIPRODUCI",
    close: "CHIUDI",
    next: "AVANTI",
    back: "INDIETRO",
    drag: "TRASCINA",
    expand: "ESPANDI",
    collapse: "CHIUDI",
  },
  en: {
    open: "OPEN",
    view: "VIEW",
    play: "PLAY",
    close: "CLOSE",
    next: "NEXT",
    back: "BACK",
    drag: "DRAG",
    expand: "EXPAND",
    collapse: "COLLAPSE",
  },
} as const;

const translateCursorLabel = (label: string, language: "it" | "en") => {
  const normalizedLabel = label.trim().toLowerCase();

  return cursorLabelCopy[language][normalizedLabel as keyof (typeof cursorLabelCopy)["it"]] ?? label.toUpperCase();
};

const getCursorLabel = (target: Element | null, language: "it" | "en") => {
  if (!target) {
    return "";
  }

  const interactiveElement = target.closest(interactiveSelector);

  if (!interactiveElement) {
    return "";
  }

  const customLabel = interactiveElement.getAttribute("data-cursor-label")?.trim();

  if (customLabel) {
    return translateCursorLabel(customLabel, language);
  }

  if (interactiveElement.matches(".cursor-grab, .cursor-grabbing")) {
    return cursorLabelCopy[language].drag;
  }

  const ariaLabel = interactiveElement.getAttribute("aria-label")?.toLowerCase() ?? "";

  if (ariaLabel.includes("close") || ariaLabel.includes("chiudi")) {
    return cursorLabelCopy[language].close;
  }

  if (ariaLabel.includes("play") || ariaLabel.includes("riproduci")) {
    return cursorLabelCopy[language].play;
  }

  if (ariaLabel.includes("next") || ariaLabel.includes("successivo")) {
    return cursorLabelCopy[language].next;
  }

  if (ariaLabel.includes("previous") || ariaLabel.includes("prev") || ariaLabel.includes("precedente")) {
    return cursorLabelCopy[language].back;
  }

  if (interactiveElement.tagName === "A") {
    return cursorLabelCopy[language].view;
  }

  return cursorLabelCopy[language].open;
};

const CustomCursor = () => {
  const { language } = useLanguage();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const labelX = useSpring(cursorX, { stiffness: 420, damping: 34, mass: 0.45 });
  const labelY = useSpring(cursorY, { stiffness: 420, damping: 34, mass: 0.45 });

  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia(pointerQuery);

    const updateAvailability = () => {
      const nextEnabled = mediaQuery.matches;

      setIsEnabled(nextEnabled);

      if (!nextEnabled) {
        setIsVisible(false);
        setIsInteractive(false);
        setCursorLabel("");
        cursorX.set(-100);
        cursorY.set(-100);
      }
    };

    updateAvailability();

    mediaQuery.addEventListener("change", updateAvailability);

    return () => {
      mediaQuery.removeEventListener("change", updateAvailability);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    if (!isEnabled || typeof window === "undefined") {
      return undefined;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") {
        return;
      }

      const target = event.target instanceof Element ? event.target : null;
      const isTextInput = Boolean(target?.closest(textInputSelector));

      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

      if (isTextInput) {
        setIsVisible(false);
        setIsInteractive(false);
        setCursorLabel("");
        return;
      }

      const nextLabel = getCursorLabel(target, language);

      setIsVisible(true);
      setIsInteractive(Boolean(target?.closest(interactiveSelector)));
      setCursorLabel(nextLabel);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") {
        return;
      }
    };

    const handlePointerUp = () => {
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
      setCursorLabel("");
    };

    const handleWindowBlur = () => {
      setIsVisible(false);
      setCursorLabel("");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [cursorX, cursorY, isEnabled, language]);

  if (!isEnabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor-label"
      style={{ x: labelX, y: labelY }}
      animate={{
        opacity: isVisible && isInteractive && cursorLabel ? 1 : 0,
        scale: 1,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.4 }}
    >
      {cursorLabel}
    </motion.div>
  );
};

export default CustomCursor;