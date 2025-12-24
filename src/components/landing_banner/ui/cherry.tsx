import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Cherry({ className }: { className?: string }) {
  return (
    <div className={cn("cherry-circle-wave", className)}>
      <Image
        src="/image/banner/cherry.png"
        alt="cherry"
        width={403}
        height={403}
        className="w-[200px] h-auto sm:w-[250px] md:w-[320px] lg:w-[360px] xl:w-[403px]"
      />
    </div>
  );
}
