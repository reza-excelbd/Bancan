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
        "group w-64 h-28 border-2 border-dark_vermilion rounded-lg flex items-center justify-center hover:bg-dark_vermilion hover:text-white transition-all duration-300 gap-4 cursor-pointer"
      )}
    >
      <CategoryImage
        src={imageSrc}
        alt={imageAlt}
        width={60}
        height={60}
        className="w-10 h-10 rounded-full bg-gray-100 p-2 group-hover:bg-white flex justify-items-center"
      />
      <Text
        text={buttonText}
        className="text-2xl font-bold group-hover:text-white"
      />
    </div>
  );
}
