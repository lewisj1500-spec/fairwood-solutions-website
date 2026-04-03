"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const PARTICLES = [
  { x:  5, y: 92, s: 3, del: 0.0,  dur: 11, green: true  },
  { x: 11, y: 85, s: 2, del: 2.3,  dur: 14, green: false },
  { x: 18, y: 96, s: 3, del: 1.1,  dur: 10, green: true  },
  { x: 24, y: 88, s: 2, del: 3.5,  dur: 13, green: true  },
  { x: 31, y: 94, s: 3, del: 0.7,  dur: 12, green: false },
  { x: 37, y: 82, s: 2, del: 4.2,  dur: 11, green: true  },
  { x: 44, y: 90, s: 3, del: 1.8,  dur: 14, green: true  },
  { x: 50, y: 97, s: 2, del: 0.3,  dur: 10, green: false },
  { x: 57, y: 86, s: 3, del: 3.0,  dur: 13, green: true  },
  { x: 63, y: 93, s: 2, del: 1.5,  dur: 12, green: true  },
  { x: 70, y: 88, s: 3, del: 2.8,  dur: 11, green: false },
  { x: 76, y: 95, s: 2, del: 0.9,  dur: 14, green: true  },
  { x: 83, y: 84, s: 3, del: 4.0,  dur: 10, green: true  },
  { x: 89, y: 91, s: 2, del: 2.1,  dur: 13, green: false },
  { x: 95, y: 87, s: 3, del: 1.3,  dur: 12, green: true  },
  { x: 14, y: 62, s: 2, del: 3.7,  dur: 12, green: true  },
  { x: 28, y: 55, s: 3, del: 1.0,  dur: 14, green: false },
  { x: 42, y: 68, s: 2, del: 2.5,  dur: 11, green: true  },
  { x: 56, y: 58, s: 3, del: 0.5,  dur: 13, green: true  },
  { x: 72, y: 65, s: 2, del: 3.2,  dur: 10, green: false },
  { x: 86, y: 52, s: 3, del: 1.7,  dur: 12, green: true  },
  { x:  9, y: 38, s: 2, del: 4.5,  dur: 13, green: true  },
  { x: 33, y: 30, s: 3, del: 2.0,  dur: 11, green: false },
  { x: 51, y: 42, s: 2, del: 0.8,  dur: 14, green: true  },
  { x: 67, y: 35, s: 3, del: 3.3,  dur: 10, green: true  },
  { x: 81, y: 28, s: 2, del: 1.6,  dur: 13, green: false },
  { x: 93, y: 40, s: 3, del: 2.9,  dur: 12, green: true  },
];

