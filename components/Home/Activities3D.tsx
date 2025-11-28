import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const activities = [
  {
    image: "https://images.unsplash.com/photo-1577896334614-20190c40e027?q=80&w=2000&auto=format&fit=crop",
    title: "Halaqah Tahfidz Pagi",
    desc: "Setoran hafalan santriwati setiap ba'da Subuh."
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
    title: "Kegiatan Belajar Mengajar",
    desc: "Pembelajaran aktif di kelas menggunakan metode modern."
  },
  {
    image: "https://images.unsplash.com/photo-1529390003868-6c640a9376c6?q=80&w=2000&auto=format&fit=crop",
    title: "Kebersamaan di Asrama",
    desc: "Membangun persaudaraan yang erat antar santriwati."
  },
  {
    image: "https://images.unsplash.com/photo-1555431189-0fabf2667795?q=80&w=2000&auto=format&fit=crop",
    title: "Ekstrakurikuler Panahan",
    desc: "Melatih fokus dan kekuatan fisik sesuai sunnah."
  },
  {
    image: "https://images.unsplash.com/photo-1427504746696-ea5abd71a309?q=80&w=2000&auto=format&fit=crop",
    title: "Kunjungan Edukasi",
    desc: "Field trip santri SD untuk mengenal alam semesta."
  }
];

const Activities3D: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === activities.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? activities.length - 1 : prev - 1));
  };

  // Helper to determine style based on position relative to current index
  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    
    // Handle wrap-around logic for visual positioning only if needed, 
    // but for simplicity in this specific "cover flow" styling, we limit visible range
    // or just use basic diff. Let's make a simple logic for visible 3 items.
    
    // Check minimal distance accounting for loop
    const total = activities.length;
    let dist = index - currentIndex;
    if (dist > total / 2) dist -= total;
    if (dist < -total / 2) dist += total;

    // Styles
    const isActive = dist === 0;
    const isPrev = dist === -1;
    const isNext = dist === 1;
    const isHidden = Math.abs(dist) > 1;

    let transform = '';
    let zIndex = 0;
    let opacity = 0;
    
    if (isActive) {
      transform = 'translateX(0) scale(1) translateZ(0)';
      zIndex = 30;
      opacity = 1;
    } else if (isPrev) {
      transform = 'translateX(-70%) scale(0.8) translateZ(-100px) rotateY(15deg)';
      zIndex = 20;
      opacity = 0.6;
    } else if (isNext) {
      transform = 'translateX(70%) scale(0.8) translateZ(-100px) rotateY(-15deg)';
      zIndex = 20;
      opacity = 0.6;
    } else {
        // Hide others off screen nicely
        transform = dist < 0 ? 'translateX(-150%) scale(0.5)' : 'translateX(150%) scale(0.5)';
        zIndex = 10;
        opacity = 0;
    }

    return {
      transform,
      zIndex,
      opacity,
      transition: 'all 0.5s ease-in-out',
    };
  };

  return (
    <section id="kegiatan" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Galeri Kegiatan</h2>
        <p className="text-slate-600">Momen berharga dalam keseharian santri SD dan SMP/SMA.</p>
      </div>

      <div className="relative h-[450px] w-full max-w-5xl mx-auto perspective-1000 flex items-center justify-center">
        {activities.map((item, index) => {
          const style = getCardStyle(index);
          // Only render if opacity > 0 to save resources, or keep in DOM but hidden
          if (style.opacity === 0) return null;

          return (
            <div
              key={index}
              className="absolute top-10 w-[280px] sm:w-[400px] h-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white"
              style={style}
            >
              <img src={item.image} alt={item.title} className="w-full h-[65%] object-cover" />
              <div className="p-6 text-left h-[35%] bg-white flex flex-col justify-center">
                <h3 className="font-bold text-lg text-primary-800 line-clamp-1">{item.title}</h3>
                <p className="text-slate-500 text-sm mt-2 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          );
        })}

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-10 z-50 p-3 rounded-full bg-white shadow-lg text-primary-700 hover:bg-primary-50 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-10 z-50 p-3 rounded-full bg-white shadow-lg text-primary-700 hover:bg-primary-50 transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {activities.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex ? 'bg-primary-600 w-8' : 'bg-slate-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Activities3D;