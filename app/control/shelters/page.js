"use client";

import React from 'react';
import { 
  LayoutDashboard, Briefcase, FileText, Home, Search, 
  Filter, List, Map, Bell, Plus, Eye, Edit2, 
  Settings, LogOut, Phone, MapPin, ShieldCheck, Heart, 
  Stethoscope, Building2, Bed
} from 'lucide-react';

const ShelterDirectory = () => {
  const stats = [
    { label: 'TOTAL FACILITIES', value: '32', icon: <Home className="text-blue-600" />, bg: 'bg-blue-50' },
    { label: 'AVAILABLE BEDS', value: '104', sub: 'Across all locations', icon: <Bed className="text-green-600" />, bg: 'bg-green-50' },
    { label: 'PARTNER NGOS', value: '18', icon: <Heart className="text-purple-600" />, bg: 'bg-purple-50' },
    { label: 'FULLY OCCUPIED', value: '4', icon: <Building2 className="text-orange-600" />, bg: 'bg-orange-50' },
  ];

  const shelters = [
    {
      name: "Ogun State Women's Shelter",
      type: "GOVERNMENT",
      verified: true,
      location: "Abeokuta South",
      phone: "+234 803 123 4567",
      services: ["Counseling", "Medical", "Security"],
      status: "AVAILABLE",
      statusColor: "bg-green-100 text-green-700",
      beds: "32 / 50 Beds Free",
      icon: <ShieldCheck className="text-blue-600" />
    },
    {
      name: "Ray of Hope Foundation",
      type: "NGO PARTNER",
      location: "Sagamu",
      phone: "+234 812 555 0192",
      services: ["Rehab", "Vocational"],
      status: "LIMITED",
      statusColor: "bg-yellow-100 text-yellow-700",
      beds: "2 / 20 Beds Free",
      icon: <Heart className="text-purple-600" />
    },
    {
      name: "Better Life Initiative",
      type: "NGO PARTNER",
      location: "Ota, Ado-Odo",
      phone: "+234 708 999 2211",
      services: ["Legal Aid", "Psychological"],
      status: "FULL",
      statusColor: "bg-red-100 text-red-700",
      beds: "0 / 15 Beds Free",
      icon: <Heart className="text-purple-600" />
    },
    {
      name: "Gateway Medical Support Center",
      type: "MEDICAL FACILITY",
      location: "Ilaro",
      phone: "+234 901 112 3344",
      services: ["Emergency Care", "Trauma"],
      status: "AVAILABLE",
      statusColor: "bg-green-100 text-green-700",
      beds: "8 / 10 Beds Free",
      icon: <Stethoscope className="text-teal-600" />
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-700">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
              <Building2 className="text-slate-400 w-6 h-6" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-tight">Ogun State MWA</h1>
              <p className="text-xs text-slate-500 font-medium">Officer Portal</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <NavItem icon={<LayoutDashboard size={18}/>} label="Dashboard" />
          <NavItem icon={<Briefcase size={18}/>} label="Cases" />
          <NavItem icon={<FileText size={18}/>} label="Reports" />
          <NavItem icon={<Home size={18}/>} label="Shelters & NGOs" active />
        </nav>

        <div className="p-4 border-t border-slate-100">
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">System</p>
          <NavItem icon={<Settings size={18}/>} label="Settings" />
          
          <div className="mt-6 p-4 flex items-center gap-3 border-t border-slate-100">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Avatar" className="w-9 h-9 rounded-full bg-slate-200" />
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold text-slate-900 truncate">Sarah Adebayo</p>
              <p className="text-[10px] text-slate-500 truncate">Senior Case Officer</p>
            </div>
            <LogOut size={16} className="text-slate-400 cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-slate-900">Shelter & NGO Directory</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-200/50 p-1 rounded-full px-3">
              <span className="text-xs font-medium text-slate-600">Privacy Mode</span>
              <div className="w-8 h-4 bg-slate-300 rounded-full relative">
                <div className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="relative">
              <Bell size={20} className="text-slate-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
            <button className="bg-[#00AEEF] hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
              <Plus size={18} /> Add Shelter
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-wider mb-1 uppercase">{stat.label}</p>
                <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                {stat.sub && <p className="text-[10px] text-slate-400 mt-1">{stat.sub}</p>}
              </div>
              <div className={`${stat.bg} p-2.5 rounded-lg`}>
                {React.cloneElement(stat.icon, { size: 20 })}
              </div>
            </div>
          ))}
        </div>

        {/* Filters Area */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm mb-6 flex flex-wrap gap-4 items-center">
          <div className="flex-1 relative min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by Shelter Name, Location, or Services..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Filter size={16} /> Filters
          </button>
          <div className="flex bg-slate-50 border border-slate-200 rounded-lg p-1">
            <button className="p-1.5 bg-white shadow-sm rounded-md"><List size={16} className="text-blue-500"/></button>
            <button className="p-1.5"><Map size={16} className="text-slate-400"/></button>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-green-50 text-green-700 text-[11px] font-bold rounded-full border border-green-100 flex items-center gap-1">
              Status: Available <button className="ml-1">×</button>
            </span>
            <span className="px-3 py-1 bg-slate-50 text-slate-700 text-[11px] font-bold rounded-full border border-slate-200 flex items-center gap-1">
              Type: Government <button className="ml-1">×</button>
            </span>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-50 bg-slate-50/30">
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Facility Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location / Contact</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Services</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Availability</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {shelters.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{item.name}</p>
                        <div className="flex gap-2 mt-1">
                          <span className="text-[9px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded tracking-wide uppercase">{item.type}</span>
                          {item.verified && <span className="text-[9px] font-bold text-blue-500 flex items-center gap-1">Verified</span>}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-xs text-slate-600 font-medium">
                        <MapPin size={12} className="text-blue-500" /> {item.location}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Phone size={12} /> {item.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-1.5">
                      {item.services.map((s, i) => (
                        <span key={i} className="px-2 py-0.5 border border-blue-100 text-blue-600 rounded text-[10px] font-medium bg-blue-50/30">
                          {s}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col items-center">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 ${item.statusColor}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${item.statusColor.split(' ')[1].replace('text-', 'bg-')}`}></span>
                        {item.status}
                      </span>
                      <p className="text-[10px] text-slate-400 mt-1">{item.beds}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-3 text-slate-400">
                      <button className="hover:text-blue-500 transition-colors"><Eye size={18} /></button>
                      <button className="hover:text-blue-500 transition-colors"><Edit2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 flex items-center justify-between border-t border-slate-50">
            <p className="text-xs text-slate-500 font-medium">Showing <span className="text-slate-900">1 to 4</span> of <span className="text-slate-900">32</span> facilities</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-xs font-medium text-slate-400 border border-slate-200 rounded-lg">Previous</button>
              <button className="w-8 h-8 flex items-center justify-center text-xs font-bold bg-[#00AEEF] text-white rounded-lg">1</button>
              <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-lg">2</button>
              <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-lg">3</button>
              <span className="text-slate-400">...</span>
              <button className="px-3 py-1.5 text-xs font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all ${
    active ? 'bg-blue-50 text-blue-600 shadow-sm border border-blue-100/50' : 'text-slate-500 hover:bg-slate-50'
  }`}>
    {icon}
    <span className={`text-sm ${active ? 'font-bold' : 'font-medium'}`}>{label}</span>
  </div>
);

export default ShelterDirectory;