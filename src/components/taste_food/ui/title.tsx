//title component

import { cn } from "@/lib/utils";

export default function Title({
  className,
  text,
  titleClassName,
  paragraphClassName,
  paragraph,
}: {
  className?: string;
  text: string;
  titleClassName?: string;
  paragraphClassName?: string;
  paragraph: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-4 sm:px-0",
        className
      )}
    >
      <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 pb-3 sm:pb-4 md:pb-5">
        <div className="bg-orange-400 w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16 h-0.5 sm:h-1 rounded-full"></div>
        <p
          className={cn(
            "text-xs sm:text-sm text-dark_vermilion font-['Oswald'] uppercase font-bold",
            paragraphClassName
          )}
        >
          {paragraph}
        </p>
        <div className="bg-orange-400 w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16 h-0.5 sm:h-1 rounded-full"></div>
      </div>

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Oswald'] text-black text-center",
          titleClassName
        )}
      >
        {text}
      </h2>
    </div>
  );
}
