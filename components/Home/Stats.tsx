import React from 'react';
import { Users, BookOpen, Award, Star } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Santri Aktif', value: '200+', desc: 'Belajar di SD Tahfidz dan Pondok Putri' },
    { label: 'Juz Hafalan', value: '5000+', desc: 'Akumulasi hafalan yang tersetor' },
    { label: 'Sejak', value: '2015', desc: 'Pengalaman membina generasi Qur\'ani' },
    { label: 'Pendidik', value: '30+', desc: 'Guru & ustadzah yang membersamai santri' },
    { label: 'Alumni', value: '150+', desc: 'Melanjutkan studi & berkhidmat di masyarakat' },
    { label: 'Target Hafalan SD', value: '5-10', desc: 'Juz di akhir jenjang SD Tahfidz' },
    { label: 'Target Hafalan SMP/SMA', value: '15-30', desc: 'Juz di akhir jenjang Pondok Putri' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white" id="statistik">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">Sekilas Angka & Pencapaian</h2>
            <p className="text-slate-600 text-sm md:text-[15px] max-w-xl">
              Angka-angka berikut memberikan gambaran singkat tentang amanah yang sedang dititipkan dan capaian hafalan para santri di Khoiru Ummah.
            </p>
          </div>
          <div className="flex items-center gap-4 text-primary-700 bg-primary-50 border border-primary-100 rounded-2xl px-4 py-3">
            <BookOpen className="w-8 h-8" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">Fokus Utama</p>
              <p className="text-sm md:text-[15px] font-medium">Tahfidz, adab, dan prestasi akademik berjalan beriringan.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-slate-50 border border-slate-200 rounded-2xl px-4 py-5 md:px-5 md:py-6 hover:border-primary-400 hover:bg-primary-50/70 transition-all duration-300"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-1">{stat.label}</p>
              <p className="text-2xl md:text-3xl font-serif font-bold text-primary-700 mb-1">{stat.value}</p>
              {stat.label === 'Santri Aktif' && (
                <div className="flex items-center gap-1 text-[11px] text-primary-700 font-medium mb-1">
                  <Users className="w-3 h-3" />
                  <span>Putra SD & Putri Pondok</span>
                </div>
              )}
              {stat.label === 'Pendidik' && (
                <div className="flex items-center gap-1 text-[11px] text-primary-700 font-medium mb-1">
                  <Award className="w-3 h-3" />
                  <span>Guru & ustadzah pembina</span>
                </div>
              )}
              {stat.label === 'Alumni' && (
                <div className="flex items-center gap-1 text-[11px] text-primary-700 font-medium mb-1">
                  <Star className="w-3 h-3" />
                  <span>Berdaya di berbagai bidang</span>
                </div>
              )}
              <p className="text-[11px] md:text-xs text-slate-600 leading-relaxed mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
