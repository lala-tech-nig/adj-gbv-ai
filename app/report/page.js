"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/app/components/MainLayout';
import FileUpload from '@/app/components/FileUpload';
import InfoCard from '@/app/components/InfoCard';
import { ShieldCheck, Clock, ShieldAlert, Lock, ArrowRight, User } from 'lucide-react';
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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.5 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export default function ReportStart() {
  return (
    <MainLayout steps={steps} currentStep={1} title="Personal Information">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Form Card */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <User size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Your Details</h3>
                <p className="text-sm text-gray-500">How should we contact you?</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {['First name', 'Last name', 'Phone', 'Email'].map((field) => (
                <div key={field} className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{field}</label>
                  <input 
                    className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" 
                    placeholder={`${field} (optional)`} 
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex items-center gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
              <Lock size={14} className="text-amber-600" />
              <p className="text-xs text-amber-700">Your information is encrypted and stored securely.</p>
            </div>
          </motion.div>

          {/* Evidence Card */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-xl font-bold text-gray-800">Attach Evidence</h3>
               <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">Recommended</span>
            </div>
            <FileUpload initialFiles={[]} />
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div variants={itemVariants} className="flex justify-between items-center pt-8">
            <Link href="/">
              <motion.button 
                whileHover={{ x: -4 }}
                className="px-8 py-3 rounded-xl border border-gray-300 font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Back
              </motion.button>
            </Link>
            <Link href="/report/page2">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 flex items-center gap-2 transition-all"
              >
                Continue <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.aside 
          variants={itemVariants}
          className="space-y-6"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white shadow-xl">
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <ShieldCheck className="text-blue-400" /> Why upload evidence?
            </h4>
            <div className="space-y-6">
              <InfoCard 
                icon={ShieldCheck} 
                color="text-blue-400" 
                title="Legal Support" 
                description="Digital evidence can be crucial for legal proceedings or obtaining protection orders." 
              />
              <InfoCard 
                icon={Clock} 
                color="text-purple-400" 
                title="Timeline Verification" 
                description="Preserves metadata that verify exactly when and where incidents occurred." 
              />
              <InfoCard 
                icon={ShieldAlert} 
                color="text-rose-400" 
                title="Safety First" 
                description="Delete files from your phone safely after uploading them to our secure cloud." 
              />
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
             <p className="text-sm text-blue-800 leading-relaxed italic">
               "Your safety is our priority. If you feel monitored, please use a private browser or clear your history after this session."
             </p>
          </div>
        </motion.aside>
      </motion.div>
    </MainLayout>
  );
}