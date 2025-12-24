//happy hours card component

import { cn } from "@/lib/utils";
import CardImage from "../ui/card_image";
import StarRating from "../ui/rating";
import Title from "../ui/title";

export default function HappyHoursCard({
  className,
  imageSrc,
  imageAlt,
  titleText,
}: {
  className?: string;
  imageSrc: string;
  imageAlt: string;
  titleText: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      <CardImage
        src={imageSrc}
        alt={imageAlt}
        width={200}
        height={200}
        className="bg-cream rounded-t-full p-6 sm:p-8 md:p-10 w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 flex items-center justify-center overflow-hidden"
      />
      <StarRating className="py-2 sm:py-3 md:py-4" />
      <Title
        text={titleText}
        className="text-center text-black text-lg sm:text-xl md:text-2xl font-bold font-['Oswald']"
      />
    </div>
  );
}
