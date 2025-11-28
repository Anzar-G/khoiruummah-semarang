import React from 'react';
import { ArrowRight, ClipboardList } from 'lucide-react';

interface FinalCTAProps {
  onOpenPSB?: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenPSB }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.6fr,1.2fr] items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-2 text-primary-100">
              Penutup
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
              Siap Berkolaborasi Mendidik Amanah Ananda?
            </h2>
            <p className="text-sm sm:text-base text-primary-50 max-w-xl">
              Khoiru Ummah membuka kesempatan bagi orang tua yang ingin menghadirkan lingkungan belajar
              yang Qur\'ani, hangat, dan terarah bagi putra-putrinya. Mari mulai langkah pertama melalui
              pendaftaran PSB atau hubungi kami untuk konsultasi.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-primary-300/40 rounded-2xl p-5 sm:p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                <ClipboardList className="h-5 w-5 text-primary-100" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">Langkah berikutnya</h3>
                <p className="text-xs sm:text-sm text-primary-100">
                  Pilih jalur yang paling sesuai dengan kebutuhan keluarga Anda.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={onOpenPSB}
                className="w-full inline-flex items-center justify-between rounded-xl bg-white text-primary-700 px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-primary-50 transition-colors"
              >
                <span>Daftar PSB Khoiru Ummah</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#"
                className="block text-xs sm:text-sm text-primary-100 hover:text-white underline underline-offset-2"
              >
                Ingin bertanya dulu? Kunjungi halaman Kontak atau informasi lengkap PSB.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
