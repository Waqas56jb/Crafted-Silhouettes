const ITEMS = [
  "New Season Arrivals",
  "Free Shipping Over $150",
  "Sustainably Sourced Fabrics",
  "Crafted in Small Batches",
  "30-Day Returns",
];

export default function MarqueeStrip() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative bg-gold text-ink py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-xs tracking-[0.2em] uppercase font-medium flex items-center gap-6"
          >
            {item} <span className="text-ink/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
