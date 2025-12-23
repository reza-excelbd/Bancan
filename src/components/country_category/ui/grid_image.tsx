//grid image component

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function GridImage({ className, imageSrc, altText, width, height }: { className?: string; imageSrc: string; altText: string; width: number; height: number }) {
  return (
    <div className={cn(className)}>
      <Image src={imageSrc} alt={altText} width={width} height={height} />
    </div>
  );
}