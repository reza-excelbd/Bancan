//menu page
"use client";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Banner from "@/components/shared/banner/banner";
import Background from "@/components/background/background";
import Text from "@/components/Category/ui/text";
import ScrollableCategoriesProvider, {
  ScrollButtons,
} from "@/components/menu/scroll_category";
import MenuCard from "@/components/menu/card";

const categories = [
  {
    buttonText: "Burgers",
    imageSrc: "/image/category/burger.png",
    imageAlt: "burger",
  },
  {
    buttonText: "Pizza",
    imageSrc: "/image/category/pizza.png",
    imageAlt: "pizza",
  },
  {
    buttonText: "Sea Food",
    imageSrc: "/image/category/crab.png",
    imageAlt: "sea food",
  },
  {
    buttonText: "Rice & Curry",
    imageSrc: "/image/category/curry.png",
    imageAlt: "rice & curry",
  },
  {
    buttonText: "Dala",
    imageSrc: "/image/category/Dala.png",
    imageAlt: "dala",
  },
  {
    buttonText: "Dala",
    imageSrc: "/image/category/Dala.png",
    imageAlt: "dala",
  },
  {
    buttonText: "Rice & Curry",
    imageSrc: "/image/category/curry.png",
    imageAlt: "rice & curry",
  },
  {
    buttonText: "Dala",
    imageSrc: "/image/category/Dala.png",
    imageAlt: "dala",
  },
  {
    buttonText: "Dala",
    imageSrc: "/image/category/Dala.png",
    imageAlt: "dala",
  },
];

const menuItems = [
  {
    id: 1,
    titleText: "Chicken Biriyani",
    paragraphText:
      "Aromatic basmati rice cooked with tender chicken pieces, fragrant spices, and herbs. Served with raita and salad.",
    imageSrc: "/image/category/muttar_pulao.png",
    imageAlt: "Chicken Biriyani",
    price: 300.0,
  },
  {
    id: 2,
    titleText: "Mutton Biriyani",
    paragraphText:
      "Traditional biriyani made with succulent mutton pieces, long-grain rice, and a blend of exotic spices.",
    imageSrc: "/image/category/murug_polao.png",
    imageAlt: "Mutton Biriyani",
    price: 350.0,
  },
  {
    id: 3,
    titleText: "Chicken Burger",
    paragraphText:
      "Juicy grilled chicken patty with fresh vegetables, special sauce, and crispy bun. A perfect meal for any time.",
    imageSrc: "/image/category/muttar_pulao.png",
    imageAlt: "Chicken Burger",
    price: 150.0,
  },
  {
    id: 4,
    titleText: "Margherita Pizza",
    paragraphText:
      "Classic Italian pizza with fresh mozzarella, tomato sauce, and basil leaves. Simple yet delicious.",
    imageSrc: "/image/category/murug_polao.png",
    imageAlt: "Margherita Pizza",
    price: 250.0,
  },
  {
    id: 5,
    titleText: "Grilled Fish",
    paragraphText:
      "Fresh fish marinated in spices and grilled to perfection. Served with lemon and herbs.",
    imageSrc: "/image/category/muttar_pulao.png",
    imageAlt: "Grilled Fish",
    price: 280.0,
  },
  {
    id: 6,
    titleText: "Chicken Curry",
    paragraphText:
      "Tender chicken pieces cooked in a rich, flavorful curry with onions, tomatoes, and aromatic spices.",
    imageSrc: "/image/category/murug_polao.png",
    imageAlt: "Chicken Curry",
    price: 200.0,
  },
  {
    id: 7,
    titleText: "Vegetable Biriyani",
    paragraphText:
      "Aromatic rice cooked with fresh vegetables, spices, and herbs. A vegetarian delight full of flavors.",
    imageSrc: "/image/category/muttar_pulao.png",
    imageAlt: "Vegetable Biriyani",
    price: 180.0,
  },
  {
    id: 8,
    titleText: "Beef Steak",
    paragraphText:
      "Premium beef steak grilled to your preference, served with roasted vegetables and sauce.",
    imageSrc: "/image/category/murug_polao.png",
    imageAlt: "Beef Steak",
    price: 450.0,
  },
  {
    id: 9,
    titleText: "Prawn Curry",
    paragraphText:
      "Fresh prawns cooked in a spicy coconut curry with traditional spices. Served with steamed rice.",
    imageSrc: "/image/category/muttar_pulao.png",
    imageAlt: "Prawn Curry",
    price: 320.0,
  },
  {
    id: 10,
    titleText: "Lamb Korma",
    paragraphText:
      "Tender lamb pieces slow-cooked in a creamy, mild curry sauce with cashews and aromatic spices.",
    imageSrc: "/image/category/murug_polao.png",
    imageAlt: "Lamb Korma",
    price: 380.0,
  },
];

export default function MenuPage() {
  return (
    <Background>
      {/* Header and Banner Section */}
      <main className="relative min-h-[66.66vh]">
        <Header />
        <Banner
          className="bg-deep_teal absolute top-0 left-0 w-full h-full -z-10"
          title="MENU"
        />
      </main>

      {/* Our Categories Section */}
      <ScrollableCategoriesProvider categories={categories}>
        <section className="bg-transparent w-full z-10 px-4 sm:px-6 md:px-10 lg:px-16">
          <section className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-6 sm:mb-8 md:mb-10 gap-4 sm:gap-0 pt-6 sm:pt-8 md:pt-10">
            <Text
              text="our Categories"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase bg-transparent"
            />
            <ScrollButtons />
          </section>
        </section>
      </ScrollableCategoriesProvider>
      {/* Selected Category Section */}
      <Text
        text="Burgers"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-transparent my-6 sm:my-8 md:my-10 px-4 sm:px-6 md:px-10 lg:px-16"
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:3 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 my-6 sm:my-8 md:my-10 px-4 sm:px-6 md:px-10 lg:px-16">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            titleText={item.titleText}
            paragraphText={item.paragraphText}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            price={item.price}
            onClick={() => {
              // Handle card click - can add navigation or modal here
              console.log(`Selected: ${item.titleText}`);
            }}
          />
        ))}
      </section>
      <Footer />
    </Background>
  );
}
