import React from 'react';
import { BookOpen, Heart, Trophy } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="vision">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-primary-700 font-bold tracking-wide uppercase text-sm mb-3">Visi & Misi Khoiru Ummah</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Mencetak Generasi Qur'ani, Berakhlak Mulia, dan Berprestasi
          </h3>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Kolom Visi */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 md:p-8 space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-xl bg-primary-50 text-primary-700">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary-600">Visi</p>
                <h4 className="text-xl md:text-2xl font-serif font-bold text-slate-900">Arah Besar Pendidikan</h4>
              </div>
            </div>
            <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed">
              Menjadi lembaga pendidikan Islam terdepan yang mencetak generasi Qur'ani, berakhlak mulia, dan berprestasi
              di bidang akademik maupun kehidupan bermasyarakat.
            </p>
          </div>

          {/* Kolom Misi & Fokus Utama */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-secondary-50 text-secondary-700">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-secondary-600">Misi</p>
                  <h4 className="text-lg md:text-xl font-serif font-bold text-slate-900">Langkah-langkah yang Ditempuh</h4>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm md:text-[15px] text-slate-700 leading-relaxed list-disc pl-5">
                <li>Menyelenggarakan pendidikan tahfidz Al-Qur'an dengan metode terpadu dan bertahap.</li>
                <li>Membentuk karakter Islami melalui pembinaan akhlak dan adab dalam keseharian.</li>
                <li>Mengintegrasikan kurikulum nasional dengan nilai-nilai Al-Qur'an dan ajaran Islam.</li>
                <li>Menyediakan lingkungan boarding school yang kondusif bagi santri putri (SMP/SMA).</li>
                <li>Mengembangkan potensi akademik dan non-akademik santri sesuai minat dan bakat.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-primary-900 text-slate-50 rounded-2xl px-4 py-4 flex items-start gap-3">
                <div className="mt-0.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-1">Fokus</p>
                  <p className="text-sm leading-snug">Tahfidz Al-Qur'an yang mutqin dan terukur di setiap jenjang.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 px-4 py-4 flex items-start gap-3">
                <div className="mt-0.5 text-primary-600">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 mb-1">Akhlak</p>
                  <p className="text-sm leading-snug text-slate-700">Pembinaan adab dan karakter menjadi prioritas utama.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 px-4 py-4 flex items-start gap-3">
                <div className="mt-0.5 text-primary-600">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 mb-1">Akademik</p>
                  <p className="text-sm leading-snug text-slate-700">Kurikulum umum yang kuat untuk mendukung studi lanjut.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;