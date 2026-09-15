import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const FILTERS = ["All", "Women", "Men", "Outerwear", "Accessories"];

export default function FeaturedProducts() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <section className="bg-ink py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="font-display text-4xl md:text-5xl text-bone"
          >
            The <span className="italic text-gold">Essentials</span>
          </motion.h2>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs tracking-[0.15em] uppercase border transition-colors ${
                  filter === f
                    ? "bg-gold text-ink border-gold"
                    : "border-white/15 text-bone/60 hover:border-gold hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {visible.map((p, i) => (
            <ProductCard product={p} index={i} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
