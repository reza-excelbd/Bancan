//card component

import { cn } from "@/lib/utils";

export default function Card({
  className,
  titleTextclassName,
  titleText,
  children = null,
}: {
  className?: string;
  titleTextclassName?: string;
  titleText: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center font-['Oswald']",
        className
      )}
    >
      <h1 className={cn(titleTextclassName)}>{titleText}</h1>
      <div className="h-[2px] min-w-20 sm:min-w-24 md:min-w-28 max-w-32 sm:max-w-40 md:max-w-48 bg-white my-2 sm:my-2.5 md:my-3"></div>
      <div className="px-2 sm:px-3 md:px-4 py-2 flex flex-col items-start justify-start">
        {children}
      </div>
    </div>
  );
}
