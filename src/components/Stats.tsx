"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Zap, Users, Award } from "lucide-react";

function AnimatedNumber({ target, suffix = "", delay = 0 }: { target: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      const duration = 1800;
      const start = Date.now();
      const step = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(ease * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, target, delay]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const metrics = [
  {
    icon: Zap,
    label: "EPCs Issued",
    value: 12400,
    suffix: "+",
    delta: "+500/mo",
    desc: "certificates lodged on national register",
    color: "#00e676",
    bar: 85,
  },
  {
    icon: TrendingUp,
    label: "Avg Rating Improvement",
    value: 2,
    suffix: " Bands",
    delta: "After Advice",
    desc: "average improvement after our retrofit guidance",
    color: "#00bcd4",
    bar: 70,
  },
  {
    icon: Users,
    label: "Client Satisfaction",
    value: 98,
    suffix: "%",
    delta: "5 Stars",
    desc: "of clients recommend us to others",
    color: "#69f0ae",
    bar: 98,
  },
  {
    icon: Award,
    label: "Years Accredited",
    value: 19,
    suffix: "+",
    delta: "Est. 2007",
    desc: "trusted EPC expertise across Wales",
    color: "#ff9500",
    bar: 100,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#030804] border-y border-[#00e676]/[0.06] py-24 md:py-32">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: "#00e676", filter: "blur(120px)" }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.03]" style={{ background: "#00bcd4", filter: "blur(140px)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">By the Numbers</span>
          <h2 className="section-title">
            Performance You Can{" "}
            <span className="text-[#00e676]">Measure</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            Real data. Real impact. See why Wales&apos; property owners trust us with their energy assessments.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-[#00e676]/[0.08] bg-[#071009]/60 backdrop-blur-2xl p-7 hover:-translate-y-1 hover:border-[#00e676]/20 transition-all duration-300"
                style={{ boxShadow: "0 0 0 0 rgba(0,230,118,0)" }}
                whileHover={{ boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${m.color}10` }}
              >
                {/* Gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0c]/80 via-transparent to-transparent" />

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: m.color + "12", border: `1px solid ${m.color}25` }}
                    >
                      <Icon size={16} style={{ color: m.color }} />
                    </div>
                    <span
                      className="text-[9px] font-head font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-full"
                      style={{ color: m.color, background: m.color + "12", border: `1px solid ${m.color}20` }}
                    >
                      {m.delta}
                    </span>
                  </div>

                  {/* Value */}
                  <div>
                    <span
                      className="font-head text-[52px] font-bold tracking-tight leading-none"
                      style={{ color: m.color }}
                    >
                      <AnimatedNumber target={m.value} suffix={m.suffix} delay={idx * 0.15} />
                    </span>
                  </div>

                  {/* Label */}
                  <div>
                    <p className="text-[10px] font-head font-semibold uppercase tracking-[0.18em] text-[#4a7a4d] mb-1">{m.label}</p>
                    <p className="text-xs text-[#81c784]/70 leading-relaxed">{m.desc}</p>
                  </div>

                  {/* Progress bar */}
                  <div className="h-0.5 bg-[#00e676]/05 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: m.color }}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${m.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.15 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
