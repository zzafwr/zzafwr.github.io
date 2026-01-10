"use client";

import React from 'react';
import { Github, Instagram, Music, ChevronRight, Terminal, Zap, ShieldCheck, Code2, MessageSquare, MonitorCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-blue-600 overflow-x-hidden font-sans">
      
      {/* Stil Ayarları */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700;900&display=swap');
        
        body { margin: 0; font-family: 'Space Grotesk', sans-serif; background-color: #000000; }
        .font-black-custom { font-family: 'Space Grotesk', sans-serif !important; font-weight: 900 !important; }
        .blue-glow-text { text-shadow: 0 0 45px rgba(37, 99, 235, 0.5); }
        .grid-overlay {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>

      {/* Arka Plan */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-overlay"></div>
        <div className="absolute top-[-15%] left-[-5%] w-[60%] h-[60%] bg-blue-900/10 blur-[140px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 max-w-7xl mx-auto flex justify-between items-center px-12 py-16">
        <div className="text-3xl font-black-custom tracking-tighter italic">
          <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]">zzafwr</span>
          <span className="text-gray-500">.dev_</span>
        </div>
        <div className="flex gap-16 items-center font-black-custom text-[13px] tracking-[0.4em] uppercase">
          <button className="text-gray-500 hover:text-white transition-all bg-transparent border-none cursor-pointer tracking-[0.5em]">2020 — 2026</button>
          <button className="px-12 py-4 border border-blue-900/40 rounded-full bg-transparent text-white cursor-pointer transition-all hover:border-blue-500 hover:bg-blue-600/5 font-black tracking-[0.2em]">
            CONTACT
          </button>
        </div>
      </nav>

      {/* Hero & Yetenekler */}
      <section className="relative z-10 max-w-7xl mx-auto px-12 pb-32">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Sol: Başlık ve Giriş */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-blue-950/20 border border-blue-900/30 text-[11px] font-black-custom uppercase tracking-[0.5em] text-blue-500">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_12px_#2563eb] animate-pulse"></span>
              EST. 2020 // EXPERT DEVELOPER
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-black-custom leading-[0.85] tracking-[-0.05em] uppercase italic blue-glow-text" style={{ fontSize: 'clamp(60px, 10vw, 110px)' }}>
              ZZAFWR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-white">MEDİA</span>
            </motion.h1>

            <p className="text-gray-500 text-2xl font-light leading-relaxed max-w-xl">
              "6 Yıllık Tecrübe, Sayısız Çözüm." <br />
              <span className="text-white font-bold italic">2020 yılında </span> başlayan bu serüven, bugün yüksek performanslı sistemlerle devam ediyor. 
              Sorun çözmek hobim, <span className="text-blue-500 italic font-bold underline underline-offset-4">kusursuz kod </span> ise standardım.
            </p>

            {/* Yetenek Kartları */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <SkillCard 
                icon={<MessageSquare size={30} />} 
                title="Discord Bot" 
                desc="Gelişmiş API entegrasyonlu, moderasyon ve ekonomi botları." 
              />
              <SkillCard 
                icon={<MonitorCheck size={30} />} 
                title="Web Design" 
                desc="Modern, hızlı ve SEO uyumlu full-stack web projeleri." 
              />
            </div>
          </div>

          {/* Sağ: Teknik Stats */}
          <div className="lg:col-span-5 space-y-6 pt-20">
            <StatsCard icon={<Terminal size={24}/>} title="CORE SYSTEM" val="NEXT.JS" />
            <StatsCard icon={<Code2 size={24}/>} title="BOT ENGINE" val="NODE.JS" />
            <StatsCard icon={<Zap size={24}/>} title="DATABASE" val="MONGODB" />
            
            <div className="p-10 rounded-[32px] bg-blue-600/10 border border-blue-600/20 mt-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <h4 className="font-black-custom text-xl italic mb-4">HAZIR MISIN?</h4>
                <p className="text-gray-400 text-sm mb-8 font-light leading-relaxed">Projelerini hayata geçirmek için 6 yıllık tecrübeyle buradayım.</p>
                
                {/* Sosyal Medya Linkleri */}
                <div className="flex gap-8">
                    <a href="https://github.com/zzafwr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-all transform hover:scale-110">
                        <Github size={28} />
                    </a>
                    <a href="https://instagram.com/zzafwr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-all transform hover:scale-110">
                        <Instagram size={28} />
                    </a>
                    <a href="https://open.spotify.com/intl-tr/artist/02AJ0fWcAGJ6wckcvznZeE?si=OPU-0gdJQiGGYp169cjyog" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition-all transform hover:scale-110">
                        <Music size={28} />
                    </a>
                </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

function SkillCard({ icon, title, desc }: any) {
  return (
    <div className="group p-8 bg-[#080808] border border-white/[0.05] rounded-[32px] hover:border-blue-600/40 transition-all">
      <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(37,99,235,0.3)]">
        {icon}
      </div>
      <h3 className="font-black-custom text-2xl italic mb-3 uppercase tracking-tighter">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function StatsCard({ icon, title, val }: any) {
  return (
    <motion.div whileHover={{ x: 12 }} className="p-8 bg-[#0A0A0A] border border-white/[0.04] rounded-[28px] flex items-center justify-between group hover:border-blue-900/40 transition-all backdrop-blur-sm">
      <div className="flex items-center gap-6">
        <div className="text-blue-600 transition-all drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]">{icon}</div>
        <div className="font-black-custom text-[11px] font-bold tracking-[0.3em] text-gray-600 uppercase">{title}</div>
      </div>
      <div className="font-black-custom text-2xl font-black italic text-white tracking-tighter">{val}</div>
    </motion.div>
  );
}