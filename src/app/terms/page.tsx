import type { Metadata } from "next";
import Link from "next/link";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Fairwood Solutions EPC assessment services.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-head text-xl font-bold text-[#e8f5e9] mb-4 pb-3 border-b border-[#00e676]/[0.08]">
      {title}
    </h2>
    <div className="space-y-3 text-[#81c784] text-[15px] leading-relaxed">
      {children}
    </div>
  </div>
);

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#030804]">
      {/* Nav */}
      <nav className="border-b border-[#00e676]/[0.08] bg-[#030804]/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-[#00e676] rounded-lg flex items-center justify-center">
              <Zap size={16} className="text-[#030804]" fill="currentColor" />
            </div>
            <span className="font-head font-semibold text-[16px] text-[#e8f5e9]">
              Fairwood <span className="text-[#00e676]">Solutions</span>
            </span>
          </Link>
          <span className="text-[#4a7a4d] text-sm ml-2">/ Terms &amp; Conditions</span>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00e676]/25 bg-[#00e676]/06 text-[#00e676] text-[11px] font-head font-semibold uppercase tracking-[0.15em] mb-6">
            Legal
          </span>
          <h1 className="font-head text-4xl md:text-5xl font-bold text-[#e8f5e9] mb-4 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-[#4a7a4d] text-sm">Last updated: April 2026</p>
        </div>

        <Section title="1. About Us">
          <p>
            This website is operated by <strong className="text-[#e8f5e9]">Fairwood Residential Estates Ltd</strong>, trading as Fairwood Solutions. Fairwood Survey, Fairwood Energy and Fairwood Solutions are all trading names of Fairwood Residential Estates Ltd, registered in England &amp; Wales (Company No. 06116143).
          </p>
          <p>
            Registered office: <strong className="text-[#e8f5e9]">Prenteg, Heol Smyrna, Llangain, Carmarthen, SA33 5AD</strong>. Throughout these terms, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refers to Fairwood Residential Estates Ltd.
          </p>
          <p>
            By using this website or engaging our services, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use this site or our services.
          </p>
        </Section>

        <Section title="2. Our Services">
          <p>We provide government-accredited energy assessment services including:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Domestic Energy Performance Certificates (EPC)</li>
            <li>Commercial Energy Performance Certificates</li>
            <li>SAP Calculations for new builds</li>
            <li>MEES Compliance assessments</li>
            <li>Air Tightness Testing</li>
          </ul>
          <p>
            All assessments are carried out by accredited Domestic Energy Assessors (DEAs) and lodged on the national EPC register as required by the Energy Performance of Buildings Regulations.
          </p>
          <p>
            An EPC is an energy efficiency assessment only. It is not a structural survey, building survey, or guarantee of the condition of a property. You should not rely solely on an EPC when making property decisions.
          </p>
        </Section>

        <Section title="3. Bookings & Payment">
          <p>
            Bookings can be made by telephone, email, or through the contact form on this website. A booking is confirmed once we have acknowledged it in writing (by email or phone).
          </p>
          <p><strong className="text-[#e8f5e9]">Payment methods accepted:</strong> Bank transfer, credit card, debit card, and cash. Payment is due on or before the date of the assessment unless otherwise agreed in writing.</p>
          <p>
            Prices are subject to change without notice. The price quoted at the time of booking will be honoured for that booking. We reserve the right to decline any booking at our discretion.
          </p>
          <p><strong className="text-[#e8f5e9]">Delivery of service:</strong> Assessments are conducted on-site at your property. Certificates are delivered electronically by email, typically within 24 hours of the assessment being completed.</p>
        </Section>

        <Section title="4. Cancellations & Refunds">
          <p>
            If you need to cancel or reschedule your assessment, please contact us as soon as possible at{" "}
            <a href="mailto:Lloyd@FairwoodSolutions.co.uk" className="text-[#00e676] hover:underline">
              Lloyd@FairwoodSolutions.co.uk
            </a>{" "}
            or call <a href="tel:+441267241291" className="text-[#00e676] hover:underline">+44 1267 241 291</a>.
          </p>
          <p>
            For our full Refunds &amp; Returns Policy, please contact us directly. We aim to resolve any issues fairly and promptly.
          </p>
        </Section>

        <Section title="5. Your Responsibilities">
          <p>To allow us to carry out your assessment, you agree to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Provide accurate information about the property at the time of booking</li>
            <li>Ensure safe and reasonable access to all areas of the property on the day of assessment</li>
            <li>Ensure that any occupants or tenants are made aware of the assessment</li>
          </ul>
          <p>
            If access is not available on the agreed date, we reserve the right to charge a call-out fee.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            All content on this website — including text, images, logos, designs, and graphics — is the intellectual property of Fairwood Residential Estates Ltd and may not be reproduced, distributed, or used without our express written permission.
          </p>
          <p>
            EPC certificates issued are lodged on the publicly searchable national register. The data within them is subject to the terms of the national register.
          </p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>
            We do not guarantee that this website will be available at all times or free from errors. Information on this site is provided for general guidance only.
          </p>
          <p>
            To the fullest extent permitted by law, Fairwood Residential Estates Ltd shall not be liable for any indirect, incidental, or consequential loss arising from your use of this website or our services. Our total liability to you shall not exceed the amount paid by you for the relevant service.
          </p>
          <p>
            Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under English law.
          </p>
        </Section>

        <Section title="8. Third-Party Links">
          <p>
            This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of those sites and do not endorse them. You access third-party sites at your own risk.
          </p>
        </Section>

        <Section title="9. Privacy">
          <p>
            Your use of this website and our services is also governed by our{" "}
            <Link href="/privacy-policy" className="text-[#00e676] hover:underline">
              Privacy Policy
            </Link>
            , which is incorporated into these terms by reference.
          </p>
        </Section>

        <Section title="10. Governing Law">
          <p>
            These Terms &amp; Conditions are governed by and construed in accordance with the laws of <strong className="text-[#e8f5e9]">England and Wales</strong>. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </Section>

        <Section title="11. Changes to These Terms">
          <p>
            We reserve the right to update these Terms &amp; Conditions at any time. The date at the top of this page reflects the most recent revision. Continued use of this website after any changes constitutes your acceptance of the updated terms.
          </p>
        </Section>

        <Section title="12. Contact">
          <p>
            Questions about these Terms &amp; Conditions should be directed to:
          </p>
          <ul className="list-none space-y-1 pl-2">
            <li><strong className="text-[#e8f5e9]">Email:</strong>{" "}
              <a href="mailto:Lloyd@FairwoodSolutions.co.uk" className="text-[#00e676] hover:underline">
                Lloyd@FairwoodSolutions.co.uk
              </a>
            </li>
            <li><strong className="text-[#e8f5e9]">Phone:</strong>{" "}
              <a href="tel:+441267241291" className="text-[#00e676] hover:underline">
                +44 1267 241 291
              </a>
            </li>
            <li><strong className="text-[#e8f5e9]">Post:</strong> Prenteg, Heol Smyrna, Llangain, Carmarthen, SA33 5AD</li>
          </ul>
        </Section>

        <div className="mt-12 pt-8 border-t border-[#00e676]/[0.08] flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-[#4a7a4d] text-sm">
            Fairwood Residential Estates Ltd · Company No. 06116143 · England &amp; Wales
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#00e676] text-sm font-head font-medium hover:underline underline-offset-4"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
