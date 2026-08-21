// src/app/products/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { products, getProductBySlug } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Brixta`,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const { accent } = product;
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white font-sans">
      {/* ================= HERO ================= */}
      <div className="relative w-full overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-900 pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute top-[-20%] right-[-10%] w-150 h-150 rounded-full blur-[140px] opacity-25 pointer-events-none"
          style={{ background: accent.glow }}
        />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div
              className={`inline-block text-[11px] font-mono tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full border mb-6 ${accent.chip}`}
            >
              {product.category}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
              {product.tagline}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
              {product.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-slate-950 font-bold rounded-xl shadow-xl hover:bg-slate-100 hover:scale-[1.02] transition-all duration-300 text-center"
              >
                Request a Demo
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-7 py-3.5 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-900 transition-all duration-300 text-center"
              >
                See Pricing
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {product.stats.map((stat) => (
                <div key={stat.label}>
                  <div className={`text-xl font-bold font-mono ${accent.text}`}>{stat.value}</div>
                  <div className="text-xs text-slate-500 tracking-wide mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className={`relative aspect-4/3 rounded-2xl overflow-hidden border ${accent.ring} shadow-2xl`}>
              <Image
                src={`https://picsum.photos/seed/${product.heroImageSeed}/1200/900`}
                alt={`${product.name} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="mb-16 max-w-2xl">
          <h2 className={`text-xs font-bold uppercase tracking-widest mb-3 ${accent.text}`}>Capabilities</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Everything you need, built in — not bolted on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-md p-6 hover:border-slate-700 transition-colors duration-200"
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center mb-4 bg-linear-to-br ${accent.from} ${accent.to}`}
              >
                <Check className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= WORKFLOW + IMAGE ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 border-t border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h2 className={`text-xs font-bold uppercase tracking-widest mb-3 ${accent.text}`}>How it works</h2>
            <p className="text-3xl font-bold tracking-tight text-white mb-8">
              From setup to production in three steps.
            </p>

            <div className="space-y-6">
              {product.workflow.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div
                    className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold text-white bg-linear-to-br ${accent.from} ${accent.to}`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{step.title}</div>
                    <div className="text-sm text-slate-500 leading-relaxed mt-1">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className={`relative aspect-video rounded-2xl overflow-hidden border ${accent.ring} shadow-2xl`}>
              <Image
                src={`https://picsum.photos/seed/${product.sectionImageSeed}/1400/900`}
                alt={`${product.name} in operation`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= USE CASES ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 border-t border-slate-900">
        <div className="mb-16 max-w-2xl">
          <h2 className={`text-xs font-bold uppercase tracking-widest mb-3 ${accent.text}`}>Who it&apos;s for</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built around real operating conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="rounded-xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-md p-6"
            >
              <h3 className="text-base font-bold text-white mb-2 tracking-tight">{useCase.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="relative rounded-3xl border border-slate-800/80 bg-linear-to-br from-slate-900/60 to-slate-950 p-10 sm:p-14 text-center overflow-hidden">
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-25"
            style={{ background: accent.glow }}
          />
          <h2 className="relative text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            See {product.shortName} on your own data.
          </h2>
          <p className="relative text-slate-400 max-w-xl mx-auto mb-8">
            Talk to our team about a walkthrough scoped to your operation, or
            check our pricing to see what tier fits.
          </p>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-xl shadow-xl hover:bg-slate-100 hover:scale-[1.02] transition-all duration-300"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-900 transition-all duration-300"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* ================= OTHER PRODUCTS ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 border-t border-slate-900 pt-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Other Brixta products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {otherProducts.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group rounded-xl border border-slate-800/80 bg-slate-900/20 p-5 hover:border-slate-700 hover:bg-slate-900/40 transition-colors duration-200"
            >
              <div className={`text-xs font-mono uppercase tracking-wider ${p.accent.text} mb-1.5`}>
                {p.category}
              </div>
              <div className="text-sm font-semibold text-white flex items-center gap-1">
                {p.shortName}
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
