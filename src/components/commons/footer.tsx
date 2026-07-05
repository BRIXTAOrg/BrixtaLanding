// src/components/commons/footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Product",
      links: [
        { label: "Self Hosted", href: "#" },
        { label: "Cloud Platform", href: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Terms Of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Developer",
      links: [
        { label: "Self Hosted", href: "#" },
        { label: "Docs", href: "#" },
        { label: "API", href: "#" },
        { label: "Licences", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "brixtamail@gamil.com", href: "mailto:brixtamail@gamil.com" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 text-slate-400 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8 items-start">
          
          {/* Leftmost Branding / Logo Section */}
          <div className="col-span-2 flex flex-col justify-between h-full space-y-6">
            <div className="flex items-center gap-3">
              {/* Giant Placeholder "B" Logo */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 text-white font-black text-2xl shadow-lg shadow-blue-500/10">
                B
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Brixta Systems
              </span>
            </div>
            
            <p className="text-xs text-slate-600 font-mono mt-4">
              &copy; {currentYear} Brixta Systems, Inc.
            </p>
          </div>

          {/* Dynamic Category Link Columns */}
          {sections.map((section) => (
            <div key={section.title} className="col-span-1 flex flex-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">
                {section.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-cyan-400 transition-colors duration-150 inline-block py-0.5 break-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </footer>
  );
}