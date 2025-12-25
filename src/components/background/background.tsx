//background component

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BackgroundProps {
  className?: string;
  children: ReactNode;
}

export default function Background({
  className = "",
  children,
}: BackgroundProps) {
  return (
    <div className={cn("bg-white w-full relative z-10", className)}>
      {/* Background Images Container - Fixed positioned, stays in place while scrolling */}
      <div className="fixed inset-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
        {/* Left Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/3 sm:-translate-x-1/4 md:-translate-x-1/5 lg:-translate-x-1/6">
          <Image
            src="/image/background_image/left_arrow.png"
            alt="left arrow"
            width={200}
            height={200}
            className="w-[150px] h-auto sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[250px] opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-70"
          />
        </div>

        {/* Right Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/3 sm:translate-x-1/4 md:translate-x-1/5 lg:translate-x-1/6">
          <Image
            src="/image/background_image/rigt_arror.png"
            alt="right arrow"
            width={200}
            height={200}
            className="w-[150px] h-auto sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[250px] opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-70"
          />
        </div>

        {/* Burger - Top Left */}
        <div className="absolute top-[10%] left-[5%] sm:left-[8%] md:left-[10%]">
          <Image
            src="/image/background_image/burger.png"
            alt="burger"
            width={200}
            height={200}
            className="w-[100px] h-auto sm:w-[130px] md:w-[160px] lg:w-[180px] xl:w-[200px] opacity-30 sm:opacity-40 md:opacity-50"
          />
        </div>

        {/* Chicken Wings - Top Right */}
        <div className="absolute top-[8%] right-[5%] sm:right-[8%] md:right-[10%]">
          <Image
            src="/image/background_image/chikenwings.png"
            alt="chicken wings"
            width={200}
            height={200}
            className="w-[100px] h-auto sm:w-[130px] md:w-[160px] lg:w-[180px] xl:w-[200px] opacity-30 sm:opacity-40 md:opacity-50"
          />
        </div>

        {/* Pizza and Momos - Bottom Left */}
        <div className="absolute bottom-[10%] left-[5%] sm:left-[8%] md:left-[10%]">
          <Image
            src="/image/background_image/pizzaAndmomos.png"
            alt="pizza and momos"
            width={200}
            height={200}
            className="w-[100px] h-auto sm:w-[130px] md:w-[160px] lg:w-[180px] xl:w-[200px] opacity-30 sm:opacity-40 md:opacity-50"
          />
        </div>
      </div>

      {/* Content Container - Relative positioning for content */}
      <div className="relative z-10 w-full min-h-full">{children}</div>
    </div>
  );
}
