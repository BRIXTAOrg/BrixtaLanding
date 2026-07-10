// src/components/commons/navBar.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 w-full flex justify-center px-4">
      {/* Floating Pill Nav Container */}
      <nav className="w-full max-w-4xl bg-slate-950/60 backdrop-blur-xl border border-slate-800/80 rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl shadow-blue-950/20">
        
        {/* Left: Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 hover:scale-102 transition-transform duration-200 select-none cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
            <Image
              src="/brixta.webp"
              alt="Brixta Systems Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-sm font-bold tracking-tight text-white hidden sm:inline-block font-sans">
            Brixta Systems
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/about" 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
          >
            About
          </Link>
          <Link 
            href="/docs" 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
          >
            Developer
          </Link>
          <Link 
            href="/pricing" 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Right: Glowing Blue CTA Button */}
        {/* <div>
          <button className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full group overflow-hidden transition-all duration-300 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] cursor-pointer">
            <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            Sign In
          </button>
        </div> */}

      </nav>
    </div>
  );
}