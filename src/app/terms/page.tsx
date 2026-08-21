// src/app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Brixta",
  description: "Terms of Service for Brixta's products and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-400 font-sans px-4 sm:px-6 lg:px-8 pt-40 pb-24 flex justify-center">
      <div className="max-w-3xl w-full border border-slate-900 bg-slate-900/20 backdrop-blur-md rounded-xl p-8 sm:p-12 shadow-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Terms of Service</h1>
          <p className="text-xs font-mono text-slate-500">Last Updated: August 21, 2026</p>
        </div>

        <p className="text-sm leading-relaxed">
          Welcome to Brixta. By accessing our website or using any Brixta
          product — including Field Force Management, Vector Embedding
          Infrastructure, the Industrial Research Simulator, or the
          Satellite Geo-Mapping platform — you agree to be bound by these
          Terms of Service.
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">1. Our Products & Deployment Models</h2>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Managed Cloud Service:</strong>{" "}Most Brixta
            products are available as a managed cloud service hosted on our
            infrastructure, accessible via web application or API.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Self-Hosted Deployment:</strong>{" "}Where noted
            (such as our Vector Embedding Infrastructure product), we offer
            self-hosted deployment packages that run entirely within your
            own environment.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Self-Hosted Support Limitation:</strong>{" "}For
            self-hosted deployments, support is limited to documentation and
            configuration guidance. System maintenance, infrastructure
            provisioning, and runtime environments remain the sole
            responsibility of the deploying organization unless covered
            under a separate enterprise support agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">2. Customer Data</h2>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Ownership:</strong>{" "}You retain ownership of all
            data you submit to Brixta products — field activity records,
            source documents and embeddings, formulation inputs, or regions
            of interest for geo-mapping.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Retention:</strong>{" "}Data submitted to our managed
            cloud services is retained for as long as your account remains
            active, or as otherwise specified in your service agreement.
            You may request deletion of your data at any time.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Self-Hosted Data:</strong>{" "}For self-hosted
            deployments, Brixta does not access, collect, or retain any of
            your underlying data. It remains entirely within your
            infrastructure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">3. Pricing & Billing Changes</h2>
          <p className="text-sm leading-relaxed">
            Our pricing tiers and subscription structures may change from
            time to time to reflect infrastructure and operating costs. If
            your pricing changes, we will provide advance{" "}
            <span className="text-slate-200 font-medium">email notification</span>{" "}
            to your account&apos;s registered contact before the change
            takes effect.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">4. Acceptable Use</h2>
          <p className="text-sm leading-relaxed">
            You agree not to use Brixta products to violate applicable law,
            infringe on the rights of others, or attempt to disrupt,
            reverse-engineer, or gain unauthorized access to our systems or
            those of other customers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">5. Contact</h2>
          <p className="text-sm leading-relaxed">
            Questions about these terms can be sent to{" "}
            <a href="mailto:brixtamail@gmail.com" className="text-cyan-400 hover:underline">
              brixtamail@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
