//email input with button policy component

import { cn } from "@/lib/utils";

export default function EmailInputWithButtonPolicy({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("px-4 sm:px-0", className)}>
      {/* Email Input and Subscribe Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-cream border-none outline-none text-foreground placeholder:text-gray-400 focus:ring-2 focus:ring-light_teal focus:ring-opacity-50 font-['Oswald'] text-sm sm:text-base"
        />
        <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-light_teal text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base">
          Subscribe
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>

      {/* Privacy Policy Checkbox */}
      <div className="flex items-start gap-2 px-4 sm:px-0">
        <input
          type="checkbox"
          id="privacy-policy"
          className="mt-1 w-4 h-4 rounded border-gray-800 text-light_teal focus:ring-light_teal focus:ring-2 checked:text-light_teal shrink-0"
        />
        <label
          htmlFor="privacy-policy"
          className="text-xs sm:text-sm font-bold cursor-pointer font-['Oswald'] tracking-wide text-gray-800"
        >
          By signing up you agree to our Privacy Policy
        </label>
      </div>
    </div>
  );
}
