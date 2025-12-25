//menu page

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Banner from "@/components/shared/banner/banner";
import Background from "@/components/background/background";
import BannerText from "@/components/about/bannerText";
import Slider from "@/components/shared/slider/slider";

export default function AboutUsPage() {
  return (
    <Background>
      <div className="flex flex-col min-h-screen relative">
        {/* Header and Banner Section */}
        <main className="relative min-h-[66.66vh]">
          <Header />
          <Banner
            className="bg-deep_teal absolute top-0 left-0 w-full h-full -z-10"
            title="ABOUT US"
          />
        </main>

        {/* Our Content Section */}
        <section className="bg-white w-full relative z-10">
          <section className="">
            <BannerText />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center font-['Oswald'] py-6 sm:py-8 md:py-10 text-black px-4">
              Delights Of Our <span className="text-dark_vermilion">Taste</span>
            </h1>
            <Slider
              images={[
                {
                  src: "/image/happy_hours/happy-1.jpg",
                  alt: "Restaurant ambiance 1",
                },
                {
                  src: "/image/happy_hours/happy-2.jpg",
                  alt: "Restaurant ambiance 2",
                },
                {
                  src: "/image/happy_hours/happy-3.jpg",
                  alt: "Restaurant ambiance 3",
                },
                {
                  src: "/image/happy_hours/happy-3.jpg",
                  alt: "Restaurant ambiance 3",
                },
                {
                  src: "/image/happy_hours/happy-3.jpg",
                  alt: "Restaurant ambiance 3",
                },
                {
                  src: "/image/happy_hours/happy-3.jpg",
                  alt: "Restaurant ambiance 3",
                },
                {
                  src: "/image/happy_hours/happy-3.jpg",
                  alt: "Restaurant ambiance 3",
                },
                {
                  src: "/image/happy_hours/happy-4.jpg",
                  alt: "Restaurant ambiance 4",
                },
              ]}
              defaultWidth={{
                mobile: "120px",
                sm: "120px",
                md: "180px",
                lg: "250px",
              }}
              settings={{
                dots: true,
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                speed: 4000,
                autoplaySpeed: 100,
                cssEase: "linear",
                arrows: true,
                pauseOnHover: true,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      autoplay: true,
                      speed: 2000,
                      autoplaySpeed: 2000,
                      cssEase: "linear",
                    },
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      arrows: false,
                      autoplay: true,
                      speed: 2000,
                      autoplaySpeed: 2000,
                      cssEase: "linear",
                    },
                  },
                  {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: false,
                      dots: true,
                      autoplay: true,
                      speed: 2000,
                      autoplaySpeed: 2000,
                      cssEase: "linear",
                    },
                  },
                ],
              }}
              className=""
            />
          </section>
          {/* Background Outline Text */}
          <div className="absolute inset-0 pointer-events-none marquee-track">
            <h1 className="bg-outline-text-about marquee-item">
              YOUR WILL REMEMBER THIS WITH A INDIAN TASTE <br /> THIS YOUR WILL
              REMEMBER THIS WITH A INDIAN TASTE
            </h1>
          </div>
        </section>

        <Footer />
      </div>
    </Background>
  );
}
