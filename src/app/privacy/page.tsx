// src/app/privacy/page.tsx

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#121212] pt-20 pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 pb-6 mb-12 border-b border-[#121212]/15 text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/70">
          <span>[ LEGAL ]</span>
        </div>

        <h1 className="text-4xl font-black tracking-tight uppercase mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-stone prose-invert max-w-none text-[#121212]/80 space-y-6">
          <p><strong>Last Updated: November 2026</strong></p>
          
          <h3 className="text-xl font-bold text-[#121212] mt-8 mb-4 uppercase tracking-wide">1. Information Collection</h3>
          <p>
            Brixta collects information necessary to provide on-site engineering assessments and construction supply services. This includes contact details provided via WhatsApp or phone, site locations, and construction progress metrics.
          </p>

          <h3 className="text-xl font-bold text-[#121212] mt-8 mb-4 uppercase tracking-wide">2. Use of Information</h3>
          <p>
            Your information is used strictly to schedule site visits, dispatch construction crews, manage material logistics, and provide accurate cost estimations. We do not sell homeowner data to third-party marketing agencies.
          </p>

          <h3 className="text-xl font-bold text-[#121212] mt-8 mb-4 uppercase tracking-wide">3. WhatsApp Communication</h3>
          <p>
            By initiating contact via WhatsApp, you consent to receive communications regarding your site audit, material quotes, and delivery schedules through that platform.
          </p>
        </div>
      </div>
    </main>
  );
}