
import type { Metadata } from "next";
import { Mail, Clock, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Brixta",
  description:
    "Contact Brixta Corporation about Field Force, Vector Embeddings, Research Simulator, or Geo-Mapping.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white font-sans px-4 sm:px-6 lg:px-8 pt-40 pb-24 flex justify-center items-start">
      <div className="max-w-lg w-full border border-slate-900 bg-slate-900/20 backdrop-blur-md rounded-2xl p-8 sm:p-12 text-center shadow-2xl">
        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-6">
          <Mail className="w-5 h-5 text-cyan-400" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-white">
          Get in Touch
        </h1>

        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          Have a question about Field Force, Vector Embeddings, our Research
          Simulator, or Geo-Mapping? Or just want to talk through a custom
          use case? Reach out directly. A real person will get back to you.
        </p>

        <div className="space-y-3">
          <a
            href="mailto:connect@brixta.site"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800/60 font-mono text-sm sm:text-base text-cyan-400 shadow-inner hover:border-cyan-500/40 transition-colors duration-200"
          >
            <Mail className="w-4 h-4 shrink-0" />
            connect@brixta.site
          </a>

          <a
            href="tel:+917635874931"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800/60 font-mono text-sm sm:text-base text-cyan-400 shadow-inner hover:border-cyan-500/40 transition-colors duration-200"
          >
            <Phone className="w-4 h-4 shrink-0" />
            +91 76358 74931
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 grid grid-cols-2 gap-6 text-left">
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
            <div>
              <div className="text-xs font-semibold text-slate-300">
                Response time
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Within 1 business day
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
            <div>
              <div className="text-xs font-semibold text-slate-300">
                Coverage
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Assam, India · Global clients
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900">
          <p className="text-xs font-semibold text-slate-300">
            Brixta Corporation
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            Technology, Data Solutions & Research and Development
          </p>
        </div>

        <p className="text-[11px] text-slate-600 mt-6">
          A structured contact form is coming soon. For now, email or
          telephone is the fastest way to reach us.
        </p>
      </div>
    </div>
  );
}
