// src/app/dashboard/platform/embed/page.tsx
"use client";

import EmbedWizard from "@/components/sharedEmbedUI/embed-wizard";

export default function AuthenticatedPlatformEmbedPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Informational Header Section */}
      <div className="w-full max-w-4xl mb-6 text-left">
        <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          Enterprise Model Pipeline
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Your workspace has access to premium model architectures. Embeddings can be queried via API or kept directly inside your vectors panel.
        </p>
      </div>

      {/* Declarative State-Machine Core Wizard Instance Component using premium model rules */}
      <EmbedWizard mode="platform" />
    </div>
  );
}