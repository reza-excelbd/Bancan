//category component

import { cn } from "@/lib/utils";
import Text from "./ui/text";
import Button from "./ui/button";
import CategoryButton from "./category_Button/category_button";
import Image from "next/image";
import Card from "./Card/card";

export default function Category({ className }: { className?: string }) {
  const cardClass =
    "h-auto sm:h-40 md:h-44 lg:h-48 w-full bg-gray-200 rounded-2xl flex items-center justify-between hover:bg-dark_vermilion hover:text-white hover:scale-105 transition-all duration-300";

  return (
    <div className={cn("overflow-hidden", className)}>
      {/* catagory ttile and button section */}
      <section className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 sm:mb-8 md:mb-10 gap-4 sm:gap-0">
        <Text
          text="our Categories"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase"
        />
        <Button
          buttonText="See More"
          className="bg-dark_vermilion text-white px-3 sm:px-4 py-2 sm:py-2 md:py-2 rounded-md font-['Oswald'] text-base sm:text-lg md:text-xl cursor-pointer font-bold button-hover-animation"
        />
      </section>
      {/* catagory list section */}
      <section className="w-full px-2 sm:px-4 md:px-6 lg:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 justify-items-center sm:justify-items-stretch max-w-8xl mx-auto overflow-hidden">
          <CategoryButton
            buttonText="Burgers"
            className="w-full"
            imageSrc="/image/category/burger.png"
            imageAlt="burger"
          />
          <CategoryButton
            buttonText="Pizza"
            className="w-full"
            imageSrc="/image/category/pizza.png"
            imageAlt="pizza"
          />
          <CategoryButton
            buttonText="Sea Food"
            className="w-full"
            imageSrc="/image/category/crab.png"
            imageAlt="sea food"
          />
          <CategoryButton
            buttonText="Rice & Curry"
            className="w-full"
            imageSrc="/image/category/curry.png"
            imageAlt="rice & curry"
          />
          <CategoryButton
            buttonText="Dala"
            className="w-full"
            imageSrc="/image/category/Dala.png"
            imageAlt="dala"
          />
        </div>
      </section>

      {/* big banner section & card section */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-between py-5 sm:py-6 md:py-8 gap-6 sm:gap-8 lg:gap-0">
        <div className="relative w-full lg:w-1/2 aspect-square category-image-float">
          <Image
            src="/image/category/raw_biriyani.png"
            alt="big banner"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 pl-0 lg:pl-8 xl:pl-14 flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 items-center">
          <Card
            className={cn(cardClass)}
            titleText="Chicken Biriyani"
            paragraphText="Chicken Biriyani is a traditional Indian dish made with rice and a variety of spices. It is a popular dish in India and is often served with a side of yogurt or salad."
            imageSrc="/image/category/chiken_biriyani.jpg"
            imageAlt="chiken biriyani"
          />
          <Card
            className={cn(cardClass)}
            titleText="Murug Pulao"
            paragraphText="Murug Pulao is a traditional Indian dish made with rice and a variety of spices. It is a popular dish in India and is often served with a side of yogurt or salad."
            imageSrc="/image/category/murug_polao.png"
            imageAlt="murug pulao"
          />

          <Card
            className={cn(cardClass)}
            titleText="Raw Biriyani"
            paragraphText="Raw Biriyani is a traditional Indian dish made with rice and a variety of spices. It is a popular dish in India and is often served with a side of yogurt or salad."
            imageSrc="/image/category/raw_biriyani.png"
            imageAlt="raw biriyani"
          />
          <Button
            buttonText="Order Now"
            className="bg-dark_vermilion text-white px-2 sm:px-2 py-2 sm:py-2 md:py-2 rounded-md font-['Oswald'] text-base sm:text-lg md:text-xl cursor-pointer font-bold w-full sm:max-w-36 button-hover-animation"
          />
        </div>
      </section>
    </div>
  );
}
