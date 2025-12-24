//happy hours component
import Image from "next/image";

export default function HappyHours() {
  return (
    <div className="w-full h-full bg-gray-200 relative z-10 overflow-hidden pb-6 sm:pb-8 md:pb-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center font-['Oswald'] py-6 sm:py-8 md:py-10 text-black px-4">
        Our Happy <span className="text-dark_vermilion">Hours</span>
      </h1>

      <div className="w-full flex items-center justify-center px-2 sm:px-4">
        <div className="marquee w-full">
          <div className="marquee-track">
            {[
              "/image/happy_hours/happy-1.jpg",
              "/image/happy_hours/happy-2.jpg",
              "/image/happy_hours/happy-3.jpg",
              "/image/happy_hours/happy-4.jpg",
            ].map((src) => (
              <div
                key={src}
                className="marquee-item relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] aspect-square rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt="happy hours"
                  fill
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, 350px"
                  className="object-cover transition-transform duration-500 hover:scale-[1.05] rounded-xl sm:rounded-2xl"
                />
              </div>
            ))}
            {[
              "/image/happy_hours/happy-1.jpg",
              "/image/happy_hours/happy-2.jpg",
              "/image/happy_hours/happy-3.jpg",
              "/image/happy_hours/happy-4.jpg",
            ].map((src) => (
              <div
                key={`${src}-duplicate`}
                className="marquee-item relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] aspect-square rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt="happy hours"
                  fill
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, 350px"
                  className="object-cover transition-transform duration-500 hover:scale-[1.05] rounded-xl sm:rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
