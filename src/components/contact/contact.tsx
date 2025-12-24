//contact component

import { cn } from "@/lib/utils";
import ImageShape from "./ui/image_shape";
import ContactTitleParagraph from "./ui/contact_title_paragraph";
import SubscriberText from "./ui/subscriberText";
import HotOffers from "./hot_offers/hot_offers";

export default function Contact({ className }: { className?: string }) {
  return (
    <div className={cn("px-4 sm:px-6 md:px-8", className)}>
      <ContactTitleParagraph
        titleTextBlack="Connect with "
        titleTextRed="Us"
        paragraph='The concept of "quick food" actually dates back to ancient civilizations, where street vendors and food stalls offered simple,'
        titleTextClassName="text-2xl sm:text-3xl md:text-4xl font-bold font-['Oswald'] uppercase text-black text-center"
        paragraphClassName="text-xs sm:text-sm text-gray-500 text-center max-w-xl mx-auto py-3 sm:py-4 md:py-5 font-['Oswald'] px-4"
      />
      {/* 
      image shape component */}
      <section className="flex flex-wrap items-center justify-center max-w-7xl mx-auto gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 py-4 sm:py-6 md:py-8">
        <ImageShape
          src="/image/contact/contact-1.jpg"
          alt="image shape"
          width={220}
          height={220}
          className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] rounded-t-lg rounded-b-[120px] sm:rounded-b-[150px] md:rounded-b-[180px] lg:rounded-b-[200px] xl:rounded-b-[220px]"
        />
        <ImageShape
          src="/image/contact/contact-2.png"
          alt="image-shape"
          width={220}
          height={220}
          imageClassName=""
          className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] rounded-lg rounded-tl-[80px] sm:rounded-tl-[100px] md:rounded-tl-[120px] lg:rounded-tl-[140px] xl:rounded-tl-[150px]"
        />
        <ImageShape
          src="/image/contact/contact-3.png"
          alt="image-shape"
          width={220}
          height={220}
          imageClassName=""
          className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px]"
        />
        <ImageShape
          src="/image/contact/contact-1.jpg"
          alt="image-shape"
          width={220}
          height={220}
          imageClassName=""
          className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] rounded-lg rounded-tl-[80px] sm:rounded-tl-[100px] md:rounded-tl-[120px] lg:rounded-tl-[140px] xl:rounded-tl-[150px]"
        />
        <ImageShape
          src="/image/contact/contact-3.png"
          alt="image-shape"
          width={220}
          height={220}
          imageClassName=""
          className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] rounded-full"
        />
      </section>

      <SubscriberText
        text="Subscribe To Our Newsletter And Get 10% Off Your First Order"
        className="flex items-center justify-center opacity-60 py-8 sm:py-12 md:py-16"
        textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-outline-vermilion font-['Oswald'] uppercase tracking-wide"
        borderClassName="border-dark_vermilion border-2 rounded-full w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
      <HotOffers className="pb-16 sm:pb-24 md:pb-32" />
    </div>
  );
}
