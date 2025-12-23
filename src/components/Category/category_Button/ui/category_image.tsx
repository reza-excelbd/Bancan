import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CategoryImage({
  className,
  src,
  alt,
  width,
  height,
}: {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className={cn(className)}>
      <Image src={src} alt={alt} width={width} height={height} loading="lazy" />
    </div>
  );
}
