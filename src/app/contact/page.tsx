// src/app/contact/page.tsx
"use client";

import React from "react";
import { ArrowUpRight, MapPin, Phone, MessageSquare, Mail } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917635874931?text=Hi%20Brixta%2C%20I%20would%20like%20to%20book%20a%20free%20engineer%20visit.";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#121212] pt-20 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 pb-6 mb-12 border-b border-[#121212]/15 text-xs font-mono uppercase tracking-[0.2em] text-[#121212]/70">
          <span>[ DIRECT DESK ]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight uppercase leading-[0.95] mb-6">
              Let's build <br />
              <span className="text-[#121212]/40">together.</span>
            </h1>
            <p className="text-lg text-[#121212]/75 max-w-md mb-12">
              Ready to take control of your construction site? Book a free on-site evaluation with our engineers today.
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#121212]/50 mb-2">
                  <Phone className="w-4 h-4" /> Direct Phone & WhatsApp
                </div>
                <a href="tel:+917635874931" className="block text-2xl font-bold hover:text-[#121212]/70 transition-colors">+91 76358 74931</a>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#121212]/50 mb-2">
                  <Mail className="w-4 h-4" /> Email
                </div>
                <a href="mailto:connect@brixta.site" className="block text-xl font-bold hover:text-[#121212]/70 transition-colors">connect@brixta.site</a>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#121212]/50 mb-2">
                  <MapPin className="w-4 h-4" /> Operations Hub
                </div>
                <p className="text-lg font-medium">Guwahati, Assam, India</p>
              </div>
            </div>
          </div>

          <div className="bg-[#121212] p-8 sm:p-12 text-[#F5F3EE] flex flex-col justify-center">
            <MessageSquare className="w-10 h-10 mb-6 text-[#F5F3EE]/70" />
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
              Fastest way to reach us
            </h2>
            <p className="text-[#F5F3EE]/70 mb-10 text-sm leading-relaxed">
              Skip the forms. Send us a direct WhatsApp message with your location and current construction stage, and our team will assign an engineer for your free site visit.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between bg-[#F5F3EE] text-[#121212] px-8 py-5 text-sm font-bold uppercase tracking-[0.15em] hover:bg-[#E2DEC9] transition-colors"
            >
              <span>Message on WhatsApp</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}