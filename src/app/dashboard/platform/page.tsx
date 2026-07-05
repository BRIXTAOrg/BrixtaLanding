// src/app/dashboard/platform/page.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function PlatformMetricsPage() {
  // Mock administrative telemetry indicators
  const statsSummary = [
    { label: "Total Vectors Stored", value: "1,248,912", change: "+14.2% this week" },
    { label: "Active Inference Pipelines", value: "4", change: "Healthy status" },
    { label: "API Token Request Count", value: "348.2K", change: "99.99% successful responses" },
    { label: "Avg Compute Processing Time", value: "11.4 ms", change: "Optimized mesh cache layer" },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-950 p-6 sm:p-8 lg:p-12 space-y-10">
      
      {/* Workspace Metric Title Frame */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-900 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Workspace Dashboard</h1>
          <p className="text-xs text-slate-500 mt-1 font-mono">Tenant Cluster Context: tx_boundary_cluster_01</p>
        </div>
        <Link 
          href="/dashboard/platform/embed" 
          className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition"
        >
          ⚡ New Embedding Pipeline
        </Link>
      </div>

      {/* Grid Summary Analytics Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsSummary.map((stat, idx) => (
          <div key={idx} className="border border-slate-900 bg-slate-900/20 backdrop-blur-md rounded-xl p-5 space-y-2">
            <div className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">{stat.label}</div>
            <div className="text-2xl font-bold font-mono text-white tracking-tight">{stat.value}</div>
            <div className="text-xs text-cyan-400/80 font-medium">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Primary Infrastructure Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Quick API Access Snippet Token */}
        <div className="lg:col-span-2 border border-slate-900 bg-slate-900/30 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-200">Active Live Token Gateway</h3>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900 px-2 py-0.5 rounded">
              Active Session
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Use your localized enterprise endpoint key to pipe embedding arrays straight from multi-stage processing servers or automated cloud sync buffers.
          </p>
          <div className="rounded-lg bg-slate-950 border border-slate-900 p-4 font-mono text-xs text-cyan-400/90 select-all overflow-x-auto">
            bx_live_boundary_7a18fbc923d85ee190bc
          </div>
        </div>

        {/* Minimal Storage Purge Protocol Alert */}
        <div className="border border-slate-900 bg-slate-900/10 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-200">Retention Engine Rules</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Brixta Systems enforces strict zero-retention parameters. Embedding models downloaded via platform interfaces trigger immediate cluster dataset deletion logs.
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}