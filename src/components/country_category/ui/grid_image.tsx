//grid image component

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function GridImage({ className, imageSrc, altText, width, height }: { className?: string; imageSrc: string; altText: string; width: number; height: number }) {
  return (
    <div className={cn(className)}>
      <Image
        src={imageSrc}
        alt={altText}
        width={width}
        height={height}
        className="w-[60px] h-auto sm:w-[70px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
      />
    </div>
  );
}