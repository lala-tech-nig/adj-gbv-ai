"use client";

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  BarChart3, 
  Home, 
  Settings, 
  Search, 
  SlidersHorizontal, 
  Download, 
  MoreVertical, 
  Plus, 
  Bell,
  LogOut,
  AlertCircle,
  Clock,
  FileText,
  ShieldAlert
} from 'lucide-react';

// --- Sub-Components ---

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
    active ? 'bg-cyan-50 text-cyan-600' : 'text-slate-500 hover:bg-gray-50'
  }`}>
    <Icon size={20} />
    <span className="font-medium text-sm">{label}</span>
  </div>
);

const StatCard = ({ title, value, icon: Icon, colorClass, iconBg }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex justify-between items-start flex-1">
    <div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
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
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${styles[level] || styles.LOW}`}>
      ● {level}
    </span>
  );
};

// --- Main Page ---

export default function CaseManagement() {
  const [privacyMode, setPrivacyMode] = useState(false);

  const cases = [
    { id: "#GBV-2023-894", name: "Amina Johnson", phone: "+234 803 123 ****", location: "Abeokuta South", subLoc: "Oke-Ilewo Street", date: "Oct 24, 2023 • 14:30", risk: "CRITICAL" },
    { id: "#GBV-2023-892", name: "Chinyere Obi", phone: "+234 705 555 ****", location: "Sagamu", subLoc: "Sabo Area", date: "Oct 24, 2023 • 09:15", risk: "HIGH" },
    { id: "#GBV-2023-889", name: "Funke Adebayo", phone: "+234 812 999 ****", location: "Ifo", subLoc: "Olambe Junction", date: "Oct 23, 2023 • 16:45", risk: "MEDIUM" },
    { id: "#GBV-2023-885", name: "Anonymous Victim", phone: "Contact via Shelter", location: "Ijebu Ode", subLoc: "Molipa Estate", date: "Oct 22, 2023 • 11:20", risk: "LOW" },
    { id: "#GBV-2023-881", name: "B. Okoro", phone: "+234 901 222 ****", location: "Ado-Odo/Ota", subLoc: "Sango Ota Bridge", date: "Oct 21, 2023 • 21:05", risk: "CRITICAL" },
    { id: "#GBV-2023-878", name: "T. Balogun", phone: "+234 810 444 ****", location: "Ewekoro", subLoc: "Arigbajo", date: "Oct 20, 2023 • 13:10", risk: "MEDIUM" },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-800 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col p-6">
        <div className="flex items-center space-x-3 mb-10">
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
            <img src="/api/placeholder/40/40" alt="Logo" className="rounded-full" />
          </div>
          <div>
            <h1 className="text-sm font-bold leading-tight">Ogun State MWA</h1>
            <p className="text-[10px] text-slate-400 font-medium">Officer Portal</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" />
          <SidebarItem icon={Briefcase} label="Cases" active />
          <SidebarItem icon={BarChart3} label="Reports" />
          <SidebarItem icon={Home} label="Shelters" />
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase mb-4 tracking-widest">System</p>
          <SidebarItem icon={Settings} label="Settings" />
          
          <div className="mt-8 flex items-center justify-between p-2">
            <div className="flex items-center space-x-3">
              <img src="/api/placeholder/32/32" className="w-8 h-8 rounded-full border border-orange-200" alt="Avatar" />
              <div>
                <p className="text-xs font-bold">Sarah Adebayo</p>
                <p className="text-[10px] text-slate-400">Senior Case Officer</p>
              </div>
            </div>
            <LogOut size={16} className="text-slate-400 cursor-pointer" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="px-8 py-6 flex justify-between items-center bg-white border-b border-slate-100 sticky top-0 z-10">
          <h2 className="text-xl font-bold text-slate-700">Case Management</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-slate-100 rounded-full px-3 py-1.5 space-x-3">
              <span className="text-[11px] font-semibold text-slate-500">Privacy Mode</span>
              <button 
                onClick={() => setPrivacyMode(!privacyMode)}
                className={`w-10 h-5 rounded-full transition-colors relative ${privacyMode ? 'bg-cyan-500' : 'bg-slate-300'}`}
              >
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${privacyMode ? 'left-6' : 'left-1'}`} />
              </button>
            </div>
            <div className="relative p-2 text-slate-400">
              <Bell size={20} />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>
            <button className="bg-[#00ADEF] hover:bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-semibold transition-all">
              <Plus size={18} />
              <span>New Case</span>
            </button>
          </div>
        </header>

        <div className="p-8 space-y-6">
          {/* Stats Grid */}
          <div className="flex space-x-4">
            <StatCard title="Total Active Cases" value="142" icon={Briefcase} colorClass="text-blue-600" iconBg="bg-blue-50" />
            <StatCard title="High Risk" value="18" icon={AlertCircle} colorClass="text-orange-500" iconBg="bg-orange-50" />
            <StatCard title="Critical Attention" value="5" icon={ShieldAlert} colorClass="text-red-500" iconBg="bg-red-50" />
            <StatCard title="Pending Review" value="24" icon={Clock} colorClass="text-purple-500" iconBg="bg-purple-50" />
          </div>

          {/* Filters & Actions */}
          <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-3 flex-1">
              <div className="relative w-1/3">
                <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search by Name, Case ID, or LGA..." 
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-gray-50">
                <SlidersHorizontal size={16} />
                <span>Filters</span>
                <span className="bg-cyan-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
              </button>
              
              <div className="flex items-center space-x-2">
                <span className="bg-red-50 text-red-500 px-3 py-1 rounded-md text-xs font-medium border border-red-100 flex items-center">
                  Risk: Critical <Plus size={14} className="ml-2 rotate-45" />
                </span>
                <span className="bg-blue-50 text-blue-500 px-3 py-1 rounded-md text-xs font-medium border border-blue-100 flex items-center">
                  Status: Open <Plus size={14} className="ml-2 rotate-45" />
                </span>
              </div>
            </div>
            
            <button className="flex items-center space-x-2 text-slate-500 text-sm font-semibold hover:text-slate-800">
              <Download size={18} />
              <span>Export</span>
            </button>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                  <th className="px-6 py-4">Case ID</th>
                  <th className="px-6 py-4">Victim Details</th>
                  <th className="px-6 py-4">Location / LGA</th>
                  <th className="px-6 py-4">Submitted</th>
                  <th className="px-6 py-4">Risk Level</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {cases.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-cyan-500 font-medium text-sm">{item.id}</td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-700">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.phone}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-slate-600">{item.location}</p>
                      <p className="text-xs text-slate-400">{item.subLoc}</p>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500 font-medium">{item.date}</td>
                    <td className="px-6 py-4">
                      <StatusBadge level={item.risk} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-100 flex justify-between items-center bg-white">
              <p className="text-xs text-slate-400">
                Showing <span className="font-bold text-slate-700">1 to 6</span> of <span className="font-bold text-slate-700">142</span> results
              </p>
              <div className="flex space-x-1">
                <button className="px-3 py-1.5 text-xs font-semibold text-slate-400 border border-slate-200 rounded-md hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1.5 text-xs font-semibold bg-cyan-500 text-white rounded-md">1</button>
                <button className="px-3 py-1.5 text-xs font-semibold text-slate-500 border border-slate-200 rounded-md hover:bg-gray-50">2</button>
                <button className="px-3 py-1.5 text-xs font-semibold text-slate-500 border border-slate-200 rounded-md hover:bg-gray-50">3</button>
                <span className="px-2 py-1.5 text-slate-400">...</span>
                <button className="px-3 py-1.5 text-xs font-semibold text-slate-500 border border-slate-200 rounded-md hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}