"use client";

import React from "react";
import {
  Shield,
  Lock,
  EyeOff,
  Phone,
  LifeBuoy,
  X,
  Globe,
  Brain,
  Activity,
  FileSearch,
  Radar,
} from "lucide-react";

/* ===================== NAVBAR ===================== */
const Navbar = () => (
  <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
    <div className="flex items-center gap-2">
      <div className="bg-green-100 p-2 rounded-lg">
        <Shield className="w-5 h-5 text-green-700" />
      </div>
      <div>
        <h1 className="text-sm font-bold text-gray-900 leading-tight">
          Ogun State Ministry of Women Affairs
        </h1>
        <p className="text-[10px] text-gray-500 uppercase tracking-wider">
          GBV Response & Support Unit
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
        <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
        <span className="text-[11px] font-bold text-blue-700">
          AI Monitoring Active
        </span>
      </div>

      <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
        <Globe className="w-4 h-4" />
        English
      </button>

      <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition">
        <X className="w-4 h-4" />
        Quick Exit
      </button>
    </div>
  </nav>
);

/* ===================== HERO ===================== */
const Hero = () => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-20 md:px-20 lg:flex items-center justify-between gap-12">
    <div className="max-w-xl">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold mb-6">
        <Brain className="w-3 h-3" />
        AI-POWERED SAFE REPORTING SYSTEM
      </div>

      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
        You Are Not Alone. <br />
        <span className="text-blue-600">Intelligent Help Is Watching.</span>
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Report abuse safely and confidentially. Our AI-assisted system
        analyzes evidence, prioritizes urgent cases, and connects you
        to verified professionals — faster and safer.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
          <Shield className="w-5 h-5" />
          Report an Incident
        </button>

        <button className="flex items-center gap-2 border-2 border-gray-100 bg-white text-gray-900 px-6 py-4 rounded-xl font-bold hover:bg-gray-50 transition">
          <span className="text-red-500 text-xl">*</span>
          Emergency Help
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Phone className="w-4 h-4 text-blue-500" />
        Immediate Danger? Call <strong className="text-gray-900">112</strong>
      </div>
    </div>

    <div className="mt-12 lg:mt-0 relative">
      <div className="bg-orange-100 rounded-[40px] p-10 relative overflow-hidden">
        <div className="bg-white p-4 rounded shadow-2xl rotate-[-2deg]">
          <img
            src="https://img.freepik.com/free-vector/flat-design-international-women-s-day-illustration_23-2149298282.jpg"
            alt="Support Illustration"
            className="max-w-[350px] rounded"
          />
        </div>

        <div className="absolute bottom-8 left-6 bg-white/90 backdrop-blur border border-blue-100 p-4 rounded-2xl shadow-xl flex items-center gap-4">
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-2 rounded-xl">
            <Brain className="w-6 h-6 text-blue-700" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-blue-900 uppercase">
              AI ACTIVE
            </p>
            <p className="text-sm font-bold text-gray-900">
              Evidence Auto-Analyzed
            </p>
            <p className="text-[11px] text-gray-500">
              Images • Voice • Video • Documents
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ===================== FEATURE CARD ===================== */
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
    <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

/* ===================== MAIN ===================== */
export default function GBVPortal() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />

      <section className="px-6 py-20 md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Intelligent Protection You Can Trust
        </h2>
        <p className="text-gray-500 max-w-2xl mb-12">
          Artificial Intelligence accelerates response time while trained
          professionals handle every case with care and confidentiality.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            title="AI-Assisted Case Review"
            description="AI analyzes reports, voice notes, videos, and images to identify urgency and patterns."
          />
          <FeatureCard
            icon={Radar}
            title="Smart Risk Detection"
            description="High-risk cases are automatically flagged and escalated for immediate attention."
          />
          <FeatureCard
            icon={FileSearch}
            title="Evidence Intelligence"
            description="Key details are extracted, timestamped, and preserved securely for legal review."
          />
        </div>
      </section>

      <section className="px-6 py-20 md:px-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Powered by Responsible AI
        </h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li>✅ AI supports — never replaces — human decision-making</li>
          <li>✅ No automated actions without professional review</li>
          <li>✅ Secure, encrypted, NDPR-compliant data handling</li>
          <li>✅ Victim-first, safety-focused design</li>
        </ul>
      </section>

      <footer className="px-6 py-10 md:px-20 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-400">
            © 2024 Ogun State Ministry of Women Affairs. All rights reserved.
          </p>
          <div className="px-4 py-2 bg-blue-50 rounded-full text-[10px] font-bold text-blue-700 flex items-center gap-2">
            <Brain className="w-3 h-3" />
            AI-SECURED • HUMAN-VERIFIED
          </div>
        </div>
      </footer>
    </div>
  );
}
