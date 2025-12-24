//title component

import { cn } from "@/lib/utils";

export default function SignatureTitle({
  className,
  blackText,
  redText,
}: {
  className?: string;
  blackText: string;
  redText: string;
}) {
  return (
    <div className={cn(className)}>
      <div className="flex items-center justify-start space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-11">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold font-['Oswald'] uppercase tracking-tighter text-dark_vermilion">
          Our Delicious Menu
        </p>
        <div className="bg-orange-400 w-8 sm:w-10 md:w-12 lg:w-16 h-0.5 sm:h-1 rounded-full"></div>
      </div>

      <h2
        className={cn(
          "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-['Oswald']",
          className
        )}
      >
        {blackText} <span className="text-dark_vermilion">{redText}</span>
      </h2>
    </div>
  );
}
