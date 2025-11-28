import React from 'react';
import { Building2, Landmark, Trees, Library, LayoutGrid, Users } from 'lucide-react';
import { GetStartedButton } from '../ui/get-started-button';

const facilities = [
  {
    icon: Building2,
    title: 'Ruang Kelas Nyaman & Ber-AC',
    desc: 'Ruang belajar yang terang, rapi, dan tertata sehingga siswa dapat fokus menerima pelajaran.',
    points: [
      'Kapasitas kelas dibatasi agar interaksi guru-siswa optimal',
      'Fasilitas proyektor/layar untuk media pembelajaran',
      'Ventilasi dan pencahayaan yang baik',
    ],
  },
  {
    icon: Landmark,
    title: 'Masjid & Area Ibadah',
    desc: 'Masjid sebagai pusat kegiatan ibadah, halaqah, dan pembinaan ruhiyah santri.',
    points: [
      'Shalat fardhu berjamaah sebagai rutinitas utama',
      'Kegiatan halaqah Qur\'an dan kajian rutin',
      'Area wudhu yang bersih dan terawat',
    ],
  },
  {
    icon: Users,
    title: 'Asrama Putri yang Terjaga',
    desc: 'Lingkungan asrama yang bersih, teratur, dan diawasi pembina untuk menjaga kenyamanan dan keamanan.',
    points: [
      'Pengaturan kamar yang mendukung kemandirian dan kebersamaan',
      'Pembina asrama yang mendampingi keseharian santri',
      'Aturan harian yang menumbuhkan disiplin dan tanggung jawab',
    ],
  },
  {
    icon: Library,
    title: 'Perpustakaan & Pojok Baca',
    desc: 'Koleksi buku bacaan umum, keislaman, dan referensi belajar yang bisa diakses siswa.',
    points: [
      'Buku-buku penunjang pelajaran dan literatur islami',
      'Ruang baca yang tenang dan nyaman',
      'Program pojok baca di kelas untuk membiasakan literasi',
    ],
  },
  {
    icon: LayoutGrid,
    title: 'Lapangan & Area Aktivitas',
    desc: 'Ruang terbuka untuk olahraga, outbound ringan, dan kegiatan kebersamaan santri.',
    points: [
      'Lapangan olahraga multifungsi',
      'Area senam pagi dan kegiatan permainan edukatif',
      'Kegiatan kebersamaan untuk menguatkan ukhuwah santri',
    ],
  },
  {
    icon: Trees,
    title: 'Lingkungan Asri & Terkontrol',
    desc: 'Suasana yang tenang, jauh dari hiruk-pikuk, mendukung konsentrasi belajar dan ibadah.',
    points: [
      'Area hijau yang dirawat untuk memberi suasana sejuk',
      'Akses masuk yang terkontrol untuk keamanan santri',
      'Kebersihan lingkungan dijaga bersama setiap hari',
    ],
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
            Fasilitas yang disiapkan bertujuan mendukung proses belajar, ibadah, dan pembinaan karakter
            santri dalam suasana yang aman, bersih, dan penuh kehangatan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              <div className="h-11 w-11 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center mb-3">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-2.5">
                {item.desc}
              </p>
              <ul className="mt-auto space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
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
