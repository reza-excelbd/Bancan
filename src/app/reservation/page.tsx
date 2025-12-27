//menu page
"use client";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Banner from "@/components/shared/banner/banner";
import Background from "@/components/background/background";
import BannerForm from "@/components/reservation/BannerFrom";

export default function ReservationPage() {
  return (
    <Background>
      <div className="flex flex-col min-h-screen relative">
        {/* Header and Banner Section */}
        <main className="relative min-h-[66.66vh]">
          <Header />
          <Banner
            className="bg-deep_teal absolute top-0 left-0 w-full h-full -z-10"
            title="RESERVATION"
          />
        </main>

        {/* Our Categories Section */}
        <section className="bg-transparent w-full relative z-10">
          <BannerForm
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              console.log("submitted");
              console.log(e);
              //auto refresh off
            }}
          />
          
        </section>

        <Footer />
      </div>
    </Background>
  );
}
