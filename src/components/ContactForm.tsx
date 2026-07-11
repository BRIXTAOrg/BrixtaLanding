// src/app/components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { Forminit } from 'forminit';

const forminit = new Forminit({ proxyUrl: '/api/forminit' });

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const { error: submitError } = await forminit.submit('fdjnmmi470r', formData);

    if (submitError) {
      setStatus('error');
      setError(submitError.message || 'Submission failed. Please try again.');
      return;
    }

    setStatus('success');
    form.reset();
  }

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center space-y-4 font-sans">
      {status !== 'success' ? (
        <div className="w-full flex flex-col items-center space-y-3">

          {/* Heading */}
          <h3 className="text-white text-xl font-bold tracking-tight text-center">
            Reserve Your Spot
          </h3>

          {/* Description */}
          <p className="max-w-md text-center text-sm leading-relaxed text-slate-400">
            Join the private launch list and we'll notify you the moment Brixta
            Embeddings goes live. Just one launch notification.
          </p>

          {/* Pill-shaped unified email entry field */}
          <form
            onSubmit={handleSubmit}
            className="relative w-full flex items-center bg-slate-950/80 backdrop-blur-md rounded-full border border-slate-800 focus-within:border-cyan-500/80 shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all p-1.5"
          >
            <input
              type="email"
              name="fi-sender-email"
              placeholder="Enter your professional email address"
              required
              disabled={status === 'loading'}
              className="w-full bg-transparent text-white text-sm pl-4 pr-32 py-2.5 focus:outline-hidden disabled:opacity-50 tracking-wide placeholder:text-slate-600"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="absolute right-2 px-6 py-2.5 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-slate-800 disabled:to-slate-900 text-white text-xs font-bold rounded-full transition shadow-[0_0_15px_rgba(6,182,212,0.3)] disabled:shadow-none cursor-pointer tracking-wider uppercase whitespace-nowrap"
            >
              {status === 'loading' ? 'Sending...' : 'Notify Me'}
            </button>
          </form>
        </div>
      ) : (
        /* Inline Minimal Success Alert Frame matching the pill design */
        <div className="w-full px-6 py-3.5 rounded-full border border-emerald-950 bg-emerald-950/20 text-center text-xs font-mono text-emerald-400 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Added to private preview cluster successfully!</span>
        </div>
      )}

      {/* Dynamic Error Alert Component */}
      {status === 'error' && (
        <p className="text-[11px] font-mono text-red-400 bg-red-950/20 border border-red-900/30 px-4 py-2 rounded-full tracking-wide">
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}