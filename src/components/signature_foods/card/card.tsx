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
        className="bg-cream rounded-t-full p-10 w-64 h-64 flex items-center justify-center overflow-hidden"
      />
      <StarRating className="py-4" />
      <Title
        text={titleText}
        className="text-center text-black text-2xl font-bold font-['Oswald']"
      />
    </div>
  );
}
