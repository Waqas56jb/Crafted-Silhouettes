import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Hero3D from "./Hero3D";
import RevealText from "./RevealText";
import Magnetic from "./Magnetic";

const INTRO = 2.1; // sits right behind the preloader curtain lift

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[560px] w-full overflow-hidden bg-ink grain">
      <Hero3D />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent sm:from-ink sm:via-ink/25 sm:to-transparent pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "120%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, delay: INTRO, ease: [0.19, 1, 0.22, 1] }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-6"
          >
            Autumn / Winter Collection
          </motion.p>
        </div>

        <h1 className="font-display text-[13vw] md:text-[7vw] leading-[0.95] text-bone">
          <RevealText delay={INTRO + 0.1} duration={1}>
            Crafted
          </RevealText>
          <RevealText delay={INTRO + 0.25} duration={1} className="italic text-outline">
            Silhouettes
          </RevealText>
        </h1>

        <div className="overflow-hidden mt-8 max-w-md">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: INTRO + 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="text-bone/60 text-sm leading-relaxed"
          >
            Considered materials. Precise tailoring. A wardrobe built for the
            way you actually move through the world — season after season.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: INTRO + 0.7 }}
          className="mt-10 flex items-center gap-5"
        >
          <Magnetic>
            <a
              href="#shop"
              data-cursor-hover
              className="inline-block bg-gold text-ink px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold-soft transition-colors"
            >
              Shop the Edit
            </a>
          </Magnetic>
          <a
            href="#lookbook"
            data-cursor-hover
            className="text-bone text-xs tracking-[0.2em] uppercase border-b border-bone/30 pb-1 hover:border-gold hover:text-gold transition-colors"
          >
            View Lookbook
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: INTRO + 1, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: INTRO + 1 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bone/40 z-10"
      >
        <ArrowDown size={18} strokeWidth={1.2} />
      </motion.div>
    </section>
  );
}
