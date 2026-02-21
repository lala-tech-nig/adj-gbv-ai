"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Activity,
  ArrowRight,
  Brain,
  Radar,
  FileSearch,
  CheckCircle2,
  Lock,
  MessageSquareWarning,
  Eye,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Logo from "./../public/logo.png";

// Animation Variants
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.15 } }
};

/* ===================== NAVBAR ===================== */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-full p-1 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <Image src={Logo} alt="Ogun State Logo" width={48} height={48} className="object-contain" priority />
          </motion.div>
          <div className="hidden sm:block">
            <h1 className={`text-sm md:text-base font-extrabold tracking-tight ${scrolled ? 'text-white' : 'text-black'}`}>
              ADJ-GBV <span className="text-green-500">AI</span>
            </h1>
            <p className={`text-[10px] md:text-xs tracking-widest uppercase font-semibold ${scrolled ? 'text-gray-400' : 'text-gray-600'}`}>
              Ogun State Ministry
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className={`hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border ${scrolled ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className={`text-[11px] font-bold uppercase tracking-wider ${scrolled ? 'text-green-400' : 'text-green-600'}`}>
              AI Shield Active
            </span>
          </div>

          <Link href="/report">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-red-600/20 transition-all flex items-center gap-2"
            >
              Emergency Exit
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

/* ===================== HERO ===================== */
const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden bg-black selection:bg-green-500/30">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Glowing Orbs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-green-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-emerald-800/30 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full self-start">
            <Brain className="w-4 h-4 text-green-400" />
            <span className="text-xs font-bold text-gray-300 tracking-widest uppercase">The First Visionary AI Initiative</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-white leading-[1.05] tracking-tight mb-8">
            Silence is no <br /> longer <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">an option.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl font-light">
            Ogun State introduces the first AI-driven platform dedicated to fighting Gender-Based Violence. Instant risk analysis, secure evidence vaults, and immediate professional routing.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link href="/report">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(16,185,129,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-500 text-black px-8 py-4 rounded-full font-extrabold text-lg transition-all"
              >
                <MessageSquareWarning className="w-6 h-6" />
                Report an Incident
              </motion.button>
            </Link>

            <Link href="/control">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border border-gray-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:border-gray-400"
              >
                <Activity className="w-5 h-5" />
                Live Control Room
              </motion.button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex items-center gap-6 border-t border-white/10 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden relative">
                  <Image src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Responder" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-white font-bold text-sm">24/7 Rapid Response</p>
              <p className="text-gray-500 text-xs">Over 500+ professionals on standby</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="lg:col-span-5 relative perspective-1000 hidden lg:block"
        >
          <div className="relative w-full aspect-square rounded-[3rem] bg-gradient-to-br from-green-500/10 to-transparent border border-white/5 backdrop-blur-3xl overflow-hidden flex items-center justify-center shadow-2xl shadow-green-900/20">
            {/* Center Core */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 rounded-full border border-green-500/30 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 rounded-full border border-green-400/20 border-dotted"
            />

            <div className="relative z-10 bg-black border border-green-500/40 w-32 h-32 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.3)] box-glow">
              <Brain className="w-16 h-16 text-green-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-[10%] bg-black/80 border border-green-500/30 px-4 py-3 rounded-2xl backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">Encrypted</p>
                <p className="text-white text-sm font-black">100% Secure</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[25%] left-[5%] bg-black/80 border border-green-500/30 px-4 py-3 rounded-2xl backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <Radar className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">AI Analysis</p>
                <p className="text-white text-sm font-black">&lt; 2.4s Delay</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

/* ===================== FEATURE CARD ===================== */
const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -5 }}
    className="bg-zinc-50 border border-zinc-200 p-10 rounded-[2rem] hover:shadow-2xl hover:shadow-black/5 transition-all group"
  >
    <div className="w-16 h-16 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black transition-colors shadow-sm">
      <Icon className="w-8 h-8 text-black group-hover:text-green-400 transition-colors" />
    </div>
    <h3 className="text-2xl font-black text-black mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-600 text-lg leading-relaxed font-medium">{description}</p>
  </motion.div>
);

/* ===================== AI OVERVIEW ===================== */
const AISection = () => (
  <section className="bg-white py-32 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-black leading-tight mb-6 tracking-tighter"
          >
            Pioneering Intelligence <br /> for <span className="text-green-600 outline-text">Human Safety.</span>
          </motion.h2>
          <p className="text-xl text-gray-500 font-medium">
            We leverage state-of-the-art predictive models combined with human empathy to classify danger, secure evidence, and deploy aid faster than ever.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Brain}
          delay={0.1}
          title="NLP Risk Profiling"
          description="Context-aware sentiment analysis scans reports instantly to escalate severe threats directly to rapid response teams."
        />
        <FeatureCard
          icon={Lock}
          delay={0.2}
          title="Immutable Evidence"
          description="Uploads are processed via advanced cryptographic hashing, ensuring courts receive tamper-proof, time-stamped files."
        />
        <FeatureCard
          icon={Activity}
          delay={0.3}
          title="Real-Time Analytics"
          description="Machine learning uncovers localized hotspots, allowing the Ministry to allocate preventative resources exactly where needed."
        />
      </div>
    </div>
  </section>
);

/* ===================== IMPACT & FOOTER ===================== */
const ActionFooter = () => (
  <section className="bg-black text-white relative flex flex-col items-center border-t border-white/10 pt-32 pb-16 px-6">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#10B981_0%,transparent_50%)] opacity-20" />

    <div className="max-w-4xl w-full text-center relative z-10 mb-32">
      <Shield className="w-20 h-20 text-green-500 mx-auto mb-8 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
      <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">Your voice is safe here.</h2>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
        Speak up without fear. The application is completely secure, anonymous if you choose, and immediately actionable.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/report">
          <button className="w-full sm:w-auto bg-green-500 text-black px-10 py-5 rounded-full font-black text-lg hover:bg-green-400 hover:scale-105 transition-all">
            Start a Report
          </button>
        </Link>
        <Link href="/control">
          <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            Enter Live Dashboard
          </button>
        </Link>
      </div>
    </div>

    <div className="w-full max-w-7xl mx-auto border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
      <div className="flex items-center gap-4">
        <Image src={Logo} alt="Logo" width={40} height={40} />
        <div>
          <p className="font-bold text-sm">Ogun State Ministry of Women Affairs</p>
          <p className="text-xs text-green-500 font-mono">SYSTEM // ADJ-GBV-AI.v1</p>
        </div>
      </div>

      <div className="flex gap-6 text-sm font-medium text-gray-500">
        <Link href="#" className="hover:text-white transition-colors">Privacy Protocol</Link>
        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        <Link href="#" className="hover:text-white transition-colors">Emergency Contacts</Link>
      </div>

      <p className="text-xs text-gray-600">
        © 2025 ALL RIGHTS RESERVED.
      </p>
    </div>
  </section>
);

export default function GBVPortal() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-green-500/30 selection:text-green-50">
      <Navbar />
      <Hero />
      <AISection />
      <ActionFooter />
    </div>
  );
}