import Image from "next/image";
import { cn } from "@/lib/utils";

const navItemClasses =
  "cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 font-['Oswald'] text-base sm:text-lg md:text-xl";

export default function Header() {
  return (
    <header className="relative w-full h-[160px] sm:h-[170px] md:h-[180px] overflow-hidden">
      {/* Red background */}
      <div className="absolute top-0 left-0 w-full h-[110px] sm:h-[118px] md:h-[124px] bg-vermilion" />

      {/* NAV BAR */}
      <nav className="relative z-10 h-[110px] sm:h-[118px] md:h-[124px] max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 text-white">
        {/* Left menu */}
        <ul className="flex gap-4 sm:gap-6 md:gap-8 font-semibold">
          <li className={cn(navItemClasses)}>Home</li>
          <li className={cn(navItemClasses)}>Menu</li>
          <li className={cn(navItemClasses)}>About Us</li>
        </ul>

        {/* Logo (centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[58px] sm:top-[63px] md:top-[68px]">
          <Image
            src="/bancan_kitchen.svg"
            alt="Bancan Kitchen"
            width={159}
            height={46}
            className="w-[130px] h-auto sm:w-[145px] md:w-[159px]"
          />
        </div>

        {/* Right menu */}
        <ul className="flex gap-4 sm:gap-6 md:gap-8 font-semibold">
          <li className={cn(navItemClasses)}>Platters</li>
          <li className={cn(navItemClasses)}>Catering</li>
          <li className={cn(navItemClasses)}>Reservation</li>
        </ul>
      </nav>

      {/* Decorative notch */}
      <div className="absolute top-[106px] sm:top-[114px] md:top-[120px] left-1/2 -translate-x-1/2 pointer-events-none">
        <Image
          src="/header_notch.svg"
          alt="header notch"
          width={676}
          height={121}
          className="w-[540px] h-auto sm:w-[610px] md:w-[676px]"
        />
      </div>
    </header>
  );
}
