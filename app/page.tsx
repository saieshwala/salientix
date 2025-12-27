import Link from "next/link";
import FocusCard from "../components/FocusCard";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 pt-48 pb-40">
        <div className="absolute inset-0 -z-10 bg-stars" />

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8">
          Intelligent software,
          <br />
          built by <span className="text-blue-600">Salientix</span>.
        </h1>

        <p className="max-w-xl text-lg text-white/70 mb-12">
          Salientix builds AI-driven systems that help businesses
          operate, sell, and scale with clarity and confidence.
        </p>

        <div className="flex gap-4">
          <Link
            href="/products"
            className="
              px-7 py-3 rounded-md text-sm font-medium text-white
              bg-blue-600 glow-blue
              hover:-translate-y-1 transition-all duration-300
            "
          >
            View products
          </Link>

          <Link
            href="/about"
            className="
              px-7 py-3 rounded-md border border-white/30
              text-sm hover:border-white/60 transition
            "
          >
            About Salientix
          </Link>
        </div>
      </section>

      {/* OUR FOCUS */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 -z-10 bg-stars" />

        <div className="max-w-6xl mx-auto px-6 py-32">
          <h2 className="text-3xl font-semibold mb-2">What We Do</h2>
          <p className="text-blue-600 mb-12">Our Focus</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            <FocusCard text="Intelligent customer interaction" />
            <FocusCard text="Business automation" />
            <FocusCard text="Scalable cloud-based systems" />
            <FocusCard text="Data-driven decision support" />
          </div>
        </div>
      </section>

      {/* WHY SALIENTIX */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 -z-10 bg-stars" />

        <div className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20">

          <div>
            <h3 className="text-2xl font-semibold mb-4">Why Salientix</h3>
            <p className="text-blue-600 mb-6">Our Approach</p>

            <ul className="space-y-3 text-white/70">
              <li>• Practical and easy-to-use technology</li>
              <li>• Built for performance and scalability</li>
              <li>• Security-focused architecture</li>
              <li>• Designed for measurable business impact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 invisible md:visible"><br></br></h3>
            <p className="text-blue-600 mb-6">What Businesses Gain</p>

            <ul className="space-y-3 text-white/70">
              <li>• Better customer experience</li>
              <li>• Higher engagement and retention</li>
              <li>• Streamlined workflows</li>
              <li>• Sustainable digital growth</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 -z-10 bg-stars" />

        <div className="max-w-6xl mx-auto px-6 py-32">
          <h2 className="text-3xl font-semibold mb-2">Contact & Connect</h2>
          <p className="text-blue-600 mb-12">Get in Touch</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">

            {[
              ["Email", "contact@salientix.com", "mailto:contact@salientix.com"],
              ["Instagram", "instagram.com/salientix.ai", "https://instagram.com/salientix.ai"],
              ["LinkedIn", "linkedin.com/company/salientix", "#"],
              ["Website", "www.salientix.com", "/"],
            ].map(([title, label, link]) => (
              <a
                key={title}
                href={link}
                className="
                  border border-blue-600/60 rounded-xl px-6 py-4
                  bg-black/40 backdrop-blur
                  glow-hover transition-all
                "
              >
                <p className="font-medium">{title}</p>
                <p className="text-sm text-white/70">{label}</p>
              </a>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
