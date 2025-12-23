import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Payesh({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Image
        src="/image/banner/payesh_left_down.png"
        alt="payesh"
        width={403}
        height={403}
      />
    </div>
  );
}
