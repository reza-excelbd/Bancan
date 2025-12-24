//quick links component

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function QuickLinks({
  className,
  links,
}: {
  className?: string;
  links: { text: string; href: string }[];
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-wrap gap-2 text-center",
        className
      )}
    >
      {links.map((link, index) => (
        <div key={`${link.text}-${index}`} className="flex items-center">
          <Link
            href={link.href}
            className="text-white text-xs sm:text-sm not-italic font-['Oswald'] font-semibold hover:text-black transition-all duration-300"
          >
            {link.text}
          </Link>
          {index < links.length - 1 && (
            <span className="text-white text-xs sm:text-sm font-['Oswald'] mx-1 sm:mx-2">
              -
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
