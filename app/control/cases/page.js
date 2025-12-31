"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  AlertCircle,
  ShieldAlert,
  Clock,
  Search,
  SlidersHorizontal,
  Download,
  Plus,
  Bell,
  MoreVertical,
  Eye,
  EyeOff,
} from "lucide-react";

/* ---------- Animation Variants ---------- */
const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVars = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

/* ---------- Sub Components ---------- */

const StatCard = ({ title, value, icon: Icon, colorClass, iconBg }) => (
  <motion.div
    variants={itemVars}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-start flex-1"
  >
    <div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
        {title}
      </p>
      <h3 className="text-3xl font-black text-slate-800">{value}</h3>
    </div>
    <div className={`${iconBg} p-3 rounded-xl`}>
      <Icon className={colorClass} size={24} />
    </div>
  </motion.div>
);

const StatusBadge = ({ level }) => {
  const styles = {
    CRITICAL: "bg-red-100 text-red-700 border-red-200",
    HIGH: "bg-orange-100 text-orange-700 border-orange-200",
    MEDIUM: "bg-yellow-100 text-yellow-700 border-yellow-200",
    LOW: "bg-green-100 text-green-700 border-green-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-[10px] font-black border ${
        styles[level] || styles.LOW
      } flex items-center gap-1.5 w-fit`}
    >
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${level === 'CRITICAL' ? 'bg-red-400' : 'hidden'}`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${level === 'CRITICAL' ? 'bg-red-600' : 'bg-current'}`}></span>
      </span>
      {level}
    </span>
  );
};

/* ---------- Page ---------- */

export default function CaseManagementPage() {
  const [privacyMode, setPrivacyMode] = useState(false);

  const cases = [
    {
      id: "#GBV-2023-894",
      name: "Amina Johnson",
      phone: "+234 803 123 4567",
      location: "Abeokuta South",
      subLoc: "Oke-Ilewo Street",
      date: "Oct 24, 2023 • 14:30",
      risk: "CRITICAL",
    },
    {
      id: "#GBV-2023-892",
      name: "Chinyere Obi",
      phone: "+234 705 555 9012",
      location: "Sagamu",
      subLoc: "Sabo Area",
      date: "Oct 24, 2023 • 09:15",
      risk: "HIGH",
    },
    {
      id: "#GBV-2023-889",
      name: "Funke Adebayo",
      phone: "+234 812 999 3344",
      location: "Ifo",
      subLoc: "Olambe Junction",
      date: "Oct 23, 2023 • 16:45",
      risk: "MEDIUM",
    },
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVars}
      className="p-8 space-y-8 bg-slate-50/50 min-h-screen"
    >
      {/* Header */}
      <motion.header variants={itemVars} className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">
            Case Management
          </h2>
          <p className="text-slate-500 text-sm">Overseeing protection and response activities</p>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setPrivacyMode(!privacyMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
              privacyMode ? "bg-indigo-50 border-indigo-200 text-indigo-600" : "bg-white border-slate-200 text-slate-600"
            }`}
          >
            {privacyMode ? <EyeOff size={18} /> : <Eye size={18} />}
            <span className="text-sm font-bold">{privacyMode ? "Privacy On" : "Privacy Off"}</span>
          </button>

          <motion.div whileHover={{ scale: 1.05 }} className="relative p-2 bg-white rounded-xl border border-slate-200 text-slate-500 cursor-pointer">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold transition-colors"
          >
            <Plus size={20} />
            New Case
          </motion.button>
        </div>
      </motion.header>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Active"
          value="142"
          icon={Briefcase}
          colorClass="text-blue-600"
          iconBg="bg-blue-50"
        />
        <StatCard
          title="High Risk"
          value="18"
          icon={AlertCircle}
          colorClass="text-orange-500"
          iconBg="bg-orange-50"
        />
        <StatCard
          title="Critical"
          value="05"
          icon={ShieldAlert}
          colorClass="text-red-500"
          iconBg="bg-red-50"
        />
        <StatCard
          title="Pending"
          value="24"
          icon={Clock}
          colorClass="text-purple-500"
          iconBg="bg-purple-50"
        />
      </div>

      {/* Main Content Area */}
      <motion.div variants={itemVars} className="space-y-4">
        {/* Toolbar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-wrap justify-between items-center gap-4 shadow-sm">
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
              placeholder="Search cases, names, or locations..."
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-slate-600 text-sm font-bold hover:bg-slate-50 rounded-lg transition-colors">
              <SlidersHorizontal size={16} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-slate-600 text-sm font-bold hover:bg-slate-50 rounded-lg transition-colors">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 border-b border-slate-100">
                <tr className="text-[11px] uppercase tracking-widest font-black text-slate-400">
                  <th className="px-8 py-5">Case ID</th>
                  <th className="px-6 py-5">Victim Identity</th>
                  <th className="px-6 py-5">Location Details</th>
                  <th className="px-6 py-5">Submission Date</th>
                  <th className="px-6 py-5">Risk Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <AnimatePresence>
                  {cases.map((c, idx) => (
                    <motion.tr 
                      key={c.id} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group hover:bg-indigo-50/30 transition-colors"
                    >
                      <td className="px-8 py-5">
                        <span className="font-mono text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded">
                          {c.id}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className={`${privacyMode ? "blur-md select-none" : "blur-0"} transition-all duration-500`}>
                          <p className="font-bold text-slate-800">{c.name}</p>
                          <p className="text-xs text-slate-400">{c.phone}</p>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <p className="font-semibold text-slate-700">{c.location}</p>
                        <p className="text-xs text-slate-400">{c.subLoc}</p>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                           <Clock size={14} className="text-slate-300" />
                           {c.date}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <StatusBadge level={c.risk} />
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="p-2 hover:bg-white rounded-full transition-shadow text-slate-400 hover:text-indigo-600 hover:shadow-sm">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex justify-center">
            <button className="text-xs font-bold text-indigo-600 hover:underline">
              View All 142 Cases
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}