//country category component

import { cn } from "@/lib/utils";
import Burger from "./ui/burger";
import ChikenWings from "./ui/chiken_wings";
import Text from "./ui/text";
import GridImage from "./ui/grid_image";

export default function CountryCategory({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      {/* upper 2 image */}
      <section className="relative flex flex-col items-center justify-between w-full overflow-hidden">
        <Burger className="absolute top-[10%] left-[2%]" />
        <ChikenWings className="absolute top-[10%] right-[2%]" />
      </section>
      {/* bottom 2 country category */}
      <section className="flex flex-col items-center justify-between w-full max-w-7xl mx-auto px-16 py-32">
        <div className="flex items-center justify-between w-full max-w-5xl mx-auto">
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
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
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
