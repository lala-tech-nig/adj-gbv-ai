"use client";

import React, { useState } from 'react';
import MainLayout from '@/app/components/MainLayout';
import Link from 'next/link';
import { Shield, FileCheck, MapPin, Calendar, Edit3, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReportContext } from '../ReportContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';

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
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ReportReviewPage() {
  const { formData, clearData } = useReportContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const SERVER_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await axios.post(`${SERVER_URL}/api/reports`, {
        ...formData,
        title: formData.title || "Urgent GBV Report",
        incidentDate: formData.incidentDate || new Date().toISOString()
      });
      // Clear localStorage draft upon successful submission
      clearData();
      router.push('/report/page6');
    } catch (err) {
      console.error("Submit failed", err);
      alert("Failed to submit report. If urgent, click Quick Exit or contact emergency lines.");
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout steps={steps} currentStep={5} title="Review & Submit">
      <motion.div
        className="max-w-4xl mx-auto space-y-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="bg-black p-8 rounded-3xl border border-zinc-900 shadow-xl flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-500 rounded-2xl text-black">
              <Shield size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black">Final Verification</h3>
              <p className="text-zinc-400 font-medium">Securely review your report before it is encrypted.</p>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div variants={itemVariants} className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-zinc-100">
            <FileCheck className="text-green-500" size={24} />
            <h4 className="font-black text-xl text-black">Incident Overview</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start gap-4">
              <Calendar className="text-black shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-400 font-black mb-1">Date Logged</p>
                <p className="text-black font-medium">{new Date(formData.incidentDate).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-black shrink-0 mt-0.5" size={20} />
              <div className="w-full flex justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-black mb-1">Location</p>
                  <p className="text-black font-medium">{formData.location || "Not specified"}</p>
                </div>
                <Link href="/report" className="text-green-600 hover:text-black">
                  <Edit3 size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center group">
              <h5 className="font-black text-xs uppercase tracking-widest text-zinc-400">Narrative Summary</h5>
              <Link href="/report/page2" className="text-green-600 hover:text-black opacity-0 group-hover:opacity-100 transition-opacity">
                <Edit3 size={16} />
              </Link>
            </div>
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <p className="text-sm font-medium text-zinc-600 italic whitespace-pre-wrap">{formData.narrative || "No narrative provided."}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-100">
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-400 font-black mb-1 flex justify-between">
                  Contact Preference
                  <Link href="/report/page4" className="text-green-600 hover:text-black"><Edit3 size={14} /></Link>
                </p>
                <p className="text-black font-bold uppercase">{formData.contactMethod}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-400 font-black mb-1">Evidence Files</p>
                <p className="text-black font-bold">{formData.mediaUrls.length} file(s) attached</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
          <Link href="/report/page4" className="w-full sm:w-auto">
            <button
              className="w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-4 rounded-xl border border-zinc-200 font-black hover:text-black text-zinc-500 hover:bg-zinc-100 transition-colors uppercase tracking-widest text-xs"
            >
              <ArrowLeft size={18} /> Back
            </button>
          </Link>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-black text-white font-black hover:bg-zinc-800 transition-all shadow-xl shadow-black/10 uppercase tracking-widest text-xs disabled:opacity-50"
          >
            {isSubmitting ? "Encrypting & Submitting..." : "Submit Official Report"}
            {!isSubmitting && <ArrowRight size={18} />}
          </button>
        </motion.div>

        {/* Security Footer */}
        <motion.p
          variants={itemVariants}
          className="text-center text-xs font-bold text-zinc-400 mt-10 uppercase tracking-widest"
        >
          Protected by AES-256 Encryption. Your identity is handled securely.
        </motion.p>
      </motion.div>
    </MainLayout>
  );
}