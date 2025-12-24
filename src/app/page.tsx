import Header from "@/components/header/header";
import Banner from "@/components/landing_banner/banner";
import CountryCategory from "@/components/country_category/country_category";
// import FloatingButtonComponent from "@/components/floating_button/floating_button";
import Category from "@/components/Category/category";
import HappyHours from "@/components/happy_hours/happy_hours";
import SignatureFoods from "@/components/signature_foods/signature_foods";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import FloatingButtonComponent from "@/components/floating_button/floating_button";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <main className="flex-1 absolute top-0 left-0 w-full h-full -z-10">
          <Banner />
        </main>
      </div>
      <main className="bg-white z-10 h-auto sm:h-[50%] md:h-[55%] lg:h-[60%] relative">
        <CountryCategory />
      </main>

      {/* Category section rendered after everything else in normal flow */}
      <Category className="w-full bg-white px-4 sm:px-8 md:px-10 lg:px-14 relative z-10" />
      <HappyHours />
      <SignatureFoods className="bg-white" />
      <Contact className="bg-white" />
      <Footer className="w-full" />

      {/* floating button component statically positioned at the bottom middle of the screen */}
      <FloatingButtonComponent className="fixed bottom-2 left-1/2 -translate-x-1/2 z-10 bg-dark_vermilion px-2 py-0.5  w-[388px] h-[69px] rounded-xl flex items-center justify-evenly " />
    </div>
  );
}
