"use client";
import { motion } from "framer-motion";
import { ZoomParallax } from "@/components/ui/zoom-parallax";

const images = [
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&q=80", alt: "Modern architecture building" },
  { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1280&h=720&fit=crop&q=80", alt: "Residential property" },
  { src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&q=80", alt: "Urban property" },
  { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1280&h=720&fit=crop&q=80", alt: "House exterior" },
  { src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1280&h=720&fit=crop&q=80", alt: "Brick house" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1280&h=720&fit=crop&q=80", alt: "Modern houses" },
  { src: "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1280&h=720&fit=crop&q=80", alt: "Architecture detail" },
];

export default function Gallery() {
  return (
    <section className="bg-[#08090e] overflow-hidden">
      {/* Section heading above the parallax */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">
            Properties We <span className="text-primary">Survey</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            <span className="hidden sm:inline">Scroll to explore — from</span>
            <span className="sm:hidden">From</span>
            {" "}historic Welsh farmhouses to modern developments.
          </p>
        </motion.div>
      </div>

      <ZoomParallax images={images} />
    </section>
  );
}
