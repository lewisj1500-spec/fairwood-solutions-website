"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, ShieldCheck, Users, MapPin, Award } from "lucide-react";

const features = [
  "Government Accredited Assessor",
  "Lodged on National Register",
  "Typically 24-Hour Certificate Delivery",
  "Domestic & Commercial",
  "Transparent Fixed Fees",
  "19+ Years Experience",
];

const highlights = [
  { icon: ShieldCheck, label: "Fully accredited energy assessor" },
  { icon: Users, label: "Direct, personal service" },
  { icon: MapPin, label: "Covering Wales & the South West" },
  { icon: Award, label: "Established in 2007" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#071009] border-y border-[#00e676]/[0.06] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#0a1a0c] border border-[#00e676]/[0.08] flex items-center justify-center p-6 sm:p-8 lg:min-h-[440px]">
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: "linear-gradient(rgba(0,230,118,0.04) 1px, transparent 1px), linear-gradient(90deg,rgba(0,230,118,0.04) 1px,transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* Orb */}
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(0,230,118,0.4), transparent 70%)" }} />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(0,188,212,0.4), transparent 70%)" }} />

              {/* About highlights card */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full max-w-xs"
                >
                  {/* Identity */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#00e676] flex items-center justify-center shadow-[0_0_24px_rgba(0,230,118,0.4)] flex-shrink-0">
                      <Zap size={22} className="text-[#030804]" fill="currentColor" />
                    </div>
                    <div>
                      <p className="font-head font-bold text-[#e8f5e9] text-base leading-tight">Fairwood Solutions</p>
                      <p className="text-[11px] text-[#81c784] flex items-center gap-1 mt-0.5">
                        <MapPin size={10} className="text-[#00e676]" />
                        Carmarthenshire, Wales
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2.5">
                    {highlights.map((h, i) => (
                      <motion.div
                        key={h.label}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3 rounded-xl bg-[#030804]/50 backdrop-blur border border-[#00e676]/10 px-3 py-2.5"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#00e676]/10 border border-[#00e676]/20 flex items-center justify-center flex-shrink-0">
                          <h.icon size={14} className="text-[#00e676]" />
                        </div>
                        <span className="text-[13px] text-[#e8f5e9] leading-tight">{h.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-5 -right-4 bg-[#00e676] rounded-2xl px-5 py-4 shadow-[0_20px_50px_rgba(0,230,118,0.35)] flex flex-col items-center"
            >
              <span className="font-head text-3xl font-bold text-[#030804] leading-none">19+</span>
              <span className="text-[11px] text-[#030804]/70 mt-1 text-center leading-tight font-semibold">Years of<br/>Excellence</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              Trusted Energy Experts,{" "}
              <span className="text-[#00e676]">Proven Results</span>
            </h2>
            <p className="text-[#e8f5e9] text-lg leading-relaxed mb-4">
              Fairwood Solutions has been delivering government-registered EPC
              assessments across Wales and the South West for nearly two decades.
            </p>
            <p className="text-[#81c784] leading-relaxed mb-10">
              Based in Carmarthenshire, we bring together the personal, hands-on service of a
              small team and the reliability of an established company. Every assessment is
              carried out by a fully accredited Domestic Energy Assessor (DEA), so you always
              deal directly with the person doing the work — genuine local knowledge and modern
              tools, with none of the call-centre runaround. In the vast majority of cases, we
              lodge your certificate on the national register within 24 hours — accurate,
              compliant, and hassle-free.
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
