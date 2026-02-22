"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  AlertCircle,
  Clock,
  TrendingUp,
  Plus,
  Bell,
  EyeOff,
  ChevronRight,
  ArrowUpRight,
  Brain,
  Wifi,
  WifiOff,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { io } from "socket.io-client";
import axios from "axios";

// Environment variables or defaults
const SERVER_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/* ------------------ Animation Variants ------------------ */
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

/* ------------------ Reusable Components ------------------ */

const StatCard = ({ title, value, icon: Icon, trend, trendColor, subtext, iconBg }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:shadow-green-500/5 transition-all group"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
          {title}
        </p>
        <motion.h3
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-3xl font-black text-black mt-1"
        >
          {value}
        </motion.h3>
      </div>
      <div className={`p-3 rounded-xl ${iconBg} bg-opacity-[0.15] group-hover:scale-110 transition-transform`}>
        <Icon size={22} className={trendColor} />
      </div>
    </div>

    <div className="flex items-center space-x-2 bg-zinc-50 w-fit px-2 py-1.5 rounded-lg border border-zinc-100">
      <TrendingUp size={14} className={trendColor} />
      <p className={`text-xs font-bold ${trendColor}`}>{trend}</p>
      <p className="text-[10px] text-zinc-400 font-bold uppercase">{subtext}</p>
    </div>
  </motion.div>
);

const CriticalRow = ({ name, id, tag, tagBg, tagText, action, score }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ x: 5 }}
    className="flex items-center justify-between p-4 border border-zinc-100 rounded-2xl hover:bg-zinc-50 transition-all group"
  >
    <div className="flex items-center space-x-4">
      <div className="relative">
        <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shadow-sm">
          {name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
        </div>
      </div>
      <div>
        <p className="text-sm font-black text-black">{name}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <p className="text-[10px] text-zinc-500 font-mono tracking-tighter shadow-sm border border-zinc-200 px-1 rounded bg-white">ID: {id}</p>
          <span className="text-[10px] flex items-center gap-1 font-bold text-red-500">
            <Brain size={10} /> AI Risk: {score}
          </span>
        </div>
      </div>
    </div>

    <div className="hidden sm:block">
      <div className={`px-3 py-1 rounded-full ${tagBg} ${tagText} text-[10px] font-black uppercase tracking-tighter border`}>
        {tag}
      </div>
    </div>

    <button className="flex items-center gap-1 bg-white border border-zinc-200 px-4 py-2 rounded-xl text-xs font-bold text-black hover:border-green-500 hover:text-green-600 transition-colors shadow-sm">
      {action}
      <ChevronRight size={14} />
    </button>
  </motion.div>
);

