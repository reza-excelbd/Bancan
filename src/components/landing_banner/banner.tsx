//banner component

import Biriyani from "./ui/biriyani";
import Cherry from "./ui/cherry";
import CTA from "./ui/CTA";
import Momoch from "./ui/momoch";
import Payesh from "./ui/payesh";
import Singara from "./ui/singara";
import Wave from "./ui/wave";
import Leaf from "./ui/leaf";
export default function Banner() {
  return (
    <div className="bg-deep_teal w-full h-screen relative z-10 overflow-hidden">
      {/* up side 2  images  and middle text*/}
      <section className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Singara className="absolute top-[60px] sm:top-[80px] md:top-[100px] lg:top-[120px] left-0 sm:left-2 md:left-4 lg:left-0" />
        <CTA className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Cherry className="absolute top-[60px] sm:top-[80px] md:top-[100px] lg:top-[120px] right-0 sm:right-2 md:right-4 lg:right-0" />
      </section>
      <Leaf className="absolute top-[25%] sm:top-[28%] md:top-[30%] left-[10%] sm:left-[12%] md:left-[15%] -z-1" />

      {/* down side 3 images */}
      <section className="absolute -bottom-12 sm:-bottom-16 md:-bottom-20 left-0 w-full h-full flex items-center justify-center">
        <Payesh className="absolute bottom-0 left-0 sm:left-2 md:left-4 lg:left-0" />
        <Biriyani className="absolute bottom-0 left-1/2 -translate-x-1/2" />
        <Momoch className="absolute bottom-0 right-0 sm:right-2 md:right-4 lg:right-0" />
      </section>
      <Wave />
    </div>
  );
}
