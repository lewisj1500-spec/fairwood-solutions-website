"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { Zap, TrendingUp, AlertCircle, CheckCircle, Info } from "lucide-react";

const RATINGS = [
  {
    grade: "A",
    range: "92–100",
    color: "#00a550",
    bgColor: "rgba(0, 165, 80, 0.12)",
    label: "Most Efficient",
    barWidth: "95%",
    description: "Excellent energy efficiency. Very low running costs. Modern insulation, heating and renewables. Lowest carbon footprint.",
    typical: "New builds, Passivhaus, recently retrofitted homes",
    bills: "~£600/yr",
    co2: "< 1t/yr",
    adviceTitle: "Top of the scale — nothing above this",
    adviceBody: "An A is as good as it gets — running costs and carbon are about as low as a home can go. We'll assess, verify and lodge the certificate that proves it.",
  },
  {
    grade: "B",
    range: "81–91",
    color: "#50b848",
    bgColor: "rgba(80, 184, 72, 0.10)",
    label: "Very Good",
    barWidth: "84%",
    description: "High efficiency with good insulation and modern heating. Small improvements could push to A rating.",
    typical: "Recent builds, well-insulated older homes",
    bills: "~£850/yr",
    co2: "~1.5t/yr",
    adviceTitle: "Excellent — the A band is within reach",
    adviceBody: "A strong result already. A few targeted upgrades — solar panels, a heat pump, or topping up insulation — could be enough to tip you into the top band.",
  },
  {
    grade: "C",
    range: "69–80",
    color: "#b3d334",
    bgColor: "rgba(179, 211, 52, 0.10)",
    label: "Good",
    barWidth: "73%",
    description: "Above average efficiency. Reasonable insulation and heating. Some cost-effective improvements available.",
    typical: "Post-2000 builds, upgraded older properties",
    bills: "~£1,200/yr",
    co2: "~2.5t/yr",
    adviceTitle: "Good — a solid, sellable rating",
    adviceBody: "Comfortably above the UK average and attractive to buyers and tenants. A handful of cost-effective measures could lift you to a B.",
  },
  {
    grade: "D",
    range: "55–68",
    color: "#fff200",
    bgColor: "rgba(255, 242, 0, 0.08)",
    label: "Average",
    barWidth: "60%",
    description: "UK average rating. Moderate efficiency. Likely to benefit from insulation, heating upgrades, or glazing improvements.",
    typical: "Most UK homes — 1970s–1990s construction",
    bills: "~£1,800/yr",
    co2: "~3.8t/yr",
    textDark: true,
    adviceTitle: "The UK average — clear room to improve",
    adviceBody: "Most British homes sit here. Better insulation, heating controls or glazing typically move a D up a band or two, cutting your bills noticeably.",
  },
  {
    grade: "E",
    range: "39–54",
    color: "#ffb300",
    bgColor: "rgba(255, 179, 0, 0.08)",
    label: "Below Average",
    barWidth: "46%",
    description: "Below average efficiency. Higher running costs. Landlords must reach minimum E rating to legally let the property.",
    typical: "Pre-1970s homes, solid wall properties",
    bills: "~£2,500/yr",
    co2: "~5.2t/yr",
    adviceTitle: "The legal minimum for letting — don't cut it fine",
    adviceBody: "You can still let at an E, but you're one slip from non-compliance. We'll pinpoint the cheapest measures to build a safe margin above the threshold.",
  },
  {
    grade: "F",
    range: "21–38",
    color: "#ff6b00",
    bgColor: "rgba(255, 107, 0, 0.08)",
    label: "Poor",
    barWidth: "32%",
    description: "Poor efficiency. Very high energy bills. Letting this property is illegal without an exemption. Significant improvement recommended.",
    typical: "Pre-war construction, uninsulated solid walls",
    bills: "~£3,400/yr",
    co2: "~7t/yr",
    adviceTitle: "Below the legal standard — action needed",
    adviceBody: "An F can't be let without a registered exemption, and the bills are steep. We'll identify the improvements that bring you back into compliance fastest.",
  },
  {
    grade: "G",
    range: "1–20",
    color: "#e53935",
    bgColor: "rgba(229, 57, 53, 0.08)",
    label: "Least Efficient",
    barWidth: "18%",
    description: "Very poor efficiency. Extremely high bills. Illegal to rent. Major improvement works needed immediately.",
    typical: "Derelict or substantially unimproved properties",
    bills: "£4,500+/yr",
    co2: "~10t+/yr",
    adviceTitle: "The lowest band — urgent improvement",
    adviceBody: "Bills are very high and letting is unlawful without an exemption. A G usually needs meaningful upgrade work — we'll map out a clear, prioritised plan to lift it.",
  },
];

