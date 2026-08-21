// src/components/commons/footer.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900/60 text-slate-400 font-sans px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

        {/* Leftmost Branding / Logo Section */}
        <div className="md:col-span-2 flex flex-col justify-between h-full space-y-6">
          <div className="flex items-center gap-3 select-none">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg shadow-blue-500/5">
              <Image
                src="/brixta.webp"
                alt="Brixta Logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Brixta
            </span>
          </div>

          <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
            IT solutions, data solutions, and R&amp;D-driven products that help
            industries automate operations, cut operating cost, and focus
            resources on growth.
          </p>

          <p className="text-xs text-slate-600 font-mono mt-4">
            &copy; {currentYear} Brixta. All rights reserved.
          </p>
        </div>

        {/* Products column */}
        <div className="flex flex-col space-y-3.5 text-sm">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500">Products</span>
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="hover:text-white transition-colors"
            >
              {product.shortName}
            </Link>
          ))}
        </div>

        {/* Company column */}
        <div className="flex flex-col space-y-3.5 text-sm">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500">Company</span>
          <Link href="/about" className="hover:text-white transition-colors">About Brixta</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Sales</Link>
        </div>

        {/* Legal column */}
        <div className="flex flex-col space-y-3.5 text-sm">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500">Legal</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>

      </div>
    </footer>
  );
}