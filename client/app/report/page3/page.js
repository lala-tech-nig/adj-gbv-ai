"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/app/components/MainLayout';
import { ShieldCheck, Clock, ShieldAlert, ChevronRight, Mic, Lock, UploadCloud, ChevronLeft, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useReportContext } from '../ReportContext';
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
  const { formData, updateFormData } = useReportContext();
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const SERVER_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const formDataPayload = new FormData();
    for (let i = 0; i < files.length; i++) {
      formDataPayload.append('images', files[i]);
    }

    try {
      const res = await axios.post(`${SERVER_URL}/api/reports/upload-evidence`, formDataPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Append new URLs to the context state
      const newUrls = res.data.urls || [];
      updateFormData({ mediaUrls: [...formData.mediaUrls, ...newUrls] });
    } catch (err) {
      console.error("Upload failed", err);
      alert("Failed to upload evidence. Please try again or skip.");
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = (indexToRemove) => {
    const updated = formData.mediaUrls.filter((_, idx) => idx !== indexToRemove);
    updateFormData({ mediaUrls: updated });
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioFile = new File([audioBlob], `voice-note-${Date.now()}.webm`, { type: 'audio/webm' });

        setIsUploading(true);
        const formDataPayload = new FormData();
        formDataPayload.append('images', audioFile);

        try {
          const res = await axios.post(`${SERVER_URL}/api/reports/upload-evidence`, formDataPayload, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          const newUrls = res.data.urls || [];
          // Need to fetch fresh state or trust the local append since it's async context.
          updateFormData(prev => ({ mediaUrls: [...(prev?.mediaUrls || formData.mediaUrls), ...newUrls] }));
        } catch (err) {
          console.error("Audio upload failed", err);
          alert("Failed to upload audio evidence. Please try again.");
        } finally {
          setIsUploading(false);
        }

        // Stop the microphone tracks to clear the recording dot on browser
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Microphone access is required to record voice notes. Please check your browser permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleNext = () => {
    router.push('/report/page4');
  };

  return (
    <MainLayout steps={steps} currentStep={3} title="Evidence Upload">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Main Upload Area */}
        <div className="lg:col-span-2 space-y-6">

          <motion.div
            variants={itemVariants}
            className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 flex items-center gap-4 w-full shadow-sm"
          >
            <div className="bg-green-500 p-3 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
              <Lock className="text-black" size={24} />
            </div>
            <p className="text-black text-sm">
              <span className="font-black block text-base">End-to-end Encrypted Uploads</span>
              <span className="text-zinc-500 font-bold">Your privacy is our priority. Files are encrypted before they leave your device and stripped of metadata.</span>
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black flex items-center gap-3">
                <div className="p-2 bg-zinc-100 rounded-xl">
                  <UploadCloud size={20} className="text-black" />
                </div>
                Attach Evidence
              </h3>
              <span className="text-xs font-bold bg-zinc-100 px-3 py-1.5 rounded-full text-zinc-500 uppercase tracking-widest">Optional</span>
            </div>

            {/* Custom File Upload UI */}
            <div className="border-2 border-dashed border-zinc-300 bg-zinc-50 rounded-2xl p-10 text-center hover:bg-zinc-100 hover:border-green-500 transition-colors cursor-pointer group mb-6 flex flex-col items-center justify-center relative">
              <input
                type="file"
                multiple
                accept="image/*,video/*,audio/*"
                onChange={handleFileUpload}
                disabled={isUploading}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
              />
              <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:bg-green-500 text-zinc-400 group-hover:text-black transition-colors">
                <UploadCloud size={32} />
              </div>
              <p className="font-black text-black mb-1 text-lg">
                {isUploading ? "Encrypting & Uploading..." : "Click to upload or drag files here"}
              </p>
              <p className="text-xs font-bold text-zinc-500">Audio, Video, or Images accepted. Files are wiped securely.</p>
            </div>

            {/* Uploaded Files Preview */}
            {formData.mediaUrls.length > 0 && (
              <div className="mt-8">
                <h4 className="font-black text-sm uppercase tracking-widest text-zinc-400 mb-4">Secured Files</h4>
                <div className="space-y-3">
                  {formData.mediaUrls.map((url, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-green-500/30 bg-green-50/50 rounded-xl">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <Check className="text-green-600 shrink-0" size={16} />
                        <span className="text-xs font-bold text-green-900 truncate">encrypted_evidence_{idx + 1}.dat</span>
                      </div>
                      <button onClick={() => removeFile(idx)} className="p-2 hover:bg-red-100 text-red-500 rounded-lg transition-colors">
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="border border-zinc-200 rounded-3xl p-8 bg-black text-white transition-colors"
          >
            <div className="flex gap-4">
              <div className="bg-zinc-800 p-4 rounded-full h-fit">
                <Mic className="text-green-500" size={24} />
              </div>
              <div>
                <h4 className="font-black text-lg mb-1">Record Voice Note</h4>
                <p className="text-sm text-zinc-400 font-medium mb-4 leading-relaxed">
                  If typing is difficult, you can speak your story directly. Your voice is a powerful form of evidence.
                </p>
                {isRecording ? (
                  <button
                    onClick={stopRecording}
                    className="text-red-500 font-bold text-sm hover:underline flex items-center gap-2 uppercase tracking-widest animate-pulse"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    Stop & Secure Audio
                  </button>
                ) : (
                  <button
                    onClick={startRecording}
                    disabled={isUploading}
                    className={`text-green-400 font-bold text-sm hover:underline flex items-center gap-1 uppercase tracking-widest ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Start Recording <ChevronRight size={14} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Footer Actions */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-center justify-between pt-8 gap-4"
          >
            <Link href="/report/page2">
              <button className="px-8 py-4 rounded-xl border border-zinc-200 font-black text-zinc-500 hover:bg-zinc-100 hover:text-black transition-all uppercase tracking-widest text-xs flex items-center gap-2">
                <ChevronLeft size={18} /> Back
              </button>
            </Link>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button onClick={handleNext} className="text-xs font-black text-zinc-400 hover:text-black transition-colors uppercase tracking-widest">
                Skip for now
              </button>
              <button
                onClick={handleNext}
                className="w-full sm:w-auto bg-black hover:bg-zinc-800 text-white px-10 py-4 rounded-xl font-black flex items-center justify-center gap-2 shadow-xl shadow-black/10 transition-all uppercase tracking-widest text-xs group"
              >
                Continue <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Sidebar Info */}
        <motion.aside variants={itemVariants} className="space-y-6">
          <div className="bg-black rounded-3xl p-8 shadow-xl relative overflow-hidden text-white">
            <div className="absolute -top-10 -right-10 opacity-20">
              <ShieldCheck size={140} className="text-green-500" />
            </div>

            <h3 className="font-black text-xl mb-6 relative z-10 text-white flex items-center gap-3">
              <ShieldCheck className="text-green-500" /> Trust Protocol
            </h3>

            <div className="space-y-6 relative z-10">
              <div className="flex gap-3">
                <ShieldCheck className="text-green-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="font-bold text-sm text-green-400">Legal Support</h5>
                  <p className="text-xs text-zinc-400 font-medium">Digital evidence can be crucial for legal proceedings.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="text-green-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="font-bold text-sm text-green-400">Timeline Verification</h5>
                  <p className="text-xs text-zinc-400 font-medium">Metadata preserves timestamps to verify when incidents occurred.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <ShieldAlert className="text-green-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="font-bold text-sm text-green-400">Safety First</h5>
                  <p className="text-xs text-zinc-400 font-medium">Uploading here allows you to safely delete files from your phone.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </MainLayout>
  );
}