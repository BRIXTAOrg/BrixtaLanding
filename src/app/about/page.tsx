// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-350 font-sans px-4 sm:px-6 lg:px-8 py-24 flex justify-center items-center">
      <div className="max-w-3xl w-full border border-slate-900 bg-slate-900/20 backdrop-blur-md rounded-xl p-8 sm:p-12 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
          About Brixta Systems
        </h1>
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          At <span className="text-white font-medium">Brixta Systems</span>, we build high-performance, developer-first infrastructure for vector embeddings at hyper-scale. Our mission is to bridge the gap between complex, unstructured enterprise data and production-grade semantic applications.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          Whether you connect directly to our managed API mesh or deploy isolated instances inside your own cloud boundaries, Brixta provides the speed, scalability, and architectural flexibility required by modern AI engineering teams.
        </p>
      </div>
    </div>
  );
}