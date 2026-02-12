// app/page.tsx
"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Terminal, 
  Lock, 
  Server, 
  Code2, 
  Cpu, 
  Globe, 
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Bug,
  Fingerprint,
  Key,
  Database,
  Zap,
  Eye,
  Layers,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Twitter,
  Download,
  Send,
  CheckCircle,
  AlertTriangle,
  Code,
  ShieldCheck,
  CpuIcon
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Text scramble effect hook
function useScrambleText(text: string, trigger: boolean) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  
  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
      iteration += 1/3;
    }, 30);
    return () => clearInterval(interval);
  }, [text, trigger]);

  return displayText;
}

// Custom cursor component
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-green-400 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-green-400 rounded-full pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 30 }}
      />
    </>
  );
}

// Toast notification component
function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className={`fixed bottom-8 right-8 z-50 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 ${
        type === 'success' ? 'bg-green-500/90' : 'bg-red-500/90'
      } backdrop-blur-sm text-white`}
    >
      {type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
      <span className="font-medium">{message}</span>
    </motion.div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrambleTrigger, setScrambleTrigger] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Penetration Testing', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Trigger scramble on load
  useEffect(() => {
    const timer = setTimeout(() => setScrambleTrigger(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // Social media handlers
  const openSocial = (platform: string) => {
    const links: Record<string, string> = {
      instagram: "https://instagram.com/zzafwr",
      github: "https://github.com/zzafwr",
      linkedin: "https://linkedin.com/in/zzafwr",
      twitter: "https://twitter.com/zzafwr"
    };
    window.open(links[platform], '_blank', 'noopener,noreferrer');
  };

  // Download CV handler
  const downloadCV = () => {
    // Simulating CV download
    setToast({ message: "CV indiriliyor...", type: 'success' });
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/cv.pdf'; // Replace with actual CV path
      link.download = 'ZZAFWR_CV.pdf';
      link.click();
    }, 1000);
  };

  // Form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setToast({ message: "Mesajınız başarıyla gönderildi!", type: 'success' });
    setFormData({ name: '', email: '', service: 'Penetration Testing', message: '' });
    setIsSubmitting(false);
  };

  const navItems = [
    { id: "home", label: "Ana Sayfa" },
    { id: "about", label: "Hakkımda" },
    { id: "expertise", label: "Uzmanlık" },
    { id: "projects", label: "Projeler" },
    { id: "services", label: "Hizmetler" },
    { id: "contact", label: "İletişim" },
  ];

  const expertise = [
    {
      title: "Penetration Testing",
      description: "Web, mobil ve network uygulamalarında ileri düzey güvenlik testleri ve zafiyet analizi",
      icon: <Bug className="w-6 h-6" />,
      color: "from-red-500 to-orange-500",
      stats: "50+ Test",
      details: ["OWASP Top 10", "API Security", "Mobile PT"]
    },
    {
      title: "Secure Development",
      description: "Güvenlik odaklı yazılım mimarisi, kod review ve SDLC entegrasyonu",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      stats: "100+ Proje",
      details: ["DevSecOps", "SAST/DAST", "Secure Coding"]
    },
    {
      title: "Cloud Security",
      description: "AWS, Azure ve GCP ortamlarında güvenlik yapılandırması ve monitoring",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      stats: "Multi-Cloud",
      details: ["IAM", "Container Security", "Compliance"]
    },
    {
      title: "Incident Response",
      description: "Siber olay müdahalesi, forensics analiz ve kriz yönetimi",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-red-500",
      stats: "7/24",
      details: ["DFIR", "Malware Analysis", "Threat Hunting"]
    }
  ];

  const projects = [
    {
      title: "NeuralGuard AI",
      description: "Yapay zeka destekli gerçek zamanlı tehdit algılama ve önleme sistemi. Behavioral analysis ile zero-day attack tespiti.",
      image: "bg-gradient-to-br from-purple-900/50 to-blue-900/50",
      tags: ["Python", "TensorFlow", "ELK Stack", "Kubernetes"],
      stats: { security: "99.9%", performance: "10ms" },
      featured: true,
      link: "#"
    },
    {
      title: "ZeroVault",
      description: "End-to-end şifreleme ile korunan enterprise password ve secret yönetim platformu. HashiCorp Vault alternatifi.",
      image: "bg-gradient-to-br from-emerald-900/50 to-teal-900/50",
      tags: ["Rust", "React", "WebAssembly", "PostgreSQL"],
      stats: { encryption: "AES-256", compliance: "SOC2" },
      featured: false,
      link: "#"
    },
    {
      title: "DevSecOps Pipeline",
      description: "Tam otomatik güvenlik testleri entegreli CI/CD pipeline. SAST, DAST, SCA ve container scanning.",
      image: "bg-gradient-to-br from-orange-900/50 to-red-900/50",
      tags: ["GitLab CI", "Docker", "Trivy", "SonarQube"],
      stats: { scanTime: "-80%", bugs: "-95%" },
      featured: false,
      link: "#"
    },
    {
      title: "Blockchain Audit",
      description: "Smart contract güvenlik denetimi ve DeFi protokollerinde güvenlik analizi.",
      image: "bg-gradient-to-br from-indigo-900/50 to-purple-900/50",
      tags: ["Solidity", "Rust", "Ethereum", "Foundry"],
      stats: { audited: "$50M+", issues: "0 Critical" },
      featured: true,
      link: "#"
    }
  ];

  const services = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Red Team Operations",
      description: "Gerçek dünya senaryolarıyla kurumunuzun güvenlik duruşunu test edin. Sosyal mühendislikden fiziksel güvenliğe kadar kapsamlı simülasyon.",
      price: "Özel Fiyatlandırma",
      duration: "2-4 Hafta"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Security Assessment",
      description: "Kapsamlı güvenlik değerlendirmesi ve uyumluluk denetimi (ISO 27001, GDPR, PCI-DSS, HIPAA).",
      price: "Başlangıç $5,000",
      duration: "1-2 Hafta"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Secure Architecture",
      description: "Zero-trust prensipleriyle modern, ölçeklenebilir ve güvenli sistem tasarımı ve danışmanlığı.",
      price: "Proje Bazlı",
      duration: "Müşteriye Özel"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Review",
      description: "Manuel ve otomatik araçlarla kaynak kod güvenlik analizi ve güvenli kodlama eğitimi.",
      price: "Saatlik $150",
      duration: "Esnek"
    }
  ];

  const scrambleText = useScrambleText("Siber Güvenlik", scrambleTrigger);

  return (
    <div ref={containerRef} className="bg-[#030303] text-white min-h-screen font-sans selection:bg-green-500/30 overflow-x-hidden">
      <CustomCursor />
      
      <AnimatePresence>
        {toast && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast(null)} 
          />
        )}
      </AnimatePresence>
      
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[128px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" 
        />
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#030303]/80 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              ZZAFWR
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? "bg-white text-black" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => openSocial('instagram')}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500/30 hover:text-pink-400 transition-all"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => openSocial('github')}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10"
            >
              <Sparkles className="w-4 h-4" />
              Çalışalım
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-[#030303]/95 border-b border-white/10 backdrop-blur-xl"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="flex gap-3 pt-4 border-t border-white/10 mt-4">
                  <button onClick={() => openSocial('instagram')} className="flex-1 py-3 bg-white/5 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-500/20 transition-colors">
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm">Instagram</span>
                  </button>
                  <button onClick={() => openSocial('github')} className="flex-1 py-3 bg-white/5 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                    <Github className="w-5 h-5" />
                    <span className="text-sm">GitHub</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              style={{
                top: `${20 + i * 30}%`,
                left: `${20 + i * 25}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Yeni projeler için müsaitim
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="block text-gray-400 text-2xl lg:text-3xl font-normal mb-2 font-mono"
              >
                &lt;Hello World /&gt;
              </motion.span>
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                {scrambleText}
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Uzmanı & Developer
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed"
            >
              Güvenliği kodun DNA'sına entegre eden, modern web teknolojileriyle 
              ölçeklenebilir çözümler üreten hibrit bir profesyonel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold flex items-center gap-3 shadow-lg shadow-green-500/25 transition-all"
              >
                Proje Başlat
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all backdrop-blur-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                CV İndir
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-8"
            >
              {[
                { value: "8+", label: "Yıl Deneyim" },
                { value: "150+", label: "Proje" },
                { value: "50+", label: "Müşteri" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <motion.div 
                    className="text-3xl font-bold text-white"
                    whileHover={{ scale: 1.1, color: "#4ade80" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-green-500/20 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-blue-500/20 border-dashed"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 backdrop-blur-sm shadow-2xl">
                  <div className="flex items-center gap-2 mb-6 text-gray-500 text-sm font-mono">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2">zzafwr@secure-terminal:~</span>
                  </div>
                  
                  <div className="space-y-3 text-sm font-mono">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}>
                      <span className="text-green-400">➜</span>
                      <span className="text-blue-400 ml-2">~</span>
                      <span className="text-gray-300 ml-2">whoami</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-gray-400 pl-6">
                      cybersecurity_expert && fullstack_developer
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }}>
                      <span className="text-green-400">➜</span>
                      <span className="text-blue-400 ml-2">~</span>
                      <span className="text-gray-300 ml-2">ls -la skills/</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="pl-6 space-y-1">
                      <div className="text-green-400">drwxr-xr-x Penetration_Testing</div>
                      <div className="text-blue-400">drwxr-xr-x Secure_Development</div>
                      <div className="text-purple-400">drwxr-xr-x Cloud_Security</div>
                      <div className="text-yellow-400">drwxr-xr-x Incident_Response</div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 }}>
                      <span className="text-green-400">➜</span>
                      <span className="text-blue-400 ml-2">~</span>
                      <span className="text-gray-300 ml-2">social --links</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="pl-6 flex gap-3">
                      <button onClick={() => openSocial('instagram')} className="text-pink-400 hover:underline">instagram</button>
                      <button onClick={() => openSocial('github')} className="text-gray-400 hover:underline">github</button>
                      <button onClick={() => openSocial('linkedin')} className="text-blue-400 hover:underline">linkedin</button>
                    </motion.div>
                    
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-green-500 mt-4"
                    >
                      ▌
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors"
            onClick={() => scrollToSection("about")}
          >
            <span className="text-xs uppercase tracking-widest">Keşfet</span>
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-green-400 text-sm font-mono uppercase tracking-widest mb-4 block">
                Hakkımda
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Güvenlik ve Geliştirme
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  Bir Arada
                </span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                <p>
                  Modern yazılım geliştirme süreçlerinde güvenlik, sonradan düşünülen bir konu değil, 
                  temel bir gereksinimdir. Bu yaklaşımla, hem güvenlik uzmanı hem de geliştirici 
                  olarak hibrit bir rol üstleniyorum.
                </p>
                <p>
                  8+ yıllık deneyimimde Fortune 500 şirketlerinden start-up'lara kadar geniş bir 
                  yelpazede çalıştım. Her projede güvenliği ön planda tutarak, hem güçlü hem de 
                  güvenli sistemler tasarlıyorum.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {["OWASP", "NIST", "ISO 27001", "DevSecOps", "Zero Trust", "CISSP"].map((cert) => (
                  <span key={cert} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-green-500/30 hover:text-green-400 transition-all cursor-default">
                    {cert}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openSocial('instagram')}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                  @zzafwr
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openSocial('linkedin')}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </motion.button>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Database className="w-8 h-8" />, title: "Veri Güvenliği", desc: "Encryption & Privacy", color: "from-blue-500 to-cyan-500" },
                { icon: <Key className="w-8 h-8" />, title: "Kimlik Yönetimi", desc: "IAM & SSO", color: "from-purple-500 to-pink-500" },
                { icon: <Globe className="w-8 h-8" />, title: "Cloud Security", desc: "AWS/Azure/GCP", color: "from-orange-500 to-red-500" },
                { icon: <CpuIcon className="w-8 h-8" />, title: "App Security", desc: "SAST/DAST/SCA", color: "from-green-500 to-emerald-500" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-4`}>
                    <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center group-hover:bg-transparent transition-colors">
                      <div className="text-white">{item.icon}</div>
                    </div>
                  </div>
                  <h3 className="font-bold mb-1 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 relative bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-400 text-sm font-mono uppercase tracking-widest mb-4 block">
              Uzmanlık Alanları
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Güvenlik ve Teknoloji
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Bir Arada
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center group-hover:bg-transparent transition-colors">
                    <div className="text-white">{item.icon}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.details.map((detail, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-500">
                      {detail}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-gray-500 font-mono">{item.stats}</span>
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <span className="text-green-400 text-sm font-mono uppercase tracking-widest mb-4 block">
                Portfolyo
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold">
                Öne Çıkan
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  {" "}Projeler
                </span>
              </h2>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openSocial('github')}
              className="px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              GitHub'da Gör
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all">
                  <div className={`h-64 ${project.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold backdrop-blur-sm">
                        Featured Project
                      </div>
                    )}
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-gray-300 border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.link, '_blank')}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                    
                    <div className="flex gap-6 pt-6 border-t border-white/5">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-2xl font-bold text-white">{value}</div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-400 text-sm font-mono uppercase tracking-widest mb-4 block">
              Hizmetler
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Profesyonel
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                {" "}Çözümler
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-all cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-white block">{service.price}</span>
                    <span className="text-xs text-gray-500">{service.duration}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors group/btn">
                  Teklif Al
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-mono uppercase tracking-widest mb-4 block">
              İletişim
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Proje Başlatalım
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Güvenlik danışmanlığı veya yazılım geliştirme ihtiyaçlarınız için 
              birlikte çalışalım.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">İsim</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-green-500/50 focus:outline-none focus:bg-white/[0.07] transition-all placeholder:text-gray-600"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">E-posta</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-green-500/50 focus:outline-none focus:bg-white/[0.07] transition-all placeholder:text-gray-600"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Hizmet</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-green-500/50 focus:outline-none focus:bg-white/[0.07] transition-all text-gray-300"
                  >
                    <option>Penetration Testing</option>
                    <option>Secure Development</option>
                    <option>Security Consulting</option>
                    <option>Code Review</option>
                    <option>Red Team Operations</option>
                    <option>Diğer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Mesaj</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-green-500/50 focus:outline-none focus:bg-white/[0.07] transition-all resize-none placeholder:text-gray-600"
                    placeholder="Projeniz hakkında detaylı bilgi verin..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Gönder
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-12 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.location.href = 'mailto:contact@zzafwr.com'}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">E-posta</div>
                    <div className="font-semibold text-sm">contact@zzafwr.com</div>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => openSocial('instagram')}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-pink-500/10 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500/20">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Instagram</div>
                    <div className="font-semibold text-sm">@zzafwr</div>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => openSocial('linkedin')}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-blue-500/10 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">LinkedIn</div>
                    <div className="font-semibold text-sm">/in/zzafwr</div>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg block">ZZAFWR</span>
                <span className="text-xs text-gray-500">Cybersecurity & Development</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, label: "Instagram", action: () => openSocial('instagram'), color: "hover:text-pink-400 hover:bg-pink-500/10" },
                { icon: <Github className="w-5 h-5" />, label: "GitHub", action: () => openSocial('github'), color: "hover:text-white hover:bg-white/10" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", action: () => openSocial('linkedin'), color: "hover:text-blue-400 hover:bg-blue-500/10" },
                { icon: <Twitter className="w-5 h-5" />, label: "Twitter", action: () => openSocial('twitter'), color: "hover:text-sky-400 hover:bg-sky-500/10" },
              ].map((social, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={social.action}
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2024 ZZAFWR. Tüm hakları saklıdır.</p>
            <div className="flex gap-6">
              <button onClick={() => setToast({ message: "Gizlilik politikası yakında eklenecek", type: 'success' })} className="hover:text-white transition-colors">
                Gizlilik Politikası
              </button>
              <button onClick={() => setToast({ message: "KVKK metni yakında eklenecek", type: 'success' })} className="hover:text-white transition-colors">
                KVKK
              </button>
              <button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">
                Yukarı Çık ↑
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Cloud icon component
function Cloud(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}