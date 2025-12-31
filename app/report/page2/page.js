"use client";

import React, { useState } from 'react';
import MainLayout from '@/app/components/MainLayout';
import FileUpload from '@/app/components/FileUpload'
import InfoCard from '@/app/components/InfoCard';
import { Lock, EyeOff, Heart, Info } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { id: 1, name: 'Personal Info' },
  { id: 2, name: 'Incident Details' },
  { id: 3, name: 'Evidence' },
  { id: 4, name: 'Review' }
];

export default function IncidentReport() {
  const [narrative, setNarrative] = useState('');

  return (
    <MainLayout steps={steps} currentStep={2} title="Incident Details">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <label className="font-bold text-gray-800">Incident Narrative</label>
            </div>
            <textarea
              className="w-full min-h-[300px] p-4 bg-blue-50/30 border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all text-gray-700 placeholder-blue-400/70"
              placeholder="Describe what happened, where, and who was involved."
              value={narrative}
              onChange={(e) => setNarrative(e.target.value)}
            />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="font-bold mb-3">Attach More Evidence</h4>
            <FileUpload initialFiles={[]} />
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-100">
            <Link href="/report">
              <button className="px-6 py-3 rounded-xl border border-gray-300 font-semibold text-gray-600">Back</button>
            </Link>
            <Link href="/report/page3">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">Next</button>
            </Link>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold mb-4">What to include</h3>
            <p className="text-sm text-gray-500 mb-4">If unsure, include time, location, and persons involved. Your safety is priority.</p>
            <InfoCard icon={Lock} title="Encrypted" description="Your data is securely encrypted end-to-end." />
            <InfoCard icon={EyeOff} title="Confidential" description="Only authorized case workers will see this." />
            <InfoCard icon={Heart} title="Trauma-Informed" description="Take your time. You can save and return later." />
          </div>
        </aside>
      </div>
    </MainLayout>
  );
}