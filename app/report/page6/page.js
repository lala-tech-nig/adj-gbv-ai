"use client";

import React, { useState } from 'react';
import MainLayout from '@/app/components/MainLayout';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, Home, ShieldCheck, Clock, MessageSquare } from 'lucide-react';

export default function ReportConfirmation() {
  const referenceNumber = '#REF-12345';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(referenceNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MainLayout title="Submission Confirmed">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVars}
        className="flex flex-col items-center gap-8 py-12 px-4"
      >
        {/* Animated Success Icon */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-lg shadow-green-100"
        >
          <Check className="w-12 h-12 text-green-600" strokeWidth={3} />
        </motion.div>

        {/* Text Content */}
        <div className="text-center space-y-3">
          <motion.h1 variants={itemVars} className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Report Received Safely
          </motion.h1>
          <motion.p variants={itemVars} className="text-gray-500 max-w-md mx-auto text-lg">
            Thank you for your courage. Your submission has been <span className="text-green-600 font-medium">end-to-end encrypted</span> and stored securely.
          </motion.p>
        </div>

        {/* Reference Card */}
        <motion.div 
          variants={itemVars}
          whileHover={{ scale: 1.02 }}
          className="w-full max-w-md bg-white border border-gray-100 shadow-xl shadow-gray-200/50 p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
          <div className="text-xs text-blue-500 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <ShieldCheck size={14} />
            Secure Reference Number
          </div>
          
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-100">
            <code className="text-2xl font-mono font-bold text-gray-800">{referenceNumber}</code>
            <button 
              onClick={copyToClipboard}
              className={`p-2 rounded-md transition-all ${copied ? 'bg-green-500 text-white' : 'bg-white text-gray-500 hover:text-blue-600 border'}`}
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <Check size={20} />
                  </motion.span>
                ) : (
                  <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <Copy size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            Please save this number. You will need it to track progress or provide more information anonymously.
          </p>
        </motion.div>

        {/* Informational Grid */}
        <motion.div variants={itemVars} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <Clock className="text-blue-500 shrink-0" size={20} />
            <div>
              <h4 className="text-sm font-semibold">Review Period</h4>
              <p className="text-xs text-gray-500">Expect an initial review within 24-48 hours.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <MessageSquare className="text-blue-500 shrink-0" size={20} />
            <div>
              <h4 className="text-sm font-semibold">Stay Anonymous</h4>
              <p className="text-xs text-gray-500">We will never ask for your identity.</p>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div variants={itemVars} className="flex flex-col sm:flex-row gap-4 w-full max-w-md pt-4">
          <Link href="/" className="flex-1">
            <button className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-gray-100 font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
              <Home size={18} />
              Return Home
            </button>
          </Link>
          <button className="flex-1 px-6 py-4 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95">
            Download PDF
          </button>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}