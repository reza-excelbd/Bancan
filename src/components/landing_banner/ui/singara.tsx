import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Singara({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Image
        src="/image/banner/Singara.png"
        alt="momoch"
        width={238}
        height={99}
      />
    </div>
  );
}
