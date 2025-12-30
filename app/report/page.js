"use client";

import React, { useState } from 'react';
import { Camera, ArrowLeft, ArrowRight, ShieldAlert, Info, LogOut } from 'lucide-react';
import Link from 'next/link';

// --- Sub-components ---

const InputField = ({ label, placeholder, type = "text", optional = false }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <div className="flex justify-between items-center">
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      {optional && <span className="text-xs italic text-slate-400 font-normal text-right">Optional</span>}
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white text-slate-600 placeholder:text-slate-300 transition-all"
    />
  </div>
);

const RadioOption = ({ id, name, title, description, checked, onChange }) => (
  <label htmlFor={id} className="flex items-start gap-3 p-3 cursor-pointer group">
    <div className="relative flex items-center mt-1">
      <input
        type="radio"
        id={id}
        name={name}
        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-cyan-500 transition-all"
        checked={checked}
        onChange={onChange}
      />
      <div className="absolute w-2.5 h-2.5 bg-cyan-500 rounded-full scale-0 peer-checked:scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-slate-700">{title}</span>
      <span className="text-xs text-slate-400 leading-relaxed">{description}</span>
    </div>
  </label>
);

// --- Main Page ---

export default function PersonalInformationForm() {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [contactMethod, setContactMethod] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-cyan-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
            </div>
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-800 leading-tight">Ogun State Ministry</h1>
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Women Affairs & Social Dev</p>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-100 transition-colors">
          <LogOut size={16} />
          Quick Exit
        </button>
      </header>

      <main className="max-w-3xl mx-auto mt-10 px-6">
        {/* Progress Bar */}
        <div className="flex justify-between items-end mb-2">
          <span className="text-[11px] font-bold text-slate-800 uppercase tracking-widest">Step 1 of 4</span>
          <span className="text-[11px] font-medium text-cyan-600">Next: Incident Details</span>
        </div>
        <div className="h-1.5 w-full bg-slate-200 rounded-full mb-10 overflow-hidden">
          <div className="h-full bg-cyan-400 w-1/2 rounded-full" />
        </div>

        <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Personal Information</h2>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
          Please provide your details below to help us assist you better. Your information is encrypted and stored securely.
        </p>

        <div className="space-y-6">
          {/* Anonymous Toggle */}
          <div className="bg-white border border-slate-100 rounded-xl p-6 flex justify-between items-start shadow-sm">
            <div className="flex gap-4">
              <div className="p-2 bg-cyan-50 rounded-lg text-cyan-500">
                <ShieldAlert size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-800 text-sm">Report Anonymously</span>
                <p className="text-xs text-slate-500 mt-1">
                  Enable this to hide your identity. We will not collect your name or contact details if this is enabled.
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsAnonymous(!isAnonymous)}
              className={`w-12 h-6 rounded-full transition-colors relative flex items-center px-1 ${isAnonymous ? 'bg-cyan-500' : 'bg-slate-200'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${isAnonymous ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* AI Note */}
          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 flex gap-4">
            <div className="p-2 text-blue-400">
              <Info size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-blue-900 text-sm">AI Assistant Note</span>
              <p className="text-xs text-blue-700/70 mt-1 leading-relaxed">
                We use your location and age to automatically match you with the nearest specialized support centers. This information is never shared publicly.
              </p>
            </div>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="First Name" placeholder="e.g. Adeola" />
            <InputField label="Last Name" placeholder="e.g. Ogunleye" />
            <InputField label="Date of Birth" placeholder="mm/dd/yyyy" type="date" />
            
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-semibold text-slate-700">Gender Identity</label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-slate-600 appearance-none cursor-pointer">
                <option value="">Select an option</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            <InputField label="Phone Number" placeholder="+234" optional={true} />
            <InputField label="Email Address" placeholder="email@example.com" optional={true} />
          </div>

          {/* Contact Methods Section */}
          <div className="bg-white border border-slate-100 rounded-xl p-8 mt-4 shadow-sm">
            <h3 className="text-sm font-bold text-slate-800 mb-2">How can we contact you safely?</h3>
            <p className="text-xs text-slate-400 mb-6">
              We understand privacy is critical. Choose the safest way for us to reach you regarding this report.
            </p>

            <div className="space-y-4">
              <RadioOption 
                id="phone" 
                name="contact" 
                title="Phone Call" 
                description="We will only identify ourselves after verifying it's you." 
                checked={contactMethod === 'phone'}
                onChange={() => setContactMethod('phone')}
              />
              <RadioOption 
                id="email" 
                name="contact" 
                title="Email Only" 
                description="We will send a secure link to your inbox." 
                checked={contactMethod === 'email'}
                onChange={() => setContactMethod('email')}
              />
              <RadioOption 
                id="none" 
                name="contact" 
                title="Do not contact me" 
                description="I will check back on the platform using my Case ID." 
                checked={contactMethod === 'none'}
                onChange={() => setContactMethod('none')}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-10">
             <Link href="/" className="inline-block">
            <button className="flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-slate-800 transition-colors">
              <ArrowLeft size={18} />
              Back
            </button>
            </Link>
 <Link href="/report/page2" className="inline-block">
      <button
        type="button"
        className="flex items-center gap-2 bg-cyan-400 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-100"
      >
        Continue to Incident Details
        <ArrowRight size={18} />
      </button>
    </Link>
          </div>
        </div>
      </main>
    </div>
  );
}