import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Momoch({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Image
        src="/image/banner/momoch_right_side.png"
        alt="momoch"
        width={403}
        height={403}
      />
    </div>
  );
}
