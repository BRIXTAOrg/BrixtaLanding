// src/app/dashboard/layout.tsx
"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Real-world state mapping simulator (replace with your actual Auth hook/context provider later)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Simulate reading active session tokens
    const fakeAuthCheck = () => {
      const userToken = localStorage.getItem("brixta_auth_token");
      const loggedIn = !!userToken;
      setIsAuthenticated(loggedIn);

      // Route Guard Logic: If hitting platform without a session frame, isolate them
      if (pathname.startsWith("/dashboard/platform") && !loggedIn) {
        router.push("/dashboard/quickEmbed");
      }
    };
    
    fakeAuthCheck();
  }, [pathname, router]);

  // Prevent flash frames during initial hydration
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center font-mono text-xs text-slate-500">
        Authenticating Secure Channel Matrix...
      </div>
    );
  }

  const isPlatformView = pathname.startsWith("/dashboard/platform");

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white flex">
      
      {/* Dynamic Left Nav Sidebar: Show full workspace options only if inside /platform */}
      <aside className="w-64 border-r border-slate-900 bg-slate-950 p-6 hidden md:flex flex-col justify-between select-none">
        <div className="space-y-8">
          {/* Main Core Brand Frame */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-extrabold text-sm text-white">
              B
            </div>
            <span className="font-bold tracking-tight text-slate-200 group-hover:text-white transition-colors">Brixta Panel</span>
          </Link>

          {/* Navigation Items Matrix */}
          <nav className="space-y-1.5">
            {isPlatformView ? (
              <>
                <div className="text-[10px] font-mono uppercase text-slate-600 tracking-wider px-3 mb-2">Workspace</div>
                <Link href="/dashboard/platform" className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg font-medium transition ${pathname === "/dashboard/platform" ? "bg-slate-900 text-cyan-400 font-semibold" : "text-slate-400 hover:text-white hover:bg-slate-900/40"}`}>
                  📊 Core Metrics
                </Link>
                <Link href="/dashboard/platform/embed" className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg font-medium transition ${pathname === "/dashboard/platform/embed" ? "bg-slate-900 text-cyan-400 font-semibold" : "text-slate-400 hover:text-white hover:bg-slate-900/40"}`}>
                  ⚡ Scale Embed Wizard
                </Link>
                <Link href="/dashboard/platform/datasets" className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg font-medium transition ${pathname === "/dashboard/platform/datasets" ? "bg-slate-900 text-cyan-400 font-semibold" : "text-slate-400 hover:text-white hover:bg-slate-900/40"}`}>
                  🗄️ Managed Vectors
                </Link>
                <Link href="/dashboard/platform/history" className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg font-medium transition ${pathname === "/dashboard/platform/history" ? "bg-slate-900 text-cyan-400 font-semibold" : "text-slate-400 hover:text-white hover:bg-slate-900/40"}`}>
                  ⏳ Job Audit History
                </Link>
                <Link href="/dashboard/platform/settings" className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg font-medium transition ${pathname === "/dashboard/platform/settings" ? "bg-slate-900 text-cyan-400 font-semibold" : "text-slate-400 hover:text-white hover:bg-slate-900/40"}`}>
                  🛠️ Engine Settings
                </Link>
              </>
            ) : (
              <>
                <div className="text-[10px] font-mono uppercase text-slate-600 tracking-wider px-3 mb-2">Isolated Playground</div>
                <Link href="/dashboard/quickEmbed" className="flex items-center gap-3 px-3 py-2 text-sm bg-slate-900 text-cyan-400 font-semibold rounded-lg">
                  ⚡ Quick Embed (Guest)
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* User Session Footprint Panel */}
        <div className="pt-4 border-t border-slate-900">
          {isAuthenticated ? (
            <button 
              onClick={() => { localStorage.removeItem("brixta_auth_token"); window.location.reload(); }}
              className="w-full px-3 py-2 rounded-lg text-left text-xs font-mono text-slate-500 hover:text-red-400 transition cursor-pointer"
            >
              → Terminate Session
            </button>
          ) : (
            <button 
              onClick={() => { localStorage.setItem("brixta_auth_token", "bx_session_xxx"); window.location.reload(); }}
              className="w-full px-3 py-2 rounded-lg text-left text-xs font-mono text-cyan-400 hover:text-cyan-300 transition font-bold cursor-pointer"
            >
              🔒 Enterprise Login
            </button>
          )}
        </div>
      </aside>

      {/* Main Active Page Viewport Section */}
      <main className="flex-1 min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}