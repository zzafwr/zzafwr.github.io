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
    <main className="min-h-screen bg-[#0b0b0b] text-gray-200 flex items-center justify-center px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          w-full
          max-w-[480px] sm:max-w-[600px]
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-2xl
          p-6 sm:p-10
        "
      >
        {/* PROFİL FOTO */}
        <div className="flex justify-center mb-5">
          <div
            className="
              w-20 h-20 sm:w-28 sm:h-28
              rounded-full
              bg-black
              border border-white/20
              shadow-[0_0_25px_rgba(255,255,255,0.07)]
              overflow-hidden
            "
          >
            <img
              src="/zafer.jpg"
              alt="Zafer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* İSİM */}
        <div className="text-center mb-7">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
            ZZAFWR
          </h1>
          <p className="mt-1 text-sm sm:text-base text-gray-400">
            Full Stack Developer • Web & Systems
          </p>
        </div>

        {/* SKILLS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-7">
          {[
            {
              icon: Code2,
              title: "Frontend",
              desc: "React, Next.js, Tailwind",
            },
            {
              icon: Terminal,
              title: "Backend",
              desc: "Node.js, API & Auth",
            },
            {
              icon: MonitorCheck,
              title: "UI / UX",
              desc: "Minimal & kullanıcı odaklı",
            },
            {
              icon: Zap,
              title: "Performance",
              desc: "Hızlı ve optimize yapılar",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="
                rounded-2xl
                bg-white/5
                border border-white/10
                p-4 sm:p-5
                transition
                hover:border-white/20
              "
            >
              <div className="flex items-center gap-3 mb-1">
                <item.icon size={18} />
                <h3 className="font-semibold text-sm sm:text-base">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SOSYALLER */}
        <div className="flex justify-center gap-4">
          {[Github, Instagram, Mail].map((Icon, i) => (
            <a
              key={i}
              href={
                i === 0
                  ? "https://github.com/zzafwr"
                  : i === 1
                  ? "https://instagram.com/zzafwr"
                  : "mailto:zaferjre@gmail.com"
              }
              target="_blank"
              className="p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] sm:text-xs text-gray-500">
          © 2026 ZZAFWR
        </p>
      </motion.div>
    </main>
  );
}
