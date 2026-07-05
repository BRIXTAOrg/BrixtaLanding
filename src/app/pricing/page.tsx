// src/app/pricing/page.tsx

export default function PricingPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-400 font-sans px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center">
      <div className="text-center mb-16 max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Simple, Predictable Pricing
        </h1>
        <p className="text-sm text-slate-500">
          Scale your unstructured data inference workloads seamlessly. Prices are subject to refinement; team notifications are dispatched before system adjustments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        
        {/* Managed Cloud Tier */}
        <div className="border border-slate-800 bg-slate-900/20 backdrop-blur-md rounded-xl p-8 flex flex-col justify-between shadow-xl">
          <div>
            <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2">Managed Cloud API</div>
            <h2 className="text-2xl font-bold text-white mb-4">Pay-As-You-Go</h2>
            <p className="text-sm leading-relaxed mb-6">
              Full access to our global, distributed embedding model inference mesh. Perfect for dynamic scaling architectures.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-300">
              <li className="flex items-center gap-2">✓ $0.02 per 1M processed tokens</li>
              <li className="flex items-center gap-2">✓ Sub-12ms processing latency response</li>
              <li className="flex items-center gap-2">✓ Dynamic schema model routing active</li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 bg-white text-slate-950 font-bold rounded-lg text-sm hover:bg-slate-100 transition duration-200 cursor-pointer">
            Create Free Account
          </button>
        </div>

        {/* Self-Hosted Tier */}
        <div className="border border-slate-800 bg-slate-900/40 backdrop-blur-md rounded-xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold rounded-bl-lg">
            Isolated
          </div>
          <div>
            <div className="text-xs font-mono uppercase text-blue-400 tracking-wider mb-2">Enterprise Boundary</div>
            <h2 className="text-2xl font-bold text-white mb-4">Self-Hosted</h2>
            <p className="text-sm leading-relaxed mb-6">
              Run the full Brixta inference engine entirely within your own cloud architecture for zero external data egress.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-300">
              <li className="flex items-center gap-2">✓ Complete processing privacy control</li>
              <li className="flex items-center gap-2">✓ Unlimited text token vector creation</li>
              <li className="flex items-center gap-2">⚠️ Documentation-only technical support</li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 bg-slate-950 border border-slate-800 text-white font-bold rounded-lg text-sm hover:bg-slate-900 transition duration-200 cursor-pointer">
            Deploy via Docker
          </button>
        </div>

      </div>
    </div>
  );
}