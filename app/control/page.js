"use client";


import React from 'react';
import { 
  LayoutDashboard, Briefcase, FileText, Home, 
  Settings, LogOut, Plus, Bell, EyeOff, 
  AlertCircle, Clock, TrendingUp 
} from 'lucide-react';

// --- Sub-Components ---

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
    active ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-gray-100'
  }`}>
    <Icon size={20} />
    <span className="font-medium text-sm">{label}</span>
  </div>
);

const StatCard = ({ title, value, icon: Icon, trend, trendColor, subtext, iconBg }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{title}</p>
        <h3 className="text-3xl font-bold text-slate-800 mt-1">{value}</h3>
      </div>
      <div className={`p-2 rounded-lg ${iconBg}`}>
        <Icon size={20} className={trendColor} />
      </div>
    </div>
    <div className="flex items-center space-x-1">
      {trend && <TrendingUp size={14} className={trendColor} />}
      <p className={`text-xs ${trendColor} font-medium`}>{trend}</p>
      <p className="text-xs text-slate-400">{subtext}</p>
    </div>
  </div>
);

// --- Main Dashboard ---

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col p-6">
        <div className="flex items-center space-x-3 mb-10">
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold">LOGO</div>
          <div>
            <h1 className="text-sm font-bold leading-tight">Ogun State MWA</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Officer Portal</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <SidebarItem icon={Briefcase} label="Cases" />
          <SidebarItem icon={FileText} label="Reports" />
          <SidebarItem icon={Home} label="Shelters" />
        </nav>

        <div className="pt-6 border-t border-slate-100 space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase ml-3 mb-2">System</p>
          <SidebarItem icon={Settings} label="Settings" />
          <div className="flex items-center justify-between mt-8 p-3 bg-slate-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-200 rounded-full overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Profile" />
              </div>
              <div>
                <p className="text-xs font-bold">Sarah Adebayo</p>
                <p className="text-[10px] text-slate-400">Senior Case Officer</p>
              </div>
            </div>
            <LogOut size={16} className="text-slate-400 cursor-pointer" />
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* HEADER */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-slate-100 px-3 py-1.5 rounded-full space-x-2">
              <EyeOff size={16} className="text-slate-500" />
              <span className="text-xs font-medium text-slate-600">Privacy Mode</span>
              <div className="w-8 h-4 bg-slate-300 rounded-full relative">
                 <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="relative p-2 text-slate-400">
              <Bell size={20} />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
            <button className="bg-[#00AEEF] hover:bg-sky-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-bold transition-all shadow-sm">
              <Plus size={18} />
              <span>New Case</span>
            </button>
          </div>
        </header>

        {/* STATS ROW */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Active Cases" value="142" icon={Briefcase} 
            trend="+12%" trendColor="text-emerald-500" subtext="from last month" iconBg="bg-blue-50"
          />
          <StatCard 
            title="High Risk Cases" value="18" icon={AlertCircle} 
            trend="+2%" trendColor="text-orange-500" subtext="stable trend" iconBg="bg-orange-50"
          />
          <StatCard 
            title="Critical Attention" value="5" icon={AlertCircle} 
            trend="3 New" trendColor="text-red-500" subtext="since yesterday" iconBg="bg-red-50"
          />
          <StatCard 
            title="Pending Review" value="24" icon={Clock} 
            trend="5 overdue" trendColor="text-purple-500" subtext="by >48hrs" iconBg="bg-purple-50"
          />
        </div>

        {/* MIDDLE SECTION */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Trends Graph Placeholder */}
          <div className="col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Case Reporting Trends</h4>
                <p className="text-xs text-slate-400">Monthly breakdown of reported cases (Last 6 Months)</p>
              </div>
              <select className="text-xs border border-slate-200 rounded-md px-2 py-1 bg-white outline-none">
                <option>Last 6 Months</option>
              </select>
            </div>
            <div className="h-48 border-b border-l border-slate-100 flex items-end justify-between px-4">
              {['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map((month) => (
                <div key={month} className="flex flex-col items-center space-y-2">
                  <div className="text-[10px] text-slate-400 mt-2">{month}</div>
                </div>
              ))}
              {/* This is where a chart library like Recharts would go */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <p className="text-xs italic">Chart Visualization Area</p>
              </div>
            </div>
          </div>

          {/* Risk Assessment Donut Placeholder */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <h4 className="font-bold text-slate-800 text-lg">Risk Assessment</h4>
            <p className="text-xs text-slate-400 mb-6">Distribution by assigned risk level</p>
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative w-40 h-40 rounded-full border-[15px] border-slate-50 flex items-center justify-center">
                    {/* Visual representation of the donut segments */}
                    <div className="absolute inset-0 rounded-full border-[15px] border-t-red-500 border-r-orange-400 border-b-yellow-400 border-l-emerald-500"></div>
                    <div className="text-center bg-white rounded-full w-full h-full flex flex-col items-center justify-center z-10">
                        <span className="text-3xl font-bold">142</span>
                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Total Cases</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-8 w-full">
                    <LegendItem color="bg-red-500" label="Critical (15%)" />
                    <LegendItem color="bg-orange-400" label="High (30%)" />
                    <LegendItem color="bg-yellow-400" label="Medium (25%)" />
                    <LegendItem color="bg-emerald-500" label="Low (30%)" />
                </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-3 gap-6">
          {/* Critical Attention Table */}
          <div className="col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
               <div className="flex items-center space-x-2">
                  <AlertCircle size={18} className="text-red-500" />
                  <h4 className="font-bold text-slate-800">Critical Attention Required</h4>
               </div>
               <button className="text-[#00AEEF] text-xs font-bold hover:underline">View All Critical</button>
            </div>
            <div className="space-y-4">
              <CriticalRow name="Amina Johnson" id="GBV-894" tag="Immediate Risk" tagBg="bg-red-50" tagText="text-red-600" action="Review" />
              <CriticalRow name="B. Okoro" id="GBV-881" tag="Shelter Needed" tagBg="bg-orange-50" tagText="text-orange-600" action="Assign" />
              <CriticalRow name="S. Adeyemi" id="GBV-865" tag="Medical Aid" tagBg="bg-pink-50" tagText="text-pink-600" action="Dispatch" />
            </div>
          </div>

          {/* Locations List */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-bold text-slate-800">Top Reported Locations (LGA)</h4>
              <div className="text-slate-400">...</div>
            </div>
            <div className="space-y-4">
               <LocationBar label="Abeokuta South" count="45" width="w-[90%]" />
               <LocationBar label="Ado-Odo/Ota" count="32" width="w-[65%]" />
               <LocationBar label="Sagamu" count="28" width="w-[55%]" />
               <LocationBar label="Ijebu Ode" count="15" width="w-[30%]" />
               <LocationBar label="Ifo" count="10" width="w-[20%]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- Internal Helper Components ---

const LegendItem = ({ color, label }) => (
    <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${color}`}></div>
        <span className="text-[10px] text-slate-600 font-medium">{label}</span>
    </div>
)

const CriticalRow = ({ name, id, tag, tagBg, tagText, action }) => (
  <div className="flex items-center justify-between p-3 border border-slate-50 rounded-xl hover:bg-slate-50 transition-colors">
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-xs font-bold">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <p className="text-sm font-bold">{name}</p>
        <p className="text-[10px] text-slate-400 uppercase">ID: #{id}</p>
      </div>
    </div>
    <div className={`px-3 py-1 rounded-md ${tagBg} ${tagText} text-[10px] font-bold`}>
      {tag}
    </div>
    <button className="border border-slate-200 px-4 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-white shadow-sm">
      {action}
    </button>
  </div>
);

const LocationBar = ({ label, count, width }) => (
  <div>
    <div className="flex justify-between text-[11px] mb-1">
      <span className="text-slate-600 font-medium">{label}</span>
      <span className="text-slate-400">{count} cases</span>
    </div>
    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
      <div className={`h-full bg-sky-400 rounded-full ${width}`}></div>
    </div>
  </div>
);