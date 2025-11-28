import React from 'react';
import { Testimonials as TestimonialsUI, Testimonial } from '../ui/testimonials';

const testimonialsData: Testimonial[] = [
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    name: "Siti Nurhaliza",
    username: "@walisantri_sd",
    text: "Alhamdulillah, sejak sekolah di SD Khoiru Ummah Semarang, hafalan anak saya meningkat pesat. Gurunya sangat sabar dan komunikatif.",
    social: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    name: "Ahmad Fauzi",
    username: "@walisantri_smp",
    text: "Sempat khawatir melepas anak ke asrama, tapi melihat perkembangan akhlak dan kemandiriannya, saya sangat bersyukur.",
    social: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    name: "Aisyah Zahra",
    username: "@alumni_2022",
    text: "Masa-masa di asrama adalah masa terindah. Tidak hanya belajar agama, tapi juga belajar arti persahabatan dan perjuangan.",
    social: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    name: "Budi Santoso",
    username: "@walisantri_sma",
    text: "Fasilitas asramanya sangat memadai dan bersih. Anak saya betah dan fokus menghafal Qur'an.",
    social: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    name: "Rina Marlina",
    username: "@walisantri_sd",
    text: "Program tahfidznya sangat terstruktur. Laporan perkembangan hafalan selalu dikirim rutin ke orang tua.",
    social: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    name: "Hendra Wijaya",
    username: "@donatur_sekolah",
    text: "Saya melihat kesungguhan pengurus dalam mengelola amanah. Semoga Khoiru Ummah Semarang terus maju mencetak generasi rabbani.",
    social: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
    name: "Sarah Amalia",
    username: "@alumni_2021",
    text: "Ilmu yang saya dapatkan di sini sangat bermanfaat saat kuliah. Terutama adab dan kedisiplinan.",
    social: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    name: "Dedi Supriyadi",
    username: "@tokoh_masyarakat",
    text: "Keberadaan Pondok Khoiru Ummah Semarang membawa keberkahan bagi lingkungan sekitar. Santrinya sopan-sopan.",
    social: "#"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="testimoni">
      <div className="container mx-auto px-4">
        <TestimonialsUI 
          testimonials={testimonialsData} 
          title="Kata Mereka"
          description="Apa kata orang tua, alumni, dan tokoh masyarakat tentang Khoiru Ummah Semarang."
        />
      </div>
    </section>
  );
};

export default Testimonials;
