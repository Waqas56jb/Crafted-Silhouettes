import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-ink grain">
      <Hero3D />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold text-xs tracking-[0.4em] uppercase mb-6"
        >
          Autumn / Winter Collection
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-display text-[13vw] md:text-[7vw] leading-[0.95] text-bone"
        >
          Crafted <br />
          <span className="italic text-outline">Silhouettes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-md text-bone/60 text-sm leading-relaxed"
        >
          Considered materials. Precise tailoring. A wardrobe built for the
          way you actually move through the world — season after season.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex items-center gap-5"
        >
          <a
            href="#shop"
            className="bg-gold text-ink px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold-soft transition-colors"
          >
            Shop the Edit
          </a>
          <a
            href="#lookbook"
            className="text-bone text-xs tracking-[0.2em] uppercase border-b border-bone/30 pb-1 hover:border-gold hover:text-gold transition-colors"
          >
            View Lookbook
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bone/40 z-10"
      >
        <ArrowDown size={18} strokeWidth={1.2} />
      </motion.div>
    </section>
  );
}
