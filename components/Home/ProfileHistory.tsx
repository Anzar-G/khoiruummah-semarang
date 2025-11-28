import React from 'react';
import { ShieldCheck, Users } from 'lucide-react';

const ProfileHistory: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
              <img 
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?q=80&w=2000&auto=format&fit=crop" 
                alt="Gedung dan lingkungan sekolah" 
                className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-8">
                <p className="text-white font-serif italic text-lg">"Membina generasi Qur'ani di lingkungan yang penuh kasih dan bimbingan."</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 z-0" />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Profil Singkat</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                Khoiru Ummah Islamic School
              </h3>
            </div>
            
            <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
              Khoiru Ummah Semarang adalah lembaga pendidikan Islam yang memadukan sekolah formal dengan pembinaan kepesantrenan. 
              Sejak berdiri pada tahun <span className="font-semibold">2012</span>, fokus utamanya adalah melahirkan generasi penghafal Al-Qur'an yang kuat dalam akhlak, kokoh dalam aqidah, dan siap bersaing secara akademik.
            </p>
            <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
              Di bawah naungan <span className="font-semibold">Yayasan Pendidikan Islam Khoiru Ummah Semarang</span>, lembaga ini menaungi jenjang SD Tahfidz hingga Pondok Putri SMP/SMA. 
              Kurikulum dirancang untuk menyeimbangkan tahfidz, pelajaran umum, serta pembinaan karakter sehari-hari, dengan pendampingan guru dan ustadzah yang dekat dengan santri.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              <div className="flex flex-col gap-2 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-primary-700">
                  <ShieldCheck size={20} />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">SD Tahfidz</p>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm md:text-[15px]">Usia 6–12 tahun</h4>
                <p className="text-xs md:text-[13px] text-slate-600 leading-relaxed">
                  Program fullday school dengan target hafalan 5–10 juz, menggabungkan kurikulum nasional dan tahfidz.
                </p>
              </div>

              <div className="flex flex-col gap-2 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-primary-700">
                  <Users size={20} />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">SMP Pondok Putri</p>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm md:text-[15px]">Usia 12–15 tahun</h4>
                <p className="text-xs md:text-[13px] text-slate-600 leading-relaxed">
                  Boarding school khusus putri dengan target hafalan 15–20 juz dan pembinaan kemandirian remaja putri.
                </p>
              </div>

              <div className="flex flex-col gap-2 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-primary-700">
                  <Users size={20} />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">SMA Pondok Putri</p>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm md:text-[15px]">Usia 15–18 tahun</h4>
                <p className="text-xs md:text-[13px] text-slate-600 leading-relaxed">
                  Boarding school lanjutan dengan target hafalan 20–30 juz dan persiapan masuk perguruan tinggi.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs md:text-[13px] text-slate-500 leading-relaxed">
                Informasi lebih rinci tentang sejarah, legalitas, dan struktur organisasi akan disajikan pada halaman khusus "Tentang Sekolah".
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileHistory;