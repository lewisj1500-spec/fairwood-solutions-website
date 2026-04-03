"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[#030804]/85 backdrop-blur-2xl border-b border-[#00e676]/[0.08] py-3"
            : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-8 h-8 bg-[#00e676] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,230,118,0.5)]">
              <Zap size={16} className="text-[#030804]" fill="currentColor" />
            </div>
            <span className="font-head font-semibold text-[16px] text-[#e8f5e9]">
              Fairwood <span className="text-[#00e676]">Solutions</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7 ml-auto">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#81c784]/70 hover:text-[#e8f5e9] text-sm font-medium transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00e676] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#00e676] text-[#030804] text-sm font-head font-semibold rounded-full transition-all duration-300 hover:bg-[#69f0ae] hover:shadow-[0_8px_25px_rgba(0,230,118,0.35)] hover:-translate-y-px flex-shrink-0"
          >
            <Zap size={14} fill="currentColor" />
            Book EPC
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden ml-auto text-[#e8f5e9] p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#071009]/97 backdrop-blur-2xl border-b border-[#00e676]/[0.08] flex flex-col gap-1 px-6 pb-6 pt-4 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="text-[#81c784] py-3 text-base font-medium border-b border-[#00e676]/[0.06] last:border-0 hover:text-[#00e676] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-3 text-center bg-[#00e676] text-[#030804] py-3 rounded-full font-head font-semibold text-sm"
            >
              Book Your EPC
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
