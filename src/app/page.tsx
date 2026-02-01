"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Settings,
  Globe,
  Zap,
  Instagram,
  MessageCircle,
  Menu,
  X,
  Github,
  Mail,
  ChevronDown,
  Star,
  ExternalLink,
  Code2,
  UserPlus,
  HelpCircle,
  MessageSquare,
  Plus,
  Minus,
  CheckCircle2
} from "lucide-react";

export default function ZzafwrFinalEdition() {
  const [activeTab, setActiveTab] = useState("Hizmetler");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const instagramUrl = "https://instagram.com/zzafwr";

  const scrollTo = (id: string) => {
    const sectionId = id.toLowerCase();
    const el = document.getElementById(sectionId);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
      setActiveTab(id);
    }
  };

  const menuItems = [
    { id: "Hizmetler", icon: <MessageSquare size={14} /> },
    { id: "Projeler", icon: <Settings size={14} /> },
    { id: "Fiyatlar", icon: <Zap size={14} /> },
    { id: "Yetenekler", icon: <Code2 size={14} /> },
    { id: "Yorumlar", icon: <Star size={14} /> },
    { id: "SSS", icon: <HelpCircle size={14} /> },
    { id: "İletişim", icon: <Mail size={14} /> },
  ];

  const pricePackages = [
    {
      title: "BAŞLANGIÇ",
      price: "2,500",
      features: [
        "Temel Seviye Discord Botu Geliştirme",
        "7/24 Kesintisiz Hosting Desteği",
        "Basit Moderasyon Komutları (Ban, Kick)",
        "Hoşgeldin Mesajı ve Otomatik Rol",
        "Haftalık Düzenli Yedekleme ve Bakım",
        "Discord API Güncellemelerine Uyum",
        "Sınırlı Teknik Destek Hattı"
      ]
    },
    {
      title: "PROFESYONEL",
      price: "5,000",
      popular: true,
      features: [
        "Gelişmiş Koruma ve Anti-Raid Sistemleri",
        "Özel Web Dashboard (Yönetim Paneli)",
        "Gelişmiş Ekonomi ve Seviye Sistemleri",
        "Kapsamlı Mesaj Silme/Kanal Logları",
        "Özel API Entegrasyonları (Twitch/Crypto)",
        "3 Ay Boyunca Ücretsiz Güncelleme",
        "7/24 Öncelikli Discord ve Canlı Destek"
      ]
    },
    {
      title: "KURUMSAL",
      price: "10,000+",
      features: [
        "Full Stack Web ve Bot Entegrasyonu",
        "Tüm Kaynak Kodlarının Teslimi",
        "Özel Veritabanı Yapılandırması",
        "Sunucu Güvenliği ve Optimizasyon",
        "Markanıza Özel UI/UX Tasarımlı Site",
        "Yapay Zeka Destekli Otomatik Yanıt",
        "Ömür Boyu Teknik Destek",
        "Sınırsız Kapasiteli Altyapı"
      ]
    }
  ];

  const skills = [
    { name: "JavaScript / TypeScript", level: 95 },
    { name: "Node.js", level: 92 },
    { name: "Discord.js", level: 98 },
    { name: "MongoDB / SQL", level: 85 },
    { name: "React / Next.js", level: 90 },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white selection:bg-purple-600/40 overflow-x-hidden font-sans pb-20">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:35px_35px]" />
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-purple-900/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full" />
      </div>

      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/40 backdrop-blur-3xl border border-white/5 p-1.5 rounded-full flex items-center gap-1 shadow-2xl">
          {menuItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-300 ${activeTab === item.id ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20" : "text-zinc-500 hover:text-zinc-200 hover:bg-white/5"}`}>
              {item.icon} <span className="hidden md:inline">{item.id}</span>
            </button>
          ))}
        </div>
      </nav>

      <section id="top" className="pt-56 pb-32 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="relative w-44 h-44 mx-auto mb-10">
            <div className="absolute inset-0 bg-purple-500/30 blur-2xl rounded-full" />
            <div className="relative w-full h-full rounded-full border-2 border-purple-500/50 p-1.5"><img src="/zafer.jpg" className="w-full h-full rounded-full object-cover" alt="Zafer" /></div>
            <div className="absolute bottom-5 right-5 w-6 h-6 bg-green-500 rounded-full border-4 border-[#0a0a12]" />
          </div>
          <h1 className="text-7xl md:text-8xl font-black italic mb-4 tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">ZZAFWR</h1>
          <p className="text-zinc-400 text-sm md:text-base font-medium mb-12">Full Stack Developer • Bot ve Web Sistemleri</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <button onClick={() => scrollTo("Fiyatlar")} className="bg-purple-600 text-white px-12 py-4 rounded-full font-black italic text-sm uppercase tracking-widest hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20">Fiyatları Gör</button>
            <button onClick={() => window.open(instagramUrl, "_blank")} className="bg-zinc-800/40 border border-white/10 text-white px-12 py-4 rounded-full font-black italic text-sm uppercase tracking-widest hover:bg-white/5 transition-all">İletişime Geç</button>
          </div>
        </motion.div>
      </section>

      <section id="hizmetler" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
        <h2 className="text-center text-4xl font-black italic mb-20 tracking-tight">Hizmetlerim</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceBox icon={<ShieldCheck />} title="Koruma Botları" desc="Raid ve yetki saldırılarına karşı tam koruma." />
          <ServiceBox icon={<Zap />} title="Moderasyon" desc="Gelişmiş yönetim ve otomatik loglama sistemleri." />
          <ServiceBox icon={<Globe />} title="Web Sitesi" desc="Hızlı, modern ve SEO uyumlu web arayüzleri." />
          <ServiceBox icon={<Settings />} title="Özel Yazılım" desc="İsteğe özel Discord ve otomasyon çözümleri." />
        </div>
      </section>

      <section id="projeler" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-black italic mb-20">Projelerim</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ProjectItem title="Discord Guard Pro" icon="🛡️" />
            <ProjectItem title="Moderasyon Şahı" icon="⚡" />
            <ProjectItem title="E-Ticaret Platformu" icon="🛒" />
          </div>
        </div>
      </section>

      <section id="fiyatlar" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-black italic mb-20 tracking-tight">Fiyatlandırma</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricePackages.map((pkg, i) => (
            <div key={i} className={`relative p-10 rounded-[3rem] border transition-all duration-500 flex flex-col ${pkg.popular ? 'border-purple-600 bg-purple-600/5 scale-105 z-10' : 'border-white/5 bg-[#0d0d16]'}`}>
              {pkg.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">En Çok Tercih Edilen</div>}
              <h3 className="text-sm font-black italic text-zinc-500 mb-2 uppercase tracking-widest text-center">{pkg.title}</h3>
              <div className="text-5xl font-black italic mb-10 text-center">₺{pkg.price}</div>
              <div className="space-y-5 mb-12 flex-grow">{pkg.features.map((f, idx) => (<div key={idx} className="flex gap-3 text-xs font-bold text-zinc-400 leading-relaxed"><CheckCircle2 size={16} className={pkg.popular ? "text-purple-500 shrink-0" : "text-zinc-700 shrink-0"} /><span>{f}</span></div>))}</div>
              <button onClick={() => window.open(instagramUrl, "_blank")} className={`w-full py-5 rounded-2xl font-black italic text-xs tracking-widest uppercase transition-all ${pkg.popular ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-600/30' : 'bg-white text-black hover:bg-zinc-200'}`}>Hemen Başla</button>
            </div>
          ))}
        </div>
      </section>

      <section id="yetenekler" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-black italic mb-16">Yeteneklerim</h2>
        {skills.map((s, i) => (
          <div key={i} className="mb-10 group">
            <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-3 group-hover:text-purple-400 transition-colors"><span>{s.name}</span><span>%{s.level}</span></div>
            <div className="h-3 bg-zinc-900 rounded-full overflow-hidden border border-white/5">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} transition={{ duration: 1.5 }} className="h-full bg-gradient-to-r from-purple-600 to-cyan-500" />
            </div>
          </div>
        ))}
      </section>

      <section id="yorumlar" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-black italic mb-20">Müşteri Yorumları</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard name="Ahmet Y." text="Discord sunucumuzu guard botu ile full güvenli hale getirdi. Kesinlikle tavsiye ederim." />
          <TestimonialCard name="Zeynep K." text="Web sitesi hem çok şık hem aşırı hızlı. Tasarım tam istediğim gibi modern ve şık oldu." />
          <TestimonialCard name="Mehmet S." text="Otomasyon sistemleri sayesinde iş yükümüz yarıya indi. Profesyonel bir çalışma." />
        </div>
      </section>

      <section id="sss" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-center text-4xl font-black italic mb-16">Sıkça Sorulan Sorular</h2>
        <FaqItem q="Proje teslim süresi ne kadar?" a="Proje kapsamına göre genellikle 3–10 iş günü arasında teslimat sağlıyoruz." />
        <FaqItem q="Ödeme yöntemleri nelerdir?" a="EFT, havale ve kripto ödeme yöntemlerini kabul ediyoruz." />
        <FaqItem q="Satış sonrası destek veriyor musunuz?" a="Evet, tüm paketlerimizde belirli sürelerde teknik destek ve güncelleme garantisi sunuyoruz." />
      </section>

      <section id="iletişim" className="py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16"><h2 className="text-5xl font-black italic mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent italic">İletişim</h2><p className="text-zinc-500 font-medium">Projeniz için benimle iletişime geçin</p></div>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <ContactCard icon={<Github />} title="GitHub" user="@zzafwr" />
          <ContactCard icon={<Instagram />} title="Instagram" user="@zzafwr" onClick={() => window.open(instagramUrl, "_blank")} />
          <ContactCard icon={<Mail />} title="E-posta" user="contact@zzafwr.com" />
        </div>
        <div className="bg-[#11111c]/60 border border-white/5 rounded-[2.5rem] p-12 text-center group transition-all hover:bg-[#151525]">
          <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform"><MessageCircle size={32} /></div>
          <h3 className="text-2xl font-black italic mb-2">Discord</h3><p className="text-zinc-500 text-sm mb-8">En hızlı iletişim için Discord üzerinden ulaşın</p>
          <button onClick={() => window.open(instagramUrl, "_blank")} className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-black italic text-sm flex items-center gap-3 mx-auto transition-all hover:scale-105 shadow-xl shadow-indigo-600/20"><UserPlus size={18} /> Arkadaş Ekle</button>
        </div>
      </section>

      <footer className="py-12 text-center opacity-30 uppercase tracking-[1em] text-[10px] font-black border-t border-white/5">No Lies • Only Code • 2026</footer>
    </div>
  );
}

