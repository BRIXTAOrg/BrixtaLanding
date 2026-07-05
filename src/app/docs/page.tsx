// src/app/docs/page.tsx

export default function DocsPage() {
    return (
        <div className="min-h-screen w-full bg-slate-950 text-slate-400 font-sans px-4 sm:px-6 lg:px-8 py-24 flex justify-center">
            <div className="max-w-4xl w-full border border-slate-900 bg-slate-900/20 backdrop-blur-md rounded-xl p-8 sm:p-12 shadow-2xl space-y-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Documentation</h1>
                    <p className="text-sm text-slate-500">Quick start guide for integrating Brixta Systems embedding API endpoints.</p>
                </div>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white tracking-wide">Authentication</h2>
                    <p className="text-sm leading-relaxed">
                        All API requests must be authenticated using a bearer token passed in the header payload configuration.
                    </p>
                    <pre className="p-4 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-cyan-400 overflow-x-auto">
                        {`Authorization: Bearer YOUR_BRIXTA_API_KEY`}
                    </pre>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white tracking-wide">Generate Embeddings</h2>
                    <p className="text-sm leading-relaxed">
                        Send a POST request to the inference pipeline endpoint specifying the input string parameters.
                    </p>
                    <pre className="p-4 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-cyan-400 overflow-x-auto">
                        {`// POST https://api.brixta.com/v1/embeddings
const response = await fetch("https://api.brixta.com/v1/embeddings", {
  method: "POST",
  headers: {
    "Authorization": "Bearer bx_live_k8s923...",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "brixta-text-embedding-v2",
    input: "Transforming raw structural code files into vector maps."
  })
});`}
                    </pre>
                </section>
            </div>
        </div>
    );
}