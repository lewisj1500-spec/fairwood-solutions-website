"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingEffectProps {
  texts?: string[];
  className?: string;
  rotationInterval?: number;
  typingSpeed?: number;
}

export function TypingEffect({
  texts = ["Building Surveys", "Homebuyer Reports", "Property Valuations"],
  className,
  rotationInterval = 2800,
  typingSpeed = 70,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const currentText = texts[currentTextIndex % texts.length];

  useEffect(() => {
    if (!isInView) return;
    if (charIndex < currentText.length) {
      const t = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, rotationInterval);
      return () => clearTimeout(t);
    }
  }, [charIndex, currentText, isInView, rotationInterval, texts, typingSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative inline-flex items-center justify-start text-left font-head font-bold text-primary",
        className
      )}
    >
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 inline-block h-[0.85em] w-[3px] rounded-sm bg-primary align-middle"
      />
    </div>
  );
}

export default TypingEffect;
