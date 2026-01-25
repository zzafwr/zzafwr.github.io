"use client";

import React from "react";
import {
  Github,
  Instagram,
  Terminal,
  Zap,
  Code2,
  MessageSquare,
  MonitorCheck,
  Layers,
  ShieldCheck,
  Rocket
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-600 overflow-x-hidden">
      {/* GLOBAL STYLES */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;600;800;900&display=swap");
        body {
          margin: 0;
          font-family: "Space Grotesk", sans-serif;
          background: #000;
        }
        .font-black-custom {
          font-weight: 900;
        }
        .grid-overlay {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
        }
      `}</style>

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] bg-blue-900/10 blur-[160px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <nav className="relative z-50 max-w-7xl mx-auto px-6 md:px-12 py-10 flex justify-between items-center">
        <div className="text-3xl font-black-custom tracking-tighter italic">
          <span className="text-blue-600">zzafwr</span>
          <span className="text-gray-600">.dev</span>
        </div>
        <a
          href="mailto:contact@zzafwr.com.tr"
          className="hidden md:inline-block px-10 py-4 rounded-full border border-blue-600/30 hover:bg-blue-600/10 transition font-black-custom tracking-widest text-xs"
        >
          CONTACT
        </a>
      </nav>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-32 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 space-y-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-950/30 border border-blue-900/40 text-blue-500 text-[11px] tracking-[0.4em]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            HIGH-PERFORMANCE ENGINEER
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-black-custom uppercase italic leading-[0.9] tracking-[-0.05em]"
            style={{ fontSize: "clamp(42px, 10vw, 108px)" }}
          >
            Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-white">
              Systems
            </span>
          </motion.h1>

          <p className="max-w-xl text-gray-400 text-lg leading-relaxed">
            I design and build scalable Discord infrastructures and modern web
            systems with a focus on performance, reliability and clean
            architecture.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-6">
            <SkillCard
              icon={<MessageSquare size={28} />}
              title="Bot Architecture"
              desc="High-traffic, modular and scalable Discord bot systems."
            />
            <SkillCard
              icon={<MonitorCheck size={28} />}
              title="Full-Stack Web"
              desc="Modern, fast and SEO-focused production-ready web apps."
            />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-5 space-y-5 pt-12">
          <StatsCard icon={<Terminal />} title="STACK" val="NEXT.JS" />
          <StatsCard icon={<Code2 />} title="BACKEND" val="NODE.JS" />
          <StatsCard icon={<Zap />} title="DATABASE" val="MONGODB" />
          <StatsCard icon={<ShieldCheck />} title="UPTIME" val="99.9%" />
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <h2 className="text-4xl font-black-custom italic mb-14">
          Process
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Process
            icon={<Layers />}
            step="01"
            title="Architecture"
            desc="Scalable system design focused on security and performance."
          />
          <Process
            icon={<Rocket />}
            step="02"
            title="Development"
            desc="Clean, maintainable and testable production-grade code."
          />
          <Process
            icon={<ShieldCheck />}
            step="03"
            title="Delivery"
            desc="Optimized deployment, monitoring and long-term support."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="p-14 rounded-3xl bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-600/30">
          <h3 className="text-4xl font-black-custom italic mb-6">
            Let’s Build Something Serious
          </h3>
          <p className="max-w-xl text-gray-400 mb-8">
            Looking for a reliable developer for long-term projects or advanced
            systems? Let’s talk.
          </p>
          <div className="flex gap-8 items-center">
            <a
              href="mailto:contact@zzafwr.com.tr"
              className="px-12 py-4 rounded-full bg-blue-600 text-black font-bold hover:scale-105 transition"
            >
              CONTACT ME
            </a>
            <a href="https://github.com/zzafwr" target="_blank">
              <Github />
            </a>
            <a href="https://instagram.com/zzafwr" target="_blank">
              <Instagram />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SkillCard({ icon, title, desc }: any) {
  return (
    <div className="p-6 rounded-3xl bg-[#080808] border border-white/5 hover:border-blue-600/40 transition">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="font-black-custom italic text-xl mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function StatsCard({ icon, title, val }: any) {
  return (
    <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 flex justify-between items-center hover:border-blue-600/30 transition">
      <div className="flex items-center gap-4 text-gray-500 text-xs tracking-widest">
        {icon}
        {title}
      </div>
      <div className="font-black-custom italic text-2xl">{val}</div>
    </div>
  );
}

function Process({ icon, step, title, desc }: any) {
  return (
    <div className="p-8 rounded-3xl bg-[#0B0B0B] border border-white/5">
      <div className="text-blue-600 mb-6">{icon}</div>
      <span className="text-xs tracking-widest text-gray-500">{step}</span>
      <h3 className="mt-4 text-2xl font-black-custom italic">{title}</h3>
      <p className="mt-3 text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
