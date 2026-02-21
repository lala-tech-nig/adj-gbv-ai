"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from '@/app/components/MainLayout';
import FileUpload from '@/app/components/FileUpload';
import InfoCard from '@/app/components/InfoCard';
import { Lock, EyeOff, Heart, AlertCircle, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";
import Logo from "@/public/logo.png";

const steps = [
  { id: 1, name: 'Personal Info' },
  { id: 2, name: 'Incident Details' },
  { id: 3, name: 'Evidence' },
  { id: 4, name: 'Review' }
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
  const [narrative, setNarrative] = useState('');
  const [isFocused, setIsFocused] = useState(false);

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
          
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center gap-2 font-bold text-gray-800 text-lg">
                <AlertCircle className="text-blue-500 w-5 h-5" />
                Incident Narrative
              </label>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${narrative.length > 100 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                {narrative.length} characters
              </span>
            </div>
            
            <motion.div
              animate={{ scale: isFocused ? 1.01 : 1 }}
              className={`rounded-xl transition-all duration-300 ${isFocused ? 'ring-4 ring-blue-50' : ''}`}
            >
              <textarea
                className="w-full min-h-[320px] p-5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white transition-all text-gray-700 placeholder-slate-400 leading-relaxed"
                placeholder="Help us understand what happened. Include specific dates, locations, and any individuals involved..."
                value={narrative}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setNarrative(e.target.value)}
              />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <CheckCircle2 className="text-blue-600 w-5 h-5" />
              </div>
              <h4 className="font-bold text-gray-800 text-lg">Supporting Evidence</h4>
            </div>
            <p className="text-sm text-gray-500 mb-6">Upload photos, screenshots, or documents that support your report.</p>
            <FileUpload initialFiles={[]} />
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div variants={itemVariants} className="flex justify-between items-center pt-8 border-t border-gray-100">
            <Link href="/report">
              <button className="flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-gray-100 font-bold text-gray-500 hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95">
                <ChevronLeft size={20} />
                Back
              </button>
            </Link>
            <Link href="/report/page3">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95 group">
                Next Step
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.aside variants={itemVariants} className="space-y-4">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white shadow-xl mb-6">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              Tips for Reporting
            </h3>
            <ul className="text-blue-50 text-sm space-y-3 opacity-90">
              <li className="flex gap-2"><span>•</span> Focus on factual events.</li>
              <li className="flex gap-2"><span>•</span> Use "I" statements.</li>
              <li className="flex gap-2"><span>•</span> Don't worry about perfect grammar.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <h3 className="font-bold text-gray-800">Security & Privacy</h3>
            
            <motion.div whileHover={{ x: 5 }} className="transition-colors">
              <InfoCard icon={Lock} title="End-to-End Encryption" description="Data is scrambled before it even leaves your device." />
            </motion.div>
            
            <motion.div whileHover={{ x: 5 }} className="transition-colors">
              <InfoCard icon={EyeOff} title="Strictly Confidential" description="Visibility is limited to your assigned case manager." />
            </motion.div>
            
            <motion.div whileHover={{ x: 5 }} className="transition-colors">
              <InfoCard icon={Heart} title="We're Here to Help" description="Your well-being is our primary concern." />
            </motion.div>
          </div>
        </motion.aside>
      </motion.div>
    </MainLayout>
  );
}