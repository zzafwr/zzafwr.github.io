'use client';

import { useState, useEffect, useRef } from 'react';
import { Shield, Gavel, Globe, Code, Github, Instagram, Mail, MessageCircle, ChevronDown, Sparkles, Zap, Rocket, Star, ArrowRight, Check, X, Menu, ExternalLink, TrendingUp, Award, Users, Clock, Database, Server, Cpu, Lock, BarChart3 } from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [stats, setStats] = useState({ projects: 0, clients: 0, uptime: 0, satisfaction: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState('all');
  const heroRef = useRef<HTMLDivElement>(null);

  // Loading Screen
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse Position for Parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing Effect
  useEffect(() => {
    const texts = ['Full Stack Developer', 'Bot Geliştirici', 'Web Uzmanı', 'Yazılım Mimarı'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setTypedText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => { isDeleting = true; }, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    };

    const timer = setInterval(type, isDeleting ? 50 : 150);
    return () => clearInterval(timer);
  }, []);

  // Counter Animation
  useEffect(() => {
    const targets = { projects: 150, clients: 87, uptime: 99, satisfaction: 100 };
    const duration = 2000;
    const steps = 60;
    const increment = {
      projects: targets.projects / steps,
      clients: targets.clients / steps,
      uptime: targets.uptime / steps,
      satisfaction: targets.satisfaction / steps
    };

    let step = 0;
    const timer = setInterval(() => {
      if (step < steps) {
        setStats({
          projects: Math.min(Math.floor(increment.projects * step), targets.projects),
          clients: Math.min(Math.floor(increment.clients * step), targets.clients),
          uptime: Math.min(Math.floor(increment.uptime * step), targets.uptime),
          satisfaction: Math.min(Math.floor(increment.satisfaction * step), targets.satisfaction)
        });
        step++;
      } else {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Koruma Botları',
      description: 'Raid ve yetki saldırılarına karşı tam koruma.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Anti-Raid', 'Güvenlik Logları', 'Otomatik Ban']
    },
    {
      icon: <Gavel className="w-12 h-12" />,
      title: 'Moderasyon',
      description: 'Gelişmiş yönetim ve otomatik loglama sistemleri.',
      color: 'from-purple-500 to-pink-500',
      features: ['Auto-Mod', 'Ticket System', 'Rol Yönetimi']
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Web Sitesi',
      description: 'Hızlı, modern ve SEO uyumlu web arayüzleri.',
      color: 'from-green-500 to-emerald-500',
      features: ['Next.js', 'SEO Ready', 'Responsive']
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Özel Yazılım',
      description: 'İsteğe özel Discord ve otomasyon çözümleri.',
      color: 'from-orange-500 to-red-500',
      features: ['API Integration', 'Custom Logic', 'Scalable']
    }
  ];

  const projects = [
    { 
      emoji: '🛡️', 
      title: 'Discord Guard Pro', 
      description: 'Enterprise-level güvenlik sistemi',
      tech: ['Discord.js', 'MongoDB', 'Redis'],
      status: 'Live',
      category: 'security'
    },
    { 
      emoji: '⚡', 
      title: 'Moderasyon Şahı', 
      description: 'AI destekli moderasyon botu',
      tech: ['Node.js', 'AI/ML', 'PostgreSQL'],
      status: 'Beta',
      category: 'moderation'
    },
    { 
      emoji: '🛒', 
      title: 'E-Ticaret Platformu', 
      description: 'Full-stack e-ticaret çözümü',
      tech: ['Next.js', 'Stripe', 'Prisma'],
      status: 'Live',
      category: 'web'
    },
    { 
      emoji: '🎮', 
      title: 'Gaming Dashboard', 
      description: 'Oyuncu istatistik paneli',
      tech: ['React', 'Firebase', 'Chart.js'],
      status: 'Live',
      category: 'web'
    },
    { 
      emoji: '🤖', 
      title: 'AI Chatbot', 
      description: 'GPT-4 entegreli destek botu',
      tech: ['Python', 'OpenAI', 'FastAPI'],
      status: 'Development',
      category: 'ai'
    },
    { 
      emoji: '📊', 
      title: 'Analytics Suite', 
      description: 'Gerçek zamanlı analytics',
      tech: ['TypeScript', 'WebSocket', 'InfluxDB'],
      status: 'Live',
      category: 'analytics'
    }
  ];

  const pricing = [
    {
      name: 'BAŞLANGIÇ',
      price: '₺2,500',
      period: '/proje',
      features: [
        'Temel Discord Botu',
        '7/24 Hosting',
        'Moderasyon Komutları',
        'Hoşgeldin Mesajı',
        'Haftalık Yedekleme',
        'API Güncellemeleri',
        'Sınırlı Destek'
      ],
      featured: false,
      color: 'from-slate-800 to-slate-900'
    },
    {
      name: 'PROFESYONEL',
      price: '₺5,000',
      period: '/proje',
      badge: 'En Popüler',
      features: [
        'Gelişmiş Koruma',
        'Web Dashboard',
        'Ekonomi Sistemi',
        'Kapsamlı Loglar',
        'API Entegrasyonları',
        '3 Ay Güncelleme',
        '7/24 Öncelikli Destek'
      ],
      featured: true,
      color: 'from-blue-600 to-purple-600'
    },
    {
      name: 'KURUMSAL',
      price: '₺10,000+',
      period: '/proje',
      features: [
        'Full Stack Entegrasyon',
        'Kaynak Kodu Teslimi',
        'Özel Veritabanı',
        'Güvenlik Optimizasyonu',
        'Özel UI/UX',
        'AI Destekli Sistem',
        'Ömür Boyu Destek',
        'Sınırsız Kapasite'
      ],
      featured: false,
      color: 'from-purple-800 to-pink-800'
    }
  ];

  const skills = [
    { name: 'JavaScript / TypeScript', level: 95, color: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { name: 'Node.js', level: 92, color: 'bg-gradient-to-r from-green-400 to-green-600' },
    { name: 'Discord.js', level: 98, color: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { name: 'MongoDB / SQL', level: 85, color: 'bg-gradient-to-r from-emerald-400 to-emerald-600' },
    { name: 'React / Next.js', level: 90, color: 'bg-gradient-to-r from-cyan-400 to-cyan-600' }
  ];

  const testimonials = [
    {
      text: 'Discord sunucumuzu guard botu ile full güvenli hale getirdi. Kesinlikle tavsiye ederim. Profesyonel yaklaşımı ve hızlı çözümleri ile beklentilerimizi aştı.',
      author: 'Ahmet Y.',
      role: 'Community Manager',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      text: 'Web sitesi hem çok şık hem aşırı hızlı. Tasarım tam istediğim gibi modern ve şık oldu. SEO optimizasyonu sayesinde Google\'da üst sıralara çıktık.',
      author: 'Zeynep K.',
      role: 'E-Ticaret Sahibi',
      avatar: '👩‍💻',
      rating: 5
    },
    {
      text: 'Otomasyon sistemleri sayesinde iş yükümüz yarıya indi. Profesyonel bir çalışma. Teknik desteği de çok hızlı ve etkili.',
      author: 'Mehmet S.',
      role: 'Sunucu Yöneticisi',
      avatar: '👨‍🔧',
      rating: 5
    }
  ];

  const faqs = [
    { 
      q: 'Proje teslim süresi ne kadar?', 
      a: 'Projenin kapsamına göre değişmekle birlikte, ortalama 1-3 hafta arasında teslim ediyoruz. Acil projeler için express hizmet de sunuyoruz.' 
    },
    { 
      q: 'Ödeme yöntemleri nelerdir?', 
      a: 'Banka havalesi, PayPal, kripto para (BTC, ETH, USDT) ve kredi kartı ile ödeme kabul ediyoruz. Taksit seçenekleri de mevcuttur.' 
    },
    { 
      q: 'Satış sonrası destek veriyor musunuz?', 
      a: 'Evet, tüm paketlerimizde belirtilen süre boyunca teknik destek sağlıyoruz. Kurumsal pakette ömür boyu destek veriyoruz.' 
    },
    {
      q: 'Kaynak kodları teslim ediliyor mu?',
      a: 'Kurumsal pakette tüm kaynak kodları teslim edilir. Diğer paketlerde isteğe bağlı olarak ek ücret karşılığında kaynak kodu paylaşılabilir.'
    },
    {
      q: 'Hangi teknolojileri kullanıyorsunuz?',
      a: 'Modern ve güncel teknolojiler kullanıyoruz: Node.js, React, Next.js, MongoDB, PostgreSQL, Redis, Discord.js v14, ve daha fazlası.'
    }
  ];

  const techStack = [
    { name: 'Node.js', icon: <Server className="w-6 h-6" />, color: 'text-green-400' },
    { name: 'React', icon: <Code className="w-6 h-6" />, color: 'text-cyan-400' },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" />, color: 'text-emerald-400' },
    { name: 'Next.js', icon: <Zap className="w-6 h-6" />, color: 'text-white' },
    { name: 'TypeScript', icon: <Cpu className="w-6 h-6" />, color: 'text-blue-400' },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" />, color: 'text-blue-300' },
    { name: 'Redis', icon: <Rocket className="w-6 h-6" />, color: 'text-red-400' },
    { name: 'Docker', icon: <Lock className="w-6 h-6" />, color: 'text-blue-500' }
  ];

  const recentActivity = [
    { action: 'Yeni proje: E-Ticaret Bot', time: '2 saat önce', icon: <Rocket className="w-4 h-4" /> },
    { action: 'Guard Pro v3.0 güncellendi', time: '5 saat önce', icon: <Shield className="w-4 h-4" /> },
    { action: 'Yeni müşteri kaydı', time: '1 gün önce', icon: <Users className="w-4 h-4" /> },
    { action: 'Analytics Suite lansmanı', time: '2 gün önce', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          </div>
          <p className="mt-6 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ZZAFWR
          </p>
          <p className="mt-2 text-gray-400">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold">
                  Z
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-950 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                ZZAFWR
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#hizmetler" className="hover:text-blue-400 transition relative group">
                Hizmetler
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
              </a>
              <a href="#projeler" className="hover:text-purple-400 transition relative group">
                Projeler
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all"></span>
              </a>
              <a href="#fiyatlandirma" className="hover:text-pink-400 transition relative group">
                Fiyatlandırma
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all"></span>
              </a>
              <a href="#iletisim" className="hover:text-green-400 transition relative group">
                İletişim
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all"></span>
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#hizmetler" className="block py-2 hover:text-blue-400 transition">Hizmetler</a>
              <a href="#projeler" className="block py-2 hover:text-purple-400 transition">Projeler</a>
              <a href="#fiyatlandirma" className="block py-2 hover:text-pink-400 transition">Fiyatlandırma</a>
              <a href="#iletisim" className="block py-2 hover:text-green-400 transition">İletişim</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Enhanced */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-20 px-4 min-h-screen flex items-center"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Çevrimiçi ve Aktif</span>
              </div>

              <div>
                <h1 className="text-6xl md:text-8xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    ZZAFWR
                  </span>
                </h1>
                <div className="h-16">
                  <p className="text-2xl md:text-4xl text-gray-300">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>

              <p className="text-xl text-gray-400 leading-relaxed">
                Discord bot geliştirme ve web teknolojilerinde uzmanlaşmış, 
                <span className="text-blue-400 font-semibold"> 150+ proje</span> deneyimine sahip 
                profesyonel yazılım geliştiricisi. Hayalinizdeki projeyi gerçeğe dönüştürüyorum.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#fiyatlandirma" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Projeye Başla
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a 
                  href="#projeler" 
                  className="px-8 py-4 border-2 border-blue-500/50 rounded-xl font-semibold hover:bg-blue-500/10 transition flex items-center justify-center group"
                >
                  Projeleri İncele
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-blue-500 transition">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {stats.projects}+
                  </div>
                  <div className="text-sm text-gray-400">Proje</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-purple-500 transition">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stats.clients}+
                  </div>
                  <div className="text-sm text-gray-400">Müşteri</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-green-500 transition">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {stats.uptime}%
                  </div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-yellow-500 transition">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {stats.satisfaction}%
                  </div>
                  <div className="text-sm text-gray-400">Memnuniyet</div>
                </div>
              </div>
            </div>

            {/* Right Content - Profile & Activity */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <img 
                      src="https://www.zzafwr.com.tr/zafer.jpg" 
                      alt="Zafer"
                      className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-xl"
                    />
                    <div>
                      <h3 className="text-2xl font-bold">Zafer</h3>
                      <p className="text-gray-400">@zzafwr</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">(87 değerlendirme)</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.slice(0, 4).map((tech, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center space-x-2 bg-slate-900/50 border border-slate-700 rounded-full px-3 py-1.5 hover:border-blue-500 transition"
                      >
                        <span className={tech.color}>{tech.icon}</span>
                        <span className="text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-400 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Son Aktiviteler
                    </h4>
                    {recentActivity.map((activity, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center space-x-3 bg-slate-900/30 rounded-lg p-3 hover:bg-slate-900/50 transition"
                      >
                        <div className="text-blue-400">{activity.icon}</div>
                        <div className="flex-1">
                          <p className="text-sm">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Hızlı İletişim</p>
                    <p className="text-2xl font-bold">7/24 Aktif</p>
                  </div>
                  <a 
                    href="#iletisim" 
                    className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    Mesaj Gönder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="hizmetler" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Profesyonel Hizmetler</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Hizmetlerim
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Modern teknolojiler ve en iyi pratiklerle, ihtiyaçlarınıza özel çözümler sunuyorum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-transparent transition-all hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition`}></div>
                
                <div className="relative">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-xl mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-500">
                        <Check className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projeler" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-4">
              <Rocket className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-300">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Projelerim
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Gerçek dünya problemlerine ürettiğim çözümler
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {['all', 'security', 'moderation', 'web', 'ai', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-slate-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {tab === 'all' ? 'Tümü' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition"></div>
                
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-6xl">{project.emoji}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full py-2 bg-slate-900 hover:bg-slate-700 rounded-lg transition flex items-center justify-center group">
                    <span>Detayları Gör</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:rotate-45 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="fiyatlandirma" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-300">Uygun Fiyatlar</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Fiyatlandırma
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Her bütçeye uygun, değer odaklı paketler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div 
                key={idx}
                className={`relative rounded-3xl border p-8 transition-all hover:scale-105 ${
                  plan.featured 
                    ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500 shadow-2xl shadow-blue-500/20 scale-105 md:scale-110' 
                    : 'bg-slate-800/50 border-slate-700'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {plan.badge}
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-400">{plan.name}</h3>
                  <div className="flex items-end justify-center">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 mb-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.featured
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}>
                  Hemen Başla
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Yeteneklerim
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-3">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-blue-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 relative overflow-hidden`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Grid */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">Teknoloji Yığını</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col items-center justify-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500 transition group"
                >
                  <div className={`${tech.color} mb-3 group-hover:scale-125 transition-transform`}>
                    {tech.icon}
                  </div>
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                Müşteri Yorumları
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12">
              <div className="absolute top-4 left-4 text-blue-500/20 text-8xl">"</div>
              
              <div className="relative">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-300 text-center mb-8 leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-5xl">{testimonials[currentTestimonial].avatar}</div>
                  <div>
                    <p className="font-bold text-lg">{testimonials[currentTestimonial].author}</p>
                    <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      currentTestimonial === idx ? 'bg-blue-500 w-8' : 'bg-slate-600'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Sıkça Sorulan Sorular
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500 transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-700/30 transition"
                >
                  <span className="font-semibold text-lg pr-4">{faq.q}</span>
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 transform transition ${openFaq === idx ? 'rotate-180 text-blue-400' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-slate-700 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="iletisim" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
              <MessageCircle className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">7/24 Destek</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                İletişim
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Projeniz için benimle iletişime geçin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Mesaj Gönderin</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Adınız</label>
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:border-blue-500 focus:outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-posta</label>
                  <input
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:border-blue-500 focus:outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mesajınız</label>
                  <textarea
                    placeholder="Projeniz hakkında detaylar..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:border-blue-500 focus:outline-none transition resize-none"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                >
                  {formStatus === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Gönderiliyor...
                    </span>
                  ) : (
                    'Mesaj Gönder'
                  )}
                </button>
                {formStatus === 'success' && (
                  <div className="flex items-center justify-center text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                    <Check className="w-5 h-5 mr-2" />
                    Mesajınız başarıyla gönderildi!
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>
                <div className="space-y-4">
                  <a 
                    href="https://github.com/zzafwr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition group"
                  >
                    <div className="p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl">
                      <Github className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">GitHub</p>
                      <p className="text-sm text-gray-400">@zzafwr</p>
                    </div>
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition" />
                  </a>

                  <a 
                    href="https://instagram.com/zzafwr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-pink-500 transition group"
                  >
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Instagram</p>
                      <p className="text-sm text-gray-400">@zzafwr</p>
                    </div>
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition" />
                  </a>

                  <a 
                    href="mailto:zaferjre@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition group"
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">E-posta</p>
                      <p className="text-sm text-gray-400">contact@zzafwr.com</p>
                    </div>
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </div>
              </div>

              {/* Discord Card */}
              <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900/50 to-blue-900/50 border border-indigo-500/50 rounded-3xl p-8">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="relative">
                  <MessageCircle className="w-12 h-12 text-blue-300 mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Discord</h4>
                  <p className="text-gray-300 mb-4">En hızlı iletişim için Discord üzerinden ulaşın</p>
                  <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition flex items-center">
                    Arkadaş Ekle
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-8 h-8 text-green-400" />
                    <div>
                      <p className="font-semibold">Ortalama Yanıt Süresi</p>
                      <p className="text-2xl font-bold text-green-400"><></>saat</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800/50 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold">
                  Z
                </div>
                <span className="text-xl font-bold">ZZAFWR</span>
              </div>
              <p className="text-gray-400">
                Profesyonel yazılım geliştirme ve Discord bot hizmetleri
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Hızlı Linkler</h4>
              <div className="space-y-2">
                <a href="#hizmetler" className="block text-gray-400 hover:text-blue-400 transition">Hizmetler</a>
                <a href="#projeler" className="block text-gray-400 hover:text-blue-400 transition">Projeler</a>
                <a href="#fiyatlandirma" className="block text-gray-400 hover:text-blue-400 transition">Fiyatlandırma</a>
                <a href="#iletisim" className="block text-gray-400 hover:text-blue-400 transition">İletişim</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/zzafwr" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/zzafwr" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:contact@zzafwr.com" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 ZZAFWR. Tüm hakları saklıdır. Made with 💙 in Turkey
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-40"
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </button>
    </div>
  );
}