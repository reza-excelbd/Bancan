//text component

import { cn } from "@/lib/utils";

export default function Text({
  className,
  text,
}: {
  className?: string;
  text: string;
}) {
  return (
    <p
      className={cn(className, "font-['Oswald']  text-black  tracking-widest")}
    >
      {text}
    </p>
  );
}
