"use client";

import React from 'react';
import { 
  LayoutDashboard, FileText, BarChart3, Home, Settings, 
  LogOut, MapPin, AlertTriangle, ShieldAlert, User, 
  Phone, Languages, Upload, Play, FileImage, FileAudio, FileDown 
} from 'lucide-react';

const CaseDetailsPage = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
              <span className="text-sky-600 font-bold text-xs">MWA</span>
            </div>
            <div>
              <h1 className="text-sm font-bold leading-tight">Ogun State MWA</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Officer Portal</p>
            </div>
          </div>

          <nav className="space-y-1">
            <NavItem icon={<LayoutDashboard size={18}/>} label="Dashboard" />
            <NavItem icon={<FileText size={18}/>} label="Cases" active />
            <NavItem icon={<BarChart3 size={18}/>} label="Reports" />
            <NavItem icon={<Home size={18}/>} label="Shelters" />
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-100">
          <p className="text-[10px] text-slate-400 uppercase mb-4 font-bold">System</p>
          <NavItem icon={<Settings size={18}/>} label="Settings" />
          <div className="mt-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold">Sarah Adebayo</p>
              <p className="text-[10px] text-slate-500">Senior Case Officer</p>
            </div>
            <LogOut size={16} className="text-slate-400 cursor-pointer" />
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <span>Cases</span> <span>&rsaquo;</span> <span>Active</span> <span>&rsaquo;</span> <span className="text-slate-600">#GBV-2023-894</span>
            </div>
            <h2 className="text-2xl font-bold">Case Details</h2>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center bg-slate-200 p-1 rounded-full px-3">
                <span className="text-[10px] font-bold mr-2">Privacy Mode</span>
                <div className="w-8 h-4 bg-slate-400 rounded-full"></div>
             </div>
             <div className="relative">
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
                <ShieldAlert size={20} className="text-slate-400" />
             </div>
          </div>
        </div>

        <div className="flex gap-2 text-sky-600 text-sm font-medium mb-6 cursor-pointer hover:underline">
          <span>&larr;</span> Back to Case List
          <div className="ml-auto flex items-center gap-4 text-slate-500 font-normal">
            <span className="flex items-center gap-2">Status: <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider underline decoration-blue-700 underline-offset-4">• IN PROGRESS</span></span>
            <span>Last Updated: Oct 24, 2023 • 14:45</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column (Report and Evidence) */}
          <div className="col-span-8 space-y-6">
            {/* Incident Report Card */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <FileText className="text-sky-500" size={20} />
                  Incident Report
                </div>
                <button className="text-sky-600 text-xs font-medium">Edit Details</button>
              </div>
              <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                <p>
                  The victim reported a severe incident of domestic violence occurring at her residence in Abeokuta South. 
                  According to the statement, the perpetrator (identified as the spouse) returned home in an intoxicated state around 14:00 hours on Oct 24, 2023. 
                  A verbal altercation escalated rapidly into physical assault involving a blunt object.
                </p>
                <p>
                  Neighbors intervened after hearing distress calls and contacted the local shelter hotline. 
                  The victim sustained visible injuries to the upper arm and facial area. 
                  Preliminary medical attention was provided on-site by the response team before transfer to the shelter.
                </p>
              </div>
              <div className="mt-8 bg-sky-50 rounded-lg p-4 border border-sky-100">
                <p className="text-[10px] font-bold text-sky-700 uppercase mb-2">Location Context</p>
                <div className="flex items-start gap-3">
                  <MapPin className="text-sky-600" size={20} />
                  <div>
                    <p className="text-sm font-bold text-slate-800">Oke-Ilewo Street, Abeokuta South LGA</p>
                    <p className="text-xs text-sky-600">Coordinates: 7.1550° N, 3.3480° E (Approximate)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Evidence Vault Card */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <Upload className="text-sky-500" size={20} />
                  Evidence Vault
                </div>
                <button className="bg-sky-500 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2">
                  <Upload size={14} /> Add Evidence
                </button>
              </div>
              
              <div className="flex border-b border-slate-100 mb-6">
                <Tab label="Images (3)" active />
                <Tab label="Audio (1)" />
                <Tab label="Documents (2)" />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <EvidenceThumbnail label="Injury_LeftArm.jpg" />
                <EvidenceThumbnail label="Scene_LivingRoom.jpg" />
                <EvidenceThumbnail label="Medical_Report_Prelim.jpg" />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-full px-4 py-3 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sky-600 cursor-pointer shadow-sm">
                  <Play size={14} fill="currentColor" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-[10px] font-bold text-slate-700">Voice Note - Witness Account.mp3</span>
                    <span className="text-[10px] text-slate-400 font-bold">02:14</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-sky-500 w-1/3"></div>
                  </div>
                </div>
                <FileDown size={18} className="text-slate-400 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right Column (Risk and Victim) */}
          <div className="col-span-4 space-y-6">
            {/* AI Risk Analysis Card */}
            <div className="bg-white rounded-xl border-t-4 border-t-orange-400 border border-slate-200 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-violet-600 p-1.5 rounded-md">
                  <ShieldAlert size={16} className="text-white" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">AI RISK ANALYSIS</h3>
              </div>

              <div className="flex justify-between items-center bg-red-50 p-4 rounded-lg mb-6">
                <span className="text-xs font-bold text-red-800">Risk Level</span>
                <span className="bg-red-600 text-white text-[10px] px-3 py-1 rounded-md font-bold flex items-center gap-1">
                   <AlertTriangle size={12} /> CRITICAL
                </span>
              </div>

              <p className="text-[10px] font-bold text-sky-800 uppercase mb-4 tracking-wider">Key Risk Indicators</p>
              <ul className="space-y-3 mb-6">
                <RiskIndicator text="History of escalating violence" />
                <RiskIndicator text="Weapon involved (Blunt object)" />
                <RiskIndicator text="Perpetrator access to victim" />
              </ul>

              <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 flex gap-3">
                <ShieldAlert className="text-orange-600 shrink-0" size={18} />
                <p className="text-[11px] text-orange-900 leading-relaxed">
                  <span className="font-bold">System Warning:</span> Immediate separation recommended. Escalation probability calculated at 85% within 48 hours.
                </p>
              </div>
            </div>

            {/* Victim Details Card */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-6 text-slate-800">
                <User size={18} />
                <h3 className="text-sm font-bold">VICTIM DETAILS</h3>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                   <User size={24} className="text-slate-400" />
                </div>
                <div>
                  <h4 className="font-bold">Amina Johnson</h4>
                  <p className="text-xs text-slate-500 font-medium">Age: 32 • Female</p>
                </div>
              </div>

              <div className="space-y-4">
                <DetailItem label="Phone Number (Redacted)" value="+234 803 123 ****" icon={<Phone size={14}/>} />
                <DetailItem label="Primary Language" value="Yoruba, English" icon={<Languages size={14}/>} />
                <DetailItem label="Registered Address LGA" value="Abeokuta South" />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-6 text-slate-800">
                  <User size={18} />
                  <h3 className="text-sm font-bold uppercase">Officer Actions</h3>
                </div>
                <button className="w-full bg-sky-500 text-white font-bold py-3 rounded-xl text-sm shadow-lg shadow-sky-200">Update Status</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Sub-Components for Clean Code ---

const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-sky-50 text-sky-600 font-bold' : 'text-slate-500 hover:bg-slate-50'}`}>
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

const Tab = ({ label, active = false }) => (
  <div className={`px-4 py-2 text-xs font-bold cursor-pointer border-b-2 transition-colors ${active ? 'border-sky-500 text-sky-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
    {label}
  </div>
);

const EvidenceThumbnail = ({ label }) => (
  <div className="space-y-2">
    <div className="aspect-video bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden">
      <FileImage size={32} className="text-slate-300" />
    </div>
    <div className="bg-slate-700 text-white text-[9px] px-2 py-1 rounded truncate">
      {label}
    </div>
  </div>
);

const RiskIndicator = ({ text }) => (
  <li className="flex items-center gap-2">
    <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
    </div>
    <span className="text-xs text-slate-700 font-medium">{text}</span>
  </li>
);

const DetailItem = ({ label, value, icon }) => (
  <div>
    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-wide">{label}</p>
    <div className="bg-sky-50/50 p-2 px-3 rounded-md flex items-center justify-between">
      <span className="text-xs font-bold text-slate-800">{value}</span>
      {icon && <span className="text-sky-500">{icon}</span>}
    </div>
  </div>
);

export default CaseDetailsPage;