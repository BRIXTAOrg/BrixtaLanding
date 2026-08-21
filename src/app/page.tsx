// src/app/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Database,
  FlaskConical,
  Satellite,
  ArrowRight,
  Cpu,
  ShieldCheck,
  Gauge,
} from "lucide-react";
import { products } from "@/lib/products";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
}

const productIcons: Record<string, React.ElementType> = {
  "field-force": Users,
  "vector-embeddings": Database,
  "research-simulator": FlaskConical,
  "geo-mapping": Satellite,
};

const pillars = [
  {
    icon: Cpu,
    title: "Automation-first",
    description:
      "We replace manual, error-prone processes with software that runs the workflow for you — from field operations to lab research.",
  },
  {
    icon: Gauge,
    title: "Built for cost reduction",
    description:
      "Every product is engineered to cut operating cost — fewer wasted trial batches, fewer site visits, lower AI inference bills.",
  },
  {
    icon: ShieldCheck,
    title: "Deploy your way",
    description:
      "Managed cloud or fully self-hosted inside your own infrastructure — you choose where your data lives.",
  },
];

export default function Home() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Stars are generated client-side only, after mount, so the server-rendered
  // HTML (empty array) matches the client's first render and hydration never
  // mismatches on the random positions.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: avoids SSR/hydration mismatch on random star positions
    setStars(
      Array.from({ length: 45 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1.5,
        baseOpacity: Math.random() * 0.3 + 0.2,
      }))
    );
  }, []);

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

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden bg-slate-950 text-white font-sans selection:bg-blue-500/30 selection:text-blue-200"
    >
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full overflow-hidden bg-linear-to-br from-slate-950 via-blue-950/60 to-slate-950 flex flex-col justify-start items-center px-4 sm:px-6 lg:px-8 pt-40 pb-24 border-b border-slate-900">
        <div className="absolute inset-0 z-0 mix-blend-screen opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-175 h-175 rounded-full bg-linear-to-r from-cyan-600/30 to-blue-800/30 blur-[140px] animate-pulse duration-10000"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-150 h-150 rounded-full bg-linear-to-r from-blue-900/30 to-indigo-950/40 blur-[120px] animate-pulse duration-8000"></div>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
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

        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center w-full">
          <div className="text-[11px] font-mono tracking-widest uppercase text-cyan-400 font-semibold bg-cyan-950/40 px-4 py-1.5 rounded-full border border-cyan-800/30 shadow-inner mb-6">
            IT Solutions &middot; Data Solutions &middot; R&amp;D
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Automation and intelligence <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-400">
              for the industries that build things.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            <span className="text-white font-medium">Brixta</span>{" "}
            builds automation, data infrastructure, and research &amp;
            development software that helps industrial, field-operations,
            and data-driven teams cut cost and get back to growth.
          </p>

          <div className="w-full max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-3 justify-center">
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-xl shadow-xl hover:bg-slate-100 hover:scale-[1.02] transition-all duration-300 text-center"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-900 transition-all duration-300 text-center"
            >
              Talk to Sales
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-900 w-full grid grid-cols-3 gap-6 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-lg font-bold text-white font-mono">4</div>
              <div className="text-xs text-slate-500 font-sans tracking-widest uppercase mt-1">Product lines</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white font-mono">99.99%</div>
              <div className="text-xs text-slate-500 font-sans tracking-widest uppercase mt-1">Platform uptime</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white font-mono">24/7</div>
              <div className="text-xs text-slate-500 font-sans tracking-widest uppercase mt-1">Enterprise support</div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCT GRID SECTION ================= */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">What we build</h2>
          <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Four product lines. One goal: less manual work, more growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => {
            const Icon = productIcons[product.slug] ?? Database;
            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className={`group relative rounded-2xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-md p-7 flex flex-col overflow-hidden transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/50`}
              >
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20"
                  style={{ background: product.accent.glow }}
                />
                <div
                  className={`relative w-11 h-11 rounded-xl flex items-center justify-center bg-linear-to-br ${product.accent.from} ${product.accent.to} shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <div className={`mt-5 text-xs font-mono uppercase tracking-wider ${product.accent.text}`}>
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-white mt-2 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-3 mb-6">
                  {product.summary}
                </p>

                <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-white">
                  Explore {product.shortName}
                  <ArrowRight className="w-4 h-4 opacity-60 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ================= ABOUT / PILLARS SECTION ================= */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 border-t border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Why Brixta</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              We build the software layer between field data and business decisions.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Brixta is an IT solutions, data solutions, and research &amp;
              development company. We work with industrial producers, field
              operations teams, and data-driven organizations to design
              automation and cost-reduction software so they can spend less
              time on manual process and more time on growth.
            </p>

            <div className="space-y-5">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <pillar.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{pillar.title}</div>
                    <div className="text-sm text-slate-500 leading-relaxed mt-0.5">{pillar.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl">
              <Image
                src="https://picsum.photos/seed/brixta-about-team/1200/900"
                alt="Brixta team working across IT, data, and research disciplines"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="relative rounded-3xl border border-slate-800/80 bg-linear-to-br from-slate-900/60 to-slate-950 p-10 sm:p-14 text-center overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
          <h2 className="relative text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Not sure which product fits your operation?
          </h2>
          <p className="relative text-slate-400 max-w-xl mx-auto mb-8">
            Tell us what you&apos;re trying to automate or analyze, and our
            team will help you map it to the right Brixta product — or scope
            something custom.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-xl shadow-xl hover:bg-slate-100 hover:scale-[1.02] transition-all duration-300"
          >
            Contact our team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
