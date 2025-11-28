import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Hubungi Kami</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Punya pertanyaan seputar pendaftaran atau ingin berkunjung? Tim kami siap membantu Anda. Silakan isi formulir atau hubungi kontak di bawah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info Side */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Alamat Sekolah</h4>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                      Jl. Pendidikan Islam No. 99, Kelurahan Sejuk, <br />
                      Kecamatan Harapan, Kota Khoiru Ummah Semarang, 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Telepon / WhatsApp</h4>
                    <p className="text-slate-600 text-sm mt-1">Admin SD: 0812-3456-7890</p>
                    <p className="text-slate-600 text-sm">Admin Pondok: 0812-9876-5432</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600 text-sm mt-1">info@albayan.sch.id</p>
                    <p className="text-slate-600 text-sm">psb@albayan.sch.id</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Jam Operasional Kantor</h4>
                    <p className="text-slate-600 text-sm mt-1">Senin - Jumat: 07.30 - 15.30 WIB</p>
                    <p className="text-slate-600 text-sm">Sabtu: 08.00 - 12.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-slate-200 rounded-2xl overflow-hidden relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.08660321553!2d106.789139!3d-6.2293867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1647833000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="School Map"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <Card className="shadow-lg border-t-4 border-t-primary-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Nama Lengkap</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none" placeholder="Bpk/Ibu..." />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">No. WhatsApp</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none" placeholder="08..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none" placeholder="email@contoh.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">Perihal</label>
                  <select id="subject" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none bg-white">
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
                  <textarea id="message" rows={5} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none" placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."></textarea>
                </div>

                <Button className="w-full py-6 text-lg font-semibold bg-primary-600 hover:bg-primary-700">
                  <Send className="w-5 h-5 mr-2" /> Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Contact;