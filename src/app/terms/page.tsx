// src/app/terms/page.tsx

export default function TermsPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-400 font-sans px-4 sm:px-6 lg:px-8 py-24 flex justify-center">
      <div className="max-w-3xl w-full border border-slate-900 bg-slate-900/20 backdrop-blur-md rounded-xl p-8 sm:p-12 shadow-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Terms of Service</h1>
          <p className="text-xs font-mono text-slate-500">Last Updated: July 5, 2026</p>
        </div>

        <p className="text-sm leading-relaxed">
          Welcome to Brixta Systems. By accessing our platform or using our managed vector services, you agree to be bound by these Terms of Service.
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">1. Account Configuration & Infrastructure Models</h2>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Cloud Service:</strong> We provide scalable vector embedding generation and management interfaces hosted on our infrastructure.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Self-Hosted Deployment:</strong> We offer self-hosted deployment packages for isolated architectures.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Self-Hosted Support Limitation:</strong> We explicitly provide <span className="text-cyan-400 font-medium">no technical support</span> for the self-hosted service variant other than access to our existing documentation. System maintenance, database optimizations, and runtime environments remain the sole responsibility of the deployer.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">2. Lifespan of Structured Data & Auto-Deletion</h2>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Downloaded Datasets:</strong> If you download your generated embedding data from our platform, it is <span className="text-white font-medium">immediately and permanently purged</span> from our active production databases.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Undownloaded Datasets:</strong> For convenience, undownloaded embedding data is temporarily cached. We automatically delete this data <span className="text-white font-medium">60 days</span> after generation if it has not been downloaded.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Data Recovery:</strong> Once data is deleted via immediate download purge or the 60-day expiration cycle, it cannot be recovered by Brixta Systems.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">3. Pricing Updates & Billing Adjustments</h2>
          <p className="text-sm leading-relaxed">
            Our service pricing tiers, token limits, and subscription structures are subject to change to reflect infrastructure optimizations. In the event of a pricing change, we will issue a mandatory <span className="text-slate-200 font-medium">email notification</span> to all registered account owners detailing the adjustments before they take effect.
          </p>
        </section>
      </div>
    </div>
  );
}