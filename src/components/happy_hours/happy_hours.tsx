//happy hours component
import Image from "next/image";

export default function HappyHours() {
  return (
    <div className="w-full h-full bg-gray-200  relative   z-10 overflow-hidden pb-10">
      <h1 className="text-6xl font-bold uppercase text-center font-['Oswald'] py-10 text-black">
        Our Happy <span className="text-dark_vermilion">Hours</span>
      </h1>

      <div className="w-full flex items-center justify-center">
        <div className="marquee w-full ">
          <div className="marquee-track">
            {[
              "/image/happy_hours/happy-1.jpg",
              "/image/happy_hours/happy-2.jpg",
              "/image/happy_hours/happy-3.jpg",
              "/image/happy_hours/happy-4.jpg",
            ].map((src) => (
              <div
                key={src}
                className="marquee-item relative w-sm aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt="happy hours"
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.05] rounded-2xl"
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
                className="marquee-item relative w-sm aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt="happy hours"
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.05] rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
