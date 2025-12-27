import Image from "next/image";
import { cn } from "@/lib/utils";

type BuffetCardProps = {
  data: {
    id: number;
    imageSrc: string;
    titleText: string;
    originalPrice?: number;
    price: number;
  };
  className?: string;
};

export default function BuffetCard({ data, className }: BuffetCardProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 border rounded-lg bg-white/50 shadow-lg w-full hover:scale-105 transition-transform duration-300 cursor-pointer hover:shadow-xl hover:border-rose_pink",
        className
      )}
    >
      {/* Image */}
      <div className="relative w-[64px] h-[64px] shrink-0 rounded-md overflow-hidden">
        <Image
          src={data.imageSrc}
          alt={data.titleText}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="font-['Oswald'] font-bold text-sm text-black line-clamp-1">
          {data.titleText}
        </h3>

        <div className="flex items-center gap-2">
          {data.originalPrice && (
            <span className="text-xs text-gray-400 line-through font-['Oswald']">
              ${data.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-sm font-bold text-black font-['Oswald']">
            ${data.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
