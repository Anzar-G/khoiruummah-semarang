import React, { useState } from 'react';
import { Check, HelpCircle, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const Biaya: React.FC = () => {
  const [openSd, setOpenSd] = useState(false);
  const [openSmp, setOpenSmp] = useState(false);
  const [openSma, setOpenSma] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Biaya Pendidikan</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Investasi terbaik untuk masa depan buah hati Anda. Transparan, terjangkau, dan penuh keberkahan.
          </p>
        </div>

        {/* Pricing Tables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* SD Tahfidz */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col hover:border-primary-500 transition-colors duration-300">
            <div className="p-6 bg-primary-50 border-b border-primary-100">
              <h3 className="text-xl font-bold text-primary-800">SD Tahfidz</h3>
              <p className="text-sm text-primary-600 mt-1">Fullday School (Putra/Putri)</p>
            </div>
            <div className="p-6 flex-1">
              <div className="mb-6">
                <p className="text-sm text-slate-500 mb-1">Uang Pangkal (Sekali)</p>
                <p className="text-3xl font-bold text-slate-900">Rp 8.500.000</p>
              </div>
              <div className="mb-6">
                <p className="text-sm text-slate-500 mb-1">SPP Bulanan</p>
                <p className="text-2xl font-bold text-slate-900">Rp 650.000</p>
              </div>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setOpenSd((v) => !v)}
                  className="w-full flex items-center justify-between text-sm font-semibold text-slate-900 border-b pb-2"
                >
                  <span>Termasuk dalam paket</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${openSd ? 'rotate-180' : ''}`}
                  />
                </button>
                {openSd && (
                  <ul className="space-y-2 text-sm text-slate-600 pt-1">
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Seragam 4 Stel</li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Buku Paket & Modul Tahfidz</li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Makan Siang & Snack</li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Kegiatan Ekstrakurikuler</li>
                  </ul>
                )}
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <button className="w-full py-3 rounded-xl bg-white border-2 border-primary-600 text-primary-700 font-bold hover:bg-primary-50 transition-colors">
                Download Rincian PDF
              </button>
            </div>
          </div>

          {/* SMP Pondok Putri */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col hover:border-secondary-500 transition-colors duration-300">
            <div className="p-6 bg-secondary-50 border-b border-secondary-100">
              <h3 className="text-xl font-bold text-secondary-800">SMP Pondok Putri</h3>
              <p className="text-sm text-secondary-600 mt-1">Boarding School (Khusus Putri)</p>
            </div>
            <div className="p-6 flex-1">
              <div className="mb-6">
                <p className="text-sm text-slate-500 mb-1">Uang Pangkal (Sekali)</p>
                <p className="text-3xl font-bold text-slate-900">Rp 11.500.000</p>
              </div>
              <div className="mb-6">
                <p className="text-sm text-slate-500 mb-1">SPP + Asrama</p>
                <p className="text-2xl font-bold text-slate-900">Rp 1.450.000</p>
              </div>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setOpenSmp((v) => !v)}
                  className="w-full flex items-center justify-between text-sm font-semibold text-slate-900 border-b pb-2"
                >
                  <span>Termasuk dalam paket</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${openSmp ? 'rotate-180' : ''}`}
                  />
                </button>
                {openSmp && (
                  <ul className="space-y-2 text-sm text-slate-600 pt-1">
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Seragam sekolah & pondok</li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Konsumsi 3x sehari</li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Kegiatan kepesantrenan harian</li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Program tahfidz intensif</li>
                  </ul>
                )}
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <button className="w-full py-3 rounded-xl bg-white border-2 border-secondary-600 text-secondary-700 font-bold hover:bg-secondary-50 transition-colors">
                Download Rincian PDF
              </button>
            </div>
          </div>

          {/* SMA Pondok Putri */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col hover:border-slate-700 transition-colors duration-300">
            <div className="p-6 bg-slate-900/90 border-b border-slate-800 text-white">
              <h3 className="text-xl font-bold">SMA Pondok Putri</h3>
              <p className="text-sm text-slate-100 mt-1">Boarding School (Khusus Putri)</p>
            </div>
            <div className="p-6 flex-1">
              <div className="mb-6">
                <p className="text-sm text-slate-500 mb-1">Uang Pangkal (Sekali)</p>
                <p className="text-3xl font-bold text-slate-900">Rp 12.500.000</p>
              </div>
              <div className="mb-6">
                <p className="text-sm text-slate-500 mb-1">SPP + Asrama</p>
                <p className="text-2xl font-bold text-slate-900">Rp 1.650.000</p>
              </div>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setOpenSma((v) => !v)}
                  className="w-full flex items-center justify-between text-sm font-semibold text-slate-900 border-b pb-2"
                >
                  <span>Termasuk dalam paket</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-300 transition-transform ${openSma ? 'rotate-180' : ''}`}
                  />
                </button>
                {openSma && (
                  <ul className="space-y-2 text-sm text-slate-600 pt-1">
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Program tahfidz 30 Juz</li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Bimbingan UTBK/PMB PTN</li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Konseling karir & minat bakat</li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Program kepemimpinan santri</li>
                  </ul>
                )}
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <button className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-black transition-colors">
                Download Rincian PDF
              </button>
            </div>
          </div>
        </div>

        {/* Scholarship & FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Scholarship Info */}
          <div className="bg-primary-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Program Beasiswa</h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3">
                <div className="p-1 bg-white/20 rounded-full mt-1"><Check size={14} /></div>
                <div>
                  <p className="font-bold">Beasiswa Tahfidz</p>
                  <p className="text-sm text-primary-200">Potongan SPP 50% - 100% bagi yang memiliki hafalan mutqin minimal 5 Juz.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-white/20 rounded-full mt-1"><Check size={14} /></div>
                <div>
                  <p className="font-bold">Beasiswa Yatim/Dhuafa</p>
                  <p className="text-sm text-primary-200">Diperuntukkan bagi calon santri yatim/piatu atau dari keluarga prasejahtera.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-white/20 rounded-full mt-1"><Check size={14} /></div>
                <div>
                  <p className="font-bold">Beasiswa Prestasi Akademik</p>
                  <p className="text-sm text-primary-200">Bagi calon santri dengan nilai raport atau prestasi lomba akademik/non-akademik.</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 text-sm text-primary-200 relative z-10">
              *Kuota beasiswa terbatas dan melalui proses seleksi administrasi serta wawancara.
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="text-primary-600" /> Pertanyaan Umum Seputar Biaya
            </h3>
            <Accordion className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Apakah biaya bisa dicicil?</AccordionTrigger>
                <AccordionContent>
                  Ya, Uang Pangkal dapat diangsur sebanyak 3x selama semester pertama. Detail teknis akan dijelaskan saat proses daftar ulang.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Apakah ada biaya tambahan lain selama tahun ajaran?</AccordionTrigger>
                <AccordionContent>
                  Ada beberapa biaya insidental seperti kegiatan outing class, wisuda tahfidz, atau study tour. Seluruhnya akan diinformasikan jauh hari kepada orang tua.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Bagaimana mekanisme pengajuan beasiswa?</AccordionTrigger>
                <AccordionContent>
                  Orang tua dapat mengisi formulir pengajuan beasiswa saat pendaftaran, melampirkan dokumen pendukung (surat keterangan tidak mampu, sertifikat hafalan, atau piagam prestasi), dan mengikuti wawancara.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biaya;
