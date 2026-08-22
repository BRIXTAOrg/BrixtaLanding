// src/app/pricing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Pricing | Brixta",
  description:
    "Simple tiers across every Brixta product, with per-product pricing that scales to your team, data volume, or coverage area.",
};

const tiers = [
  {
    name: "Starter",
    subtitle: "For a single team getting started",
    price: "Custom",
    highlighted: false,
    features: [
      "Access to one Brixta product",
      "Standard cloud deployment",
      "Email support, business hours",
      "Up to 3 team seats",
    ],
    cta: "Talk to Sales",
  },
  {
    name: "Business",
    subtitle: "For teams running it in production",
    price: "Custom",
    highlighted: true,
    features: [
      "Access to any combination of products",
      "Cloud or self-hosted deployment",
      "Priority support with SLA",
      "Unlimited team seats",
      "Custom reporting & exports",
    ],
    cta: "Talk to Sales",
  },
  {
    name: "Enterprise",
    subtitle: "For multi-site or regulated operations",
    price: "Custom",
    highlighted: false,
    features: [
      "Full self-hosted deployment option",
      "Dedicated technical account manager",
      "Custom integrations & data pipelines",
      "Enterprise security & audit review",
      "Volume-based pricing across products",
    ],
    cta: "Talk to Sales",
  },
];

const productPricingNotes: Record<string, string> = {
  "field-force": "Priced per active field agent, per month.",
  "vector-embeddings": "Pay-as-you-go per token, or a flat self-hosted license.",
  "research-simulator": "Priced per simulation seat, with annual licensing available.",
  "geo-mapping": "Priced per monitored region or square kilometer.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-300 font-sans px-4 sm:px-6 lg:px-8 pt-40 pb-24">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">Pricing</h1>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
          Simple tiers. Pricing scaled to how you use it.
        </p>
        <p className="text-slate-400 text-base leading-relaxed">
          Every Brixta product follows the same tier structure below. Actual
          cost depends on the product, your scale, and whether you deploy on
          our cloud or self-hosted. Our team will scope an exact quote with
          you.
        </p>
      </div>

      {/* Tier cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-8 flex flex-col ${
              tier.highlighted
                ? "border-blue-500/40 bg-slate-900/50 shadow-2xl shadow-blue-950/30"
                : "border-slate-800 bg-slate-900/20"
            }`}
          >
            {tier.highlighted && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold rounded-bl-lg rounded-tr-2xl">
                Most Popular
              </div>
            )}
            <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2">
              {tier.subtitle}
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">{tier.name}</h2>
            <div className="text-3xl font-extrabold text-white mb-6 mt-2">{tier.price}</div>

            <ul className="space-y-3 text-sm text-slate-300 mb-8 grow">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`w-full py-3 text-center font-bold rounded-lg text-sm transition duration-200 ${
                tier.highlighted
                  ? "bg-white text-slate-950 hover:bg-slate-100"
                  : "bg-slate-950 border border-slate-800 text-white hover:bg-slate-900"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Per-product pricing notes */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-white tracking-tight mb-6 text-center">
          How each product is metered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.slug}
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-800/80 bg-slate-900/20 p-5"
            >
              <div>
                <div className={`text-xs font-mono uppercase tracking-wider ${product.accent.text} mb-1`}>
                  {product.shortName}
                </div>
                <div className="text-sm text-slate-400">{productPricingNotes[product.slug]}</div>
              </div>
              <Link
                href={`/products/${product.slug}`}
                className="shrink-0 flex items-center gap-1 text-sm font-semibold text-white hover:text-slate-300 transition-colors"
              >
                Details
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}