const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const categories = [
  {
    id: "women",
    label: "Women",
    image: img("photo-1441986300917-64674bd600d8"),
  },
  {
    id: "men",
    label: "Men",
    image: img("photo-1558769132-cb1aea458c5e"),
  },
  {
    id: "outerwear",
    label: "Outerwear",
    image: img("photo-1445205170230-053b83016050"),
  },
  {
    id: "accessories",
    label: "Accessories",
    image: img("photo-1512436991641-6745cdb1723f"),
  },
];

export const products = [
  {
    id: "p1",
    name: "Silk Wrap Blouse",
    category: "Women",
    price: 128,
    image: img("photo-1490481651871-ab68de25d43d"),
  },
  {
    id: "p2",
    name: "Tailored Wide-Leg Trousers",
    category: "Women",
    price: 164,
    image: img("photo-1483985988355-763728e1935b"),
  },
  {
    id: "p3",
    name: "Oversized Wool Coat",
    category: "Outerwear",
    price: 340,
    image: img("photo-1445205170230-053b83016050"),
  },
  {
    id: "p4",
    name: "Merino Crewneck Sweater",
    category: "Men",
    price: 98,
    image: img("photo-1489987707025-afc232f7ea0f"),
  },
  {
    id: "p5",
    name: "Structured Blazer",
    category: "Women",
    price: 256,
    image: img("photo-1516762689617-e1cffcef479d"),
  },
  {
    id: "p6",
    name: "Leather Chelsea Boots",
    category: "Accessories",
    price: 210,
    image: img("photo-1512436991641-6745cdb1723f"),
  },
  {
    id: "p7",
    name: "Cotton Poplin Shirt",
    category: "Men",
    price: 86,
    image: img("photo-1558769132-cb1aea458c5e"),
  },
  {
    id: "p8",
    name: "Statement Sneakers",
    category: "Accessories",
    price: 120,
    image: img("photo-1560769629-975ec94e6a86"),
  },
  {
    id: "p9",
    name: "Pleated Midi Skirt",
    category: "Women",
    price: 142,
    image: img("photo-1551232864-3f0890e580d9"),
  },
  {
    id: "p10",
    name: "Quilted Bomber Jacket",
    category: "Outerwear",
    price: 298,
    image: img("photo-1576566588028-4147f3842f27"),
  },
  {
    id: "p11",
    name: "Linen Blend Shirt",
    category: "Men",
    price: 92,
    image: img("photo-1441986300917-64674bd600d8"),
  },
  {
    id: "p12",
    name: "Minimal Leather Tote",
    category: "Accessories",
    price: 230,
    image: img("photo-1523381210434-271e8be1f52b"),
  },
];

export const heroImage = img("photo-1515886657613-9f3515b0c78f");
export const storyImage = img("photo-1558769132-cb1aea458c5e");

export const lookbook = [
  img("photo-1509631179647-0177331693ae"),
  img("photo-1490481651871-ab68de25d43d"),
  img("photo-1516762689617-e1cffcef479d"),
  img("photo-1551232864-3f0890e580d9"),
  img("photo-1523381210434-271e8be1f52b"),
];

export const testimonials = [
  {
    quote:
      "The tailoring is impeccable — every piece feels like it was made for me. ATELIER NOIR has replaced half my wardrobe.",
    author: "Simone R.",
    role: "Verified Buyer",
  },
  {
    quote:
      "Rare to find fabric quality like this at this price. The wool coat is the best investment piece I own.",
    author: "Daniel K.",
    role: "Verified Buyer",
  },
  {
    quote:
      "Fast shipping, gorgeous packaging, and the fit guide was spot on. This is my go-to for essentials now.",
    author: "Priya M.",
    role: "Verified Buyer",
  },
];
