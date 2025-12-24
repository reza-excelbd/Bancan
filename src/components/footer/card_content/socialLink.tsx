//social link component

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SocialLink({
  className,
  links,
}: {
  className?: string;
  links: { text: string; href: string; icon: React.ReactNode }[];
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-wrap gap-2 text-center",
        className
      )}
    >
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className="text-white text-sm not-italic font-['Oswald'] font-semibold hover:text-black transition-all duration-300 p-2 sm:p-2.5 md:p-3 rounded-full border border-white"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
