"use client";

import React from 'react';
import { 
  Shield, 
  LogOut, 
  Calendar, 
  MapPin, 
  FileText, 
  User, 
  Mail, 
  AlertTriangle, 
  Save, 
  Send,
  Edit2,
  Phone
} from 'lucide-react';

import Link from 'next/link';

const ReportReviewPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 pb-12">
      {/* Header */}
      <header className="bg-white border-b px-4 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-sky-500 p-1.5 rounded-lg">
            <Shield className="text-white w-5 h-5" />
          </div>
          <h1 className="font-bold text-slate-800 text-lg">Ministry of Women Affairs</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors">
            Quick Exit <LogOut size={18} />
          </button>
          <div className="w-8 h-8 bg-orange-200 rounded-full border border-orange-300"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto mt-8 px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
            <span>Details</span>
            <span>Narrative</span>
            <span>Contact</span>
            <span className="text-sky-600">Review</span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-sky-400 w-full rounded-full"></div>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-sm font-semibold">Step 4 of 4: Review & Submit</span>
            <span className="text-[10px] bg-sky-50 text-sky-600 px-2 py-0.5 rounded border border-sky-100 uppercase font-bold">Secure Connection</span>
          </div>
        </div>

        {/* Title Section */}
        <section className="mb-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Review Your Report</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Please review the information below carefully. You can make changes to any section before submitting. 
            This information will be handled with <span className="font-semibold">strict confidentiality</span>.
          </p>
        </section>

        {/* Encryption Alert */}
        <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 flex items-center gap-3 mb-8">
          <Shield className="text-sky-500 w-5 h-5 shrink-0" />
          <p className="text-sm text-sky-800">
            Your report is end-to-end encrypted. Only authorized case workers will have access to this information.
          </p>
        </div>

        <div className="space-y-6">
          {/* Incident Overview Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-50 flex justify-between items-center">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <Calendar className="text-sky-500 w-5 h-5" />
                Incident Overview
              </div>
              <button className="text-sky-500 text-sm font-semibold flex items-center gap-1 hover:underline">
                <Edit2 size={14} /> Edit
              </button>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Date & Time</label>
                <p className="text-slate-700 font-medium">October 24, 2023 at 8:30 PM</p>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Type of Incident</label>
                <p className="text-slate-700 font-medium">Physical Assault, Verbal Abuse</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</label>
                <div className="flex gap-4 mt-2">
                   <div className="w-32 h-20 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center justify-center overflow-hidden">
                      {/* Simple placeholder for map */}
                      <div className="relative w-full h-full opacity-40">
                         <div className="absolute top-4 left-6 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                         <div className="w-full h-full border-t border-l border-emerald-200 rotate-12 translate-x-4"></div>
                         <div className="w-full h-full border-r border-b border-emerald-200 -rotate-12 -translate-x-2"></div>
                      </div>
                   </div>
                   <div>
                     <p className="font-bold text-slate-700">Residential Area, Abeokuta</p>
                     <p className="text-slate-400 text-sm italic">Near the central market district</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statement Summary Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="p-5 border-b border-slate-50 flex justify-between items-center">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <FileText className="text-sky-500 w-5 h-5" />
                Statement Summary
              </div>
              <button className="text-sky-500 text-sm font-semibold flex items-center gap-1 hover:underline">
                <Edit2 size={14} /> Edit
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-slate-400 text-xs italic mb-3">
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                Full details hidden to prevent distress.
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "I was returning home from work when the incident occurred. It happened very quickly near the..."
              </p>
              <button className="text-sky-500 text-sm font-bold mt-4 hover:underline">Show full statement</button>
            </div>
          </div>

          {/* Contact Preferences Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="p-5 border-b border-slate-50 flex justify-between items-center">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <User className="text-sky-500 w-5 h-5" />
                Contact Preferences
              </div>
              <button className="text-sky-500 text-sm font-semibold flex items-center gap-1 hover:underline">
                <Edit2 size={14} /> Edit
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Reporter Name</label>
                  <p className="text-slate-700 font-medium">Jane Doe (Confidential)</p>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Preferred Contact Method</label>
                  <p className="text-slate-700 font-medium flex items-center gap-2">
                    <Mail size={16} className="text-sky-500" /> Email (Safe to contact)
                  </p>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3">
                <AlertTriangle className="text-amber-500 w-5 h-5 shrink-0" />
                <div>
                  <p className="text-amber-800 text-xs font-bold uppercase tracking-wide">Safety Check</p>
                  <p className="text-amber-700 text-sm">You indicated that it is <span className="font-bold">NOT</span> safe to leave a voicemail.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Section */}
        <div className="mt-12 space-y-6">
          <label className="flex gap-4 items-start cursor-pointer group">
            <input type="checkbox" className="mt-1.5 w-5 h-5 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
            <span className="text-sm text-slate-600 leading-relaxed">
              I certify that the information provided is true to the best of my knowledge. I understand that false reporting is a serious offense.
            </span>
          </label>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex-1 bg-white border border-slate-200 text-slate-600 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
              <Save size={20} /> Save as Draft
            </button>
            <Link href="/report/page6" className="inline-block">
            <button className="flex-[1.5] bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-sky-200 transition-all">
              Submit Report <Send size={20} />
            </button>
            </Link>

          </div>
          <p className="text-center text-[11px] text-slate-400">
            By clicking submit, your report will be encrypted and sent to the Ministry of Women Affairs Intake Unit.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="flex justify-center gap-4 text-xs text-sky-600 font-medium mb-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="text-slate-300">•</span>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
          <div className="inline-flex items-center gap-3 bg-red-50 border border-red-100 px-6 py-2.5 rounded-full text-red-600 font-bold text-sm">
            <Phone size={16} />
            Emergency Hotline: 112 or 0800-WOMEN-HELP
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ReportReviewPage;