import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Biriyani({ className }: { className?: string }) {
  return (
    <div className={cn("biriyani-scale", className)}>
      <Image
        src="/image/banner/biriyani_midile.png"
        alt="momoch"
        width={503}
        height={503}
        className="rotate-200 w-[250px] h-auto sm:w-[320px] md:w-[400px] lg:w-[450px] xl:w-[503px]"
        loading="lazy"
      />
    </div>
  );
}
