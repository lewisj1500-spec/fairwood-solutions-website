const ITEMS = [
  "EPC Certificates",
  "Domestic Assessments",
  "Commercial EPCs",
  "SAP Calculations",
  "MEES Compliance",
  "New Build EPCs",
  "Retrofit Advice",
  "Accredited Assessors",
  "24hr Turnaround",
  "Government Registered",
  "Wales & South West",
  "Net Zero Ready",
  "Air Tightness Testing",
];

export default function Marquee() {
  const all = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-[#00e676]/[0.07] bg-[#071009] py-4 relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #071009, transparent)" }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #071009, transparent)" }}
      />

      <div className="flex w-max animate-marquee gap-10">
        {all.map((item, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span className="text-[11px] font-head font-semibold uppercase tracking-[0.2em] text-[#4a7a4d] whitespace-nowrap hover:text-[#00e676] transition-colors">
              {item}
            </span>
            <span className="text-[#00e676]/40 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
