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
import { products, getProductBySlug } from "@/lib/products";
import FieldForceDemo from "@/components/home/FieldForceDemo";
import Testimonials from "@/components/home/Testimonials";

const productIcons: Record<string, React.ElementType> = {
  "vector-embeddings": Database,
  "research-simulator": FlaskConical,
  "geo-mapping": Satellite,
};

const industries = [
  "Logistics",
  "Mining",
  "Manufacturing",
  "Construction",
  "Utilities",
  "Distribution",
];

const pillars = [
  {
    icon: Cpu,
    title: "Automation-first",
    description:
      "We replace manual, error-prone processes with software that runs the workflow for you, from field operations to lab research.",
  },
  {
    icon: Gauge,
    title: "Built for cost reduction",
    description:
      "Every product is engineered to cut operating cost: fewer wasted trial batches, fewer site visits, lower AI inference bills.",
  },
  {
    icon: ShieldCheck,
    title: "Deploy your way",
    description:
      "Managed cloud or fully self-hosted inside your own infrastructure. You choose where your data lives.",
  },
];

const faqs = [
  {
    question: "What does Brixta actually do?",
    answer:
      "Our flagship product is Field Force, an auto-configurable operations platform for field teams. We also build three more products for data, research, and geospatial teams: Vector Embedding Infrastructure, an Industrial Research Simulator, and Satellite Geo-Mapping.",
  },
  {
    question: "What does 'auto-configurable' mean in Field Force?",
    answer:
      "You define your own data model: add a field, remove one, or change its type (text, number, date, timestamp, JSONB) from a config screen. There's no developer ticket or release cycle, and every connected mobile device picks up the change immediately.",
  },
  {
    question: "Do I need to use all four products?",
    answer:
      "No. Each product is sold and deployed independently. Most customers start with Field Force and add others later if it makes sense.",
  },
  {
    question: "Can we self-host instead of using your cloud?",
    answer:
      "Yes, for products that support it, most notably Vector Embedding Infrastructure. You can run the full engine inside your own environment with no data leaving your network.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing depends on the product and how you use it, for example per field agent, per monitored region, or per simulation seat. See the Pricing page for tiers, or contact us for an exact quote.",
  },
  {
    question: "Can we get a demo before committing?",
    answer:
      "Yes. Reach out through the Contact page and our team will walk you through the product on a use case close to your own.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const fieldForce = getProductBySlug("field-force")!;
  const otherProducts = products.filter((p) => p.slug !== "field-force");

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-950 text-white font-sans">
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 pt-40 pb-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-blue-400 font-semibold bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 mb-6">
              Brixta Field Force &middot; Flagship product
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Add a field.
              <br />
              Watch it appear on every phone.
            </h1>

            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
              Field Force is the auto-configurable operations platform behind
              how field teams track visits, tasks, leave, and TA/DA. Change
              your data model yourself, with no developer and no
              release cycle, and it&apos;s one of four products{" "}
              <span className="text-white font-medium">Brixta</span> builds
              for industries that run on people, materials, and land.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-14">
              <Link
                href="/products/field-force"
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-100 transition-colors duration-200 text-center"
              >
                Explore Field Force
              </Link>
              <Link
                href="/products"
                className="w-full sm:w-auto px-7 py-3.5 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-900 transition-colors duration-200 text-center"
              >
                All Brixta products
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-md pt-8 border-t border-slate-900">
              {fieldForce.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-xs text-slate-500 tracking-wide mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <FieldForceDemo />
          </div>
        </div>

        {/* Trusted-by / industry strip */}
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-900">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-600 shrink-0">
              Built for field teams across
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {industries.map((industry) => (
                <span key={industry} className="text-sm font-semibold text-slate-500">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCT SECTION (bento) ================= */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">What we build</h2>
          <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            One flagship product. Three more built the same way.
          </p>
        </div>

        {/* Featured: Field Force */}
        <Link
          href="/products/field-force"
          className="group relative block rounded-2xl border border-slate-800 bg-slate-900/40 p-8 sm:p-10 mb-6 transition-colors duration-200 hover:border-slate-700 hover:bg-slate-900/70"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="lg:flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center bg-linear-to-br ${fieldForce.accent.from} ${fieldForce.accent.to}`}
                >
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  Flagship
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">{fieldForce.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl mb-6">
                {fieldForce.summary}
              </p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
                Explore {fieldForce.shortName}
                <ArrowRight className="w-4 h-4 opacity-60 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </div>
            </div>

            <div className="lg:w-72 shrink-0 grid grid-cols-3 lg:grid-cols-1 gap-3">
              {fieldForce.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
                  <div className="text-base font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Link>

        {/* Other three products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProducts.map((product) => {
            const Icon = productIcons[product.slug] ?? Database;
            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col transition-colors duration-200 hover:border-slate-700 hover:bg-slate-900/70"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center bg-linear-to-br ${product.accent.from} ${product.accent.to}`}
                >
                  <Icon className="w-4.5 h-4.5 text-white" />
                </div>

                <div className={`mt-4 text-xs font-mono uppercase tracking-wider ${product.accent.text}`}>
                  {product.category}
                </div>
                <h3 className="text-base font-bold text-white mt-1.5 tracking-tight">
                  {product.shortName}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2 mb-5">
                  {product.summary}
                </p>

                <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-white">
                  Learn more
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
            team will help you map it to the right Brixta product, or scope
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

      {/* ================= TESTIMONIALS SECTION ================= */}
      <div className="relative w-full py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Testimonials</h2>
          <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl">
            What teams on the ground actually say.
          </p>
        </div>
        <Testimonials />
      </div>

      {/* ================= TESTIFIED BY SECTION ================= */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-600">Testified by</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-200">
            <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-slate-800 shrink-0">
              <Image
                src="https://www.bestcement.co.in/wp-content/uploads/2025/03/cropped-WhatsApp-Image-2025-03-22-at-4.22.56-PM-270x270.jpeg"
                alt="Best Cement logo"
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <span className="text-lg font-bold text-slate-300 tracking-tight">Best Cement</span>
          </div>

          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-200">
            <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-slate-800 shrink-0">
              <Image
                src="https://www.eurofoam.in/wp-content/uploads/2025/03/cropped-WhatsApp-Image-2025-03-22-at-4.22.56-PM-270x270.jpeg"
                alt="Eurofoam logo"
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <span className="text-lg font-bold text-slate-300 tracking-tight">Eurofoam</span>
          </div>
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