import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Tent, Target, Map, Mic2, Star } from 'lucide-react';

const Extracurricular: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 pb-20">
      
      {/* Hero */}
      <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Pengembangan Bakat & Karakter</h1>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Ekstrakurikuler di Al-Bayan bukan sekadar pengisi waktu luang, tapi sarana membentuk jiwa kepemimpinan, kemandirian, dan keterampilan hidup (life skill) bagi santri.
          </p>
        </div>
      </section>

      {/* Section 1 - SD (Dalam Kota/Sekolah) */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          <div className="bg-primary-100 p-3 rounded-xl text-primary-600">
            <Palette className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">Ekskul SD Tahfidz</h2>
            <p className="text-slate-600">Mengasah kreativitas dan motorik siswa.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Pramuka Siaga", desc: "Melatih kedisiplinan dasar.", img: "https://images.unsplash.com/photo-1453342664588-43128b9d61d5?q=80&w=400&auto=format&fit=crop" },
            { name: "Futsal & Olahraga", desc: "Kesehatan jasmani.", img: "https://images.unsplash.com/photo-1575361204480-aadea25d46f3?q=80&w=400&auto=format&fit=crop" },
            { name: "Seni Lukis & Kaligrafi", desc: "Keindahan seni Islam.", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop" },
            { name: "Sains Club", desc: "Eksperimen sederhana.", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop" },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100"
            >
              <div className="h-40 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2 - Pondok Putri (Outdoor & Skill) */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-10 text-right md:flex-row-reverse md:text-right">
             <div className="bg-secondary-100 p-3 rounded-xl text-secondary-600">
                <Tent className="w-8 h-8" />
             </div>
             <div className="text-left md:text-right">
                <h2 className="text-3xl font-serif font-bold text-slate-900">Ekskul Pondok Putri</h2>
                <p className="text-slate-600">Kemandirian, Kepemimpinan, dan Dakwah.</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                { name: "Kepanduan / Pramuka", desc: "Survival & Leadership.", icon: <Map /> },
                { name: "Tata Boga & Busana", desc: "Life skill keputrian.", icon: <Star /> },
                { name: "Jurnalistik & Media", desc: "Dakwah literasi.", icon: <Mic2 /> },
                { name: "Rihlah & Camping", desc: "Tadabbur alam tahunan.", icon: <Tent /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-secondary-400">
                  <div className="p-2 bg-secondary-50 text-secondary-600 rounded-lg">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-800">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Highlight Image */}
            <div className="h-full min-h-[250px] rounded-2xl overflow-hidden relative shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=800&auto=format&fit=crop" 
                alt="Activities" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-medium">"Membangun ukhuwah melalui kegiatan bersama."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Ekskul Eksklusif */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">Program Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Archery Club (Panahan)", 
              desc: "Olahraga sunnah yang melatih fokus dan ketenangan jiwa.",
              img: "https://images.unsplash.com/photo-1555431189-0fabf2667795?q=80&w=600&auto=format&fit=crop"
            },
            { 
              title: "Equitation (Berkuda)", 
              desc: "Melatih keberanian dan pengendalian diri (kerja sama dengan stable lokal).",
              img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=600&auto=format&fit=crop"
            },
            { 
              title: "Public Speaking", 
              desc: "Pelatihan pidato 3 bahasa (Arab, Inggris, Indonesia) untuk kader dakwah.",
              img: "https://images.unsplash.com/photo-1475721027767-4d5301e84d44?q=80&w=600&auto=format&fit=crop"
            }
          ].map((item, idx) => (
             <div key={idx} className="group relative rounded-2xl overflow-hidden h-80 shadow-2xl">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 mb-4">
                    <Target />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-200 text-sm">{item.desc}</p>
                </div>
             </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Extracurricular;