//banner text component

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function BannerText({ className }: { className?: string }) {
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
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl  font-bold font-['Oswald'] text-black uppercase tracking-wide text-start md:pb-10">
            WHAT MAKES BANCAN <br />
            <span className="text-dark_vermilion">KITCHEN UNIQUE</span>
          </h1>
          <p className="text-gray-800 text-start text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-['Oswald']  capitalize max-w-2xl py-6">
            Authentic south asian foods in the heart of cuisine with a hint of
            sub-continental Dishes. A great place to have a chat, lunch/dinner
            with a menu full of options. Whether it’s Biryani you are craving
            for or super delicious mouthwatering MoMos(Dumpling) we have got you
            covered. Curry dishes that will bring you the nostalgic feeling of
            spice enriched land of India, Bangladesh, Pakistan and Nepal etc. We
            believe food is not just about taste it’s a complete experience.
            Diversity is our power.
          </p>
          <p className="text-gray-900 font-bold text-start text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-['Oswald'] tracking-wide capitalize max-w-2xl">
            Our Executive Chef providing the highest quality of food and service
            since 2015
          </p>
        </div>
      </section>
    </div>
  );
}
