import { motion } from "framer-motion";
import { storyImage } from "../data/products";

export default function BrandStory() {
  return (
    <section className="bg-bone text-ink py-0">
      <div className="grid md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative h-[420px] md:h-[640px] overflow-hidden"
        >
          <img
            src={storyImage}
            alt="Atelier Noir workshop"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-ink/50 mb-5">
              Our Philosophy
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
              Fewer pieces. <br />
              <span className="italic">Made to last decades.</span>
            </h2>
            <p className="text-ink/60 text-sm leading-relaxed mb-6 max-w-md">
              Every garment begins with fabric sourced from mills we've worked
              with for years — long-staple cottons, responsibly raised wool,
              and deadstock silks. We cut small runs, finish every seam by
              hand, and refuse to chase trend cycles. The result is a
              wardrobe you build once, not one you replace every season.
            </p>
            <a
              href="#"
              className="inline-block text-xs tracking-[0.2em] uppercase border-b border-ink/30 pb-1 hover:border-ink transition-colors"
            >
              Read Our Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
