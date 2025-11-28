import React from 'react';
import { Newspaper } from 'lucide-react';

const newsList = [
  {
    title: 'Santri Khoiru Ummah Raih Juara Lomba Tahfidz Tingkat Kota',
    date: 'Oktober 2024',
    category: 'Prestasi Santri',
    summary:
      'Beberapa santri berhasil meraih juara dalam ajang lomba tahfidz tingkat kota. Kegiatan ini menjadi motivasi bagi santri lain untuk terus meningkatkan hafalan.',
  },
  {
    title: 'Agenda Rutin Mabit dan Tadabbur Alam Bersama Santri',
    date: 'September 2024',
    category: 'Kegiatan Sekolah',
    summary:
      'Program mabit dan tadabbur alam disusun untuk menguatkan ruhiyah, kedekatan dengan alam, dan kebersamaan antarsantri.',
  },
  {
    title: 'Seminar Parenting: Sinergi Rumah dan Pesantren',
    date: 'Agustus 2024',
    category: 'Kolaborasi Orang Tua',
    summary:
      'Seminar parenting menghadirkan narasumber yang membahas peran orang tua dalam mendukung pembinaan karakter di pesantren.',
  },
  {
    title: 'Penguatan Literasi Melalui Program Pojok Baca Santri',
    date: 'Juli 2024',
    category: 'Program Literasi',
    summary:
      'Pesantren menghadirkan pojok baca di kelas dan asrama untuk membiasakan santri membaca buku non-pelajaran setiap hari.',
  },
];

const NewsPage: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-slate-50 min-h-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-9 w-9 rounded-xl bg-primary-600 text-white flex items-center justify-center">
            <Newspaper className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              Berita & Artikel Khoiru Ummah
            </h1>
            <p className="mt-1 text-sm sm:text-base text-slate-600 max-w-2xl">
              Kumpulan kabar terbaru, cerita kegiatan, dan informasi penting seputar santri dan aktivitas di
              Khoiru Ummah.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {newsList.map((item, index) => (
            <article
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
                <span className="text-[11px] text-slate-500">{item.date}</span>
              </div>
              <h2 className="text-sm sm:text-lg font-semibold text-slate-900 mb-1.5">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
