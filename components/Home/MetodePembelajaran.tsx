import React from 'react';
import { BookOpen, Users, Lightbulb, ShieldCheck } from 'lucide-react';

const levelMethods = [
  {
    level: 'SD Tahfidz',
    description:
      'Fokus menanamkan kecintaan pada Al-Qur\'an dan belajar yang menyenangkan, dengan ritme yang sesuai usia anak-anak.',
    methods: [
      {
        icon: BookOpen,
        title: 'Halaqah & Talaqqi Dasar',
        description:
          'Pengenalan huruf hijaiyah, tahsin dasar, dan hafalan surat-surat pendek dengan suasana yang hangat.',
        details: [
          'Setoran hafalan harian dengan target ringan dan konsisten',
          'Permainan edukatif untuk menguatkan makharijul huruf',
          'Pendampingan ustadz/ustadzah yang sabar dan dekat dengan anak',
        ],
      },
      {
        icon: Lightbulb,
        title: 'Active Learning Tematik',
        description:
          'Belajar membaca, menulis, dan berhitung melalui tema yang dekat dengan keseharian anak.',
        details: [
          'Kegiatan praktek langsung dan eksperimen sederhana',
          'Belajar dalam kelompok kecil agar semua anak terlibat',
          'Portofolio karya anak sebagai dokumentasi perkembangan',
        ],
      },
    ],
  },
  {
    level: 'SMP Pondok Putri',
    description:
      'Masa transisi remaja dengan penekanan pada pembinaan karakter, kemandirian, dan penguatan dasar akademik.',
    methods: [
      {
        icon: Users,
        title: 'Mentoring & Pembinaan Harian',
        description:
          'Setiap santri memiliki wali/mentor yang memantau ibadah, adab, dan perkembangan emosionalnya.',
        details: [
          'Pertemuan mentoring rutin untuk curhat dan evaluasi diri',
          'Monitoring kehadiran shalat berjamaah dan tilawah',
          'Kolaborasi erat dengan orang tua melalui buku penghubung',
        ],
      },
      {
        icon: ShieldCheck,
        title: 'Kelas Terstruktur & Tahfidz Lanjutan',
        description:
          'Penguatan tahfidz dengan target yang lebih tinggi, disesuaikan dengan kemampuan masing-masing santri.',
        details: [
          'Grouping berdasarkan capaian hafalan dan kemampuan baca',
          'Murajaah terjadwal pagi dan malam',
          'Evaluasi berkala dan tasmi\' di hadapan ustadzah',
        ],
      },
    ],
  },
  {
    level: 'SMA Pondok Putri',
    description:
      'Pembelajaran dipersiapkan untuk masa pasca sekolah: studi lanjut, dunia kerja, dan peran di masyarakat.',
    methods: [
      {
        icon: Lightbulb,
        title: 'Project Based & Kelas Olimpiade',
        description:
          'Pendalaman materi akademik melalui proyek, riset kecil, dan kelas pengayaan untuk siswa berpotensi tinggi.',
        details: [
          'Proyek lintas mata pelajaran yang relevan dengan kehidupan nyata',
          'Kelas pengayaan Matematika, Sains, dan Bahasa',
          'Pendampingan lomba dan persiapan masuk perguruan tinggi',
        ],
      },
      {
        icon: Users,
        title: 'Coaching Karakter & Life Planning',
        description:
          'Pendampingan untuk menyusun cita-cita, rencana studi, dan peran sebagai muslimah di masyarakat.',
        details: [
          'Sesi coaching personal dengan guru pembimbing',
          'Pelatihan soft skills: komunikasi, kepemimpinan, manajemen waktu',
          'Kegiatan pelayanan sosial sebagai latihan terjun ke masyarakat',
        ],
      },
    ],
  },
];

const MetodePembelajaran: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-primary-600 uppercase mb-2">
            Cara Kami Mengajar
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Metode Pembelajaran di Khoiru Ummah
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600">
            Kami memadukan pembelajaran Qur\'ani, akademik, dan pembinaan karakter dengan metode yang
            hangat, terarah, dan menyenangkan, sehingga siswa merasa betah belajar setiap hari.
          </p>
        </div>

        <div className="space-y-10">
          {levelMethods.map((level) => (
            <div key={level.level} className="bg-white/40 rounded-2xl p-5 sm:p-6 border border-slate-200/70">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {level.level}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                    {level.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {level.methods.map((item) => (
                  <div
                    key={item.title}
                    className="relative bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 flex-shrink-0">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mb-2">{item.description}</p>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                          {item.details.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetodePembelajaran;
