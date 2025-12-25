//banner component

import Image from "next/image";
import { cn } from "@/lib/utils";
import Wave from "@/components/landing_banner/ui/wave";

export default function Banner({
  className,
  title,
}: {
  className?: string;
  title: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative w-full h-full bg-deep_teal overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center px-4 sm:px-6 md:px-8">
        {/* MENU Text */}
        <div className="relative z-10 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-['Oswald'] text-white uppercase tracking-wide text-center">
            {title}
          </h1>
        </div>

        {/* Cherry Image - Middle Right Corner */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 z-10">
          <Image
            src="/image/banner/cherry.png"
            alt="cherry"
            width={200}
            height={200}
            className="w-[80px] h-auto sm:w-[100px] md:w-[130px] lg:w-[160px] xl:w-[200px] opacity-90"
          />
        </div>
      </div>
      <Wave />
    </div>
  );
}
