import { Phone, MapPin, Clock, Zap } from "lucide-react";

const services = [
  "Domestic EPC",
  "Commercial EPC",
  "SAP Calculations",
  "MEES Compliance",
  "New Build Assessments",
];

const company = [
  { label: "About Us", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "EPC Explained", href: "#epc" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071009] border-t border-[#00e676]/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#00e676]/[0.06]">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 bg-[#00e676] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(0,230,118,0.4)]">
                <Zap size={16} className="text-[#030804]" fill="currentColor" />
              </div>
              <span className="font-head font-semibold text-[16px] text-[#e8f5e9]">
                Fairwood <span className="text-[#00e676]">Energy</span>
              </span>
            </a>
            <p className="text-[#4a7a4d] text-sm leading-relaxed max-w-[240px] mb-5">
              Government-accredited EPC assessors delivering fast, accurate energy certificates across Wales and the South West.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg border border-[#00e676]/[0.1] flex items-center justify-center text-[#4a7a4d] hover:text-[#00e676] hover:border-[#00e676]/30 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>

            {/* EPC badge */}
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-[#00e676]/12 bg-[#00e676]/04">
              <div className="w-5 h-5 rounded flex items-center justify-center font-head font-black text-xs text-white" style={{ background: "#00a550" }}>A</div>
              <span className="text-[10px] text-[#4a7a4d] font-head font-medium">Rated Accredited Service</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-head text-[12px] font-bold text-[#e8f5e9] uppercase tracking-[0.2em] mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[#4a7a4d] text-sm hover:text-[#00e676] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#00e676]/30 group-hover:bg-[#00e676] transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-head text-[12px] font-bold text-[#e8f5e9] uppercase tracking-[0.2em] mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {company.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="text-[#4a7a4d] text-sm hover:text-[#00e676] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#00e676]/30 group-hover:bg-[#00e676] transition-colors" />
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-head text-[12px] font-bold text-[#e8f5e9] uppercase tracking-[0.2em] mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2.5 items-start">
                <Phone size={13} className="text-[#00e676] mt-0.5 flex-shrink-0" />
                <a href="tel:+441267241291" className="text-[#4a7a4d] text-sm hover:text-[#00e676] transition-colors">
                  +44 1267 241 291
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <MapPin size={13} className="text-[#00e676] mt-0.5 flex-shrink-0" />
                <span className="text-[#4a7a4d] text-sm leading-relaxed">
                  Heol Smyrna, Llangain<br />Carmarthen, SA33 5AD
                </span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Clock size={13} className="text-[#00e676] mt-0.5 flex-shrink-0" />
                <span className="text-[#4a7a4d] text-sm leading-relaxed">
                  Mon–Fri, 9:00am – 5:00pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7">
          <p className="text-[#4a7a4d] text-xs">
            © {new Date().getFullYear()} Fairwood Solutions Ltd. All rights reserved. Government Accredited EPC Assessors.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="text-[#4a7a4d] text-xs hover:text-[#00e676] transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
