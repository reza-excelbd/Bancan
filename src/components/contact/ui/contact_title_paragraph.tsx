//contact title paragraph component

import { cn } from "@/lib/utils";

export default function ContactTitleParagraph({
  className,
  titleTextBlack,
  titleTextRed,
  paragraph,
  titleTextClassName,
  paragraphClassName,
}: {
  className?: string;
  titleTextBlack: string;
  titleTextRed: string;
  paragraph: string;
  titleTextClassName?: string;
  paragraphClassName?: string;
}) {
  return (
    <div className={cn(className)}>
      <h2 className={cn("text-2xl font-bold", titleTextClassName)}>
        {titleTextBlack}{" "}
        <span className="text-dark_vermilion">{titleTextRed}</span>
      </h2>
      <p className={cn("text-base text-gray-500", paragraphClassName)}>
        {paragraph}
      </p>
    </div>
  );
}
