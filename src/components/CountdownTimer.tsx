// src/components/CountdownTimer.tsx
"use client";

import React, { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 9,
    hours: 23,
    minutes: 58,
    seconds: 8,
  });

  useEffect(() => {
    // Target timestamp: 10 days out from mount to keep the countdown persistent
    const targetTime = Date.now() + 10 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="w-full max-w-xl grid grid-cols-4 gap-2 px-8 py-4 rounded-2xl border border-blue-500/40 bg-slate-950/80 backdrop-blur-xl my-10 shadow-[0_0_30px_rgba(37,99,235,0.25)] relative group overflow-hidden">
      
      {/* Absolute Ambient Background Border Edge Glow */}
      <div className="absolute inset-0 border border-cyan-400/30 rounded-2xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_12px_rgba(34,211,238,0.1)]" />

      {/* Days Segment */}
      <div className="text-center relative">
        <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-medium mt-1">Days</div>
      </div>
      
      {/* Hours Segment */}
      <div className="text-center relative border-l border-slate-900">
        <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-medium mt-1">Hours</div>
      </div>

      {/* Minutes Segment */}
      <div className="text-center relative border-l border-slate-900">
        <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-medium mt-1">Minutes</div>
      </div>

      {/* Seconds Segment */}
      <div className="text-center relative border-l border-slate-900">
        <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] animate-pulse duration-1000">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-500/70 font-medium mt-1">Seconds</div>
      </div>
    </div>
  );
}