"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  MapPin,
  AlertTriangle,
  ShieldAlert,
  User,
  Phone,
  Languages,
  Upload,
  Play,
  FileImage,
  FileDown,
  ChevronLeft,
  Clock,
  History,
} from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const CaseDetailsPage = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen font-sans"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-slate-400 text-xs mb-2 tracking-wide uppercase font-semibold">
            <span>Cases</span> <span className="text-slate-300">/</span> <span>Active</span>{" "}
            <span className="text-slate-300">/</span>{" "}
            <span className="text-sky-600 bg-sky-50 px-2 py-0.5 rounded">#GBV-2023-894</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Case Details</h2>
        </div>
        
        <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center bg-slate-100 p-1.5 rounded-full px-4 group cursor-pointer">
            <span className="text-[10px] font-bold mr-3 text-slate-500 group-hover:text-slate-700 transition-colors">PRIVACY MODE</span>
            <div className="w-10 h-5 bg-emerald-500 rounded-full relative flex items-center px-1">
                <motion.div 
                  layout
                  className="w-3.5 h-3.5 bg-white rounded-full shadow-sm" 
                />
            </div>
          </div>
          <div className="relative p-2 hover:bg-slate-50 rounded-full transition-colors cursor-pointer">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"
            ></motion.div>
            <ShieldAlert size={22} className="text-slate-500" />
          </div>
        </div>
      </motion.div>

      {/* Navigation & Status Bar */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-8">
        <button className="flex items-center gap-2 text-sky-600 text-sm font-bold bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 hover:bg-sky-50 transition-all active:scale-95">
          <ChevronLeft size={18} /> Back to List
        </button>
        
        <div className="ml-auto flex flex-wrap items-center gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-xs text-slate-400 uppercase tracking-tighter">Status</span>
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest flex items-center gap-1.5 shadow-lg shadow-blue-100">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              IN PROGRESS
            </span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <Clock size={16} className="text-slate-400" />
            <span className="text-slate-600">Updated: <span className="font-bold">Oct 24, 14:45</span></span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          
          {/* Incident Report Card */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-sky-500"></div>
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3 font-bold text-slate-800 text-lg">
                <div className="p-2 bg-sky-50 rounded-lg">
                    <FileText className="text-sky-600" size={24} />
                </div>
                Incident Report
              </div>
              <button className="text-sky-600 text-sm font-bold hover:bg-sky-50 px-4 py-2 rounded-lg transition-colors">Edit Report</button>
            </div>
            
            <div className="text-slate-600 text-md leading-relaxed space-y-5">
              <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-slate-800 first-letter:mr-1">
                The victim reported a severe incident of domestic violence occurring at her residence in Abeokuta South. According to the statement, the perpetrator (spouse) returned home intoxicated around 14:00 on Oct 24, 2023.
              </p>
              <p className="bg-slate-50 p-4 rounded-2xl italic border-l-4 border-slate-200">
                "Neighbors intervened after hearing distress calls and contacted the local shelter hotline. The victim sustained visible injuries to the upper arm and facial area."
              </p>
            </div>

            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="mt-8 bg-slate-900 text-white rounded-2xl p-6 shadow-xl shadow-slate-200"
            >
              <p className="text-[10px] font-black text-sky-400 uppercase mb-3 tracking-[0.2em]">Geo-Location Data</p>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-xl">
                    <MapPin className="text-sky-400" size={24} />
                </div>
                <div>
                  <p className="text-lg font-bold">Oke-Ilewo Street, Abeokuta</p>
                  <p className="text-sm text-slate-400 font-mono">LGA: Abeokuta South | 7.1550° N, 3.3480° E</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Evidence Vault Card */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-3 font-bold text-slate-800 text-lg">
                <div className="p-2 bg-indigo-50 rounded-lg">
                    <Upload className="text-indigo-600" size={24} />
                </div>
                Evidence Vault
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-slate-200"
              >
                <Upload size={18} /> Add Evidence
              </motion.button>
            </div>

            <div className="flex gap-8 border-b border-slate-100 mb-8 overflow-x-auto">
              <Tab label="Images (3)" active />
              <Tab label="Audio (1)" />
              <Tab label="Documents (2)" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <EvidenceThumbnail label="Injury_LeftArm.jpg" />
              <EvidenceThumbnail label="Scene_LivingRoom.jpg" />
              <EvidenceThumbnail label="Medical_Report.jpg" />
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-xl bg-sky-600 flex items-center justify-center text-white cursor-pointer shadow-lg shadow-sky-100"
              >
                <Play size={20} fill="currentColor" />
              </motion.div>
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700">Witness_Account_01.mp3</span>
                  <span className="text-xs text-slate-400 font-bold">02:14</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full w-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "33%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-sky-500"
                  ></motion.div>
                </div>
              </div>
              <button className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400">
                <FileDown size={22} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          
          {/* AI Risk Analysis */}
          <motion.div 
            variants={itemVariants} 
            className="bg-white rounded-3xl border-t-8 border-t-orange-500 border border-slate-200 shadow-xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-orange-500 p-2 rounded-xl shadow-lg shadow-orange-100">
                <ShieldAlert size={20} className="text-white" />
              </div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">AI Intelligence</h3>
            </div>

            <div className="flex justify-between items-center bg-red-50 p-5 rounded-2xl mb-8 border border-red-100">
              <span className="text-sm font-bold text-red-900">Risk Assessment</span>
              <motion.span 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="bg-red-600 text-white text-[10px] px-4 py-1.5 rounded-full font-black flex items-center gap-2"
              >
                <AlertTriangle size={14} /> CRITICAL
              </motion.span>
            </div>

            <p className="text-[10px] font-black text-slate-400 uppercase mb-6 tracking-widest">Risk Indicators</p>
            <div className="space-y-4 mb-8">
              <RiskIndicator text="History of escalating violence" />
              <RiskIndicator text="Weapon involved (Blunt object)" />
              <RiskIndicator text="Perpetrator access to victim" />
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex gap-4">
              <ShieldAlert className="text-orange-600 shrink-0" size={24} />
              <p className="text-xs text-orange-950 font-medium leading-relaxed">
                <span className="font-black block mb-1">IMMEDIATE ACTION:</span> 
                Separation recommended. Escalation probability: <span className="font-black text-red-600">85%</span>.
              </p>
            </div>
          </motion.div>

          {/* Victim Details Card */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-8 text-slate-800">
              <div className="p-2 bg-slate-100 rounded-lg"><User size={20} /></div>
              <h3 className="text-sm font-black uppercase tracking-widest">Victim Profile</h3>
            </div>

            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center border-2 border-white shadow-inner">
                <User size={32} className="text-slate-400" />
              </div>
              <div>
                <h4 className="font-black text-xl text-slate-900">Amina Johnson</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Age 32 • Female</p>
              </div>
            </div>

            <div className="space-y-4">
              <DetailItem label="Secure Line" value="+234 803 123 ****" icon={<Phone size={14} />} />
              <DetailItem label="Languages" value="Yoruba, English" icon={<Languages size={14} />} />
              <DetailItem label="Jurisdiction" value="Abeokuta South" />
            </div>
          </motion.div>

          {/* Actions Card */}
          <motion.div variants={itemVariants} className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl shadow-slate-300">
            <div className="flex items-center gap-3 mb-6">
                <History size={20} className="text-sky-400" />
                <h3 className="text-xs font-black uppercase tracking-widest">Operations</h3>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#0ea5e9" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-sky-600 text-white font-black py-4 rounded-2xl text-sm transition-all shadow-xl shadow-sky-900/20"
            >
              Update Case Status
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Refined Sub-Components ---

const Tab = ({ label, active = false }) => (
  <div className={`pb-4 px-2 text-xs font-black cursor-pointer border-b-2 transition-all relative ${
    active ? 'border-sky-500 text-sky-600' : 'border-transparent text-slate-400 hover:text-slate-600'
  }`}>
    {label}
    {active && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500" />}
  </div>
);

const EvidenceThumbnail = ({ label }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group cursor-pointer"
  >
    <div className="aspect-[4/3] bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center overflow-hidden transition-all group-hover:border-sky-200 group-hover:bg-sky-50/30">
      <FileImage size={32} className="text-slate-300 group-hover:text-sky-400 transition-colors" />
      <span className="mt-2 text-[10px] font-bold text-slate-400 group-hover:text-sky-600">PREVIEW</span>
    </div>
    <div className="mt-3 bg-white border border-slate-100 text-slate-700 text-[10px] px-3 py-2 rounded-xl truncate font-bold shadow-sm">{label}</div>
  </motion.div>
);

const RiskIndicator = ({ text }) => (
  <motion.div initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="flex items-center gap-3">
    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
    </div>
    <span className="text-xs text-slate-700 font-bold">{text}</span>
  </motion.div>
);

const DetailItem = ({ label, value, icon }) => (
  <div className="group">
    <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest group-hover:text-sky-600 transition-colors">{label}</p>
    <div className="bg-slate-50 p-3 rounded-2xl flex items-center justify-between border border-transparent group-hover:border-sky-100 group-hover:bg-white transition-all shadow-sm">
      <span className="text-xs font-black text-slate-800">{value}</span>
      {icon && <span className="text-slate-400 group-hover:text-sky-500">{icon}</span>}
    </div>
  </div>
);

export default CaseDetailsPage;