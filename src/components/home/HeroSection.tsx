// src/components/home/HeroSection.tsx
"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, PhoneCall } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/7635874931?text=Hi%20Brixta%2C%20I%20am%20building%20my%20home%20and%20would%20like%20to%20book%20a%20free%20on-site%20engineer%20visit%20and%20estimation.";

export default function HeroSection() {
  return (
    <section className="relative border-b border-[#121212]/15 arch-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:py-24">
        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#121212]/15 text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/70">
          <span>[ 01 / FOR INDIVIDUAL HOUSE OWNERS ]</span>
          <span>BUILDING A HOME? BUILD ON YOUR TERMS.</span>
        </div>

        {/* Main Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-black tracking-tight text-[#121212] leading-[0.94] uppercase">
              Build your home. <br />
              <span className="text-[#121212]/40">Not your</span> <br />
              labour worries.
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-[#121212]/80 font-normal leading-relaxed pt-2">
              Fixed construction crews and scheduled raw material deliveries for
              independent homeowners building their own house—backed by a{" "}
              <strong className="font-bold text-[#121212] underline decoration-[#121212]/40 underline-offset-4">
                free on-site engineer inspection and cost estimate
              </strong>
              .
            </p>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between sm:justify-center gap-4 bg-[#121212] text-[#F5F3EE] px-8 py-5 text-sm font-bold uppercase tracking-[0.15em] hover:bg-[#2B2B2B] transition-all group"
              >
                <span>Message BRIXTA on WhatsApp</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex flex-col px-4 py-2 border-l-2 border-[#121212]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#121212]/60">
                  Direct Booking Desk
                </span>
                <a
                  href="tel:+917635874931"
                  className="text-sm font-bold text-[#121212] flex items-center gap-1.5 mt-0.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  +91 76358 74931
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Metrics Box (Inspired by ES Construction reference) */}
          <div className="lg:col-span-4 bg-[#121212] text-[#F5F3EE] p-8 flex flex-col justify-between space-y-8">
            <div className="flex items-center justify-between border-b border-[#F5F3EE]/15 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F5F3EE]/60">
                ON-THE-SPOT CLARITY
              </span>
              <span className="text-xs font-mono text-[#F5F3EE]/60">01/03</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-4xl font-black tracking-tight">₹0</div>
                <p className="text-xs uppercase tracking-widest text-[#F5F3EE]/70 mt-1">
                  Engineer Site Visit & Progress Audit
                </p>
              </div>

              <div className="border-t border-[#F5F3EE]/15 pt-5">
                <div className="text-3xl font-black tracking-tight">
                  1 Day → 1 Year
                </div>
                <p className="text-xs uppercase tracking-widest text-[#F5F3EE]/70 mt-1">
                  Customizable Skilled Crew Duration
                </p>
              </div>

              <div className="border-t border-[#F5F3EE]/15 pt-5">
                <div className="text-3xl font-black tracking-tight">100%</div>
                <p className="text-xs uppercase tracking-widest text-[#F5F3EE]/70 mt-1">
                  Scheduled Raw Material Supply Guarantee
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#F5F3EE]/80 font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-[#F5F3EE]" />
              <span>No middlemen builders. You stay in 100% control.</span>
            </div>
          </div>
        </div>

        {/* Bottom Pain-Point Strip from Image 1 */}
        <div className="mt-16 pt-10 border-t border-[#121212]/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#121212]/50 mb-1">
              PAIN POINT / 01
            </p>
            <h3 className="text-base font-bold text-[#121212]">
              Labour shortages.
            </h3>
            <p className="text-sm text-[#121212]/70 mt-0.5">
              Your site, on hold for weeks.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#121212]/50 mb-1">
              PAIN POINT / 02
            </p>
            <h3 className="text-base font-bold text-[#121212]">
              Unannounced absences.
            </h3>
            <p className="text-sm text-[#121212]/70 mt-0.5">
              Another lost workday and wasted wages.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#121212]/50 mb-1">
              PAIN POINT / 03
            </p>
            <h3 className="text-base font-bold text-[#121212]">
              Trusted hands unavailable.
            </h3>
            <p className="text-sm text-[#121212]/70 mt-0.5">
              Gone right when critical casting or plastering starts.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#121212]/50 mb-1">
              PAIN POINT / 04
            </p>
            <h3 className="text-base font-bold text-[#121212]">
              Changing crews mid-way.
            </h3>
            <p className="text-sm text-[#121212]/70 mt-0.5">
              Mistakes. Rework. Rising material & labour costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}