"use client";

import React from "react";
import { motion } from "framer-motion";
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
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Logo from "./../public/logo.png";

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

/* ===================== NAVBAR ===================== */
const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100"
  >
    <div className="flex items-center gap-2">

      <motion.div 
        whileHover={{ rotate: 10 }}
        className="relative w-12 h-12" // Container to control size
      >
        <Image 
          src={Logo} 
          alt="Ogun State Logo" 
          width={48} 
          height={48} 
          className="object-contain"
          priority
        />
      </motion.div>
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
        <span className="text-[11px] font-bold text-blue-700 uppercase">
          AI Monitoring Active
        </span>
      </div>

      <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-100">
        <X className="w-4 h-4" />
        Quick Exit
      </button>
    </div>
  </motion.nav>
);

/* ===================== HERO ===================== */
const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-20 md:px-20 lg:flex items-center justify-between gap-12">
    {/* Decorative background blobs */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="max-w-xl relative z-10"
    >
      <motion.div 
        variants={fadeIn}
        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold mb-6 shadow-sm"
      >
        <Brain className="w-3 h-3" />
        AI-POWERED SAFE REPORTING SYSTEM
      </motion.div>

      <motion.h2 
        variants={fadeIn}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4"
      >
        You Are Not Alone. <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Intelligent Help Is Here.
        </span>
      </motion.h2>

      <motion.p 
        variants={fadeIn}
        className="text-gray-600 text-lg leading-relaxed mb-8"
      >
        Report abuse safely and confidentially. Our AI-assisted system 
        prioritizes urgent cases and connects you to verified professionals 
        within minutes.
      </motion.p>

      <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-8">
        <Link href="/report">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-colors"
          >
            <Shield className="w-5 h-5" />
            Report an Incident
          </motion.button>
        </Link>

        <Link href="/report">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border-2 border-red-100 bg-white text-red-600 px-8 py-4 rounded-2xl font-bold hover:bg-red-50 transition-colors"
          >
            Emergency Help
          </motion.button>
        </Link>
      </motion.div>

      <motion.div variants={fadeIn} className="flex items-center gap-3 text-sm text-gray-500">
        <div className="flex -space-x-2">
            {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Expert" />
                </div>
            ))}
        </div>
        <p>Joined by <span className="font-bold text-gray-900">500+</span> verified support agents</p>
      </motion.div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="mt-12 lg:mt-0 relative"
    >
      <div className="bg-gradient-to-tr from-orange-100 to-rose-100 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white p-4 rounded-2xl shadow-2xl relative z-10"
        >
          <img
            src="/image.png"
            alt="Support"
            className="max-w-[300px] md:max-w-[400px] rounded-xl"
          />
        </motion.div>

        {/* Floating AI Tag */}
        <motion.div 
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          className="absolute bottom-12 -left-6 bg-white/95 backdrop-blur border border-blue-100 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
        >
          <div className="bg-blue-600 p-2 rounded-xl">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">AI ACTIVE</p>
            <p className="text-sm font-bold text-gray-900">Secure Analysis</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

/* ===================== FEATURE CARD ===================== */
const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -10 }}
    className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="bg-blue-50 w-14 h-14 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-blue-600 transition-colors">
      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

/* ===================== MAIN ===================== */
export default function GBVPortal() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />

      <section className="px-6 py-24 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Intelligent Protection <br /> You Can Trust
            </motion.h2>
            <p className="text-gray-500 text-lg">
              We leverage responsible AI to accelerate response times while 
              ensuring every case is handled with human empathy.
            </p>
          </div>
          <Link href="/how-it-works" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Learn more about our AI <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            delay={0.1}
            title="AI-Assisted Review"
            description="Our neural networks analyze voice notes and images to instantly flag high-priority danger levels."
          />
          <FeatureCard
            icon={Radar}
            delay={0.2}
            title="Smart Risk Detection"
            description="Pattern recognition helps identify recurring threats and escalates them to law enforcement immediately."
          />
          <FeatureCard
            icon={FileSearch}
            delay={0.3}
            title="Evidence Vault"
            description="Metadata and digital signatures are added to all uploads to ensure they remain admissible in court."
          />
        </div>
      </section>

      <section className="mx-6 md:mx-20 mb-20 rounded-[40px] bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10">
            <Shield className="w-64 h-64" />
        </div>
        
        <div className="relative z-10 px-10 py-20 md:px-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-extrabold mb-8">Powered by Responsible AI</h2>
                <div className="space-y-6">
                    {[
                        "AI supports — never replaces — human decision-making",
                        "Zero automated actions without professional human review",
                        "End-to-end encryption for all sensitive data",
                        "Strict NDPR and data privacy compliance"
                    ].map((text, idx) => (
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            key={idx} 
                            className="flex items-start gap-3"
                        >
                            <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                            <p className="text-gray-300 text-lg">{text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 pt-12">
                        <div className="bg-white/10 h-32 rounded-2xl backdrop-blur-sm" />
                        <div className="bg-blue-600/20 h-48 rounded-2xl backdrop-blur-sm border border-blue-500/30" />
                    </div>
                    <div className="space-y-4">
                        <div className="bg-blue-500/40 h-48 rounded-2xl backdrop-blur-sm border border-blue-400/30" />
                        <div className="bg-white/10 h-32 rounded-2xl backdrop-blur-sm" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      <footer className="px-6 py-12 md:px-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-sm font-bold text-gray-900 mb-2">Ogun State Ministry of Women Affairs</p>
            <p className="text-xs text-gray-400 max-w-xs">
              Dedicated to protecting the rights and well-being of every woman and child in Ogun State.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors">Terms of Use</Link>
            <div className="px-4 py-2 bg-blue-50 rounded-full text-[10px] font-bold text-blue-700 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping" />
                AI-SECURED • HUMAN-VERIFIED
            </div>
          </div>
        </div>
        <p className="text-center text-[10px] text-gray-300 mt-12 italic">
            © 2025 Ogun State Ministry of Women Affairs. All rights reserved.
        </p>
      </footer>
    </div>
  );
}