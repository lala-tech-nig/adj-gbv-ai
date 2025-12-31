"use client";

import React from "react";
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
} from "lucide-react";

export default function ReportsDashboardPage() {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Reports & Analytics</h2>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500">
              Privacy Mode
            </span>
            <div className="w-10 h-5 bg-slate-200 rounded-full relative">
              <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" />
            </div>
          </div>

          <div className="relative">
            <Bell size={20} className="text-slate-600" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </div>

          <button className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-600">
            <Download size={16} /> Export Data
          </button>
        </div>
      </header>

      {/* Generate Report */}
      <section className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <BarChart3 size={18} className="text-cyan-500" />
            <h3 className="font-bold">Generate Custom Report</h3>
          </div>
          <button className="text-xs text-cyan-500 font-medium">
            Reset Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <FilterSelect
            label="DATE RANGE"
            icon={<Calendar size={14} />}
            value="Last 30 Days"
          />
          <FilterSelect
            label="LGA / LOCATION"
            icon={<MapPin size={14} />}
            value="All Locations"
          />
          <FilterSelect
            label="RISK LEVEL"
            icon={<AlertTriangle size={14} />}
            value="All Levels"
          />
          <FilterSelect
            label="CASE STATUS"
            icon={<FileText size={14} />}
            value="All Statuses"
          />
        </div>

        <div className="flex justify-end gap-6">
          <button className="text-sm font-semibold text-slate-600">
            Save as Preset
          </button>
          <button className="bg-slate-900 text-white px-8 py-2.5 rounded-lg text-sm font-bold">
            Generate Report
          </button>
        </div>
      </section>

      {/* Charts & KPIs */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Incident Trends */}
        <div className="xl:col-span-8 bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex justify-between mb-8">
            <div>
              <h3 className="font-bold">Incident Trends</h3>
              <p className="text-xs text-slate-400">
                Reported cases over the last 6 months
              </p>
            </div>
            <MoreHorizontal size={20} className="text-slate-400" />
          </div>

          <div className="flex items-end justify-between h-64 px-4 border-b border-slate-100">
            <Bar height="40%" label="May" />
            <Bar height="60%" label="Jun" />
            <Bar height="50%" label="Jul" />
            <Bar height="75%" label="Aug" />
            <Bar height="65%" label="Sep" />
            <Bar height="90%" label="Oct" active />
          </div>
        </div>

        {/* KPI Side */}
        <div className="xl:col-span-4 space-y-6">
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

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-xs font-bold mb-4">
              Case Distribution by Risk
            </h3>
            <div className="space-y-3">
              <RiskBar label="Low" percent={40} color="bg-emerald-400" />
              <RiskBar label="Medium" percent={35} color="bg-yellow-400" />
              <RiskBar label="High" percent={15} color="bg-orange-400" />
              <RiskBar label="Critical" percent={10} color="bg-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <section className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="font-bold">Recently Generated Reports</h3>
          <button className="text-xs text-cyan-500 font-medium">
            View All History
          </button>
        </div>

        <table className="w-full">
          <thead className="bg-slate-50 text-[10px] text-slate-400 uppercase">
            <tr>
              <th className="px-6 py-3 text-left">Report Name</th>
              <th className="px-6 py-3 text-left">Date Range</th>
              <th className="px-6 py-3 text-left">Generated By</th>
              <th className="px-6 py-3 text-left">Date Created</th>
              <th className="px-6 py-3 text-right">Download</th>
            </tr>
          </thead>

          <tbody>
            <ReportRow
              name="Monthly Incident Summary"
              icon={<FileIcon size={16} className="text-red-500" />}
              range="Sep 01 – Sep 30, 2023"
              user="Sarah Adebayo"
              created="Oct 02, 2023 • 09:15 AM"
            />
            <ReportRow
              name="Q3 Critical Cases Export"
              icon={
                <FileSpreadsheet size={16} className="text-emerald-500" />
              }
              range="Jul 01 – Sep 30, 2023"
              user="Sarah Adebayo"
              created="Oct 01, 2023 • 14:30 PM"
            />
          </tbody>
        </table>
      </section>
    </div>
  );
}

/* ---------- Sub Components ---------- */

const FilterSelect = ({ label, icon, value }) => (
  <div className="space-y-1.5">
    <p className="text-[10px] font-bold text-slate-400 uppercase">
      {label}
    </p>
    <div className="flex justify-between items-center bg-slate-50 border rounded-lg px-3 py-2">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm font-medium">{value}</span>
      </div>
      <span className="text-[10px] text-slate-400">▼</span>
    </div>
  </div>
);

const Bar = ({ height, label, active }) => (
  <div className="flex flex-col items-center w-1/6 gap-4">
    <div
      className={`w-full rounded-t-sm ${
        active ? "bg-cyan-500" : "bg-cyan-200"
      }`}
      style={{ height }}
    />
    <span className="text-[10px] text-slate-400">{label}</span>
  </div>
);

const StatCard = ({ label, value, trend, icon, trendDown }) => (
  <div className="bg-white border rounded-xl p-6 flex justify-between">
    <div>
      <p className="text-[10px] text-slate-400 uppercase">{label}</p>
      <h4 className="text-2xl font-bold">{value}</h4>
      <p
        className={`text-[10px] ${
          trendDown ? "text-red-500" : "text-emerald-500"
        }`}
      >
        {trend}
      </p>
    </div>
    <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
  </div>
);

const RiskBar = ({ label, percent, color }) => (
  <div className="flex items-center gap-4">
    <span className="w-12 text-xs text-slate-400">{label}</span>
    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
      <div className={`${color} h-full`} style={{ width: `${percent}%` }} />
    </div>
    <span className="w-8 text-xs font-bold text-right">{percent}%</span>
  </div>
);

const ReportRow = ({ name, icon, range, user, created }) => (
  <tr className="border-t hover:bg-slate-50">
    <td className="px-6 py-4 flex items-center gap-3">
      {icon}
      <span className="font-semibold">{name}</span>
    </td>
    <td className="px-6 py-4 text-xs text-slate-500">{range}</td>
    <td className="px-6 py-4 text-xs">{user}</td>
    <td className="px-6 py-4 text-xs text-slate-400">{created}</td>
    <td className="px-6 py-4 text-right">
      <Download size={18} className="text-slate-400 hover:text-cyan-500" />
    </td>
  </tr>
);
