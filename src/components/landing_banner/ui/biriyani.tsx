import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Biriyani({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Image
        src="/image/banner/biriyani_midile.png"
        alt="momoch"
        width={503}
        height={503}
        className="rotate-200"
        loading="lazy"
      />
    </div>
  );
}
