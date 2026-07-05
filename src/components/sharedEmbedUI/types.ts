// src/components/sharedEmbedUI/types.ts

// Embed Wizard

export type EmbedWizardStep =
  | "upload"
  | "configure"
  | "preview"
  | "processing"
  | "results";

// Processing Status
// Mirrors backend ingestion_jobs.status

export type EmbedJobStatus =
  | "idle"
  | "queued"
  | "uploading"
  | "parsing"
  | "chunking"
  | "embedding"
  | "saving"
  | "completed"
  | "failed";

// Source Types
// Should match backend sourceType

export type SourceType =
  | "pdf"
  | "docx"
  | "xlsx"
  | "pptx"
  | "csv"
  | "json"
  | "txt"
  | "html"
  | "xml"
  | "image"
  | "audio"
  | "video"
  | "zip"
  | "code";

// Embedding Models

export type EmbeddingProvider =
  | "nomic"
  | "openai"
  | "gemini"
  | "ollama"
  | "voyage"
  | "cohere";

export interface EmbeddingModel {
  id: string;
  name: string;
  provider: EmbeddingProvider;
  dimensions: number;
  free: boolean;
}

// Advanced Options

export interface AdvancedOptions {
  chunkSize: number;
  chunkOverlap: number;
  extractImages: boolean;
  extractTables: boolean;
  performOCR: boolean;
  preserveFormatting: boolean;
  generateMetadata: boolean;
}

// Selected Upload

export interface UploadFile {
  file: File;
  sourceType: SourceType;
}

// Embed Wizard State

export interface EmbedWizardState {
  step: EmbedWizardStep;
  upload?: UploadFile;
  selectedModel: EmbeddingModel;
  options: AdvancedOptions;
  status: EmbedJobStatus;
  progress: number;
  jobId?: string;
  tenantId?: string;
  estimatedChunks?: number;
}

// Backend Response

export interface IngestionJob {
  id: string;
  sourceType: SourceType;
  sourceTarget: string;
  tenantId: string;
  status: EmbedJobStatus;
  errorLog?: string | null;
}

// Results Screen

export interface EmbedResults {
  chunks: number;
  vectors: number;
  processingTime: number;
  downloadUrl?: string;
}