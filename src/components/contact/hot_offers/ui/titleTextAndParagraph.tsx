//title text and paragraph component

import { cn } from "@/lib/utils";

export default function TitleTextAndParagraph({
  className,
  firstTitleText,
  redText,
  lastTitleText,
  paragraph,
  titleTextClassName,
  paragraphClassName,
}: {
  className?: string;
  firstTitleText: string;
  redText: string;
  lastTitleText: string;
  paragraph: string;
  titleTextClassName?: string;
  paragraphClassName?: string;
}) {
  return (
    <div className={className}>
      <h1
        className={cn(
          "text-4xl font-bold font-['Oswald'] uppercase text-center text-black",
          titleTextClassName
        )}
      >
        {firstTitleText} <span className="text-dark_vermilion">{redText}</span>{" "}
        {lastTitleText}{" "}
      </h1>
      <p
        className={cn(
          "text-sm text-gray-500 text-center py-10",
          paragraphClassName
        )}
      >
        {paragraph}
      </p>
    </div>
  );
}
