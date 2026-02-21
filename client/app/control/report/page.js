"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Download,
  Calendar,
  MapPin,
  AlertTriangle,
  FileText,
  BarChart3,
  Clock,
  CheckCircle,
  MoreHorizontal,
  FileSpreadsheet,
  FileIcon,
  TrendingUp,
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function ReportsDashboardPage() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="p-4 md:p-8 space-y-8 bg-slate-50/50 min-h-screen"
    >
      {/* Header */}
      <motion.header variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Reports & Analytics</h2>
          <p className="text-slate-500 text-sm">Monitor performance and generate detailed insights.</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="hidden sm:flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Privacy Mode</span>
            <button className="w-8 h-4 bg-slate-200 rounded-full relative transition-colors hover:bg-cyan-100">
              <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm border border-slate-100" />
            </button>
          </div>

          <div className="relative p-2 bg-white rounded-full border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
            <Bell size={18} className="text-slate-600" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-cyan-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-cyan-200 hover:bg-cyan-700 transition-all"
          >
            <Download size={16} /> Export Data
          </motion.button>
        </div>
      </motion.header>

      {/* Generate Report Section */}
      <motion.section 
        variants={fadeInUp}
        className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-50 rounded-lg text-cyan-600">
              <BarChart3 size={20} />
            </div>
            <h3 className="font-bold text-slate-800">Generate Custom Report</h3>
          </div>
          <button className="text-xs text-cyan-600 font-bold hover:underline underline-offset-4">
            Reset Filters
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <FilterSelect label="DATE RANGE" icon={<Calendar size={14} />} value="Last 30 Days" />
          <FilterSelect label="LGA / LOCATION" icon={<MapPin size={14} />} value="All Locations" />
          <FilterSelect label="RISK LEVEL" icon={<AlertTriangle size={14} />} value="All Levels" />
          <FilterSelect label="CASE STATUS" icon={<FileText size={14} />} value="All Statuses" />
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-4 items-center">
          <button className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">
            Save as Preset
          </button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-slate-900 text-white px-10 py-3 rounded-xl text-sm font-bold shadow-xl shadow-slate-200"
          >
            Generate Report
          </motion.button>
        </div>
      </motion.section>

      {/* Charts & KPIs */}
      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-1 xl:grid-cols-12 gap-8"
      >
        {/* Incident Trends */}
        <motion.div variants={fadeInUp} className="xl:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-slate-800">Incident Trends</h3>
                <span className="flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold">
                  <TrendingUp size={10} /> +12.5%
                </span>
              </div>
              <p className="text-xs text-slate-400">Monthly case volume analysis</p>
            </div>
            <button className="p-1 hover:bg-slate-50 rounded">
              <MoreHorizontal size={20} className="text-slate-400" />
            </button>
          </div>

          <div className="flex items-end justify-between h-64 px-4 relative">
             {/* Simple Grid Lines */}
             <div className="absolute inset-x-0 top-0 h-px bg-slate-50" />
             <div className="absolute inset-x-0 top-1/2 h-px bg-slate-50" />
            
            <Bar height="40%" label="May" />
            <Bar height="60%" label="Jun" />
            <Bar height="50%" label="Jul" />
            <Bar height="85%" label="Aug" />
            <Bar height="65%" label="Sep" />
            <Bar height="95%" label="Oct" active />
          </div>
        </motion.div>

        {/* KPI Side */}
        <motion.div variants={staggerContainer} className="xl:col-span-4 space-y-6">
          <StatCard
            label="AVG. RESPONSE TIME"
            value="4.2 Hrs"
            trend="-12% from last month"
            trendDown
            icon={<Clock className="text-blue-500" />}
          />
          <StatCard
            label="CASES RESOLVED"
            value="86"
            trend="+5% completion rate"
            icon={<CheckCircle className="text-emerald-500" />}
          />

          <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xs font-bold mb-6 text-slate-400 uppercase tracking-widest">
              Risk Distribution
            </h3>
            <div className="space-y-5">
              <RiskBar label="Low" percent={40} color="bg-emerald-500" />
              <RiskBar label="Medium" percent={35} color="bg-amber-400" />
              <RiskBar label="High" percent={15} color="bg-orange-500" />
              <RiskBar label="Critical" percent={10} color="bg-rose-600" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Recent Reports Table */}
      <motion.section 
        variants={fadeInUp}
        className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h3 className="font-bold text-slate-800">Recent Reports</h3>
          <button className="text-xs text-cyan-600 font-bold hover:underline">
            View All History
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50 text-[10px] text-slate-400 uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4 text-left">Report Name</th>
                <th className="px-6 py-4 text-left">Date Range</th>
                <th className="px-6 py-4 text-left">Generated By</th>
                <th className="px-6 py-4 text-left">Date Created</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              <ReportRow
                name="Monthly Incident Summary"
                icon={<FileIcon size={16} className="text-rose-500" />}
                range="Sep 01 – Sep 30, 2023"
                user="Sarah Adebayo"
                created="Oct 02, 2023 • 09:15 AM"
              />
              <ReportRow
                name="Q3 Critical Cases Export"
                icon={<FileSpreadsheet size={16} className="text-emerald-500" />}
                range="Jul 01 – Sep 30, 2023"
                user="Sarah Adebayo"
                created="Oct 01, 2023 • 14:30 PM"
              />
            </tbody>
          </table>
        </div>
      </motion.section>
    </motion.div>
  );
}