function ServiceBox({ icon, title, desc }: any) {
  return (
    <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-all text-center group">
      <div className="mb-6 flex justify-center text-purple-500 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-bold italic text-lg mb-2 underline decoration-purple-500/30 underline-offset-4">{title}</h3>
      <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function ProjectItem({ title, icon }: any) {
  return (
    <div className="bg-[#0c0c14] p-10 rounded-[2.5rem] border border-white/5 text-center group hover:border-purple-600/30 transition-all">
      <div className="text-5xl mb-6 group-hover:rotate-6 transition-transform inline-block">{icon}</div>
      <h3 className="text-xl font-bold italic mb-4">{title}</h3>
      <button className="text-[10px] font-black tracking-[0.2em] text-purple-400 uppercase flex items-center gap-2 mx-auto">Projeyi İncele <ExternalLink size={12}/></button>
    </div>
  );
}

function TestimonialCard({ name, text }: any) {
  return (
    <div className="p-8 bg-zinc-900/20 border border-white/5 rounded-[2rem] hover:bg-zinc-900/40 transition-all">
      <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-purple-600 text-purple-600" />)}</div>
      <p className="text-zinc-400 italic text-sm mb-6 leading-relaxed">"{text}"</p>
      <div className="font-bold italic text-sm text-white">— {name}</div>
    </div>
  );
}

function FaqItem({ q, a }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 border border-white/5 bg-white/[0.02] rounded-3xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-6 flex justify-between items-center font-bold italic text-left"><span>{q}</span>{isOpen ? <Minus size={18}/> : <Plus size={18}/>}</button>
      <AnimatePresence>{isOpen && <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">{a}</motion.div>}</AnimatePresence>
    </div>
  );
}

function ContactCard({ icon, title, user, onClick }: any) {
  return (
    <div onClick={onClick} className="bg-[#0c0c14] border border-white/5 rounded-[2rem] p-10 text-center hover:border-white/10 transition-all group cursor-pointer">
      <div className="text-zinc-500 mb-6 flex justify-center group-hover:text-white transition-colors">{icon}</div>
      <h4 className="text-lg font-black italic mb-1">{title}</h4>
      <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">{user}</p>
    </div>
  );
}