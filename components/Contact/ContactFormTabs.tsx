import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import ScheduleVisitForm from './ScheduleVisitForm';

const ContactFormTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'message' | 'visit'>('message');

  return (
    <Card className="shadow-lg border-t-4 border-t-primary-500">
      <CardContent className="p-0">
        {/* Tabs Header */}
        <div className="flex gap-2 px-6 pt-4 pb-2 bg-slate-100 rounded-t-lg">
          <button
            type="button"
            onClick={() => setActiveTab('message')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-colors ${
              activeTab === 'message'
                ? 'bg-white border-emerald-500 text-emerald-700'
                : 'bg-transparent border-transparent text-slate-600 hover:bg-slate-200'
            }`}
          >
            Kirim Pesan
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('visit')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-colors ${
              activeTab === 'visit'
                ? 'bg-white border-emerald-500 text-emerald-700'
                : 'bg-transparent border-transparent text-slate-600 hover:bg-slate-200'
            }`}
          >
            Jadwalkan Kunjungan
          </button>
        </div>

        <div className="p-8 pt-4 space-y-6">
          {activeTab === 'message' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Kirim Pesan</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Nama Lengkap</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      placeholder="Bpk/Ibu..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">No. WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      placeholder="08..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    placeholder="email@contoh.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">Perihal</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none bg-white"
                  >
                    <option value="">-- Pilih Topik --</option>
                    <option value="psb_sd">Info Pendaftaran SD Tahfidz</option>
                    <option value="psb_smp">Info Pendaftaran SMP Pondok</option>
                    <option value="psb_sma">Info Pendaftaran SMA Pondok</option>
                    <option value="visit">Jadwal Kunjungan / Survei</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Pesan</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                  />
                </div>

                <Button className="w-full py-6 text-lg font-semibold bg-primary-600 hover:bg-primary-700">
                  <Send className="w-5 h-5 mr-2" /> Kirim Pesan
                </Button>
              </form>
            </div>
          )}

          {activeTab === 'visit' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Jadwalkan Kunjungan</h3>
              <p className="text-slate-600 text-sm">
                Silakan isi formulir di bawah ini untuk menjadwalkan kunjungan ke sekolah kami. Setelah dikirim,
                Anda akan diarahkan ke WhatsApp admin dengan pesan yang sudah terisi otomatis.
              </p>

              <ScheduleVisitForm embedded />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactFormTabs;
