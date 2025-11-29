import React from 'react';
import { ShieldCheck, Users, BookOpen, HeartHandshake } from 'lucide-react';

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
              <p className="mt-3 text-slate-600 text-sm md:text-[15px] leading-relaxed">
                Gambaran ringkas tentang siapa kami, untuk membantu orang tua cepat menangkap poin penting tanpa harus membaca paragraf panjang.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">Identitas Lembaga</p>
                  <ul className="list-disc list-inside text-slate-600 text-sm md:text-[15px] space-y-1">
                    <li>Lembaga pendidikan Islam terpadu di bawah Yayasan Pendidikan Islam Khoiru Ummah Semarang.</li>
                    <li>Menggabungkan sekolah formal dengan pembinaan kepesantrenan.</li>
                    <li>Berdiri sejak <span className="font-semibold">2012</span> dan terus berkembang hingga kini.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary-50 text-secondary-700">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary-700">Fokus Pendidikan</p>
                  <ul className="list-disc list-inside text-slate-600 text-sm md:text-[15px] space-y-1">
                    <li>Melahirkan generasi penghafal Al-Qur'an yang kuat aqidah dan akhlaknya.</li>
                    <li>Keseimbangan antara tahfidz, pelajaran umum, dan pembinaan karakter.</li>
                    <li>Pendampingan guru dan ustadzah yang dekat dengan keseharian santri.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Users className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Jenjang Pendidikan</p>
                  <ul className="list-disc list-inside text-slate-600 text-sm md:text-[15px] space-y-1">
                    <li>SD Tahfidz (fullday school, target 5–10 juz).</li>
                    <li>SMP Pondok Putri (boarding, target 15–20 juz).</li>
                    <li>SMA Pondok Putri (boarding, target 20–30 juz & persiapan PTN/PTS).</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Suasana Belajar</p>
                  <ul className="list-disc list-inside text-slate-600 text-sm md:text-[15px] space-y-1">
                    <li>Lingkungan yang hangat, terjaga, dan penuh perhatian.</li>
                    <li>Penanaman adab keseharian melalui kegiatan rutin santri.</li>
                    <li>Komunikasi yang terbuka antara sekolah, pondok, dan orang tua.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs md:text-[13px] text-slate-500 leading-relaxed">
                Detail sejarah, legalitas, dan struktur organisasi akan disajikan lebih lengkap pada halaman khusus "Tentang Sekolah".
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileHistory;