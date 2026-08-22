// src/components/home/Testimonials.tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface Testimonial {
  company: "Best Cement" | "Eurofoam";
  role: string;
  name: string;
  quote: string;
  products: string[];
}

const testimonials: Testimonial[] = [
  {
    company: "Best Cement",
    role: "HR & Admin",
    name: "Uzzwal Bhattacharya",
    quote:
      "Leave approvals used to sit in someone's inbox for days. Now they route themselves, and TA/DA gets calculated the moment a visit closes. Our monthly reimbursement cycle is half the work it used to be.",
    products: ["Field Force"],
  },
  {
    company: "Best Cement",
    role: "Team Coordinator",
    name: "Partha P. Baruah",
    quote:
      "I assign site visits to twenty-plus field staff every morning. Field Force shows me who's already on the ground and who's free, so nobody gets double-booked anymore.",
    products: ["Field Force"],
  },
  {
    company: "Best Cement",
    role: "Reports & MIS",
    name: "Dipankar Das",
    quote:
      "We used to stitch together three spreadsheets to get a weekly ops report. Now Field Force and Geo-Mapping both export straight into one view, ready before the Monday call.",
    products: ["Field Force", "Geo-Mapping"],
  },
  {
    company: "Best Cement",
    role: "Field Ops Manager",
    name: "Chandan Kumar",
    quote:
      "Between live location tracking on our plant teams and Geo-Mapping flagging new activity near our quarry leases, I know what's happening on the ground without driving out to check myself.",
    products: ["Field Force", "Geo-Mapping"],
  },
  {
    company: "Eurofoam",
    role: "HR & Admin",
    name: "Mandira Sinha",
    quote:
      "Our delivery and installation crews are always moving between showrooms and job sites. Field Force gives us one place to track attendance and leave instead of chasing people over WhatsApp.",
    products: ["Field Force"],
  },
  {
    company: "Eurofoam",
    role: "Team Coordinator",
    name: "Bijeet Gogoi",
    quote:
      "Assigning delivery routes used to be a whiteboard and a phone call. Now every technician gets their task list on their phone, and I can see completion status in real time.",
    products: ["Field Force"],
  },
  {
    company: "Eurofoam",
    role: "Reports & MIS",
    name: "Bijeet Gogoi",
    quote:
      "Field visit logs and formulation trial data used to live in completely separate files. Pulling both into one monthly report now takes an afternoon instead of a week.",
    products: ["Field Force", "Research Simulator"],
  },
  {
    company: "Eurofoam",
    role: "Field Ops Manager",
    name: "Debojit Sarkar",
    quote:
      "We shortlist new foam formulations in the simulator before a single physical batch gets mixed, and Field Force keeps our regional teams synced on rollout. Fewer wasted trials, faster launches.",
    products: ["Field Force", "Research Simulator"],
  },
];

const companyBadge: Record<Testimonial["company"], string> = {
  "Best Cement": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Eurofoam: "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

// Duplicated once so the track can loop seamlessly from -50% back to 0%.
const loopItems = [...testimonials, ...testimonials];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 55,
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-linear-to-r from-slate-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-linear-to-l from-slate-950 to-transparent z-10" />

      <div ref={trackRef} className="flex gap-5 w-max">
        {loopItems.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="w-80 sm:w-96 shrink-0 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col"
          >
            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-slate-900">
              <div>
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
              <span
                className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border shrink-0 ${companyBadge[t.company]}`}
              >
                {t.company}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}