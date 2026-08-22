// src/components/home/FieldForceDemo.tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import {
  Type,
  Hash,
  Calendar,
  Clock,
  Braces,
  Plus,
  GripVertical,
} from "lucide-react";

type FieldType = "string" | "number" | "date" | "timestamp" | "jsonb";

interface DemoField {
  name: string;
  type: FieldType;
  phoneValue: string;
}

const fieldTypeMeta: Record<
  FieldType,
  { label: string; icon: React.ElementType; badge: string }
> = {
  string: {
    label: "Text",
    icon: Type,
    badge: "bg-slate-800 text-slate-300 border-slate-700",
  },
  number: {
    label: "Number",
    icon: Hash,
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  date: {
    label: "Date",
    icon: Calendar,
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  timestamp: {
    label: "Timestamp",
    icon: Clock,
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  jsonb: {
    label: "JSONB",
    icon: Braces,
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
};

const fields: DemoField[] = [
  { name: "Site Name", type: "string", phoneValue: "Northgate Warehouse" },
  { name: "Visit Date", type: "date", phoneValue: "22 Aug 2026" },
  { name: "Team Size", type: "number", phoneValue: "6" },
  { name: "Last Synced", type: "timestamp", phoneValue: "2 min ago" },
  { name: "Site Notes", type: "jsonb", phoneValue: '{ zone: "B", risk: "low" }' },
];

export default function FieldForceDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fieldRowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const phoneFieldRefs = useRef<(HTMLDivElement | null)[]>([]);
  const addBtnRef = useRef<HTMLButtonElement>(null);
  const liveDotRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = fieldRowRefs.current;
      const phoneRows = phoneFieldRefs.current;

      // Start hidden (JS-only state — SSR/no-JS fallback shows everything).
      gsap.set(rows, { opacity: 0, y: 14 });
      gsap.set(phoneRows, { opacity: 0, y: 10, scale: 0.96 });

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });

      fields.forEach((_, i) => {
        tl.to(
          rows[i],
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
          i === 0 ? 0 : "+=0.7"
        ).to(
          phoneRows[i],
          { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
          "<0.12"
        );
      });

      // Hold the fully-built state so it's readable.
      tl.to({}, { duration: 1.8 });

      // Clear everything and loop.
      tl.to(
        [...rows, ...phoneRows],
        { opacity: 0, y: -10, duration: 0.35, stagger: 0.04, ease: "power1.in" },
        "+=0"
      );

      // Ambient "live" pulse on the sync indicator — runs independently, forever.
      gsap.to(liveDotRef.current, {
        opacity: 0.25,
        duration: 0.9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Subtle breathing on the Add Field button to draw the eye.
      gsap.to(addBtnRef.current, {
        scale: 1.05,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto lg:mx-0">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-2xl shadow-black/40">
        {/* Window titlebar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="ml-3 text-xs font-medium text-slate-400">
              Field Force &mdash; Config Builder
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
            <span ref={liveDotRef} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Live sync
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5">
          {/* Config panel */}
          <div className="sm:col-span-3 p-5 border-b sm:border-b-0 sm:border-r border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm font-semibold text-white">Site Visit Form</div>
                <div className="text-[11px] text-slate-500">{fields.length} fields configured</div>
              </div>
              <button
                ref={addBtnRef}
                type="button"
                tabIndex={-1}
                className="flex items-center gap-1 text-[11px] font-medium text-white bg-blue-600 px-2.5 py-1.5 rounded-lg"
              >
                <Plus className="w-3 h-3" />
                Add field
              </button>
            </div>

            <div className="space-y-2">
              {fields.map((field, i) => {
                const meta = fieldTypeMeta[field.type];
                return (
                  <div
                    key={field.name}
                    ref={(el) => {
                      fieldRowRefs.current[i] = el;
                    }}
                    className="flex items-center justify-between gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <GripVertical className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span className="text-sm text-slate-200 truncate">{field.name}</span>
                    </div>
                    <span
                      className={`flex items-center gap-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border shrink-0 ${meta.badge}`}
                    >
                      <meta.icon className="w-3 h-3" />
                      {meta.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phone preview */}
          <div className="sm:col-span-2 p-5 flex items-center justify-center bg-slate-950/40">
            <div className="relative w-full max-w-[220px] rounded-[1.75rem] border-4 border-slate-800 bg-slate-950 p-3">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-[9px] text-slate-500 font-mono">9:41</span>
                <div className="w-10 h-2.5 rounded-full bg-slate-800" />
              </div>
              <div className="text-[11px] font-semibold text-white mb-3 px-1">Site Visit</div>
              <div className="space-y-2">
                {fields.map((field, i) => {
                  const meta = fieldTypeMeta[field.type];
                  return (
                    <div
                      key={field.name}
                      ref={(el) => {
                        phoneFieldRefs.current[i] = el;
                      }}
                      className="rounded-md border border-slate-800 bg-slate-900/80 px-2 py-1.5"
                    >
                      <div className="flex items-center gap-1 text-[8px] text-slate-500 uppercase tracking-wide mb-0.5">
                        <meta.icon className="w-2.5 h-2.5" />
                        {field.name}
                      </div>
                      <div className="text-[10px] text-slate-200 truncate">{field.phoneValue}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
