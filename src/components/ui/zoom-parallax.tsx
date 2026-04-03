"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface ZoomParallaxImage { src: string; alt?: string; }
interface ZoomParallaxProps { images: ZoomParallaxImage[]; }

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  const offsets: React.CSSProperties[] = [
    { top: "0", left: "0", width: "100%", height: "100%" },
    { top: "-30vh", left: "5vw", width: "35vw", height: "30vh" },
    { top: "-10vh", left: "-25vw", width: "20vw", height: "45vh" },
    { top: "0", left: "27.5vw", width: "25vw", height: "25vh" },
    { top: "27.5vh", left: "5vw", width: "20vw", height: "25vh" },
    { top: "27.5vh", left: "-22.5vw", width: "30vw", height: "25vh" },
    { top: "22.5vh", left: "25vw", width: "15vw", height: "15vh" },
  ];

  return (
    <div ref={container} className="relative h-[300vh]">
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
