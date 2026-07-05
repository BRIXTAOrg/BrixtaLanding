// src/components/sharedEmbedUI/configure.tsx
"use client";

import ModelSelector from "./model-selector";
import AdvancedOptions from "./advanced-options";
import { EmbeddingModel, AdvancedOptions as AdvancedOptionsType } from "./types";

interface ConfigureProps {
  selectedModel: EmbeddingModel;
  onModelChange(model: EmbeddingModel): void;
  options: AdvancedOptionsType;
  onOptionsChange(options: AdvancedOptionsType): void;
  onNext(): void;
}

export default function Configure({
  selectedModel,
  onModelChange,
  options,
  onOptionsChange,
  onNext,
}: ConfigureProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight">Pipeline Settings</h2>
        <p className="text-xs text-slate-500 mt-0.5">Select models and execution parameters for parsing structure vectors.</p>
      </div>

      <ModelSelector selected={selectedModel} onChange={onModelChange} />
      <AdvancedOptions value={options} onChange={onOptionsChange} />

      <div className="flex justify-end pt-4">
        <button
          onClick={onNext}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg shadow-lg transition duration-200 cursor-pointer"
        >
          Review Parameters
        </button>
      </div>
    </div>
  );
}