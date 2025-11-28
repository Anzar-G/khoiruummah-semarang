import React from 'react';
import { BookOpen, Home, HeartHandshake, Layers, Users, MonitorPlay, Sparkles, HandHeart } from 'lucide-react';
import { HoverEffect } from '../ui/hover-effect';

const KeyAdvantages: React.FC = () => {
  const items = [
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: 'Program Tahfidz Terstruktur',
      desc: 'Metode talaqqi, murajaah, dan tasmi dengan target hafalan jelas di setiap jenjang.',
    },
    {
      icon: <Home className="w-7 h-7" />,
      title: 'Pondok Putri Khusus SMP/SMA',
      desc: 'Lingkungan boarding yang kondusif, aman, dan penuh pembinaan 24 jam.',
    },
    {
      icon: <HeartHandshake className="w-7 h-7" />,
      title: 'Pembinaan Akhlak & Adab',
      desc: 'Kurikulum adab Islami, pembiasaan shalat berjamaah, dan pembinaan karakter harian.',
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: 'Kurikulum Terintegrasi',
      desc: 'Perpaduan kurikulum nasional dan pesantren, mempersiapkan santri menghadapi ujian dan masa depan.',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Guru & Ustadzah Berpengalaman',
      desc: 'Lulusan lembaga tahfidz dan perguruan tinggi dengan pengalaman mendampingi santri.',
    },
    {
      icon: <MonitorPlay className="w-7 h-7" />,
      title: 'Fasilitas Modern & Nyaman',
      desc: 'Ruang kelas representatif, asrama nyaman, perpustakaan, lab komputer, dan area bermain.',
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: 'Program Pengembangan Bakat',
      desc: 'Ekstrakurikuler beragam, kompetisi, dan pelatihan softskill untuk mengasah potensi.',
    },
    {
      icon: <HandHeart className="w-7 h-7" />,
      title: 'Kerja Sama Erat dengan Orang Tua',
      desc: 'Laporan perkembangan berkala, buku penghubung, dan grup komunikasi aktif.',
    },
  ];

  return (
    <section className="py-20 bg-primary-900 text-white" id="keunggulan">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
        <div className="absolute -top-24 -right-24 w-56 h-56 bg-secondary-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-primary-500/30 rounded-full blur-3xl" />

        <div className="relative z-10 text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">Keunggulan Utama Khoiru Ummah</h2>
          <p className="text-primary-100 text-sm md:text-[15px]">
            Rangkaian program dan fasilitas dirancang untuk mendukung tumbuh kembang santri sebagai penghafal Al-Qur'an
            yang matang secara ruhiyah, akhlak, dan akademik.
          </p>
          <div className="w-20 h-1 bg-secondary-400 mx-auto mt-5 rounded-full" />
        </div>

        <div className="relative z-10">
          <HoverEffect
            items={items.map((item) => ({
              title: item.title,
              description: item.desc,
              link: '#',
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default KeyAdvantages;
