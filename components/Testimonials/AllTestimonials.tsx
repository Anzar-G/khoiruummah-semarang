import React from 'react';
import {
  StaggerTestimonials,
  type StaggerTestimonialItem,
} from '../ui/stagger-testimonials';

const allTestimonialsData: StaggerTestimonialItem[] = [
  {
    tempId: 0,
    imgSrc:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    testimonial:
      'Alhamdulillah, sejak sekolah di SD Khoiru Ummah Semarang, hafalan anak saya meningkat pesat. Gurunya sangat sabar dan komunikatif.',
    by: 'Siti Nurhaliza, Wali santri SD',
  },
  {
    tempId: 1,
    imgSrc:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    testimonial:
      'Sempat khawatir melepas anak ke asrama, tapi melihat perkembangan akhlak dan kemandiriannya, saya sangat bersyukur.',
    by: 'Ahmad Fauzi, Wali santri SMP',
  },
  {
    tempId: 2,
    imgSrc:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    testimonial:
      'Masa-masa di asrama adalah masa terindah. Tidak hanya belajar agama, tapi juga belajar arti persahabatan dan perjuangan.',
    by: 'Aisyah Zahra, Alumni 2022',
  },
  {
    tempId: 3,
    imgSrc:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    testimonial:
      "Fasilitas asramanya sangat memadai dan bersih. Anak saya betah dan fokus menghafal Qur'an.",
    by: 'Budi Santoso, Wali santri SMA',
  },
  {
    tempId: 4,
    imgSrc:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    testimonial:
      'Program tahfidznya sangat terstruktur. Laporan perkembangan hafalan selalu dikirim rutin ke orang tua.',
    by: 'Rina Marlina, Wali santri SD',
  },
  {
    tempId: 5,
    imgSrc:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    testimonial:
      'Saya melihat kesungguhan pengurus dalam mengelola amanah. Semoga Khoiru Ummah Semarang terus maju mencetak generasi rabbani.',
    by: 'Hendra Wijaya, Donatur sekolah',
  },
  {
    tempId: 6,
    imgSrc:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop',
    testimonial:
      'Ilmu yang saya dapatkan di sini sangat bermanfaat saat kuliah. Terutama adab dan kedisiplinan.',
    by: 'Sarah Amalia, Alumni 2021',
  },
  {
    tempId: 7,
    imgSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    testimonial:
      'Keberadaan Pondok Khoiru Ummah Semarang membawa keberkahan bagi lingkungan sekitar. Santrinya sopan-sopan.',
    by: 'Dedi Supriyadi, Tokoh masyarakat',
  },
];

const AllTestimonials: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 pb-20">
      <section className="bg-slate-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">
          Testimoni Khoiru Ummah Semarang
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
          Kumpulan cerita dari orang tua, alumni, donatur, dan tokoh masyarakat tentang pengalaman mereka bersama Khoiru Ummah Semarang.
        </p>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-14">
        <StaggerTestimonials items={allTestimonialsData} />
      </section>
    </div>
  );
};

export default AllTestimonials;
