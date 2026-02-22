"use client";

import React from "react";
import { motion } from "framer-motion";
import MainLayout from '@/app/components/MainLayout';
import { Sun, Sunrise, Moon, Phone, MessageSquare, ShieldCheck, AlertCircle, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useReportContext } from "../ReportContext";
import { useRouter } from "next/navigation";

const steps = [
  { id: 1, name: "Personal Info" },
  { id: 2, name: "Incident" },
  { id: 3, name: "Evidence" },
  { id: 4, name: "Safety" },
  { id: 5, name: "Review" },
  { id: 6, name: "Submit" }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SafetyPreferences() {
  const { formData, updateFormData } = useReportContext();
  const router = useRouter();

  const handleNext = () => {
    router.push('/report/page5');
  };

  return (
    <MainLayout steps={steps} currentStep={4} title="Safety Preferences">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 pb-20"
      >
        {/* Header Section */}
        <motion.section variants={fadeInUp} className="mb-10 text-center md:text-left">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <div className="p-2 bg-green-500 rounded-lg">
              <ShieldCheck className="text-black w-6 h-6" />
            </div>
            <span className="text-sm font-black text-black uppercase tracking-widest">Secure Communication</span>
          </div>
          <p className="text-lg text-zinc-500 font-medium max-w-2xl">
            Your safety is our priority. Choose how and when you feel most comfortable speaking with our specialized team.
          </p>
        </motion.section>

        {/* Time Slot Selection */}
        <motion.section variants={fadeInUp} className="mb-10">
          <h3 className="text-xs font-black text-black uppercase mb-4 tracking-widest">Best time to reach you</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: "morning", label: "Morning", time: "8am – 12pm", icon: Sun },
              { id: "afternoon", label: "Afternoon", time: "12pm – 4pm", icon: Sunrise },
              { id: "evening", label: "Evening", time: "4pm – 8pm", icon: Moon },
            ].map((slot) => {
              const Icon = slot.icon;
              const isActive = formData.timeSlot === slot.id;
              return (
                <motion.button
                  key={slot.id}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => updateFormData({ timeSlot: slot.id })}
                  className={`relative p-8 rounded-3xl border-2 text-left transition-all duration-300 ${isActive
                      ? "border-green-500 bg-green-50/50 shadow-xl shadow-green-500/20"
                      : "border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg"
                    }`}
                >
                  <Icon className={`w-8 h-8 mb-4 ${isActive ? "text-green-600" : "text-zinc-400"}`} />
                  <div className={`font-black text-lg ${isActive ? "text-black" : "text-zinc-600"}`}>{slot.label}</div>
                  <div className="text-sm font-bold mt-1 text-zinc-400">{slot.time}</div>
                </motion.button>
              );
            })}
          </div>
        </motion.section>

        {/* Contact Method Selection */}
        <motion.section variants={fadeInUp} className="mb-10">
          <h3 className="text-xs font-black text-black uppercase mb-4 tracking-widest">Communication Channel</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { id: "phone", label: "Phone Call", icon: Phone },
              { id: "sms", label: "Text Message", icon: MessageSquare },
            ].map((method) => {
              const isActive = formData.contactMethod === method.id;
              return (
                <motion.button
                  key={method.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => updateFormData({ contactMethod: method.id })}
                  className={`px-8 py-4 rounded-xl border-2 flex items-center gap-3 font-black text-sm uppercase tracking-widest transition-all ${isActive
                      ? "bg-black border-black text-white shadow-xl shadow-black/20"
                      : "bg-white border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-black"
                    }`}
                >
                  {method.icon && <method.icon size={18} />} {method.label}
                </motion.button>
              );
            })}
          </div>
        </motion.section>

        {/* Discreet Notice Card */}
        <motion.section variants={fadeInUp} className="mb-12">
          <motion.label
            className={`flex items-start gap-4 p-8 rounded-3xl border-2 cursor-pointer transition-all ${formData.noPriorNotice ? "border-green-500 bg-green-50/50" : "border-zinc-200 bg-white hover:bg-zinc-50"
              }`}
          >
            <div className="relative flex items-center h-6 mt-1">
              <input
                type="checkbox"
                checked={formData.noPriorNotice}
                onChange={() => updateFormData({ noPriorNotice: !formData.noPriorNotice })}
                className="w-6 h-6 rounded text-green-500 border-zinc-300 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <div className="font-black text-black flex items-center gap-3 text-lg">
                Do not call without prior notice
                <AlertCircle size={20} className="text-zinc-400" />
              </div>
              <p className="text-zinc-500 font-medium mt-2 leading-relaxed">
                We will send a discreet, neutral message first to confirm it is safe to
                talk. Our team will never identify as a safety service in the initial text.
              </p>
            </div>
          </motion.label>
        </motion.section>

        {/* Navigation Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <Link href="/report/page3" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 rounded-xl border border-zinc-200 font-black text-zinc-500 hover:bg-zinc-100 hover:text-black transition-all uppercase tracking-widest text-xs">
              <ChevronLeft size={18} /> Back
            </button>
          </Link>
          <button
            onClick={handleNext}
            className="w-full sm:w-auto bg-black hover:bg-zinc-800 text-white px-10 py-4 rounded-xl font-black shadow-xl shadow-black/10 flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-xs group"
          >
            Continue <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}