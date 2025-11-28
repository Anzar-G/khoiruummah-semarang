import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Trophy, Home, Users } from 'lucide-react';
import { cn } from '../../lib/utils';

// Dummy Data
const galleryItems = [
  // Fasilitas
  { id: 1, category: 'fasilitas', src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop', title: 'Gedung Sekolah SD', desc: 'Ruang kelas nyaman ber-AC' },
  { id: 2, category: 'fasilitas', src: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=800&auto=format&fit=crop', title: 'Masjid Khoiru Ummah Semarang', desc: 'Pusat kegiatan ibadah' },
  { id: 3, category: 'fasilitas', src: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop', title: 'Asrama Putri', desc: 'Kamar tidur bersih dan rapi' },
  { id: 4, category: 'fasilitas', src: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop', title: 'Halaman Sekolah', desc: 'Area bermain dan olahraga' },
  
  // Prestasi SD
  { id: 5, category: 'prestasi_sd', src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop', title: 'Juara 1 MHQ', desc: 'Tingkat Kecamatan 2023' },
  { id: 6, category: 'prestasi_sd', src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop', title: 'Lomba Pidato Cilik', desc: 'Mewakili Kota ke Provinsi' },
  
  // Prestasi Pondok
  { id: 7, category: 'prestasi_smp', src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=800&auto=format&fit=crop', title: 'Wisuda Tahfidz 30 Juz', desc: 'Angkatan ke-5 SMA' },
  { id: 8, category: 'prestasi_smp', src: 'https://images.unsplash.com/photo-1427504746696-ea5abd71a309?q=80&w=800&auto=format&fit=crop', title: 'Juara Umum Olimpiade PAI', desc: 'Tingkat Nasional' },
  
  // Kegiatan
  { id: 9, category: 'kegiatan', src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop', title: 'KBM di Kelas', desc: 'Suasana belajar interaktif' },
  { id: 10, category: 'kegiatan', src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop', title: 'Rihlah Tadabbur Alam', desc: 'Kunjungan ke Kebun Raya' },
  { id: 11, category: 'kegiatan', src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=800&auto=format&fit=crop', title: 'Ujian Tasmi\'', desc: 'Setoran hafalan sekali duduk' },
];

const categories = [
  { id: 'all', label: 'Semua', icon: <ImageIcon size={16} /> },
  { id: 'fasilitas', label: 'Fasilitas', icon: <Home size={16} /> },
  { id: 'prestasi_sd', label: 'Prestasi SD', icon: <Trophy size={16} /> },
  { id: 'prestasi_smp', label: 'Prestasi Pondok', icon: <Trophy size={16} /> },
  { id: 'kegiatan', label: 'Aktivitas', icon: <Users size={16} /> },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-slate-50 pb-20">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Galeri Khoiru Ummah Semarang</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Dokumentasi fasilitas, kegiatan, dan prestasi santri SD Tahfidz & Pondok Putri SMP/SMA.
        </p>
      </section>

      {/* Filters */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex justify-start md:justify-center gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all",
                  activeCategory === cat.id
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Gallery */}
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-slate-200 cursor-zoom-in"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-slate-200 text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p>Tidak ada foto dalam kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;