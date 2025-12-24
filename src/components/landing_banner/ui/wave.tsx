import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Wave({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-transparent w-full z-50 absolute bottom-0 left-0 overflow-hidden",
        className
      )}
    >
      <div className="wave-marquee">
        <Image
          src="/wave.svg"
          alt="wave"
          width={1920}
          height={35}
          className="wave-image"
        />
        <Image
          src="/wave.svg"
          alt="wave"
          width={1920}
          height={35}
          className="wave-image"
        />
      </div>
    </div>
  );
}
