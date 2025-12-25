//scroll category component

"use client";

import { useRef, createContext, useContext } from "react";
import CategoryButton from "@/components/Category/category_Button/category_button";
import ScrollCategory from "@/components/Category/ui/scroll_catagory";

interface CategoryItem {
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface ScrollContextType {
  scrollLeft: () => void;
  scrollRight: () => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export function ScrollButtons() {
  const context = useContext(ScrollContext);

  if (!context) return null;

  return (
    <div className="flex items-center gap-4">
      <ScrollCategory
        buttonText="<"
        onClick={context.scrollLeft}
        className="bg-dark_vermilion text-white px-3 sm:px-4 py-2 sm:py-2 md:py-2 rounded-md font-['Oswald'] text-base sm:text-lg md:text-xl cursor-pointer font-bold button-hover-animation"
      />
      <ScrollCategory
        buttonText=">"
        onClick={context.scrollRight}
        className="bg-dark_vermilion text-white px-3 sm:px-4 py-2 sm:py-2 md:py-2 rounded-md font-['Oswald'] text-base sm:text-lg md:text-xl cursor-pointer font-bold button-hover-animation"
      />
    </div>
  );
}

export function ScrollableCategoriesList({
  categories,
  scrollContainerRef,
}: {
  categories: CategoryItem[];
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <section className="w-full px-2 sm:px-4 md:px-6 lg:px-0 overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth px-16"
      >
        {categories.map((category, index) => (
          <CategoryButton
            key={`${category.buttonText}-${index}`}
            buttonText={category.buttonText}
            className="shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
            imageSrc={category.imageSrc}
            imageAlt={category.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}

export default function ScrollableCategoriesProvider({
  categories,
  children,
}: {
  categories: CategoryItem[];
  children: React.ReactNode;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollLeft, scrollRight }}>
      {children}
      <ScrollableCategoriesList
        categories={categories}
        scrollContainerRef={scrollContainerRef}
      />
    </ScrollContext.Provider>
  );
}
