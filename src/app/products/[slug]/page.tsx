// src/app/products/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import { ArrowUpRight, Cpu, Network, Layers } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#121212] arch-grid-bg pt-20 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-[#121212]/15 text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/70">
          <span>
            [ BRIXTA COPRPORATION /{" "}
            <Link href="/" className="hover:text-[#121212] transition-colors">
              PRODUCTS
            </Link>{" "}
            ]
          </span>
          <span>SYSTEM ARCHITECTURE</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-black tracking-tight uppercase leading-[0.95]">
              {product.name}
            </h1>
            <p className="text-xl sm:text-2xl text-[#121212]/70 max-w-2xl mt-4">
              {product.tagline}
            </p>
          </div>
          <div className="lg:col-span-4 border border-[#121212]/20 bg-[#EFECE6] p-6">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#121212]/60 mb-2">
              STATUS
            </span>
            <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#121212]">
              <span 
                className={`w-2 h-2 rounded-full ${product.isBeta ? 'bg-amber-500' : 'bg-green-600'}`}
              ></span>
              {product.isBeta ? 'Still in Beta' : 'Available for Deployment'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/50 mb-4">
                01 / Overview
              </h3>
              <p className="text-lg text-[#121212]/85 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/50 mb-4">
                02 / Core Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#121212]/15 border border-[#121212]/15">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="bg-[#F5F3EE] p-6 flex flex-col gap-4">
                    <Layers className="w-5 h-5 text-[#121212]/60" />
                    <span className="text-sm font-bold leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Specifications Column */}
          <div className="lg:col-span-5">
            <div className="bg-[#121212] text-[#F5F3EE] p-8 sm:p-10 sticky top-28">
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-[#F5F3EE]/15">
                <Cpu className="w-6 h-6" />
                <h3 className="text-2xl font-black uppercase tracking-tight">
                  System Specs
                </h3>
              </div>

              <ul className="space-y-6 mb-12">
                {product.specs.map((spec, idx) => (
                  <li key={idx} className="flex flex-col gap-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#F5F3EE]/50">
                      {spec.label}
                    </span>
                    <span className="text-sm font-bold tracking-wide">
                      {spec.value}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:connect@brixta.site?subject=Enterprise Inquiry"
                className="w-full inline-flex items-center justify-between bg-[#F5F3EE] text-[#121212] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#E2DEC9] transition-colors"
              >
                <span>Request Deployment Specs</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}