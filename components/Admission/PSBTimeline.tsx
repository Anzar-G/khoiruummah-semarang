import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const PSBTimeline: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Set target date to 30 days from now for demo purposes
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const stages = [
    {
      title: 'Pendaftaran Online',
      date: '1 Nov - 31 Des 2024',
      status: 'active',
      desc: 'Isi formulir & upload berkas via website.',
    },
    {
      title: 'Tes Seleksi',
      date: 'Januari 2025',
      status: 'upcoming',
      desc: 'Tes akademik & wawancara orang tua.',
    },
    {
      title: 'Pengumuman',
      date: 'Februari 2025',
      status: 'upcoming',
      desc: 'Hasil seleksi diumumkan via WA/Email.',
    },
    {
      title: 'Daftar Ulang',
      date: 'Maret 2025',
      status: 'upcoming',
      desc: 'Pembayaran & pengukuran seragam.',
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-10">
      {/* Header & Countdown */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 border-b border-slate-100 pb-8">
        <div>
          <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="text-primary-600" /> Jadwal PSB 2025/2026
          </h3>
          <p className="text-slate-600 mt-1">Gelombang 1 sedang berlangsung. Segera daftar sebelum kuota penuh!</p>
        </div>

        <div className="bg-primary-50 px-6 py-4 rounded-xl flex items-center gap-4">
          <div className="text-center">
            <span className="block text-2xl font-bold text-primary-700">{timeLeft.days}</span>
            <span className="text-xs text-primary-600 uppercase font-semibold">Hari</span>
          </div>
          <div className="text-2xl font-bold text-primary-300">:</div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-primary-700">{timeLeft.hours}</span>
            <span className="text-xs text-primary-600 uppercase font-semibold">Jam</span>
          </div>
          <div className="text-2xl font-bold text-primary-300">:</div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-primary-700">{timeLeft.minutes}</span>
            <span className="text-xs text-primary-600 uppercase font-semibold">Menit</span>
          </div>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-0 bottom-0 left-[19px] md:left-1/2 w-0.5 bg-slate-200 -translate-x-1/2 md:translate-x-0" />

        <div className="space-y-8">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className="flex-1 ml-12 md:ml-0">
                <div
                  className={`bg-slate-50 p-5 rounded-xl border ${
                    stage.status === 'active'
                      ? 'border-primary-500 ring-1 ring-primary-200'
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-900 text-lg">{stage.title}</h4>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${
                        stage.status === 'active'
                          ? 'bg-primary-100 text-primary-700'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {stage.date}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{stage.desc}</p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-white border-4 border-slate-100 rounded-full z-10">
                {stage.status === 'active' ? (
                  <div className="w-4 h-4 bg-primary-600 rounded-full animate-pulse" />
                ) : (
                  <div className="w-3 h-3 bg-slate-300 rounded-full" />
                )}
              </div>

              {/* Empty Space for Grid */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PSBTimeline;
