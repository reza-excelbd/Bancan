//category button component

import { cn } from "@/lib/utils";
import Text from "../ui/text";
import CategoryImage from "./ui/category_image";

export default function CategoryButton({
  className,
  buttonText,
  imageSrc,
  imageAlt,
}: {
  className?: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div
      className={cn(
        className,
        "group min-w-0 h-16 sm:h-20 md:h-24 lg:h-28 border-2 border-dark_vermilion rounded-lg flex items-center justify-center hover:bg-dark_vermilion hover:text-white transition-all duration-300 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 cursor-pointer px-1.5 sm:px-2 md:px-3 lg:px-4"
      )}
    >
      <CategoryImage
        src={imageSrc}
        alt={imageAlt}
        width={60}
        height={60}
        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-200 p-1.5 sm:p-2 group-hover:bg-white flex justify-items-center shrink-0"
      />
      <Text
        text={buttonText}
        className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold group-hover:text-white text-center"
      />
    </div>
  );
}
