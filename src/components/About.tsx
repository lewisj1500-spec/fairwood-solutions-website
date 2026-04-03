"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

const features = [
  "Government Accredited Assessors",
  "Lodged on National Register",
  "24-Hour Certificate Delivery",
  "Domestic & Commercial",
  "Transparent Fixed Fees",
  "20+ Years Experience",
];

const EPC_BARS = [
  { label: "A", pct: 95, color: "#00a550" },
  { label: "B", pct: 82, color: "#50b848" },
  { label: "C", pct: 68, color: "#b3d334" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#071009] border-y border-[#00e676]/[0.06] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#0a1a0c] border border-[#00e676]/[0.08]">
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: "linear-gradient(rgba(0,230,118,0.04) 1px, transparent 1px), linear-gradient(90deg,rgba(0,230,118,0.04) 1px,transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* Orb */}
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-25" style={{ background: "radial-gradient(circle, #00e676, transparent 70%)", filter: "blur(60px)" }} />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #00bcd4, transparent 70%)", filter: "blur(50px)" }} />

              {/* Energy assessment illustration */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full max-w-xs space-y-3">
                  {/* Mock EPC bars */}
                  {EPC_BARS.map((bar, i) => (
                    <motion.div
                      key={bar.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.15 }}
                      className="flex items-center gap-3"
                    >
                      <span className="font-head font-bold text-sm w-4" style={{ color: bar.color }}>{bar.label}</span>
                      <div className="flex-1 h-8 bg-[#030804]/60 rounded-md overflow-hidden">
                        <motion.div
                          className="h-full rounded-md flex items-center justify-end pr-3"
                          style={{ backgroundColor: bar.color }}
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${bar.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <span className="text-[10px] font-head font-bold text-white/90">{bar.pct}</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Circular energy score */}
                  <div className="flex justify-center pt-4">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      className="relative w-24 h-24"
                    >
                      <svg viewBox="0 0 90 90" className="w-full h-full -rotate-90">
                        <circle cx="45" cy="45" r="38" fill="none" stroke="rgba(0,230,118,0.1)" strokeWidth="6" />
                        <motion.circle
                          cx="45" cy="45" r="38" fill="none"
                          stroke="#00e676" strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="238.76"
                          initial={{ strokeDashoffset: 238.76 }}
                          whileInView={{ strokeDashoffset: 238.76 * 0.08 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                          style={{ filter: "drop-shadow(0 0 6px rgba(0,230,118,0.6))" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="font-head font-black text-2xl text-[#00e676] leading-none">A</span>
                        <span className="text-[9px] text-[#4a7a4d] uppercase tracking-wider mt-0.5">Rating</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 left-5">
                <span className="text-xs text-[#4a7a4d] bg-[#030804]/60 backdrop-blur px-3 py-1.5 rounded-full border border-[#00e676]/10 font-head flex items-center gap-1.5">
                  <Zap size={10} className="text-[#00e676]" fill="currentColor" />
                  EPC Assessment Report
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-5 -right-4 bg-[#00e676] rounded-2xl px-5 py-4 shadow-[0_20px_50px_rgba(0,230,118,0.35)] flex flex-col items-center"
            >
              <span className="font-head text-3xl font-bold text-[#030804] leading-none">20+</span>
              <span className="text-[11px] text-[#030804]/70 mt-1 text-center leading-tight font-semibold">Years of<br/>Excellence</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              Trusted Energy Experts,{" "}
              <span className="text-[#00e676]">Proven Results</span>
            </h2>
            <p className="text-[#e8f5e9] text-lg leading-relaxed mb-4">
              Fairwood Solutions has been delivering government-registered EPC
              assessments across Wales and the South West for over two decades.
            </p>
            <p className="text-[#81c784] leading-relaxed mb-10">
              Based in Carmarthenshire, our team of fully accredited Domestic Energy
              Assessors (DEAs) combines local knowledge with cutting-edge assessment
              tools. Every certificate is lodged on the national register within 24 hours
              — accurate, compliant, and always on time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-[#00e676] flex-shrink-0" />
                  <span className="text-sm text-[#81c784]">{f}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary">
              Work With Us
              <svg className="btn-arrow" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
