import React from 'react';
import { SunMedium, MoonStar } from 'lucide-react';

const dailySchedule = [
  {
    time: '04.00 - 05.00',
    title: 'Persiapan & Qiyamullail',
    desc: 'Bangun, persiapan, dan pembiasaan ibadah malam (untuk santri mukim).',
    type: 'mukim',
  },
  {
    time: '05.00 - 06.00',
    title: 'Shalat Subuh & Halaqah Pagi',
    desc: 'Shalat Subuh berjamaah dilanjutkan tilawah dan setoran hafalan ringan.',
    type: 'semua',
  },
  {
    time: '07.00 - 12.00',
    title: 'Kegiatan Belajar Mengajar',
    desc: 'Pelajaran umum dan keislaman di kelas dengan metode aktif dan menyenangkan.',
    type: 'semua',
  },
  {
    time: '12.00 - 13.30',
    title: 'Shalat Dzuhur & Istirahat',
    desc: 'Shalat Dzuhur berjamaah, makan siang, dan istirahat terarah.',
    type: 'semua',
  },
  {
    time: '14.00 - 16.00',
    title: 'Tahfidz & Pengayaan',
    desc: 'Sesi tahfidz/murajaah dan pengayaan akademik sesuai jenjang.',
    type: 'semua',
  },
  {
    time: '16.00 - 17.30',
    title: 'Ekstrakurikuler & Olahraga',
    desc: 'Kegiatan minat bakat seperti olahraga, seni, bahasa, dan keterampilan.',
    type: 'semua',
  },
  {
    time: '18.00 - 20.00',
    title: 'Shalat Maghrib, Isya & Kajian',
    desc: 'Shalat berjamaah, tilawah, dan kajian keislaman rutin (santri mukim).',
    type: 'mukim',
  },
  {
    time: '20.00 - 21.30',
    title: 'Belajar Malam & Persiapan Istirahat',
    desc: 'Belajar terarah, review pelajaran, lalu persiapan tidur.',
    type: 'mukim',
  },
];

const JadwalHarian: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-primary-600 uppercase mb-2">
            Ritme Hari di Pesantren
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Jadwal Harian Santri Khoiru Ummah
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600">
            Gambaran umum aktivitas harian santri, dari shalat Subuh hingga persiapan istirahat malam. 
            Detail jam bisa menyesuaikan kebijakan terbaru pesantren.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.9fr] items-start">
          {/* Timeline utama */}
          <div className="space-y-4">
            {dailySchedule.map((item, index) => (
              <div key={index} className="relative flex gap-4">
                {/* Garis timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-1" />
                  {index !== dailySchedule.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-primary-200 to-slate-200" />
                  )}
                </div>

                {/* Card jadwal */}
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-semibold tracking-wide uppercase text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                      {item.time}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {item.type === 'mukim' ? 'Santri Mukim' : 'Semua Santri'}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Ringkasan blok waktu */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center">
                  <SunMedium className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Pagi hingga Sore</h3>
                  <p className="text-xs text-primary-100">
                    Fokus pada KBM, tahfidz, dan kegiatan minat bakat.
                  </p>
                </div>
              </div>
              <ul className="text-xs space-y-1.5 text-primary-50 list-disc list-inside">
                <li>Pembiasaan disiplin waktu dan kerapian sejak pagi.</li>
                <li>Perpaduan pelajaran umum, diniyah, dan tahfidz.</li>
                <li>Olahraga dan ekstrakurikuler untuk menyalurkan energi positif.</li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-50 rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-xl bg-slate-700 flex items-center justify-center">
                  <MoonStar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Malam Hari (Santri Mukim)</h3>
                  <p className="text-xs text-slate-300">
                    Waktu tenang untuk memperkuat hafalan dan evaluasi diri.
                  </p>
                </div>
              </div>
              <ul className="text-xs space-y-1.5 text-slate-200 list-disc list-inside">
                <li>Kajian keislaman ringan setelah Maghrib.</li>
                <li>Belajar malam terarah dengan pendampingan guru.</li>
                <li>Persiapan tidur yang teratur agar fisik tetap sehat.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JadwalHarian;
