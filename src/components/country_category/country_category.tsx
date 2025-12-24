//country category component

import { cn } from "@/lib/utils";
import Burger from "./ui/burger";
import ChikenWings from "./ui/chiken_wings";
import Text from "./ui/text";
import GridImage from "./ui/grid_image";

export default function CountryCategory({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Background images */}
      <section className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Burger className="absolute top-[5%] sm:top-[8%] md:top-[20%] left-[1%] sm:left-[1.5%] md:left-[2%]" />
        <ChikenWings className="absolute top-[5%] sm:top-[8%] md:top-[5%] right-[.5%] sm:right-[0%] md:right-[0%]" />
      </section>

      {/* Content section with text and grid images */}
      <section className="relative z-10 flex flex-col items-center justify-between w-full max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-20 md:py-24 lg:py-32 gap-8 sm:gap-10 md:gap-12">
        <div className="flex items-center justify-between w-full max-w-5xl mx-auto gap-2 sm:gap-4 md:gap-6">
          <Text text="Authentic" />
          <GridImage
            imageSrc="/image/country_category/momos.png"
            altText="grid image"
            width={100}
            height={100}
          />
          <Text text="INDian" />
          <GridImage
            imageSrc="/image/country_category/payesh.png"
            altText="grid image"
            width={100}
            height={100}
          />
          <Text text="Cuisine" />
        </div>
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-2 sm:gap-4 md:gap-6">
          <Text text="Delicious" />
          <GridImage
            imageSrc="/image/country_category/pizza.png"
            altText="grid image"
            width={100}
            height={100}
          />
          <Text text="Mouthwatering" />
          <GridImage
            imageSrc="/image/country_category/fish.png"
            altText="grid image"
            width={100}
            height={100}
          />
          <Text text="Flavorful" />
        </div>
      </section>
    </div>
  );
}
