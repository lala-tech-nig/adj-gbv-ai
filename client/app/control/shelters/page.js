"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  List,
  Map,
  Bell,
  Plus,
  Eye,
  Edit2,
  Phone,
  MapPin,
  ShieldCheck,
  Heart,
  Stethoscope,
  Building2,
  Bed,
  Home,
  CheckCircle,
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

export default function ShelterDirectoryPage() {
  const [privacyMode, setPrivacyMode] = useState(false);

  const stats = [
    { label: "TOTAL FACILITIES", value: "32", icon: <Home className="text-blue-600" />, bg: "bg-blue-50" },
    { label: "AVAILABLE BEDS", value: "104", sub: "Across all locations", icon: <Bed className="text-green-600" />, bg: "bg-green-50" },
    { label: "PARTNER NGOS", value: "18", icon: <Heart className="text-purple-600" />, bg: "bg-purple-50" },
    { label: "FULLY OCCUPIED", value: "4", icon: <Building2 className="text-orange-600" />, bg: "bg-orange-50" },
  ];

  const shelters = [
    { name: "Ogun State Women's Shelter", type: "GOVERNMENT", verified: true, location: "Abeokuta South", phone: "+234 803 123 4567", services: ["Counseling", "Medical", "Security"], status: "AVAILABLE", statusColor: "bg-green-100 text-green-700", beds: "32 / 50 Beds Free", icon: <ShieldCheck className="text-blue-600" /> },
    { name: "Ray of Hope Foundation", type: "NGO PARTNER", location: "Sagamu", phone: "+234 812 555 0192", services: ["Rehab", "Vocational"], status: "LIMITED", statusColor: "bg-yellow-100 text-yellow-700", beds: "2 / 20 Beds Free", icon: <Heart className="text-purple-600" /> },
    { name: "Better Life Initiative", type: "NGO PARTNER", location: "Ota, Ado-Odo", phone: "+234 708 999 2211", services: ["Legal Aid", "Psychological"], status: "FULL", statusColor: "bg-red-100 text-red-700", beds: "0 / 15 Beds Free", icon: <Heart className="text-purple-600" /> },
    { name: "Gateway Medical Support Center", type: "MEDICAL FACILITY", location: "Ilaro", phone: "+234 901 112 3344", services: ["Emergency Care", "Trauma"], status: "AVAILABLE", statusColor: "bg-green-100 text-green-700", beds: "8 / 10 Beds Free", icon: <Stethoscope className="text-teal-600" /> },
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 md:p-8 space-y-8 bg-slate-50 min-h-screen"
    >
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Shelter & NGO Directory
          </h2>
          <p className="text-sm text-slate-500">Manage and monitor emergency housing availability</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Animated Toggle */}
          <div 
            onClick={() => setPrivacyMode(!privacyMode)}
            className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-2 rounded-full cursor-pointer hover:bg-slate-50 transition-colors shadow-sm"
          >
            <span className="text-xs font-semibold text-slate-600 select-none">Privacy Mode</span>
            <div className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${privacyMode ? 'bg-blue-500' : 'bg-slate-300'}`}>
              <motion.div 
                animate={{ x: privacyMode ? 20 : 0 }}
                className="w-3 h-3 bg-white rounded-full shadow-sm"
              />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00AEEF] hover:bg-[#0096ce] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-200 transition-all"
          >
            <Plus size={18} /> Add Shelter
          </motion.button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-start"
          >
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <h3 className="text-3xl font-black text-slate-900">
                {stat.value}
              </h3>
              {stat.sub && (
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                  <CheckCircle size={12} className="text-green-500" /> {stat.sub}
                </p>
              )}
            </div>
            <div className={`${stat.bg} p-3 rounded-xl ring-4 ring-white`}>
              {stat.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Search & Action Bar */}
      <motion.div variants={itemVariants} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-4 items-center">
        <div className="flex-1 relative min-w-[300px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            placeholder="Search by name, location or specific services..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>

        <button className="flex items-center gap-2 px-5 py-3 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">
          <Filter size={18} /> Filters
        </button>

        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button className="p-2 bg-white shadow-sm rounded-lg">
            <List size={18} className="text-blue-500" />
          </button>
          <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
            <Map size={18} className="text-slate-400" />
          </button>
        </div>
      </motion.div>

      {/* Modern Table */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/80 backdrop-blur-sm">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Facility</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Location / Contact</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Services</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Availability</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              <AnimatePresence>
                {shelters.map((item, idx) => (
                  <motion.tr 
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ backgroundColor: "rgba(248, 250, 252, 1)" }}
                    className="group transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</p>
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 rounded-md uppercase text-slate-500">
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <MapPin size={14} className="text-slate-400" /> {item.location}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Phone size={14} /> {privacyMode ? "•••• ••• ••••" : item.phone}
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        {item.services.map((s, i) => (
                          <span key={i} className="text-[10px] font-semibold px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100">
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="px-6 py-5 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-tighter ${item.statusColor}`}>
                        {item.status}
                      </span>
                      <p className="text-[10px] font-medium text-slate-400 mt-1.5">
                        {item.beds}
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-2">
                        <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye size={20} />
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-slate-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                          <Edit2 size={20} />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}