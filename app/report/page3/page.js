"use client";


import React, { useState } from 'react';
import { 
  Camera, Video, Mic, FileText, Trash2, 
  X, ShieldCheck, Clock, ShieldAlert, 
  ChevronRight, ArrowLeft, UploadCloud
} from 'lucide-react';

import Link from 'next/link';

// --- Sub-components ---

const StepIndicator = ({ steps, currentStep }) => (
  <div className="flex items-center justify-between w-full max-w-2xl mx-auto mb-10">
    {steps.map((step, index) => (
      <React.Fragment key={step.id}>
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            index + 1 < currentStep ? 'bg-blue-600 text-white' : 
            index + 1 === currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            {index + 1 < currentStep ? '✓' : index + 1}
          </div>
          <span className={`text-sm font-medium ${index + 1 === currentStep ? 'text-gray-900' : 'text-gray-400'}`}>
            {step.name}
          </span>
        </div>
        {index < steps.length - 1 && (
          <div className="flex-1 h-px bg-gray-200 mx-4" />
        )}
      </React.Fragment>
    ))}
  </div>
);

const InfoCard = ({ icon: Icon, color, title, description }) => (
  <div className="flex gap-4 mb-6">
    <div className={`mt-1 ${color}`}>
      <Icon size={20} />
    </div>
    <div>
      <h4 className="text-sm font-bold text-gray-800 mb-1">{title}</h4>
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

// --- Main Page Component ---

export default function EvidenceUpload() {
  const [files, setFiles] = useState([
    { id: 1, name: 'evidence_photo_01.jpg', size: '2.4 MB', type: 'Image File', status: 'Uploaded' },
    { id: 2, name: 'police_report_scan.pdf', size: '4.5 MB', type: 'Uploading...', progress: 45 }
  ]);

  const steps = [
    { id: 1, name: 'Personal Info' },
    { id: 2, name: 'Incident Details' },
    { id: 3, name: 'Evidence' },
    { id: 4, name: 'Review' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-blue-500 rounded-full" />
          </div>
          <div>
            <h1 className="text-sm font-bold">Ogun State Ministry of Women Affairs</h1>
            <p className="text-[10px] text-gray-500">GBV Reporting Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <nav className="flex gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">Resources</a>
            <a href="#" className="hover:text-blue-600">Help Center</a>
          </nav>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <X size={16} /> Safety Exit
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-6">
        <StepIndicator steps={steps} currentStep={3} />

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Evidence Upload</h2>
          <p className="text-gray-500">
            Please share any files that might support your report. This is optional. Only share what you are comfortable with.
          </p>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-lg px-4 py-3 flex items-center gap-3 mb-8 w-fit">
          <ShieldCheck className="text-green-600" size={18} />
          <p className="text-green-800 text-sm">
            <span className="font-semibold">End-to-end Encrypted Uploads.</span> No one can see these files without authorized access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Upload Area */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Main Dropzone */}
            <div className="border-2 border-dashed border-blue-200 rounded-2xl bg-blue-50/30 p-12 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mb-4">
                  <UploadCloud size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Drag & drop files here</h3>
                <p className="text-gray-500 mb-6 text-sm">or choose files from your device to securely attach them to this report.</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                  Select Files
                </button>
                
                <div className="flex gap-8 mt-10">
                  <div className="flex flex-col items-center gap-2 opacity-40">
                    <Camera size={20} /><span className="text-[10px] font-bold uppercase tracking-widest">Images</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 opacity-40">
                    <Video size={20} /><span className="text-[10px] font-bold uppercase tracking-widest">Video</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 opacity-40">
                    <Mic size={20} /><span className="text-[10px] font-bold uppercase tracking-widest">Audio</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 opacity-40">
                    <FileText size={20} /><span className="text-[10px] font-bold uppercase tracking-widest">Docs</span>
                  </div>
                </div>
                <p className="mt-6 text-[11px] text-gray-400 uppercase">Max file size: 25MB per file</p>
              </div>
            </div>

            {/* Voice Note Section */}
            <div className="border border-gray-200 rounded-xl p-6 flex items-center justify-between bg-white">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <Mic size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Record Voice Note</h4>
                  <p className="text-xs text-gray-500">If typing is difficult, you can speak your story directly.</p>
                </div>
              </div>
              <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-gray-50">
                <div className="w-2 h-2 bg-red-500 rounded-full" /> Start Recording
              </button>
            </div>

            {/* File List */}
            <div className="space-y-3">
              <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Attached Files <span className="ml-1 bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">2</span></h5>
              
              {/* File Item 1 */}
              <div className="border border-gray-200 rounded-xl p-4 flex items-center bg-white">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 mr-4">
                  <Camera size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold">evidence_photo_01.jpg</h4>
                  <p className="text-xs text-gray-500">2.4 MB • Image File</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                    <span className="w-1 h-1 bg-green-700 rounded-full" /> Uploaded
                  </span>
                  <button className="text-gray-400 hover:text-red-500"><Trash2 size={18} /></button>
                </div>
              </div>

              {/* File Item 2 (Progress) */}
              <div className="border border-gray-200 rounded-xl p-4 flex items-center bg-white">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-500 mr-4">
                  <FileText size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <h4 className="text-sm font-bold">police_report_scan.pdf</h4>
                      <p className="text-[10px] text-gray-400 italic">Uploading...</p>
                    </div>
                    <span className="text-xs font-bold text-blue-600">45%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-[45%]" />
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1 text-right">1.2 MB / 4.5 MB</p>
                </div>
                <button className="ml-6 text-gray-400 hover:text-gray-600"><X size={18} /></button>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6">
            <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <span className="font-bold text-sm">i</span>
              </div>
              <h3 className="font-bold text-lg mb-6">Why upload evidence?</h3>
              
              <InfoCard 
                icon={ShieldCheck} color="text-green-600"
                title="Legal Support"
                description="Digital evidence can be crucial for legal proceedings or obtaining protection orders."
              />
              <InfoCard 
                icon={Clock} color="text-blue-600"
                title="Timeline Verification"
                description="Uploading now preserves timestamps and metadata that verify when incidents occurred."
              />
              <InfoCard 
                icon={ShieldAlert} color="text-orange-500"
                title="Safety First"
                description="If storing files on your phone is dangerous, uploading them here allows you to safely delete them from your device."
              />

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
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-200">
          <Link href="/report/page2" className="inline-block">
          <button className="px-6 py-3 rounded-xl border border-gray-300 font-semibold text-gray-600 flex items-center gap-2 hover:bg-gray-50">
             Back
          </button>
          </Link>
          <div className="flex items-center gap-8">
            <button className="text-sm font-semibold text-gray-500 hover:text-gray-800">Skip for now</button>
            <Link href="/report/page2" className="inline-block">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-100">
              Continue to Review <ChevronRight size={20} />
            </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Page Footer */}
      <footer className="text-center py-10 text-[11px] text-gray-400">
        <p>© 2024 Ogun State Ministry of Women Affairs. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Accessibility</a>
        </div>
      </footer>
    </div>
  );
}