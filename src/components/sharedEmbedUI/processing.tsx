// src/components/sharedEmbedUI/processing.tsx
"use client";

import { EmbedJobStatus } from "./types";

interface ProcessingProps {
  status: EmbedJobStatus;
  progress: number;
  jobId: string;
}

export default function Processing({ status, progress, jobId }: ProcessingProps) {
  const stepsList: { label: string; activeStatus: EmbedJobStatus }[] = [
    { label: "Network Stream Delivery", activeStatus: "uploading" },
    { label: "Document Architecture Parsing", activeStatus: "parsing" },
    { label: "Overlapping Text Chunking", activeStatus: "chunking" },
    { label: "High-Dimensional Vector Generation", activeStatus: "embedding" },
    { label: "Transaction Frame Committing", activeStatus: "saving" },
  ];

  const currentStepIdx = stepsList.findIndex((s) => s.activeStatus === status);

  return (
    <div className="space-y-8 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Processing Vector Stream...</h2>
          <p className="text-xs text-slate-500 mt-0.5 font-mono">Job ID Reference Framework: {jobId}</p>
        </div>
        <span className="text-xs font-mono bg-blue-950 text-cyan-400 px-3 py-1 rounded border border-blue-900 uppercase animate-pulse">
          Current State: {status}
        </span>
      </div>

      {/* Main Track Progress Bar Layout */}
      <div className="space-y-2">
        <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
          <div
            className="bg-linear-to-r from-cyan-400 to-blue-600 h-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-end text-xs font-mono text-slate-500">{progress}% Completed</div>
      </div>

      {/* Synchronized Processing Task Checklist Block */}
      <div className="border border-slate-800 rounded-xl bg-slate-950/40 p-5 space-y-3.5">
        {stepsList.map((step, idx) => {
          const isDone = idx < currentStepIdx || status === "completed";
          const isActive = status === step.activeStatus;
          
          return (
            <div key={step.activeStatus} className={`flex items-center justify-between text-xs font-mono transition-opacity ${
              isActive ? "opacity-100" : isDone ? "opacity-60" : "opacity-20"
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] border ${
                  isDone ? "bg-emerald-950 text-emerald-400 border-emerald-900" : isActive ? "border-cyan-400 text-cyan-400 animate-spin" : "border-slate-800 text-slate-600"
                }`}>
                  {isDone ? "✓" : isActive ? "◌" : idx + 1}
                </div>
                <span className={isActive ? "text-white font-medium" : "text-slate-400"}>{step.label}</span>
              </div>
              <span className={isActive ? "text-cyan-400 animate-pulse" : isDone ? "text-emerald-500" : "text-slate-600"}>
                {isDone ? "Done" : isActive ? "Running" : "Idle"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}