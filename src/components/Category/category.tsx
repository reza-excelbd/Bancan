//category component

import { cn } from "@/lib/utils";
import Text from "./ui/text";
import Button from "./ui/button";
import CategoryButton from "./category_Button/category_button";
import Image from "next/image";
import Card from "./Card/card";

export default function Category({ className }: { className?: string }) {
  const cardClass =
    "h-48 w-full bg-gray-200 rounded-2xl  flex items-center justify-between hover:bg-dark_vermilion hover:text-white hover:scale-105 transition-all duration-300";

  return (
    <div className={cn(className)}>
      {/* catagory ttile and button section */}
      <section className="flex items-end justify-between mb-10">
        <Text text="our Categories" className="text-6xl font-bold uppercase" />
        <Button
          buttonText="See More"
          className="bg-dark_vermilion text-white  px-4 py-8 rounded-md font-['Oswald'] text-xl cursor-pointer font-bold"
        />
      </section>
      {/* catagory list section */}
      <section className="grid grid-cols-5 gap-x-16 justify-between mx-auto">
        <CategoryButton
          buttonText="Burgers"
          className=""
          imageSrc="/image/category/burger.png"
          imageAlt="burger"
        />
        <CategoryButton
          buttonText="Pizza"
          className=""
          imageSrc="/image/category/pizza.png"
          imageAlt="pizza"
        />
        <CategoryButton
          buttonText="Sea Food"
          className=""
          imageSrc="/image/category/crab.png"
          imageAlt="sea food"
        />
        <CategoryButton
          buttonText="Rice & Curry"
          className=""
          imageSrc="/image/category/curry.png"
          imageAlt="rice & curry"
        />
        <CategoryButton
          buttonText="Dala"
          className=""
          imageSrc="/image/category/Dala.png"
          imageAlt="dala"
        />
      </section>

      {/* big banner section & card section */}
      <section className="w-full flex items-center justify-between py-5">
        <div className="relative w-1/2 aspect-square">
          <Image
            src="/image/category/raw_biriyani.png"
            alt="big banner"
            fill
            sizes="50vw"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="w-1/2  pl-14 flex flex-col gap-y-10 items-center">
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
            className="bg-dark_vermilion text-white  px-4 py-8 rounded-md font-['Oswald'] text-xl cursor-pointer font-bold max-w-48"
          />
        </div>
      </section>
    </div>
  );
}
