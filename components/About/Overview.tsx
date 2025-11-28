import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Star, Users, ChevronDown, ChevronUp, GraduationCap, Heart, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';

// --- Data ---

const educationGoals = [
  {
    level: "SD Tahfidz (Fullday)",
    icon: <BookOpen className="w-8 h-8 text-primary-600" />,
    description: "Fokus pada penguatan dasar Al-Qur'an dan akademik sejak dini.",
    points: [
      "Mencintai Al-Qur'an dan mampu membacanya dengan tartil.",
      "Memiliki hafalan Juz 30 hingga Juz 28 mutqin.",
      "Dasar akidah dan akhlak yang lurus sesuai pemahaman Salaf.",
      "Kemampuan dasar calistung dan sains yang mumpuni."
    ],
    color: "bg-primary-50 border-primary-200"
  },
  {
    level: "SMP/SMA Pondok Putri",
    icon: <GraduationCap className="w-8 h-8 text-secondary-600" />,
    description: "Sistem asrama (boarding) untuk pendalaman ilmu syar'i dan kemandirian.",
    points: [
      "Target hafalan 30 Juz dengan sanad (bagi yang mampu).",
      "Pendalaman bahasa Arab dan kitab kuning.",
      "Pembinaan akhlak muslimah dan keputrian (fiqih wanita).",
      "Persiapan masuk perguruan tinggi negeri & timur tengah."
    ],
    color: "bg-secondary-50 border-secondary-200"
  }
];

const teachers = [
  {
    name: "Ustadz H. Abdullah, Lc. MA",
    role: "Pimpinan Pesantren",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Ustadzah Fatimah Azzahra",
    role: "Kepala Pengasuhan Putri",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Ustadz Ahmad Zaki, S.Pd",
    role: "Kepala Sekolah SD",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Ustadzah Siti Aminah",
    role: "Koordinator Tahfidz Putri",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Ustadzah Rina Maryana",
    role: "Guru Bahasa Arab",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Ustadz Budi Santoso",
    role: "Guru Sains & Matematika",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  }
];

const faqs = {
  sd: [
    { q: "Berapa jam sekolah untuk SD Tahfidz?", a: "SD Tahfidz menerapkan sistem Fullday School, masuk pukul 07.00 WIB dan pulang pukul 15.30 WIB (Senin-Jumat)." },
    { q: "Apakah disediakan makan siang?", a: "Ya, sekolah menyediakan makan siang sehat dan snack sore bagi seluruh siswa SD." },
    { q: "Bagaimana target hafalannya?", a: "Target minimal lulusan SD adalah hafal 3 Juz (30, 29, 28) dengan bacaan yang bertajwid." },
    { q: "Apakah ada pelajaran umum?", a: "Tentu. Kami menggunakan Kurikulum Nasional (Merdeka) yang dipadukan dengan kurikulum kepesantrenan." }
  ],
  pondok: [
    { q: "Apakah boleh membawa HP?", a: "Santriwati dilarang membawa HP, Laptop, atau alat elektronik lainnya. Komunikasi dengan orang tua dilakukan melalui telepon asrama pada jadwal yang ditentukan." },
    { q: "Berapa kali jadwal kepulangan?", a: "Perizinan pulang diberikan satu kali setiap bulan (Sabtu-Ahad pekan ke-4) atau saat libur semester." },
    { q: "Bagaimana fasilitas kamarnya?", a: "Satu kamar dihuni oleh 6-8 santriwati dengan ranjang bertingkat, lemari pribadi, dan pendingin ruangan (AC/Kipas)." },
    { q: "Apakah menerima pindahan?", a: "Kami menerima pindahan dengan syarat lulus tes kemampuan dasar Al-Qur'an dan akademik, serta ketersediaan kuota kamar." }
  ]
};

// --- Sub-Components ---

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-2 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={cn("font-semibold text-slate-700 group-hover:text-primary-600 transition-colors", isOpen && "text-primary-600")}>
          {question}
        </span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-primary-500" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 px-2 text-slate-600 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Component ---

