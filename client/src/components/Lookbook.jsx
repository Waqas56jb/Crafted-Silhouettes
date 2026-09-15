import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lookbook } from "../data/products";

gsap.registerPlugin(ScrollTrigger);

export default function Lookbook() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const distance = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="lookbook"
      ref={containerRef}
      className="relative bg-ink overflow-hidden"
    >
      <div className="absolute top-12 left-6 md:left-16 z-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
          The Lookbook
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-bone">
          Scroll to <span className="italic">explore</span>
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex h-screen items-center gap-6 pl-6 md:pl-16 pr-6 w-max"
      >
        {lookbook.map((src, i) => (
          <div
            key={i}
            className={`relative shrink-0 overflow-hidden bg-ink-soft ${
              i % 2 === 0 ? "w-[65vw] md:w-[32vw] h-[70vh]" : "w-[50vw] md:w-[22vw] h-[50vh] self-end"
            }`}
          >
            <img
              src={src}
              alt={`Lookbook piece ${i + 1}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
