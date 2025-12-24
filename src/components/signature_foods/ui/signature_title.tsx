//title component

import { cn } from "@/lib/utils";

export default function SignatureTitle({
  className,
  blackText,
  redText,
}: {
  className?: string;
  blackText: string;
  redText: string;
}) {
  return (
    <div className={cn(className)}>
      <div className="flex  items-center justify-start space-x-11 ">
        <p className="text-2xl font-bold font-['Oswald'] uppercase tracking-tighter text-dark_vermilion">
          Our Delicious Menu
        </p>
        <div className="bg-orange-400 w-16 h-1 rounded-full"></div>
      </div>

      <h2 className={cn("text-2xl font-bold font-['Oswald']", className)}>
        {blackText} <span className="text-dark_vermilion">{redText}</span>
      </h2>
    </div>
  );
}