const EPC_RATINGS = [
  { label: "A", range: "92–100", color: "#00a550", width: "100%", score: 96 },
  { label: "B", range: "81–91", color: "#50b848", width: "88%", score: 86 },
  { label: "C", range: "69–80", color: "#b3d334", width: "76%", score: 74 },
  { label: "D", range: "55–68", color: "#fff200", width: "62%", score: 61, textDark: true },
  { label: "E", range: "39–54", color: "#ffb300", width: "50%", score: 47, textDark: true },
  { label: "F", range: "21–38", color: "#ff6b00", width: "36%", score: 30 },
  { label: "G", range: "1–20", color: "#e53935", width: "24%", score: 12 },
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

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -40, 20, 0], x: [0, 15, -10, 0], scale: [1, 1.06, 0.96, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-48 -right-24 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,230,118,0.18) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{ y: [0, 30, -25, 0], x: [0, -20, 10, 0], scale: [1, 0.94, 1.06, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear", delay: -8 }}
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,188,212,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{ y: [0, -20, 35, 0], x: [0, 25, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear", delay: -4 }}
          className="absolute top-[30%] left-[25%] w-[320px] h-[320px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,101,0,0.08) 0%, transparent 70%)",
            filter: "blur(70px)",
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
              background: p.green ? "#00e676" : "#00bcd4",
              opacity: 0,
              animation: `particle-float ${p.dur}s ${p.del}s ease-in-out infinite`,
              boxShadow: p.green
                ? `0 0 ${p.s * 4}px ${p.s}px rgba(0,230,118,0.45)`
                : `0 0 ${p.s * 5}px ${p.s * 2}px rgba(0,188,212,0.55)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e676]/25 bg-[#00e676]/06 text-[#00e676] text-[11px] font-head font-semibold uppercase tracking-[0.15em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse-dot" />
                Accredited Energy Assessors · Est. 2004
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-8 overflow-hidden">
              {["ASSESSED.", "CERTIFIED."].map((word, i) => (
                <div key={word} className="overflow-hidden">
                  <motion.span
                    className="block font-head font-bold leading-[0.9] tracking-[-0.04em] text-[clamp(56px,10vw,130px)] text-[#e8f5e9]"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.25 + i * 0.1 }}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
              <div className="overflow-hidden">
                <motion.span
                  className="block font-head font-bold leading-[0.9] tracking-[-0.04em] text-[clamp(56px,10vw,130px)]"
                  style={{
                    background: "linear-gradient(90deg, #00e676, #69f0ae)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.45 }}
                >
                  EPC.
                </motion.span>
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-[#81c784] text-[clamp(16px,1.6vw,19px)] leading-relaxed max-w-[500px] mb-10"
            >
              Government-accredited EPC assessors providing fast, accurate Energy
              Performance Certificates across Wales and the South West.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a href="#contact" className="btn btn-primary">
                Book Your EPC
                <svg className="btn-arrow" viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a href="#services" className="btn btn-ghost">
                View Services
              </a>
            </motion.div>

            {/* Stats row — Lando style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="flex flex-wrap items-center gap-px"
            >
              {[
                { num: "100+", label: "Reports Monthly" },
                { num: "24hr", label: "Turnaround" },
                { num: "98%", label: "Satisfaction" },
                { num: "20+", label: "Yrs Experience" },
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
          </div>

          {/* Right: EPC Rating Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, rgba(0,230,118,0.12) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "scale(1.2)",
                }}
              />

              {/* EPC Panel */}
              <div className="relative glass-card p-6 rounded-3xl border border-[#00e676]/12">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-[#4a7a4d] uppercase tracking-[0.2em] mb-1">Energy Performance</p>
                    <p className="font-head font-bold text-[#e8f5e9] text-lg">Certificate Rating</p>
                  </div>
                  <div className="flex flex-col items-center px-4 py-2.5 rounded-xl border border-[#00e676]/20 bg-[#00e676]/08">
                    <p className="text-[10px] text-[#4a7a4d] uppercase tracking-widest leading-none mb-1">Properties Assessed</p>
                    <p className="font-head font-bold text-[#e8f5e9] text-xl leading-none">10,000<span className="text-[#00e676]">+</span></p>
                  </div>
                  <div className="px-3 py-1.5 rounded-full border border-[#00e676]/20 bg-[#00e676]/05">
                    <span className="text-[10px] text-[#00e676] font-head font-semibold uppercase tracking-wider">Valid 10 Yrs</span>
                  </div>
                </div>

                {/* Rating bars */}
                <div className="flex flex-col gap-2.5">
                  {EPC_RATINGS.map((rating, i) => (
                    <div key={rating.label} className="flex items-center gap-3">
                      <span className="font-head font-bold text-sm w-4 text-[#81c784]">{rating.label}</span>
                      <div className="flex-1 h-8 bg-[#071009] rounded-md overflow-hidden relative">
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-md flex items-center justify-end pr-3"
                          style={{ backgroundColor: rating.color }}
                          initial={{ width: "0%" }}
                          animate={{ width: rating.width }}
                          transition={{
                            duration: 0.9,
                            delay: 1.2 + i * 0.12,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <span
                            className="text-[11px] font-head font-bold leading-none"
                            style={{ color: rating.textDark ? "#1a2a1a" : "white" }}
                          >
                            {rating.range}
                          </span>
                        </motion.div>
                      </div>
                      {/* Animated score dot */}
                      <motion.span
                        className="font-head text-xs font-semibold w-7 text-right"
                        style={{ color: rating.color }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 + i * 0.12 }}
                      >
                        {rating.score}
                      </motion.span>
                    </div>
                  ))}
                </div>

                {/* Current average indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, duration: 0.6 }}
                  className="mt-5 pt-5 border-t border-[#00e676]/08 flex items-center justify-between"
                >
                  <div>
                    <p className="text-[10px] text-[#4a7a4d] uppercase tracking-wider mb-1">Avg. UK Home</p>
                    <p className="text-[#e8f5e9] text-sm font-head font-semibold">Rated <span className="text-[#fff200]">D</span> — We improve that</p>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-full flex items-center justify-center font-head font-black text-xl"
                    style={{ background: "#00a550", color: "white", boxShadow: "0 0 20px rgba(0,165,80,0.5)" }}
                  >
                    A
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating data card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 2.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-6 bottom-16 glass-card px-4 py-3 rounded-2xl border border-[#ff6500]/15 shadow-2xl"
              >
                <p className="text-[9px] text-[#4a7a4d] uppercase tracking-wider mb-0.5">CO₂ Savings Advised</p>
                <p className="font-head font-bold text-[#ff9500] text-lg leading-none">4,200<span className="text-sm text-[#ff6500]">t</span></p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#00e676] to-transparent animate-[scroll-reveal_2s_ease_infinite]" />
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#4a7a4d]">Scroll</span>
      </motion.div>
    </section>
  );
}
