//left side images component

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function LeftSideImages({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8",
        className
      )}
    >
      <Image
        src="/image/taste_food/trow_masala.png"
        alt="trow masala"
        width={412}
        height={555}
        className="w-full sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[330px] 2xl:w-[412px] h-auto object-cover rounded-xl sm:rounded-2xl"
        style={{ aspectRatio: "412/555" }}
      />
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
        {/* image 1 */}
        <Image
          src="/image/taste_food/logo_indian_food.png"
          alt="logo indian food"
          width={180}
          height={180}
          className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto aspect-square object-cover rounded-xl sm:rounded-2xl"
        />
        {/* image 2 */}
        <Image
          src="/image/taste_food/arrange_food.png"
          alt="arrange food"
          width={240}
          height={360}
          className="w-[140px] sm:w-[160px] md:w-[190px] lg:w-[220px] xl:w-[240px] h-auto object-cover rounded-xl sm:rounded-2xl"
          style={{ aspectRatio: "240/360" }}
        />
      </div>
    </div>
  );
}
