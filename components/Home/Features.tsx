import React from 'react';
import { Book, Home, Star, UserCheck } from 'lucide-react';
import { HoverEffect } from '../ui/hover-effect';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Tahfidz Terstruktur',
      desc: 'Metode menghafal yang sistematis dengan target capaian yang jelas per semester.',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Boarding Khusus Putri',
      desc: 'Lingkungan asrama SMP/SMA yang terjaga privasinya, aman, dan penuh kekeluargaan.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Pembinaan Karakter',
      desc: 'Fokus pada adab sebelum ilmu, membentuk pribadi yang santun dan hormat kepada orang tua.',
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Musyrifah Berpengalaman',
      desc: "Didampingi oleh pembimbing asrama dan guru yang hafal Al-Qur'an dan kompeten.",
    },
  ];

  return (
    <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Kenapa Memilih Khoiru Ummah Semarang?</h2>
          <p className="text-primary-200 max-w-2xl mx-auto">Kami berikhtiar memberikan lingkungan terbaik bagi tumbuh kembang putri Anda.</p>
        </div>

        <HoverEffect
          items={features.map((feature) => ({
            title: feature.title,
            description: feature.desc,
            link: '#',
          }))}
        />
      </div>
    </section>
  );
};

export default Features;