"use client";

//signature foods component

import { cn } from "@/lib/utils";
import HappyHoursCard from "./card/card";
import SignatureTitle from "./ui/signature_title";
import ArrowButton from "./ui/arrow_button";
import PosterCursol from "./cursol/poster_cursol";
import Image from "next/image";

export default function SignatureFoods({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <section className="relative pt-10 sm:pt-14 md:pt-16 lg:pt-20 overflow-hidden px-4 sm:px-6 md:px-8">
        {/* Background Outline Text */}
        <div className="absolute inset-0 pointer-events-none marquee-track">
          <h1 className="bg-outline-text marquee-item">
            YOUR WILL REMEMBER THIS WITH A INDIAN TASTE <br /> THIS YOUR WILL
            REMEMBER THIS WITH A INDIAN TASTE
          </h1>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8 md:mb-10">
            <SignatureTitle
              blackText="Our Signature "
              redText="Food's"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-black pt-2 sm:pt-3 pb-3 sm:pb-4 md:pb-5"
            />
            {/* Arrow Button Component */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4">
              <ArrowButton
                onClick={() => {}}
                direction="left"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-dark_vermilion rounded-full flex items-center justify-center font-bold text-white hover:scale-110 transition-transform duration-300"
              />
              <ArrowButton
                onClick={() => {}}
                direction="right"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-dark_vermilion rounded-full flex items-center justify-center font-bold text-white hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          {/* rating cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <HappyHoursCard
              imageSrc="/image/signature_food/chiken_curry.png"
              imageAlt="signature food"
              titleText="Chicken Curry"
            />
            <HappyHoursCard
              imageSrc="/image/signature_food/chiken_curry.png"
              imageAlt="signature food"
              titleText="Chicken Curry"
            />
            <HappyHoursCard
              imageSrc="/image/signature_food/chiken_curry.png"
              imageAlt="signature food"
              titleText="Chicken Curry"
            />
            <HappyHoursCard
              imageSrc="/image/signature_food/chiken_curry.png"
              imageAlt="signature food"
              titleText="Chicken Curry"
            />
          </div>

          {/* Poster curasol cards */}
        </div>
      </section>
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/image/signature_food/curasul_background.png"
            alt="carousel background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <PosterCursol />
      </section>
    </div>
  );
}
