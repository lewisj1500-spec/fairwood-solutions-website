"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Building2,
  BarChart3,
  Shield,
  Wind,
  ListChecks,
  ClipboardCheck,
  Scale,
} from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "Domestic EPC",
    icon: Zap,
    image: "/Domestic.Png.png",
    tag: "Most Popular",
    tagColor: "#00e676",
    lead:
      "A simple A–G rating of how energy-efficient your home is — based on the building itself, like its insulation, windows and heating, rather than how you happen to live in it.",
    blocks: [
      {
        icon: ListChecks,
        heading: "The Process",
        body:
          "We visit, measure up, and note the construction, insulation, glazing and heating. That's run through the government's RdSAP method to produce your certificate plus a list of improvement ideas — all lodged on the national register.",
      },
      {
        icon: ClipboardCheck,
        heading: "When You Need It",
        body:
          "Whenever a home is built, sold or let. Your EPC lasts 10 years and should be ready to show buyers or tenants right from the start.",
      },
      {
        icon: Scale,
        heading: "The Rules",
        body:
          "Legally required across England and Wales and enforced by Trading Standards. Only an accredited Domestic Energy Assessor can carry one out — which is exactly what we are.",
      },
    ],
  },
  {
    id: "02",
    title: "Commercial EPC",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200",
    tag: "Commercial",
    tagColor: "#00bcd4",
    lead:
      "The same idea as a home EPC, but for offices, shops, warehouses and other business premises — worked out with commercial software (SBEM) built for how these buildings are actually used.",
    blocks: [
      {
        icon: ListChecks,
        heading: "The Process",
        body:
          "We survey the building fabric, heating, cooling, ventilation and lighting, then produce a certificate showing your current and potential rating, plus practical ways to improve it.",
      },
      {
        icon: ClipboardCheck,
        heading: "When You Need It",
        body:
          "Whenever a commercial building is built, sold or let. It's not the same as a Display Energy Certificate (DEC) — we'll tell you which one your building needs.",
      },
      {
        icon: Scale,
        heading: "The Rules",
        body:
          "Covered by the same energy regulations as homes. Larger let commercial buildings will need to hit higher ratings in the coming years — we'll help you stay ahead of it.",
      },
    ],
  },
  {
    id: "03",
    title: "SAP Calculations",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    tag: "New Build",
    tagColor: "#ff9500",
    lead:
      "The energy check for new-build homes — used to prove a design meets Building Regulations Part L, both on paper before you build and again once the home is finished.",
    blocks: [
      {
        icon: ListChecks,
        heading: "The Process",
        body:
          "At design stage we work from the architect's plans to predict compliance. Once it's built, we finalise everything with the real specification and air-test results to produce the final EPC and compliance report.",
      },
      {
        icon: ClipboardCheck,
        heading: "When You Need It",
        body:
          "Required for every new home. Building Control won't sign off completion without a passing as-built SAP calculation.",
      },
      {
        icon: Scale,
        heading: "The Rules",
        body:
          "We work to the latest SAP 10.2 method and specialise in Part L Wales, which has its own stricter requirements — including bespoke thermal-bridging modelling for individual schemes.",
      },
    ],
  },
  {
    id: "04",
    title: "MEES Compliance",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    tag: "Landlords",
    tagColor: "#b39ddb",
    lead:
      "The minimum EPC rating a rented property is legally allowed to have. Fall below it and landlords face real penalties — we make sure that doesn't happen.",
    blocks: [
      {
        icon: ListChecks,
        heading: "The Process",
        body:
          "We check your property's current rating, and where it's too low we pinpoint the most cost-effective fixes — or, if it qualifies, help you register a valid exemption.",
      },
      {
        icon: ClipboardCheck,
        heading: "When You Need It",
        body:
          "Rented homes and commercial units must currently reach at least an EPC E before you're allowed to let them.",
      },
      {
        icon: Scale,
        heading: "The Rules",
        body:
          "The minimum for rented homes rises to EPC C from October 2030, with spending capped at £10,000. We help landlords plan ahead rather than scramble at the deadline.",
      },
    ],
  },
  {
    id: "05",
    title: "Air Tightness Testing",
    icon: Wind,
    image: "/AirTightness.png.png",
    tag: "New Build",
    tagColor: "#ff6584",
    lead:
      "A test of how much heat-wasting air leaks through a building's walls, floors, roof, windows and doors — because even great insulation underperforms if the building is draughty.",
    blocks: [
      {
        icon: ListChecks,
        heading: "The Process",
        body:
          "We fit a calibrated “blower door” fan to an external doorway, pressurise the building, and measure exactly how much air escapes against the design target.",
      },
      {
        icon: ClipboardCheck,
        heading: "When You Need It",
        body:
          "Required for most new homes before Building Control signs off. The result feeds straight into the final SAP — a poor result can even fail the build.",
      },
      {
        icon: Scale,
        heading: "The Rules",
        body:
          "We test to the CIBSE TM23 standard used in Building Regulations, and we're registered with the Elmhurst Airtightness Scheme (EAS) — so every test is independently overseen.",
      },
    ],
  },
];

