import Link from "next/link";
import Card from "../components/Card";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-48 pb-40">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8">
          Intelligent software,
          <br />
          built by Salientix.
        </h1>

        <p className="max-w-xl text-lg mb-12">
          Salientix is a software company building AI-driven systems that help
          businesses operate, sell, and scale with clarity and confidence.
        </p>

        <div className="flex gap-4">
          <Link
            href="/products"
            className="px-7 py-3 rounded-md text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: "#2563eb" }}
          >
            View products
          </Link>

          <Link
            href="/about"
            className="px-7 py-3 rounded-md border border-white/30 text-sm hover:border-white/60 transition"
          >
            About Salientix
          </Link>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-32 grid md:grid-cols-3 gap-16 text-sm">

          <Card delay={0}>
            <h3 className="font-medium mb-3">AI-driven systems</h3>
            <p>
              Intelligent software designed to handle real business complexity
              without adding operational friction.
            </p>
          </Card>

          <Card delay={0.05}>
            <h3 className="font-medium mb-3">Automation platforms</h3>
            <p>
              Systems that replace manual workflows with reliable, scalable
              automation.
            </p>
          </Card>

          <Card delay={0.1}>
            <h3 className="font-medium mb-3">Built for scale</h3>
            <p>
              Architecture designed for long-term growth, security, and
              performance.
            </p>
          </Card>

        </div>
      </section>

      {/* TRUST SIGNAL */}
      <section className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-28 text-sm text-white/60 grid md:grid-cols-3 gap-12">
          <p>Enterprise-grade architecture</p>
          <p>NDA-ready systems</p>
          <p>Long-term product mindset</p>
        </div>
      </section>

    </main>
  );
}
