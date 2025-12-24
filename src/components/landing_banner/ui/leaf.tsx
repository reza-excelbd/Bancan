import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Leaf({ className }: { className?: string }) {
  return (
    <div className={cn("leaf-circle-float", className)}>
      <Image
        src="/image/banner/bg_green_leaf.png"
        alt="leaf"
        width={420}
        height={420}
        className="w-[250px] h-auto sm:w-[300px] md:w-[360px] lg:w-[390px] xl:w-[420px]"
        loading="lazy"
      />
    </div>
  );
}
