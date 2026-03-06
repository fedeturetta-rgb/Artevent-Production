import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi Siamo", href: "#about" },
  { label: "Servizi", href: "#services" },
  { label: "Lavori", href: "#portfolio" },
  { label: "Contatti", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground/70 hover:text-primary transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <a href="#home" className="absolute left-1/2 -translate-x-1/2 text-center">
          <span className="font-display text-xl md:text-2xl font-light tracking-[0.25em] uppercase text-foreground">
            Artevent
          </span>
          <p className="font-body text-[8px] tracking-[0.5em] uppercase text-muted-foreground mt-0.5">
            Studio
          </p>
        </a>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex font-body text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500"
        >
          Prenota una Call
        </a>
        <div className="md:hidden w-5" />
      </div>

      {/* Overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 top-20 bg-background/98 backdrop-blur-2xl z-40"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10 -mt-20">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="font-display text-3xl font-light tracking-[0.15em] uppercase text-foreground/80 hover:text-primary transition-colors duration-500"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
