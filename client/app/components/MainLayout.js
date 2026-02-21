"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import StepIndicator from './StepIndicator';
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function MainLayout({ children, steps = [], currentStep = 1, title = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
    <header className="bg-white border-b border-gray-100 px-4 md:px-6 py-3 flex items-center justify-between relative">
      <div className="flex items-center gap-3">
        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Logo */}
        <div className="w-10 h-10 relative rounded-full overflow-hidden">
          <Image
            src={Logo}
            alt="Ogun State Ministry of Women Affairs Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div>
          <h1 className="text-sm font-bold">Ogun State Ministry of Women Affairs</h1>
          <p className="text-[10px] text-gray-500">GBV Reporting Portal</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <nav className="flex gap-4 text-sm text-gray-600">
          <Link href="#" className="hover:text-blue-600">Resources</Link>
          <Link href="#" className="hover:text-blue-600">Help Center</Link>
        </nav>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
          <X size={16} /> Safety Exit
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-14 left-4 right-4 bg-white rounded-lg shadow-md p-4 md:hidden z-40">
          <nav className="flex flex-col gap-3">
            <Link href="#" onClick={() => setMenuOpen(false)} className="py-2">Resources</Link>
            <Link href="#" onClick={() => setMenuOpen(false)} className="py-2">Help Center</Link>
            <button onClick={() => setMenuOpen(false)} className="py-2 text-left text-red-600">Safety Exit</button>
          </nav>
        </div>
      )}
    </header>

      <main className="max-w-5xl mx-auto py-8 md:py-12 px-4 md:px-6">
        {steps && steps.length > 0 && <StepIndicator steps={steps} currentStep={currentStep} />}
        {title && (
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
          </div>
        )}
        {children}
      </main>

      <footer className="text-center py-10 text-[11px] text-gray-400">
        <p>© 2024 Ogun State Ministry of Women Affairs. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Accessibility</a>
        </div>
      </footer>
    </div>
  );
}
