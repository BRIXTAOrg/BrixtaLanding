// src/components/home/Testimonials.tsx
"use client";

import React from "react";

const testimonials = [
  {
    quote:
      "Between my bank job and my father's hospital visits, I had no time to verify if my contractor was using the right cement ratio. Brixta's engineer visited for free, pointed out pillar alignment issues early, and took over our entire raw material schedule.",
    author: "Pranjal Kalita",
    role: "Independent Homeowner, Kahilipara",
    stage: "G+1 Residential Build",
  },
  {
    quote:
      "My previous mason crew disappeared right before slab casting. Brixta gave me a fixed 6-man crew from 9 AM to 6 PM and delivered TMT rods and cement bags right on schedule. Saved me weeks of stress.",
    author: "Debajit Baruah",
    role: "House Owner, Beltola",
    stage: "Structural & Plastering Stage",
  },
  {
    quote:
      "I didn't want to hire an expensive builder because I wanted control over my house budget. Brixta's on-site estimate showed me exactly how much every stage would cost, and their material supply pricing was 100% transparent.",
    author: "Ritu Sharma",
    role: "Self-Builder, Jalukbari",
    stage: "Full Home Material Partner",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#EFECE6] border-b border-[#121212]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-[#121212]/15 text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/70">
          <span>[ 06 / HOMEOWNER STORIES ]</span>
          <span>BUILT BY FAMILIES, BACKED BY BRIXTA</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#121212]/15 border border-[#121212]/15">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5F3EE] p-8 sm:p-10 flex flex-col justify-between space-y-8"
            >
              <p className="text-base text-[#121212]/85 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="border-t border-[#121212]/15 pt-4">
                <div className="font-bold text-[#121212] text-sm">
                  {item.author}
                </div>
                <div className="text-xs text-[#121212]/60 mt-0.5">
                  {item.role}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#121212]/50 mt-2">
                  {item.stage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}