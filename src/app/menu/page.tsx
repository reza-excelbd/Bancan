//menu page

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Banner from "@/components/shared/banner/banner";
import Category from "@/components/Category/category";

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Header and Banner Section */}
      <main className="relative min-h-[66.66vh]">
        <Header />
        <Banner
          className="bg-deep_teal absolute top-0 left-0 w-full h-full -z-10"
          title="MENU"
        />
      </main>

      {/* Our Categories Section */}
      <section className="bg-white w-full relative z-10"></section>

      <Footer />
    </div>
  );
}
