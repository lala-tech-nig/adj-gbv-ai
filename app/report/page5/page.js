"use client";

import React from 'react';
import MainLayout from '@/app/components/MainLayout';
import Link from 'next/link';
import { Shield } from 'lucide-react';

const steps = [
  { id: 1, name: 'Personal Info' },
  { id: 2, name: 'Incident Details' },
  { id: 3, name: 'Evidence' },
  { id: 4, name: 'Review' }
];

export default function ReportReviewPage() {
  return (
    <MainLayout steps={steps} currentStep={4} title="Review & Submit">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-xl border"> 
          <h3 className="text-lg font-bold mb-2">Review your report</h3>
          <p className="text-sm text-gray-500">Please confirm details before final submission. Edit any section you wish to change.</p>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h4 className="font-bold mb-2">Incident Overview</h4>
          <p className="text-sm text-gray-700">Oct 24, 2023 • Residential Area, Abeokuta</p>
        </div>

        <div className="flex justify-between items-center">
          <Link href="/report/page4"><button className="px-6 py-3 rounded border">Back</button></Link>
          <Link href="/report/page6"><button className="px-6 py-3 rounded bg-blue-600 text-white">Submit Report</button></Link>
        </div>
      </div>
    </MainLayout>
  );
}