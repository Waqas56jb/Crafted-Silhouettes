import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { useCartStore } from "../store/cartStore";

export default function CartDrawer() {
  const { items, isOpen, close, remove, add } = useCartStore();
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-ink-soft z-[70] flex flex-col border-l border-white/10"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <h3 className="font-display text-xl tracking-wide text-bone">
                Your Bag ({items.reduce((n, i) => n + i.qty, 0)})
              </h3>
              <button onClick={close} className="text-bone/70 hover:text-gold">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.length === 0 && (
                <p className="text-bone/50 text-sm mt-10 text-center">
                  Your bag is empty.
                </p>
              )}
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm text-bone">{item.name}</p>
                      <button
                        onClick={() => remove(item.id)}
                        className="text-bone/40 hover:text-gold text-xs"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-xs text-bone/50 mt-1">{item.category}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 border border-white/15 px-2 py-1">
                        <button onClick={() => remove(item.id)}>
                          <Minus size={12} className="text-bone/70" />
                        </button>
                        <span className="text-xs text-bone">{item.qty}</span>
                        <button onClick={() => add(item)}>
                          <Plus size={12} className="text-bone/70" />
                        </button>
                      </div>
                      <span className="text-sm text-gold">${item.price * item.qty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-6 border-t border-white/10">
              <div className="flex justify-between text-bone mb-4 text-sm">
                <span>Subtotal</span>
                <span className="text-gold">${total}</span>
              </div>
              <button className="w-full bg-gold text-ink py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-gold-soft transition-colors">
                Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
