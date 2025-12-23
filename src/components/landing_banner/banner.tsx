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
    <div className="bg-deep_teal w-full h-screen relative z-10">
      {/* up side 2  images  and middle text*/}
      <section className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Singara className="absolute  top-[100px] left-0" />
        <CTA className="absolute  left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Cherry className="absolute  top-[100px] right-0" />
      </section>
      <Leaf className="absolute top-[30%] left-[15%] -z-1" />

      {/* down side 3 images */}
      <section className="absolute -bottom-20 left-0 w-full h-full flex items-center justify-center">
        <Payesh className="absolute bottom-0 left-0" />
        <Biriyani className="absolute bottom-0 left-1/2 -translate-x-1/2" />
        <Momoch className="absolute bottom-0 right-0" />
      </section>
      <Wave />
    </div>
  );
}
