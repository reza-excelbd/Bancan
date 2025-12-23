//card image component

import { cn } from "@/lib/utils";
import Image from "next/image";
import StarRating from "./rating";
export default function CardImage({
  className,
  src,
  alt,
  width,
  height,
}: {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className={cn(className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="object-cover rounded-full"
      />
    </div>
  );
}
