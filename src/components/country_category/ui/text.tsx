//text component

import { cn } from "@/lib/utils";

export default function Text({
  className,
  text,
}: {
  className?: string;
  text: string;
}) {
  return (
    <div className={cn(className)}>
      <p className=" text-center  text-6xl font-semibold font-['Barlow_Condensed'] uppercase tracking-widest text-outline opacity-60 hover:opacity-100 transition-opacity duration-300 ">
        {text}
      </p>
    </div>
  );
}
