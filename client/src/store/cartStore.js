import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,

  add: (product) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          ),
          isOpen: true,
        };
      }
      return { items: [...state.items, { ...product, qty: 1 }], isOpen: true };
    }),

  remove: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),

  count: () => get().items.reduce((sum, i) => sum + i.qty, 0),
  total: () => get().items.reduce((sum, i) => sum + i.qty * i.price, 0),
}));
