"use client";

import React from 'react';
import { 
  LayoutDashboard, FileText, BarChart3, Home, Settings, 
  LogOut, Bell, Download, Calendar, MapPin, AlertTriangle, 
  CheckCircle, Clock, MoreHorizontal, FileSpreadsheet, FileIcon
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
              <img src="/api/placeholder/40/40" alt="Logo" className="rounded-full" />
            </div>
            <div>
              <h1 className="text-sm font-bold leading-tight">Ogun State MWA</h1>
              <p className="text-xs text-slate-500">Officer Portal</p>
            </div>
          </div>

          <nav className="space-y-2">
            <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <NavItem icon={<FileText size={20} />} label="Cases" />
            <NavItem icon={<BarChart3 size={20} />} label="Reports" active />
            <NavItem icon={<Home size={20} />} label="Shelters" />
          </nav>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">System</p>
            <NavItem icon={<Settings size={20} />} label="Settings" />
          </div>
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/api/placeholder/32/32" className="rounded-full" alt="User" />
              <div>
                <p className="text-xs font-bold">Sarah Adebayo</p>
                <p className="text-[10px] text-slate-500">Senior Case Officer</p>
              </div>
            </div>
            <LogOut size={18} className="text-slate-400 cursor-pointer" />
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Reports & Analytics</h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-500">Privacy Mode</span>
              <div className="w-10 h-5 bg-slate-200 rounded-full relative">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
            <div className="relative">
              <Bell size={20} className="text-slate-600" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
            <button className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-600 transition-colors">
              <Download size={16} /> Export Data
            </button>
          </div>
        </header>

        {/* GENERATE CUSTOM REPORT SECTION */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-cyan-500" />
              <h3 className="font-bold">Generate Custom Report</h3>
            </div>
            <button className="text-xs text-cyan-500 font-medium">Reset Filters</button>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-6">
            <FilterSelect label="DATE RANGE" icon={<Calendar size={14}/>} value="Last 30 Days" />
            <FilterSelect label="LGA / LOCATION" icon={<MapPin size={14}/>} value="All Locations" />
            <FilterSelect label="RISK LEVEL" icon={<AlertTriangle size={14}/>} value="All Levels" />
            <FilterSelect label="CASE STATUS" icon={<FileText size={14}/>} value="All Statuses" />
          </div>

          <div className="flex justify-end items-center gap-6">
            <button className="text-sm font-semibold text-slate-600">Save as Preset</button>
            <button className="bg-slate-900 text-white px-8 py-2.5 rounded-lg text-sm font-bold">Generate Report</button>
          </div>
        </section>

        {/* DASHBOARD GRID */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Incident Trends Graph */}
          <div className="col-span-8 bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-bold">Incident Trends</h3>
                <p className="text-xs text-slate-400">Reported cases over the last 6 months</p>
              </div>
              <MoreHorizontal size={20} className="text-slate-400 cursor-pointer" />
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

          {/* KPI Cards */}
          <div className="col-span-4 space-y-6">
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
              <h3 className="text-xs font-bold mb-4">Case Distribution by Risk</h3>
              <div className="space-y-3">
                <RiskBar label="Low" percent={40} color="bg-emerald-400" />
                <RiskBar label="Medium" percent={35} color="bg-yellow-400" />
                <RiskBar label="High" percent={15} color="bg-orange-400" />
                <RiskBar label="Critical" percent={10} color="bg-red-500" />
              </div>
            </div>
          </div>
        </div>

        {/* RECENTLY GENERATED REPORTS */}
        <section className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b border-slate-100">
            <h3 className="font-bold">Recently Generated Reports</h3>
            <button className="text-xs text-cyan-500 font-medium">View All History</button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-50">
                <th className="px-6 py-3">Report Name</th>
                <th className="px-6 py-3">Date Range</th>
                <th className="px-6 py-3">Generated By</th>
                <th className="px-6 py-3">Date Created</th>
                <th className="px-6 py-3 text-right">Download</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <ReportRow 
                name="Monthly Incident Summary" 
                icon={<FileIcon className="text-red-500" size={16} />}
                range="Sep 01 - Sep 30, 2023"
                user="Sarah Adebayo"
                created="Oct 02, 2023 • 09:15 AM"
              />
              <ReportRow 
                name="Q3 Critical Cases Export" 
                icon={<FileSpreadsheet className="text-emerald-500" size={16} />}
                range="Jul 01 - Sep 30, 2023"
                user="Sarah Adebayo"
                created="Oct 01, 2023 • 14:30 PM"
              />
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

// Sub-components for cleaner code
const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all ${active ? 'bg-cyan-50 text-cyan-600' : 'text-slate-500 hover:bg-slate-50'}`}>
    {icon}
    <span className="text-sm font-semibold">{label}</span>
  </div>
);

const FilterSelect = ({ label, icon, value }) => (
  <div className="space-y-1.5">
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</p>
    <div className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 cursor-pointer">
      <div className="flex items-center gap-2">
        <span className="text-slate-400">{icon}</span>
        <span className="text-sm font-medium">{value}</span>
      </div>
      <span className="text-slate-400 text-[10px]">▼</span>
    </div>
  </div>
);

const Bar = ({ height, label, active = false }) => (
  <div className="flex flex-col items-center gap-4 w-1/6">
    <div className={`w-full rounded-t-sm transition-all ${active ? 'bg-cyan-500' : 'bg-cyan-200 hover:bg-cyan-300'}`} style={{ height }}></div>
    <span className="text-[10px] text-slate-400 font-medium mb-2">{label}</span>
  </div>
);

const StatCard = ({ label, value, trend, icon, trendDown }) => (
  <div className="bg-white rounded-xl border border-slate-200 p-6 flex justify-between items-start relative overflow-hidden">
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
      <h4 className="text-2xl font-bold mb-1">{value}</h4>
      <p className={`text-[10px] font-medium ${trendDown ? 'text-red-500' : 'text-emerald-500'}`}>
        {trendDown ? '↘' : '↗'} {trend}
      </p>
    </div>
    <div className={`p-2 rounded-lg ${trendDown ? 'bg-blue-50' : 'bg-emerald-50'}`}>
      {icon}
    </div>
  </div>
);

const RiskBar = ({ label, percent, color }) => (
  <div className="flex items-center gap-4">
    <span className="text-xs text-slate-400 w-12 font-medium">{label}</span>
    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${percent}%` }}></div>
    </div>
    <span className="text-xs font-bold w-8 text-right">{percent}%</span>
  </div>
);

const ReportRow = ({ name, icon, range, user, created }) => (
  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors group">
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-semibold text-slate-700">{name}</span>
      </div>
    </td>
    <td className="px-6 py-4 text-slate-500 text-xs font-medium">{range}</td>
    <td className="px-6 py-4 text-slate-600 text-xs font-medium">{user}</td>
    <td className="px-6 py-4 text-slate-400 text-xs">{created}</td>
    <td className="px-6 py-4 text-right">
      <button className="text-slate-400 group-hover:text-cyan-500">
        <Download size={18} />
      </button>
    </td>
  </tr>
);

export default Dashboard;