const AUTO_PLAY = 6000;

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((p) => (p + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((p) => (p - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  // Tapping a service jumps to it and pauses the cycle for a while so it can be
  // read (important on mobile), then auto-resumes.
  const handleTabClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsPaused(false), 12000);
  };

  useEffect(() => {
    if (isPaused || !isInView) return;
    const interval = setInterval(() => { if (!document.hidden) handleNext(); }, AUTO_PLAY);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, isInView, handleNext]);

  useEffect(() => () => { if (resumeTimer.current) clearTimeout(resumeTimer.current); }, []);

  const variants = {
    enter: (dir: number) => ({ y: dir > 0 ? "-100%" : "100%", opacity: 0 }),
    center: { zIndex: 1, y: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, y: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  };

  const active = SERVICES[activeIndex];
  const Icon = active.icon;

  return (
    <section ref={sectionRef} className="w-full py-10 md:py-20">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24 mx-auto max-w-7xl">
        <div className="mb-10">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">
            Our EPC <span className="text-[#00e676]">Services</span>
          </h2>
          <p className="text-[#81c784] text-sm leading-relaxed max-w-sm">
            Pick a service to see how it works — fast, accurate, and government registered.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-x-16 lg:gap-y-12 lg:items-stretch">

          {/* Tab list — mobile: first; desktop: left column */}
          <div className="order-1 lg:col-span-6 flex flex-col justify-center">
            {/* Small screens: compact button grid (2 + 2 + 1 centered).
                Large screens: full-width vertical column of buttons. */}
            <div className="flex flex-wrap justify-center gap-3 lg:flex-col lg:flex-nowrap lg:gap-2.5">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                const ServiceIcon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    aria-pressed={isActive}
                    className="group relative overflow-hidden basis-[calc(50%-0.375rem)] grow-0 lg:basis-auto lg:w-full flex items-center gap-3 lg:gap-4 rounded-2xl border p-3.5 md:p-4 lg:p-5 text-left transition-all duration-300"
                    style={
                      isActive
                        ? { borderColor: service.tagColor + "66", background: service.tagColor + "18" }
                        : { borderColor: "#00e67622", background: "#00e67608" }
                    }
                  >
                    {/* Icon */}
                    <div
                      className="w-9 h-9 lg:w-11 lg:h-11 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: isActive ? service.tagColor + "26" : "#00e67614",
                        border: `1px solid ${isActive ? service.tagColor + "55" : "#00e6762e"}`,
                      }}
                    >
                      <ServiceIcon size={16} className="lg:hidden" style={{ color: isActive ? service.tagColor : "#00e676" }} />
                      <ServiceIcon size={18} className="hidden lg:block" style={{ color: isActive ? service.tagColor : "#00e676" }} />
                    </div>

                    {/* Title */}
                    <span
                      className="font-head text-[13px] sm:text-sm md:text-[15px] lg:text-lg leading-tight tracking-tight transition-colors flex-1"
                      style={{ color: isActive ? "#e8f5e9" : "#81c784" }}
                    >
                      {service.title}
                    </span>

                    {/* Active arrow — large screens only */}
                    <ArrowRight
                      size={17}
                      className={`hidden lg:block flex-shrink-0 transition-all duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
                      style={{ color: service.tagColor }}
                    />

                    {/* Autoplay progress bar */}
                    {isActive && (
                      <motion.div
                        key={`prog-${index}-${isPaused}`}
                        className="absolute bottom-0 left-0 h-[3px]"
                        style={{ background: service.tagColor }}
                        initial={{ width: "0%" }}
                        animate={isPaused ? { width: "0%" } : { width: "100%" }}
                        transition={{ duration: AUTO_PLAY / 1000, ease: "linear" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Image — mobile: last (decorative); desktop: right column */}
          <div
            className="order-3 lg:order-2 lg:col-span-6 lg:flex lg:flex-col"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 1500)}
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-[420px] rounded-3xl overflow-hidden bg-[#0a1a0c] border border-[#00e676]/[0.08]">
              {/* Glow */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 100%, rgba(0,230,118,0.06) 0%, transparent 60%)",
                }}
              />

              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring", stiffness: 140, damping: 28 },
                    opacity: { duration: 0.4 },
                  }}
                  className="absolute inset-0 w-full h-full cursor-pointer"
                  onClick={handleNext}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={SERVICES[activeIndex].image}
                    alt={SERVICES[activeIndex].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030804]/70 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Nav controls */}
              <div className="absolute bottom-5 right-5 flex gap-2 z-20">
                {[handlePrev, handleNext].map((fn, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); fn(); }}
                    aria-label={i === 0 ? "Previous service" : "Next service"}
                    className="w-11 h-11 rounded-full bg-[#030804]/60 backdrop-blur border border-[#00e676]/20 flex items-center justify-center text-[#e8f5e9] hover:bg-[#00e676]/15 hover:border-[#00e676]/40 transition-all active:scale-90"
                  >
                    {i === 0 ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </button>
                ))}
              </div>

              {/* Service label overlay */}
              <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3">
                <div className="flex items-center gap-2 bg-[#030804]/70 backdrop-blur px-4 py-2 rounded-full border border-[#00e676]/15">
                  <Icon size={13} style={{ color: active.tagColor }} />
                  <span className="text-xs uppercase tracking-widest text-white/80 font-head">
                    {active.title}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Detail — mobile: right under the tabs; desktop: full-width row below */}
          <div className="order-2 lg:order-3 lg:col-span-12 lg:mt-2 lg:pt-12 lg:border-t lg:border-[#00e676]/[0.08]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#e8f5e9] text-sm sm:text-base md:text-xl leading-relaxed max-w-3xl mb-8">
                {active.lead}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {active.blocks.map((block, i) => {
                  const BlockIcon = block.icon;
                  return (
                    <motion.div
                      key={block.heading}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.08 + i * 0.08 }}
                      className="glass-card p-6 md:p-7 rounded-3xl h-full"
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                        style={{ background: active.tagColor + "12", border: `1px solid ${active.tagColor}22` }}
                      >
                        <BlockIcon size={18} style={{ color: active.tagColor }} />
                      </div>
                      <h4 className="font-head text-[15px] font-bold uppercase tracking-[0.12em] text-[#e8f5e9] mb-3">
                        {block.heading}
                      </h4>
                      <p className="text-[#81c784] text-[13px] md:text-sm leading-relaxed">{block.body}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8">
                <a href="#contact" className="btn btn-primary">
                  Enquire About {active.title}
                  <svg className="btn-arrow" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
