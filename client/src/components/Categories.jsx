import { motion } from "framer-motion";
import { categories } from "../data/products";
import RevealText from "./RevealText";
import RevealImage from "./RevealImage";

export default function Categories() {
  return (
    <section className="bg-ink py-24 px-6" id="shop">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-bone">
            <RevealText>Shop by</RevealText>
            <RevealText delay={0.12} className="italic text-gold">
              Category
            </RevealText>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:block text-bone/50 text-sm max-w-xs text-right"
          >
            Four capsules, endless combinations. Built to move seamlessly
            from studio to street.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <a
              href="#"
              key={cat.id}
              data-cursor-hover
              className="group relative aspect-[3/4] block"
            >
              <RevealImage
                src={cat.image}
                alt={cat.label}
                delay={i * 0.1}
                className="absolute inset-0"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <span className="text-bone font-display text-xl italic">
                  {cat.label}
                </span>
                <div className="h-px w-0 bg-gold mt-2 transition-all duration-500 group-hover:w-12" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
