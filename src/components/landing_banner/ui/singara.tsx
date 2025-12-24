import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Singara({ className }: { className?: string }) {
  return (
    <div className={cn("singara-float", className)}>
      <Image
        src="/image/banner/Singara.png"
        alt="momoch"
        width={238}
        height={99}
        className="w-[150px] h-auto sm:w-[180px] md:w-[210px] lg:w-[220px] xl:w-[238px]"
      />
    </div>
  );
}
