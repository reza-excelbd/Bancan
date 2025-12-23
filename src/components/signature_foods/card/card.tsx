//happy hours card component

import { cn } from "@/lib/utils";
import CardImage from "../ui/card_image";
import StarRating from "../ui/rating";
import Title from "../ui/title";

export default function HappyHoursCard({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <CardImage
        src="/image/signature_food/chiken_curry.png"
        alt="signature food"
        width={260}
        height={260}
        className="bg-cream rounded-t-full p-10 w-80 h-80"
      />
      <StarRating className="py-4" />
      <Title
        text="Chicken Curry"
        className="text-center text-black text-2xl font-bold font-['Oswald']"
      />
    </div>
  );
}
