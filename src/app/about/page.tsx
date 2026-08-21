// src/app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Cpu, Database, FlaskConical, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Brixta",
  description:
    "Brixta is an IT solutions, data solutions, and R&D company building automation and cost-reduction software for industrial and field operations teams.",
};

const values = [
  {
    icon: Cpu,
    title: "Automation over addition",
    description:
      "We'd rather remove a manual step than add a dashboard for it. Every product is judged by how much human effort it takes off a team's plate.",
  },
  {
    icon: Database,
    title: "Data you can act on",
    description:
      "Raw location pings, sensor logs, and satellite passes are not insights. We turn them into decisions teams can actually make.",
  },
  {
    icon: FlaskConical,
    title: "Research-grade rigor",
    description:
      "Our simulation and modeling tools are built with the same rigor we'd expect from an in-house R&D lab, not a generic SaaS dashboard.",
  },
  {
    icon: Target,
    title: "Cost reduction, measured",
    description:
      "We aim for outcomes that show up on a P&L: fewer trial batches, fewer field visits, lower inference bills — not vanity metrics.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-300 font-sans px-4 sm:px-6 lg:px-8 pt-40 pb-24">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">About Brixta</h1>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          IT, data, and R&amp;D — under one roof.
        </p>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Brixta is an IT solutions, data solutions, and research &amp;
          development company. We design automation and cost-reduction
          software for industries that run on people in the field, physical
          materials, and land — the parts of the economy that don&apos;t fit
          neatly into a generic SaaS template.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-4">
            What we actually do
          </h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            We build four product lines that share one underlying
            philosophy: take a process that&apos;s currently manual,
            expensive, or slow to observe, and give it a software layer that
            makes it automatic, cheaper, or visible in near real time.
          </p>
          <p className="text-slate-400 leading-relaxed">
            That shows up as a field force platform that replaces paper
            attendance and manual TA/DA math, a self-hostable vector
            embedding engine that cuts AI inference cost, a research
            simulator that shortlists new cement and clay formulations
            before a single physical trial, and a satellite geo-mapping
            platform that flags terrain change without a site visit.
          </p>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl">
            <Image
              src="https://picsum.photos/seed/brixta-about-office/1200/900"
              alt="Brixta engineering and research team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white tracking-tight mb-8 text-center">
          How we build
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-md p-6"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                <value.icon className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 tracking-tight">{value.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
