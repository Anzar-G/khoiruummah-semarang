import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang Sekolah', href: '#tentang' },
    { name: 'Jenjang Pendidikan', href: '#jenjang' },
    { name: 'Kegiatan', href: '#kegiatan' },
    { name: 'Kontak', href: '#footer' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className={`p-2 rounded-lg ${scrolled ? 'bg-primary-600 text-white' : 'bg-white text-primary-700'}`}>
              <GraduationCap size={28} />
            </div>
            <span className={`font-serif font-bold text-2xl ${scrolled ? 'text-primary-800' : 'text-white drop-shadow-md'}`}>
              Al-Bayan
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  scrolled
                    ? 'text-slate-700 hover:text-primary-600'
                    : 'text-white/90 hover:text-white drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#psb"
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${
                scrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-lg'
              }`}
            >
              PSB Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#psb"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 mt-4 rounded-md text-base font-bold bg-primary-600 text-white hover:bg-primary-700"
            >
              Daftar Sekarang (PSB)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;