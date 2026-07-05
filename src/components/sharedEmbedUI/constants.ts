// src/components/sharedEmbedUI/constants.tsx
import {
  AdvancedOptions,
  EmbeddingModel,
} from "./types";

// Free Models
// Anonymous Users

export const FREE_MODELS: EmbeddingModel[] = [
  {
    id: "nomic-embed-text-v1.5",
    name: "Nomic Embed v1.5",
    provider: "nomic",
    dimensions: 768,
    free: true,
  },
];

// Premium Models
// Signed In

export const PREMIUM_MODELS: EmbeddingModel[] = [
  {
    id: "text-embedding-3-small",
    name: "OpenAI Small",
    provider: "openai",
    dimensions: 1536,
    free: false,
  },
  {
    id: "text-embedding-3-large",
    name: "OpenAI Large",
    provider: "openai",
    dimensions: 3072,
    free: false,
  },
  {
    id: "gemini-embedding-001",
    name: "Gemini Embedding",
    provider: "gemini",
    dimensions: 3072,
    free: false,
  },
];

// Default Advanced Options

export const DEFAULT_ADVANCED_OPTIONS: AdvancedOptions = {
  chunkSize: 1000,
  chunkOverlap: 200,
  extractImages: false,
  extractTables: true,
  performOCR: true,
  preserveFormatting: true,
  generateMetadata: true,
};

// Allowed Upload Types

export const SUPPORTED_FILE_TYPES = [
  ".pdf",
  ".docx",
  ".pptx",
  ".xlsx",
  ".csv",
  ".json",
  ".txt",
  ".md",
  ".html",
  ".xml",
  ".zip",
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".mp3",
  ".wav",
  ".mp4",
  ".mov",
];

// Upload Limits

export const MAX_FILE_SIZE_MB = 100;

export const MAX_FILES = 1;


// Wizard Steps


export const WIZARD_STEPS = [
  "Upload",
  "Configure",
  "Preview",
  "Processing",
  "Results",
];