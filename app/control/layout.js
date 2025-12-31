"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Home,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  ChevronRight,
} from "lucide-react";

/* ---------------- NAV CONFIG ---------------- */
const navItems = [
  { label: "Dashboard", href: "/control", icon: LayoutDashboard },
  { label: "Cases", href: "/control/cases", icon: Briefcase },
  { label: "Reports", href: "/control/report", icon: FileText },
  { label: "Shelters", href: "/control/shelters", icon: Home },
];

/* ---------------- SIDEBAR ITEM ---------------- */
const SidebarItem = ({ icon: Icon, label, href, active }) => (
  <Link href={href} className="relative group">
    <motion.div
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 z-10 relative ${
        active
          ? "text-blue-600 font-semibold"
          : "text-slate-500 hover:text-slate-900"
      }`}
    >
      <Icon size={20} className={active ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"} />
      <span className="text-sm">{label}</span>
      
      {active && (
        <motion.div
          layoutId="activeNav"
          className="absolute inset-0 bg-blue-50/80 rounded-xl -z-10 border border-blue-100"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.div>
  </Link>
);

export default function DashboardLayout({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex w-72 bg-white border-r border-slate-200 flex-col p-6 sticky top-0 h-screen">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-10 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <LayoutDashboard size={22} />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight">Ogun State MWA</h1>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Officer Portal</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item, idx) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <SidebarItem
                {...item}
                active={pathname === item.href}
              />
            </motion.div>
          ))}
        </nav>

        {/* Footer */}
        <div className="pt-6 border-t border-slate-100 space-y-2">
          <SidebarItem
            icon={Settings}
            label="Settings"
            href="/settings"
            active={pathname === "/settings"}
          />

          <motion.div 
            whileHover={{ y: -2 }}
            className="flex items-center justify-between mt-6 p-4 bg-slate-50 border border-slate-100 rounded-2xl cursor-pointer hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold ring-2 ring-white">
                SA
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold truncate">Sarah Adebayo</p>
                <p className="text-[10px] text-slate-400">Senior Officer</p>
              </div>
            </div>
            <LogOut size={16} className="text-slate-400 hover:text-red-500 transition-colors" />
          </motion.div>
        </div>
      </aside>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex justify-between items-center">
        <button 
          onClick={() => setMobileNavOpen(true)}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Menu size={20} />
        </button>
        <span className="font-bold text-sm tracking-tight text-blue-600">Ogun State MWA</span>
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
            <Bell size={16} className="text-slate-600" />
        </div>
      </div>

      {/* ================= MOBILE NAV OVERLAY ================= */}
      <AnimatePresence>
        {mobileNavOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileNavOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 w-72 h-full bg-white z-[60] p-6 shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
                    M
                </div>
                <button onClick={() => setMobileNavOpen(false)} className="p-2 bg-slate-50 rounded-full">
                  <X size={18} />
                </button>
              </div>
              
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    <div className={`flex items-center justify-between p-4 rounded-xl mb-1 transition-all ${
                      pathname === item.href ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-slate-600"
                    }`}>
                      <div className="flex items-center space-x-3">
                        <item.icon size={18} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <ChevronRight size={14} opacity={0.5} />
                    </div>
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-4 md:p-10 mt-14 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}