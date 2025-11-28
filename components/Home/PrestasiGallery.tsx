import React from 'react';
import { Trophy } from 'lucide-react';
import { ParallaxScrollSecond } from '../ui/parallax-scroll';
import { GetStartedButton } from '../ui/get-started-button';

interface PrestasiGalleryProps {
  onViewGallery?: () => void;
}

const prestasiImages: string[] = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512428242455-502dd1471c9d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512428232641-2d0c4b52f26a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1531959870249-9f9b729efcf3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1515165562835-c4c9e0737eaa?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80',
];

const PrestasiGallery: React.FC<PrestasiGalleryProps> = ({ onViewGallery }) => {
  // Ambil maksimal 15 foto untuk homepage (5 per kolom)
  const homepageImages = prestasiImages.slice(0, 15);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold tracking-widest text-primary-600 uppercase mb-2">
              Galeri Prestasi & Kegiatan
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
              Jejak Prestasi Khoiru Ummah
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-slate-600">
              Cuplikan beberapa momen terbaik santri Khoiru Ummah dalam lomba akademik, tahfidz, dan
              kegiatan kesiswaan. Dokumentasi lengkap prestasi dan kegiatan lain akan ditampilkan pada
              halaman galeri khusus.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 border border-primary-100 px-3 py-1.5 text-xs sm:text-sm text-primary-700">
            <Trophy className="h-4 w-4" />
            <span>Ditampilkan 10 momen pilihan di beranda</span>
          </div>
        </div>

        {/* Desktop: parallax 3 kolom */}
        <div className="hidden md:block rounded-3xl border border-slate-200 bg-slate-50/60 overflow-hidden">
          <ParallaxScrollSecond images={homepageImages} />
        </div>

        {/* Mobile: grid sederhana 2 kolom tanpa parallax */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-3 mt-2">
            {homepageImages.map((src, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
              >
                <img
                  src={src}
                  alt={`Momen prestasi santri Khoiru Ummah Semarang ${idx + 1}`}
                  className="h-32 w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-[11px] sm:text-xs text-slate-500 text-center">
            Prestasi dan dokumentasi kegiatan lain yang lebih lengkap dapat ditampilkan pada halaman <span className="font-semibold">Galeri & Prestasi</span>.
          </p>
          {onViewGallery && (
            <GetStartedButton
              size="sm"
              onClick={onViewGallery}
              className="mt-1 text-xs sm:text-[13px]"
            >
              Lihat galeri lengkap
            </GetStartedButton>
          )}
        </div>
      </div>
    </section>
  );
};

export default PrestasiGallery;
