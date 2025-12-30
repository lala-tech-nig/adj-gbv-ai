"use client";


import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Mic, 
  Lock, 
  EyeOff, 
  Heart, 
  Info, 
  ChevronLeft, 
  ArrowRight,
  LogOut
} from 'lucide-react';

import Link from 'next/link';

// Sub-component for the Sidebar Info Cards
const InfoCard = ({ icon: Icon, title, description }) => (
  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
    <div className="flex-shrink-0">
      <div className="p-2 bg-white rounded-md shadow-sm">
        <Icon size={20} className="text-gray-700" />
      </div>
    </div>
    <div>
      <h4 className="font-bold text-sm text-gray-900">{title}</h4>
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);



export default function IncidentReport() {
  const [narrative, setNarrative] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <ShieldCheck className="text-blue-500" size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Ogun State Ministry</h1>
            <p className="text-xs text-blue-500 font-medium">Women Affairs & Social Development</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md border border-gray-200">
            Save & Exit Securely
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
            <LogOut size={18} />
            Quick Exit
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Progress Bar Area */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Step 2 of 4</span>
            <span className="text-xs font-medium text-blue-600">Incident Description</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="bg-cyan-400 h-full w-1/2 rounded-full"></div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-cyan-600 font-medium">
            <div className="bg-cyan-500 rounded-full p-0.5">
              <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Your progress is saved automatically
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Form Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-800">Describe the Incident</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Please share as much detail as you feel comfortable with right now. You are in a safe space and can take your time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <label className="font-bold text-gray-800">Incident Narrative</label>
                <button className="flex items-center gap-1 text-blue-500 text-sm font-bold hover:underline">
                  <Mic size={16} />
                  Use Voice Input
                </button>
              </div>
              <textarea
                className="w-full min-h-[300px] p-4 bg-blue-50/30 border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all text-gray-700 placeholder-blue-400/70"
                placeholder="You can start by telling us what happened, where it happened, and who was involved. For example: 'On Monday evening at roughly 7pm...'"
                value={narrative}
                onChange={(e) => setNarrative(e.target.value)}
              ></textarea>
              <div className="text-right mt-2 text-[10px] text-gray-400 italic">
                Last saved just now
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-100">
              <Link href="/report" className="inline-block">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                <ChevronLeft size={20} />
                Back
              </button>
              </Link>
              <Link href="/report/page3" className="inline-block">
              <button className="flex items-center gap-2 px-10 py-3 bg-cyan-400 hover:bg-cyan-500 text-white rounded-lg font-bold shadow-md transition-all">
                Next Step
                <ArrowRight size={20} />
              </button>
              </Link>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 rounded-full p-1">
                  <span className="text-white text-xs font-bold px-1">?</span>
                </div>
                <h3 className="font-bold text-gray-900">What to include?</h3>
              </div>
              
              <p className="text-sm text-gray-500 leading-relaxed">
                If you are unsure where to start, try to include the time, location, and any persons involved. Remember, your safety is the priority.
              </p>

              <div className="space-y-3">
                <InfoCard 
                  icon={Lock} 
                  title="Encrypted" 
                  description="Your data is securely encrypted end-to-end." 
                />
                <InfoCard 
                  icon={EyeOff} 
                  title="Confidential" 
                  description="Only authorized case workers will see this." 
                />
                <InfoCard 
                  icon={Heart} 
                  title="Trauma-Informed" 
                  description="Take your time. You can save and return later." 
                />
              </div>

              {/* Emergency Banner */}
              <div className="bg-blue-50 p-4 rounded-lg flex gap-3 border border-blue-100">
                <Info size={20} className="text-blue-600 flex-shrink-0" />
                <p className="text-xs text-blue-800 font-medium leading-normal">
                  If you are in immediate danger, please stop filling this form and dial <span className="font-bold underline">112</span> immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-[10px] text-gray-400 uppercase tracking-widest">
        © 2024 Ogun State Ministry of Women Affairs. All rights reserved.
      </footer>
    </div>
  );
}