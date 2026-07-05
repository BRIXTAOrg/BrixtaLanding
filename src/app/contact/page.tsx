// src/app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white font-sans px-4 sm:px-6 lg:px-8 py-24 flex justify-center items-center">
      <div className="max-w-md w-full border border-slate-900 bg-slate-900/20 backdrop-blur-md rounded-xl p-8 text-center shadow-2xl">
        <h1 className="text-2xl font-bold tracking-tight mb-4 text-slate-200">Get in Touch</h1>
        <p className="text-sm text-slate-400 mb-6">
          Have questions about our hyper-scale embedding architecture or enterprise custom tiers?
        </p>
        <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800/60 font-mono text-sm text-cyan-400 shadow-inner">
          brixtamail@gmail.com
        </div>
      </div>
    </div>
  );
}