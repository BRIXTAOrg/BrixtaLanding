// src/components/sharedEmbedUI/preview.tsx
"use client";

import { UploadFile, EmbeddingModel, AdvancedOptions } from "./types";

interface PreviewProps {
  upload: UploadFile;
  model: EmbeddingModel;
  options: AdvancedOptions;
  onStart(): void;
  onBack(): void;
}

export default function Preview({ upload, model, options, onStart, onBack }: PreviewProps) {
  const fileSizeMB = (upload.file.size / (1024 * 1024)).toFixed(2);
  const estimatedChunks = Math.ceil((upload.file.size * 0.4) / options.chunkSize) || 12;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight">Review Pipeline Execution</h2>
        <p className="text-xs text-slate-500 mt-0.5">Verify ingestion vectors parameters before pipeline generation execution.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Source Coordinates Metadata Info */}
        <div className="p-4 bg-slate-950/50 border border-slate-800 rounded-xl space-y-2">
          <div className="text-[10px] font-mono uppercase text-slate-500">Source Object Parameters</div>
          <div className="text-sm font-semibold text-white truncate">{upload.file.name}</div>
          <div className="text-xs font-mono text-slate-400">{fileSizeMB} MB • Type: {upload.sourceType.toUpperCase()}</div>
        </div>

        {/* Vector Execution Strategy Metadata Info */}
        <div className="p-4 bg-slate-950/50 border border-slate-800 rounded-xl space-y-2">
          <div className="text-[10px] font-mono uppercase text-slate-500">Model Space Strategy</div>
          <div className="text-sm font-semibold text-cyan-400">{model.name}</div>
          <div className="text-xs font-mono text-slate-400">{model.dimensions} Dimensions • ({model.provider.toUpperCase()})</div>
        </div>
      </div>

      {/* Structural Tuning Parameter Breakdown List */}
      <div className="p-4 border border-slate-800 bg-slate-950/20 rounded-xl">
        <div className="text-[10px] font-mono uppercase text-slate-500 mb-3">Tuning Matrix Attributes</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 text-xs font-mono">
          <div><span className="text-slate-500">Chunk Window:</span> <span className="text-slate-300">{options.chunkSize}</span></div>
          <div><span className="text-slate-500">Padding Margin:</span> <span className="text-slate-300">{options.chunkOverlap}</span></div>
          <div><span className="text-slate-500">Est. Fragments:</span> <span className="text-emerald-400">~{estimatedChunks}</span></div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
        <button onClick={onBack} className="text-xs font-mono text-slate-500 hover:text-white transition cursor-pointer">
          ← Back to Config
        </button>
        <button
          onClick={onStart}
          className="px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold rounded-lg shadow-xl transition transform hover:-translate-y-0.5 cursor-pointer"
        >
          Initialize Pipeline Processing
        </button>
      </div>
    </div>
  );
}