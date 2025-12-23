import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Wave({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-transparent w-screen z-10 absolute bottom-0 left-0",
        className
      )}
    >
      <Image src="/wave.svg" alt="wave" width={1920} height={35} />
    </div>
  );
}
