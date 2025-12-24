//hot offers component

import Image from "next/image";
import EmailInputWithButtonPolicy from "./ui/email_input_with_button_policy";
import TitleTextAndParagraph from "./ui/titleTextAndParagraph";
import { cn } from "@/lib/utils";

export default function HotOffers({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <section className="absolute inset-0 overflow-hidden min-h-[400px]">
        <Image
          src="/image/signature_food/chiken.png"
          alt="hot offers"
          width={250}
          height={250}
          className="object-cover absolute top-0 left-0"
        />
        <Image
          src="/image/signature_food/momos.png"
          alt="hot offers"
          width={250}
          height={250}
          className="object-cover absolute bottom-0 right-0"
        />
      </section>
      <section className="flex flex-col items-center justify-between max-w-xl mx-auto">
        <div className="relative w-full">
          <Image
            src="/image/contact/chilly.png"
            alt="chilly"
            width={300}
            height={300}
            className="object-cover absolute -top-[60%] right-[-10%] z-0 -rotate-25"
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
