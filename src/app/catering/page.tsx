//menu page

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Banner from "@/components/shared/banner/banner";
import Background from "@/components/background/background";
import CateringParent from "@/components/catering/cataring_parent";

export default function CateringPage() {
  return (
    <Background>
      <div className="flex flex-col min-h-screen relative">
        {/* Header and Banner Section */}
        <main className="relative min-h-[66.66vh]">
          <Header />
          <Banner
            className="bg-deep_teal absolute top-0 left-0 w-full h-full -z-10"
            title="CATERING"
          />
        </main>

        {/* Catering Sections */}
        <section className="bg-transparent w-full relative z-10 py-8 sm:py-12 md:py-16">
          <CateringParent />
        </section>

        <Footer />
      </div>
    </Background>
  );
}
