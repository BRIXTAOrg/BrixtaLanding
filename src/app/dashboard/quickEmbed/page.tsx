// src/app/dashboard/quickEmbed/page.tsx
"use client";

import EmbedWizard from "@/components/sharedEmbedUI/embed-wizard";

export default function QuickEmbedDashboardPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      
      {/* Persistent Demo Warning Banner */}
      <div className="w-full max-w-4xl mb-6 p-3 bg-amber-950/40 border border-amber-900/60 rounded-xl flex items-center gap-2.5 text-xs font-mono text-amber-400">
        <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
        <span>
          <strong>Demo Notice:</strong> This is an interactive presentation simulation pipeline. No actual multi-dimensional vector math or permanent extraction is being computed on our servers.
        </span>
      </div>

      {/* Informational Header Section */}
      <div className="w-full max-w-4xl mb-6 text-left">
        <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          Quick Ingestion Pipeline
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Direct sandbox execution. Drop unstructured datasets below to instantly map semantic dimensions without data persistence.
        </p>
      </div>

      {/* Declarative State-Machine Core Wizard Instance Component */}
      <EmbedWizard mode="guest" />
    </div>
  );
}