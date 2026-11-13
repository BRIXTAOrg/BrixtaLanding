// src/app/terms/page.tsx

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#121212] pt-20 pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 pb-6 mb-12 border-b border-[#121212]/15 text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/70">
          <span>[ LEGAL ]</span>
        </div>

        <h1 className="text-4xl font-black tracking-tight uppercase mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-stone prose-invert max-w-none text-[#121212]/80 space-y-6">
          <p><strong>Last Updated: November 2026</strong></p>
          
          <h3 className="text-xl font-bold text-[#121212] mt-8 mb-4 uppercase tracking-wide">1. Service Scope</h3>
          <p>
            Brixta provides on-site engineering estimation, fixed-duration skilled construction crews, and scheduled raw material deliveries for residential construction sites. All engagements begin with a free on-site assessment.
          </p>

          <h3 className="text-xl font-bold text-[#121212] mt-8 mb-4 uppercase tracking-wide">2. Scheduling and Deliveries</h3>
          <p>
            Material deliveries and crew schedules are coordinated based on the initial site audit and ongoing progress. Homeowners must ensure the site is accessible during the agreed-upon working hours (e.g., 9:00 AM - 6:00 PM).
          </p>

          <h3 className="text-xl font-bold text-[#121212] mt-8 mb-4 uppercase tracking-wide">3. Contact & Communication</h3>
          <p>
            Official communication regarding your site, estimates, and crew allocation will be conducted via our verified WhatsApp desk (+91 76358 74931) or official email (connect@brixta.site).
          </p>
        </div>
      </div>
    </main>
  );
}