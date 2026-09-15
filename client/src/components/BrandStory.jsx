import { motion } from "framer-motion";
import { storyImage } from "../data/products";
import RevealText from "./RevealText";
import RevealImage from "./RevealImage";

export default function BrandStory() {
  return (
    <section className="bg-bone text-ink py-0 overflow-hidden">
      <div className="grid md:grid-cols-2">
        <RevealImage
          src={storyImage}
          alt="Atelier Noir workshop"
          className="h-[420px] md:h-[640px]"
          panelColor="bg-ink"
        />

        <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
          <div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "120%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                className="text-xs tracking-[0.3em] uppercase text-ink/50 mb-5"
              >
                Our Philosophy
              </motion.p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
              <RevealText>Fewer pieces.</RevealText>
              <RevealText delay={0.12} className="italic">
                Made to last decades.
              </RevealText>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-ink/60 text-sm leading-relaxed mb-6 max-w-md"
            >
              Every garment begins with fabric sourced from mills we've worked
              with for years — long-staple cottons, responsibly raised wool,
              and deadstock silks. We cut small runs, finish every seam by
              hand, and refuse to chase trend cycles. The result is a
              wardrobe you build once, not one you replace every season.
            </motion.p>
            <motion.a
              href="#"
              data-cursor-hover
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block text-xs tracking-[0.2em] uppercase border-b border-ink/30 pb-1 hover:border-ink transition-colors"
            >
              Read Our Story
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
