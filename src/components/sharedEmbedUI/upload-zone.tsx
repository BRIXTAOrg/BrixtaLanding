// src/components/sharedEmbedUI/upload-zone.tsx
"use client";

import { useState, DragEvent } from "react";
import { MAX_FILE_SIZE_MB, SUPPORTED_FILE_TYPES } from "./constants";

interface UploadZoneProps {
  onFileSelected(file: File): void;
}

export default function UploadZone({ onFileSelected }: UploadZoneProps) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateAndProcessFile = (file: File) => {
    setError(null);
    const ext = `.${file.name.split(".").pop()?.toLowerCase()}`;
    
    if (!SUPPORTED_FILE_TYPES.includes(ext)) {
      setError(`Unsupported extension format. Allowed extensions: ${SUPPORTED_FILE_TYPES.slice(0, 8).join(", ")}...`);
      return;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setError(`File boundary limit exceeded. Max safe payload size is ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }
    onFileSelected(file);
  };

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setIsDragActive(true);
    else if (e.type === "dragleave") setIsDragActive(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="space-y-4">
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 flex flex-col items-center justify-center min-h-64 cursor-pointer group ${
          isDragActive ? "border-cyan-500 bg-cyan-950/20" : "border-slate-800 bg-slate-950/40 hover:border-slate-700"
        }`}
      >
        <input
          type="file"
          id="file-upload-input"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => e.target.files?.[0] && validateAndProcessFile(e.target.files[0])}
        />
        
        <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 text-slate-400 group-hover:text-cyan-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
          </svg>
        </div>

        <p className="text-sm font-semibold text-white">Drag & drop raw source file</p>
        <p className="text-xs text-slate-500 mt-1">PDF, DOCX, Markdown, Code, CSV, etc. up to {MAX_FILE_SIZE_MB}MB</p>
      </div>

      {error && (
        <div className="p-3 bg-red-950/40 border border-red-900/50 rounded-lg text-xs font-mono text-red-400">
          ❌ {error}
        </div>
      )}
    </div>
  );
}