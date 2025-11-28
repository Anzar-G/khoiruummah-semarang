import React from 'react';
import { BookOpen, BookMarked, HeartHandshake, Lightbulb, Languages, Briefcase } from 'lucide-react';
import { GetStartedButton } from '../ui/get-started-button';

interface ProgramUnggulanProps {
  onViewPrograms?: () => void;
}

const ProgramUnggulan: React.FC<ProgramUnggulanProps> = ({ onViewPrograms }) => {
  const programs = [
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: 'Tahsin & Tahfidz Al-Qur\'an',
      desc: 'Perbaikan bacaan (tahsin) dan hafalan bertahap dengan metode talaqqi, murajaah, dan tasmi.',
      detail: 'Menggunakan metode yang mudah diikuti anak, dengan target hafalan jelas di setiap jenjang dan sertifikasi hafalan bagi yang memenuhi syarat.',
    },
    {
      icon: <HeartHandshake className="w-7 h-7" />,
      title: 'Mentoring Adab & Akhlak',
      desc: 'Pendampingan karakter harian oleh guru dan ustadzah pembina.',
      detail: 'Pembiasaan adab Rasulullah dalam berpakaian, berbicara, dan berinteraksi, disertai evaluasi sikap yang santun dan solutif.',
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: 'Kelas Olimpiade & Akademik',
      desc: 'Pengayaan khusus bagi siswa yang berminat mengikuti kompetisi akademik.',
      detail: 'Pendalaman materi Matematika, Sains, dan Bahasa, serta bimbingan untuk OSN dan persiapan masuk perguruan tinggi (untuk SMA).',
    },
    {
      icon: <Languages className="w-7 h-7" />,
      title: 'Bahasa Arab & Inggris',
      desc: 'Penguatan bahasa sebagai bekal studi lanjutan dan dakwah.',
      detail: 'Kelas percakapan, mufrodat harian, dan kegiatan tematik dengan target santri berani berbicara dan memahami teks sederhana.',
    },
    {
      icon: <Briefcase className="w-7 h-7" />,
      title: 'Life Skills & Entrepreneur',
      desc: 'Keterampilan hidup mandiri serta pengenalan kewirausahaan.',
      detail: 'Praktik mengelola waktu, kerapian kamar, memasak sederhana, hingga proyek kecil kewirausahaan yang terarah.',
    },
    {
      icon: <BookMarked className="w-7 h-7" />,
      title: 'Kajian Keislaman Intensif',
      desc: 'Pendalaman ilmu agama yang membentuk pondasi pemahaman syar\'i.',
      detail: 'Mencakup fiqih ibadah, sirah Nabawiyah, tafsir surat-surat pilihan, dan hadits-hadits adab.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="program-unggulan">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">Program Unggulan Khoiru Ummah</h2>
          <p className="text-slate-600 text-sm md:text-[15px]">
            Rangkaian program yang menjadi ciri khas Khoiru Ummah dalam membina hafalan, karakter, dan kesiapan akademik santri.
          </p>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center mb-1">
                {program.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">{program.title}</h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">{program.desc}</p>
              <p className="text-xs md:text-[13px] text-slate-500 leading-relaxed mt-1 flex-1">{program.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-[11px] sm:text-xs text-slate-500 text-center">
            Ingin melihat detail lengkap setiap program tahfidz, akademik, dan pembinaan karakter di Khoiru Ummah? Semua rangkuman kurikulum dapat kamu temukan pada halaman <span className="font-semibold">Kurikulum & Program</span>.
          </p>
          {onViewPrograms && (
            <GetStartedButton
              size="sm"
              onClick={onViewPrograms}
              className="mt-1 text-xs sm:text-[13px]"
            >
              Lihat semua program
            </GetStartedButton>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramUnggulan;
