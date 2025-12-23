//title component

import { cn } from "@/lib/utils";

export default function Title({
  className,
  text,
}: {
  className?: string;
  text: string;
}) {
  return (
    <h2 className={cn("text-2xl font-bold font-['Oswald']", className)}>
      {text}
    </h2>
  );
}
