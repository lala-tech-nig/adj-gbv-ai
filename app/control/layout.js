"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Home,
  Settings,
  LogOut,
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
  <Link href={href}>
    <div
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
        active
          ? "bg-blue-50 text-blue-600"
          : "text-slate-500 hover:bg-gray-100"
      }`}
    >
      <Icon size={20} />
      <span className="font-medium text-sm">{label}</span>
    </div>
  </Link>
);

export default function DashboardLayout({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex w-64 bg-white border-r border-slate-200 flex-col p-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-10">
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold">
            LOGO
          </div>
          <div>
            <h1 className="text-sm font-bold">Ogun State MWA</h1>
            <p className="text-[10px] text-slate-400 uppercase">Officer Portal</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              active={pathname === item.href} // <-- strict match
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="pt-6 border-t border-slate-100 space-y-2">
          <SidebarItem
            icon={Settings}
            label="Settings"
            href="/settings"
            active={pathname === "/settings"} // <-- strict match
          />

          <div className="flex items-center justify-between mt-6 p-3 bg-slate-50 rounded-xl">
            <div>
              <p className="text-xs font-bold">Sarah Adebayo</p>
              <p className="text-[10px] text-slate-400">Senior Case Officer</p>
            </div>
            <LogOut size={16} className="text-slate-400 cursor-pointer" />
          </div>
        </div>
      </aside>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b px-4 py-3 flex justify-between items-center">
        <button onClick={() => setMobileNavOpen(true)}>☰</button>
        <span className="font-bold text-sm">Ogun State MWA</span>
      </div>

      {/* ================= MOBILE NAV ================= */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setMobileNavOpen(false)}
        >
          <div
            className="absolute left-0 top-0 w-64 h-full bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                >
                  <div
                    className={`p-3 rounded ${
                      pathname === item.href
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600"
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-4 md:p-8 mt-12 md:mt-0 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
