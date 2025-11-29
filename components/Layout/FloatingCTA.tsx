import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingCTAProps {
  onRegisterClick?: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onRegisterClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6281234567890', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Floating WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        <MessageCircle size={24} fill="white" />
      </motion.button>

      {/* Sticky PSB CTA */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRegisterClick}
            className="bg-secondary-500 hover:bg-secondary-600 text-white px-5 py-3 rounded-full shadow-xl font-bold flex items-center gap-2 text-sm md:text-base"
          >
            <span>Daftar PSB 2025</span>
            <ArrowRight size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingCTA;
