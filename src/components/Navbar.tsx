"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ContactModal from "./ContactModal";

const navContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const navItem: Variants = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // initialize theme from localStorage or prefers-color-scheme
    const saved = localStorage.getItem("theme");
    if (saved) setIsDark(saved === "dark");
    else setIsDark(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <header className="fixed inset-x-0 top-0 z-50 w-full pointer-events-none">
            <div className={`w-full px-4 sm:px-6 lg:px-8 flex items-center gap-3 sm:gap-4 pointer-events-auto transition-all duration-300 ${scrolled ? "py-2.5 sm:py-3 bg-gunmetal/70 dark:bg-gunmetal-2/70 backdrop-blur-md shadow-lg" : "py-4 sm:py-5 bg-transparent shadow-none max-w-7xl mx-auto rounded-xl mt-2 sm:mt-4"}`}> 
              <Link href="/" className="flex items-center gap-3">
                <div className={`relative rounded-lg overflow-hidden flex-shrink-0 bg-transparent dark:bg-transparent ring-0 transition-all duration-300 ${scrolled ? "w-12 h-12 sm:w-14 sm:h-14" : "w-16 h-16 sm:w-20 sm:h-20"}`}>
                  <Image src="/logo.png" alt="Mostar Madencilik" fill className="object-cover w-full h-full" priority />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(218,175,81,0.15)] dark:from-[rgba(218,175,81,0.2)] to-transparent" aria-hidden="true" />
                </div>
                <span className={`hidden sm:inline-block font-bold tracking-normal transition-all duration-300 ${scrolled ? "text-sm text-white" : "text-lg text-gray-300"}`}>Mostar Madencilik</span>
              </Link>

              <div className="flex-1"></div>

              <motion.nav 
                variants={navContainer}
                initial="hidden"
                animate="show"
                className={`hidden md:flex items-center gap-6 font-medium transition-all duration-300 mr-8 ${scrolled ? "text-sm" : "text-base"}`}>
                <motion.a variants={navItem} href="#hakkımızda" className={`font-bold hover:text-gold-metallic transition-colors ${scrolled ? "text-white" : "text-gray-300"}`}>Hakkımızda</motion.a>
                <motion.a variants={navItem} href="#hizmetler" className={`font-bold hover:text-gold-metallic transition-colors ${scrolled ? "text-white" : "text-gray-300"}`}>Hizmetler</motion.a>
                <motion.a variants={navItem} href="#projeler" className={`font-bold hover:text-gold-metallic transition-colors ${scrolled ? "text-white" : "text-gray-300"}`}>Projeler</motion.a>
                <motion.div variants={navItem}>
                  <motion.a href="#iletisim" className={`rounded-md bg-gold-metallic dark:bg-gold-metallic text-gunmetal dark:text-gunmetal hover:bg-field-drab dark:hover:bg-field-drab transition-all duration-300 shadow-md font-semibold ${scrolled ? "px-3 py-2 text-sm" : "px-4 py-2.5 text-base"}`}>İletişim</motion.a>
                </motion.div>
              </motion.nav>

              <div className="flex items-center gap-3">
                <button onClick={() => setOpen(true)} aria-label="Açılır menü" className={`p-2 rounded-md md:hidden transition-colors ${scrolled ? "bg-white/10 hover:bg-white/20" : "bg-transparent hover:bg-timberwolf/10"}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-200">
                    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </header>
        </motion.div>
      </AnimatePresence>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              aria-hidden="true"
            />
            
            {/* Full Screen Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              <div className="relative w-full h-full bg-gunmetal/95 dark:bg-gunmetal-2/95 backdrop-blur-md p-8 flex flex-col">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button 
                    onClick={() => setOpen(false)} 
                    aria-label="Kapat" 
                    className="p-3 rounded-full hover:bg-white/10 transition-colors text-white"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Logo */}
                <div className="flex flex-col items-center mb-12">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden mb-4">
                    <Image src="/logo.png" alt="Mostar Madencilik" fill className="object-cover" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Mostar Madencilik</h2>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col items-center justify-center gap-8">
                  <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => setOpen(false)} 
                    href="#hakkımızda" 
                    className="text-3xl text-gray-200 hover:text-gold-metallic transition-colors font-bold"
                  >
                    Hakkımızda
                  </motion.a>
                  <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => setOpen(false)} 
                    href="#hizmetler" 
                    className="text-3xl text-gray-200 hover:text-gold-metallic transition-colors font-bold"
                  >
                    Hizmetler
                  </motion.a>
                  <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => setOpen(false)} 
                    href="#projeler" 
                    className="text-3xl text-gray-200 hover:text-gold-metallic transition-colors font-bold"
                  >
                    Projeler
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setOpen(false)}
                    href="#iletisim"
                    className="mt-8 px-8 py-4 rounded-lg bg-gold-metallic text-gunmetal text-xl font-bold hover:bg-field-drab transition-colors shadow-lg"
                  >
                    İletişim
                  </motion.a>
                </nav>

                {/* Contact Info */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-gray-400 text-sm"
                >
                  <p>+90 (535) 357 25 49</p>
                  <p className="mt-1">info@mostarmadencilik.com.tr</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
