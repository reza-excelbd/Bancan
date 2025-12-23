//signature foods component

import { cn } from "@/lib/utils";
import HappyHoursCard from "./card/card";
import StarRating from "./ui/rating";
import Title from "./ui/title";

export default function SignatureFoods({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <section className="relative  bg-[#faf9f4] py-20 overflow-hidden">
        {/* Background Outline Text */}
        <div className="absolute inset-0 pointer-events-none">
          <h1 className="bg-outline-text">
            YOUR WILL REMEMBER THIS WITH A INDIAN TASTE <br /> THIS YOUR WILL
            REMEMBER THIS WITH A INDIAN TASTE
          </h1>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-4 gap-2">
            <HappyHoursCard />
            <HappyHoursCard />
            <HappyHoursCard />
            <HappyHoursCard />
          </div>
        </div>
      </section>
    </div>
  );
}
