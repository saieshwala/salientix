"use client";

import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function Card({ children, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className="border border-white/10 rounded-xl p-8 bg-black
                 hover:border-white/20 transition"
    >
      {children}
    </motion.div>
  );
}
