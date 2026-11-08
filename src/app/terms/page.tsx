
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Brixta",
  description:
    "Terms of Service governing access to and use of Brixta Corporation's products and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-400 font-sans px-4 sm:px-6 lg:px-8 pt-40 pb-24 flex justify-center">
      <div className="max-w-3xl w-full border border-slate-900 bg-slate-900/20 backdrop-blur-md rounded-xl p-8 sm:p-12 shadow-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-slate-500">
            Last Updated: November 8, 2026
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Brixta Corporation · Partnership Firm · Assam, India
          </p>
        </div>

        <p className="text-sm leading-relaxed">
          Welcome to Brixta. These Terms of Service govern access to and use
          of the Brixta website, products, and services. Brixta is operated
          by <strong className="text-slate-300">Brixta Corporation</strong>,
          a partnership firm based in Assam, India. By accessing our website
          or using any Brixta product, including Field Force Management,
          Vector Embedding Infrastructure, the Industrial Research Simulator,
          or the Satellite Geo-Mapping platform, you agree to these terms.
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            1. Our Products & Deployment Models
          </h2>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Managed Cloud Service:</strong>{" "}
            Most Brixta products are available as managed cloud services
            hosted on our infrastructure, accessible through web applications
            or APIs.
          </p>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Self-Hosted Deployment:</strong>{" "}
            Where offered, including our Vector Embedding Infrastructure
            product, we provide self-hosted deployment packages that run
            within your own environment.
          </p>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Self-Hosted Support Limitation:</strong>{" "}
            For self-hosted deployments, support is limited to documentation
            and configuration guidance unless otherwise agreed under a
            separate enterprise support agreement. System maintenance,
            infrastructure provisioning, and runtime environments remain
            the responsibility of the deploying organization.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            2. Customer Data
          </h2>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Ownership:</strong>{" "}
            You retain ownership of all data you submit to Brixta products,
            including field activity records, source documents and embeddings,
            formulation inputs, and regions of interest for geo-mapping.
          </p>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Retention:</strong>{" "}
            Data submitted to our managed cloud services is retained for as
            long as your account remains active, or as otherwise specified in
            your service agreement. You may request deletion of your data,
            subject to applicable legal retention obligations.
          </p>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Self-Hosted Data:</strong>{" "}
            For self-hosted deployments, Brixta does not access, collect, or
            retain your underlying operational data unless you explicitly
            authorize such access for support or another agreed purpose.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            3. Pricing & Billing Changes
          </h2>

          <p className="text-sm leading-relaxed">
            Our pricing tiers and subscription structures may change from
            time to time to reflect infrastructure and operating costs.
            Where applicable, we will provide advance email notification
            to your account's registered contact before changes to existing
            subscriptions take effect.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            4. Acceptable Use
          </h2>

          <p className="text-sm leading-relaxed">
            You agree not to use Brixta products to violate applicable law,
            infringe on the rights of others, or attempt to disrupt,
            reverse-engineer, or gain unauthorized access to our systems
            or those of other customers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            5. Communications and Marketing
          </h2>

          <p className="text-sm leading-relaxed">
            Brixta may communicate with customers and prospective customers
            through email, telephone, and messaging platforms, including
            WhatsApp, where appropriate and subject to applicable consent
            requirements and communication preferences.
          </p>

          <p className="text-sm leading-relaxed">
            Promotional WhatsApp communications are sent only to recipients
            who have opted in to receive them. Recipients may withdraw
            consent or opt out of marketing communications at any time
            through the available opt-out mechanisms or by contacting
            Brixta directly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            6. Business Identity and Contact
          </h2>

          <p className="text-sm leading-relaxed">
            Brixta is operated by Brixta Corporation, a partnership firm
            based in Assam, India. Brixta provides technology solutions,
            software products, data infrastructure, industrial research
            and development, and related services.
          </p>

          <p className="text-sm leading-relaxed">
            Official correspondence regarding these terms, our products,
            or our services may be directed to:
          </p>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-200">
              Brixta Corporation
            </p>

            <p className="text-sm">
              Assam, India
            </p>

            <a
              href="mailto:connect@brixta.site"
              className="block text-sm text-cyan-400 hover:underline"
            >
              connect@brixta.site
            </a>

            <a
              href="tel:+917635874931"
              className="block text-sm text-cyan-400 hover:underline"
            >
              +91 76358 74931
            </a>

            <a
              href="https://brixta.site"
              className="block text-sm text-cyan-400 hover:underline"
            >
              https://brixta.site
            </a>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            7. Governing Law
          </h2>

          <p className="text-sm leading-relaxed">
            These Terms of Service are governed by the applicable laws of
            India. Any disputes arising from the use of our website or
            services will be subject to the jurisdiction of the competent
            courts in accordance with applicable law.
          </p>
        </section>
      </div>
    </div>
  );
}
