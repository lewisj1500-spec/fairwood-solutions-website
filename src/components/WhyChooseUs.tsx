'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, Clock, PiggyBank, GraduationCap, MapPin, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: MessageCircle,
    title: 'No Jargon. Ever.',
    description:
      'We translate complex energy regulations and survey findings into plain English. You always know exactly what our reports mean and what to do next.',
    color: '#00e676',
    bg: 'rgba(0,230,118,0.08)',
    border: 'rgba(0,230,118,0.18)',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description:
      'Most EPCs and survey reports delivered within 48 hours of the assessment. No chasing, no delays — just results when you need them.',
    color: '#00bcd4',
    bg: 'rgba(0,188,212,0.08)',
    border: 'rgba(0,188,212,0.18)',
  },
  {
    icon: PiggyBank,
    title: 'Transparent Pricing',
    description:
      'Fixed-fee quotes with no hidden costs. You know the price before we turn up. Volume discounts available for landlords and developers.',
    color: '#69f0ae',
    bg: 'rgba(105,240,174,0.08)',
    border: 'rgba(105,240,174,0.18)',
  },
  {
    icon: GraduationCap,
    title: 'Genuine Expertise',
    description:
      "Our assessors aren't generalists. They're specialists with decades of experience in energy assessment and surveying — not sales people with a weekend course.",
    color: '#b39ddb',
    bg: 'rgba(179,157,219,0.08)',
    border: 'rgba(179,157,219,0.18)',
  },
  {
    icon: MapPin,
    title: 'Local Knowledge',
    description:
      'Based in Wales, working across Wales. We know local building stock, common issues, and regional compliance nuances that national firms often miss.',
    color: '#ff9500',
    bg: 'rgba(255,149,0,0.08)',
    border: 'rgba(255,149,0,0.18)',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Accredited',
    description:
      'RICS-qualified, Elmhurst Energy accredited, TrustMark registered. Every assessment is covered by full professional indemnity insurance.',
    color: '#ff6584',
    bg: 'rgba(255,101,132,0.08)',
    border: 'rgba(255,101,132,0.18)',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative py-20 lg:py-32 bg-[#030804] overflow-hidden border-y border-[#00e676]/[0.06]"
    >
      {/* Energy grid */}
      <div className="absolute inset-0 energy-grid pointer-events-none opacity-60" />

      {/* Ambient glows */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(0,230,118,0.04)', filter: 'blur(120px)' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(0,188,212,0.03)', filter: 'blur(100px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-6 h-0.5 rounded-full bg-[#00e676]" />
          <span className="section-tag" style={{ marginBottom: 0 }}>Why Fairwood EPC</span>
        </motion.div>

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title max-w-lg"
            style={{ marginBottom: 0 }}
          >
            Different by design.
            <br />
            <span className="text-[#00e676]">Better by experience.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-sub max-w-xs"
          >
            Here&apos;s what sets us apart from every other assessor you&apos;ve considered.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="group relative overflow-hidden rounded-2xl p-6 lg:p-7 cursor-default transition-all duration-300"
              style={{
                background: 'rgba(10,26,12,0.6)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,230,118,0.07)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.border = `1px solid ${reason.border}`
                ;(e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${reason.bg}`
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.border = '1px solid rgba(0,230,118,0.07)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0c]/80 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: reason.bg, border: `1px solid ${reason.border}` }}
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <reason.icon className="w-5 h-5" style={{ color: reason.color }} />
                </motion.div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-2.5 tracking-tight"
                  style={{ color: 'var(--text-1)', fontFamily: 'var(--font-space), sans-serif' }}
                >
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', opacity: 0.8 }}>
                  {reason.description}
                </p>

                {/* Bottom accent bar */}
                <motion.div
                  className="h-0.5 mt-5 rounded-full"
                  style={{ background: reason.bg }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
