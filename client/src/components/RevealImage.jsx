import { motion } from "framer-motion";

const imgVariants = {
  hidden: { scale: 1.3 },
  visible: { scale: 1 },
};

const panelVariants = {
  hidden: { scaleX: 1 },
  visible: { scaleX: 0 },
};

export default function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  delay = 0,
  panelColor = "bg-gold",
}) {
  const isAbsolute = /\babsolute\b/.test(className);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={`${isAbsolute ? "" : "relative"} overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        variants={imgVariants}
        transition={{ duration: 1.3, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute inset-0 w-full h-full object-cover ${imgClassName}`}
      />
      <motion.div
        variants={panelVariants}
        transition={{ duration: 0.85, delay: delay + 0.12, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "right" }}
        className={`absolute inset-0 z-10 ${panelColor}`}
      />
    </motion.div>
  );
}
