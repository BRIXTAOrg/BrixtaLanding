// src/components/sharedEmbedUI/model-selector.tsx
"use client";

import { EmbeddingModel } from "./types";
import { FREE_MODELS, PREMIUM_MODELS } from "./constants";

interface ModelSelectorProps {
  selected: EmbeddingModel;
  onChange(model: EmbeddingModel): void;
}

export default function ModelSelector({ selected, onChange }: ModelSelectorProps) {
  const allModels = [...FREE_MODELS, ...PREMIUM_MODELS];

  return (
    <div className="space-y-3">
      <label className="text-xs font-mono tracking-wider text-slate-400 uppercase">Select Vector Engine</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {allModels.map((model) => {
          const isSelected = model.id === selected.id;
          return (
            <div
              key={model.id}
              onClick={() => onChange(model)}
              className={`border rounded-xl p-4 text-left cursor-pointer transition-all ${
                isSelected 
                  ? "border-cyan-500 bg-cyan-950/10 shadow-[0_0_12px_rgba(6,182,212,0.1)]" 
                  : "border-slate-800 bg-slate-950/50 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">{model.name}</span>
                <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                  model.free ? "bg-emerald-950 text-emerald-400 border border-emerald-900" : "bg-blue-950 text-blue-400 border border-blue-900"
                }`}>
                  {model.provider}
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-2 font-mono">{model.dimensions} Dimensions</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}