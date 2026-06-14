import React from 'react';

export const metadata = {
  title: 'Webmail Gateway | Nexora Tech',
  description: 'Authorized workspace access for info@sangamkunwar.com.np',
};

export default function WebmailPortal() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 antialiased">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md transition-all hover:shadow-lg">
        
        {/* Decorative Top Accent Line */}
        <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto -mt-8 mb-6"></div>

        {/* Branding Logo & Header */}
        <div className="mb-6">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white font-extrabold text-2xl shadow-md shadow-blue-200">
            N
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nexora Tech Workspace</h2>
          <p className="mt-1.5 text-sm font-medium text-gray-500">
            Secure Webmail Access Portal
          </p>
        </div>

        {/* Informational Status Card */}
        <div className="mb-8 rounded-xl bg-slate-50 p-5 text-left border border-slate-100 relative overflow-hidden">
          <div className="absolute right-3 top-3 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Routing Identity</p>
          <p className="text-base font-semibold text-slate-800 mt-1 select-all">info@sangamkunwar.com.np</p>
          
          <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500">
            <svg className="h-4 w-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Verified Cloudflare Security & Encryption</span>
          </div>
        </div>

        {/* Portal CTA Action Button */}
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-700 hover:to-indigo-700 hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span>Launch Webmail Client</span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Technical Footer Details */}
        <p className="mt-8 text-xs tracking-wide text-slate-400 font-medium">
          Authorized Admin Personnel Only • Powered by Gmail Core
        </p>
      </div>
    </div>
  );
} 
