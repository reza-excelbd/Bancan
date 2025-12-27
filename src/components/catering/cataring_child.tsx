//catering child component

import CateringCard from "./ui/cateringCard";
import { cn } from "@/lib/utils";

type CateringChildProps = {
  className?: string;
  title: string;
  highlightText?: string; // Text to highlight in red (e.g., "DELIGHTS")
  optionA: {
    image: string;
    price: number;
    description: string;
  };
  optionB: {
    image: string;
    price: number;
    description: string;
  };
  callUsButtonText?: string;
};

export default function CateringChild({
  className,
  title,
  highlightText,
  optionA,
  optionB,
  callUsButtonText = "CALL US",
}: CateringChildProps) {
  // Split title to highlight specific text
  const titleParts = highlightText ? title.split(highlightText) : [title, ""];

  return (
    <div
      className={cn(
        "w-full flex flex-col items-center mb-12 sm:mb-16",
        className
      )}
    >
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Oswald'] text-black uppercase tracking-wide text-center mb-8 sm:mb-10 md:mb-12">
        {titleParts[0]}
        {highlightText && (
          <span className="text-dark_vermilion space-x-1.5">
            {" "}
            {highlightText}
          </span>
        )}
        {titleParts[1]}
      </h2>

      {/* Cards Container */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-10">
        {/* Option A Card */}
        <CateringCard
          image={optionA.image}
          optionLabel="OPTION A"
          price={optionA.price}
          description={optionA.description}
          className="w-full max-w-5xl"
        />

        {/* Option B Card */}
        <CateringCard
          image={optionB.image}
          optionLabel="OPTION B"
          price={optionB.price}
          description={optionB.description}
          className="w-full max-w-5xl"
        />
      </div>

      {/* Call Us Button */}
      <button className="bg-dark_vermilion text-white font-['Oswald'] font-bold uppercase tracking-wide px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-lg hover:opacity-90 transition-opacity shadow-lg">
        {callUsButtonText}
      </button>
    </div>
  );
}
