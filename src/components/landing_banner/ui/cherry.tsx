import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Cherry({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Image
        src="/image/banner/cherry.png"
        alt="cherry"
        width={403}
        height={403}
      />
    </div>
  );
}
