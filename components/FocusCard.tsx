"use client";

import { motion } from "framer-motion";

export default function FocusCard({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        border border-blue-600/60
        rounded-xl px-6 py-4
        text-white/90
        bg-black/40
        backdrop-blur
        glow-blue-soft glow-hover
      "
    >
      {text}
    </motion.div>
  );
}
