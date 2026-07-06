"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ZoomParallaxImage { src: string; alt?: string; }
interface ZoomParallaxProps { images: ZoomParallaxImage[]; }

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 639px)").matches);
  }, []);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 2.2]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 2.6]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3.0]);
  const scales = [scale1, scale2, scale3, scale2, scale3, scale4, scale4];

  const offsets: React.CSSProperties[] = [
    { top: "0", left: "0", width: "100%", height: "100%" },
    { top: "-30vh", left: "5vw", width: "35vw", height: "30vh" },
    { top: "-10vh", left: "-25vw", width: "20vw", height: "45vh" },
    { top: "0", left: "27.5vw", width: "25vw", height: "25vh" },
    { top: "27.5vh", left: "5vw", width: "20vw", height: "25vh" },
    { top: "27.5vh", left: "-22.5vw", width: "30vw", height: "25vh" },
    { top: "22.5vh", left: "25vw", width: "15vw", height: "15vh" },
  ];

  if (isMobile) {
    return (
      <div className="grid grid-cols-2 gap-1.5 px-4 pb-10">
        {images.slice(0, 4).map(({ src, alt }, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt ?? `Property ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={container} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.slice(0, 7).map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];
          const isFirst = index === 0;
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div
                className="relative overflow-hidden"
                style={
                  isFirst
                    ? { width: "100%", height: "100%" }
                    : offsets[index]
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt ?? `Property ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ZoomParallax;
