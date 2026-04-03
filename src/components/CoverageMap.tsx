"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const MapClient = dynamic(() => import("@/components/MapClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#0a1a0c]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-[#00e676]/20 border-t-[#00e676] rounded-full animate-spin" />
        <span className="text-[#4a7a4d] text-sm font-head">Loading map…</span>
      </div>
    </div>
  ),
});

const COUNTIES = [
  "Carmarthenshire",
  "Pembrokeshire",
  "Ceredigion",
  "Swansea & Neath",
  "Bridgend",
  "Cardiff & Vale",
  "Newport & Gwent",
  "Merthyr & RCT",
  "Powys (South)",
  "Bristol & Bath",
];

export default function CoverageMap() {
  return (
    <section className="bg-[#071009] border-t border-[#00e676]/[0.06] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">Coverage Area</span>
          <h2 className="section-title">
            Where We <span className="text-[#00e676]">Operate</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            Based in Carmarthen, our accredited assessors cover all of Wales and
            parts of the South West — fast response, local knowledge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden border border-[#00e676]/[0.08]"
          style={{ boxShadow: "0 0 0 1px rgba(0,230,118,0.05), 0 30px 80px rgba(0,0,0,0.5)" }}
        >
          <div className="h-[480px] md:h-[560px]">
            <MapClient />
          </div>

          {/* Info overlay */}
          <div className="absolute top-4 left-4 z-[500] bg-[#030804]/90 backdrop-blur-md border border-[#00e676]/12 rounded-2xl px-4 py-3 flex items-center gap-2.5 pointer-events-none">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00e676] animate-pulse-dot flex-shrink-0" />
            <div>
              <p className="text-[11px] font-head text-[#e8f5e9] font-semibold leading-tight">Carmarthen, Wales</p>
              <p className="text-[10px] text-[#4a7a4d]">Assessment HQ</p>
            </div>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 z-[500] bg-[#030804]/90 backdrop-blur-md border border-[#00e676]/12 rounded-2xl px-4 py-3 space-y-2 pointer-events-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#00e676]" />
              <span className="text-[11px] text-[#81c784]">Office / key area</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-px border-t border-dashed border-[#00e676]/40" />
              <span className="text-[11px] text-[#81c784]">Outer service radius</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-2 rounded-full bg-[#00e676]/15 border border-[#00e676]/35" />
              <span className="text-[11px] text-[#81c784]">Primary coverage</span>
            </div>
          </div>
        </motion.div>

        {/* County badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {COUNTIES.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#00e676]/[0.08] bg-[#0a1a0c] text-[#81c784] text-sm font-head"
            >
              <MapPin size={12} className="text-[#00e676]" />
              {c}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#00e676]/20 bg-[#00e676]/06 text-[#00e676] text-sm font-head">
            + More on request
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#4a7a4d] text-sm mt-5"
        >
          Not sure if we cover your area?{" "}
          <a href="#contact" className="text-[#00e676] hover:underline underline-offset-2">
            Get in touch
          </a>{" "}
          and we&apos;ll confirm within the hour.
        </motion.p>
      </div>
    </section>
  );
}
