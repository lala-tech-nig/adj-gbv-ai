"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/app/components/MainLayout';
import InfoCard from '@/app/components/InfoCard';
import { Lock, EyeOff, Heart, AlertCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useReportContext } from '../ReportContext';
import { useRouter } from 'next/navigation';

const steps = [
  { id: 1, name: 'Personal Info' },
  { id: 2, name: 'Incident' },
  { id: 3, name: 'Evidence' },
  { id: 4, name: 'Safety' },
  { id: 5, name: 'Review' },
  { id: 6, name: 'Submit' }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function IncidentReport() {
  const { formData, updateFormData } = useReportContext();
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleNext = (e) => {
    e.preventDefault();
    router.push('/report/page3');
  };

  return (
    <MainLayout steps={steps} currentStep={2} title="Incident Details">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">

          <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center gap-3 font-black text-black text-xl">
                <div className="p-2 bg-zinc-100 rounded-xl">
                  <AlertCircle className="text-black w-6 h-6" />
                </div>
                Incident Narrative
              </label>
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${formData.narrative.length > 100 ? 'bg-green-100 text-green-700' : 'bg-zinc-100 text-zinc-500'}`}>
                {formData.narrative.length} chars
              </span>
            </div>

            <motion.div
              animate={{ scale: isFocused ? 1.01 : 1 }}
              className={`rounded-2xl transition-all duration-300 ${isFocused ? 'ring-2 ring-green-500/50' : ''}`}
            >
              <textarea
                className="w-full min-h-[320px] p-6 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:border-green-500 focus:bg-white transition-all text-black font-medium placeholder-zinc-400 leading-relaxed resize-none"
                placeholder="Help us understand what happened. Include specific dates, locations, and any individuals involved..."
                value={formData.narrative}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => updateFormData({ narrative: e.target.value })}
              />
            </motion.div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div variants={itemVariants} className="flex justify-between items-center pt-8">
            <Link href="/report">
              <button className="flex items-center gap-2 px-8 py-4 rounded-xl border border-zinc-200 font-black text-zinc-500 hover:bg-zinc-100 hover:text-black transition-all uppercase tracking-widest text-xs">
                <ChevronLeft size={18} /> Back
              </button>
            </Link>
            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-black hover:bg-zinc-800 text-white px-10 py-4 rounded-xl font-black shadow-xl shadow-black/10 transition-all uppercase tracking-widest text-xs group"
            >
              Continue <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.aside variants={itemVariants} className="space-y-6">
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-3xl text-black shadow-xl mb-6 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-20">
              <Heart size={140} className="text-black" />
            </div>
            <div className="relative z-10">
              <h3 className="font-black text-xl mb-4 flex items-center gap-2 text-black">
                Tips for Reporting
              </h3>
              <ul className="text-black/80 text-sm font-bold space-y-4">
                <li className="flex gap-3"><span className="text-white mt-0.5">•</span> Focus on factual events</li>
                <li className="flex gap-3"><span className="text-white mt-0.5">•</span> Use "I" statements</li>
                <li className="flex gap-3"><span className="text-white mt-0.5">•</span> Do not worry about perfect grammar</li>
              </ul>
            </div>
          </div>

          <div className="bg-black p-8 rounded-3xl border border-zinc-800 shadow-xl space-y-6 text-white">
            <h3 className="font-black text-lg text-white">Security & Privacy</h3>

            <motion.div whileHover={{ x: 5 }} className="transition-colors group">
              <div className="flex gap-3">
                <Lock className="text-green-500 shrink-0 mt-1" size={20} />
                <div>
                  <h5 className="font-bold text-sm text-green-400">End-to-End Encryption</h5>
                  <p className="text-xs text-zinc-400 font-medium">Data is scrambled before it even leaves your device.</p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} className="transition-colors group">
              <div className="flex gap-3">
                <EyeOff className="text-green-500 shrink-0 mt-1" size={20} />
                <div>
                  <h5 className="font-bold text-sm text-green-400">Strictly Confidential</h5>
                  <p className="text-xs text-zinc-400 font-medium">Visibility is limited to your assigned case manager.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.aside>
      </motion.div>
    </MainLayout>
  );
}