//buffet child component

import BuffetCard from "./ui/buffetCard";

type BuffetChildProps = {
  className?: string;
  data: {
    title: string;
    items: Array<{
      id: number;
      imageSrc: string;
      titleText: string;
      originalPrice?: number;
      price: number;
    }>;
  };
};

export default function BuffetChild({ className, data }: BuffetChildProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize bg-transparent my-6 sm:my-8 md:my-10 px-4 sm:px-6 md:px-10 lg:px-16 text-center font-['Oswald'] text-black">
        {data.title}
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-10 lg:px-16">
        {data.items.map((item) => (
          <BuffetCard key={item.id} data={item} />
        ))}
      </section>
    </div>
  );
}
