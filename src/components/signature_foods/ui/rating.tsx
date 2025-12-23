//star rating component
"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function StarRating({ className }: { className?: string }) {
  const stars = [1, 2, 3, 4, 5];
  const [value, setValue] = useState<number>(5);

  return (
    <div className={cn("flex items-center justify-center gap-1", className)}>
      {stars.map((star) => (
        <label key={star} className="cursor-pointer">
          <span className="sr-only">
            {star} star{star > 1 ? "s" : ""}
          </span>
          <input
            type="radio"
            name="rating"
            value={star}
            checked={value === star}
            onChange={() => setValue(star)}
            className="sr-only"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className={cn(
              "w-5 h-5 fill-current transition-colors",
              star <= value ? "text-orange-400" : "text-gray-300"
            )}
          >
            <path d="M10 1.5l2.472 5.005 5.528.804-4 3.898.944 5.507L10 13.75l-4.944 2.964.944-5.507-4-3.898 5.528-.804L10 1.5z" />
          </svg>
        </label>
      ))}
    </div>
  );
}
