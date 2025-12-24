//logo area component

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function LogoArea({ className }: { className?: string }) {
  return (
    <div className={cn("relative bg-dark_vermilion text-white", className)}>
      {/* Curved notch overlapping the black section above */}
      <div className="pointer-events-none absolute -top-8 sm:-top-10 md:-top-12 lg:-top-14 left-1/2 -translate-x-1/2">
        <Image
          src="/footer_notch.svg"
          alt="footer notch"
          height={330}
          width={330}
          className="w-full h-auto"
        />
      </div>

      {/* Centered brand logo */}
      <div className="flex items-center justify-center pt-4 sm:pt-5 md:pt-6 pb-3 sm:pb-3.5 md:pb-4 absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 z-10 left-1/2 -translate-x-1/2">
        <Image
          src="/bancan_kitchen.svg"
          alt="Bancan Kitchen logo"
          width={180}
          height={60}
          className="w-[120px] h-auto sm:w-[140px] md:w-[160px] lg:w-[180px]"
        />
      </div>

      {/* Copyright text */}
      <p className="text-xs font-['Oswald'] sm:text-xs md:text-sm tracking-wide py-4 sm:py-5 md:py-6 lg:py-10 xl:py-12 px-4 sm:px-8 md:px-14 lg:px-16 xl:px-20  text-center sm:text-left">
        Copyright 2025©Bancan Kitchen
      </p>
    </div>
  );
}
