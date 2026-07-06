"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TypingEffect } from "@/components/ui/typing-effect";

const PARTICLES = [
  { x:  5, y: 92, s: 3, del: 0.0,  dur: 11, green: true  },
  { x: 24, y: 88, s: 2, del: 3.5,  dur: 13, green: true  },
  { x: 44, y: 90, s: 3, del: 1.8,  dur: 14, green: false },
  { x: 63, y: 93, s: 2, del: 1.5,  dur: 12, green: true  },
  { x: 83, y: 84, s: 3, del: 4.0,  dur: 10, green: false },
  { x: 14, y: 62, s: 2, del: 3.7,  dur: 12, green: true  },
  { x: 42, y: 68, s: 3, del: 2.5,  dur: 11, green: false },
  { x: 72, y: 65, s: 2, del: 0.5,  dur: 13, green: true  },
  { x: 33, y: 30, s: 3, del: 2.0,  dur: 11, green: true  },
  { x: 67, y: 35, s: 2, del: 3.3,  dur: 10, green: false },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 639px)").matches);
  }, []);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#030804]">

      {/* Energy grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,230,118,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.03) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 20%, black 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 20%, black 80%)",
        }}
      />

      {/* Animated background orbs — desktop only, CSS-driven so they run on the compositor */}
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${isMobile ? "hidden" : ""}`}>
        <div
          className="orb absolute -top-48 -right-24 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,230,118,0.18) 0%, transparent 70%)",
            filter: "blur(80px)",
            animationDuration: "22s",
          }}
        />
        <div
          className="orb absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,188,212,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
            animationDuration: "28s",
            animationDelay: "-10s",
          }}
        />
        <div
          className="orb absolute top-[30%] left-[25%] w-[320px] h-[320px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,101,0,0.08) 0%, transparent 70%)",
            filter: "blur(70px)",
            animationDuration: "18s",
            animationDelay: "-5s",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {!isMobile && PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.s,
              height: p.s,
              background: p.green ? "rgba(0,230,118,0.7)" : "rgba(0,188,212,0.7)",
              opacity: 0,
              animation: `particle-float ${p.dur}s ${p.del}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={isMobile ? {} : { y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-8 sm:pb-20 w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e676]/25 bg-[#00e676]/06 text-[#00e676] text-[11px] font-head font-semibold uppercase tracking-[0.15em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse-dot" />
            Accredited EPC Assessors in Wales
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 overflow-hidden">
          {["Expert", "Property"].map((word, i) => (
            <motion.span
              key={word}
              className="block font-head font-bold leading-[0.95] tracking-[-0.03em] text-[clamp(30px,7vw,118px)] text-[#e8f5e9] mb-[0.05em]"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 -30% 0)" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 + i * 0.12 }}
            >
              {word}
            </motion.span>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className=""
          >
            <TypingEffect
              texts={["Domestic EPCs", "Commercial EPCs", "SAP Calculations", "MEES Compliance", "Air Tightness Testing"]}
              className="font-head font-bold tracking-[-0.03em] text-[clamp(30px,7vw,118px)] leading-[0.95]"
            />
          </motion.div>

          <span className="block overflow-hidden">
            <motion.span
              className="block font-head font-bold tracking-[-0.03em] text-[clamp(30px,7vw,118px)] leading-[0.95] text-[#4a7a4d]"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.72 }}
            >
              In Wales.
            </motion.span>
          </span>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="text-[#81c784] text-[clamp(16px,1.6vw,19px)] leading-relaxed max-w-[520px] mb-10"
        >
          Accredited EPC assessors based in Carmarthen, delivering fast, reliable Energy Performance Certificates
          across South and West Wales.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap gap-4 mb-14"
        >
          <a href="#contact" className="btn btn-primary">
            Get a Free Quote
            <svg className="btn-arrow" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a href="#services" className="btn btn-ghost">
            Our Services
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="flex flex-wrap items-center gap-px"
        >
          {[
            { num: "100+", label: "Reports Monthly" },
            { num: "24hrs*", label: "Typical Turnaround" },
            { num: "98%", label: "Satisfaction" },
            { num: "19+", label: "Yrs Experience" },
          ].map((s, i) => (
            <div
              key={i}
              className={`flex flex-col gap-1 px-6 py-3 ${i !== 0 ? "border-l border-[#00e676]/10" : ""}`}
            >
              <span className="font-head text-2xl font-bold text-[#00e676] leading-none tracking-tight">{s.num}</span>
              <span className="text-[10px] text-[#4a7a4d] uppercase tracking-[0.15em]">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Turnaround qualifier */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-[10px] text-[#4a7a4d]/80 leading-relaxed max-w-[440px] mt-4"
        >
          *Based on the vast majority of assessments. Occasionally certificate issue can take
          longer — for example, where additional information about the property is required.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#00e676] to-transparent animate-[scroll-reveal_2s_ease_infinite]" />
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#4a7a4d]">Scroll</span>
      </motion.div>
    </section>
  );
}
