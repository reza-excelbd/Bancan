//catering parent component

import CateringChild from "./cataring_child";

const cateringData = [
  {
    title: "NON VEGETARIAN",
    highlightText: "DELIGHTS",
    optionA: {
      image: "/image/platters/product.png",
      price: 13.99,
      description:
        "Choice Of Two Vegetable Curries (From Our Main Menu), Served With Steamed Basmati Rice Or Pulao Rice, And Naan Bread. Complimentary Green Salad Included.",
    },
    optionB: {
      image: "/image/platters/product.png",
      price: 13.99,
      description:
        "Choice Of Two Vegetable Curries (From Our Main Menu), Served With Steamed Basmati Rice Or Pulao Rice, And Naan Bread. Complimentary Green Salad Included.",
    },
  },
  {
    title: "COMBINATION",
    highlightText: "DELIGHTS",
    optionA: {
      image: "/image/platters/product.png",
      price: 13.99,
      description:
        "Choice Of Two Vegetable Curries (From Our Main Menu), Served With Steamed Basmati Rice Or Pulao Rice, And Naan Bread. Complimentary Green Salad Included.",
    },
    optionB: {
      image: "/image/platters/product.png",
      price: 13.99,
      description:
        "Choice Of Two Vegetable Curries (From Our Main Menu), Served With Steamed Basmati Rice Or Pulao Rice, And Naan Bread. Complimentary Green Salad Included.",
    },
  },
  {
    title: "SAGORANA DALA",
    highlightText: undefined, // No highlight for this section
    optionA: {
      image: "/image/platters/product.png",
      price: 13.99,
      description:
        "Choice Of Two Vegetable Curries (From Our Main Menu), Served With Steamed Basmati Rice Or Pulao Rice, And Naan Bread. Complimentary Green Salad Included.",
    },
    optionB: {
      image: "/image/platters/product.png",
      price: 13.99,
      description:
        "Choice Of Two Vegetable Curries (From Our Main Menu), Served With Steamed Basmati Rice Or Pulao Rice, And Naan Bread. Complimentary Green Salad Included.",
    },
  },
];

export default function CateringParent() {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
      {cateringData.map((section, index) => (
        <CateringChild
          key={index}
          title={section.title}
          highlightText={section.highlightText}
          optionA={section.optionA}
          optionB={section.optionB}
        />
      ))}
    </div>
  );
}
