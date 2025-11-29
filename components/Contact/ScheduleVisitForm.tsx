import React, { useState } from 'react';
import { CalendarClock, Users, User, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

const ADMIN_WHATSAPP = '6281234567890'; // ganti dengan nomor admin sebenarnya bila diperlukan

interface ScheduleVisitFormProps {
  embedded?: boolean;
}

const ScheduleVisitForm: React.FC<ScheduleVisitFormProps> = ({ embedded = false }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [purpose, setPurpose] = useState('Kunjungan Umum');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fallbackName = name.trim() || 'Orang Tua / Wali Calon Santri';
    const fallbackWa = whatsapp.trim() || '-';
    const fallbackDate = date.trim() || 'Belum ditentukan';
    const fallbackTime = time.trim() || 'Belum ditentukan';
    const fallbackPeople = peopleCount.trim() || '1-2 orang';
    const fallbackPurpose = purpose.trim() || 'Kunjungan Umum';

    const message = `Assalamu'alaikum, Admin Khoiru Ummah.%0A%0ASaya *${fallbackName}* ingin menjadwalkan kunjungan ke sekolah.%0A%0A*Nomor WhatsApp:* ${fallbackWa}%0A*Tanggal:* ${fallbackDate}%0A*Waktu:* ${fallbackTime}%0A*Jumlah Pengunjung:* ${fallbackPeople}%0A*Tujuan Kunjungan:* ${fallbackPurpose}%0A%0AMohon konfirmasi jadwal yang tersedia. Jazakumullahu khairan.`;

    const url = `https://wa.me/${ADMIN_WHATSAPP}?text=${message}`;
    window.open(url, '_blank');
  };

  const formContent = (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="visit-name" className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <User className="w-4 h-4 text-slate-500" />
          Nama Lengkap
        </label>
        <input
          id="visit-name"
          type="text"
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
          placeholder="Masukkan nama lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="visit-wa" className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <Users className="w-4 h-4 text-slate-500" />
          Nomor WhatsApp
        </label>
        <input
          id="visit-wa"
          type="tel"
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
          placeholder="Contoh: 08123456789"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="visit-date" className="text-sm font-medium text-slate-700 flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-slate-500" />
            Tanggal
          </label>
          <input
            id="visit-date"
            type="date"
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="visit-time" className="text-sm font-medium text-slate-700 flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-slate-500" />
            Waktu
          </label>
          <input
            id="visit-time"
            type="time"
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="visit-people" className="text-sm font-medium text-slate-700 flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-500" />
            Jumlah Pengunjung
          </label>
          <input
            id="visit-people"
            type="number"
            min={1}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
            placeholder="Misal: 2"
            value={peopleCount}
            onChange={(e) => setPeopleCount(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="visit-purpose" className="text-sm font-medium text-slate-700">Tujuan</label>
          <select
            id="visit-purpose"
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm bg-white"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          >
            <option value="Kunjungan Umum">Kunjungan Umum</option>
            <option value="Survey Sekolah">Survey Sekolah</option>
            <option value="Konsultasi Pendaftaran">Konsultasi Pendaftaran</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
      </div>

          <Button
            type="submit"
            className="w-full py-5 text-sm md:text-base font-semibold bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Kirim Jadwal via WhatsApp
          </Button>
        </form>
  );

  if (embedded) {
    return formContent;
  }

  return (
    <Card className="shadow-lg border border-emerald-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
          <CalendarClock className="w-5 h-5 text-emerald-600" />
          Jadwalkan Kunjungan
        </CardTitle>
        <CardDescription>
          Isi data singkat berikut, lalu sistem akan mengarahkan Anda ke WhatsApp admin dengan pesan yang sudah terformat.
        </CardDescription>
      </CardHeader>
      <CardContent>{formContent}</CardContent>
    </Card>
  );
};

export default ScheduleVisitForm;
