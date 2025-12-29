"use client";

import React, { useState } from 'react';
import { Sun, Sunrise, Moon, Phone, MessageSquare, Shield, LogOut, User } from 'lucide-react';
import Link from 'next/link';

const SafetyPreferences = () => {
  const [timeSlot, setTimeSlot] = useState('morning');
  const [contactMethod, setContactMethod] = useState('phone');
  const [noPriorNotice, setNoPriorNotice] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="bg-cyan-100 p-2 rounded-lg">
            <Shield className="w-6 h-6 text-cyan-600" />
          </div>
          <h1 className="font-bold text-lg text-slate-800">Ogun State GBV Reporting</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg font-medium border border-red-100 hover:bg-red-100 transition-colors">
            <LogOut className="w-4 h-4" />
            Quick Exit (Esc)
          </button>
          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-slate-500" />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto mt-12 px-6 pb-20">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-sm font-semibold mb-2">
            <span className="text-slate-700">Step 3 of 5: Safety Preferences</span>
            <span className="text-cyan-600">60% Completed</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div className="bg-cyan-400 h-full w-[60%]"></div>
          </div>
        </div>

        {/* Title Section */}
        <section className="mb-10">
          <h2 className="text-4xl font-bold mb-4">Safety Preferences</h2>
          <p className="text-cyan-700 text-lg leading-relaxed">
            Your safety is our priority. Please tell us how and when we can reach you without putting you at risk. 
            We will never share this information with the perpetrator.
          </p>
        </section>

        {/* Time Selection */}
        <section className="mb-10">
          <h3 className="font-bold text-lg mb-4">When is the safest time to contact you?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: 'morning', label: 'Morning', time: '8am-12pm', icon: Sun, color: 'text-cyan-500' },
              { id: 'afternoon', label: 'Afternoon', time: '12pm-4pm', icon: Sunrise, color: 'text-orange-500' },
              { id: 'evening', label: 'Evening', time: '4pm-8pm', icon: Moon, color: 'text-indigo-500' }
            ].map((slot) => (
              <button
                key={slot.id}
                onClick={() => setTimeSlot(slot.id)}
                className={`p-6 rounded-xl border-2 transition-all text-left flex flex-col gap-2 ${
                  timeSlot === slot.id ? 'border-cyan-400 bg-cyan-50/30' : 'border-slate-100 bg-white'
                }`}
              >
                <slot.icon className={`w-6 h-6 ${slot.color}`} />
                <div>
                  <div className="font-bold text-slate-800">{slot.label}</div>
                  <div className="text-slate-400 text-sm">{slot.time}</div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Contact Method */}
        <section className="mb-8">
          <h3 className="font-bold text-lg mb-4">How would you prefer we contact you?</h3>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setContactMethod('phone')}
              className={`flex items-center gap-3 px-6 py-4 rounded-lg border transition-all ${
                contactMethod === 'phone' ? 'bg-cyan-50 border-cyan-300 text-cyan-600' : 'bg-white border-slate-200 text-slate-600'
              }`}
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Phone Call</span>
            </button>
            <button
              onClick={() => setContactMethod('sms')}
              className={`flex items-center gap-3 px-6 py-4 rounded-lg border transition-all ${
                contactMethod === 'sms' ? 'bg-cyan-50 border-cyan-300 text-cyan-600' : 'bg-white border-slate-200 text-slate-600'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold">SMS Text</span>
            </button>
            <button
              onClick={() => setContactMethod('whatsapp')}
              className={`flex items-center gap-3 px-6 py-4 rounded-lg border transition-all ${
                contactMethod === 'whatsapp' ? 'bg-cyan-50 border-cyan-300 text-cyan-600' : 'bg-white border-slate-200 text-slate-600'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center bg-slate-500 text-white rounded text-[10px]">W</div>
              <span className="font-semibold">WhatsApp</span>
            </button>
          </div>
        </section>

        {/* Warning Box */}
        <section className="mb-12">
          <label className="flex items-start gap-4 p-6 rounded-xl bg-orange-50/50 cursor-pointer border border-orange-100">
            <input 
              type="checkbox" 
              checked={noPriorNotice}
              onChange={() => setNoPriorNotice(!noPriorNotice)}
              className="mt-1 w-5 h-5 rounded border-slate-300 text-cyan-500 focus:ring-cyan-500" 
            />
            <div>
              <div className="font-bold text-slate-800">Do not call me without prior notice</div>
              <p className="text-cyan-700/80 text-sm mt-1">
                Check this box if receiving a surprise call could put you at risk. We will send a discreet text message first to confirm it is safe to talk.
              </p>
            </div>
          </label>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Link href="/report/page3" className="inline-block">
          <button className="px-10 py-3 rounded-xl border border-slate-200 bg-white font-bold text-slate-700 hover:bg-slate-50 transition-colors">
            Back
          </button>
          </Link>
          <Link href="/report/page5" className="inline-block">
          <button className="px-10 py-3 rounded-xl bg-cyan-400 font-bold text-slate-900 hover:bg-cyan-500 transition-colors">
            Continue to Review
          </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SafetyPreferences;