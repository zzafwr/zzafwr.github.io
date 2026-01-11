"use client";

import React from 'react';
import { Github, Instagram, Music, Terminal, Zap, Code2, MessageSquare, MonitorCheck } from 'lucide-react';
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
        <div className="absolute top-[-15%] left-[-5%] w-[100%] md:w-[60%] h-[60%] bg-blue-900/10 blur-[100px] md:blur-[140px] rounded-full"></div>
      </div>

      {/* Navbar - Mobilde Contact Gizli, Tarih Sağa Yaslı */}
      <nav className="relative z-50 max-w-7xl mx-auto flex flex-row justify-between items-center px-6 md:px-12 py-8 md:py-16">
        <div className="text-2xl md:text-3xl font-black-custom tracking-tighter italic">
          <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]">zzafwr</span>
          <span className="text-gray-500">.dev_</span>
        </div>
        <div className="flex items-center font-black-custom text-[10px] md:text-[13px] tracking-[0.3em] md:tracking-[0.4em] uppercase">
          <button className="text-gray-500 hover:text-white transition-all bg-transparent border-none cursor-pointer">2020 — 2026</button>
          <button className="hidden md:block ml-16 px-12 py-4 border border-blue-900/40 rounded-full bg-transparent text-white cursor-pointer transition-all hover:border-blue-500 hover:bg-blue-600/5 font-black tracking-[0.2em]">
            CONTACT
          </button>
        </div>
      </nav>

      {/* Hero & Yetenekler */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-7 space-y-8 md:space-y-12 text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-4 px-4 md:px-6 py-2 rounded-full bg-blue-950/20 border border-blue-900/30 text-[9px] md:text-[11px] font-black-custom uppercase tracking-[0.4em] md:tracking-[0.5em] text-blue-500">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_12px_#2563eb] animate-pulse"></span>
              EST. 2020 // EXPERT DEVELOPER
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-black-custom leading-[0.9] md:leading-[0.85] tracking-[-0.05em] uppercase italic blue-glow-text" style={{ fontSize: 'clamp(40px, 12vw, 110px)' }}>
              ZZAFWR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-white">MEDİA</span>
            </motion.h1>

            {/* Sadece senin istediğin profesyonel metin */}
            <p className="text-gray-500 text-base md:text-xl font-light leading-relaxed max-w-xl">
              "4 yıllık sektör tecrübesiyle, yüksek performanslı 
              <span className="text-blue-500 font-bold italic"> Discord bot mimarileri </span> 
              ve ölçeklenebilir sistem altyapıları üzerine profesyonel çözümler üretiyorum. Teknik uzmanlığımı, projenin her aşamasında sürdürülebilir kod kalitesi ve kusursuz API entegrasyonuyla birleştiriyorum."
              <span className="block mt-6 text-white font-bold italic border-l-2 border-blue-600 pl-4">
                Üst düzey bot geliştirme projeleriniz ve teknik iş birliği talepleriniz için iletişime geçebilirsiniz.
              </span>
            </p>

            {/* Yetenek Kartları */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-6">
              <SkillCard 
                icon={<MessageSquare size={30} />} 
                title="Bot Architect" 
                desc="Gelişmiş mimariye sahip, yüksek trafikli Discord sistemleri." 
              />
              <SkillCard 
                icon={<MonitorCheck size={30} />} 
                title="Full-Stack" 
                desc="Modern, hızlı ve SEO odaklı profesyonel web çözümleri." 
              />
            </div>
          </div>

          {/* Sağ: Teknik Stats */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6 pt-10 lg:pt-20">
            <StatsCard icon={<Terminal size={24}/>} title="CORE SYSTEM" val="NEXT.JS" />
            <StatsCard icon={<Code2 size={24}/>} title="BOT ENGINE" val="NODE.JS" />
            <StatsCard icon={<Zap size={24}/>} title="DATABASE" val="MONGODB" />
            
            <div className="p-8 md:p-10 rounded-[24px] md:rounded-[32px] bg-blue-600/10 border border-blue-600/20 mt-6 md:mt-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <h4 className="font-black-custom text-xl italic mb-4">HAZIR MISIN?</h4>
                
                <div className="flex gap-8">
                    <a href="https://github.com/zzafwr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-all transform hover:scale-110">
                        <Github size={28} />
                    </a>
                    <a href="https://instagram.com/zzafwr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-all transform hover:scale-110">
                        <Instagram size={28} />
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
    <div className="group p-6 bg-[#080808] border border-white/[0.05] rounded-[24px] hover:border-blue-600/40 transition-all text-left">
      <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-black-custom text-lg md:text-2xl italic mb-2 uppercase tracking-tighter">{title}</h3>
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function StatsCard({ icon, title, val }: any) {
  return (
    <motion.div whileHover={{ x: 8 }} className="p-6 md:p-8 bg-[#0A0A0A] border border-white/[0.04] rounded-[20px] md:rounded-[28px] flex items-center justify-between group hover:border-blue-900/40 transition-all backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]">{icon}</div>
        <div className="font-black-custom text-[9px] md:text-[11px] font-bold tracking-[0.2em] text-gray-600 uppercase">{title}</div>
      </div>
      <div className="font-black-custom text-lg md:text-2xl font-black italic text-white tracking-tighter">{val}</div>
    </motion.div>
  );
}