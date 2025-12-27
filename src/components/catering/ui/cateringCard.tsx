import Image from "next/image";
import { cn } from "@/lib/utils";

type CateringCardProps = {
  image: string;
  optionLabel: string;
  price: number;
  priceUnit?: string;
  title?: string;
  description: string;
  className?: string;
};

export default function CateringCard({
  image,
  optionLabel,
  price,
  priceUnit = "/PERSON",
  title,
  description,
  className,
}: CateringCardProps) {
  return (
    <div
      className={cn(
        "relative flex w-full max-w-5xl h-[300px] overflow-hidden rounded-xl border border-gray-400 bg-white shadow-lg p-4 ",
        className
      )}
    >
      {/* LEFT IMAGE */}
      <div className="relative w-[40%] h-full">
        <Image
          src={image}
          alt={optionLabel}
          fill
          className="object-cover rounded-l-lg"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative w-[60%] h-full bg-dark_vermilion/20 border-l border-gray-400 flex items-center rounded-r-lg">
        {/* TOP RIGHT BANNER */}
        <div className="absolute top-0 right-0 bg-dark_vermilion px-2 sm:px-2 md:px-6 py-2 flex  gap-3 rounded-tr-lg">
          <p className="text-white font-['Oswald'] font-bold uppercase text-xs tracking-wide  sm:text-xs md:text-base">
            {optionLabel}
          </p>
          <p className="text-white font-['Oswald'] font-bold text-xs sm:text-xs md:text-base">
            ${price.toFixed(2)}
            <span className="ml-1 text-xs font-semibold">{priceUnit}</span>
          </p>
        </div>

        {/* TEXT CONTENT */}
        <div className="px-6 pr-10 ">
          {title && (
            <h3 className="mb-3 font-['Oswald'] text-lg font-bold uppercase text-black">
              {title}
            </h3>
          )}

          <p className="font-['Oswald'] text-sm leading-relaxed text-black">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
