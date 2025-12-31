"use client";

import React from 'react';
import MainLayout from '@/app/components/MainLayout';
import FileUpload from '@/app/components/FileUpload'
import InfoCard from '@/app/components/InfoCard';
import { ShieldCheck, Clock, ShieldAlert, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { id: 1, name: 'Personal Info' },
  { id: 2, name: 'Incident Details' },
  { id: 3, name: 'Evidence' },
  { id: 4, name: 'Review' }
];

export default function EvidenceUpload() {
  return (
    <MainLayout steps={steps} currentStep={3} title="Evidence Upload">
      <div className="mb-4">
        <p className="text-gray-500">Please share any files that might support your report. This is optional. Only share what you are comfortable with.</p>
      </div>

      <div className="bg-green-50 border border-green-100 rounded-lg px-4 py-3 flex items-center gap-3 mb-8 w-fit">
        <ShieldCheck className="text-green-600" size={18} />
        <p className="text-green-800 text-sm"><span className="font-semibold">End-to-end Encrypted Uploads.</span> No one can see these files without authorized access.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Attach Evidence</h3>
            <FileUpload initialFiles={[]} />
          </div>

          <div className="border border-gray-200 rounded-xl p-6 bg-white">
            <h4 className="font-bold mb-2">Record Voice Note</h4>
            <p className="text-sm text-gray-500 mb-4">If typing is difficult, you can speak your story directly. Use the recorder above to attach a voice note.</p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-bold text-lg mb-6">Why upload evidence?</h3>
            <InfoCard icon={ShieldCheck} color="text-green-600" title="Legal Support" description="Digital evidence can be crucial for legal proceedings or obtaining protection orders." />
            <InfoCard icon={Clock} color="text-blue-600" title="Timeline Verification" description="Uploading now preserves timestamps and metadata that verify when incidents occurred." />
            <InfoCard icon={ShieldAlert} color="text-orange-500" title="Safety First" description="If storing files on your phone is dangerous, uploading here allows you to safely delete them from your device." />

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Support" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Need Assistance?</p>
                    <p className="text-xs font-bold text-blue-800">Chat with Support</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-blue-800" />
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-200">
        <Link href="/report/page2"><button className="px-6 py-3 rounded-xl border border-gray-300 font-semibold text-gray-600">Back</button></Link>
        <div className="flex items-center gap-8">
          <button className="text-sm font-semibold text-gray-500 hover:text-gray-800">Skip for now</button>
          <Link href="/report/page4"><button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700">Continue to Review <ChevronRight size={20} /></button></Link>
        </div>
      </div>
    </MainLayout>
  );
}