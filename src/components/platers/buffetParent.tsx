//buffet parent component

import BuffetChild from "./buffetChild";
const buffetData = [
  {
    title: "Breakfast",
    items: [
      {
        id: 1,
        titleText: "Chocolate Cream",
        imageSrc: "/image/platters/product.png",
        originalPrice: 19.0,
        price: 17.0,
      },
      {
        id: 2,
        titleText: "Baked Pastries and Egg",
        imageSrc: "/image/platters/product.png",
        originalPrice: 19.0,
        price: 17.0,
      },
      {
        id: 3,
        titleText: "Breakfast with Toasts",
        imageSrc: "/image/platters/product.png",
        originalPrice: 19.0,
        price: 17.0,
      },
      {
        id: 4,
        titleText: "Breakfast with Toasts",
        imageSrc: "/image/platters/product.png",
        originalPrice: 19.0,
        price: 17.0,
      },
    ],
  },
  {
    title: "Lunch",
    items: [
      {
        id: 5,
        titleText: "Rice Fresh Chao",
        imageSrc: "/image/platters/product.png",
        price: 9.0,
      },
      {
        id: 6,
        titleText: "Vegetable Salad",
        imageSrc: "/image/platters/product.png",
        originalPrice: 15.0,
        price: 14.0,
      },
      {
        id: 7,
        titleText: "Chicken Biriyani",
        imageSrc: "/image/platters/product.png",
        originalPrice: 22.0,
        price: 16.0,
      },
      {
        id: 8,
        titleText: "Stewed Beef Meat",
        imageSrc: "/image/platters/product.png",
        originalPrice: 19.0,
        price: 17.0,
      },
    ],
  },
  {
    title: "Dinner",
    items: [
      {
        id: 9,
        titleText: "Vegetable Salad",
        imageSrc: "/image/platters/product.png",
        originalPrice: 15.0,
        price: 14.0,
      },
      {
        id: 10,
        titleText: "Mushroom Soup",
        imageSrc: "/image/platters/product.png",
        originalPrice: 25.0,
        price: 21.0,
      },
      {
        id: 11,
        titleText: "Beyti Kebab",
        imageSrc: "/image/platters/product.png",
        originalPrice: 16.0,
        price: 15.0,
      },
      {
        id: 12,
        titleText: "Lavashs rolls",
        imageSrc: "/image/platters/product.png",
        originalPrice: 19.0,
        price: 18.0,
      },
    ],
  },
];

export default function BuffetParent() {
  return (
    <div className="w-full ">
      {buffetData.map((section) => (
        <BuffetChild key={section.title} data={section} />
      ))}
    </div>
  );
}
