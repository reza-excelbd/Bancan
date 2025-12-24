"use client";

//arrow button component

import { cn } from "@/lib/utils";

interface ArrowButtonProps {
  className?: string;
  onClick: () => void;
  direction?: "left" | "right";
  "aria-label"?: string;
}

export default function ArrowButton({
  className,
  onClick,
  direction = "left",
  "aria-label": ariaLabel,
}: ArrowButtonProps) {
  const isLeft = direction === "left";

  return (
    <button
      className={cn(className)}
      onClick={onClick}
      aria-label={ariaLabel || `${direction} arrow button`}
    >
      {isLeft ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-move-left-icon lucide-move-left"
        >
          <path d="M6 8L2 12L6 16" />
          <path d="M2 12H22" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-move-right-icon lucide-move-right"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>
      )}
    </button>
  );
}
