import type { Metadata } from "next";
import { products } from "../../data/products";
import Card from "../../components/Card";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Salientix products including Seller AI and upcoming automation platforms.",
};

export default function ProductsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-40 pb-32">
      
      {/* Heading */}
      <div className="mb-20 max-w-2xl">
       <h1 className="text-4xl font-semibold mb-4">
  <span style={{ color: "#2563eb" }}>Products</span>
</h1>

        <p className="text-white/60">
          A growing ecosystem of intelligent software products built by Salientix.
        </p>
      </div>

      {/* Product grid */}
      <div className="grid md:grid-cols-3 gap-12">
  {products.map((p, i) => (
    <Card key={p.name} delay={i * 0.05}>
      <p
        className="text-xs uppercase tracking-wider mb-3"
        style={{ color: "#2563eb" }}
      >
        {p.status}
      </p>

      <h2 className="text-xl font-medium mb-3">
        {p.name}
      </h2>

      <p className="text-sm leading-relaxed text-white/65">
        {p.description}
      </p>
    </Card>
  ))}
</div>


    </section>
  );
}
