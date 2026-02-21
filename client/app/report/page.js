"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Clock, ShieldAlert, Lock, ArrowRight, User, UploadCloud, MapPin, CheckCircle2, ChevronLeft, StopCircle } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";
import axios from "axios";
import Logo from "@/public/logo.png";

// Environment variables or defaults
const SERVER_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } }
};

export default function ReportStart() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    incidentDate: '',
    mediaUrls: []
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Mock Cloudinary upload delay
      await new Promise(r => setTimeout(r, 1500));

      // API Call to our new backend
      await axios.post(`${SERVER_URL}/api/reports`, {
        ...formData,
        title: formData.title || "Urgent GBV Report",
        incidentDate: formData.incidentDate || new Date().toISOString()
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting report. Please try again or use Emergency contact.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6 selection:bg-green-500/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 md:p-16 rounded-[2rem] shadow-2xl max-w-2xl w-full text-center border border-zinc-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-green-500" />
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}
            className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </motion.div>
          <h2 className="text-4xl font-black text-black mb-4 tracking-tight">Report Secured</h2>
          <p className="text-lg text-zinc-500 mb-8 font-medium">
            Your evidence has been encrypted and directly routed to the Ogun State rapid response unit. Help is on the way.
          </p>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 mb-10 text-left flex gap-4">
            <ShieldCheck className="w-8 h-8 text-green-600 shrink-0" />
            <div>
              <h4 className="font-bold text-black text-sm">Case Reference AI-74291</h4>
              <p className="text-xs text-zinc-500 mt-1">Please save this reference. If you are in immediate physical danger, exit this page immediately to clear your history.</p>
            </div>
          </div>
          <Link href="/">
            <button className="bg-black text-white px-10 py-4 rounded-full font-bold w-full hover:bg-zinc-800 transition-colors">
              Return Home & Clear Session
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-green-500/30 text-black flex flex-col">
      {/* Top Navbar */}
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center z-50 sticky top-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src={Logo} alt="Logo" width={32} height={32} className="bg-white rounded-full p-0.5" />
          <span className="font-black text-sm tracking-widest uppercase">Ogun State <span className="text-green-500">Safe UI</span></span>
        </Link>
        <Link href="/">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-colors">
            <StopCircle size={16} /> Quick Exit
          </button>
        </Link>
      </nav>

      <div className="flex-1 max-w-6xl mx-auto w-full p-6 md:p-12 flex flex-col md:flex-row gap-12">
        {/* Main Content Area */}
        <div className="flex-1 w-full">
          {/* Progress Indicator */}
          <div className="mb-10 flex gap-2">
            {[1, 2].map(i => (
              <div key={i} className={`h-2 flex-1 rounded-full transition-colors duration-500 ${step >= i ? 'bg-green-500' : 'bg-zinc-200'}`} />
            ))}
          </div>

          <h2 className="text-4xl font-black tracking-tight mb-2">Secure Report Submission</h2>
          <p className="text-zinc-500 font-medium mb-12">Providing accurate details helps the AI prioritize your case accurately.</p>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-zinc-100 rounded-xl">
                      <ShieldAlert size={24} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-black">Incident Details</h3>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Step 1 of 2</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="text-xs font-black text-black uppercase tracking-widest mb-2 block">Incident Title</label>
                      <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all font-medium"
                        placeholder="E.g., Domestic Assault, Public Harassment"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-black text-black uppercase tracking-widest mb-2 block flex items-center gap-2"><MapPin size={14} /> Location</label>
                        <input
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full p-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all font-medium"
                          placeholder="Where did it happen?"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-black text-black uppercase tracking-widest mb-2 block flex items-center gap-2"><Clock size={14} /> Date & Time</label>
                        <input
                          name="incidentDate"
                          type="datetime-local"
                          value={formData.incidentDate}
                          onChange={handleChange}
                          className="w-full p-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all font-medium text-zinc-500 uppercase"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-black text-black uppercase tracking-widest mb-2 block">Detailed Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all font-medium resize-none"
                        placeholder="Please provide as much detail as you safely can..."
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleNext}
                    className="bg-black hover:bg-zinc-800 text-white px-10 py-4 rounded-full font-black flex items-center gap-2 transition-all shadow-xl shadow-black/10"
                  >
                    Continue to Evidence <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-zinc-100 rounded-xl">
                      <UploadCloud size={24} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-black">Encrypted Evidence Upload</h3>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Step 2 of 2</p>
                    </div>
                  </div>

                  {/* Simulated Upload Area */}
                  <div className="border-2 border-dashed border-zinc-300 rounded-2xl p-10 text-center hover:bg-zinc-50 hover:border-green-500 transition-colors cursor-pointer group mb-6 flex flex-col items-center justify-center">
                    <div className="bg-white p-4 rounded-full shadow-md mb-4 group-hover:bg-green-50 text-zinc-400 group-hover:text-green-600 transition-colors">
                      <UploadCloud size={32} />
                    </div>
                    <p className="font-bold text-black mb-1">Click to upload or drag files here</p>
                    <p className="text-xs text-zinc-500">Audio, Video, or Images accepted. Files are wiped from your device upon successful transmission to our servers.</p>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex gap-3 text-sm font-medium text-green-900 mb-6">
                    <Lock size={20} className="shrink-0 text-green-600" />
                    <p>All uploads are heavily encrypted using AES-256 state-of-the-art ciphering. Only verified officers and our internal AI risk profiler can decrypt this evidence.</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <button
                    onClick={handleBack}
                    className="text-zinc-500 font-bold hover:text-black flex items-center gap-2 transition-colors px-4 py-2"
                  >
                    <ChevronLeft size={18} /> Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-green-500 hover:bg-green-400 text-black px-12 py-4 rounded-full font-black flex items-center gap-2 transition-all shadow-xl shadow-green-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? "Encrypting & Sending..." : "Submit Secure Report"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info Sidebar */}
        <aside className="w-full md:w-80 space-y-6">
          <div className="bg-black p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -right-6 -top-6 text-zinc-800 opacity-20">
              <ShieldCheck size={120} />
            </div>
            <div className="relative z-10">
              <h4 className="font-black text-xl mb-6 flex items-center gap-3">
                <ShieldCheck className="text-green-500" /> Trust Protocol
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-sm text-green-400 mb-1">Legal Admissibility</h5>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                    Provided evidence instantly receives cryptographic hashing, ensuring court admissibility by verifying its untampered state.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-sm text-green-400 mb-1">Total Anonymity</h5>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                    You do not need to provide personal details. The predictive AI focuses strictly on threat assessment.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-sm text-red-400 mb-1">Danger Trigger</h5>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                    If monitored, hit "Quick Exit". It immediately closes the portal and redirects to Google.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}