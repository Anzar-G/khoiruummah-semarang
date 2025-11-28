import React, { useState } from 'react';
import Hero from './components/Home/Hero';
import Stats from './components/Home/Stats';
import VisionMission from './components/Home/VisionMission';
import ProfileHistory from './components/Home/ProfileHistory';
import Features from './components/Home/Features';
import KeyAdvantages from './components/Home/KeyAdvantages';
import ProgramUnggulan from './components/Home/ProgramUnggulan';
import MetodePembelajaran from './components/Home/MetodePembelajaran';
import JadwalHarian from './components/Home/JadwalHarian';
import FasilitasLingkungan from './components/Home/FasilitasLingkungan';
import PrestasiGallery from './components/Home/PrestasiGallery';
import NewsArticles from './components/Home/NewsArticles';
import FAQSection from './components/Home/FAQSection';
import FinalCTA from './components/Home/FinalCTA';
import Activities3D from './components/Home/Activities3D';
import Testimonials from './components/Home/Testimonials';
import AllTestimonials from './components/Testimonials/AllTestimonials';
import Overview from './components/About/Overview';
import Curriculum from './components/Education/Curriculum';
import Gallery from './components/Gallery/Gallery';
import NewsPage from './components/News/NewsPage';
import Extracurricular from './components/Activities/Extracurricular';
import Contact from './components/Contact/Contact';
import PSB from './components/Admission/PSB';
import Footer from './components/Layout/Footer';
import { Sidebar, SidebarBody, SidebarLink } from './components/ui/sidebar';
import {
  LayoutDashboard,
  GraduationCap,
  School,
  BookOpen,
  Image as ImageIcon,
  Trophy,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { cn } from './lib/utils';
import { motion } from 'framer-motion';

type PageState =
  | 'home'
  | 'about'
  | 'curriculum'
  | 'gallery'
  | 'extracurricular'
  | 'news'
  | 'testimonials'
  | 'contact'
  | 'psb';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState<PageState>('home');
  
  const links = [
    {
      id: 'home',
      label: "Beranda",
      href: "#",
      icon: (
        <LayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      id: 'testimonials',
      label: 'Testimoni',
      href: '#',
      icon: (
        <MessageCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      id: 'about',
      label: "Tentang Sekolah",
      href: "#",
      icon: (
        <School className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      id: 'curriculum',
      label: "Kurikulum",
      href: "#",
      icon: (
        <BookOpen className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      id: 'gallery',
      label: "Galeri",
      href: "#",
      icon: (
        <ImageIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      id: 'news',
      label: "Berita",
      href: "#",
      icon: (
        <BookOpen className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      id: 'extracurricular',
      label: "Ekstrakurikuler",
      href: "#",
      icon: (
        <Trophy className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      id: 'contact',
      label: "Kontak",
      href: "#",
      icon: (
        <Phone className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const handlePageChange = (page: PageState) => {
    setActivePage(page);
    // Reset scroll to top
    const scrollContainer = document.getElementById('main-scroll-container');
    if (scrollContainer) scrollContainer.scrollTop = 0;
    // Close sidebar on mobile if open
    setOpen(false);
  };

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-slate-50 dark:bg-neutral-800 w-full flex-1 max-w-full mx-auto border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" 
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink 
                  key={idx} 
                  link={{
                    label: link.label,
                    href: link.href,
                    icon: link.icon
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(link.id as PageState);
                  }}
                  className={activePage === link.id ? "bg-slate-200/80" : ""}
                />
              ))}
            </div>
          </div>
          <div>
             <SidebarLink
              link={{
                label: "Pendaftaran (PSB)",
                href: "#psb",
                icon: (
                  <div className="h-7 w-7 flex-shrink-0 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    PSB
                  </div>
                ),
              }}
              onClick={(e) => {
                e.preventDefault();
                handlePageChange('psb');
              }}
              className={activePage === 'psb' ? "bg-slate-200/80" : ""}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      
      {/* Content Wrapper */}
      <div className="flex flex-1 flex-col h-full relative overflow-hidden bg-slate-50">
        
        {/* Scrollable Container */}
        <div 
          id="main-scroll-container"
          className="flex-1 overflow-y-auto overflow-x-hidden w-full"
        >
          {/* Inner Layout for Sticky Footer */}
          <div className="min-h-full flex flex-col pt-14 md:pt-0"> {/* pt-14 provides space for mobile sidebar header */}
            
            <main className="flex-1 w-full">
              {activePage === 'home' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* 1. Hero utama */}
                  <Hero />

                  {/* 2. Sekilas angka & pencapaian */}
                  <Stats />

                  {/* 3–4. Visi Misi + Profil (sementara masih memakai ProfileHistory sebagai profil singkat) */}
                  <VisionMission />
                  <ProfileHistory />

                  {/* 5. Kenapa Memilih + Keunggulan utama */}
                  <Features />
                  <KeyAdvantages />

                  {/* 6–7. Program unggulan & fasilitas ringkas */}
                  <ProgramUnggulan onViewPrograms={() => handlePageChange('curriculum')} />
                  <FasilitasLingkungan onViewFacilities={() => handlePageChange('gallery')} />

                  {/* 8–9. Galeri/Prestasi & berita terbaru */}
                  <PrestasiGallery onViewGallery={() => handlePageChange('gallery')} />
                  <NewsArticles onViewAllNews={() => handlePageChange('news')} />

                  {/* 10. Testimoni singkat */}
                  <Testimonials onViewAllTestimonials={() => handlePageChange('testimonials')} />

                  {/* 11–12. FAQ ringkas & CTA PSB */}
                  <FAQSection />
                  <FinalCTA onOpenPSB={() => handlePageChange('psb')} />
                </motion.div>
              )}

              {activePage === 'about' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Overview />
                </motion.div>
              )}

              {activePage === 'curriculum' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Curriculum />
                </motion.div>
              )}

              {activePage === 'gallery' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Gallery />
                </motion.div>
              )}

              {activePage === 'news' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <NewsPage />
                </motion.div>
              )}

              {activePage === 'testimonials' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AllTestimonials />
                </motion.div>
              )}

              {activePage === 'extracurricular' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Extracurricular />
                </motion.div>
              )}

              {activePage === 'contact' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Contact />
                </motion.div>
              )}

              {activePage === 'psb' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <PSB />
                </motion.div>
              )}
            </main>

            <Footer />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="p-1 bg-primary-600 rounded-md flex-shrink-0">
          <GraduationCap className="text-white h-5 w-5" />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-serif font-bold text-lg text-primary-800 whitespace-pre"
      >
        Khoiru Ummah Semarang
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="p-1 bg-primary-600 rounded-md flex-shrink-0">
          <GraduationCap className="text-white h-5 w-5" />
      </div>
    </a>
  );
};

export default App;