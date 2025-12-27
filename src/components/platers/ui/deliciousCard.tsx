//delicious card component

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function DeliciousCard({
  className,
  titleText,
  imageSrc,
  imageAlt,
  offervalue,
  maxoffvalue,
  persons = 4,
  minPrice = 13,
  maxPrice = 19,
}: {
  className?: string;
  titleText: string;
  imageSrc: string;
  imageAlt: string;
  offerText?: string;
  offervalue?: string;
  maxoffvalue?: string;
  persons?: number;
  minPrice?: number;
  maxPrice?: number;
}) {
  return (
    <div
      className={cn(
        "bg-white/50 min-w-64 max-w-72 rounded-lg overflow-hidden shadow-lg relative border hover:scale-105 transition-transform duration-300 cursor-pointer hover:shadow-xl hover:border-rose_pink",
        className
      )}
    >
      {/* image section */}
      <section className="relative w-full rounded-t-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={288}
          height={200}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Promotional Banner - Curved Pink Banner */}
      <section className="relative z-10 w-full h-[28px]  bg-gray-200 overflow-hidden">
        <div
          className={cn(
            "w-[70%] h-full flex items-center rounded-tr-4xl bg-rose_pink"
          )}
        >
          <p className="truncate px-5 text-white font-['Quicksand'] font-medium text-[11px] uppercase">
            <span className="font-bold">{offervalue}</span> OFF UPTO{" "}
            {maxoffvalue}
          </p>
        </div>
      </section>

      {/* details section */}
      <section className="bg-transparent px-4 py-3 pb-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-black font-['Oswald'] mb-1 truncate">
          {titleText}
        </h3>

        {/* Persons */}
        <p className="text-sm text-black font-['Oswald'] font-semibold mb-2">
          {persons} Persons
        </p>

        {/* Price Range */}
        <p className="text-lg text-dark_vermilion font-['Quicksand'] font-bold">
          ${minPrice} - ${maxPrice}
        </p>
      </section>
    </div>
  );
}
