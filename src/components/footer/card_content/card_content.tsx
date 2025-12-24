//card content component

import { cn } from "@/lib/utils";

export default function ContactInfo({
  className,
  phoneNumbers,
  address,
}: {
  className?: string;
  phoneNumbers: { number: string; type: string }[];
  address: string;
}) {
  return (
    <div className={cn("flex flex-col justify-between", className)}>
      <h3 className="text-white text-sm font-semibold font-['Oswald']">
        Phone:{" "}
        <span>{phoneNumbers.map((phone) => phone.number).join(", ")}</span>
      </h3>
      <address className="text-white text-sm  not-italic font-['Oswald'] font-semibold">
        Address: {address}
      </address>
    </div>
  );
}
