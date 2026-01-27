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
    <main className="min-h-screen bg-[#0b0b0b] text-gray-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          w-full
          max-w-[520px] sm:max-w-[600px]
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-2xl
          p-8 sm:p-10
        "
      >
        {/* PROFİL FOTO */}
        <div className="flex justify-center mb-6">
          <div className="
            w-24 h-24 sm:w-28 sm:h-28
            rounded-full
            bg-black
            border border-white/20
            shadow-[0_0_30px_rgba(255,255,255,0.08)]
            overflow-hidden
          ">
            <img
              src="/zafer.jpg"
              alt="Zafer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* İSİM */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            ZZAFWR
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Full Stack Developer • Web & Systems
          </p>
        </div>

        {/* SKILLS – GELİŞTİRİLDİ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: Code2,
              title: "Frontend",
              desc: "React, Next.js, Tailwind ile modern arayüzler",
            },
            {
              icon: Terminal,
              title: "Backend",
              desc: "Node.js, API, Auth & sistem mantığı",
            },
            {
              icon: MonitorCheck,
              title: "UI / UX",
              desc: "Minimal, hızlı ve kullanıcı odaklı tasarım",
            },
            {
              icon: Zap,
              title: "Performance",
              desc: "Optimize, ölçeklenebilir ve stabil yapılar",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="
                rounded-2xl
                bg-white/5
                border border-white/10
                p-5
                transition
                hover:border-white/20
                hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]
              "
            >
              <div className="flex items-center gap-3 mb-2">
                <item.icon size={20} className="text-gray-300" />
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SOSYALLER */}
        <div className="flex justify-center gap-5">
          <a
            href="https://github.com/zzafwr"
            target="_blank"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <Github size={19} />
          </a>

          <a
            href="https://instagram.com/zzafwr"
            target="_blank"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <Instagram size={19} />
          </a>

          <a
            href="mailto:zaferjre@gmail.com"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <Mail size={19} />
          </a>
        </div>

        {/* FOOTER */}
        <p className="mt-8 text-center text-xs text-gray-500">
          © 2026 ZZAFWR
        </p>
      </motion.div>
    </main>
  );
}
