//footer component

import { cn } from "@/lib/utils";
import LogoArea from "./logo_area/logo_area";
import Image from "next/image";
import Card from "./card/Card";
import ContactInfo from "./card_content/card_content";
import QuickLinks from "./card_content/quick_links";
import SocialLink from "./card_content/socialLink";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer({ className }: { className?: string }) {
  const phoneNumbers = [
    { number: "1234567890", type: "Home" },
    { number: "1234567890", type: "Office" },
  ];
  const quickLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "Services", href: "/services" },
    { text: "Products", href: "/products" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
    { text: "Contact", href: "/contact" },
    { text: "Contact", href: "/contact" },
  ];
  const socialLinks = [
    { text: "Facebook", href: "/facebook", icon: <Facebook /> },
    { text: "Instagram", href: "/instagram", icon: <Instagram /> },
    { text: "Twitter", href: "/twitter", icon: <Twitter /> },
    { text: "LinkedIn", href: "/linkedin", icon: <Linkedin /> },
  ];
  return (
    <div className={cn(className)}>
      <section className="relative bg-black w-full h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:h-[450px] overflow-hidden px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center py-8 sm:py-12 md:py-14 lg:py-16 text-white font-['Oswald'] opacity-40">
          Let&apos;s Talk With Us
        </h1>
        <Image
          src="/image/footer/footer_image.png"
          alt="footer image"
          width={370}
          height={370}
          className="object-cover aspect-square absolute left-0 sm:left-4 md:left-10 lg:left-20 bottom-0 sm:bottom-[-10%] md:bottom-[-5%] lg:bottom-45 translate-y-1/2 -translate-x-1/4 w-[150px] h-auto sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[370px] opacity-50 sm:opacity-70 md:opacity-100"
        />
        <Image
          src="/image/footer/wheat.png"
          alt="wheat"
          width={100}
          height={200}
          className="object-cover aspect-auto absolute right-0 sm:right-4 md:right-10 lg:right-20 top-0 translate-y-1/2 translate-x-1/2 rotate-12 w-[50px] h-auto sm:w-[70px] md:w-[85px] lg:w-[100px] opacity-50 sm:opacity-70 md:opacity-100"
        />
        <section className="relative sm:absolute left-1/2 -translate-x-1/2 gap-4 sm:gap-6 md:gap-8 lg:gap-x-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-0 pb-8 sm:pb-0">
          <Card
            className="w-full sm:max-w-96 h-auto sm:h-40 md:h-44 lg:h-48 bg-dark_vermilion rounded-2xl border border-b-4 border-r-4 border-orange-500"
            titleTextclassName="text-xl sm:text-xl md:text-2xl font-bold text-white font-['Oswald']"
            titleText="Contact Info"
          >
            <ContactInfo
              className="w-full h-full flex flex-col justify-between"
              phoneNumbers={phoneNumbers}
              address="804 Eglinton Ave E, Toronto, ON M4G 2L1"
            />
          </Card>
          <Card
            className="w-full sm:max-w-96 h-auto sm:h-40 md:h-44 lg:h-48 bg-dark_vermilion rounded-2xl border border-b-4 border-r-4 border-orange-500"
            titleTextclassName="text-xl sm:text-xl md:text-2xl font-bold text-white font-['Oswald']"
            titleText="Quick Links"
          >
            <QuickLinks links={quickLinks} />
          </Card>
          <Card
            className="w-full sm:max-w-96 h-auto sm:h-40 md:h-44 lg:h-48 bg-dark_vermilion rounded-2xl border border-b-4 border-r-4 border-orange-500 sm:col-span-2 lg:col-span-1"
            titleTextclassName="text-xl sm:text-xl md:text-2xl font-bold text-white font-['Oswald']"
            titleText="Social"
          >
            <SocialLink links={socialLinks} />
          </Card>
        </section>
      </section>

      <LogoArea className="w-full" />
    </div>
  );
}
