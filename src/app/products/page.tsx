// src/app/products/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Database,
  FlaskConical,
  Satellite,
  ArrowUpRight,
} from "lucide-react";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products | Brixta",
  description:
    "Explore Brixta's four enterprise product lines: Field Force Management, Vector Embedding Infrastructure, Industrial Research Simulator, and Satellite Geo-Mapping.",
};

const productIcons: Record<string, React.ElementType> = {
  "field-force-management-suite": Users,
  "vector-embedding-infrastructure": Database,
  "industrial-research-simulator": FlaskConical,
  "satellite-geo-mapping-platform": Satellite,
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#121212] pt-20 pb-28 arch-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Metadata */}
        <div className="flex items-center gap-4 pb-6 mb-12 border-b border-[#121212]/15 text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/70">
          <span>[ BRIXTA ENTERPRISE ]</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight uppercase leading-[0.95] mb-6">
            Software for <br />
            <span className="text-[#121212]/40">complex operations.</span>
          </h1>
          <p className="text-lg text-[#121212]/75 leading-relaxed">
            Four specialized enterprise products built on one philosophy: automate manual data, map topographical realities, and simulate physical logistics before deploying capital.
          </p>
        </div>

        {/* Architectural Grid for Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#121212]/15 border border-[#121212]/15">
          {products.map((product) => {
            const Icon = productIcons[product.slug] ?? Database;
            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="bg-[#F5F3EE] p-8 sm:p-10 flex flex-col hover:bg-[#EFECE6] transition-colors group h-full"
              >
                <div className="flex items-start justify-between mb-10">
                  <div className="w-12 h-12 bg-[#121212] text-[#F5F3EE] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Status Indicator */}
                  <div className="border border-[#121212]/20 bg-[#F5F3EE] px-3 py-1.5 flex items-center gap-2">
                    <span 
                      className={`w-1.5 h-1.5 rounded-full ${product.isBeta ? 'bg-amber-500' : 'bg-green-600'}`}
                    ></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#121212]">
                      {product.isBeta ? 'Beta' : 'Live'}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-[#121212] uppercase tracking-tight mb-3">
                  {product.name}
                </h2>
                <p className="text-sm text-[#121212]/75 leading-relaxed mb-10">
                  {product.tagline}
                </p>

                <div className="mt-auto flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#121212]">
                  <span>System Architecture</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}