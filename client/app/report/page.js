"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/app/components/MainLayout';
import { ShieldCheck, Clock, ShieldAlert, Lock, ArrowRight, User, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useReportContext } from './ReportContext';
import { useRouter } from 'next/navigation';

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
  const { formData, updateFormData } = useReportContext();
  const router = useRouter();

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const [isLocating, setIsLocating] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    router.push('/report/page2');
  };

  const handleAutoLocate = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Use OpenStreetMap Nominatim for free reverse geocoding
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          if (data && data.display_name) {
            updateFormData({ address: data.display_name, location: data.display_name });
          } else {
            // Fallback to coordinates
            updateFormData({ address: `${latitude}, ${longitude}`, location: `${latitude}, ${longitude}` });
          }
        } catch (err) {
          console.error("Reverse geocoding failed", err);
          updateFormData({ address: `${latitude}, ${longitude}`, location: `${latitude}, ${longitude}` });
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        console.error("Geolocation error", error);
        alert("Unable to retrieve your location. Please check your permissions.");
        setIsLocating(false);
      }
    );
  };

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
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-zinc-100 rounded-xl">
                <User size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-xl font-black text-black">Your Details</h3>
                <p className="text-sm font-bold text-zinc-400 mt-1 uppercase tracking-widest">Optional Contact Info</p>
              </div>
            </div>

            <form onSubmit={handleNext}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'First name', name: 'firstName', type: 'text' },
                  { label: 'Last name', name: 'lastName', type: 'text' },
                  { label: 'Phone', name: 'phone', type: 'tel' },
                  { label: 'Email', name: 'email', type: 'email' }
                ].map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label className="text-xs font-black text-black uppercase tracking-widest">{field.label}</label>
                    <input
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      type={field.type}
                      className="w-full p-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all font-medium"
                      placeholder={`${field.label} (optional)`}
                    />
                  </div>
                ))}

                {/* Specific Address Field with Auto-Location */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black text-black uppercase tracking-widest">Address / Location</label>
                  <div className="relative">
                    <input
                      name="address"
                      value={formData.address || ''}
                      onChange={handleChange}
                      type="text"
                      className="w-full p-4 pr-32 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all font-medium"
                      placeholder="Address (optional)"
                    />
                    <button
                      type="button"
                      onClick={handleAutoLocate}
                      disabled={isLocating}
                      className={`absolute right-2 top-2 bottom-2 px-4 rounded-lg font-bold text-xs flex items-center gap-2 transition-colors ${isLocating ? 'bg-zinc-200 text-zinc-500' : 'bg-black text-white hover:bg-zinc-800'}`}
                    >
                      <MapPin size={14} />
                      {isLocating ? 'Locating...' : 'Auto Pick'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                <Lock size={18} className="text-green-600 shrink-0" />
                <p className="text-xs font-bold text-green-900 leading-relaxed">Identity protection is active. Any details provided are AES-256 encrypted and strictly uncoupled from your IP.</p>
              </div>

              {/* Navigation Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10">
                <Link href="/" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ x: -4 }}
                    className="w-full px-8 py-4 rounded-xl border border-zinc-200 font-black text-zinc-500 hover:bg-zinc-100 transition-colors uppercase tracking-widest text-xs"
                    type="button"
                  >
                    Cancel Draft
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full sm:w-auto bg-black hover:bg-zinc-800 text-white px-10 py-4 rounded-xl font-black shadow-xl shadow-black/10 flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-xs"
                >
                  Continue <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

        </div>

        {/* Sidebar */}
        <motion.aside
          variants={itemVariants}
          className="space-y-6"
        >
          <div className="bg-black p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-6 -top-6 text-zinc-800 opacity-20">
              <ShieldCheck size={120} />
            </div>
            <div className="relative z-10">
              <h4 className="font-black text-lg mb-6 flex items-center gap-2">
                <ShieldCheck className="text-green-500" /> Auto-Save Active
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-sm text-green-400 mb-1">Local Draft</h5>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">Your progress is saved securely on this device. If you close the tab, you can return within 1 hour to continue.</p>
                </div>
                <div>
                  <h5 className="font-bold text-sm text-green-400 mb-1">Auto-Submission</h5>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">If inactive for 1 hour, your draft will securely auto-submit to preserve evidence before wiping local data.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </MainLayout>
  );
}