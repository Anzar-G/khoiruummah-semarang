import React from 'react';
import { motion } from 'framer-motion';
import { Book, Clock, CheckCircle, Calendar, GraduationCap, Brain, Languages } from 'lucide-react';
import { cn } from '../../lib/utils';

const Curriculum: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2000&auto=format&fit=crop")' }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Kurikulum Terpadu
          </motion.h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Memadukan Kurikulum Nasional (Merdeka) dengan Kurikulum Khas Pesantren (Tahfidz & Diniyah) untuk mencetak generasi ulul albab.
          </p>
        </div>
      </section>

      {/* Section 1 - Alur Belajar SD Tahfidz */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
            <div className="sticky top-24 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-primary-500">
              <h3 className="text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center gap-2">
                <Book className="w-6 h-6" /> SD Tahfidz
              </h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Program pendidikan dasar yang mengutamakan penanaman adab, bacaan Al-Qur'an yang fasih (tahsin), dan dasar-dasar akademik yang kuat.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-lg">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span>07.00 - 15.30 WIB (Fullday)</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>Target Hafalan: 3 Juz (30, 29, 28)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h4 className="text-xl font-bold text-slate-800 mb-6">Jadwal Harian Siswa</h4>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {[
                { time: '07.00 - 07.30', activity: 'Sholat Dhuha & Murojaah Pagi' },
                { time: '07.30 - 09.30', activity: 'Tahfidz & Tahsin Al-Qur\'an' },
                { time: '09.30 - 10.00', activity: 'Istirahat & Snack Pagi' },
                { time: '10.00 - 12.00', activity: 'Pembelajaran Akademik (Tematik/Mapel)' },
                { time: '12.00 - 13.00', activity: 'Sholat Dzuhur Berjamaah & Makan Siang' },
                { time: '13.00 - 15.00', activity: 'Lanjutan Pembelajaran Akademik' },
                { time: '15.00 - 15.30', activity: 'Sholat Ashar & Persiapan Pulang' },
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-slate-900">{item.activity}</div>
                    </div>
                    <div className="text-slate-500 text-xs font-mono">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Alur Belajar SMP/SMA Pondok Putri */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
            <div className="w-full md:w-1/3">
              <div className="sticky top-24 p-6 bg-slate-50 rounded-2xl shadow-lg border-l-4 border-secondary-500">
                <h3 className="text-2xl font-serif font-bold text-secondary-800 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6" /> SMP/SMA Pondok
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Pendidikan berbasis asrama yang intensif, memadukan kurikulum dinas, kepesantrenan, dan pembinaan karakter muslimah sejati.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-700 bg-white p-3 rounded-lg border border-slate-200">
                    <Calendar className="w-5 h-5 text-secondary-500" />
                    <span>24 Jam (Boarding School)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-700 bg-white p-3 rounded-lg border border-slate-200">
                    <CheckCircle className="w-5 h-5 text-secondary-500" />
                    <span>Target Hafalan: 30 Juz (Takhassus)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h4 className="text-xl font-bold text-slate-800 mb-6">Rutinitas Harian Santriwati</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { time: '03.30 - 05.00', activity: 'Qiyamul Lail & Sholat Subuh' },
                  { time: '05.00 - 06.30', activity: 'Halaqah Tahfidz Pagi' },
                  { time: '06.30 - 07.15', activity: 'Persiapan Sekolah & Sarapan' },
                  { time: '07.15 - 12.00', activity: 'Sekolah Formal (KBM)' },
                  { time: '12.00 - 13.00', activity: 'Ishoma Siang' },
                  { time: '13.00 - 15.00', activity: 'Pelajaran Diniyah / Kepondokan' },
                  { time: '15.30 - 17.00', activity: 'Ekstrakurikuler / Mandiri' },
                  { time: '18.00 - 19.30', activity: 'Sholat Maghrib & Murojaah' },
                  { time: '19.30 - 20.30', activity: 'Makan Malam & Sholat Isya' },
                  { time: '20.30 - 21.30', activity: 'Belajar Mandiri (Muqobalah)' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100 hover:border-secondary-300 transition-colors">
                    <span className="block text-xs font-bold text-secondary-600 mb-1">{item.time}</span>
                    <span className="text-slate-800 font-medium">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Rincian Kurikulum */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">Komposisi Kurikulum</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* SD Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-primary-500 hover:-translate-y-2 transition-transform">
            <div className="p-6 bg-primary-50">
              <h3 className="text-xl font-bold text-primary-900">Kurikulum SD</h3>
              <p className="text-sm text-primary-700 mt-1">Fondasi Iman & Ilmu</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2"><Brain className="w-4 h-4"/> Umum (Diknas)</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 ml-1 space-y-1">
                  <li>Matematika, IPA, IPS</li>
                  <li>Bahasa Indonesia</li>
                  <li>PPKn</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2"><Book className="w-4 h-4"/> Diniyah</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 ml-1 space-y-1">
                  <li>Tahfidz & Tahsin (Metode Umi)</li>
                  <li>Aqidah Akhlak</li>
                  <li>Fiqih Ibadah Dasar</li>
                  <li>Sirah Nabawiyah</li>
                  <li>Bahasa Arab Dasar</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SMP Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-secondary-500 hover:-translate-y-2 transition-transform">
            <div className="p-6 bg-secondary-50">
              <h3 className="text-xl font-bold text-secondary-900">Kurikulum SMP</h3>
              <p className="text-sm text-secondary-700 mt-1">Pengembangan Diri</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2"><Brain className="w-4 h-4"/> Umum (K13/Merdeka)</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 ml-1 space-y-1">
                  <li>Matematika, IPA Terpadu</li>
                  <li>Bahasa Inggris & Indonesia</li>
                  <li>IPS Terpadu</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2"><Book className="w-4 h-4"/> Kepondokan</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 ml-1 space-y-1">
                  <li>Tahfidz Intensif</li>
                  <li>Bahasa Arab (Nahwu Shorof)</li>
                  <li>Hadits Arba'in</li>
                  <li>Fiqih Wanita</li>
                  <li>Mutholaah</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SMA Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-slate-700 hover:-translate-y-2 transition-transform">
            <div className="p-6 bg-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Kurikulum SMA</h3>
              <p className="text-sm text-slate-600 mt-1">Persiapan Perguruan Tinggi</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2"><Brain className="w-4 h-4"/> Peminatan</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 ml-1 space-y-1">
                  <li>MIPA (Matematika, Fisika, Kimia, Biologi)</li>
                  <li>IPS (Ekonomi, Sosiologi, Geografi)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2"><Languages className="w-4 h-4"/> Takhassus</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 ml-1 space-y-1">
                  <li>Sanad Tahfidz</li>
                  <li>Ulumul Syar'i (Tafsir, Balaghah)</li>
                  <li>Persiapan Timur Tengah / PTN</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4 - Card Image KBM */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">Suasana Belajar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Halaqah Tahfidz", img: "https://images.unsplash.com/photo-1594247296568-7c8702c2dbb5?q=80&w=600&auto=format&fit=crop" },
              { title: "Kelas Interaktif", img: "https://images.unsplash.com/photo-1427504746696-ea5abd71a309?q=80&w=600&auto=format&fit=crop" },
              { title: "Laboratorium Sains", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop" },
              { title: "Mutholaah Malam", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop" },
            ].map((item, idx) => (
              <div key={idx} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;