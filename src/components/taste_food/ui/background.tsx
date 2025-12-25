//background component

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Background({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      {/* Upper left image */}
      <div className="absolute top-10 left-0 -translate-x-[20%] -translate-y-[15%]">
        <Image
          src="/image/taste_food/image.png"
          alt="taste food"
          width={200}
          height={200}
          className="w-[100px] h-auto sm:w-[130px] md:w-[160px] lg:w-[190px] xl:w-[220px] opacity-80 sm:opacity-85 md:opacity-90 lg:opacity-100"
        />
      </div>

      {/* Upper right image */}
      <div className="absolute top-10 right-10 translate-x-[10%] -translate-y-[10%]">
        <Image
          src="/image/taste_food/leaf.png"
          alt="leaf"
          width={200}
          height={200}
          className="w-[60px] h-auto sm:w-[80px] md:w-[100px] lg:w-[130px] xl:w-[160px] 2xl:w-[180px] opacity-80 sm:opacity-85 md:opacity-90 lg:opacity-100"
        />
      </div>

      {/* Lower right image - extending off page */}
      <div className="absolute bottom-0 right-0 translate-x-[25%] translate-y-[15%]">
        <Image
          src="/image/taste_food/orange.png"
          alt="orange"
          width={120}
          height={120}
          className="w-[70px] h-auto sm:w-[85px] md:w-[100px] lg:w-[110px] xl:w-[120px] opacity-80 sm:opacity-85 md:opacity-90 lg:opacity-100"
        />
      </div>
    </div>
  );
}
