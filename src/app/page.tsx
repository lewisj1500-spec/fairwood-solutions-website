import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import EPCRating from "@/components/EPCRating";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CoverageMap from "@/components/CoverageMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <EPCRating />
      <About />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CoverageMap />
      <Contact />
      <Footer />
    </main>
  );
}
