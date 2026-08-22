// src/app/products/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Database,
  FlaskConical,
  Satellite,
  ArrowRight,
} from "lucide-react";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products | Brixta",
  description:
    "Explore Brixta's four product lines: Field Force Management, Vector Embedding Infrastructure, Industrial Research Simulator, and Satellite Geo-Mapping.",
};

const productIcons: Record<string, React.ElementType> = {
  "field-force": Users,
  "vector-embeddings": Database,
  "research-simulator": FlaskConical,
  "geo-mapping": Satellite,
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white font-sans px-4 sm:px-6 lg:px-8 pt-40 pb-24">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Products</h1>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
          Purpose-built software for field, data, and research teams.
        </p>
        <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
          Four products, one philosophy: automate what&apos;s manual, and cut
          the cost of what&apos;s expensive.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => {
          const Icon = productIcons[product.slug] ?? Database;
          return (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col transition-colors duration-200 hover:border-slate-700 hover:bg-slate-900/70"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-linear-to-br ${product.accent.from} ${product.accent.to}`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>

              <div className={`mt-6 text-xs font-mono uppercase tracking-wider ${product.accent.text}`}>
                {product.category}
              </div>
              <h2 className="text-2xl font-bold text-white mt-2 tracking-tight">
                {product.name}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mt-3 mb-6">
                {product.summary}
              </p>

              <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-white">
                Learn more
                <ArrowRight className="w-4 h-4 opacity-60 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}