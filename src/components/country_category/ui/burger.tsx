import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Burger({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Image
        src="/image/country_category/burger.png"
        alt="burger"
        width={100}
        height={100}
        className="w-[60px] h-auto sm:w-[75px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
      />
    </div>
  );
}
