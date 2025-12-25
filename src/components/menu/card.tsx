//menu card component

import Image from "next/image";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  className?: string;
  titleText: string;
  paragraphText: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  onClick?: () => void;
  titleClassName?: string;
  paragraphClassName?: string;
  priceClassName?: string;
}

export default function MenuCard({
  className,
  titleText,
  paragraphText,
  imageSrc,
  imageAlt,
  price,
  onClick,
  titleClassName,
  paragraphClassName,
  priceClassName,
}: MenuCardProps) {
  // Format price with currency symbol
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <div
      className={cn(
        "bg-cream rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300 max-w-64 h-auto font-['Oswald']",
        className
      )}
      onClick={onClick}
    >
      {/* Circular Image */}
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mb-4 sm:mb-5 md:mb-6 rounded-full overflow-hidden bg-white shadow-lg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 176px"
          className="object-cover rounded-full"
        />
      </div>

      {/* Title - Bold Uppercase */}
      <h3
        className={cn(
          "text-black font-bold uppercase text-start mb-2 sm:mb-3 text-base sm:text-lg md:text-xl lg:text-2xl font-['Oswald']",
          titleClassName
        )}
      >
        {titleText}
      </h3>

      {/* Description - Smaller Grey Text */}
      <p
        className={cn(
          "text-gray-600 text-center text-xs sm:text-sm text-balance mb-4 sm:mb-5 md:mb-6 line-clamp-3 flex-1 font-['Oswald']",
          paragraphClassName
        )}
      >
        {paragraphText}
      </p>

      {/* Price - Large Bold Red Text */}
      <div
        className={cn(
          "text-dark_vermilion font-bold text-start text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Oswald']",
          priceClassName
        )}
      >
        {formattedPrice}
      </div>
    </div>
  );
}
