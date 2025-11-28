import React from 'react';
import { Check, ArrowRight, BookOpen, Home, Users, Calendar, MessageSquare, ChevronDown } from 'lucide-react';

const PSB: React.FC = () => {
  return (
    <div className="w-full bg-slate-50">
      {/* Hero PSB */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white py-24 px-4 text-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-500/90 text-xs font-bold uppercase tracking-wider mb-6">
            <Calendar className="w-4 h-4" />
            Pendaftaran Tahun Ajaran 2025/2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Penerimaan Santri Baru
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Bergabunglah bersama keluarga besar Khoiru Ummah. Mari siapkan generasi Qur'ani yang cerdas, 
            berakhlak mulia, dan siap menjadi pemimpin masa depan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a 
              href="#pilih-jenjang" 
              className="group px-8 py-4 w-full sm:w-auto rounded-xl bg-secondary-500 text-white font-bold text-lg hover:bg-secondary-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#alur-pendaftaran" 
              className="group px-8 py-4 w-full sm:w-auto rounded-xl bg-white/10 text-white font-medium text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Lihat Alur Pendaftaran
            </a>
          </div>
        </div>
        
        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] sm:h-[100px] w-full fill-slate-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Section Pilih Jenjang */}
      <section id="pilih-jenjang" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Pilih Jenjang Pendidikan</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Pilih jenjang pendidikan yang sesuai untuk putra/putri Anda. Setiap jenjang memiliki keunggulan dan fokus pendidikan yang berbeda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card SD Tahfidz */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-primary-500 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">SD Tahfidz</h3>
                <p className="text-slate-500 text-sm mb-6">Fullday School (Putra & Putri)</p>
                
                <div className="text-left space-y-4 mb-8">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Program pendidikan dasar dengan penekanan pada tahfidz Al-Qur'an dan pengembangan karakter Islami.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">Usia 6-12 tahun</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">Fullday school (07.30 - 15.30 WIB)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">Target hafalan 3-5 Juz</span>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://forms.gle/example-sd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                >
                  Daftar SD Tahfidz
                </a>
              </div>
            </div>

            {/* Card SMP Pondok Putri */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-secondary-500 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl relative">
              <div className="absolute top-4 right-4 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                PALING DIMINATI
              </div>
              
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-secondary-50 text-secondary-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">SMP Pondok Putri</h3>
                <p className="text-slate-500 text-sm mb-6">Boarding School (Khusus Putri)</p>
                
                <div className="text-left space-y-4 mb-8">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Pendidikan menengah pertama berbasis asrama dengan fokus tahfidz Al-Qur'an dan pengembangan kepribadian Islami.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">Lulusan SD/MI sederajat</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">Boarding school full day</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">Target hafalan 15 Juz</span>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://forms.gle/example-smp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                >
                  Daftar SMP Pondok Putri
                </a>
              </div>
            </div>

            {/* Card SMA Pondok Putri */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-slate-700 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">SMA Pondok Putri</h3>
                <p className="text-slate-500 text-sm mb-6">Boarding School (Khusus Putri)</p>
                
                <div className="text-left space-y-4 mb-8">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Pendidikan menengah atas berbasis asrama dengan penguatan tahfidz Al-Qur'an dan persiapan perguruan tinggi.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">Lulusan SMP/MTs sederajat</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">Boarding school full day</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">Target hafalan 30 Juz</span>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://forms.gle/example-sma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                >
                  Daftar SMA Pondok Putri
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Alur Pendaftaran */}
      <section id="alur-pendaftaran" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Alur Pendaftaran</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ikuti langkah-langkah pendaftaran berikut untuk bergabung dengan keluarga besar Khoiru Ummah
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Langkah 1 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
                <h3 className="font-bold text-lg mb-2">Pendaftaran Online</h3>
                <p className="text-slate-600 text-sm">Isi formulir pendaftaran sesuai jenjang yang dipilih</p>
              </div>
              
              {/* Langkah 2 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
                <h3 className="font-bold text-lg mb-2">Verifikasi Dokumen</h3>
                <p className="text-slate-600 text-sm">Upload dokumen persyaratan yang dibutuhkan</p>
              </div>
              
              {/* Langkah 3 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
                <h3 className="font-bold text-lg mb-2">Tes & Wawancara</h3>
                <p className="text-slate-600 text-sm">Mengikuti tes akademik dan wawancara</p>
              </div>
              
              {/* Langkah 4 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">4</div>
                <h3 className="font-bold text-lg mb-2">Pengumuman</h3>
                <p className="text-slate-600 text-sm">Pengumuman kelulusan dan daftar ulang</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="#pilih-jenjang" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Pertanyaan Umum</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Temukan jawaban atas pertanyaan yang sering diajukan seputar Penerimaan Santri Baru
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none">
                <span className="font-medium text-slate-800">Apa saja persyaratan untuk mendaftar SD Tahfidz?</span>
                <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-200" />
              </button>
              <div className="px-6 pb-4 pt-0 text-slate-600 text-sm">
                <p>Persyaratan pendaftaran SD Tahfidz meliputi:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Usia minimal 6 tahun per 1 Juli 2025</li>
                  <li>Fotokopi akta kelahiran dan KK</li>
                  <li>Pas foto 3x4 (2 lembar)</li>
                  <li>Mengikuti tes kematangan sekolah</li>
                </ul>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none">
                <span className="font-medium text-slate-800">Apakah ada tes masuk untuk jenjang SMP/SMA?</span>
                <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-200" />
              </button>
              <div className="px-6 pb-4 pt-0 text-slate-600 text-sm">
                <p>Ya, untuk jenjang SMP dan SMA Pondok Putri ada beberapa tahap tes yang harus diikuti:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Tes baca Al-Qur'an</li>
                  <li>Tes akademik (Matematika, IPA, IPS, Bahasa Inggris)</li>
                  <li>Wawancara calon santri dan orang tua</li>
                  <li>Observasi psikologis</li>
                </ul>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none">
                <span className="font-medium text-slate-800">Berapa biaya pendaftaran dan uang masuknya?</span>
                <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-200" />
              </button>
              <div className="px-6 pb-4 pt-0 text-slate-600 text-sm">
                <p>Biaya pendaftaran sebesar Rp 250.000 untuk semua jenjang. Untuk biaya masuk dan SPP bervariasi tergantung jenjang:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>SD Tahfidz: Rp 5.000.000 (uang pangkal) + Rp 750.000/bulan</li>
                  <li>SMP Pondok Putri: Rp 7.500.000 (uang pangkal) + Rp 1.200.000/bulan (include asrama)</li>
                  <li>SMA Pondok Putri: Rp 8.500.000 (uang pangkal) + Rp 1.500.000/bulan (include asrama)</li>
                </ul>
                <p className="mt-2">*Tersedia beasiswa untuk calon santri berprestasi dan yatim piatu</p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-slate-600 mb-4">Masih ada pertanyaan lain?</p>
              <a 
                href="/kontak" 
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                <MessageSquare className="w-5 h-5" />
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Mini */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-serif font-bold mb-4">Kontak Admin PSB</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-8">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+62 812-3456-7890 (Ibu Siti)</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>psb@khoiruummah.sch.id</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Khoiru Ummah Islamic School. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PSB;
