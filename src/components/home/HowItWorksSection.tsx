// src/components/home/HowItWorksSection.tsx
"use client";

import React from "react";
import { MessageSquare, Compass, Truck, ArrowUpRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/7635874931?text=Hi%20Brixta%2C%20I%20would%20like%20to%20schedule%20a%20free%20engineer%20visit%20for%20my%20construction%20site.";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      tag: "WHATSAPP BOOKING",
      title: "Book a Visit on WhatsApp",
      icon: MessageSquare,
      description:
        "Send us a message on WhatsApp with your site location and current construction stage. No lengthy forms or upfront consultation charges.",
      highlights: [
        "Instant slot confirmation",
        "Available across Guwahati & surrounding regions",
        "For new foundations or ongoing builds",
      ],
    },
    {
      number: "02",
      tag: "FREE ENGINEER AUDIT & ESTIMATE",
      title: "We Visit Your Site With an Engineer",
      icon: Compass,
      description:
        "Our civil engineer inspects your site in person and gives you a 100% free, unbiased estimation of what your site truly needs right now.",
      highlights: [
        "Honest audit: Is progress till now good or needs correction?",
        "Clear breakdown of upcoming material & labour quantities",
        "Exact cost forecast so you never get blindsided",
      ],
    },
    {
      number: "03",
      tag: "EXECUTION & SUPPLY",
      title: "Fixed Crew & Scheduled Material Delivery",
      icon: Truck,
      description:
        "If you like our transparent estimate, we step in as your one-stop raw material and fixed-crew partner—staying with you until completion.",
      highlights: [
        "Scheduled deliveries synced to your site's pace",
        "Dedicated masons, tile workers, and rod-binders",
        "Zero material wastage or contractor markups",
      ],
    },
  ];

  return (
    <section
      id="process"
      className="py-20 lg:py-28 border-b border-[#121212]/15 bg-[#F5F3EE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-[#121212]/15 text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/70">
          <span>[ 03 / THE BRIXTA PROCESS ]</span>
          <span>WE VISIT YOUR SITE. YOU GET AN ON-THE-SPOT ESTIMATE.</span>
        </div>

        {/* Heading Row */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#121212] uppercase leading-[0.98]">
            Stop chasing workers. <br />
            Start building with clarity.
          </h2>
          <p className="mt-4 text-lg text-[#121212]/75">
            Before you spend another rupee on unverified contractor estimates,
            let a Brixta engineer evaluate your site for free.
          </p>
        </div>

        {/* 3 Step Architectural Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-[#121212]/20 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/20">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-8 sm:p-10 flex flex-col justify-between bg-[#F5F3EE] hover:bg-[#EFECE6] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 bg-[#121212] text-[#F5F3EE]">
                      STEP {step.number}
                    </span>
                    <Icon className="w-6 h-6 text-[#121212]" />
                  </div>

                  <p className="text-xs font-mono uppercase tracking-widest text-[#121212]/60 mb-2">
                    {step.tag}
                  </p>
                  <h3 className="text-2xl font-black text-[#121212] tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#121212]/80 leading-relaxed mb-8">
                    {step.description}
                  </p>
                </div>

                <div className="border-t border-[#121212]/15 pt-6 space-y-2.5">
                  {step.highlights.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs font-medium text-[#121212]"
                    >
                      <span className="font-mono text-[#121212]/50">
                        0{i + 1}.
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-10 bg-[#121212] text-[#F5F3EE] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#F5F3EE]/60">
              FREE ON-SITE ASSESSMENT
            </p>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
              Want to know if your current site progress is on track?
            </h3>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-3 bg-[#F5F3EE] text-[#121212] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#E2DEC9] transition-colors"
          >
            <span>Book Engineer Visit Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}