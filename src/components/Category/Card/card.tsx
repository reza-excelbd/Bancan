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
        "group flex items-stretch overflow-hidden rounded-2xl bg-white",
        className
      )}
    >
      <div className="h-full w-56 shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={272}
          height={232}
          className="w-full h-full  rounded-l-2xl"
        />
      </div>
      <div className="flex-1 px-8  flex flex-col justify-center">
        <CardTitle text={titleText} className="mb-4 group-hover:text-white" />
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
  return <Text text={text} className={cn(className, "text-3xl font-bold")} />;
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
        "text-sm font-medium text-gray-500 tracking-wide max-w-2xl"
      )}
    >
      {text}
    </p>
  );
};
