//floating button component

import FloatingButton from "./ui/button";
import { cn } from "@/lib/utils";
export default function FloatingButtonComponent({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <FloatingButton
        buttonText="Order Now"
        className="bg-white rounded-[10px] text-dark_vermilion w-40 h-12"
      />
      <FloatingButton
        buttonText="Book a Table"
        className="bg-dark_vermilion rounded-[10px] border-2 border-white text-white w-40 h-12"
      />
    </div>
  );
}
