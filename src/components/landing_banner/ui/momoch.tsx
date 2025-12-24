import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Momoch({ className }: { className?: string }) {
  return (
    <div className={cn("payesh-rotate", className)}>
      <Image
        src="/image/banner/momoch_right_side.png"
        alt="momoch"
        width={403}
        height={403}
        className="w-[200px] h-auto sm:w-[250px] md:w-[320px] lg:w-[360px] xl:w-[403px]"
      />
    </div>
  );
}
