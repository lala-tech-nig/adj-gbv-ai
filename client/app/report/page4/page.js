"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from '@/app/components/MainLayout';
import { Sun, Sunrise, Moon, Phone, MessageSquare, ShieldCheck, AlertCircle } from "lucide-react";
import Link from "next/link";

const steps = [
  { id: 1, name: "Personal Info" },
  { id: 2, name: "Incident Details" },
  { id: 3, name: "Evidence" },
  { id: 4, name: "Review" },
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
  const [timeSlot, setTimeSlot] = useState("morning");
  const [contactMethod, setContactMethod] = useState("phone");
  const [noPriorNotice, setNoPriorNotice] = useState(false);

  return (
    <MainLayout steps={steps} currentStep={3} title="Safety Preferences">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 pb-20"
      >
        {/* Header Section */}
        <motion.section variants={fadeInUp} className="mb-10 text-center md:text-left">
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            <ShieldCheck className="text-green-600 w-6 h-6" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Secure Communication</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Safety Preferences</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Your safety is our priority. Choose how and when you feel most comfortable speaking with our specialized team.
          </p>
        </motion.section>

        {/* Time Slot Selection */}
        <motion.section variants={fadeInUp} className="mb-10">
          <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-widest">Best time to reach you</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: "morning", label: "Morning", time: "8am – 12pm", icon: Sun, color: "text-orange-500" },
              { id: "afternoon", label: "Afternoon", time: "12pm – 4pm", icon: Sunrise, color: "text-yellow-500" },
              { id: "evening", label: "Evening", time: "4pm – 8pm", icon: Moon, color: "text-indigo-500" },
            ].map((slot) => {
              const Icon = slot.icon;
              const isActive = timeSlot === slot.id;
              return (
                <motion.button
                  key={slot.id}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setTimeSlot(slot.id)}
                  className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                    isActive 
                      ? "border-blue-600 bg-blue-50/50 shadow-md ring-1 ring-blue-600" 
                      : "border-gray-100 bg-white hover:border-gray-300 shadow-sm"
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-4 ${isActive ? slot.color : "text-gray-400"}`} />
                  <div className={`font-bold text-lg ${isActive ? "text-blue-900" : "text-gray-700"}`}>{slot.label}</div>
                  <div className="text-sm text-gray-400">{slot.time}</div>
                  {isActive && (
                    <motion.div 
                      layoutId="activeGlow" 
                      className="absolute inset-0 rounded-2xl bg-blue-400/5 -z-10"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.section>

        {/* Contact Method Selection */}
        <motion.section variants={fadeInUp} className="mb-10">
          <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-widest">Communication Channel</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { id: "phone", label: "Phone Call", icon: Phone },
              { id: "sms", label: "Text Message (SMS)", icon: MessageSquare },
              { id: "whatsapp", label: "WhatsApp", icon: null },
            ].map((method) => (
              <motion.button
                key={method.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setContactMethod(method.id)}
                className={`px-6 py-3 rounded-full border-2 flex items-center gap-2 font-medium transition-all ${
                  contactMethod === method.id
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-400"
                }`}
              >
                {method.icon && <method.icon size={18} />} {method.label}
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Discreet Notice Card */}
        <motion.section variants={fadeInUp} className="mb-12">
          <motion.label 
            whileHover={{ backgroundColor: "rgba(255, 247, 237, 1)" }}
            className={`flex items-start gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all ${
              noPriorNotice ? "border-orange-300 bg-orange-50/80 shadow-inner" : "border-gray-100 bg-gray-50/30"
            }`}
          >
            <div className="relative flex items-center h-6">
              <input
                type="checkbox"
                checked={noPriorNotice}
                onChange={() => setNoPriorNotice(!noPriorNotice)}
                className="w-5 h-5 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
              />
            </div>
            <div>
              <div className="font-bold text-gray-900 flex items-center gap-2">
                Do not call me without prior notice
                <AlertCircle size={16} className="text-orange-500" />
              </div>
              <p className="text-gray-500 mt-1 leading-relaxed">
                We will send a discreet, neutral message first to confirm it is safe to
                talk. Our team will never identify as a safety service in the initial text.
              </p>
            </div>
          </motion.label>
        </motion.section>

        {/* Navigation Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-8">
          <Link href="/report/page3" className="w-full sm:w-auto">
            <button className="w-full px-8 py-3 rounded-xl font-semibold text-gray-600 hover:bg-gray-100 transition-colors">
              Back
            </button>
          </Link>
          <Link href="/report/page5" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-12 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-colors"
            >
              Save & Continue
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}