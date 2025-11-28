import React from 'react';
import { LatestNewsCard, NewsItem } from '../ui/card-11';

const newsItems: NewsItem[] = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=600&q=80',
    title: 'Santri Khoiru Ummah Raih Juara Lomba Tahfidz Tingkat Kota',
    date: 'Oktober 2024',
    source: 'Prestasi Santri',
    href: '#',
  },
  {
    id: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    title: 'Agenda Rutin Mabit dan Tadabbur Alam Bersama Santri',
    date: 'September 2024',
    source: 'Kegiatan Sekolah',
    href: '#',
  },
  {
    id: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80',
    title: 'Seminar Parenting: Sinergi Rumah dan Pesantren',
    date: 'Agustus 2024',
    source: 'Kolaborasi Orang Tua',
    href: '#',
  },
  {
    id: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1515165562835-c4c9e0737eaa?auto=format&fit=crop&w=600&q=80',
    title: 'Penguatan Literasi Melalui Program Pojok Baca Santri',
    date: 'Juli 2024',
    source: 'Program Literasi',
    href: '#',
  },
  {
    id: 5,
    imageUrl:
      'https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=600&q=80',
    title: 'Pelatihan Kepemimpinan untuk Pengurus Organisasi Santri',
    date: 'Juni 2024',
    source: 'Pengembangan Diri',
    href: '#',
  },
];

interface NewsArticlesProps {
  onViewAllNews?: () => void;
}

const NewsArticles: React.FC<NewsArticlesProps> = ({ onViewAllNews }) => {
  const main = newsItems[0];
  const others = newsItems.slice(1);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-widest text-primary-600 uppercase mb-2">
            Berita & Artikel
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            Kabar Terbaru dari Khoiru Ummah
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-600">
            Beberapa highlight kegiatan dan prestasi terbaru. Detail berita lengkap nantinya dapat kamu
            tampilkan di halaman berita terpisah.
          </p>
        </div>

        {/* Mobile: pakai komponen LatestNewsCard penuh */}
        <div className="flex justify-center md:hidden">
          <LatestNewsCard
            title="Highlight Berita Khoiru Ummah"
            viewAllText="Lihat semua berita"
            viewAllHref="#"
            newsItems={newsItems}
            onViewAllClick={onViewAllNews}
          />
        </div>

        {/* Desktop: layout 2 kolom, 1 berita utama + list berita lain */}
        <div className="hidden md:grid md:grid-cols-[1.8fr,1.2fr] gap-6 items-start">
          {/* Berita utama */}
          <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="h-52 lg:h-64 w-full overflow-hidden">
              <img
                src={main.imageUrl}
                alt={main.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-1">
                {main.source} &bull; {main.date}
              </p>
              <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2">
                {main.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Santri Khoiru Ummah berhasil menorehkan prestasi dalam ajang lomba tahfidz tingkat kota,
                menjadi motivasi bagi santri lain untuk terus menjaga hafalan.
              </p>
              <button
                type="button"
                className="text-sm font-semibold text-primary-700 hover:text-primary-800 hover:underline underline-offset-2"
                onClick={onViewAllNews}
              >
                Lihat semua berita
              </button>
            </div>
          </article>

          {/* List berita lainnya */}
          <aside className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Berita lainnya</h4>
            <div className="space-y-3">
              {others.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 rounded-lg p-2 hover:bg-slate-50 transition-colors duration-150"
                >
                  <div className="h-14 w-20 flex-shrink-0 overflow-hidden rounded-md">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] text-slate-500 mb-0.5">
                      {item.date} &bull; {item.source}
                    </p>
                    <p className="text-xs sm:text-[13px] font-medium text-slate-900 leading-snug line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default NewsArticles;