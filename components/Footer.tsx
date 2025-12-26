import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 text-sm text-white/60 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <p className="font-medium text-white mb-2">Salientix</p>
          <p>Intelligent software systems for modern businesses.</p>
        </div>

        {/* Company */}
        <div>
          <p className="font-medium text-white mb-2">Company</p>
          <p>
            <Link href="/products" className="hover:text-white transition">
              Products
            </Link>
          </p>
          <p>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
          </p>
        </div>

        {/* Social */}
        {/* Contact */}
<div>
  <p className="font-medium text-white mb-2">Connect</p>

  <p>
    <Link
      href="https://www.instagram.com/salientix.ai/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      Instagram
    </Link>
  </p>

  <p className="mt-2">
    <a
      href="mailto:contact@salientix.com"
      className="hover:text-white transition"
    >
      contact@salientix.com
    </a>
  </p>
</div>


      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-white/40 flex justify-between">
          <span>© {new Date().getFullYear()} Salientix</span>
          <span>NDA-ready • Privacy-first</span>
        </div>
      </div>
    </footer>
  );
}
