import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ChikenWings({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Image
        src="/image/country_category/chiken_wings.png"
        alt="chiken wings"
        width={350}
        height={350}
        className="w-[200px] h-auto sm:w-[250px] md:w-[300px] lg:w-[320px] xl:w-[350px]"
        loading="lazy"
      />
    </div>
  );
}
