//hot offers component

import Image from "next/image";
import EmailInputWithButtonPolicy from "./ui/email_input_with_button_policy";
import TitleTextAndParagraph from "./ui/titleTextAndParagraph";
import { cn } from "@/lib/utils";

export default function HotOffers({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <section className="absolute inset-0 overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
        <Image
          src="/image/signature_food/chiken.png"
          alt="hot offers"
          width={250}
          height={250}
          className="object-cover absolute top-0 left-0 w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[250px] opacity-60 sm:opacity-80 md:opacity-100"
        />
        <Image
          src="/image/signature_food/momos.png"
          alt="hot offers"
          width={250}
          height={250}
          className="object-cover absolute bottom-0 right-0 w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[250px] opacity-60 sm:opacity-80 md:opacity-100"
        />
      </section>
      <section className="flex flex-col items-center justify-between max-w-2xl mx-auto relative z-10 ">
        <div className="relative w-full">
          <Image
            src="/image/contact/chilly.png"
            alt="chilly"
            width={300}
            height={300}
            className="object-cover absolute -top-[40%] sm:-top-[40%] md:-top-[50%] right-[-5%] sm:right-[-8%] md:right-[-15%] lg:right-[-20%] z-0 -rotate-25 w-[150px] h-auto sm:w-[200px] md:w-[250px] lg:w-[300px] opacity-50 sm:opacity-70 md:opacity-100"
          />
          <TitleTextAndParagraph
            firstTitleText="Hot Offers"
            className="relative z-10"
            redText="Hot"
            lastTitleText="Offers"
            paragraph='The concept of "quick food" actually dates back to ancient civilizations, where street vendors and food stalls offered simple,'
          />
        </div>
        <EmailInputWithButtonPolicy className="w-full" />
      </section>
    </div>
  );
}
