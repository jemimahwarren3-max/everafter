export function Marquee({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  const content = words.join("  •  ") + "  •  ";

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <div className="inline-flex animate-marquee">
        <span className="font-heading text-4xl sm:text-5xl">{content}</span>
        <span className="font-heading text-4xl sm:text-5xl">{content}</span>
      </div>
    </div>
  );
}
