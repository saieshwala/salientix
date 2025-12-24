"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0C10] text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-cyan-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-40 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            Intelligent software.
            <br />
            Built for scale.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Salientix builds AI-driven systems that help businesses sell,
            operate, and grow — reliably and securely.
          </p>
          <div className="flex justify-center gap-6">
            <a className="px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition">
              Explore products
            </a>
            <a className="px-6 py-3 rounded-xl border border-white/20 text-sm hover:border-white/40 transition">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-t border-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center text-white/50 text-sm">
          Built with enterprise-grade security • NDA-ready • Designed for
          long-term scale
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-10"
        >
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <h3 className="text-xl mb-3">AI Commerce Systems</h3>
            <p className="text-white/60 text-sm">
              Intelligent systems that guide buyers, remove friction, and
              improve conversion.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <h3 className="text-xl mb-3">Automation Platforms</h3>
            <p className="text-white/60 text-sm">
              Software that replaces manual workflows with reliable,
              scalable automation.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <h3 className="text-xl mb-3">Business Intelligence Tools</h3>
            <p className="text-white/60 text-sm">
              Systems designed to support decisions, not overwhelm users
              with data.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 py-40 text-center">
          <h2 className="text-4xl md:text-5xl mb-8">
            Let’s build intelligent systems.
          </h2>
          <a className="px-8 py-4 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition">
            Contact Salientix
          </a>
        </div>
      </section>
    </main>
  );
}
