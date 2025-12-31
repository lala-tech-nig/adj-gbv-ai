"use client";

import React from 'react';
import MainLayout from '@/app/components/MainLayout';
import FileUpload from '@/app/components/FileUpload'
import InfoCard from '@/app/components/InfoCard';
import { ShieldCheck, Clock, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { id: 1, name: 'Personal Info' },
  { id: 2, name: 'Incident Details' },
  { id: 3, name: 'Evidence' },
  { id: 4, name: 'Review' }
];

export default function ReportStart() {
  return (
    <MainLayout steps={steps} currentStep={1} title="Personal Information">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-2">Your Details</h3>
            <p className="text-sm text-gray-500 mb-4">Provide contact info if you want follow-up. You can skip if you prefer anonymity.</p>
            {/* simplified form placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="p-3 rounded border" placeholder="First name (optional)" />
              <input className="p-3 rounded border" placeholder="Last name (optional)" />
              <input className="p-3 rounded border" placeholder="Phone (optional)" />
              <input className="p-3 rounded border" placeholder="Email (optional)" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Attach Evidence</h3>
            <FileUpload initialFiles={[]} />
          </div>

          <div className="flex justify-between items-center pt-6 border-t">
            <Link href="/">
              <button className="px-6 py-3 rounded-xl border border-gray-300 font-semibold text-gray-600">Back</button>
            </Link>
            <Link href="/report/page2">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">Continue</button>
            </Link>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="font-bold mb-4">Why upload evidence?</h4>
            <InfoCard icon={ShieldCheck} color="text-green-600" title="Legal Support" description="Digital evidence can be crucial for legal proceedings or obtaining protection orders." />
            <InfoCard icon={Clock} color="text-blue-600" title="Timeline Verification" description="Uploading now preserves timestamps and metadata that verify when incidents occurred." />
            <InfoCard icon={ShieldAlert} color="text-orange-500" title="Safety First" description="If storing files on your phone is dangerous, uploading here allows safe deletion from your device." />
          </div>
        </aside>
      </div>
    </MainLayout>
  );
}