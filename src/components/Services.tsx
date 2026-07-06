import { VerticalTabs } from "@/components/ui/vertical-tabs";

export default function Services() {
  return (
    <section id="services" className="relative bg-[#030804] py-12 border-t border-[#00e676]/[0.06] overflow-hidden">
      {/* Energy grid */}
      <div className="absolute inset-0 energy-grid pointer-events-none opacity-60" />

      {/* Ambient glows */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "rgba(0,230,118,0.04)", filter: "blur(120px)" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "rgba(0,188,212,0.03)", filter: "blur(100px)" }}
      />

      <div className="relative z-10">
        <VerticalTabs />
      </div>
    </section>
  );
}
