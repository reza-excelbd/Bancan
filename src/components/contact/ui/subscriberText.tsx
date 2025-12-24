import { cn } from "@/lib/utils";

export default function SubscriberText({
  className,
  text,
  textClassName,
  borderClassName,
}: {
  className?: string;
  text: string;
  textClassName?: string;
  borderClassName?: string;
}) {
  //split the text into an array of words
  const words = text.split(" ");

  // Create the content with circles: [circle] word1 [circle] word2 [circle] word3 [circle]
  const content = [];

  // Add start circle
  content.push(
    <div
      key="start-circle"
      className={cn(
        "border-dark_vermilion border-2 w-6 h-6 rounded-full shrink-0",
        borderClassName
      )}
    />
  );

  // Add each word followed by a circle (grouped together to eliminate gap)
  words.forEach((word, index) => {
    // Group word and circle together
    content.push(
      <div key={`word-circle-${index}`} className="flex items-center">
        <p
          className={cn("text-7xl text-outline font-['Oswald']", textClassName)}
        >
          {word}
        </p>
        <div
          className={cn(
            "border-dark_vermilion border-2 w-6 h-6 rounded-full shrink-0",
            borderClassName
          )}
        />
      </div>
    );
  });

  // Duplicate content for seamless marquee loop
  const duplicatedContent = [...content, ...content, ...content];

  return (
    <div className={cn("marquee w-full overflow-hidden py-4", className)}>
      <div className="marquee-track-no-gap flex items-center gap-2">
        {duplicatedContent.map((item, index) => (
          <div key={index} className="marquee-item flex items-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
