import { cn } from "@/lib/utils";

export default function CTA({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <WelcomeText />
      <h1 className="text-white text-7xl font-extrabold font-['Oswald'] text-center uppercase mt-4 space-x-0">
        Your city&apos;s best <br /> food spot
      </h1>
    </div>
  );
}

const WelcomeText = ({ className }: { className?: string }) => {
  return (
    <h1
      className={cn(
        " text-2xl font-semibold font-['Oswald'] text-center uppercase tracking-widest text-welcome_yellow",
        className
      )}
    >
      welcome to bancan Kitchen
    </h1>
  );
};
