"use client";

import React, { useState } from 'react';
import { 
  Shield, Lock, EyeOff, Phone, LifeBuoy, X, Globe, 
  Sparkles, FileText, ChevronRight, ChevronLeft, 
  Calendar, User, Mail, MessageSquare, Info
} from 'lucide-react';

// --- SHARED UI COMPONENTS ---

const Header = ({ showSimple = false }) => (
  <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <div className="bg-[#1a4731] p-1.5 rounded-lg">
        <Shield className="w-5 h-5 text-white" />
      </div>
      <div>
        <h1 className="text-sm font-bold text-gray-900 leading-tight">Ogun State Ministry</h1>
        <p className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">Women Affairs & Social Dev</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      {!showSimple && (
        <button className="hidden md:flex items-center gap-1 text-xs font-semibold text-gray-600">
          <Globe className="w-4 h-4" /> English <span>▾</span>
        </button>
      )}
      <button className="flex items-center gap-2 bg-[#dc2626] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors">
        <X className="w-4 h-4" /> Quick Exit
      </button>
    </div>
  </nav>
);

// --- LANDING PAGE VIEW ---

const LandingPage = ({ onStart }) => (
  <div className="min-h-screen bg-white">
    <Header />
    <main>
      {/* Hero Section */}
      <section className="px-6 py-12 md:px-20 lg:flex items-center justify-between gap-12 bg-[radial-gradient(circle_at_top_right,_#f0f9ff_0%,_#ffffff_50%)]">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-500 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest mb-6 border border-blue-100">
            <Sparkles className="w-3 h-3" /> AI-POWERED SYSTEM
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
            Smart, Secure <br /> Reporting. <br />
            <span className="text-[#0ea5e9]">AI-Assisted Safety.</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-8">
            Our intelligent platform combines government-grade security with <span className="font-bold text-slate-700">AI-assisted risk analysis</span> to prioritize your safety.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button onClick={onStart} className="flex items-center gap-2 bg-[#0ea5e9] text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all">
              <FileText className="w-5 h-5" /> Report an Incident
            </button>
            <button className="flex items-center gap-2 border-2 border-gray-100 bg-white text-gray-900 px-6 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
              <span className="text-red-500 text-xl">*</span> Emergency Help
            </button>
          </div>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-400" /> Immediate Danger? Call <span className="font-bold text-gray-900">112</span> or Local Police
          </p>
        </div>

        <div className="mt-12 lg:mt-0 relative">
          <div className="bg-[#fde2d3] rounded-[40px] p-10 relative overflow-hidden">
             <div className="bg-white p-4 rounded-lg shadow-2xl relative z-10">
                <img src="https://img.freepik.com/free-vector/flat-design-international-women-s-day-illustration_23-2149298282.jpg" alt="Support" className="rounded-lg w-full max-w-[320px]" />
                <div className="absolute top-6 right-6 bg-white shadow-md rounded-md px-2 py-1 flex items-center gap-1 border border-gray-100">
                  <Lock className="w-3 h-3 text-green-500 fill-green-500" />
                  <span className="text-[10px] font-bold uppercase">Secure</span>
                </div>
             </div>
             <div className="absolute bottom-6 left-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-blue-50">
               <div className="bg-blue-100 p-2 rounded-lg"><Sparkles className="w-5 h-5 text-blue-500" /></div>
               <div>
                 <p className="text-[8px] font-black text-blue-400 uppercase tracking-widest">Active Monitoring</p>
                 <p className="text-xs font-bold text-gray-900 tracking-tight">AI Risk Assessment</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="px-6 py-20 md:px-20 grid md:grid-cols-3 gap-8 bg-white">
        {[
          { icon: EyeOff, title: "Anonymous Reporting", desc: "Submit reports without revealing your name or personal details if you choose." },
          { icon: Shield, title: "Secure Encryption", desc: "All data is protected by government-grade security protocols." },
          { icon: LifeBuoy, title: "24/7 Professional Support", desc: "Access to counselors, legal aid, and medical support whenever you need it." }
        ].map((f, i) => (
          <div key={i} className="bg-slate-50/50 p-8 rounded-[32px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
            <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
              <f.icon className="w-6 h-6 text-[#0ea5e9]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>
    </main>
  </div>
);

// --- REPORTING FORM VIEW (STEP 2) ---

const ReportingForm = ({ onBack }) => {
  const [anonymous, setAnonymous] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header showSimple />
      
      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Progress Header */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Step 2 of 4</span>
            <span className="text-[10px] font-bold text-blue-400">Next: Incident Details</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="bg-[#0ea5e9] h-full w-1/2 rounded-full"></div>
          </div>
        </div>

        <h2 className="text-4xl font-black text-gray-900 mb-4">Personal Information</h2>
        <p className="text-gray-500 mb-8">Please provide your details below to help us assist you better. Your information is encrypted and stored securely.</p>

        <div className="space-y-6">
          {/* Anonymity Toggle */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm">
            <div className="flex gap-4">
              <div className="bg-blue-50 p-2 rounded-lg h-fit"><EyeOff className="w-5 h-5 text-[#0ea5e9]" /></div>
              <div>
                <p className="font-bold text-gray-900">Report Anonymously</p>
                <p className="text-xs text-gray-500">Enable this to hide your identity. We will not collect your name or contact details.</p>
              </div>
            </div>
            <button 
              onClick={() => setAnonymous(!anonymous)}
              className={`w-12 h-6 rounded-full transition-colors relative ${anonymous ? 'bg-blue-500' : 'bg-gray-200'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${anonymous ? 'left-7' : 'left-1'}`} />
            </button>
          </div>

          {/* AI Note */}
          <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 flex gap-4 items-start">
            <Sparkles className="w-5 h-5 text-blue-500 mt-1" />
            <div>
              <p className="text-xs font-bold text-blue-900 mb-1">AI Assistant Note</p>
              <p className="text-xs text-blue-700/80 leading-relaxed">We use your location and age to automatically match you with the nearest specialized support centers. This information is never shared publicly.</p>
            </div>
          </div>

          {/* Form Grid */}
          <div className={`grid md:grid-cols-2 gap-6 transition-opacity ${anonymous ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700">First Name</label>
              <input type="text" placeholder="e.g. Adeola" className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:ring-2 ring-blue-100 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700">Last Name</label>
              <input type="text" placeholder="e.g. Ogunleye" className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:ring-2 ring-blue-100 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700">Date of Birth</label>
              <div className="relative">
                <input type="text" placeholder="mm/dd/yyyy" className="w-full p-4 rounded-xl border border-gray-200 bg-white" />
                <Calendar className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700">Gender Identity</label>
              <select className="w-full p-4 rounded-xl border border-gray-200 bg-white outline-none appearance-none">
                <option>Select an option</option>
                <option>Female</option>
                <option>Male</option>
                <option>Non-binary</option>
              </select>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
            <h3 className="font-bold text-gray-900 mb-2">How can we contact you safely?</h3>
            <p className="text-xs text-gray-500 mb-6">We understand privacy is critical. Choose the safest way for us to reach you regarding this report.</p>
            
            <div className="space-y-4">
              {[
                { label: "Phone Call", sub: "We will only identify ourselves after verifying it's you." },
                { label: "Email Only", sub: "We will send a secure link to your inbox." },
                { label: "Do not contact me", sub: "I will check back on the platform using my Case ID." }
              ].map((method, idx) => (
                <label key={idx} className="flex gap-4 p-4 rounded-xl border border-gray-50 hover:bg-slate-50 cursor-pointer transition-all">
                  <input type="radio" name="contact" className="mt-1 accent-blue-500" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{method.label}</p>
                    <p className="text-xs text-gray-500">{method.sub}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-12">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900">
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          <button className="flex items-center gap-2 bg-[#0ea5e9] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-100">
            Continue to Incident Details <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function GBVApp() {
  const [step, setStep] = useState('landing'); // 'landing' or 'form'

  return (
    <>
      {step === 'landing' ? (
        <LandingPage onStart={() => setStep('form')} />
      ) : (
        <ReportingForm onBack={() => setStep('landing')} />
      )}
      
      {/* Footer (Visible on both) */}
      <footer className="bg-white border-t border-gray-100 py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-1.5 rounded-md"><Shield className="w-4 h-4 text-gray-400" /></div>
            <span className="text-sm font-bold text-gray-700">Ogun State Government</span>
          </div>
          <div className="flex gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Emergency Contacts</a>
          </div>
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-gray-50">
          <p className="text-[10px] text-gray-400">© 2024 Ogun State Ministry. All rights reserved.</p>
          <div className="bg-gray-100 text-[10px] font-bold text-gray-400 px-3 py-1 rounded">SSL SECURE</div>
        </div>
      </footer>
    </>
  );
}