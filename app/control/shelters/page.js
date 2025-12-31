"use client";

import React from "react";
import {
  Search,
  Filter,
  List,
  Map,
  Bell,
  Plus,
  Eye,
  Edit2,
  Phone,
  MapPin,
  ShieldCheck,
  Heart,
  Stethoscope,
  Building2,
  Bed,
  Home,
} from "lucide-react";

export default function ShelterDirectoryPage() {
  const stats = [
    {
      label: "TOTAL FACILITIES",
      value: "32",
      icon: <Home className="text-blue-600" />,
      bg: "bg-blue-50",
    },
    {
      label: "AVAILABLE BEDS",
      value: "104",
      sub: "Across all locations",
      icon: <Bed className="text-green-600" />,
      bg: "bg-green-50",
    },
    {
      label: "PARTNER NGOS",
      value: "18",
      icon: <Heart className="text-purple-600" />,
      bg: "bg-purple-50",
    },
    {
      label: "FULLY OCCUPIED",
      value: "4",
      icon: <Building2 className="text-orange-600" />,
      bg: "bg-orange-50",
    },
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
      icon: <ShieldCheck className="text-blue-600" />,
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
      icon: <Heart className="text-purple-600" />,
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
      icon: <Heart className="text-purple-600" />,
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
      icon: <Stethoscope className="text-teal-600" />,
    },
  ];

  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-900">
          Shelter & NGO Directory
        </h2>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-200/50 px-3 py-1 rounded-full">
            <span className="text-xs font-medium text-slate-600">
              Privacy Mode
            </span>
            <div className="w-8 h-4 bg-slate-300 rounded-full relative">
              <div className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full" />
            </div>
          </div>

          <div className="relative">
            <Bell size={20} className="text-slate-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </div>

          <button className="bg-[#00AEEF] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
            <Plus size={18} /> Add Shelter
          </button>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex justify-between"
          >
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">
                {stat.label}
              </p>
              <h3 className="text-3xl font-bold text-slate-900">
                {stat.value}
              </h3>
              {stat.sub && (
                <p className="text-[10px] text-slate-400">{stat.sub}</p>
              )}
            </div>
            <div className={`${stat.bg} p-2.5 rounded-lg`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-wrap gap-4 items-center">
        <div className="flex-1 relative min-w-[260px]">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            placeholder="Search by shelter, location or service..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
          />
        </div>

        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm">
          <Filter size={16} /> Filters
        </button>

        <div className="flex bg-slate-50 border rounded-lg p-1">
          <button className="p-1.5 bg-white shadow-sm rounded-md">
            <List size={16} className="text-blue-500" />
          </button>
          <button className="p-1.5">
            <Map size={16} className="text-slate-400" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50">
            <tr>
              <th className="px-6 py-4 text-xs text-slate-400">
                Facility
              </th>
              <th className="px-6 py-4 text-xs text-slate-400">
                Location / Contact
              </th>
              <th className="px-6 py-4 text-xs text-slate-400">
                Services
              </th>
              <th className="px-6 py-4 text-xs text-slate-400 text-center">
                Availability
              </th>
              <th className="px-6 py-4 text-xs text-slate-400 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {shelters.map((item, idx) => (
              <tr key={idx} className="border-t hover:bg-slate-50">
                <td className="px-6 py-4">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <span className="text-[10px] uppercase text-slate-400">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} /> {item.location}
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Phone size={12} /> {item.phone}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {item.services.map((s, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-600 rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                  <p className="text-[10px] text-slate-400">
                    {item.beds}
                  </p>
                </td>

                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-3 text-slate-400">
                    <Eye size={18} />
                    <Edit2 size={18} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
