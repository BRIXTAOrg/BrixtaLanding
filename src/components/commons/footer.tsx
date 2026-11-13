// src/components/commons/footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#F5F3EE] border-t border-[#F5F3EE]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#F5F3EE]/15">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 bg-[#F5F3EE] flex items-center justify-center">
                <Image
                  src="/brixta.webp"
                  alt="Brixta Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-[#F5F3EE]">
                BRIXTA
              </span>
            </Link>

            <p className="text-sm text-[#F5F3EE]/70 max-w-sm leading-relaxed">
              On-site engineering estimation, fixed skilled construction crews,
              and scheduled raw material deliveries for independent house
              builders.
            </p>

            <div className="pt-2 text-xs font-mono text-[#F5F3EE]/60 space-y-1">
              <p>WHATSAPP DESK: +91 76358 74931</p>
              <p>EMAIL: connect@brixta.site</p>
              <p>GUWAHATI, ASSAM, INDIA</p>
            </div>
          </div>

          {/* Core Homebuilding Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#F5F3EE]/50">
              Core Site Service
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F5F3EE]/80">
              <li>
                <a href="#the-reality" className="hover:text-white transition-colors">
                  Why Self-Builders Choose Us
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Free On-Site Engineer Visit
                </a>
              </li>
              <li>
                <a href="#crew-and-supply" className="hover:text-white transition-colors">
                  Fixed Crew (1 Day → 1 Year)
                </a>
              </li>
              <li>
                <a href="#crew-and-supply" className="hover:text-white transition-colors">
                  Scheduled Raw Materials
                </a>
              </li>
              <li>
                <a href="#business-model" className="hover:text-white transition-colors">
                  How We Earn Money
                </a>
              </li>
            </ul>
          </div>

          {/* The 4 Extra Digital/Enterprise Services under "Products" */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#F5F3EE]/50">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F5F3EE]/80">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#F5F3EE]/50">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F5F3EE]/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5F3EE]/50 font-mono">
          <p>© {new Date().getFullYear()} BRIXTA CORPORATION. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 sm:mt-0">BUILD YOUR HOME. NOT YOUR LABOUR WORRIES.</p>
        </div>
      </div>
    </footer>
  );
}