import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Logo from "./Logo";
import { useCartStore } from "../store/cartStore";

const LINKS = ["Women", "Men", "Outerwear", "Accessories", "Journal"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openCart = useCartStore((s) => s.open);
  const count = useCartStore((s) => s.items.reduce((n, i) => n + i.qty, 0));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-lg border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        <ul className="hidden md:flex items-center gap-9 text-xs tracking-[0.15em] uppercase text-bone/80">
          {LINKS.map((link) => (
            <li key={link}>
              <a href="#" className="relative group py-1">
                {link}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 text-bone">
          <button aria-label="Search" className="hover:text-gold transition-colors">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Cart"
            onClick={openCart}
            className="relative hover:text-gold transition-colors"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-ink text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {count}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink md:hidden"
          >
            <div className="flex justify-between items-center px-6 py-6">
              <Logo />
              <button onClick={() => setMobileOpen(false)} className="text-bone">
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-8 mt-16 font-display text-3xl italic text-bone">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a href="#" onClick={() => setMobileOpen(false)}>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
