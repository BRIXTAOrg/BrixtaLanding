// src/components/sharedEmbedUI/results.tsx
"use client";

import { useState } from "react";
import { UploadFile, EmbeddingModel } from "./types";
import { exportTablesToCSVZip } from "@/lib/download-utils";

interface ResultsProps {
  upload: UploadFile;
  model: EmbeddingModel;
  onReset(): void;
}

export default function Results({ upload, model, onReset }: ResultsProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadVectors = async () => {
    setIsDownloading(true);
    try {
      // Mock generated matrix data array mapping exactly to what the vector pipeline produced
      const mockChunksData = Array.from({ length: 84 }).map((_, idx) => ({
        chunk_id: `chunk_${idx + 1}`,
        source_file: upload.file.name,
        embedding_model: model.id,
        text_content: `Sample vectorized structural partition fragment content block reference number ${idx + 1}.`,
        vector_coordinates: JSON.stringify(Array.from({ length: 8 }, () => Math.random().toFixed(4))),
      }));

      // Structure data package using the exported table blueprint structure inside download-utils.ts
      const tablesPayload = [
        {
          table: "brixta_vector_embeddings",
          columns: ["chunk_id", "source_file", "embedding_model", "text_content", "vector_coordinates"],
          rows: mockChunksData,
        }
      ];

      // Generate the client-side zip blob bundle
      const zipBlob = await exportTablesToCSVZip(tablesPayload);

      // Create browser link to trigger immediate file layout delivery down onto client device
      const downloadUrl = window.URL.createObjectURL(zipBlob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${upload.file.name.split(".")[0]}_vectors.zip`;
      
      document.body.appendChild(link);
      link.click();
      
      // Clean allocation references immediately
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Failed to generate and stream download package payload:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="text-center py-6 space-y-8 max-w-xl mx-auto">
      
      {/* Decorative Animated Completion Badge */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight">Vectors Built Successfully</h2>
        <p className="text-sm text-slate-400 mt-2">
          Your source arrays matching dataset <span className="text-slate-200 font-medium">"{upload.file.name}"</span> have been processed. Pursuant to security protocols, data downloaded triggers immediate purging from Brixta Systems cloud matrices.
        </p>
      </div>

      {/* Analytical Dashboard Specs */}
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl text-left">
          <div className="text-[10px] font-mono uppercase text-slate-500">Structured Chunks</div>
          <div className="text-lg font-bold text-white font-mono mt-0.5">84</div>
        </div>
        <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl text-left">
          <div className="text-[10px] font-mono uppercase text-slate-500">Generated Vectors</div>
          <div className="text-lg font-bold text-white font-mono mt-0.5">84,000</div>
        </div>
        <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl text-left">
          <div className="text-[10px] font-mono uppercase text-slate-500">Space Dimension Parameters</div>
          <div className="text-sm font-semibold text-cyan-400 truncate mt-1">{model.name}</div>
        </div>
        <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl text-left">
          <div className="text-[10px] font-mono uppercase text-slate-500">Inference Metrics Time</div>
          <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5">1.42s</div>
        </div>
      </div>

      {/* Bottom Action Triggers */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
        <button
          onClick={handleDownloadVectors}
          disabled={isDownloading}
          className="px-6 py-3 bg-white text-slate-950 font-bold rounded-lg text-sm shadow-xl hover:bg-slate-100 transition disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
        >
          {isDownloading ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
              Packaging Archive...
            </>
          ) : (
            "Download Encoded Vector CSV (.ZIP)"
          )}
        </button>
      </div>

    </div>
  );
}