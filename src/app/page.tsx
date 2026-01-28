"use client";

import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Mail,
  Code2,
  Terminal,
  MonitorCheck,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-200 flex items-center justify-center px-4">
      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[520px] h-[520px] bg-indigo-500/10 blur-[140px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.015 }}
        className="
          relative z-10
          w-full max-w-[520px]
          rounded-[28px]
          bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-2xl
          border border-white/15
          shadow-[0_0_80px_rgba(0,0,0,0.7)]
          p-7 sm:p-10
        "
      >
        {/* PROFIL FOTO */}
        <div className="flex justify-center mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              relative
              w-24 h-24 sm:w-28 sm:h-28
              rounded-full
              p-[2px]
              bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500
              shadow-[0_0_35px_rgba(139,92,246,0.45)]
            "
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img
                src="/zafer.jpg"
                alt="Zafer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* ISIM */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            ZZAFWR
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Full Stack Developer • Bot & Web Systems
          </p>
        </div>

        {/* SERVISLER / KUTULAR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

          <motion.div
            whileHover={{ y: -6, scale: 1.03 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:border-indigo-400/40 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)] transition"
          >
            <div className="flex items-center gap-3 mb-2">
              <MonitorCheck size={18} className="text-indigo-400" />
              <h3 className="font-semibold">Guard Bot Sistemleri</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Raid, spam ve yetki istismarlarına karşı gelişmiş Discord guard botları.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.03 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:border-indigo-400/40 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)] transition"
          >
            <div className="flex items-center gap-3 mb-2">
              <Zap size={18} className="text-indigo-400" />
              <h3 className="font-semibold">Moderasyon Botları</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Otomatik ceza, loglama ve sunucuya özel moderasyon çözümleri.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.03 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:border-indigo-400/40 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)] transition"
          >
            <div className="flex items-center gap-3 mb-2">
              <Code2 size={18} className="text-indigo-400" />
              <h3 className="font-semibold">Web Site Geliştirme</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Mobil uyumlu, modern ve hızlı kişisel veya kurumsal web siteleri.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.03 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:border-indigo-400/40 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)] transition"
          >
            <div className="flex items-center gap-3 mb-2">
              <Terminal size={18} className="text-indigo-400" />
              <h3 className="font-semibold">Özel Yazılım & Otomasyon</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              İhtiyaca özel bot, otomasyon ve yazılım çözümleri geliştirme.
            </p>
          </motion.div>

        </div>

        {/* SOSYALLER */}
        <div className="flex justify-center gap-5">
          {[Github, Instagram, Mail].map((Icon, i) => (
            <motion.a
              whileHover={{ y: -4, scale: 1.1 }}
              key={i}
              href={
                i === 0
                  ? "https://github.com/zzafwr"
                  : i === 1
                  ? "https://instagram.com/zzafwr"
                  : "mailto:zaferjre@gmail.com"
              }
              target="_blank"
              className="
                p-3 rounded-full
                bg-white/5
                border border-white/10
                hover:bg-indigo-500/20
                hover:border-indigo-400/40
                shadow-lg
                transition
              "
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        <p className="mt-7 text-center text-xs text-gray-500">
          © 2026 ZZAFWR — Tarafından Kodlanmıştır.
        </p>
      </motion.div>
    </main>
  );
}
