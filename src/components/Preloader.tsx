"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// EPC certificate scale colours, A (green) → G (red)
const EPC_COLORS = ["#00a550", "#50b848", "#b3d334", "#fff200", "#ffb300", "#ff6b00", "#e53935"];

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Only play once per browser session
    if (sessionStorage.getItem("fw-loaded")) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      sessionStorage.setItem("fw-loaded", "1");
      setShow(false);
    }, 1950);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#030804] flex flex-col items-center justify-center gap-7 px-6"
        >
          {/* Texture + glow */}
          <div className="absolute inset-0 energy-grid opacity-40 pointer-events-none" />
          <div
            className="absolute w-[440px] h-[440px] max-w-[90vw] rounded-full pointer-events-none"
            style={{ background: "rgba(0,230,118,0.07)", filter: "blur(120px)" }}
          />

          {/* Logo + wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src="/brand/logo-icon.svg"
              alt="Fairwood Solutions"
              width={72}
              height={72}
              className="w-[72px] h-[72px] rounded-2xl"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(0,230,118,0)",
                  "0 0 44px rgba(0,230,118,0.55)",
                  "0 0 0px rgba(0,230,118,0)",
                ],
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="font-head font-semibold text-[26px] tracking-tight text-[#e8f5e9]">
              Fairwood <span className="text-[#00e676]">Solutions</span>
            </p>
          </motion.div>

          {/* EPC rating scale — bars ripple A → G */}
          <div className="relative flex items-end gap-1.5 h-9">
            {EPC_COLORS.map((c, i) => (
              <motion.div
                key={i}
                className="w-5 rounded-sm"
                style={{ background: c }}
                initial={{ height: 8, opacity: 0.25 }}
                animate={{ height: [8, 12 + i * 3.5, 8], opacity: [0.25, 1, 0.25] }}
                transition={{ duration: 1.2, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>

          <p className="relative text-[11px] uppercase tracking-[0.3em] text-[#4a7a4d] font-head text-center">
            Energy Performance Certificates
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
