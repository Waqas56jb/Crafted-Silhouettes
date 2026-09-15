import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import RevealImage from "./RevealImage";

export default function ProductCard({ product, index = 0 }) {
  const add = useCartStore((s) => s.add);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className="group"
    >
      <div className="relative aspect-[3/4]">
        <RevealImage
          src={product.image}
          alt={product.name}
          delay={(index % 4) * 0.08}
          className="absolute inset-0 bg-ink-soft"
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
        <button
          onClick={() => add(product)}
          data-cursor-hover
          className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-bone/95 text-ink flex items-center justify-center opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 hover:bg-gold"
          aria-label={`Add ${product.name} to bag`}
        >
          <Plus size={16} strokeWidth={1.5} />
        </button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-bone text-sm truncate">{product.name}</p>
          <p className="text-bone/40 text-xs mt-1 uppercase tracking-wide">
            {product.category}
          </p>
        </div>
        <span className="text-gold text-sm shrink-0">${product.price}</span>
      </div>
    </motion.div>
  );
}
