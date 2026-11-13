// src/components/commons/navBar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/7635874931?text=Hi%20Brixta%2C%20I%20am%20building%20my%20home%20and%20would%20like%20to%20book%20a%20free%20on-site%20engineer%20visit%20and%20estimation.";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#121212]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 bg-[#121212] flex items-center justify-center overflow-hidden">
            <Image
              src="/brixta.webp"
              alt="Brixta Logo"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-[#121212] leading-none">
              BRIXTA
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#121212]/60 mt-0.5">
              Site & Supply
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.15em] text-[#121212]/70">
          <a href="#the-reality" className="hover:text-[#121212] transition-colors">
            The Reality
          </a>
          <a href="#process" className="hover:text-[#121212] transition-colors">
            How It Works
          </a>
          <a href="#crew-and-supply" className="hover:text-[#121212] transition-colors">
            Crew & Materials
          </a>
          <a href="#business-model" className="hover:text-[#121212] transition-colors">
            How We Earn
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#121212] text-[#F5F3EE] px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#2B2B2B] transition-colors"
          >
            <span>Book Free Site Visit</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#121212] border border-[#121212]/20"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F3EE] border-b border-[#121212]/15 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-bold uppercase tracking-wider text-[#121212]">
            <a
              href="#the-reality"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#121212]/10"
            >
              01 / The Homebuilder&apos;s Reality
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#121212]/10"
            >
              02 / Free Engineer Visit
            </a>
            <a
              href="#crew-and-supply"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#121212]/10"
            >
              03 / Fixed Crew & Material Supply
            </a>
            <a
              href="#business-model"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#121212]/10"
            >
              04 / How We Earn Money
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#121212] text-[#F5F3EE] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.15em]"
          >
            <span>Book Free Visit on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}