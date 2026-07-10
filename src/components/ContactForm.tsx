// src/app/components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { Forminit } from 'forminit';

const forminit = new Forminit({ proxyUrl: '/api/forminit' });

export default function ContactForm() {
  const [isExpanded, setIsExpanded] = useState(false);
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
    <div className="w-full max-w-md mx-auto min-h-24 flex flex-col justify-center items-center py-4 transition-all duration-300">
      {!isExpanded ? (
        /* Initial Action View Trigger */
        <div className="text-center space-y-3 animate-fade-in">
          <p className="text-slate-300 text-base sm:text-lg font-medium tracking-tight">
            Interested to be the first one to try?
          </p>
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="text-cyan-400 font-bold text-sm tracking-wide uppercase hover:text-cyan-300 transition-colors flex items-center gap-1.5 mx-auto group cursor-pointer"
          >
            Click Here
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      ) : (
        /* Expanded Single Input Field Stream Capture */
        <div className="w-full space-y-3 animate-fade-in">
          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="relative w-full flex items-center">
              <input
                type="email"
                name="fi-sender-email"
                placeholder="Enter your professional email"
                required
                disabled={status === 'loading'}
                className="w-full bg-slate-950 text-white font-sans text-sm border border-slate-800 rounded-xl pl-4 pr-32 py-3.5 focus:border-cyan-500 focus:outline-hidden disabled:opacity-50 transition-colors shadow-inner"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-2 px-4 py-2 bg-white text-slate-950 text-xs font-bold rounded-lg hover:bg-slate-100 disabled:opacity-50 transition font-sans cursor-pointer shadow-md"
              >
                {status === 'loading' ? 'Joining...' : 'Get Access'}
              </button>
            </form>
          ) : (
            /* Inline Success Alert Frame */
            <div className="p-3 rounded-xl border border-emerald-900/60 bg-emerald-950/20 text-center text-xs font-mono text-emerald-400 flex items-center justify-center gap-2 animate-pulse">
              <span>✓ Added to private preview cluster successfully!</span>
            </div>
          )}

          {/* Inline Error Alert Box */}
          {status === 'error' && (
            <p className="text-[11px] font-mono text-red-400 text-center bg-red-950/30 border border-red-900/40 p-2 rounded-lg">
              ❌ {error}
            </p>
          )}
        </div>
      )}
    </div>
  );
}