export default function EPCRating() {
  const [selected, setSelected] = useState<number | null>(2);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });
  const reduceMotion = useReducedMotion();

  const selectedRating = selected !== null ? RATINGS[selected] : null;

  // Auto-cycle A → G while the section is on screen and the user isn't interacting.
  useEffect(() => {
    if (isPaused || !isInView || reduceMotion) return;
    const id = setInterval(() => {
      if (!document.hidden) {
        setSelected((prev) => (prev === null ? 0 : (prev + 1) % RATINGS.length));
      }
    }, 4000);
    return () => clearInterval(id);
  }, [isPaused, isInView, reduceMotion]);

  useEffect(() => () => { if (resumeTimer.current) clearTimeout(resumeTimer.current); }, []);

  // Clicking a band jumps to it and pauses the cycle briefly so it can be read,
  // then auto-resumes. Hovering does NOT pause — the cycle keeps running.
  const selectBand = (i: number) => {
    setSelected(i);
    setIsPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsPaused(false), 9000);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#030804] py-16 md:py-32 overflow-hidden relative border-t border-[#00e676]/[0.06]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
          style={{ background: "#00e676", filter: "blur(150px)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="section-tag">EPC Explained</span>
          <h2 className="section-title">
            Understanding Your{" "}
            <span className="text-[#00e676]">Energy Rating</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            Watch the bands cycle — or click any one to explore what it means for your property, your bills, and the planet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 lg:gap-8 items-start">

          {/* Left: Rating chart */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-4 md:p-6 rounded-3xl border border-[#00e676]/10 lg:sticky lg:top-24"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-[10px] text-[#4a7a4d] uppercase tracking-[0.2em] mb-1">Energy Performance</p>
                <p className="font-head font-bold text-[#e8f5e9] text-base">Certificate Scale</p>
              </div>
              <Info size={16} className="text-[#4a7a4d]" />
            </div>

            {/* Mobile: compact horizontal grade chips */}
            <div className="flex lg:hidden gap-1.5">
              {RATINGS.map((rating, i) => {
                const isSel = selected === i;
                return (
                  <button
                    key={rating.grade}
                    onClick={() => selectBand(i)}
                    aria-label={`Rating ${rating.grade}`}
                    aria-pressed={isSel}
                    className="flex-1 aspect-square rounded-lg flex items-center justify-center font-head font-black text-base transition-all duration-200 active:scale-95"
                    style={{
                      background: isSel ? rating.color : rating.color + "1f",
                      color: isSel ? (rating.textDark ? "#1a2a1a" : "#fff") : rating.color,
                      border: `1px solid ${isSel ? rating.color : rating.color + "33"}`,
                      boxShadow: isSel ? `0 0 16px ${rating.color}55` : "none",
                    }}
                  >
                    {rating.grade}
                  </button>
                );
              })}
            </div>

            {/* Mobile: active band's coloured bar with score */}
            {selectedRating && (
              <div className="flex lg:hidden mt-3 h-8 bg-[#071009] rounded-lg overflow-hidden">
                <motion.div
                  key={selectedRating.grade}
                  className="h-full rounded-lg flex items-center justify-end pr-3 min-w-[2.75rem]"
                  style={{ backgroundColor: selectedRating.color }}
                  initial={{ width: 0 }}
                  animate={{ width: selectedRating.barWidth }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span
                    className="text-[11px] font-head font-bold whitespace-nowrap"
                    style={{ color: selectedRating.textDark ? "#1a2a1a" : "rgba(255,255,255,0.95)" }}
                  >
                    {selectedRating.range}
                  </span>
                </motion.div>
              </div>
            )}

            {/* Desktop: full bar chart */}
            <div className="hidden lg:flex lg:flex-col gap-2">
              {RATINGS.map((rating, i) => (
                <motion.button
                  key={rating.grade}
                  onClick={() => selectBand(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 rounded-xl transition-all duration-200 ${
                    selected === i ? "ring-1 ring-inset" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3 w-full p-2 md:p-2.5 rounded-xl" style={selected === i ? { background: rating.bgColor } : {}}>
                    {/* Grade box */}
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center font-head font-black text-lg flex-shrink-0 transition-all duration-300"
                      style={{
                        background: selected === i ? rating.color : rating.color + "20",
                        color: selected === i ? (rating.textDark ? "#1a2a1a" : "white") : rating.color,
                        boxShadow: selected === i ? `0 0 20px ${rating.color}50` : "none",
                      }}
                    >
                      {rating.grade}
                    </div>

                    {/* Bar */}
                    <div className="flex-1 h-6 md:h-7 bg-[#071009] rounded-md overflow-hidden">
                      <motion.div
                        className="h-full rounded-md flex items-center justify-end pr-3"
                        style={{ backgroundColor: rating.color }}
                        initial={{ width: "0%" }}
                        whileInView={{ width: rating.barWidth }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <span
                          className="text-[10px] font-head font-bold whitespace-nowrap"
                          style={{ color: rating.textDark ? "#1a2a1a" : "rgba(255,255,255,0.9)" }}
                        >
                          {rating.range}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-4 pt-4 border-t border-[#00e676]/08 flex items-start gap-2">
              <AlertCircle size={13} className="text-[#4a7a4d] flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-[#4a7a4d] leading-relaxed">
                All UK rental properties must achieve a minimum <strong className="text-[#ffb300]">E rating</strong> under MEES regulations.
              </p>
            </div>
          </motion.div>

          {/* Right: Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {selectedRating ? (
                <motion.div
                  key={selectedRating.grade}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card p-5 md:p-10 rounded-3xl border"
                  style={{ borderColor: selectedRating.color + "25" }}
                >
                  {/* Grade header */}
                  <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                      className="hidden md:flex w-16 h-16 md:w-20 md:h-20 rounded-2xl items-center justify-center font-head font-black text-4xl md:text-5xl flex-shrink-0"
                      style={{
                        background: selectedRating.color,
                        color: selectedRating.textDark ? "#1a2a1a" : "white",
                        boxShadow: `0 0 40px ${selectedRating.color}50`,
                      }}
                    >
                      {selectedRating.grade}
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-[10px] font-head font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                          style={{ color: selectedRating.color, background: selectedRating.bgColor, border: `1px solid ${selectedRating.color}30` }}
                        >
                          {selectedRating.label}
                        </span>
                      </div>
                      <h3 className="font-head text-2xl md:text-3xl font-bold text-[#e8f5e9] tracking-tight">
                        Rating {selectedRating.grade} — {selectedRating.range} pts
                      </h3>
                      <p className="text-[#81c784] text-sm md:text-base mt-2 leading-relaxed">
                        {selectedRating.description}
                      </p>
                    </div>
                  </div>

                  {/* Data grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-4 mb-6 md:mb-8">
                    {[
                      { label: "Typical Property", value: selectedRating.typical, icon: "🏠", cls: "hidden md:block" },
                      { label: "Est. Annual Bills", value: selectedRating.bills, icon: "💷", cls: "" },
                      { label: "CO₂ Emissions", value: selectedRating.co2, icon: "🌿", cls: "" },
                    ].map((item) => (
                      <div key={item.label} className={`rounded-2xl p-3 md:p-4 ${item.cls}`} style={{ background: selectedRating.bgColor, border: `1px solid ${selectedRating.color}15` }}>
                        <p className="text-base md:text-lg mb-1">{item.icon}</p>
                        <p className="text-[9px] text-[#4a7a4d] uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="font-head font-semibold text-[#e8f5e9] text-[13px] md:text-sm leading-snug">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA based on rating */}
                  <div className="rounded-2xl border border-[#00e676]/12 p-4 md:p-5 bg-[#00e676]/03 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-9 h-9 rounded-xl bg-[#00e676]/10 border border-[#00e676]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {selectedRating.grade <= "C" ? (
                          <CheckCircle size={16} className="text-[#00e676]" />
                        ) : (
                          <TrendingUp size={16} className="text-[#00e676]" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-head font-semibold text-[#e8f5e9] text-sm mb-1">
                          {selectedRating.adviceTitle}
                        </p>
                        <p className="text-xs text-[#81c784] leading-relaxed">
                          {selectedRating.adviceBody}
                        </p>
                      </div>
                    </div>
                    <a href="#contact" className="btn btn-primary text-sm py-2 px-5 whitespace-nowrap w-full sm:w-auto justify-center">
                      Get Assessed
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-card p-10 rounded-3xl border border-[#00e676]/08 flex flex-col items-center justify-center text-center min-h-[300px]"
                >
                  <Zap size={40} className="text-[#00e676]/30 mb-4" />
                  <p className="text-[#4a7a4d] font-head font-medium">Select a rating band to learn more</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom info row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="glass-card p-5 rounded-2xl border border-[#00e676]/08">
                <div className="flex items-center gap-3 mb-2">
                  <Zap size={15} className="text-[#00e676]" fill="currentColor" />
                  <p className="font-head font-semibold text-[#e8f5e9] text-sm">Valid for 10 Years</p>
                </div>
                <p className="text-xs text-[#81c784] leading-relaxed">Once issued, your EPC is lodged on the national register and valid for a decade from the assessment date.</p>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-[#00e676]/08">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle size={15} className="text-[#00e676]" />
                  <p className="font-head font-semibold text-[#e8f5e9] text-sm">Legally Required</p>
                </div>
                <p className="text-xs text-[#81c784] leading-relaxed">An EPC is required by law when selling or renting any property in England, Wales, and Scotland.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
