//right side title component

import { cn } from "@/lib/utils";

export default function RightSideTitle({
  className,
  titleText,
  paragraphText,
  paragraphClassName,
  titleClassName,
}: {
  className?: string;
  titleText: string;
  paragraphText: string;
  paragraphClassName?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn(className)}>
      <h2
        className={cn(
          "text-xl sm:text-2xl md:text-3xl font-bold font-['Oswald'] border-b-2 border-gray-600 pb-2 sm:pb-3 w-full text-black max-w-2xl",
          titleClassName
        )}
      >
        {titleText}
      </h2>
      <p
        className={cn(
          "text-sm sm:text-base text-black py-8 sm:py-12 md:py-14 lg:py-16 max-w-2xl text-justify sm:text-left",
          paragraphClassName
        )}
      >
        {paragraphText}
      </p>
    </div>
  );
}
