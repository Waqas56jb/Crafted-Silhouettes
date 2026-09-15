import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/products";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const go = (dir) =>
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);

  return (
    <section className="bg-ink py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="mx-auto text-gold mb-8" size={32} strokeWidth={1} />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display italic text-2xl md:text-3xl text-bone leading-snug">
              "{t.quote}"
            </p>
            <p className="mt-6 text-gold text-xs tracking-[0.2em] uppercase">
              {t.author}
            </p>
            <p className="text-bone/40 text-xs mt-1">{t.role}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => go(-1)}
            className="text-bone/50 hover:text-gold transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? "bg-gold" : "bg-bone/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="text-bone/50 hover:text-gold transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
