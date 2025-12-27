//delicious card parent component
import DeliciousCard from "./ui/deliciousCard";

const plattersData = [
  {
    id: 1,
    titleText: "Non-Vegetarian Platters",
    imageSrc: "/image/platters/product.png",
    imageAlt: "non-vegetarian platters",
    offervalue: "$15.00",
    maxoffvalue: "$100.00",
    persons: 4,
    minPrice: 13,
    maxPrice: 19,
  },
  {
    id: 2,
    titleText: "Vegetarian Platters",
    imageSrc: "/image/platters/product.png",
    imageAlt: "vegetarian platters",
    offervalue: "$12.00",
    maxoffvalue: "$90.00",
    persons: 3,
    minPrice: 10,
    maxPrice: 16,
  },
  {
    id: 3,
    titleText: "Seafood Platters",
    imageSrc: "/image/platters/product.png",
    imageAlt: "seafood platters",
    offervalue: "$20.00",
    maxoffvalue: "$150.00",
    persons: 5,
    minPrice: 18,
    maxPrice: 25,
  },
  {
    id: 4,
    titleText: "Mixed Platters",
    imageSrc: "/image/platters/product.png",
    imageAlt: "mixed platters",
    offervalue: "$18.00",
    maxoffvalue: "$120.00",
    persons: 4,
    minPrice: 15,
    maxPrice: 22,
  },
  {
    id: 5,
    titleText: "Premium Platters",
    imageSrc: "/image/platters/product.png",
    imageAlt: "premium platters",
    offervalue: "$25.00",
    maxoffvalue: "$200.00",
    persons: 6,
    minPrice: 22,
    maxPrice: 30,
  },
];

export default function DeliciousCardParent() {
  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize bg-transparent my-6 sm:my-8 md:my-10 px-4 sm:px-6 md:px-10 lg:px-16 text-center font-['Oswald'] text-black">
        Super Delicious <span className="text-dark_vermilion">Platters</span>
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 sm:px-6 md:px-10 lg:px-16 justify-items-center">
        {plattersData.map((platter) => (
          <DeliciousCard
            key={platter.id}
            titleText={platter.titleText}
            imageSrc={platter.imageSrc}
            imageAlt={platter.imageAlt}
            offervalue={platter.offervalue}
            maxoffvalue={platter.maxoffvalue}
            persons={platter.persons}
            minPrice={platter.minPrice}
            maxPrice={platter.maxPrice}
          />
        ))}
      </section>
    </div>
  );
}
