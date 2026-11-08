
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Brixta",
  description:
    "How Brixta Corporation collects, uses, processes, and protects personal data across its products and services.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-400 font-sans px-4 sm:px-6 lg:px-8 pt-40 pb-24 flex justify-center">
      <div className="max-w-3xl w-full border border-slate-900 bg-slate-900/20 backdrop-blur-md rounded-xl p-8 sm:p-12 shadow-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-slate-500">
            Last Updated: November 8, 2026
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Operated by Brixta Corporation, a partnership firm based in Assam, India.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            1. Minimal Data Collection Principles
          </h2>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Website Visitors:</strong>{" "}
            We do not track, collect, or store personal data from individuals
            browsing our website who have not explicitly reached out or signed
            up for an account, except for information technically necessary
            to operate and secure the website.
          </p>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Self-Hosted Deployments:</strong>{" "}
            We do not collect, intercept, or retain any operational data
            (field activity, embeddings, formulation inputs, or imagery) from
            customers running self-hosted instances of any Brixta product.
            That data remains within the customer's control.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            2. Cookie Usage Policy
          </h2>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Public Visitors:</strong>{" "}
            We do not use tracking cookies, analytics pixels, or behavioral
            advertising cookies on anonymous website visitors.
          </p>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Registered Users:</strong>{" "}
            We use strictly necessary authentication cookies for users who
            sign in to a Brixta product, used to maintain secure session
            state and verify identity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            3. Data We Process for Cloud Customers
          </h2>

          <p className="text-sm leading-relaxed">
            For customers on our managed cloud services, we process the
            operational data required to run the product they have subscribed
            to. This may include field agent location and visit logs for Field
            Force, document content for Vector Embeddings, formulation
            parameters for the Research Simulator, or region boundaries for
            Geo-Mapping.
          </p>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Retention:</strong>{" "}
            This data is retained for as long as the relevant account is
            active and is deleted upon account closure or an explicit deletion
            request, subject to applicable legal retention obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            4. WhatsApp Marketing and Communications
          </h2>

          <p className="text-sm leading-relaxed">
            Brixta Corporation may use the WhatsApp Business Platform,
            provided by Meta, to communicate with customers and individuals
            who have provided their phone numbers and opted in to receive
            WhatsApp communications from Brixta.
          </p>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Information Processed:</strong>{" "}
            This may include your name, WhatsApp phone number, communication
            preferences, consent records, and information relating to
            messages sent to or received from you.
          </p>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Purpose:</strong>{" "}
            We may use this information to send business announcements,
            product updates, promotional offers, service-related
            communications, and other information relevant to our products
            and services, in accordance with your preferences and applicable
            messaging rules.
          </p>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Consent and Opt-Out:</strong>{" "}
            We send marketing communications only to individuals who have
            opted in to receive them. You may withdraw your consent or opt
            out at any time by replying STOP where supported, responding
            with an opt-out request, or contacting us directly. We will
            process such requests and stop further marketing communications
            to the extent applicable.
          </p>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Third-Party Processing:</strong>{" "}
            WhatsApp communications are processed through Meta's WhatsApp
            Business Platform. Relevant contact and message information may
            be shared with Meta to facilitate message delivery and related
            platform functionality, subject to Meta's applicable terms and
            privacy policies.
          </p>

          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Retention:</strong>{" "}
            WhatsApp contact information, consent records, and communication
            records are retained only for as long as reasonably necessary
            for the purposes described in this policy or as required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            5. Data Sharing
          </h2>

          <p className="text-sm leading-relaxed">
            We do not sell customer personal data. We share information only
            with service providers and subprocessors necessary to operate
            our services, including cloud hosting, infrastructure, payment,
            and communication providers, under appropriate contractual or
            other applicable safeguards, or where disclosure is required by
            law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            6. Your Privacy Rights
          </h2>

          <p className="text-sm leading-relaxed">
            Subject to applicable law, you may request access to, correction
            of, or deletion of personal information held by us. You may also
            withdraw consent for communications that rely on your consent.
            We will review and respond to requests in accordance with
            applicable legal requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">
            7. Contact
          </h2>

          <p className="text-sm leading-relaxed">
            This Privacy Policy is maintained by Brixta Corporation.
            Questions about this policy, privacy requests, or requests to
            access or delete your data can be sent to{" "}
            <a
              href="mailto:connect@brixta.site"
              className="text-cyan-400 hover:underline"
            >
              connect@brixta.site
            </a>{" "}
            or by telephone at{" "}
            <a
              href="tel:+917635874931"
              className="text-cyan-400 hover:underline"
            >
              +91 76358 74931
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
