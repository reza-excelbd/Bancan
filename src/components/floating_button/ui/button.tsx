//floating button component

import { cn } from "@/lib/utils";

export default function FloatingButton({
  className,
  buttonText,
}: {
  className?: string;
  buttonText: string;
}) {
  return (
    <button
      className={cn(
        className,
        "px-4 py-2 font-['Oswald'] text-xl cursor-pointer"
      )}
    >
      {buttonText}
    </button>
  );
}