const Overview: React.FC = () => {
  const [activeFaqTab, setActiveFaqTab] = useState<'sd' | 'pondok'>('sd');

  return (
    <div className="w-full bg-white pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative h-[480px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600172454520-134a542c9c2f?q=80&w=2000&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-600/80 backdrop-blur-sm text-sm font-medium tracking-wide">
              Tentang Khoiru Ummah
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Membina Generasi Qur'ani dari SD Tahfidz hingga Pondok Putri
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed">
              Khoiru Ummah adalah lembaga pendidikan Islam yang memadukan kurikulum nasional dengan penguatan tahfidz dan pembinaan karakter,
              menaungi jenjang <strong>SD Tahfidz</strong>, <strong>SMP Pondok Putri</strong>, dan <strong>SMA Pondok Putri</strong> dalam satu kesatuan visi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Profil Lembaga & Legalitas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Teks Utama */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">
                Profil Lembaga & Legalitas
              </h2>
              <p className="text-slate-700 leading-relaxed text-[15px] md:text-base">
                Khoiru Ummah adalah lembaga pendidikan yang berfokus pada pembinaan generasi Qur'ani sejak usia sekolah dasar hingga remaja putri.
                Lembaga ini berada di bawah naungan <span className="font-semibold">Yayasan &lt;nama yayasan&gt;</span> dengan izin operasional resmi serta pengawasan
                yang jelas dari pihak terkait.
              </p>
              <p className="text-slate-700 leading-relaxed text-[15px] md:text-base">
                Sejak awal berdiri pada tahun <span className="font-semibold">&lt;tahun berdiri&gt;</span>, Khoiru Ummah hadir untuk menjawab kebutuhan orang tua yang
                menginginkan lingkungan belajar yang islami, terarah, dan tetap memperhatikan prestasi akademik. Melalui kombinasi sekolah formal
                dan program kepesantrenan, lembaga ini membina siswa dan santri agar dekat dengan Al-Qur'an, berakhlak mulia, dan siap berkontribusi di masyarakat.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 space-y-4">
                <h3 className="font-semibold text-slate-900 text-lg">Posisi Lembaga dalam Satu Kalimat</h3>
                <ul className="space-y-2 text-slate-700 text-sm md:text-[15px]">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 mt-1 text-secondary-500" />
                    <span>Berorientasi pada pendidikan Qur'ani dan pembinaan karakter.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 mt-1 text-secondary-500" />
                    <span>Menggabungkan kurikulum nasional dengan penguatan tahfidz dan diniyah.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 mt-1 text-secondary-500" />
                    <span>Menyediakan jenjang SD Tahfidz, SMP Pondok Putri, dan SMA Pondok Putri dalam satu kesatuan visi pendidikan.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kartu Info Singkat */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-primary-100 bg-primary-50/60 p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">Ringkasan Legalitas</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Bernaung di bawah Yayasan &lt;nama yayasan&gt;.</li>
                  <li>• Memiliki izin operasional resmi dari instansi terkait.</li>
                  <li>• Terdaftar sebagai lembaga pendidikan Islam berbasis tahfidz.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
                <h4 className="font-bold text-slate-900 text-lg">Akreditasi & Kemitraan</h4>
                <p className="text-sm text-slate-700">
                  Informasi akreditasi dapat ditampilkan ketika data resmi telah tersedia, misalnya:
                </p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Status akreditasi SD Tahfidz.</li>
                  <li>• Status akreditasi SMP Pondok Putri.</li>
                  <li>• Status akreditasi SMA Pondok Putri.</li>
                  <li>• Kerja sama dengan lembaga atau mitra pendidikan lainnya.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Lingkungan & Suasana Belajar */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Lingkungan & Suasana Belajar</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm md:text-[15px]">
              Lingkungan di Khoiru Ummah dirancang nyaman, tenang, dan kondusif untuk belajar sekaligus menghafal Al-Qur'an, dengan suasana kekeluargaan
              antara guru, pembina, siswa, dan santri.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* SD Tahfidz */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary-50 text-primary-600">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">Suasana Belajar SD Tahfidz</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary-500 font-semibold mt-1">Fullday School</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed mb-5">
                Suasana belajar dibuat menyenangkan dan aktif. Jumlah siswa per kelas dibatasi agar guru dapat mendampingi lebih fokus,
                dan metode belajar dibuat variatif, menggabungkan penjelasan, praktik, permainan edukatif, dan pembiasaan adab sehari-hari.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm md:text-[15px]">
                <li>• Kelas kecil dengan pendampingan intensif.</li>
                <li>• Pembiasaan adab di dalam dan luar kelas.</li>
                <li>• Anak didorong untuk mencintai Al-Qur'an, guru, teman, dan lingkungan sekitar.</li>
              </ul>
            </div>

            {/* Pondok Putri */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-secondary-50 text-secondary-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">Suasana Pondok Putri (SMP/SMA)</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold mt-1">Boarding School</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed mb-5">
                Santri tinggal di lingkungan yang terjaga dan terpantau, dengan jadwal harian yang jelas. Nilai kedisiplinan, kemandirian, dan
                tanggung jawab terus ditekankan melalui aktivitas harian, sementara guru dan ustadzah menjadi pembimbing sekaligus tempat bertanya.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm md:text-[15px]">
                <li>• Jadwal kegiatan harian yang terarah dan seimbang.</li>
                <li>• Lingkungan asrama yang terjaga serta penuh bimbingan.</li>
                <li>• Guru dan ustadzah pembina hadir sebagai teladan dan tempat curhat yang aman.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fasilitas Penunjang Pendidikan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Fasilitas Penunjang Pendidikan</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm md:text-[15px]">
              Berbagai fasilitas disiapkan untuk mendukung proses pendidikan yang optimal, baik di sekolah maupun di lingkungan pondok putri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
              <h3 className="font-semibold text-slate-900">Ruang Belajar & Tahfidz</h3>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Ruang kelas yang nyaman dan tertata rapi.</li>
                <li>• Ruang khusus tahfidz/halaqoh untuk setoran dan muroja'ah.</li>
                <li>• Perpustakaan dengan koleksi buku umum dan keislaman.</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
              <h3 className="font-semibold text-slate-900">Masjid & Asrama</h3>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Masjid/mushalla sebagai pusat ibadah harian dan halaqoh.</li>
                <li>• Asrama putri yang tertata dengan pembagian kamar sesuai jenjang.</li>
                <li>• Area wudhu dan kamar mandi yang terjaga kebersihannya.</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
              <h3 className="font-semibold text-slate-900">Area Penunjang Lain</h3>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Area bermain dan ruang terbuka aman untuk siswa SD.</li>
                <li>• Jika tersedia, ruang komputer/laboratorium untuk keterampilan tambahan.</li>
                <li>• Kerja sama dengan klinik atau tenaga medis terdekat untuk kondisi darurat.</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-slate-900 text-slate-50 rounded-2xl px-6 md:px-8 py-6 md:py-7 flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
            <div className="shrink-0">
              <ShieldCheck className="w-10 h-10 text-secondary-300" />
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl mb-1">Keamanan & Kenyamanan Santri</h3>
              <p className="text-sm md:text-[15px] text-slate-100 leading-relaxed">
                Keluar-masuk santri diatur dengan prosedur yang jelas, pengasuh atau ustadzah pembina selalu berada di area pondok untuk
                memantau kondisi santri, dan koordinasi dengan pihak medis dilakukan untuk penanganan kesehatan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pembinaan Karakter & Adab */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Pembinaan Karakter & Adab</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm md:text-[15px]">
              Keberhasilan pendidikan di Khoiru Ummah tidak hanya diukur dari hafalan dan nilai akademik, tetapi dari akhlak, adab,
              dan kebiasaan baik yang tertanam kuat dalam diri siswa dan santri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* SD Tahfidz */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7 md:p-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">Jenjang SD Tahfidz</h3>
              <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed">
                Pembinaan karakter pada usia dasar dilakukan dengan pendekatan lembut namun konsisten, melalui pembiasaan dan teladan sehari-hari.
              </p>
              <ul className="space-y-2 text-sm md:text-[15px] text-slate-700">
                <li>• Pembiasaan doa harian sebelum dan sesudah kegiatan.</li>
                <li>• Penanaman adab terhadap guru, teman, orang tua, dan lingkungan.</li>
                <li>• Pembiasaan shalat berjamaah dan cinta masjid sejak dini.</li>
                <li>• Penguatan sikap jujur, disiplin, dan tanggung jawab melalui aturan sederhana yang konsisten.</li>
              </ul>
            </div>

            {/* SMP/SMA Pondok Putri */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7 md:p-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">Jenjang SMP & SMA Pondok Putri</h3>
              <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed">
                Pada masa remaja putri, fokus pembinaan karakter diperdalam melalui pembiasaan, penguatan adab, dan kegiatan keislaman yang terarah.
              </p>
              <ul className="space-y-2 text-sm md:text-[15px] text-slate-700">
                <li>• Pembinaan adab muslimah dalam berpakaian, berbicara, dan berinteraksi.</li>
                <li>• Kegiatan halaqoh tarbiyah, muhadharah (latihan pidato), dan mentoring keislaman.</li>
                <li>• Penekanan kemandirian: merapikan kamar, mengatur jadwal belajar, mengelola waktu pribadi.</li>
                <li>• Teladan langsung dari guru dan ustadzah pembina dalam keseharian pondok.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Kolaborasi dengan Orang Tua */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Kolaborasi dengan Orang Tua</h2>
              <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed">
                Khoiru Ummah meyakini bahwa pendidikan terbaik lahir dari kerja sama erat antara sekolah, pondok, dan keluarga.
                Karena itu, orang tua dilibatkan dalam berbagai bentuk kolaborasi yang positif dan terarah.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                <h3 className="font-semibold text-slate-900 text-lg">Bentuk Kolaborasi</h3>
                <ul className="text-sm md:text-[15px] text-slate-700 space-y-1.5">
                  <li>• Pertemuan wali murid berkala untuk menyamakan visi dan menyampaikan perkembangan anak.</li>
                  <li>• Grup komunikasi resmi (WhatsApp/Telegram) untuk informasi penting dan pengumuman.</li>
                  <li>• Program kajian atau seminar parenting Islami.</li>
                  <li>• Kesempatan konsultasi dengan guru atau pembina terkait akademik, hafalan, dan karakter.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-primary-600 text-slate-50 rounded-2xl p-6 md:p-7 space-y-3">
                <h3 className="font-semibold text-lg md:text-xl">Tujuan Kolaborasi</h3>
                <ul className="text-sm md:text-[15px] space-y-1.5">
                  <li>• Menyatukan arah pendidikan anak di rumah dan di lembaga.</li>
                  <li>• Membantu orang tua memahami pola asuh yang selaras dengan nilai-nilai Islam.</li>
                  <li>• Menjaga komunikasi yang sehat dan terbuka antara lembaga dan keluarga.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                  Dengan kolaborasi yang baik, orang tua tidak hanya menjadi penonton, tetapi bagian penting dari proses tumbuh-kembang
                  anak sebagai generasi Qur'ani yang kuat akidah dan adabnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Program Unggulan Tiap Jenjang */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Program Unggulan Tiap Jenjang</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm md:text-[15px]">
              Selain kurikulum formal, Khoiru Ummah memiliki berbagai program unggulan yang menjadi ciri khas di setiap jenjang pendidikan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
            {/* SD Tahfidz */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
              <h3 className="text-xl font-serif font-bold text-slate-900">SD Tahfidz</h3>
              <ul className="text-sm md:text-[15px] text-slate-700 space-y-1.5">
                <li>• Program "Tahfidz Bertahap" dengan target juz tertentu di akhir jenjang.</li>
                <li>• Setoran hafalan harian dan jadwal muroja'ah terstruktur.</li>
                <li>• Kegiatan keislaman mingguan: shalat dhuha, hafalan doa dan hadits pendek.</li>
                <li>• Kegiatan karakter sederhana untuk melatih kemandirian dan tanggung jawab.</li>
              </ul>
            </div>

            {/* SMP Pondok Putri */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
              <h3 className="text-xl font-serif font-bold text-slate-900">SMP Pondok Putri</h3>
              <ul className="text-sm md:text-[15px] text-slate-700 space-y-1.5">
                <li>• Program tahfidz dengan target tambahan juz per tahun sesuai kemampuan.</li>
                <li>• Kelas bahasa Arab dan/atau bahasa Inggris intensif (jika tersedia).</li>
                <li>• Pelatihan public speaking, kepemimpinan, dan kemampuan menyampaikan materi.</li>
                <li>• Kegiatan keorganisasian santri untuk membentuk tanggung jawab dan kerja sama.</li>
              </ul>
            </div>

            {/* SMA Pondok Putri */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
              <h3 className="text-xl font-serif font-bold text-slate-900">SMA Pondok Putri</h3>
              <ul className="text-sm md:text-[15px] text-slate-700 space-y-1.5">
                <li>• Pendalaman tahfidz dan ilmu diniyah sebagai bekal keilmuan lanjutan.</li>
                <li>• Bimbingan minat dan rencana masa depan (kuliah, dunia mengajar, dll.).</li>
                <li>• Program kemandirian dan kontribusi sosial (bakti sosial, dakwah sederhana, pengabdian lingkungan).</li>
                <li>• Pendampingan khusus di masa transisi remaja akhir.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Sekilas Kehidupan Sehari-hari Santri Putri */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Sekilas Kehidupan Sehari-hari Santri Putri</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm md:text-[15px]">
              Orang tua dapat melihat gambaran utuh ritme harian santri, dari bangun tidur hingga kembali beristirahat di malam hari.
            </p>
          </div>

          <div className="space-y-6 border-l-2 border-dashed border-primary-200 pl-6 md:pl-8">
            <div className="relative">
              <div className="absolute -left-[34px] md:-left-[38px] w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">
                PAGI
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Pagi Hari</h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                Bangun tidur, bersiap, shalat Subuh berjamaah, dilanjutkan tilawah atau muroja'ah Qur'an.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[34px] md:-left-[38px] w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">
                SIANG
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Menjelang Siang</h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                Sarapan, persiapan sekolah, belajar di kelas dengan kurikulum formal yang telah ditetapkan.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[34px] md:-left-[38px] w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">
                SORE
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Siang hingga Sore</h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                Istirahat, makan siang, halaqoh tahfidz, atau kegiatan pembinaan lainnya sesuai jadwal pondok.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[34px] md:-left-[38px] w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">
                PETANG
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Sore Hari</h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                Kegiatan ekstrakurikuler, olahraga, atau aktivitas luar ruang yang terarah dan diawasi.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[34px] md:-left-[38px] w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">
                MALAM
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Malam Hari</h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                Belajar malam, muroja'ah hafalan, agenda keilmuan, kemudian persiapan tidur dengan adab yang diajarkan.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm md:text-[15px] text-slate-700 max-w-3xl mx-auto">
            Melalui ritme harian yang terjaga ini, santri putri dibiasakan untuk mengelola waktu, menjaga kedekatan dengan Al-Qur'an,
            sekaligus tetap riang, sehat, dan produktif selama tinggal di pondok.
          </div>
        </div>
      </section>

      {/* 9. Prestasi & Capaian Siswa */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Prestasi & Capaian Siswa</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm md:text-[15px]">
              Prestasi dipandang sebagai buah dari proses pendidikan yang serius dan konsisten, bukan sekadar pengumpulan piala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 mb-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2">
              <h3 className="font-semibold text-slate-900">Lomba Tahfidz</h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                Keikutsertaan siswa dan santri dalam lomba tahfidz tingkat kecamatan, kabupaten, hingga provinsi (jika ada),
                menjadi ajang melatih keberanian dan kepercayaan diri.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2">
              <h3 className="font-semibold text-slate-900">Prestasi Akademik</h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                Siswa didorong untuk aktif dalam olimpiade, lomba cerdas cermat, dan kompetisi akademik lain sesuai minat dan bakat.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2">
              <h3 className="font-semibold text-slate-900">Capaian Hafalan & Alumni</h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                Rata-rata capaian hafalan lulusan SD, SMP, dan SMA mengikuti target program; disertai kisah alumni yang melanjutkan
                ke perguruan tinggi atau berkontribusi di masyarakat.
              </p>
            </div>
          </div>

          <div className="text-center text-sm md:text-[15px] text-slate-700 max-w-3xl mx-auto">
            Tujuan utama dari prestasi tersebut bukan sekadar mengumpulkan piala, tetapi menumbuhkan rasa percaya diri, tanggung jawab,
            dan kesiapan siswa serta santri untuk menjadi generasi yang bermanfaat bagi umat.
          </div>
        </div>
      </section>

      {/* 3. Guru & Pembina (Slider) */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900">Guru & Pembina</h2>
              <p className="text-slate-600 mt-2">Dididik langsung oleh asatidz/asatidzah berkompeten & berpengalaman.</p>
            </div>
            <div className="flex gap-2">
               <span className="text-sm text-slate-400 italic">Geser untuk melihat &rarr;</span>
            </div>
          </div>

          {/* Slider Container */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {teachers.map((teacher, idx) => (
              <motion.div 
                key={idx}
                className="min-w-[280px] md:min-w-[300px] snap-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg group hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center bg-white relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-1 bg-secondary-500"></div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">{teacher.name}</h4>
                    <p className="text-primary-600 text-sm font-medium">{teacher.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Pertanyaan Umum (FAQ)</h2>
            <p className="text-slate-600 mt-2">Informasi yang sering ditanyakan oleh calon wali santri.</p>
          </div>

          {/* FAQ Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-1 rounded-full shadow-sm border border-slate-200 inline-flex">
              <button
                onClick={() => setActiveFaqTab('sd')}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  activeFaqTab === 'sd' 
                    ? "bg-primary-600 text-white shadow-md" 
                    : "text-slate-500 hover:text-primary-600"
                )}
              >
                SD Tahfidz
              </button>
              <button
                onClick={() => setActiveFaqTab('pondok')}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  activeFaqTab === 'pondok' 
                    ? "bg-primary-600 text-white shadow-md" 
                    : "text-slate-500 hover:text-primary-600"
                )}
              >
                Pondok Putri
              </button>
            </div>
          </div>

          {/* FAQ List */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFaqTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeFaqTab === 'sd' ? (
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-primary-700 mb-4 flex items-center gap-2">
                      <BookOpen size={20} /> Seputar SD Tahfidz
                    </h3>
                    {faqs.sd.map((item, idx) => (
                      <FaqItem key={idx} question={item.q} answer={item.a} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                     <h3 className="font-bold text-lg text-secondary-700 mb-4 flex items-center gap-2">
                      <GraduationCap size={20} /> Seputar Pondok Putri
                    </h3>
                    {faqs.pondok.map((item, idx) => (
                      <FaqItem key={idx} question={item.q} answer={item.a} />
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-slate-600 mb-4">Masih ada pertanyaan lain?</p>
            <a href="#footer" className="inline-flex items-center gap-2 text-primary-700 font-bold hover:underline">
              <MapPin size={18} /> Hubungi Kami
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Overview;