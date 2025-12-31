"use client";

import React from 'react';
import MainLayout from '@/app/components/MainLayout';
import Link from 'next/link';

export default function ReportConfirmation() {
  const referenceNumber = '#REF-12345';

  const copyToClipboard = () => {
    if (navigator?.clipboard) navigator.clipboard.writeText(referenceNumber);
    alert('Reference number copied!');
  };

  return (
    <MainLayout title="Report Submitted">
      <div className="flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">Your report has been received safely.</h1>
        <p className="text-center text-gray-600 max-w-md">Thank you. Your submission has been securely encrypted and stored.</p>

        <div className="w-full max-w-md bg-white border p-6 rounded-xl">
          <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">Reference Number</div>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">{referenceNumber}</div>
            <button onClick={copyToClipboard} className="text-blue-600">Copy</button>
          </div>
          <p className="text-sm text-gray-500 mt-3">Save this number to follow up on your report anonymously.</p>
        </div>

        <div className="flex gap-4">
          <Link href="/"><button className="px-6 py-3 rounded border">Return Home</button></Link>
        </div>
      </div>
    </MainLayout>
  );
}