// Loading component

import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-vermilion">
      {/* loader image */}
      <Image
        src="/bancan_kitchen.svg"
        alt="bancan kitchen"
        width={352}
        height={293}
        className="w-auto h-auto"
      />
    </div>
  );
}
