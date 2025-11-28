import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white mb-4">
              <div className="p-1.5 bg-primary-600 rounded-md">
                <GraduationCap size={24} />
              </div>
              <span className="font-serif font-bold text-xl">Al-Bayan</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Mendidik generasi Qur'ani yang cerdas, berakhlak mulia, dan siap berkontribusi untuk umat dan bangsa.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-primary-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Jenjang */}
          <div>
            <h4 className="text-white font-bold mb-6">Jenjang Pendidikan</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">SD Tahfidz (Fullday)</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">SMP Boarding School Putri</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">SMA Boarding School Putri</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Program Takhassus</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#psb" className="hover:text-primary-400 transition-colors">Pendaftaran (PSB)</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Kalender Akademik</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Prestasi Santri</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Lowongan Karir</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <span>Jl. Pendidikan Islam No. 99, Kecamatan Sejuk, Kota Harapan, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 flex-shrink-0" />
                <span>(021) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 flex-shrink-0" />
                <span>info@albayan.sch.id</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Al-Bayan Tahfidz & Boarding School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;