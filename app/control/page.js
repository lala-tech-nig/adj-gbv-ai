"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  AlertCircle,
  Clock,
  TrendingUp,
  Plus,
  Bell,
  EyeOff,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

/* ------------------ Animation Variants ------------------ */

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

/* ------------------ Reusable Components ------------------ */

const StatCard = ({ title, value, icon: Icon, trend, trendColor, subtext, iconBg }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          {title}
        </p>
        <motion.h3 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-3xl font-black text-slate-800 mt-1"
        >
          {value}
        </motion.h3>
      </div>
      <div className={`p-3 rounded-xl ${iconBg} bg-opacity-50`}>
        <Icon size={22} className={trendColor} />
      </div>
    </div>

    <div className="flex items-center space-x-2 bg-slate-50 w-fit px-2 py-1 rounded-lg">
      <TrendingUp size={14} className={trendColor} />
      <p className={`text-xs font-bold ${trendColor}`}>{trend}</p>
      <p className="text-[10px] text-slate-400 font-medium">{subtext}</p>
    </div>
  </motion.div>
);

const CriticalRow = ({ name, id, tag, tagBg, tagText, action }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ x: 5 }}
    className="flex items-center justify-between p-4 border border-slate-50 rounded-2xl hover:bg-slate-50/80 transition-all group"
  >
    <div className="flex items-center space-x-4">
      <div className="relative">
        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-slate-100 to-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">
          {name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
      </div>
      <div>
        <p className="text-sm font-bold text-slate-800">{name}</p>
        <p className="text-[10px] text-slate-400 font-mono tracking-tighter">CASE: {id}</p>
      </div>
    </div>

    <div className="hidden sm:block">
      <div className={`px-3 py-1 rounded-full ${tagBg} ${tagText} text-[10px] font-bold uppercase tracking-tighter`}>
        {tag}
      </div>
    </div>

    <button className="flex items-center gap-1 bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:border-sky-400 hover:text-sky-500 transition-colors shadow-sm">
      {action}
      <ChevronRight size={14} />
    </button>
  </motion.div>
);

const LocationBar = ({ label, count, width, color = "bg-sky-400" }) => (
  <div className="group">
    <div className="flex justify-between text-[11px] mb-2">
      <span className="text-slate-700 font-bold group-hover:text-sky-600 transition-colors">{label}</span>
      <span className="text-slate-400 font-medium">{count} incidents</span>
    </div>
    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${color} rounded-full`}
      />
    </div>
  </div>
);

/* ------------------ Page ------------------ */

export default function DashboardPage() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="max-w-7xl mx-auto p-6 lg:p-10 text-slate-900"
    >
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <motion.h2 variants={fadeInUp} className="text-3xl font-black tracking-tight text-slate-900">
            Case Command Center
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-sm font-medium">
            Welcome back, Admin. Here is what’s happening today.
          </motion.p>
        </div>

        <motion.div variants={fadeInUp} className="flex items-center space-x-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <EyeOff size={18} className="mr-2" />
            Privacy
          </button>
          
          <div className="relative p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-sky-500 cursor-pointer transition-colors">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white ring-2 ring-red-100" />
          </div>

          <button className="flex-1 md:flex-none bg-sky-500 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-200 text-white px-6 py-2.5 rounded-xl flex items-center justify-center space-x-2 text-sm font-bold transition-all transform active:scale-95">
            <Plus size={20} />
            <span>New Case</span>
          </button>
        </motion.div>
      </header>

      {/* Stats Grid */}
      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
      >
        <StatCard title="Active Cases" value="142" icon={Briefcase} trend="+12.5%" trendColor="text-emerald-500" subtext="vs last month" iconBg="bg-blue-100" />
        <StatCard title="High Risk" value="18" icon={AlertCircle} trend="Stable" trendColor="text-orange-500" subtext="No increase" iconBg="bg-orange-100" />
        <StatCard title="Critical" value="05" icon={AlertCircle} trend="3 New" trendColor="text-red-500" subtext="Immediate action" iconBg="bg-red-100" />
        <StatCard title="Pending" value="24" icon={Clock} trend="5 Late" trendColor="text-purple-500" subtext="Over 48h" iconBg="bg-purple-100" />
      </motion.div>

      {/* Middle Visuals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h4 className="font-black text-xl text-slate-800">Reporting Volume</h4>
              <p className="text-xs font-medium text-slate-400 tracking-wide uppercase">Incidents recorded per month</p>
            </div>
            <div className="flex gap-2">
              {['7D', '1M', '6M'].map(t => (
                <button key={t} className={`px-3 py-1 text-[10px] font-bold rounded-lg ${t === '6M' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-400'}`}>{t}</button>
              ))}
            </div>
          </div>
          
          {/* Animated Bar Chart Placeholder */}
          <div className="h-56 flex items-end justify-between gap-4 relative">
             {[40, 70, 45, 90, 65, 80].map((h, i) => (
               <div key={i} className="flex-1 flex flex-col items-center gap-3">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="w-full max-w-[40px] bg-gradient-to-t from-sky-500 to-sky-300 rounded-t-xl hover:to-sky-200 transition-all cursor-pointer relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}k
                    </div>
                  </motion.div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    {["May", "Jun", "Jul", "Aug", "Sep", "Oct"][i]}
                  </span>
               </div>
             ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-xl mb-1">Risk Profile</h4>
            <p className="text-slate-400 text-xs mb-8">System-wide severity distribution</p>
            
            <div className="space-y-6">
              {[
                { label: "Critical", val: "15%", color: "bg-red-500" },
                { label: "High Risk", val: "30%", color: "bg-orange-400" },
                { label: "Standard", val: "55%", color: "bg-sky-400" }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span>{item.label}</span>
                    <span className="text-slate-400">{item.val}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: item.val }}
                      transition={{ duration: 1, delay: 0.5 + (idx * 0.2) }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <ArrowUpRight className="text-emerald-400" size={18} />
              </div>
              <p className="text-xs text-slate-300">Case resolution efficiency is up <span className="text-white font-bold">14%</span> this week.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-black text-xl flex items-center gap-3">
              <div className="w-2 h-6 bg-red-500 rounded-full" />
              Urgent Response Required
            </h4>
            <button className="text-sky-500 text-xs font-bold hover:bg-sky-50 px-3 py-1.5 rounded-lg transition-colors">
              VIEW QUEUE
            </button>
          </div>

          <motion.div variants={staggerContainer} className="space-y-3">
            <CriticalRow name="Amina Johnson" id="GBV-894" tag="Immediate Risk" tagBg="bg-red-50" tagText="text-red-600" action="Review" />
            <CriticalRow name="B. Okoro" id="GBV-881" tag="Shelter Needed" tagBg="bg-orange-50" tagText="text-orange-600" action="Assign" />
            <CriticalRow name="S. Adeyemi" id="GBV-865" tag="Medical Aid" tagBg="bg-pink-50" tagText="text-pink-600" action="Dispatch" />
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h4 className="font-black text-xl mb-8">Hotspot Analysis</h4>
          <div className="space-y-6">
            <LocationBar label="Abeokuta South" count="45" width="90%" color="bg-indigo-500" />
            <LocationBar label="Ado-Odo/Ota" count="32" width="65%" color="bg-sky-500" />
            <LocationBar label="Sagamu" count="28" width="55%" color="bg-teal-500" />
            <LocationBar label="Ijebu Ode" count="15" width="30%" color="bg-blue-400" />
            <LocationBar label="Ifo" count="10" width="20%" color="bg-slate-300" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}