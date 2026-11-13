// src/components/home/HomeownerRealitySection.tsx
"use client";

import React from "react";
import { Home, HeartPulse, GraduationCap, Wallet, HardHat, AlertTriangle } from "lucide-react";

export default function HomeownerRealitySection() {
  const dailyResponsibilities = [
    {
      icon: Wallet,
      title: "Daily Household Expenses",
      description:
        "Keeping the monthly family budget intact while sudden site cash demands pop up every second day.",
    },
    {
      icon: GraduationCap,
      title: "Kids' School & College Fees",
      description:
        "Term fees, tuition, and future savings that cannot be compromised just because cement or labour prices spiked.",
    },
    {
      icon: HeartPulse,
      title: "Elderly Parents' Care & Medicines",
      description:
        "Routine checkups, prescriptions, and time at home that get eaten up when you are forced to babysit your construction site.",
    },
    {
      icon: HardHat,
      title: "Chasing Contractors & Labourers",
      description:
        "Contractors take advances and vanish to other sites, leaving you to coordinate masons, rod-binders, and material trucks alone.",
    },
  ];

  return (
    <section
      id="the-reality"
      className="py-20 lg:py-28 border-b border-[#121212]/15 bg-[#EFECE6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-[#121212]/15 text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/70">
          <span>[ 02 / THE SELF-BUILDER&apos;S BURDEN ]</span>
          <span>WHY BUILDING ON YOUR OWN FEELS IMPOSSIBLE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#121212] leading-[1.05] uppercase">
              You want complete control of your house. <br />
              <span className="text-[#121212]/50">
                Not a second full-time job.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#121212]/80 leading-relaxed">
              Most individual house builders choose to build their homes
              completely by themselves—without handing over hefty commissions to
              builders, architects, or turnkey firms. You want to choose every
              brick, every bag of cement, and how every room takes shape.
            </p>

            <p className="text-base sm:text-lg text-[#121212]/80 leading-relaxed">
              So you engage a local contractor who employs daily labourers.{" "}
              <strong className="font-bold text-[#121212]">
                But you are one person juggling an entire life at once.
              </strong>{" "}
              Between your job, household expenses, children&apos;s education,
              and caring for elderly parents, managing an unpredictable
              construction site becomes a costly, exhausting endeavour.
            </p>

            <div className="p-6 bg-[#F5F3EE] border-l-4 border-[#121212] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#121212]">
                <AlertTriangle className="w-4 h-4" />
                <span>What usually goes wrong</span>
              </div>
              <p className="text-sm text-[#121212]/80 leading-relaxed">
                Without an independent engineer checking your site, contractors
                stretch timelines, waste raw materials, or make structural errors
                that cost lakhs to fix later.
              </p>
            </div>
          </div>

          {/* Right Grid Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#121212]/15 border border-[#121212]/15">
            {dailyResponsibilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F5F3EE] p-8 flex flex-col justify-between space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-[#121212] text-[#F5F3EE] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#121212]/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#121212] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#121212]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}