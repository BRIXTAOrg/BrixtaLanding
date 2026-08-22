// src/app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Brixta",
  description: "How Brixta collects, uses, and protects data across its products.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-400 font-sans px-4 sm:px-6 lg:px-8 pt-40 pb-24 flex justify-center">
      <div className="max-w-3xl w-full border border-slate-900 bg-slate-900/20 backdrop-blur-md rounded-xl p-8 sm:p-12 shadow-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-xs font-mono text-slate-500">Last Updated: August 21, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">1. Minimal Data Collection Principles</h2>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Website Visitors:</strong>{" "}We do not track,
            collect, or store personal data from individuals browsing our
            website who have not explicitly reached out or signed up for an
            account.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Self-Hosted Deployments:</strong>{" "}We do not
            collect, intercept, or retain any operational data (field
            activity, embeddings, formulation inputs, or imagery) from
            customers running self-hosted instances of any Brixta product.
            That data remains entirely within your control.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">2. Cookie Usage Policy</h2>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Public Visitors:</strong>{" "}We do not drop or
            store tracking cookies, analytics pixels, or behavioral data on
            anonymous website visitors.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Registered Users:</strong>{" "}We use strictly
            necessary authentication cookies for users who sign in to a
            Brixta product, used solely to maintain secure session state and
            verify identity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">3. Data We Process for Cloud Customers</h2>
          <p className="text-sm leading-relaxed">
            For customers on our managed cloud services, we process the
            operational data required to run the product you&apos;ve
            subscribed to, for example field agent location and visit
            logs for Field Force, document content for Vector Embeddings,
            formulation parameters for the Research Simulator, or region
            boundaries for Geo-Mapping.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Retention:</strong>{" "}This data is retained for
            as long as your account is active, and is deleted upon account
            closure or an explicit deletion request, subject to any
            legal retention obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">4. Data Sharing</h2>
          <p className="text-sm leading-relaxed">
            We do not sell customer data. We share data only with
            subprocessors necessary to operate our infrastructure (such as
            cloud hosting providers), under contractual confidentiality
            obligations, or where required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">5. Contact</h2>
          <p className="text-sm leading-relaxed">
            Questions about this policy or requests to access or delete your
            data can be sent to{" "}
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