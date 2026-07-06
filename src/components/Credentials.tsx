"use client";
import { motion } from "framer-motion";
import { BadgeCheck, Wind } from "lucide-react";

/**
 * Accreditations / credentials bar.
 *
 * The two official Elmhurst brand assets should be dropped in as real images —
 * do NOT recreate them as CSS/text badges. Save the supplied files to:
 *   public/credentials/elmhurst-approved-energy-assessor.jpg
 *   public/credentials/elmhurst-approved-airtightness-scheme-member.jpg
 * then set SHOW_LOGOS to true. Until the files exist, a text credential
 * statement is shown so nothing renders broken.
 */
const SHOW_LOGOS = false;

const LOGOS = [
  {
    src: "/credentials/elmhurst-approved-energy-assessor.jpg",
    alt: "Elmhurst Energy Approved Energy Assessor — Quality Promise Accredited Member",
  },
  {
    src: "/credentials/elmhurst-approved-airtightness-scheme-member.jpg",
    alt: "Elmhurst Energy Approved — Airtightness Scheme Member",
  },
];

const CREDENTIALS = [
  {
    icon: BadgeCheck,
    label: "Domestic Energy Assessor accredited by Elmhurst Energy",
  },
  {
    icon: Wind,
    label: "Registered with the Elmhurst Airtightness Scheme (EAS)",
  },
];

export default function Credentials() {
  return (
    <section className="bg-[#030804] border-b border-[#00e676]/[0.06] py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[10px] font-head font-semibold uppercase tracking-[0.25em] text-[#4a7a4d] mb-6"
        >
          Accredited &amp; Independently Overseen
        </motion.p>

        {SHOW_LOGOS ? (
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {LOGOS.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className="h-16 md:h-20 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8">
            {CREDENTIALS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#00e676]/12 bg-[#00e676]/[0.03]"
              >
                <Icon size={16} className="text-[#00e676] flex-shrink-0" />
                <span className="text-[13px] text-[#81c784] leading-snug">{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
