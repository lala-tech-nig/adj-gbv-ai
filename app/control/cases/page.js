"use client";

import React, { useState } from "react";
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
} from "lucide-react";

/* ---------- Sub Components ---------- */

const StatCard = ({ title, value, icon: Icon, colorClass, iconBg }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex justify-between items-start flex-1">
    <div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
        {title}
      </p>
      <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
    </div>
    <div className={`${iconBg} p-2 rounded-lg`}>
      <Icon className={colorClass} size={20} />
    </div>
  </div>
);

const StatusBadge = ({ level }) => {
  const styles = {
    CRITICAL: "bg-red-50 text-red-600 border-red-100",
    HIGH: "bg-orange-50 text-orange-600 border-orange-100",
    MEDIUM: "bg-yellow-50 text-yellow-600 border-yellow-100",
    LOW: "bg-green-50 text-green-600 border-green-100",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
        styles[level] || styles.LOW
      }`}
    >
      ● {level}
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
      phone: "+234 803 123 ****",
      location: "Abeokuta South",
      subLoc: "Oke-Ilewo Street",
      date: "Oct 24, 2023 • 14:30",
      risk: "CRITICAL",
    },
    {
      id: "#GBV-2023-892",
      name: "Chinyere Obi",
      phone: "+234 705 555 ****",
      location: "Sagamu",
      subLoc: "Sabo Area",
      date: "Oct 24, 2023 • 09:15",
      risk: "HIGH",
    },
    {
      id: "#GBV-2023-889",
      name: "Funke Adebayo",
      phone: "+234 812 999 ****",
      location: "Ifo",
      subLoc: "Olambe Junction",
      date: "Oct 23, 2023 • 16:45",
      risk: "MEDIUM",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center bg-white border-b border-slate-100 px-8 py-6">
        <h2 className="text-xl font-bold text-slate-700">
          Case Management
        </h2>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-slate-100 rounded-full px-3 py-1.5 gap-3">
            <span className="text-[11px] font-semibold text-slate-500">
              Privacy Mode
            </span>
            <button
              onClick={() => setPrivacyMode(!privacyMode)}
              className={`w-10 h-5 rounded-full relative transition-colors ${
                privacyMode ? "bg-cyan-500" : "bg-slate-300"
              }`}
            >
              <div
                className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${
                  privacyMode ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>

          <Bell size={20} className="text-slate-400" />

          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold">
            <Plus size={18} />
            New Case
          </button>
        </div>
      </header>

      {/* Stats */}
      <div className="flex gap-4">
        <StatCard
          title="Total Active Cases"
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
          title="Critical Attention"
          value="5"
          icon={ShieldAlert}
          colorClass="text-red-500"
          iconBg="bg-red-50"
        />
        <StatCard
          title="Pending Review"
          value="24"
          icon={Clock}
          colorClass="text-purple-500"
          iconBg="bg-purple-50"
        />
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-slate-100 flex justify-between items-center">
        <div className="relative w-1/3">
          <Search
            size={18}
            className="absolute left-3 top-2.5 text-slate-400"
          />
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
            placeholder="Search by name, case ID, or LGA..."
          />
        </div>

        <button className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
          <SlidersHorizontal size={16} />
          Filters
        </button>

        <button className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
          <Download size={16} />
          Export
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
              <th className="px-6 py-4">Case ID</th>
              <th className="px-6 py-4">Victim</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Submitted</th>
              <th className="px-6 py-4">Risk</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => (
              <tr key={c.id} className="border-t hover:bg-slate-50">
                <td className="px-6 py-4 text-cyan-500 font-medium">
                  {c.id}
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold">{c.name}</p>
                  <p className="text-xs text-slate-400">{c.phone}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold">{c.location}</p>
                  <p className="text-xs text-slate-400">{c.subLoc}</p>
                </td>
                <td className="px-6 py-4 text-xs text-slate-500">
                  {c.date}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge level={c.risk} />
                </td>
                <td className="px-6 py-4 text-right">
                  <MoreVertical size={18} className="text-slate-400" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
