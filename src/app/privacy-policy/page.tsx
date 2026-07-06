import type { Metadata } from "next";
import Link from "next/link";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Fairwood Solutions — how we collect, use and protect your personal data.",
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

export default function PrivacyPolicy() {
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
          <span className="text-[#4a7a4d] text-sm ml-2">/ Privacy Policy</span>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00e676]/25 bg-[#00e676]/06 text-[#00e676] text-[11px] font-head font-semibold uppercase tracking-[0.15em] mb-6">
            Legal
          </span>
          <h1 className="font-head text-4xl md:text-5xl font-bold text-[#e8f5e9] mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-[#4a7a4d] text-sm">Last updated: April 2026</p>
        </div>

        <Section title="1. Who We Are">
          <p>
            Fairwood Solutions is a trading name of <strong className="text-[#e8f5e9]">Fairwood Residential Estates Ltd</strong>, registered in England &amp; Wales (Company No. 06116143). Fairwood Survey, Fairwood Energy and Fairwood Solutions are all trading names of Fairwood Residential Estates Ltd.
          </p>
          <p>
            Our registered office address is: <strong className="text-[#e8f5e9]">Prenteg, Heol Smyrna, Llangain, Carmarthen, SA33 5AD</strong>.
          </p>
          <p>
            We are the data controller for the personal information we collect through this website. If you have any questions about this policy or how we handle your data, please contact us at{" "}
            <a href="mailto:Lloyd@FairwoodSolutions.co.uk" className="text-[#00e676] hover:underline">
              Lloyd@FairwoodSolutions.co.uk
            </a>{" "}
            or call <a href="tel:+441267241291" className="text-[#00e676] hover:underline">+44 1267 241 291</a>.
          </p>
        </Section>

        <Section title="2. What Data We Collect">
          <p>When you submit an enquiry through our contact form, we collect:</p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-[#81c784]">
            <li>First and last name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Property or service details you include in your message</li>
          </ul>
          <p>We do not collect payment card details through this website.</p>
        </Section>

        <Section title="3. Why We Collect It & Our Lawful Basis">
          <p>We use the information you provide to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Respond to your enquiry and confirm your assessment booking</li>
            <li>Carry out and deliver your EPC or other assessment service</li>
            <li>Lodge your certificate on the national EPC register (a legal requirement under the Energy Performance of Buildings Regulations)</li>
            <li>Contact you regarding your assessment or follow-up advice</li>
          </ul>
          <p>
            Our lawful basis for processing is <strong className="text-[#e8f5e9]">contract performance</strong> (to carry out the service you have requested) and <strong className="text-[#e8f5e9]">legitimate interests</strong> (to respond to enquiries and run our business).
          </p>
        </Section>

        <Section title="4. How Long We Keep Your Data">
          <p>
            We retain your personal information for up to <strong className="text-[#e8f5e9]">7 years</strong> from the date of your assessment or last contact with us. This is to comply with HMRC record-keeping requirements and to maintain records of lodged certificates.
          </p>
          <p>
            Enquiries that do not result in a booking are retained for up to <strong className="text-[#e8f5e9]">12 months</strong> before being deleted.
          </p>
        </Section>

        <Section title="5. Who We Share Your Data With">
          <p>We do not sell or rent your personal data. We may share it with:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong className="text-[#e8f5e9]">Netlify</strong> — our website host, which processes contact form submissions on our behalf. Netlify is GDPR-compliant and acts as a data processor under a data processing agreement.
            </li>
            <li>
              <strong className="text-[#e8f5e9]">The national EPC register</strong> (Landmark Information Group / Ministry of Housing) — EPC lodgement is a legal requirement. Your property address and certificate data will be lodged on the publicly searchable national register as required by law.
            </li>
            <li>
              <strong className="text-[#e8f5e9]">Our accreditation scheme</strong> — we may be required to share assessment records with our accreditation body for audit purposes.
            </li>
          </ul>
        </Section>

        <Section title="6. Cookies & Analytics">
          <p>
            This website does not use analytics software or advertising cookies. We do not track your behaviour across other websites.
          </p>
          <p>
            Our hosting provider (Netlify) may set technical cookies necessary for the website to function. These do not identify you personally.
          </p>
        </Section>

        <Section title="7. Your Rights Under UK GDPR">
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong className="text-[#e8f5e9]">Access</strong> — request a copy of the personal data we hold about you</li>
            <li><strong className="text-[#e8f5e9]">Rectification</strong> — ask us to correct inaccurate data</li>
            <li><strong className="text-[#e8f5e9]">Erasure</strong> — request deletion of your data (subject to legal retention obligations)</li>
            <li><strong className="text-[#e8f5e9]">Restriction</strong> — ask us to limit how we use your data</li>
            <li><strong className="text-[#e8f5e9]">Objection</strong> — object to processing based on legitimate interests</li>
            <li><strong className="text-[#e8f5e9]">Portability</strong> — receive your data in a structured, machine-readable format</li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href="mailto:Lloyd@FairwoodSolutions.co.uk" className="text-[#00e676] hover:underline">
              Lloyd@FairwoodSolutions.co.uk
            </a>. We will respond within 30 days.
          </p>
          <p>
            You also have the right to lodge a complaint with the{" "}
            <strong className="text-[#e8f5e9]">Information Commissioner&apos;s Office (ICO)</strong> at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#00e676] hover:underline">
              ico.org.uk
            </a>{" "}
            or by calling 0303 123 1113.
          </p>
        </Section>

        <Section title="8. Data Security">
          <p>
            We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss or misuse. Our website is served over HTTPS and contact form data is transmitted securely.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this privacy policy from time to time. The date at the top of this page will reflect the most recent revision. Continued use of our website after any changes constitutes acceptance of the updated policy.
          </p>
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
