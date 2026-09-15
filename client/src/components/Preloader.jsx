import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center"
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="font-display text-3xl md:text-5xl tracking-[0.2em] text-bone flex items-baseline gap-1"
            >
              <span className="text-gold italic">A</span>
              <span>TELIER</span>
              <span className="text-gold ml-3">NOIR</span>
            </motion.div>
          </div>

          <div className="mt-8 h-px w-40 bg-white/10 overflow-hidden relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
              style={{ transformOrigin: "left" }}
              className="absolute inset-0 bg-gold"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 text-[10px] tracking-[0.35em] uppercase text-bone/40"
          >
            Autumn / Winter
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
