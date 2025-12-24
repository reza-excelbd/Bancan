//image shape component

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ImageShape({
  className,
  src,
  alt,
  width,
  height,
  imageClassName,
}: {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  imageClassName?: string;
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("object-cover w-full h-full", imageClassName)}
        priority
      />
    </div>
  );
}
