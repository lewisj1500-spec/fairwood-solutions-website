"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    initials: "N",
    name: "Natalie",
    role: "Google Review",
    stars: 5,
    tag: "Google Review",
    tagColor: "#00e676",
    quote:
      "I'm very pleased with the service I received from Fairwood Solutions. Lloyd has been helpful, easy to deal with and provided the survey report very promptly.",
  },
  {
    initials: "J",
    name: "Jack",
    role: "Google Review",
    stars: 5,
    tag: "Google Review",
    tagColor: "#00bcd4",
    quote:
      "Great price, Lloyd was extremely helpful and professional!",
  },
  {
    initials: "B",
    name: "Bev",
    role: "Verified Review",
    stars: 5,
    tag: "Verified Review",
    tagColor: "#69f0ae",
    quote:
      "Very efficient. Kept in touch throughout process. Very detailed survey report provided within 2 days of visit.",
  },
  {
    initials: "L",
    name: "Louise",
    role: "Verified Review",
    stars: 5,
    tag: "Verified Review",
    tagColor: "#ff9500",
    quote:
      "Fast moving and very efficient, received report day after the survey was completed. Easy to deal with.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => { if (!document.hidden) next(); }, 5500);
    return () => clearInterval(t);
  }, [isPaused, next, current]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="bg-[#030804] py-24 md:py-32 border-t border-[#00e676]/[0.06]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="text-[#00e676]">Clients Say</span>
          </h2>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card — fixed height so surrounding sections never shift */}
          <div className="relative overflow-hidden rounded-3xl border border-[#00e676]/10 bg-[#0a1a0c] h-[340px]">
            {/* Background glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-[0.04]"
              style={{ background: "#00e676", filter: "blur(60px)" }}
            />
            <Quote size={44} className="absolute top-8 right-8 text-[#00e676]/08" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 p-8 md:p-12 flex flex-col"
              >
                {/* Tag */}
                <div className="mb-5">
                  <span
                    className="text-[10px] font-head font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                    style={{ color: t.tagColor, background: t.tagColor + "12", border: `1px solid ${t.tagColor}25` }}
                  >
                    {t.tag}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-[#00e676] text-lg">★</span>
                  ))}
                </div>

                <p className="text-[#e8f5e9] text-lg md:text-xl leading-relaxed mb-8 italic font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-head font-bold text-sm flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #00e676, #00bcd4)", color: "#030804" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-head font-semibold text-[#e8f5e9] text-sm">{t.name}</p>
                    <p className="text-xs text-[#4a7a4d]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#00e676]" : "w-1.5 bg-[#00e676]/20"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-[#00e676]/12 bg-[#071009] flex items-center justify-center text-[#81c784] hover:text-[#00e676] hover:border-[#00e676]/30 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-[#00e676]/12 bg-[#071009] flex items-center justify-center text-[#81c784] hover:text-[#00e676] hover:border-[#00e676]/30 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
