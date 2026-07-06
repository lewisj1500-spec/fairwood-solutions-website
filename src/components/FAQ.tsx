"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is an Energy Performance Certificate (EPC)?",
    a: "An EPC is a legal document that rates a property's energy efficiency on a scale from A (most efficient) to G (least efficient). It's required by law when selling, letting, or building a property in the UK. Our government-accredited assessors carry out a non-invasive survey and lodge the certificate on the national register — valid for 10 years.",
  },
  {
    q: "How long does an EPC assessment take?",
    a: "Most domestic assessments take 45–90 minutes depending on the size and type of property. Our DEAs are efficient and thorough — we measure the building's dimensions, inspect insulation, glazing, heating systems, and renewables without any disruption to the property.",
  },
  {
    q: "How quickly will I receive my EPC certificate?",
    a: "In the vast majority of cases we deliver your EPC within 24 hours of the assessment — often the same day. Occasionally it can take a little longer, for example where additional information about the property is required. The certificate is emailed directly to you and simultaneously lodged on the Government's national EPC register, making it immediately verifiable by estate agents, letting agents, and buyers.",
  },
  {
    q: "Do I need an EPC to sell or rent my property?",
    a: "Yes. In England and Wales, an EPC is a legal requirement before marketing a property for sale or rent. Rental properties must achieve a minimum E rating under MEES (Minimum Energy Efficiency Standards) regulations. Failure to comply can result in fines of up to £5,000.",
  },
  {
    q: "What is the minimum EPC rating required for rental properties?",
    a: "Under current MEES regulations, all rental properties in England and Wales must have a minimum EPC rating of E. The Government has proposed raising this to C in the future. We can assess your property and advise on the most cost-effective improvements to meet or exceed the threshold.",
  },
  {
    q: "What areas of Wales do you cover?",
    a: "We cover all of Wales, with particular strength across Carmarthenshire, Pembrokeshire, Ceredigion, Swansea, Bridgend, Cardiff, and surrounding areas. We also serve parts of the South West of England. Contact us to confirm availability for your specific location.",
  },
  {
    q: "Can an EPC help reduce my energy bills?",
    a: "Absolutely. Every EPC includes a detailed recommendations section showing specific improvements — such as loft insulation, cavity wall fill, or a more efficient boiler — along with the potential energy and cost savings each measure could deliver. Our assessors are happy to walk you through these findings.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#071009] border-t border-[#00e676]/[0.06] py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">
            Common <span className="text-[#00e676]">Questions</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            Everything you need to know about EPCs and our assessment service.
          </p>
        </motion.div>

        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#00e676]/22 bg-[#0a1a0c]"
                    : "border-[#00e676]/[0.07] bg-[#0a1a0c]/60 hover:border-[#00e676]/14"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="font-head font-medium text-[#e8f5e9] text-[15px] md:text-base pr-2">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={18} className={isOpen ? "text-[#00e676]" : "text-[#4a7a4d]"} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-[#00e676]/[0.06]">
                        <p className="text-[#81c784] text-sm md:text-base leading-relaxed pt-4">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 rounded-3xl border border-[#00e676]/[0.08] bg-gradient-to-br from-[#0a1a0c] to-[#071009] p-7 md:p-8 text-center"
        >
          <p className="font-head text-lg font-semibold text-[#e8f5e9] mb-2">Still have questions?</p>
          <p className="text-[#81c784] text-sm mb-6">Our team of accredited assessors is happy to help — get in touch today.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#contact" className="btn btn-primary">Book Your EPC</a>
            <a href="tel:+441267241291" className="btn btn-ghost">+44 1267 241 291</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
