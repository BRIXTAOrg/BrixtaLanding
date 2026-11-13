// src/components/home/BusinessModelSection.tsx
"use client";

import { ShieldCheck, Handshake, ArrowUpRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/7635874931?text=Hi%20Brixta%2C%20I%20want%20to%20book%20a%20free%20engineer%20site%20visit%20and%20material%20estimate.";

export default function BusinessModelSection() {
  return (
    <section
      id="business-model"
      className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#121212]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-[#121212]/15 text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/70">
          <span>[ 05 / RADICAL TRANSPARENCY ]</span>
          <span>HOW DOES BRIXTA EARN MONEY?</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#121212] uppercase leading-[1.02]">
              Why is our engineer visit & site estimation free? <br />
              <span className="text-[#121212]/45">Here is how we earn.</span>
            </h2>

            <p className="text-lg text-[#121212]/80 leading-relaxed">
              We don&apos;t charge homeowners hidden consultation fees. When you
              book a visit on WhatsApp, our engineer visits your site, checks if
              your construction progress is healthy or needs corrections, and
              hands you a clear estimate of what everything will cost.
            </p>

            <p className="text-lg text-[#121212] font-medium leading-relaxed">
              If you like the estimation and clarity we give you, we ask to
              become your{" "}
              <span className="underline decoration-2 underline-offset-4">
                one-stop raw material and crew provider
              </span>{" "}
              for your site. We supply genuine materials on schedule, deploy
              reliable crews, and stay with you until project completion and
              your complete satisfaction.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border border-[#121212]/20 bg-[#EFECE6]">
                <Handshake className="w-6 h-6 text-[#121212] mb-3" />
                <h3 className="text-base font-bold text-[#121212]">
                  Zero Obligation Audit
                </h3>
                <p className="text-xs text-[#121212]/75 mt-1 leading-relaxed">
                  You only partner with us for materials and crew if you are
                  100% convinced by our engineer&apos;s on-site assessment and
                  pricing.
                </p>
              </div>

              <div className="p-6 border border-[#121212]/20 bg-[#EFECE6]">
                <ShieldCheck className="w-6 h-6 text-[#121212] mb-3" />
                <h3 className="text-base font-bold text-[#121212]">
                  With You Till Completion
                </h3>
                <p className="text-xs text-[#121212]/75 mt-1 leading-relaxed">
                  Unlike retail hardware shops that just dump materials at your
                  gate, our engineers monitor your milestones until handover.
                </p>
              </div>
            </div>
          </div>

          {/* Right Callout Card */}
          <div className="lg:col-span-5 bg-[#121212] text-[#F5F3EE] p-8 sm:p-12 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F5F3EE]/60">
                YOUR NEXT STEP
              </span>
              <h3 className="text-3xl font-black tracking-tight uppercase">
                Test us with one free site visit.
              </h3>
            </div>

            <div className="space-y-4 text-sm text-[#F5F3EE]/80 border-y border-[#F5F3EE]/15 py-6">
              <div className="flex justify-between">
                <span>On-Site Engineer Inspection</span>
                <span className="font-mono font-bold text-[#F5F3EE]">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Current Work Quality Check</span>
                <span className="font-mono font-bold text-[#F5F3EE]">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Material & Cost Estimation</span>
                <span className="font-mono font-bold text-[#F5F3EE]">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>100% Money-Back Service Guarantee</span>
                <span className="font-mono font-bold text-[#F5F3EE]">INCLUDED</span>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between bg-[#F5F3EE] text-[#121212] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#E2DEC9] transition-colors"
            >
              <span>Message BRIXTA to Plan Your Site</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}