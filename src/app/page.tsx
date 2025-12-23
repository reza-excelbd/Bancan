import Image from "next/image";
import Loading from "./loading";
import Header from "@/components/header/header";
import Banner from "@/components/landing_banner/banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-1 absolute top-0 left-0 w-full h-full -z-10">
        <Banner />
      </main>
    </div>
  );
}
