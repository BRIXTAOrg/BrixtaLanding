// src/app/landing/page.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import NavBar from "@/components/commons/navBar";
import Link from "next/link";

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    baseOpacity: number;
}

interface UseCase {
    id: string;
    field: string;
    title: string;
    description: string;
    metric: string;
    codeSnippet: string;
}

const useCasesData: UseCase[] = [
    {
        id: "education",
        field: "Education & Research",
        title: "Adaptive Learning Pathways & Cognitive Knowledge Graphs",
        description: "Represent dense academic textbooks, research papers, and lecture transcriptions as semantic vectors. Dynamically construct highly customized curriculum graphs that discover student knowledge gaps by evaluating conceptual understanding rather than simple keyword matching.",
        metric: "15.4M Academic Nodes Indexed",
        codeSnippet: `// EdTech Conceptual Graphing
const conceptVector = await brixta.embeddings.create({
  model: "brixta-knowledge-graph-v2",
  input: "Conceptual transition between linear transformations and invariant subspaces..."
});`
    },
    {
        id: "manufacturing",
        field: "Manufacturing & Industries",
        title: "Predictive Telemetry & Failure Mode Matching",
        description: "Convert high-frequency operational telemetry logs, industrial sensor streams, and predictive maintenance documents into vector profiles. Detect subtle machine abnormalities by tracking real-time semantic drift relative to operational baselines.",
        metric: "94% Early Anomaly Detection",
        codeSnippet: `// Manufacturing Telemetry Matching
const failureModeVector = await brixta.embeddings.create({
  model: "brixta-iot-telemetry-v4",
  input: "Vibration threshold spikes in multi-axis robotic assembly arm joints..."
});`
    },
    {
        id: "medicine",
        field: "Medicine & Healthcare",
        title: "Accelerating Clinical Research & Diagnostics",
        description: "Map unstructured electronic health records (EHRs), medical literature, and genomic sequences into a unified vector space. Cross-reference complex patient symptoms with rare historical case studies in real-time.",
        metric: "< 8ms Cross-Reference Latency",
        codeSnippet: `// Medicine Semantic Lookup
const clinicalEmbedding = await brixta.embeddings.create({
  model: "brixta-bio-med-v2",
  input: "Patient presenting persistent pulmonary infiltrates with eosinophilia..."
});`
    },
    {
        id: "banking",
        field: "Banking & Finance",
        title: "Real-time Fraud Topology & Compliance Audit Trails",
        description: "Parse structured transactions along with unstructured compliance reports and communication logs into deep contextual vectors. Flag sophisticated structural anomalies and money laundering patterns through spatial density calculations.",
        metric: "0.002% False Positive Rate",
        codeSnippet: `// FinTech Vector Topology Mapping
const financialVector = await brixta.embeddings.create({
  model: "brixta-finance-fraud-v3",
  input: "Layered routing of offshore transfers bypassing standard liquidity velocity alerts..."
});`
    }
];

