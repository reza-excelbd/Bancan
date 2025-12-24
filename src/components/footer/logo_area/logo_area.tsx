//logo area component

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function LogoArea({ className }: { className?: string }) {
  return (
    <div className={cn("relative  bg-dark_vermilion text-white", className)}>
      {/* Curved notch overlapping the black section above */}
      <div className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2">
        <Image
          src="/footer_notch.svg"
          alt="footer notch"
          width={320}
          height={320}
          className="w-full h-full"
        />
      </div>

      {/* Centered brand logo */}
      <div className="flex items-center justify-center pt-6 pb-4  absolute -top-12 z-10 left-1/2 -translate-x-1/2">
        <Image
          src="/bancan_kitchen.svg"
          alt="Bancan Kitchen logo"
          width={180}
          height={60}
        />
      </div>

      {/* Copyright text */}
      <p className="text-xs font-['Oswald'] md:text-sm tracking-wide py-6 px-14">
        Copyright 2025©Bancan Kitchen
      </p>
    </div>
  );
}
