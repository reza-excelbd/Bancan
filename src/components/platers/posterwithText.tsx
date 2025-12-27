//poster with text component

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function PosterWithText({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full mb-10 sm:mb-10 md:mb-0",
        className
      )}
    >
      {/* Image Section - Left Side */}
      <section className="relative w-full lg:w-1/3 pt-8 sm:pt-12 md:pt-16">
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src="/image/platters/poster.png"
            alt="Royal Feast Non-Vegetarian Platter"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-tr-lg"
          />
        </div>
      </section>

      {/* Text Section - Right Side */}
      <section className="w-full lg:w-2/3 flex flex-col items-center lg:items-start justify-center px-4 sm:px-6  md:px-8 lg:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-['Oswald'] text-black uppercase tracking-wide mb-4 sm:mb-6 text-center lg:text-left">
          Royal Feast{" "}
          <span className="text-dark_vermilion">NON-VEGETARIAN PLATTER</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-['Oswald'] leading-relaxed max-w-2xl text-center lg:text-left ">
          Experience the ultimate Indian non-vegetarian platter, featuring
          crispy onion bhaji, a sizzling assorted tandoori platter with juicy
          chicken leg, smoky chicken tikka, and flavorful hariyali tikka.
          Delight in a rich, aromatic chicken curry and creamy mutter paneer,
          perfectly complemented by soft, buttery naan, fragrant steamed basmati
          rice, and a sweet finale of traditional Indian kheer. A perfect meal
          for lovers of authentic Indian cuisine!
        </p>
      </section>
    </div>
  );
}
