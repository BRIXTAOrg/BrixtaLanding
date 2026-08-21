// src/components/commons/navBar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Database,
  FlaskConical,
  Satellite,
  ArrowRight,
  Mail,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { products } from "@/lib/products";

const productIcons: Record<string, React.ElementType> = {
  "field-force": Users,
  "vector-embeddings": Database,
  "research-simulator": FlaskConical,
  "geo-mapping": Satellite,
};

export default function NavBar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 w-full flex justify-center px-4">
      <nav
        className="w-full max-w-4xl bg-slate-950/70 backdrop-blur-xl border border-slate-800/80 rounded-3xl md:rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl shadow-blue-950/20"
        onMouseLeave={() => setProductsOpen(false)}
      >
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:scale-102 transition-transform duration-200 select-none cursor-pointer shrink-0"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
            <Image
              src="/brixta.webp"
              alt="Brixta Logo"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <span className="text-sm font-bold tracking-tight text-white hidden sm:inline-block font-sans">
            Brixta
          </span>
        </Link>

        {/* Center: Navigation Links (desktop) */}
        <div className="hidden md:flex items-center gap-1">
          {/* Products dropdown trigger */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-200 cursor-pointer ${
                productsOpen ? "text-white bg-slate-900" : "text-slate-400 hover:text-white"
              }`}
              onClick={() => setProductsOpen((v) => !v)}
            >
              Products
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mega menu panel */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-200 ${
                productsOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="w-[560px] max-w-[90vw] rounded-2xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-black/40 p-3">
                <div className="grid grid-cols-2 gap-2">
                  {products.map((product) => {
                    const Icon = productIcons[product.slug] ?? Database;
                    return (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={() => setProductsOpen(false)}
                        className="group flex flex-col gap-2 rounded-xl p-3.5 hover:bg-slate-900 transition-colors duration-150"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center bg-linear-to-br ${product.accent.from} ${product.accent.to}`}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white flex items-center gap-1">
                            {product.shortName}
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                            {product.category}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Contact tab within the products card */}
                <Link
                  href="/contact"
                  onClick={() => setProductsOpen(false)}
                  className="mt-2 flex items-center justify-between rounded-xl p-3.5 bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900 transition-colors duration-150"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-800">
                      <Mail className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Not sure which fits?
                      </div>
                      <div className="text-xs text-slate-500">
                        Talk to our team about your use case
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/pricing"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 px-3 py-1.5 rounded-full hover:bg-slate-900"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 px-3 py-1.5 rounded-full hover:bg-slate-900"
          >
            Contact
          </Link>
        </div>

        {/* Right: CTA (desktop) */}
        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] cursor-pointer"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-slate-300 hover:bg-slate-900 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 rounded-2xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-2xl p-4 space-y-1">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-600 px-2 pt-1 pb-2">
            Products
          </div>
          {products.map((product) => {
            const Icon = productIcons[product.slug] ?? Database;
            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-slate-900 transition-colors"
              >
                <Icon className={`w-4 h-4 ${product.accent.text}`} />
                <span className="text-sm text-slate-200">{product.shortName}</span>
              </Link>
            );
          })}
          <div className="h-px bg-slate-900 my-2" />
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="block px-2 py-2.5 rounded-lg hover:bg-slate-900 text-sm text-slate-200"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-2 py-2.5 rounded-lg hover:bg-slate-900 text-sm text-slate-200"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}