"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function CTA({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <WelcomeText />
      <h1 className="text-white text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-['Oswald'] text-center uppercase mt-2 sm:mt-3 md:mt-4 space-x-0 px-4">
        Your city&apos;s best <br /> food spot
      </h1>
    </div>
  );
}

const WelcomeText = ({ className }: { className?: string }) => {
  const fullText = "welcome to bancan Kitchen";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      // Typing phase: add one character with smooth timing
      // Base speed: 70ms, with slight variation for natural feel
      const baseDelay = 70;
      const variation = Math.random() * 40; // 0-40ms random variation
      const delay = baseDelay + variation;

      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      // Completed phase: wait 2 seconds then reset
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
      }, 2000); // 2 second interval before restarting
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText.length]);

  const displayedText = fullText.slice(0, currentIndex);
  const isTyping = currentIndex < fullText.length;

  return (
    <h1
      className={cn(
        "text-lg sm:text-xl md:text-2xl font-semibold font-['Oswald'] text-center uppercase tracking-widest text-welcome_yellow px-4 transition-opacity duration-75",
        className
      )}
    >
      {displayedText}
      {isTyping && <span className="typing-cursor">|</span>}
    </h1>
  );
};
