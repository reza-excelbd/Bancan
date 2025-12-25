//taste food component

import { cn } from "@/lib/utils";
import Title from "./ui/title";
import Background from "./ui/background";
import LeftSideImages from "./ui/left_side_images";
import RightSideTitle from "./ui/right_side_title";

export default function TasteFood({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden",
        className
      )}
    >
      <section className="relative w-full h-full overflow-visible px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 lg:py-20">
        {/* Background Images */}
        <Background className="absolute inset-0 pointer-events-none z-0" />

        {/* Content area - z-10 to appear above background */}
        <div className="relative z-10 w-full">
          {/* Add your content here */}
          <Title
            text="Taste the Indian Food"
            className="uppercase"
            paragraph="About Us"
          />
          <section className="flex flex-col lg:flex-row items-center justify-between pt-6 sm:pt-8 md:pt-10 gap-6 sm:gap-8 md:gap-10">
            <LeftSideImages className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 w-full lg:w-1/2" />
            <RightSideTitle
              titleText="Fresh Dough, Hand-Stretched"
              paragraphText="We are passionate about serving fresh, flavorful dishes crafted with the finest ingredients. Every meal is thoughtfully prepared to deliver a memorable dining experience you'll love."
              paragraphClassName="text-sm sm:text-base text-black opacity-80 font-bold"
              titleClassName="text-xl sm:text-2xl md:text-3xl font-bold font-['Oswald']"
              className="flex flex-col items-start justify-start w-full lg:w-1/2 px-4 sm:px-0"
            />
          </section>
        </div>
      </section>
    </div>
  );
}
