import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slowZoom"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544928147-79a2dbc4663f?q=80&w=2574&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-secondary-300 font-medium text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse"></span>
            Penerimaan Santri Baru Tahun Ajaran 2025/2026 Telah Dibuka
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-serif leading-tight tracking-tight drop-shadow-lg">
            Sekolah Tahfidz SD <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500">
              & Pondok Putri SMP/SMA
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-100 max-w-2xl mx-auto font-light leading-relaxed">
            Mendidik generasi penghafal Al-Qur’an yang berakhlak mulia, cerdas secara akademik, dan siap memimpin masa depan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a 
              href="#tentang" 
              className="group px-8 py-4 w-full sm:w-auto rounded-xl bg-white text-primary-800 font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Kenali Lebih Jauh
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#psb" 
              className="group px-8 py-4 w-full sm:w-auto rounded-xl bg-secondary-500 text-white font-bold text-lg hover:bg-secondary-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Daftar Sekarang
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] sm:h-[100px] w-full fill-slate-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;