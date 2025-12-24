"use client";

// cursol poster component

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const posters = [
  "/image/signature_food/poster-2.png",
  "/image/signature_food/poster-1.png",
];

export default function PosterCursol({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [previousPosters, setPreviousPosters] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get current 2 posters to display
  const getVisiblePosters = () => {
    const visible: string[] = [];
    const postersToShow = 2; // Always show 2 posters at a time

    // Handle case when there are fewer posters than needed
    if (posters.length === 0) {
      return visible;
    }

    // If we have only 1 poster, show it twice
    if (posters.length === 1) {
      visible.push(posters[0]);
      visible.push(posters[0]);
      return visible;
    }

    // Show 2 posters starting from currentIndex
    for (let i = 0; i < postersToShow; i++) {
      const index = (currentIndex + i) % posters.length;
      visible.push(posters[index]);
    }

    return visible;
  };

  const visiblePosters = getVisiblePosters();

  // Debug: Log visible posters
  useEffect(() => {
    console.log("Visible posters:", visiblePosters);
    console.log("Current index:", currentIndex);
  }, [visiblePosters, currentIndex]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      // Get current posters before updating
      const current = getVisiblePosters();
      setPreviousPosters(current);
      setAnimationKey((prev) => prev + 1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 4000); // Animation duration
    }, 8000); // Change slide every 3 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(
        "relative w-full mt-6 sm:mt-8 md:mt-10 overflow-hidden",
        className
      )}
    >
      {/* Carousel Content */}
      <div className="relative z-10 container mx-auto max-w-7xl py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 relative">
          {visiblePosters.map((poster, index) => (
            <div
              key={`container-${index}`}
              className="relative overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-[320px]"
            >
              {/* Previous poster (fading out) */}
              {isTransitioning && previousPosters[index] && (
                <button
                  key={`prev-${previousPosters[index]}-${index}-${animationKey}`}
                  onClick={() => {
                    console.log(`Clicked poster: ${previousPosters[index]}`);
                  }}
                  className={cn(
                    "absolute inset-0 rounded-lg overflow-hidden shadow-lg cursor-pointer",
                    "poster-exit",
                    "hover:scale-105 transition-transform duration-300 ease-out "
                  )}
                  style={{
                    minHeight: "240px",
                  }}
                >
                  <Image
                    src={previousPosters[index]}
                    alt={`Previous Poster ${index + 1}`}
                    fill
                    sizes="50vw"
                    className="object-cover rounded-lg"
                  />
                </button>
              )}

              {/* New poster (sliding in on top) */}
              <button
                key={`${poster}-${currentIndex}-${index}-${animationKey}`}
                onClick={() => {
                  console.log(`Clicked poster: ${poster}`);
                }}
                className={cn(
                  "absolute inset-0 rounded-lg overflow-hidden shadow-lg cursor-pointer",
                  isTransitioning &&
                    (index === 0 ? "poster-enter-left" : "poster-enter-right"),
                  !isTransitioning && "opacity-100",
                  "hover:scale-105 transition-transform duration-300 ease-out"
                )}
                style={{
                  minHeight: "240px",
                }}
              >
                <Image
                  src={poster}
                  alt={`Poster ${index + 1}`}
                  fill
                  sizes="50vw"
                  className="object-cover rounded-lg"
                  priority={index === 0}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
