"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Zap, Building2, BarChart3, Shield, Wind } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "01",
    title: "Domestic EPC",
    icon: Zap,
    description:
      "Fast, accurate Energy Performance Certificates for residential properties. Government-registered assessments required for selling, letting, or building — delivered within 24 hours.",
    image: "/Domestic.Png.png",
    tag: "Most Popular",
    tagColor: "#00e676",
  },
  {
    id: "02",
    title: "Commercial EPC",
    icon: Building2,
    description:
      "Non-domestic Energy Performance Certificates for offices, retail units, warehouses, and all commercial properties. Display Energy Certificates (DEC) also available.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200",
    tag: "Commercial",
    tagColor: "#00bcd4",
  },
  {
    id: "03",
    title: "SAP Calculations",
    icon: BarChart3,
    description:
      "Standard Assessment Procedure (SAP) calculations for new builds and major renovations. Required for Building Regulations Part L compliance and planning applications.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    tag: "New Build",
    tagColor: "#ff9500",
  },
  {
    id: "04",
    title: "MEES Compliance",
    icon: Shield,
    description:
      "Minimum Energy Efficiency Standards advice for landlords. We assess your portfolio, identify properties below the E rating threshold, and recommend cost-effective improvements.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    tag: "Landlords",
    tagColor: "#69f0ae",
  },
  {
    id: "05",
    title: "Air Tightness Testing",
    icon: Wind,
    description:
      "Accredited air permeability testing for new build and refurbishment projects. Required under Building Regulations Part L, our pressure tests verify your build meets the design air leakage target — with same-day results to keep your programme on track.",
    image: "/AirTightness.png.png",
    tag: "New Build",
    tagColor: "#ff9500",
  },
];

const AUTO_PLAY = 5000;

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((p) => (p + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((p) => (p - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused || !isInView) return;
    const interval = setInterval(() => { if (!document.hidden) handleNext(); }, AUTO_PLAY);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, isInView, handleNext]);

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
            Fully accredited assessments for every property type — fast, accurate, and government registered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Tab list */}
          <div className="lg:col-span-6 flex flex-col order-2 lg:order-1 lg:min-h-[640px]">

            <div className="flex flex-col">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                const ServiceIcon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 py-6 md:py-7 text-left transition-all duration-500 border-t border-[#00e676]/[0.07] first:border-0",
                      isActive ? "text-[#e8f5e9]" : "text-[#81c784]/50 hover:text-[#e8f5e9]"
                    )}
                  >
                    {/* Progress bar on left edge */}
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-[#00e676]/[0.08]">
                      {isActive && (
                        <motion.div
                          key={`prog-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-[#00e676] origin-top"
                          initial={{ height: "0%" }}
                          animate={isPaused ? { height: "0%" } : { height: "100%" }}
                          transition={{ duration: AUTO_PLAY / 1000, ease: "linear" }}
                        />
                      )}
                    </div>

                    {/* Icon */}
                    <div className={cn(
                      "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300",
                      isActive
                        ? "bg-[#00e676]/15 border border-[#00e676]/30"
                        : "bg-[#00e676]/04 border border-[#00e676]/10"
                    )}>
                      <ServiceIcon size={16} className={isActive ? "text-[#00e676]" : "text-[#4a7a4d]"} />
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl md:text-3xl font-normal tracking-tight font-head">
                          {service.title}
                        </span>
                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="hidden sm:inline-flex text-[9px] font-head font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                            style={{ background: service.tagColor + "15", color: service.tagColor, border: `1px solid ${service.tagColor}30` }}
                          >
                            {service.tag}
                          </motion.span>
                        )}
                      </div>
                      <div
                        style={{
                          maxHeight: isActive ? "8rem" : "0px",
                          opacity: isActive ? 1 : 0,
                          overflow: "hidden",
                          transition: "max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
                        }}
                      >
                        <p className="text-[#81c784] text-sm md:text-base leading-relaxed max-w-sm pb-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="lg:col-span-6 order-1 lg:order-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 1500)}
          >
            <div className="relative aspect-[4/3] lg:aspect-[16/9] rounded-3xl overflow-hidden bg-[#0a1a0c] border border-[#00e676]/[0.08]">
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
                    className="w-11 h-11 rounded-full bg-[#030804]/60 backdrop-blur border border-[#00e676]/20 flex items-center justify-center text-[#e8f5e9] hover:bg-[#00e676]/15 hover:border-[#00e676]/40 transition-all active:scale-90"
                  >
                    {i === 0 ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </button>
                ))}
              </div>

              {/* Service label overlay */}
              <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3">
                <div className="flex items-center gap-2 bg-[#030804]/70 backdrop-blur px-4 py-2 rounded-full border border-[#00e676]/15">
                  <Icon size={13} className="text-[#00e676]" />
                  <span className="text-xs uppercase tracking-widest text-white/80 font-head">
                    {active.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
