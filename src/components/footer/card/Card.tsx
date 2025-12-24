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
      <div className="h-[2px] min-w-28 max-w-48 bg-white my-3"></div>
      <div className="px-4 py-2 flex flex-col items-start justify-start">
        {children}
      </div>
    </div>
  );
}
