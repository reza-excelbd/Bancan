//contact component

import { cn } from "@/lib/utils";
import ImageShape from "./ui/image_shape";
import ContactTitleParagraph from "./ui/contact_title_paragraph";
import SubscriberText from "./ui/subscriberText";
import HotOffers from "./hot_offers/hot_offers";

export default function Contact({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <ContactTitleParagraph
        titleTextBlack="Connect with "
        titleTextRed="Us"
        paragraph="The concept of “quick food” actually dates back to ancient civilizations, where street
vendors and food stalls offered simple,"
        titleTextClassName="text-4xl font-bold font-['Oswald'] uppercase  text-black text-center"
        paragraphClassName="text-sm text-gray-500 text-center max-w-xl mx-auto py-5 font-['Oswald']"
      />
      {/* 
      image shape component */}
      <section className="flex items-center justify-center max-w-7xl mx-auto space-x-10">
        <ImageShape
          src="/image/contact/contact-1.jpg"
          alt="image shape"
          width={220}
          height={220}
          className="w-full h-full rounded-t-lg rounded-b-[220px]"
        />
        <ImageShape
          src="/image/contact/contact-2.png"
          alt="image-shape"
          width={220}
          height={220}
          imageClassName=""
          className="w-full h-full rounded-lg rounded-tl-[150px]"
        />
        <ImageShape
          src="/image/contact/contact-3.png"
          alt="image-shape"
          width={220}
          height={220}
          imageClassName=""
          className="w-full h-full  rounded-[80px]"
        />
        <ImageShape
          src="/image/contact/contact-1.jpg"
          alt="image-shape"
          width={220}
          height={220}
          imageClassName=""
          className="w-full h-full rounded-lg rounded-tl-[150px]"
        />
        <ImageShape
          src="/image/contact/contact-3.png"
          alt="image-shape"
          width={220}
          height={220}
          imageClassName=""
          className="w-full h-full rounded-full"
        />
      </section>

      <SubscriberText
        text="Subscribe To Our Newsletter And Get 10% Off Your First Order"
        className="flex items-center justify-center opacity-60 py-16"
        textClassName="text-7xl text-outline-vermilion font-['Oswald'] uppercase tracking-wide"
        borderClassName="border-dark_vermilion border-2  rounded-full"
      />
      <HotOffers className="pb-32" />
    </div>
  );
}
