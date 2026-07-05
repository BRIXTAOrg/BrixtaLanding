// src/components/sharedEmbedUI/advanced-options.tsx
"use client";

import { useState } from "react";
import { AdvancedOptions as AdvancedOptionsType } from "./types";

interface AdvancedOptionsProps {
  value: AdvancedOptionsType;
  onChange(options: AdvancedOptionsType): void;
}

export default function AdvancedOptions({ value, onChange }: AdvancedOptionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (key: keyof AdvancedOptionsType) => {
    if (typeof value[key] === "boolean") {
      onChange({ ...value, [key]: !value[key] });
    }
  };

  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between font-medium text-sm text-slate-300 hover:text-white transition bg-slate-950/50"
      >
        <span className="flex items-center gap-2">⚙️ Advanced Tokenization Tuning</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="p-5 border-t border-slate-800/60 space-y-4 bg-slate-950/20 text-slate-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase">Chunk Boundary Size</label>
              <input
                type="number"
                value={value.chunkSize}
                onChange={(e) => onChange({ ...value, chunkSize: Number(e.target.value) })}
                className="w-full bg-slate-950 text-white font-mono text-sm border border-slate-800 rounded-lg p-2 focus:border-cyan-500 focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase">Chunk Padding Overlap</label>
              <input
                type="number"
                value={value.chunkOverlap}
                onChange={(e) => onChange({ ...value, chunkOverlap: Number(e.target.value) })}
                className="w-full bg-slate-950 text-white font-mono text-sm border border-slate-800 rounded-lg p-2 focus:border-cyan-500 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              { key: "extractTables", label: "Structural Tables Matrix Parser" },
              { key: "performOCR", label: "Apply Vision Optical OCR Scanning" },
              { key: "preserveFormatting", label: "Retain Document Whitespace Syntax" },
              { key: "generateMetadata", label: "Auto-Generate Semantic Meta Records" },
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center gap-3 text-xs font-medium cursor-pointer text-slate-400 hover:text-white select-none">
                <input
                  type="checkbox"
                  checked={!!value[key as keyof AdvancedOptionsType]}
                  onChange={() => toggleOption(key as keyof AdvancedOptionsType)}
                  className="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-0"
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}