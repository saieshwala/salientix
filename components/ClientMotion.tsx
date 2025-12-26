"use client";

import { motion } from "framer-motion";

export default function ClientMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      className="pt-24 min-h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}
