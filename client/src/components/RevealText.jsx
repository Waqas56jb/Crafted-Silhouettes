import { motion } from "framer-motion";

const EASE = [0.19, 1, 0.22, 1];

const variants = {
  hidden: { y: "115%", rotate: 3 },
  visible: { y: "0%", rotate: 0 },
};

export default function RevealText({ children, className = "", delay = 0, duration = 1 }) {
  return (
    <motion.span
      className={`block overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.span
        className="block will-change-transform"
        variants={variants}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
