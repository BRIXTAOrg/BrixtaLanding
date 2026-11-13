// src/app/about/page.tsx
"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#121212] pt-20 pb-28 arch-grid-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 pb-6 mb-12 border-b border-[#121212]/15 text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/70">
          <span>[ ABOUT BRIXTA ]</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight uppercase leading-[0.95] mb-8">
          We back the <br />
          <span className="text-[#121212]/40">independent</span> builder.
        </h1>

        <div className="space-y-6 text-lg text-[#121212]/80 leading-relaxed max-w-3xl">
          <p>
            Building your own home is one of the most significant financial and emotional investments of your life. Yet, the industry is heavily stacked against the individual homeowner. 
          </p>
          <p>
            You are forced to choose between handing over massive commissions to turnkey builders, or managing unpredictable daily labourers and material shortages all by yourself—while still balancing your family, job, and daily expenses.
          </p>
          <p className="font-bold text-[#121212]">
            Brixta was built to bridge this gap.
          </p>
          <p>
            Operating out of Guwahati, Assam, we provide the structural support of a professional construction firm—expert site audits, scheduled material deliveries, and fixed, reliable crews—while leaving you in 100% control of your home's design, budget, and timeline. 
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#121212]/15 border border-[#121212]/15">
          <div className="bg-[#121212] p-8 text-[#F5F3EE]">
            <h3 className="text-3xl font-black tracking-tight mb-2">Our Mission</h3>
            <p className="text-sm text-[#F5F3EE]/70">
              To eliminate contractor unreliability and material inflation for families building their own homes.
            </p>
          </div>
          <div className="bg-[#F5F3EE] p-8">
            <h3 className="text-3xl font-black tracking-tight mb-2">Our Method</h3>
            <p className="text-sm text-[#121212]/70">
              Honest on-site engineering assessments followed by strictly scheduled supply and verified crew deployment.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}