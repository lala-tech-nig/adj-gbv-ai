"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import StepIndicator from './StepIndicator';
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function MainLayout({ children, steps = [], currentStep = 1, title = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleQuickExit = () => {
    window.location.href = "https://google.com";
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-black selection:bg-green-500/30 flex flex-col">
      <header className="bg-black text-white px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between relative z-50">
        <div className="flex w-full md:w-auto items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src={Logo} alt="Logo" width={32} height={32} className="bg-white rounded-full p-0.5 shrink-0" />
            <div className="flex flex-col">
              <span className="font-black text-sm tracking-widest uppercase">Ogun State <span className="text-green-500">Safe UI</span></span>
              <span className="text-[10px] text-zinc-400 font-bold tracking-wider">GBV Reporting Portal</span>
            </div>
          </Link>
          {/* Hamburger menu button for mobile */}
          <button
            className="md:hidden p-2 rounded text-zinc-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6 mt-4 md:mt-0">
          <button
            onClick={handleQuickExit}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-red-500/20"
          >
            <X size={16} strokeWidth={3} /> Quick Exit
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-[72px] left-0 right-0 bg-black border-t border-zinc-800 p-4 md:hidden shadow-2xl flex justify-center">
            <button
              onClick={handleQuickExit}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <X size={18} strokeWidth={3} /> Quick Exit (Google)
            </button>
          </div>
        )}
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto py-8 md:py-12 px-4 md:px-6 flex flex-col selection:bg-green-500/30">
        {steps && steps.length > 0 && <StepIndicator steps={steps} currentStep={currentStep} />}
        {title && (
          <div className="mb-8">
            <h2 className="text-4xl font-black tracking-tight">{title}</h2>
          </div>
        )}
        {children}
      </main>

      <footer className="text-center py-10 bg-black text-[11px] text-zinc-500 font-bold uppercase tracking-widest border-t border-zinc-900">
        <p>© {new Date().getFullYear()} Ogun State AI Rapid Response. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-green-500 transition-colors">Trust Protocol</a>
          <a href="#" className="hover:text-green-500 transition-colors">Privacy Shield</a>
        </div>
      </footer>
    </div>
  );
}
