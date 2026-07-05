// src/components/sharedEmbedUI/hooks/useEmbedWizard.ts

import { useState } from "react";
import { 
  EmbedWizardStep, 
  UploadFile, 
  EmbeddingModel, 
  AdvancedOptions, 
  EmbedJobStatus,
  SourceType
} from "../types";
import { FREE_MODELS, DEFAULT_ADVANCED_OPTIONS } from "../constants";

export function useEmbedWizard(mode: "guest" | "platform" = "guest") {
  const [step, setStep] = useState<EmbedWizardStep>("upload");
  const [upload, setUpload] = useState<UploadFile | undefined>(undefined);
  const [selectedModel, setSelectedModel] = useState<EmbeddingModel>(FREE_MODELS[0]);
  const [options, setOptions] = useState<AdvancedOptions>(DEFAULT_ADVANCED_OPTIONS);
  const [status, setStatus] = useState<EmbedJobStatus>("idle");
  const [progress, setProgress] = useState<number>(0);
  const [jobId, setJobId] = useState<string | undefined>(undefined);

  const selectFile = (file: File) => {
    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    let sourceType: SourceType = "txt";

    if (["pdf"].includes(ext)) sourceType = "pdf";
    else if (["doc", "docx"].includes(ext)) sourceType = "docx";
    else if (["xls", "xlsx"].includes(ext)) sourceType = "xlsx";
    else if (["ppt", "pptx"].includes(ext)) sourceType = "pptx";
    else if (["csv"].includes(ext)) sourceType = "csv";
    else if (["json"].includes(ext)) sourceType = "json";
    else if (["md", "txt"].includes(ext)) sourceType = "txt";
    else if (["html", "htm"].includes(ext)) sourceType = "html";
    else if (["xml"].includes(ext)) sourceType = "xml";
    else if (["jpg", "jpeg", "png", "gif"].includes(ext)) sourceType = "image";
    else if (["mp3", "wav"].includes(ext)) sourceType = "audio";
    else if (["mp4", "mov"].includes(ext)) sourceType = "video";
    else if (["zip"].includes(ext)) sourceType = "zip";
    else if (["js", "ts", "jsx", "tsx", "py", "go", "cpp", "c", "cs"].includes(ext)) sourceType = "code";

    setUpload({ file, sourceType });
    setStep("configure");
  };

  const startProcessing = () => {
    setStep("processing");
    setStatus("queued");
    setProgress(5);
    setJobId(`job_${Math.random().toString(36).substr(2, 9)}`);

    // Simulate backend status state machine ticks
    const sequence: { status: EmbedJobStatus; progress: number; delay: number }[] = [
      { status: "uploading", progress: 20, delay: 1000 },
      { status: "parsing", progress: 40, delay: 2500 },
      { status: "chunking", progress: 65, delay: 4500 },
      { status: "embedding", progress: 85, delay: 7000 },
      { status: "saving", progress: 95, delay: 9000 },
      { status: "completed", progress: 100, delay: 10500 },
    ];

    sequence.forEach((tick) => {
      setTimeout(() => {
        setStatus(tick.status);
        setProgress(tick.progress);
        if (tick.status === "completed") {
          setStep("results");
        }
      }, tick.delay);
    });
  };

  const resetWizard = () => {
    setUpload(undefined);
    setSelectedModel(FREE_MODELS[0]);
    setOptions(DEFAULT_ADVANCED_OPTIONS);
    setStatus("idle");
    setProgress(0);
    setJobId(undefined);
    setStep("upload");
  };

  return {
    step,
    upload,
    selectedModel,
    options,
    status,
    progress,
    jobId,
    mode,
    selectFile,
    setSelectedModel,
    setOptions,
    startProcessing,
    resetWizard,
    setStep,
  };
}