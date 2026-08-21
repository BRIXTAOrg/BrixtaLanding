// src/app/page.tsx
"use client";

import { useState } from "react";
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
  Plus,
} from "lucide-react";
import { products } from "@/lib/products";

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

const faqs = [
  {
    question: "What does Brixta actually do?",
    answer:
      "We build automation, data, and R&D software for industries that run on field operations, physical materials, and land — currently four products: Field Force Management, Vector Embedding Infrastructure, an Industrial Research Simulator, and Satellite Geo-Mapping.",
  },
  {
    question: "Do I need to use all four products?",
    answer:
      "No. Each product is sold and deployed independently. Most customers start with the one product that matches their immediate need and add others later if it makes sense.",
  },
  {
    question: "Can we self-host instead of using your cloud?",
    answer:
      "Yes, for products that support it — most notably Vector Embedding Infrastructure. You can run the full engine inside your own environment with no data leaving your network.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing depends on the product and how you use it — for example per field agent, per monitored region, or per simulation seat. See the Pricing page for tiers, or contact us for an exact quote.",
  },
  {
    question: "Can we get a demo before committing?",
    answer:
      "Yes. Reach out through the Contact page and our team will walk you through the product on a use case close to your own.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-950 text-white font-sans">
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full flex flex-col justify-start items-center px-4 sm:px-6 lg:px-8 pt-40 pb-24 border-b border-slate-900">
        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center w-full">
          <div className="text-[11px] font-mono tracking-widest uppercase text-slate-400 font-semibold bg-slate-900 px-4 py-1.5 rounded-full border border-slate-800 mb-6">
            IT Solutions &middot; Data Solutions &middot; R&amp;D
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Automation and intelligence <br />
            <span className="text-blue-400">
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
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-100 transition-colors duration-200 text-center"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-900 transition-colors duration-200 text-center"
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
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">What we build</h2>
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
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-7 flex flex-col transition-colors duration-200 hover:border-slate-700 hover:bg-slate-900/70"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center bg-linear-to-br ${product.accent.from} ${product.accent.to}`}
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
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Why Brixta</h2>
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
                    <pillar.icon className="w-4 h-4 text-blue-400" />
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
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-800">
              <Image
                src="https://picsum.photos/seed/brixta-about-team/1200/900"
                alt="Brixta team working across IT, data, and research disciplines"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-10 sm:p-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Not sure which product fits your operation?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Tell us what you&apos;re trying to automate or analyze, and our
            team will help you map it to the right Brixta product — or scope
            something custom.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-100 transition-colors duration-200"
          >
            Contact our team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 border-t border-slate-900 pt-20">
        <div className="mb-10 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">FAQ</h2>
          <p className="text-3xl font-bold tracking-tight text-white">
            Frequently asked questions
          </p>
        </div>

        <div className="divide-y divide-slate-900 border-t border-b border-slate-900">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-white">
                    {faq.question}
                  </span>
                  <Plus
                    className={`w-4 h-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-sm text-slate-400 leading-relaxed pb-5 pr-8">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