/* ---------- Sub Components with Animations ---------- */

const FilterSelect = ({ label, icon, value }) => (
  <div className="space-y-2 group cursor-pointer">
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight group-hover:text-cyan-600 transition-colors">
      {label}
    </p>
    <div className="flex justify-between items-center bg-white border border-slate-200 rounded-xl px-4 py-2.5 group-hover:border-cyan-200 transition-all shadow-sm">
      <div className="flex items-center gap-2.5">
        <span className="text-slate-400">{icon}</span>
        <span className="text-sm font-semibold text-slate-700">{value}</span>
      </div>
      <span className="text-[8px] text-slate-300">▼</span>
    </div>
  </div>
);

const Bar = ({ height, label, active }) => (
  <div className="flex flex-col items-center w-1/6 gap-4 group">
    <div className="w-full flex items-end justify-center h-full bg-slate-50 rounded-t-lg overflow-hidden">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className={`w-full rounded-t-lg transition-colors ${
          active ? "bg-cyan-500 shadow-[0_-4px_12px_rgba(6,182,212,0.3)]" : "bg-cyan-100 group-hover:bg-cyan-200"
        }`}
      />
    </div>
    <span className={`text-[10px] font-bold ${active ? "text-cyan-600" : "text-slate-400"}`}>{label}</span>
  </div>
);

const StatCard = ({ label, value, trend, icon, trendDown }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -5 }}
    className="bg-white border border-slate-200 rounded-2xl p-6 flex justify-between items-center shadow-sm"
  >
    <div>
      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">{label}</p>
      <h4 className="text-3xl font-black text-slate-800 tracking-tight mb-1">{value}</h4>
      <p className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block ${
          trendDown ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600"
        }`}>
        {trend}
      </p>
    </div>
    <div className="p-4 bg-slate-50 rounded-2xl text-xl shadow-inner border border-slate-100">
      {icon}
    </div>
  </motion.div>
);

const RiskBar = ({ label, percent, color }) => (
  <div className="space-y-1">
    <div className="flex justify-between items-center mb-1">
      <span className="text-[11px] font-bold text-slate-600">{label}</span>
      <span className="text-[11px] font-black text-slate-900">{percent}%</span>
    </div>
    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 1, ease: "circOut" }}
        className={`${color} h-full rounded-full shadow-sm`} 
      />
    </div>
  </div>
);

const ReportRow = ({ name, icon, range, user, created }) => (
  <motion.tr 
    whileHover={{ backgroundColor: "rgba(248, 250, 252, 1)" }}
    className="border-t border-slate-50 group cursor-default"
  >
    <td className="px-6 py-5 flex items-center gap-3">
      <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-white transition-colors">
        {icon}
      </div>
      <span className="font-bold text-sm text-slate-700">{name}</span>
    </td>
    <td className="px-6 py-5 text-xs font-medium text-slate-500">{range}</td>
    <td className="px-6 py-5 text-xs font-bold text-slate-700">{user}</td>
    <td className="px-6 py-5 text-xs text-slate-400 font-medium">{created}</td>
    <td className="px-6 py-5 text-right">
      <motion.button 
        whileHover={{ scale: 1.1, color: "#0891b2" }}
        className="text-slate-400 transition-colors"
      >
        <Download size={18} />
      </motion.button>
    </td>
  </motion.tr>
);