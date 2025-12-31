"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/app/components/MainLayout';
import FileUpload from '@/app/components/FileUpload';
import InfoCard from '@/app/components/InfoCard';
import { ShieldCheck, Clock, ShieldAlert, ChevronRight, Mic, Lock } from 'lucide-react';
import Link from 'next/link';

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
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function EvidenceUpload() {
  return (
    <MainLayout steps={steps} currentStep={3} title="Evidence Upload">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Secure Evidence Collection</h2>
          <p className="text-gray-500 max-w-2xl">
            Please share any files that might support your report. This is optional. 
            Only share what you are comfortable with.
          </p>
        </motion.div>

        {/* Encryption Badge */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl px-5 py-4 flex items-center gap-4 mb-8 w-fit shadow-sm"
        >
          <div className="bg-green-500 p-2 rounded-full">
            <Lock className="text-white" size={18} />
          </div>
          <p className="text-green-800 text-sm">
            <span className="font-bold block">End-to-end Encrypted Uploads</span>
            <span className="opacity-80">Your privacy is our priority. Files are encrypted before they leave your device.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Upload Area */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  Attach Evidence 
                  <span className="text-xs font-normal bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase">Optional</span>
                </h3>
              </div>
              <FileUpload initialFiles={[]} />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ borderColor: "#3b82f6" }}
              className="border-2 border-dashed border-gray-200 rounded-2xl p-6 bg-blue-50/30 transition-colors"
            >
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm h-fit">
                  <Mic className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Record Voice Note</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    If typing is difficult, you can speak your story directly. Your voice is a powerful form of evidence.
                  </p>
                  <button className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1">
                    Open Recorder <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <motion.aside variants={itemVariants} className="space-y-6">
            <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-lg shadow-gray-100/50 relative overflow-hidden">
              {/* Decorative background shape */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl" />
              
              <h3 className="font-bold text-lg mb-6 relative z-10">Why upload evidence?</h3>
              
              <div className="space-y-6 relative z-10">
                <InfoCard 
                  icon={ShieldCheck} 
                  color="text-green-600" 
                  title="Legal Support" 
                  description="Digital evidence can be crucial for legal proceedings or obtaining protection orders." 
                />
                <InfoCard 
                  icon={Clock} 
                  color="text-blue-600" 
                  title="Timeline Verification" 
                  description="Metadata preserves timestamps to verify exactly when incidents occurred." 
                />
                <InfoCard 
                  icon={ShieldAlert} 
                  color="text-orange-500" 
                  title="Safety First" 
                  description="Uploading here allows you to safely delete sensitive files from your personal phone." 
                />
              </div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="mt-10 pt-6 border-t border-gray-100 group cursor-pointer"
              >
                <div className="bg-gray-50 group-hover:bg-blue-50 transition-colors rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Support" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Need Assistance?</p>
                      <p className="text-sm font-bold text-blue-900">Chat with a Specialist</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-blue-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </motion.div>
            </div>
          </motion.aside>
        </div>

        {/* Footer Actions */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between py-8 border-t border-gray-100 gap-4"
        >
          <Link href="/report/page2">
            <button className="px-8 py-3 rounded-xl border border-gray-200 font-semibold text-gray-600 hover:bg-gray-50 transition-all">
              Back
            </button>
          </Link>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors">
              Skip for now
            </button>
            <Link href="/report/page4">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
              >
                Continue to Review <ChevronRight size={20} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}