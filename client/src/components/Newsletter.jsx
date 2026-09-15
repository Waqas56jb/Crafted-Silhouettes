import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative bg-bone text-ink py-24 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl mb-4">
          Join the <span className="italic">Inner Circle</span>
        </h2>
        <p className="text-ink/60 text-sm mb-8">
          Early access to new drops, private sales, and styling notes —
          straight to your inbox. No noise.
        </p>

        {submitted ? (
          <p className="text-sm tracking-wide text-ink">
            You're on the list. Welcome to Atelier Noir.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-ink/20 px-5 py-3.5 text-sm placeholder:text-ink/40 focus:outline-none focus:border-ink"
            />
            <button
              type="submit"
              className="bg-ink text-bone px-7 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-ink-soft transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
