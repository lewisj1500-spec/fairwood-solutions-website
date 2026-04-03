"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Homeowner, Carmarthen",
    stars: 5,
    tag: "Domestic EPC",
    tagColor: "#00e676",
    quote:
      "The assessor arrived on time, completed the survey in under an hour, and I had my EPC certificate in my inbox by 4pm the same day. Incredible service — and the advice on improving our rating was genuinely useful.",
  },
  {
    initials: "MD",
    name: "Mark Davies",
    role: "Landlord Portfolio, Llanelli",
    stars: 5,
    tag: "MEES Compliance",
    tagColor: "#00bcd4",
    quote:
      "I have 14 rental properties and Fairwood Solutions handled all of them efficiently. They identified which properties were at risk under MEES regulations and gave me a clear, costed plan to bring them all up to E rating. Invaluable.",
  },
  {
    initials: "EP",
    name: "Emma Price",
    role: "Estate Agent, Pembrokeshire",
    stars: 5,
    tag: "Fast Turnaround",
    tagColor: "#69f0ae",
    quote:
      "As an estate agent, I need EPCs fast and reliably. Fairwood consistently delivers within 24 hours — often same day. My clients love the detailed certificates and the team's professional approach. My first call every time.",
  },
  {
    initials: "RT",
    name: "Rhodri Thomas",
    role: "Property Developer, Swansea",
    stars: 5,
    tag: "New Build SAP",
    tagColor: "#ff9500",
    quote:
      "We use Fairwood for all our SAP calculations and new build EPCs. Their technical knowledge is excellent and they understand the planning and building regulations requirements perfectly. Turnaround always meets our project timelines.",
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
    const t = setInterval(next, 5500);
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
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-[#00e676]/10 bg-[#0a1a0c] p-8 md:p-12 min-h-[280px]">
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

                <div className="flex items-center gap-3">
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
