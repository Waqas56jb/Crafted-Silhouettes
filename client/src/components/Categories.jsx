import { motion } from "framer-motion";
import { categories } from "../data/products";

export default function Categories() {
  return (
    <section className="bg-ink py-24 px-6" id="shop">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-bone">
            Shop by <span className="italic text-gold">Category</span>
          </h2>
          <p className="hidden md:block text-bone/50 text-sm max-w-xs text-right">
            Four capsules, endless combinations. Built to move seamlessly
            from studio to street.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              href="#"
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative aspect-[3/4] overflow-hidden bg-ink-soft"
            >
              <img
                src={cat.image}
                alt={cat.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <span className="text-bone font-display text-xl italic">
                  {cat.label}
                </span>
                <div className="h-px w-0 bg-gold mt-2 transition-all duration-500 group-hover:w-12" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
