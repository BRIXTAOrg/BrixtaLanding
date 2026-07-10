// src/components/commons/footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900/60 text-slate-400 font-sans px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        
        {/* Leftmost Branding / Logo Section */}
        <div className="md:col-span-2 flex flex-col justify-between h-full space-y-6">
          <div className="flex items-center gap-3 select-none">
            {/* Swapped placeholder 'B' for actual WebP brand asset */}
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg shadow-blue-500/5">
              <Image
                src="/brixta.webp"
                alt="Brixta Systems Logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Brixta Systems
            </span>
          </div>
          
          <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
            Production-grade, high-density token vector arrays infrastructure. Engineered for deterministic accuracy at enterprise scale boundaries.
          </p>
          
          <p className="text-xs text-slate-600 font-mono mt-4">
            &copy; {currentYear} Brixta Systems, Inc. All rights reserved.
          </p>
        </div>

        {/* Structural Navigation Columns */}
        <div className="flex flex-col space-y-3.5 text-sm">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500">Platform</span>
          <Link href="/dashboard/quickEmbed" className="hover:text-white transition-colors">Quick Embed Playground</Link>
          {/* <Link href="/pricing" className="hover:text-white transition-colors">Pricing Schemes</Link> */}
        </div>

        <div className="flex flex-col space-y-3.5 text-sm">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500">Developers</span>
          {/* <Link href="/docs" className="hover:text-white transition-colors">Inference Documentation</Link> */}
          <Link href="/contact" className="hover:text-white transition-colors">Technical Support</Link>
        </div>

        <div className="flex flex-col space-y-3.5 text-sm">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500">Legal Boundary</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Principles</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>

      </div>
    </footer>
  );
}