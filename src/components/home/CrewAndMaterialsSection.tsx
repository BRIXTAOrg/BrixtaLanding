// src/components/home/CrewAndMaterialsSection.tsx
"use client";

import React from "react";
import { Clock, Layers, Users, PackageCheck } from "lucide-react";

export default function CrewAndMaterialsSection() {
  const trades = [
    "Tiling & Flooring Specialists",
    "Cement, Brickwork & Plastering",
    "Iron / TMT Rod Bending & Shuttering",
    "Foundation & Structural Concreting",
  ];

  const materials = [
    "OPC / PPC Cement Bags (Fresh Batch)",
    "TMT Steel Bars (All Bundle Diameters)",
    "Course & Fine River Sand / Aggregates",
    "Red Clay Bricks, AAC Blocks & Tiles",
  ];

  return (
    <section
      id="crew-and-supply"
      className="py-20 lg:py-28 bg-[#121212] text-[#F5F3EE] border-b border-[#F5F3EE]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-[#F5F3EE]/15 text-xs font-mono uppercase tracking-[0.2em] text-[#F5F3EE]/60">
          <span>[ 04 / CORE SERVICE SPECIFICATION ]</span>
          <span>SKILLED PEOPLE. SCHEDULED MATERIALS. FLEXIBLE PLANS.</span>
        </div>

        {/* Main Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase leading-[0.95]">
              Your site. Your crew. <br />
              Your delivery schedule.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-block border border-[#F5F3EE]/25 px-5 py-3">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-[#F5F3EE]/60">
                YOU CHOOSE THE HIRE DURATION
              </span>
              <span className="text-2xl sm:text-3xl font-black tracking-tight">
                1 Day → 1 Year
              </span>
            </div>
          </div>
        </div>

        {/* 4 Specification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F5F3EE]/15 border border-[#F5F3EE]/15 mb-16">
          <div className="bg-[#121212] p-8 space-y-4">
            <Clock className="w-6 h-6 text-[#F5F3EE]/70" />
            <p className="text-xs font-mono uppercase tracking-widest text-[#F5F3EE]/50">
              SET YOUR DAILY HOURS
            </p>
            <h3 className="text-xl font-bold">Your working day.</h3>
            <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
              Fixed daily shift timings (for example, 9:00 AM – 6:00 PM) with
              verified attendance so you never pay for idle hours.
            </p>
          </div>

          <div className="bg-[#121212] p-8 space-y-4">
            <Layers className="w-6 h-6 text-[#F5F3EE]/70" />
            <p className="text-xs font-mono uppercase tracking-widest text-[#F5F3EE]/50">
              CHOOSE YOUR WORK STAGE
            </p>
            <h3 className="text-xl font-bold">Your build, right now.</h3>
            <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
              Whether you are digging foundations, casting slabs, plastering
              walls, or laying floor tiles—tell us the exact stage.
            </p>
          </div>

          <div className="bg-[#121212] p-8 space-y-4">
            <Users className="w-6 h-6 text-[#F5F3EE]/70" />
            <p className="text-xs font-mono uppercase tracking-widest text-[#F5F3EE]/50">
              PICK TRADES + HEADCOUNT
            </p>
            <h3 className="text-xl font-bold">Your crew mix.</h3>
            <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
              You decide how many skilled masons and helpers you need per trade.
              Scale up or down as your site progresses.
            </p>
          </div>

          <div className="bg-[#121212] p-8 space-y-4">
            <PackageCheck className="w-6 h-6 text-[#F5F3EE]/70" />
            <p className="text-xs font-mono uppercase tracking-widest text-[#F5F3EE]/50">
              SYNCHRONIZED LOGISTICS
            </p>
            <h3 className="text-xl font-bold">Scheduled deliveries.</h3>
            <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
              Raw materials arrive right before your crew needs them—preventing
              site clutter, theft, or weather damage.
            </p>
          </div>
        </div>

        {/* Two-Column Breakdown: Skilled Trades vs Raw Material Supply */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border border-[#F5F3EE]/20 p-8 sm:p-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5F3EE]/60">
              [ A / ON-DEMAND SKILLED TRADES ]
            </span>
            <h3 className="text-2xl font-black mt-2 mb-6">
              Fixed Crews Across Every Trade
            </h3>
            <ul className="space-y-4">
              {trades.map((trade, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between py-3 border-b border-[#F5F3EE]/10 text-sm font-medium"
                >
                  <span>{trade}</span>
                  <span className="font-mono text-xs text-[#F5F3EE]/50">
                    VERIFIED CREW
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#F5F3EE]/20 p-8 sm:p-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5F3EE]/60">
              [ B / ONE-STOP RAW MATERIAL SUPPLY ]
            </span>
            <h3 className="text-2xl font-black mt-2 mb-6">
              Scheduled Site Deliveries
            </h3>
            <ul className="space-y-4">
              {materials.map((mat, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between py-3 border-b border-[#F5F3EE]/10 text-sm font-medium"
                >
                  <span>{mat}</span>
                  <span className="font-mono text-xs text-[#F5F3EE]/50">
                    ON-TIME DISPATCH
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}