const LocationBar = ({ label, count, width, color = "bg-green-500" }) => (
  <div className="group">
    <div className="flex justify-between text-[11px] mb-2">
      <span className="text-black font-black uppercase tracking-wide group-hover:text-green-600 transition-colors">{label}</span>
      <span className="text-zinc-500 font-bold">{count} incidents</span>
    </div>
    <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${color} rounded-full`}
      />
    </div>
  </div>
);

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post(`${SERVER_URL}/api/auth/login`, { username, password });
      localStorage.setItem('adminToken', res.data.token);
      onLogin(res.data.token);
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6 selection:bg-green-500/30 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full border border-zinc-200"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-lg shadow-black/20">
            <AlertCircle className="text-white" size={32} />
          </div>
        </div>
        <h2 className="text-2xl font-black text-center text-black mb-2 tracking-tight">Access Control</h2>
        <p className="text-zinc-500 text-center text-sm font-medium mb-8">Enter your credentials to access the secure ADJ-GBV dashboard.</p>

        {error && <div className="p-3 mb-6 bg-red-50 text-red-600 text-sm font-bold rounded-lg border border-red-100 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-xs font-black text-black uppercase tracking-widest mb-2 block">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all font-medium text-black"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="text-xs font-black text-black uppercase tracking-widest mb-2 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all font-medium text-black"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black hover:bg-zinc-800 text-white p-4 rounded-xl font-black flex items-center justify-center gap-2 transition-all shadow-xl shadow-black/10 disabled:opacity-70 mt-4"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [isConnected, setIsConnected] = useState(false);
  const [stats, setStats] = useState({
    totalReports: 0,
    pendingReports: 0,
    resolvedReports: 0,
    highRiskReports: 0,
    monthlyData: [],
    recentCritical: [],
    locationData: [],
    riskDistribution: { critical: 0, elevated: 0, baseline: 0 }
  });

  // No dummy data, wait for real DB stats
  const defaultChartData = [];

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setCheckingAuth(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    // Fetch initial stats
    axios.get(`${SERVER_URL}/api/stats`)
      .then(res => setStats(prev => ({ ...prev, ...res.data })))
      .catch(err => console.error("Stats fetch error", err));

    axios.get(`${SERVER_URL}/api/reports/high-risk`)
      .then(res => setStats(prev => ({ ...prev, recentCritical: res.data })))
      .catch(err => console.error("High risk fetch error", err));

    const socket = io(SERVER_URL);

    socket.on("connect", () => setIsConnected(true));
    socket.on("disconnect", () => setIsConnected(false));

    socket.on("new_report", (report) => {
      // Upon new report, refresh stats
      setStats(prev => ({
        ...prev,
        totalReports: prev.totalReports + 1,
        pendingReports: prev.pendingReports + 1,
        ...(report.aiRiskScore >= 70 && {
          highRiskReports: prev.highRiskReports + 1,
          recentCritical: [report, ...prev.recentCritical].slice(0, 10)
        })
      }));
    });

    return () => {
      socket.disconnect();
    };
  }, [isAuthenticated]);

  if (checkingAuth) {
    return <div className="min-h-screen bg-zinc-50 flex items-center justify-center font-sans tracking-widest text-zinc-500 font-bold uppercase text-xs">Checking Access...</div>;
  }

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  const displayChartData = stats.monthlyData && stats.monthlyData.length > 0
    ? stats.monthlyData.map(d => ({ name: `M${d._id}`, cases: d.count }))
    : defaultChartData;

  const displayCritical = stats.recentCritical && stats.recentCritical.length > 0
    ? stats.recentCritical
    : [];

  const totalRiskCount = (stats.riskDistribution?.critical || 0) +
    (stats.riskDistribution?.elevated || 0) +
    (stats.riskDistribution?.baseline || 0);

  const getRiskPct = (val) => {
    if (totalRiskCount === 0) return "0%";
    return Math.round((val / totalRiskCount) * 100) + "%";
  };

  const riskStats = [
    { label: "Critical Priority", val: getRiskPct(stats.riskDistribution?.critical || 0), color: "bg-white" },
    { label: "Elevated Risk", val: getRiskPct(stats.riskDistribution?.elevated || 0), color: "bg-zinc-500" },
    { label: "Baseline Monitoring", val: getRiskPct(stats.riskDistribution?.baseline || 0), color: "bg-green-500" }
  ];

  const maxLocationCount = stats.locationData && stats.locationData.length > 0 ? Math.max(...stats.locationData.map(l => l.count)) : 1;

  const locationColors = ["bg-black", "bg-zinc-800", "bg-zinc-600", "bg-zinc-400", "bg-green-500"];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      {/* Top Banner indicating Real-Time Status */}
      <div className={`w-full py-2 px-6 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-white transition-colors duration-500 ${isConnected ? 'bg-green-500 text-black' : 'bg-black text-white'}`}>
        <div className="flex items-center gap-2">
          {isConnected ? <Wifi className="w-4 h-4 animate-pulse" /> : <WifiOff className="w-4 h-4" />}
          {isConnected ? "Live Socket.io Connection Active • AI Stream Connected" : "Connection Lost • Reconnecting to AI Stream..."}
        </div>
        <button onClick={handleLogout} className="text-white hover:text-black transition-colors px-2 rounded hover:bg-white/20">LOGOUT</button>
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto p-6 lg:p-10 text-black"
      >
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <motion.h2 variants={fadeInUp} className="text-4xl font-black tracking-tight text-black">
              Command <span className="text-green-600">Center</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-zinc-500 text-sm font-bold mt-1 uppercase tracking-wider">
              Ogun State AI Monitoring Dashboard
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="flex items-center space-x-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center bg-white border border-zinc-200 px-4 py-2.5 rounded-xl text-sm font-bold text-zinc-600 hover:bg-zinc-100 hover:text-black transition-all">
              <EyeOff size={18} className="mr-2" />
              Privacy Mode
            </button>

            <div className="relative p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-500 hover:text-green-500 cursor-pointer transition-colors shadow-sm">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white ring-2 ring-green-100 animate-pulse" />
            </div>

            <button className="flex-1 md:flex-none bg-black hover:bg-zinc-800 text-white px-6 py-2.5 rounded-xl flex items-center justify-center space-x-2 text-sm font-bold transition-all shadow-lg shadow-black/20">
              <Plus size={20} />
              <span>Manual Entry</span>
            </button>
          </motion.div>
        </header>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          <StatCard title="Total Cases" value={stats.totalReports} icon={Briefcase} trend="+12.5%" trendColor="text-green-500" subtext="Live Data" iconBg="text-green-500 bg-green-500" />
          <StatCard title="High Risk (AI)" value={stats.highRiskReports} icon={Brain} trend="Critical" trendColor="text-black" subtext="Requires Attention" iconBg="text-white bg-black" />
          <StatCard title="Pending Review" value={stats.pendingReports} icon={Clock} trend="Action" trendColor="text-zinc-800" subtext="In Queue" iconBg="text-zinc-800 bg-zinc-800" />
          <StatCard title="Resolved" value={stats.resolvedReports} icon={AlertCircle} trend="Stable" trendColor="text-zinc-400" subtext="Successfully closed" iconBg="text-zinc-400 bg-zinc-400" />
        </motion.div>

        {/* Middle Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h4 className="font-black text-xl md:text-2xl text-black tracking-tight">AI Incident Projection</h4>
                <p className="text-xs font-bold text-zinc-400 tracking-wider uppercase mt-1">Real-Time Trajectory Analysis</p>
              </div>
              <div className="flex gap-2">
                {['7D', '1M', '6M'].map(t => (
                  <button key={t} className={`px-4 py-1.5 text-xs font-black rounded-lg transition-colors ${t === '6M' ? 'bg-black text-white shadow-md' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'}`}>{t}</button>
                ))}
              </div>
            </div>

            {/* Recharts Area Chart */}
            <div className="w-full h-64 -ml-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={displayChartData}>
                  <defs>
                    <linearGradient id="colorCases" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E4E4E7" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#A1A1AA', fontSize: 12, fontWeight: 700 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#A1A1AA', fontSize: 12, fontWeight: 700 }} dx={-10} />
                  <Tooltip
                    contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                    itemStyle={{ color: '#10B981', fontWeight: 900 }}
                  />
                  <Area type="monotone" dataKey="cases" stroke="#10B981" strokeWidth={4} fillOpacity={1} fill="url(#colorCases)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* AI Risk Profile Panel */}
          <motion.div variants={fadeInUp} className="bg-black p-8 rounded-3xl shadow-2xl text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Brain size={120} />
            </div>
            <div className="relative z-10 w-full">
              <h4 className="font-black text-2xl mb-1 flex items-center gap-2">
                <Brain className="text-green-500" /> AI Risk Profile
              </h4>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-8 border-b border-zinc-800 pb-4">Severity Distribution Matrix</p>

              <div className="space-y-6">
                {riskStats.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-black mb-2 uppercase tracking-wide">
                      <span className="text-zinc-300">{item.label}</span>
                      <span className="text-white bg-zinc-800 px-2 py-0.5 rounded-md">{item.val}</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-900 rounded-full border border-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: item.val }}
                        transition={{ duration: 1.5, delay: 0.5 + (idx * 0.2), ease: "easeOut" }}
                        className={`h-full ${item.color} rounded-full shadow-[0_0_10px_${item.color.replace('bg-', '')}]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-4 bg-zinc-900 rounded-2xl border border-zinc-800 relative z-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-xl mt-1">
                  <ArrowUpRight className="text-green-500" size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-white">Efficiency Surge</h5>
                  <p className="text-[11px] text-zinc-400 font-medium leading-relaxed mt-1">Analytics drawn directly from the live database.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-black text-xl flex items-center gap-3 tracking-tight">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                Urgent Response Queue
              </h4>
              <button className="text-black bg-zinc-100 border border-zinc-200 text-xs font-black tracking-widest hover:bg-black hover:text-white px-4 py-2 rounded-lg transition-colors uppercase">
                View All
              </button>
            </div>

            <motion.div variants={staggerContainer} className="space-y-3">
              {displayCritical.length > 0 ? displayCritical.map((item, idx) => (
                <CriticalRow
                  key={idx}
                  name={item.title || "Unknown Incident"}
                  id={item._id.substring(item._id.length - 6).toUpperCase()}
                  tag={item.aiAnalysis || "Pending"}
                  tagBg={item.aiRiskScore > 80 ? "bg-black border-black" : "bg-zinc-100 border-zinc-200"}
                  tagText={item.aiRiskScore > 80 ? "text-white" : "text-black"}
                  action="Triage"
                  score={item.aiRiskScore}
                />
              )) : (
                <div className="p-10 text-center border-2 border-dashed border-zinc-200 rounded-2xl">
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">No Critical Incidents</p>
                </div>
              )}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
            <h4 className="font-black text-xl mb-8 tracking-tight flex gap-2 items-center">
              <Briefcase className="text-green-500" />
              Hotspot Radar
            </h4>
            <div className="space-y-6">
              {stats.locationData && stats.locationData.length > 0 ? (
                stats.locationData.map((loc, idx) => {
                  const pct = Math.round((loc.count / maxLocationCount) * 100) + "%";
                  return (
                    <LocationBar
                      key={idx}
                      label={loc._id || "Unknown"}
                      count={loc.count}
                      width={pct}
                      color={locationColors[idx % locationColors.length]}
                    />
                  );
                })
              ) : (
                <div className="text-zinc-500 font-bold uppercase tracking-widest text-xs text-center p-6 border-2 border-dashed border-zinc-200 rounded-2xl">
                  No Location Data
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}