export default function LandingPage() {
    const [stars, setStars] = useState<Star[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [activeCase, setActiveCase] = useState<string>("education");
    const [progress, setProgress] = useState<number>(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const AUTOPLAY_DURATION = 6000; // 6 seconds per section

    // Generate deterministic stars on mount
    useEffect(() => {
        const generatedStars = Array.from({ length: 45 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1.5,
            baseOpacity: Math.random() * 0.3 + 0.2,
        }));
        setStars(generatedStars);
    }, []);

    // Track global mouse position for interactive star glow
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Smooth Auto-advancing Accordion Loader Logic
    useEffect(() => {
        setProgress(0);
        const intervalTime = 50;
        const step = (intervalTime / AUTOPLAY_DURATION) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    // Transition to next index
                    const currentIndex = useCasesData.findIndex((c) => c.id === activeCase);
                    const nextIndex = (currentIndex + 1) % useCasesData.length;
                    setActiveCase(useCasesData[nextIndex].id);
                    return 0;
                }
                return prev + step;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [activeCase]);

    // Helper to determine if a star should glow based on mouse proximity
    const getStarStyle = (star: Star) => {
        const dx = star.x - mousePos.x;
        const dy = star.y - mousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 12) {
            const proximityFactor = 1 - distance / 12;
            return {
                opacity: star.baseOpacity + proximityFactor * 0.75,
                transform: `scale(${1 + proximityFactor * 0.6})`,
                filter: `drop-shadow(0 0 8px rgba(56, 189, 248, ${proximityFactor}))`,
                transition: "opacity 0.15s ease, transform 0.15s ease, filter 0.15s ease",
            };
        }

        return {
            opacity: star.baseOpacity,
            transform: "scale(1)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
        };
    };

    const activeData = useCasesData.find((c) => c.id === activeCase) || useCasesData[0];

    return (
        <div ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden bg-slate-950 text-white font-sans selection:bg-blue-500/30 selection:text-blue-200">

            {/* Floating Pill Sticky Navigation Bar */}
            <NavBar />

            {/* ================= HERO SECTION ================= */}
            <div className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-slate-950 via-blue-950/60 to-slate-950 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 border-b border-slate-900">

                {/* Darkened linear Mesh Overlays */}
                <div className="absolute inset-0 z-0 mix-blend-screen opacity-20 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-175 h-175 rounded-full bg-linear-to-r from-cyan-600/30 to-blue-800/30 blur-[140px] animate-pulse duration-10000"></div>
                    <div className="absolute bottom-[-10%] right-[-5%] w-150 h-150 rounded-full bg-linear-to-r from-blue-900/30 to-indigo-950/40 blur-[120px] animate-pulse duration-8000"></div>
                </div>

                {/* Fixed Interactive Constellation Canvas */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        {/* Bold Connecting Constellation Lines */}
                        {stars.map((star, index) => {
                            if (index % 3 !== 0) return null;
                            const nextStar = stars[(index + 4) % stars.length];
                            return (
                                <line
                                    key={`line-${index}`}
                                    x1={`${star.x}%`}
                                    y1={`${star.y}%`}
                                    x2={`${nextStar.x}%`}
                                    y2={`${nextStar.y}%`}
                                    stroke="rgba(56, 189, 248, 0.22)"
                                    strokeWidth="1.5"
                                />
                            );
                        })}

                        {/* Interactive Stars */}
                        {stars.map((star) => (
                            <circle
                                key={star.id}
                                cx={`${star.x}%`}
                                cy={`${star.y}%`}
                                r={star.size}
                                fill="#ffffff"
                                style={getStarStyle(star)}
                            />
                        ))}
                    </svg>
                </div>

                {/* Hero Central Layout */}
                <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
                        Vector Embeddings <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-400">
                            At Hyper-Scale.
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
                        Deploy, manage, and query production-grade embeddings instantly. <span className="text-white font-medium">Brixta Systems</span> bridges the gap between raw unstructured data and powerful semantic search architectures.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                        <Link
                            href="/dashboard"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-lg shadow-xl hover:bg-slate-100 transition-all duration-200 text-center cursor-pointer"
                        >
                            Upload & Embed Now
                        </Link>

                        <Link
                            href="/docs"
                            className="w-full sm:w-auto px-8 py-4 bg-slate-950/80 text-white font-semibold rounded-lg border border-slate-800 backdrop-blur-md hover:bg-slate-900 transition-all duration-200 flex items-center justify-center gap-2 text-center cursor-pointer"
                        >
                            Goto Docs
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="mt-20 pt-10 border-t border-slate-900 w-full grid grid-cols-3 gap-6 max-w-xl mx-auto">
                        <div className="text-center">
                            <div className="text-lg font-bold text-white font-mono">&lt; 12ms</div>
                            <div className="text-xs text-slate-500 font-sans tracking-widest uppercase mt-1">Latency</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-white font-mono">99.99%</div>
                            <div className="text-xs text-slate-500 font-sans tracking-widest uppercase mt-1">Uptime</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-white font-mono">100+</div>
                            <div className="text-xs text-slate-500 font-sans tracking-widest uppercase mt-1">Models</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= ACCORDION LOADER DOMAINS SECTION ================= */}
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">

                <div className="mb-16 max-w-3xl">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Enterprise Domains</h2>
                    <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                        Transforming industries via semantic infrastructure.
                    </p>
                </div>

                {/* Unified Layout Viewport Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT SIDE: Interactive Accordion Loaders (5 Columns Wide) */}
                    <div className="lg:col-span-5 space-y-4">
                        {useCasesData.map((useCase) => {
                            const isOpen = activeCase === useCase.id;
                            return (
                                <div
                                    key={useCase.id}
                                    onClick={() => {
                                        setActiveCase(useCase.id);
                                        setProgress(0);
                                    }}
                                    className={`group relative rounded-xl border p-6 text-left transition-all duration-300 cursor-pointer overflow-hidden ${isOpen
                                        ? "border-slate-800 bg-slate-900/40 backdrop-blur-md shadow-lg"
                                        : "border-transparent bg-transparent hover:bg-slate-900/20"
                                        }`}
                                >
                                    {/* Subtle Loading Progress Bar along the bottom of the active option */}
                                    {isOpen && (
                                        <div className="absolute bottom-0 left-0 h-0.75 bg-linear-to-r from-cyan-500 to-blue-500 transition-all ease-linear" style={{ width: `${progress}%` }} />
                                    )}

                                    <div className="flex items-center justify-between">
                                        <span className={`text-xs font-mono tracking-wider transition-colors duration-300 ${isOpen ? "text-cyan-400" : "text-slate-500 group-hover:text-slate-400"}`}>
                                            {useCase.field}
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.5}
                                            stroke="currentColor"
                                            className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan-400" : ""}`}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>

                                    {/* Expandable Accordion Body Content */}
                                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="overflow-hidden">
                                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                                {useCase.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                                {useCase.description}
                                            </p>
                                            <div className="text-xs font-semibold text-emerald-400 font-mono flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                                {useCase.metric}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT SIDE: Perfectly Coordinated Screen Canvas (7 Columns Wide) */}
                    <div className="lg:col-span-7 w-full aspect-square max-h-120 rounded-xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-md shadow-2xl overflow-hidden p-6 relative">
                        <div className="absolute inset-0 bg-linear-to-tr from-blue-600/5 via-transparent to-cyan-500/5 pointer-events-none" />

                        {/* Display Header Controls */}
                        <div className="flex items-center justify-between border-b border-slate-800/60 pb-4 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-800" />
                                <div className="w-3 h-3 rounded-full bg-slate-800" />
                                <div className="w-3 h-3 rounded-full bg-slate-800" />
                                <span className="text-xs text-slate-500 font-mono ml-2">brixta_inference_engine.py</span>
                            </div>
                            <span className="text-[10px] text-slate-400 font-mono uppercase bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                                POST
                            </span>
                        </div>

                        {/* Code Block Container */}
                        <div className="h-56 rounded-lg bg-slate-950 p-4 border border-slate-800/60 font-mono text-xs sm:text-sm overflow-y-auto text-slate-300 relative">
                            <pre className="whitespace-pre-wrap leading-relaxed tracking-wide text-cyan-400/90 selection:bg-slate-800">
                                {activeData.codeSnippet}
                            </pre>
                        </div>

                        {/* Active Workspace Status Footer */}
                        <div className="mt-6 p-4 rounded-lg border border-slate-800/60 bg-slate-950/80 backdrop-blur flex items-center justify-between">
                            <div>
                                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Active Target Pipeline</div>
                                <div className="text-sm font-semibold text-white mt-0.5">{activeData.field}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Response Token Status</div>
                                <div className="text-sm font-mono text-cyan-400 font-semibold mt-0.5">200 OK</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}