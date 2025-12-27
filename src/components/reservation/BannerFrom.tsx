//banner text component

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function BannerText({
  className,
  onSubmit,
}: {
  className?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div
      className={cn("flex  justify-start items-center space-x-20", className)}
    >
      <section className="relative z-10 ">
        <Image
          src="/image/about/about_banner.png"
          alt="banner"
          width={980}
          height={980}
          className="object-cover aspect-square rounded-r-2xl"
        />
      </section>
      <section className="relative z-10 w-full py-16">
        <div className="flex flex-col items-start justify-start w-full max-w-2xl">
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-bold font-['Oswald'] text-black capitalize tracking-wide text-start md:pb-10">
            Reservation <span className="text-dark_vermilion">Table</span>
          </h1>

          {/* Reservation Form */}
          <form className="w-full  space-y-4" onSubmit={onSubmit}>
            {/* Your Name Field */}
            <div className="flex flex-col space-y-2">
              <label className="text-black font-['Oswald'] font-semibold text-base">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                required
                className="w-full px-4 py-3 border border-black  bg-transparent text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dark_vermilion focus:ring-opacity-50 font-['Oswald'] text-base rounded-md"
              />
            </div>

            {/* Your Email Field */}
            <div className="flex flex-col space-y-2">
              <label className="text-black font-['Oswald'] font-semibold text-base">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter mail address"
                required
                className="w-full px-4 py-3 border border-black  bg-transparent text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dark_vermilion focus:ring-opacity-50 font-['Oswald'] text-base rounded-md"
              />
            </div>

            {/* Date and Time Fields - Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-black font-['Oswald'] font-semibold text-base">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    placeholder="Enter Date"
                    required
                    className="w-full px-4 py-3 border border-black rounded-md bg-transparent text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dark_vermilion focus:ring-opacity-50 font-['Oswald'] text-base pr-10"
                  />
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              {/* Time Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-black font-['Oswald'] font-semibold text-base">
                  Time
                </label>
                <div className="relative">
                  <input
                    type="time"
                    name="time"
                    placeholder="Time"
                    required
                    className="w-full px-4 py-3 border border-black rounded-md bg-transparent text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dark_vermilion focus:ring-opacity-50 font-['Oswald'] text-base "
                  />
                </div>
              </div>
            </div>

            {/* Select Person Field */}
            <div className="flex flex-col space-y-2">
              <label className="text-black font-['Oswald'] font-semibold text-base">
                Select Person
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="guests"
                  min="1"
                  placeholder="Number of Guests"
                  required
                  className="w-full px-4 py-3 border border-black rounded-md bg-transparent text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dark_vermilion focus:ring-opacity-50 font-['Oswald'] text-base "
                />
              </div>
            </div>

            {/* Reservation Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-12 py-4 bg-dark_vermilion text-white font-['Oswald'] font-bold uppercase tracking-wide text-lg hover:opacity-90 transition-opacity rounded-md"
              >
                RESERVATION
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
