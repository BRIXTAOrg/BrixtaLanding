// src/components/CountdownTimer.tsx
"use client";

import { useEffect, useState } from "react";

// Absolute timeline targeting your production drop matrix
export const LAUNCH_DATE = "2026-07-20T06:30:00Z";
//export const LAUNCH_DATE = "2026-07-10T17:00:00Z";

interface CountdownTimerProps {
  onComplete?: () => void;
}

export default function CountdownTimer({ onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const targetTime = new Date(LAUNCH_DATE).getTime();

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (onComplete) onComplete();
        return false;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      return true;
    };

    const shouldContinue = calculateTimeLeft();
    if (!shouldContinue) return;

    const interval = setInterval(() => {
      const active = calculateTimeLeft();
      if (!active) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  if (!isMounted) {
    return (
      <div className="w-full max-w-5xl h-24 sm:h-32 rounded-2xl border border-blue-500/20 bg-slate-950/80 my-8 animate-pulse" />
    );
  }

  return (
    /* Full screen metric container width mapping perfectly to your aesthetic design */
    <div className="w-full max-w-5xl grid grid-cols-4 gap-4 px-6 sm:px-12 py-6 sm:py-10 rounded-2xl border border-blue-500/30 bg-slate-950/90 backdrop-blur-2xl my-8 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative group overflow-hidden">
      
      {/* High Intensity Blue Peripheral Border Glow */}
      <div className="absolute inset-0 border-2 border-cyan-400/40 rounded-2xl pointer-events-none shadow-[inset_0_0_24px_rgba(34,211,238,0.15)] drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]" />

      {/* Days Card */}
      <div className="text-center relative py-2">
        <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold mt-2">Days</div>
      </div>
      
      {/* Hours Card */}
      <div className="text-center relative py-2 border-l border-slate-900/80">
        <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold mt-2">Hours</div>
      </div>

      {/* Minutes Card */}
      <div className="text-center relative py-2 border-l border-slate-900/80">
        <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold mt-2">Minutes</div>
      </div>

      {/* Seconds Card */}
      <div className="text-center relative py-2 border-l border-slate-900/80">
        <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-cyan-400 tracking-tight drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] animate-pulse">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-cyan-500 font-bold mt-2">Seconds</div>
      </div>
    </div>
  );
}