"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, Zap, AlertCircle } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [error, setError]         = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      new FormData(formRef.current).forEach((value, key) => {
        params.append(key, value.toString());
      });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      setError("Something went wrong — please try calling us directly or try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-[#030804] border-t border-[#00e676]/[0.06] py-24 md:py-32 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "#00e676", filter: "blur(120px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">
              Book Your EPC <span className="text-[#00e676]">Today</span>
            </h2>
            <p className="text-[#81c784] leading-relaxed mb-10 max-w-md">
              Need a fast, legally compliant EPC? Get in touch and we&apos;ll confirm
              your assessment slot — often same day or next day, across Wales and the South West.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+44 1267 241 291",
                  href: "tel:+441267241291",
                  color: "#00e676",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Heol Smyrna, Llangain\nCarmarthen, SA33 5AD",
                  href: null,
                  color: "#00bcd4",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Monday – Friday\n9:00am – 5:00pm",
                  href: null,
                  color: "#69f0ae",
                },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div
                    className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center"
                    style={{ background: color + "10", border: `1px solid ${color}20` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#4a7a4d] uppercase tracking-widest font-head mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-[#e8f5e9] text-[15px] hover:text-[#00e676] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#e8f5e9] text-[15px] whitespace-pre-line leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {["Gov. Accredited", "National Register", "Typically 24hrs", "MEES Compliant"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-[10px] font-head font-semibold uppercase tracking-wider text-[#00e676] px-3 py-1.5 rounded-full border border-[#00e676]/20 bg-[#00e676]/05">
                  <Zap size={10} fill="currentColor" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="glass-card border border-[#00e676]/[0.09] rounded-3xl p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-[#00e676]/10 border border-[#00e676]/30 flex items-center justify-center"
                  >
                    <Send size={24} className="text-[#00e676]" />
                  </motion.div>
                  <h3 className="font-head text-2xl font-bold text-[#e8f5e9]">Enquiry Received!</h3>
                  <p className="text-[#81c784] text-sm max-w-[280px]">We&apos;ll confirm your assessment slot within a few hours. Check your inbox!</p>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  name="contact"
                  data-netlify="true"
                  className="flex flex-col gap-5"
                >
                  {/* Required by Netlify to identify the form on AJAX submissions */}
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { id: "firstName", label: "First Name", placeholder: "John", type: "text" },
                      { id: "lastName", label: "Last Name", placeholder: "Smith", type: "text" },
                    ].map((f) => (
                      <div key={f.id} className="flex flex-col gap-2">
                        <label htmlFor={f.id} className="text-[10px] text-[#81c784] font-semibold uppercase tracking-[0.15em]">
                          {f.label}
                        </label>
                        <input
                          id={f.id}
                          name={f.id}
                          type={f.type}
                          placeholder={f.placeholder}
                          required
                          className="bg-[#030804] border border-[#00e676]/[0.09] rounded-xl px-4 py-3.5 text-[#e8f5e9] text-sm placeholder:text-[#4a7a4d] outline-none focus:border-[#00e676]/40 focus:ring-2 focus:ring-[#00e676]/08 transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  {[
                    { id: "email", label: "Email Address", placeholder: "john@example.com", type: "email" },
                    { id: "phone", label: "Phone Number", placeholder: "+44 7700 000000", type: "tel" },
                  ].map((f) => (
                    <div key={f.id} className="flex flex-col gap-2">
                      <label htmlFor={f.id} className="text-[10px] text-[#81c784] font-semibold uppercase tracking-[0.15em]">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.type === "email"}
                        className="bg-[#030804] border border-[#00e676]/[0.09] rounded-xl px-4 py-3.5 text-[#e8f5e9] text-sm placeholder:text-[#4a7a4d] outline-none focus:border-[#00e676]/40 focus:ring-2 focus:ring-[#00e676]/08 transition-all"
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-[10px] text-[#81c784] font-semibold uppercase tracking-[0.15em]">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="bg-[#030804] border border-[#00e676]/[0.09] rounded-xl px-4 py-3.5 text-[#e8f5e9] text-sm outline-none focus:border-[#00e676]/40 focus:ring-2 focus:ring-[#00e676]/08 transition-all appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234a7a4d' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="">Select a service…</option>
                      <option>Domestic EPC</option>
                      <option>Commercial EPC</option>
                      <option>SAP Calculation (New Build)</option>
                      <option>MEES Compliance Assessment</option>
                      <option>Portfolio Assessment</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] text-[#81c784] font-semibold uppercase tracking-[0.15em]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your property — type, age, size, and any specific requirements…"
                      className="bg-[#030804] border border-[#00e676]/[0.09] rounded-xl px-4 py-3 text-[#e8f5e9] text-sm placeholder:text-[#4a7a4d] outline-none focus:border-[#00e676]/40 focus:ring-2 focus:ring-[#00e676]/08 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/06 text-red-400 text-sm">
                      <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn btn-primary justify-center w-full mt-1 group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#030804]/30 border-t-[#030804] rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Zap size={16} fill="currentColor" />
                        Book My EPC Assessment
                        <svg className="btn-arrow" viewBox="0 0 24 24">
                          <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
