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
      <section className="relative   pt-20  overflow-hidden">
        {/* Background Outline Text */}
        <div className="absolute inset-0 pointer-events-none marquee-track">
          <h1 className="bg-outline-text marquee-item">
            YOUR WILL REMEMBER THIS WITH A INDIAN TASTE <br /> THIS YOUR WILL
            REMEMBER THIS WITH A INDIAN TASTE
          </h1>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <SignatureTitle
              blackText="Our Signature "
              redText="Food's"
              className="text-6xl font-bold uppercase text-black pt-3 pb-5"
            />
            {/* Arrow Button Component */}
            <div className="flex items-center justify-center space-x-4">
              <ArrowButton
                onClick={() => {}}
                direction="left"
                className="w-10 h-10 bg-dark_vermilion rounded-full flex items-center justify-center font-bold text-white"
              />
              <ArrowButton
                onClick={() => {}}
                direction="right"
                className="w-10 h-10 bg-dark_vermilion rounded-full flex items-center justify-center font-bold text-white"
              />
            </div>
          </div>
          {/* rating cards */}
          <div className="grid grid-cols-4 space-x-10">
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
      <section className="relative overflow-hidden ">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/image/signature_food/curasul_background.png"
            alt="carousel background"
            fill
            sizes="100%"
            className="object-cover"
            priority
          />
        </div>

        <PosterCursol />
      </section>
     
    </div>
  );
}
