//card component

import Image from "next/image";
import Text from "../ui/text";
import { cn } from "@/lib/utils";

export default function Card({
  className,
  titleText,
  paragraphText,
  imageSrc,
  imageAlt,
}: {
  className?: string;
  titleText: string;
  paragraphText: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div
      className={cn(
        "group flex flex-col sm:flex-row items-stretch overflow-hidden rounded-2xl bg-white",
        className
      )}
    >
      <div className="h-48 sm:h-full w-full sm:w-40 md:w-48 lg:w-56 shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={272}
          height={232}
          className="w-full h-full rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none object-cover"
        />
      </div>
      <div className="flex-1 px-4 sm:px-6 md:px-8 py-4 sm:py-0 flex flex-col justify-center">
        <CardTitle
          text={titleText}
          className="mb-2 sm:mb-3 md:mb-4 group-hover:text-white"
        />
        <CardParagraph
          text={paragraphText}
          className="group-hover:text-white"
        />
      </div>
    </div>
  );
}

//card title component
const CardTitle = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => {
  return (
    <Text
      text={text}
      className={cn(className, "text-xl sm:text-2xl md:text-3xl font-bold")}
    />
  );
};

//card paragraph component
const CardParagraph = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => {
  return (
    <p
      className={cn(
        className,
        "text-xs sm:text-sm font-medium text-gray-500 tracking-wide max-w-2xl line-clamp-2 sm:line-clamp-3"
      )}
    >
      {text}
    </p>
  );
};
