//button component

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ScrollCategory({
  className,
  buttonText,
  href,
  onClick,
}: {
  className?: string;
  buttonText: string;
  href?: string;
  onClick?: () => void;
}) {
  const buttonClasses = cn(
    className,
    "px-4 py-2 font-['Oswald'] text-xl cursor-pointer"
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {buttonText}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {buttonText}
    </button>
  );
}
