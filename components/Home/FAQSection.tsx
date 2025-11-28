import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Apa saja jenjang yang tersedia di Khoiru Ummah?',
    answer:
      'Saat ini tersedia jenjang SD Tahfidz, SMP Pondok Putri, dan SMA Pondok Putri dengan fokus pada tahfidz, akademik, dan pembinaan karakter.',
  },
  {
    question: 'Apakah Khoiru Ummah berasrama?',
    answer:
      'Untuk jenjang SMP dan SMA tersedia program berasrama (santri mukim). Untuk SD disediakan program reguler dengan pembiasaan Qur\'ani harian.',
  },
  {
    question: 'Bagaimana alur pendaftaran (PSB)?',
    answer:
      'Calon orang tua/wali mengisi formulir online, mengikuti sesi wawancara dan tes sederhana sesuai jenjang, lalu menunggu pengumuman resmi dari panitia PSB.',
  },
  {
    question: 'Kapan waktu kunjungan atau survei sekolah?',
    answer:
      'Orang tua dapat melakukan survei sekolah pada jam kerja dengan melakukan janji temu terlebih dahulu melalui menu Kontak.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
          <div>
            <p className="text-xs font-semibold tracking-widest text-primary-600 uppercase mb-2">
              Pertanyaan Umum
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
              FAQ Orang Tua & Calon Santri
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-slate-600">
              Beberapa pertanyaan yang sering diajukan seputar jenjang, asrama, dan alur pendaftaran di
              Khoiru Ummah. Detail teknis PSB tetap mengacu pada informasi resmi dari panitia.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3 text-xs sm:text-sm text-primary-800">
            <HelpCircle className="h-5 w-5" />
            <span>
              Masih ada yang ingin ditanyakan? Silakan hubungi kami melalui menu Kontak atau halaman PSB.
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5"
            >
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1.5">
                {item.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
