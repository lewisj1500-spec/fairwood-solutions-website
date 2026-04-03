"use client";
import { motion } from "framer-motion";
import { Phone, Home, FileText, Lightbulb } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Book Online",
    desc: "Request your EPC in minutes. Choose your property type, provide key details, and we'll confirm your assessment slot — often same day or next day.",
    color: "#00e676",
  },
  {
    num: "02",
    icon: Home,
    title: "On-Site Assessment",
    desc: "Our accredited DEA visits your property for a non-invasive inspection — measuring dimensions, insulation, heating systems, and glazing. Takes just 45–90 minutes.",
    color: "#00bcd4",
  },
  {
    num: "03",
    icon: FileText,
    title: "Certificate Issued",
    desc: "Your EPC is generated, lodged on the national register, and emailed to you — typically within 24 hours of the assessment. Legally valid for 10 years.",
    color: "#69f0ae",
  },
  {
    num: "04",
    icon: Lightbulb,
    title: "Energy Advice",
    desc: "We don't just hand you a number. We explain your rating, highlight improvement opportunities, and advise on upgrades that could save thousands on energy bills.",
    color: "#ff9500",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#071009] border-t border-[#00e676]/[0.06] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">
            EPC in 4 <span className="text-[#00e676]">Simple Steps</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            From booking to certificate — we make getting your EPC fast, simple, and stress-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px">
            <motion.div
              className="h-full"
              style={{ background: "linear-gradient(to right, transparent, rgba(0,230,118,0.2), transparent)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
                className="relative flex flex-col gap-5 group"
              >
                {/* Step number + icon */}
                <div className="relative flex items-center gap-3">
                  {/* Large ghost number */}
                  <span
                    className="font-head text-[80px] font-black leading-none select-none absolute -top-3 -left-2 opacity-[0.06]"
                    style={{ color: step.color }}
                  >
                    {step.num}
                  </span>

                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, boxShadow: `0 0 30px ${step.color}40` }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: step.color + "12",
                      border: `1px solid ${step.color}25`,
                    }}
                  >
                    <Icon size={22} style={{ color: step.color }} />
                  </motion.div>

                  {/* Step badge */}
                  <span
                    className="text-[10px] font-head font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full relative z-10"
                    style={{ color: step.color, background: step.color + "10", border: `1px solid ${step.color}20` }}
                  >
                    Step {step.num}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="font-head text-[20px] font-bold text-[#e8f5e9] mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#81c784] text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Animated line on left (mobile) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-gradient-to-b from-[#00e676]/20 to-transparent ml-7" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn btn-primary">
            Start Your EPC Today
            <svg className="btn-arrow" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
