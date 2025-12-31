"use client";

import React from 'react';
import MainLayout from '@/app/components/MainLayout';
import Link from 'next/link';
import { Shield, FileCheck, MapPin, Calendar, Edit3, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

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
    transition: { staggerChildren: 0.15 } // Staggers the appearance of children
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ReportReviewPage() {
  return (
    <MainLayout steps={steps} currentStep={4} title="Review & Submit">
      <motion.div 
        className="max-w-4xl mx-auto space-y-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-blue-600 rounded-lg text-white">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Final Verification</h3>
              <p className="text-gray-600">Securely review your report before it is encrypted and sent to authorities.</p>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <div className="flex items-center gap-2">
              <FileCheck className="text-green-500" size={20} />
              <h4 className="font-bold text-lg text-gray-800">Incident Overview</h4>
            </div>
            <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              <Edit3 size={16} /> Edit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Calendar className="text-gray-400 mt-1" size={18} />
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">Date & Time</p>
                <p className="text-gray-700 font-medium">October 24, 2023 • 14:30 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-400 mt-1" size={18} />
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">Location</p>
                <p className="text-gray-700 font-medium">Residential Area, Abeokuta, Ogun State</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-dashed">
            <p className="text-sm text-gray-500 italic">"The incident occurred near the primary school gate. Three individuals were involved..."</p>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div variants={itemVariants} className="flex justify-between items-center pt-6">
          <Link href="/report/page4">
            <motion.button 
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 rounded-xl border border-gray-200 font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft size={18} /> Back
            </motion.button>
          </Link>

          <Link href="/report/page6">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-10 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
            >
              Submit Official Report <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>

        {/* Security Footer */}
        <motion.p 
          variants={itemVariants}
          className="text-center text-xs text-gray-400 mt-8"
        >
          Protected by 256-bit SSL Encryption. Your identity is handled per our privacy policy.
        </motion.p>
      </motion.div>
    </MainLayout>
  );
}