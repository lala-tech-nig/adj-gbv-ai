"use client";

import React, { useState, useEffect } from 'react';
import MainLayout from '@/app/components/MainLayout';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, Home, ShieldCheck, Clock, MessageSquare } from 'lucide-react';

export default function ReportConfirmation() {
  const [referenceNumber, setReferenceNumber] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Generate a secure reference number
    setReferenceNumber(`REF-${Math.floor(100000 + Math.random() * 900000)}`);
  }, []);

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
        className="flex flex-col items-center gap-8 py-10 px-4 max-w-2xl mx-auto"
      >
        {/* Animated Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center shadow-xl shadow-green-500/10"
        >
          <Check className="w-12 h-12 text-green-500" strokeWidth={3} />
        </motion.div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <motion.h1 variants={itemVars} className="text-4xl font-black text-black tracking-tight">
            Report Received Safely
          </motion.h1>
          <motion.p variants={itemVars} className="text-zinc-500 font-medium text-lg leading-relaxed">
            Thank you for your courage. Your submission has been <span className="text-green-600 font-bold">end-to-end encrypted</span> and routed to the rapid response team.
          </motion.p>
        </div>

        {/* Reference Card */}
        <motion.div
          variants={itemVars}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-white border border-zinc-200 shadow-xl shadow-black/5 p-8 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-green-500" />
          <div className="text-xs text-green-600 font-black uppercase tracking-widest mb-4 flex items-center gap-2">
            <ShieldCheck size={16} />
            Secure Reference Number
          </div>

          <div className="flex items-center justify-between bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <code className="text-3xl font-black tracking-wider text-black">{referenceNumber || '...'}</code>
            <button
              onClick={copyToClipboard}
              className={`p-3 rounded-xl transition-all shadow-sm ${copied ? 'bg-green-500 text-black shadow-green-500/20' : 'bg-white text-zinc-500 hover:text-black hover:shadow-md border border-zinc-200'}`}
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <Check size={24} />
                  </motion.span>
                ) : (
                  <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <Copy size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
          <p className="text-xs font-bold text-zinc-400 mt-6 leading-relaxed uppercase tracking-widest text-center">
            Save this number to track progress anonymously.
          </p>
        </motion.div>

        {/* Informational Grid */}
        <motion.div variants={itemVars} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
          <div className="flex items-start gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
            <Clock className="text-black shrink-0 mt-0.5" size={24} />
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-black">Review Period</h4>
              <p className="text-xs text-zinc-500 font-medium mt-1">Initial assessment typically within <span className="font-bold">24-48 hrs</span>.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
            <MessageSquare className="text-black shrink-0 mt-0.5" size={24} />
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-black">Stay Anonymous</h4>
              <p className="text-xs text-zinc-500 font-medium mt-1">We never expose your tracked IP or local identifying keys.</p>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div variants={itemVars} className="flex flex-col w-full pt-8 gap-4">
          <Link href="/" className="w-full">
            <button className="w-full flex items-center justify-center gap-2 px-6 py-5 rounded-2xl bg-black font-black uppercase tracking-widest text-white hover:bg-zinc-800 transition-colors shadow-xl shadow-black/10 text-xs">
              <Home size={18} />
              Return Home & Clear Session
            </button>
          </Link>
          <button
            onClick={() => window.location.href = "https://google.com"}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-red-200 bg-red-50 text-red-600 font-black uppercase tracking-widest text-xs hover:bg-red-600 hover:text-white transition-colors"
          >
            Quick Exit
          </button>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}