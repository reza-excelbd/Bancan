//menu page

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Banner from "@/components/shared/banner/banner";
import Background from "@/components/background/background";
import DeliciousCardParent from "@/components/platers/deliciousCardParent";
import BuffetParent from "@/components/platers/buffetParent";
import PosterWithText from "@/components/platers/posterwithText";

export default function PlattersPage() {
  return (
    <Background>
      <div className="flex flex-col min-h-screen relative">
        {/* Header and Banner Section */}
        <main className="relative min-h-[66.66vh]">
          <Header />
          <Banner
            className="bg-deep_teal absolute top-0 left-0 w-full h-full -z-10"
            title="PLATTERS"
          />
        </main>

        {/* Our Categories Section */}
        <section className="bg-transparent w-full relative z-10 sm:py-10 md:py-0">
          {/*  */}
          {/* card view section */}
          <DeliciousCardParent />
          <BuffetParent />
          <PosterWithText />
        </section>

        <Footer />
      </div>
    </Background>
  );
}
