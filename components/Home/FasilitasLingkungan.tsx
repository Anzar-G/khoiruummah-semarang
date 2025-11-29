import React from 'react';
import { GetStartedButton } from '../ui/get-started-button';

const facilityPhotos = [
  {
    title: 'Ruang Kelas Nyaman & Ber-AC',
    category: 'Kelas',
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2000&auto=format&fit=crop',
    description: 'Kelas yang terang, rapi, dan mendukung fokus belajar santri.',
    size: 'row-span-2',
  },
  {
    title: 'Masjid & Area Ibadah',
    category: 'Masjid',
    src: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=2000&auto=format&fit=crop',
    description: 'Pusat ibadah, halaqah Qur\'an, dan kajian harian.',
    size: 'row-span-1',
  },
  {
    title: 'Halaman & Lapangan Aktivitas',
    category: 'Outdoor',
    src: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=2000&auto=format&fit=crop',
    description: 'Area olahraga dan kegiatan kebersamaan santri.',
    size: 'row-span-1',
  },
  {
    title: 'Asrama Putri',
    category: 'Asrama',
    src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2000&auto=format&fit=crop',
    description: 'Lingkungan asrama yang terjaga dan diawasi pembina.',
    size: 'row-span-2',
  },
  {
    title: 'Perpustakaan & Pojok Baca',
    category: 'Perpustakaan',
    src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000&auto=format&fit=crop',
    description: 'Ruang baca yang nyaman dengan koleksi buku pilihan.',
    size: 'row-span-1',
  },
  {
    title: 'Area Hijau & Taman',
    category: 'Lingkungan',
    src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2000&auto=format&fit=crop',
    description: 'Taman dan pepohonan yang menambah kesejukan lingkungan.',
    size: 'row-span-1',
  },
];

interface FasilitasLingkunganProps {
  onViewFacilities?: () => void;
}

const FasilitasLingkungan: React.FC<FasilitasLingkunganProps> = ({ onViewFacilities }) => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-primary-600 uppercase mb-2">
            Lingkungan & Sarana Pendukung
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Fasilitas di Khoiru Ummah
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600">
            Alih-alih hanya membaca daftar, orang tua dapat langsung melihat suasana kelas, masjid, asrama,
            serta lingkungan sekitar melalui dokumentasi foto berikut.
          </p>
        </div>

        {/* Photo Grid - follows 2x2 (mobile) and 4-column (desktop) layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {/* Gambar Besar (Kiri) */}
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group h-64 sm:h-72">
            <img
              src={facilityPhotos[0].src}
              alt={facilityPhotos[0].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Gambar Kecil (Kanan Atas 1) */}
          <div className="relative rounded-2xl overflow-hidden group h-32 sm:h-40 md:h-auto">
            <img
              src={facilityPhotos[1].src}
              alt={facilityPhotos[1].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          {/* Gambar Kecil (Kanan Atas 2) */}
          <div className="relative rounded-2xl overflow-hidden group h-32 sm:h-40 md:h-auto">
            <img
              src={facilityPhotos[2].src}
              alt={facilityPhotos[2].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          {/* Gambar Lebar (Bawah Kanan) */}
          <div className="col-span-2 relative rounded-2xl overflow-hidden group h-40 sm:h-48 md:h-56">
            <img
              src={facilityPhotos[3].src}
              alt={facilityPhotos[3].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-[11px] sm:text-xs text-slate-500 text-center">
            Daftar fasilitas lengkap beserta dokumentasinya dapat ditampilkan lebih detail pada halaman <span className="font-semibold">Tentang Sekolah</span> atau <span className="font-semibold">Galeri</span>.
          </p>
          {onViewFacilities && (
            <GetStartedButton
              size="sm"
              onClick={onViewFacilities}
              className="mt-1 text-xs sm:text-[13px]"
            >
              Lihat fasilitas lengkap
            </GetStartedButton>
          )}
        </div>
      </div>
    </section>
  );
};

export default FasilitasLingkungan;
