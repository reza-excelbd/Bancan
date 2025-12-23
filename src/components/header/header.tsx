import Image from "next/image";
import { cn } from "@/lib/utils";

const navItemClasses =
  "cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";

export default function Header() {
  return (
    <header className="relative w-full h-[180px] overflow-hidden">
      {/* Red background */}
      <div className="absolute top-0 left-0 w-full h-[124px] bg-vermilion" />

      {/* NAV BAR */}
      <nav className="relative z-10 h-[124px] max-w-5xl mx-auto flex items-center justify-between px-8 text-white">
        {/* Left menu */}
        <ul className="flex gap-8 font-semibold">
          <li className={cn(navItemClasses)}>Home</li>
          <li className={cn(navItemClasses)}>Menu</li>
          <li className={cn(navItemClasses)}>About Us</li>
        </ul>

        {/* Logo (centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[68px]">
          <Image
            src="/bancan_kitchen.svg"
            alt="Bancan Kitchen"
            width={159}
            height={46}
          />
        </div>

        {/* Right menu */}
        <ul className="flex gap-8 font-semibold">
          <li className={cn(navItemClasses)}>Platters</li>
          <li className={cn(navItemClasses)}>Catering</li>
          <li className={cn(navItemClasses)}>Reservation</li>
        </ul>
      </nav>

      {/* Decorative notch */}
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 pointer-events-none">
        <Image
          src="/header_notch.svg"
          alt="header notch"
          width={676}
          height={121}
        />
      </div>
    </header>
  );
}
