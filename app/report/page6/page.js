"use client";

import React from 'react';

const ReportConfirmation = () => {
  const referenceNumber = "#REF-12345";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referenceNumber);
    alert("Reference number copied!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-100">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21h18M3 10h18M5 10V7a7 7 0 1114 0v3M7 21v-11M12 21v-11M17 21v-11" />
          </svg>
          <span className="font-semibold text-lg tracking-tight">Ministry of Women Affairs</span>
        </div>
        <button className="flex items-center gap-2 bg-[#00aeef] hover:bg-[#0096ce] text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Quick Exit (Esc)
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        {/* Success Icon */}
        <div className="mb-8 flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full">
          <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-6 tracking-tight">Your report has been received safely.</h1>
        
        <p className="max-w-md text-slate-600 mb-10 leading-relaxed">
          Thank you for reaching out. Your submission has been securely encrypted and stored.
        </p>

        {/* Reference Card */}
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 mb-8 shadow-sm">
          <p className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">Reference Number</p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl font-bold tracking-tight">{referenceNumber}</span>
            <button 
              onClick={copyToClipboard}
              className="text-[#00aeef] hover:opacity-70 transition-opacity"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-500 leading-snug px-4">
            Please save this number if you wish to follow up on this report anonymously.
          </p>
        </div>

        <p className="text-slate-600 mb-8">
          You may close this tab or return to the main page.
        </p>

        <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors">
          Return to Home
        </button>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-slate-100 bg-white">
        <div className="flex items-center justify-center gap-2 text-slate-600 mb-2">
          <span>Need immediate help?</span>
          <a href="tel:08001234567" className="flex items-center gap-1 text-[#00aeef] font-bold hover:underline">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.58a1 1 0 01-.27 1.11z" />
            </svg>
            Call toll-free: 0800-123-4567
          </a>
        </div>
        <p className="text-xs text-slate-400">
          This site does not store your browsing history on this device after you close the tab.
        </p>
      </footer>
    </div>
  );
};

export default ReportConfirmation;