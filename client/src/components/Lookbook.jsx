import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lookbook } from "../data/products";
import RevealText from "./RevealText";

gsap.registerPlugin(ScrollTrigger);
// Prevent iOS/Android address-bar show/hide from re-triggering ScrollTrigger's
// resize handling mid-scroll, which otherwise jitters this pinned section.
ScrollTrigger.config({ ignoreMobileResize: true });

export default function Lookbook() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const imageRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const getDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      // Each frame drifts into focus (scale + brightness) as it nears
      // center, then settles back — a cinematic "story beat" per image
      // instead of a flat, static strip.
      imageRefs.current.forEach((img) => {
        if (!img) return;
        gsap.fromTo(
          img,
          { scale: 0.82, filter: "brightness(0.55)" },
          {
            scale: 1,
            filter: "brightness(1)",
            ease: "none",
            scrollTrigger: {
              trigger: img,
              containerAnimation: tween,
              start: "left 82%",
              end: "left 40%",
              scrub: true,
            },
          }
        );
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
          <RevealText>
            Scroll to <span className="italic">explore</span>
          </RevealText>
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex h-dvh items-center gap-6 pl-6 md:pl-16 pr-6 w-max"
      >
        {lookbook.map((src, i) => (
          <div
            key={i}
            className={`relative shrink-0 overflow-hidden bg-ink-soft ${
              i % 2 === 0 ? "w-[65vw] md:w-[32vw] h-[70vh]" : "w-[50vw] md:w-[22vw] h-[50vh] self-end"
            }`}
          >
            <img
              ref={(el) => (imageRefs.current[i] = el)}
              src={src}
              alt={`Lookbook piece ${i + 1}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-6 right-6 md:left-16 md:right-16 h-px bg-white/10">
        <div
          ref={progressRef}
          style={{ transformOrigin: "left" }}
          className="h-full bg-gold scale-x-0"
        />
      </div>
    </section>
  );
}
