// src/components/sharedEmbedUI/embed-wizard.tsx
"use client";

import { useEmbedWizard } from "./hooks/useEmbedWizard";
import UploadZone from "./upload-zone";
import Configure from "./configure";
import Preview from "./preview";
import Processing from "./processing";
import Results from "./results";
import { WIZARD_STEPS } from "./constants";

interface EmbedWizardProps {
  mode?: "guest" | "platform";
}

export default function EmbedWizard({ mode = "guest" }: EmbedWizardProps) {
  const wizard = useEmbedWizard(mode);

  const stepMapping: Record<typeof wizard.step, number> = {
    upload: 0,
    configure: 1,
    preview: 2,
    processing: 3,
    results: 4,
  };

  const currentStepIndex = stepMapping[wizard.step];

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
      {/* Structural Stepper Breadcrumbs */}
      <div className="grid grid-cols-5 gap-2 mb-8 pb-6 border-b border-slate-800/60">
        {WIZARD_STEPS.map((label, idx) => {
          const isCompleted = idx < currentStepIndex;
          const isActive = idx === currentStepIndex;
          return (
            <div key={label} className="text-center space-y-2">
              <div className={`h-1 rounded-full transition-all duration-300 ${
                isActive ? "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" : isCompleted ? "bg-blue-600" : "bg-slate-800"
              }`} />
              <span className={`hidden sm:inline-block text-[11px] font-mono tracking-wider uppercase transition-colors ${
                isActive ? "text-cyan-400 font-semibold" : isCompleted ? "text-blue-400" : "text-slate-600"
              }`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Render Active Wizard Screen Pipeline */}
      {wizard.step === "upload" && (
        <UploadZone onFileSelected={wizard.selectFile} />
      )}

      {wizard.step === "configure" && (
        <Configure
          selectedModel={wizard.selectedModel}
          onModelChange={wizard.setSelectedModel}
          options={wizard.options}
          onOptionsChange={wizard.setOptions}
          onNext={() => wizard.setStep("preview")}
        />
      )}

      {wizard.step === "preview" && wizard.upload && (
        <Preview
          upload={wizard.upload}
          model={wizard.selectedModel}
          options={wizard.options}
          onStart={wizard.startProcessing}
          onBack={() => wizard.setStep("configure")}
        />
      )}

      {wizard.step === "processing" && (
        <Processing
          status={wizard.status}
          progress={wizard.progress}
          jobId={wizard.jobId || ""}
        />
      )}

      {wizard.step === "results" && wizard.upload && (
        <Results
          upload={wizard.upload}
          model={wizard.selectedModel}
          onReset={wizard.resetWizard}
        />
      )}
    </div>
  );
}