"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";

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
            <div className={`w-full px-4 sm:px-6 lg:px-8 flex items-center gap-3 sm:gap-4 pointer-events-auto transition-all duration-300 ${scrolled ? "py-2.5 sm:py-3 bg-timberwolf/90 dark:bg-gunmetal-2/95 backdrop-blur-md shadow-lg" : "py-4 sm:py-5 bg-transparent shadow-none max-w-7xl mx-auto rounded-xl mt-2 sm:mt-4"}`}> 
          <Link href="/" className="flex items-center gap-3">
              <div className={`relative rounded-lg overflow-hidden flex-shrink-0 bg-transparent dark:bg-transparent ring-0 transition-all duration-300 ${scrolled ? "w-12 h-12 sm:w-14 sm:h-14" : "w-16 h-16 sm:w-20 sm:h-20"}`}>
              <Image src="/logo.png" alt="Mostar Madencilik" fill className="object-cover w-full h-full" priority />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(218,175,81,0.15)] dark:from-[rgba(218,175,81,0.2)] to-transparent" aria-hidden="true" />
            </div>
            <span className={`hidden sm:inline-block font-semibold tracking-tight transition-all duration-300 ${scrolled ? "text-sm text-field-drab dark:text-timberwolf" : "text-lg text-gunmetal dark:text-timberwolf"}`}>Mostar Madencilik</span>
          </Link>

          <div className="flex-1"></div>

          <nav className={`hidden md:flex items-center gap-6 font-medium transition-all duration-300 mr-8 ${scrolled ? "text-sm text-field-drab dark:text-timberwolf" : "text-base text-gunmetal dark:text-timberwolf"}`}>
            <a href="#hizmetler" className="hover:text-gold-metallic dark:hover:text-gold-metallic transition-colors">Hizmetler</a>
            <a href="#projeler" className="hover:text-gold-metallic dark:hover:text-gold-metallic transition-colors">Projeler</a>
            <a href="#referanslar" className="hover:text-gold-metallic dark:hover:text-gold-metallic transition-colors">Referanslar</a>
            <button onClick={() => setShowModal(true)} className={`rounded-md bg-gold-metallic dark:bg-gold-metallic text-gunmetal dark:text-gunmetal hover:bg-field-drab dark:hover:bg-field-drab transition-all duration-300 shadow-md font-semibold ${scrolled ? "px-3 py-2 text-sm" : "px-4 py-2.5 text-base"}`}>İletişim</button>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setIsDark((s) => !s)} aria-label="Tema değiştir" className={`hidden sm:inline-flex p-2 rounded-md transition-colors ${scrolled ? "bg-timberwolf/30 dark:bg-gunmetal-2 hover:bg-timberwolf/50 dark:hover:bg-gunmetal text-field-drab dark:text-gold-metallic" : "bg-transparent hover:bg-timberwolf/10 text-gunmetal dark:text-timberwolf"}`}>
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M6 12a6 6 0 0012 0 6 6 0 00-12 0z" /></svg>
              )}
            </button>

            <button onClick={() => setOpen(true)} aria-label="Açılır menü" className={`p-2 rounded-md md:hidden transition-colors ${scrolled ? "bg-timberwolf/30 hover:bg-timberwolf/50 dark:bg-gunmetal-2 dark:hover:bg-gunmetal" : "bg-transparent hover:bg-timberwolf/10"}`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${scrolled ? "text-field-drab dark:text-timberwolf" : "text-gunmetal dark:text-timberwolf"}`}>
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          </div>
          </header>
        </motion.div>
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex">
            <motion.div initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ type: 'tween' }}>
              <div className="w-72 sm:w-80 bg-timberwolf dark:bg-gunmetal-2 p-5 sm:p-6 shadow-xl border-r border-field-drab dark:border-[rgba(215,210,204,0.15)]">
                <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-md overflow-hidden bg-timberwolf dark:bg-gunmetal ring-1 ring-field-drab dark:ring-[rgba(218,175,81,0.2)]">
                  <Image src="/logo.png" alt="Mostar" fill className="object-cover w-full h-full" />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(218,175,81,0.15)] dark:from-[rgba(218,175,81,0.2)] to-transparent" aria-hidden="true" />
                </div>
                <div className="text-sm font-semibold text-field-drab dark:text-timberwolf">Mostar</div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Kapat" className="p-2 rounded-md hover:bg-timberwolf/30 dark:hover:bg-gunmetal transition-colors text-field-drab dark:text-timberwolf">✕</button>
            </div>

              <nav className="flex flex-col gap-4 text-field-drab dark:text-timberwolf">
              <a onClick={() => setOpen(false)} href="#hizmetler" className="hover:text-gold-metallic dark:hover:text-gold-metallic transition-colors">Hizmetler</a>
              <a onClick={() => setOpen(false)} href="#projeler" className="hover:text-gold-metallic dark:hover:text-gold-metallic transition-colors">Projeler</a>
              <a onClick={() => setOpen(false)} href="#referanslar" className="hover:text-gold-metallic dark:hover:text-gold-metallic transition-colors">Referanslar</a>
              <button onClick={() => { setShowModal(true); setOpen(false); }} className="mt-2 rounded-md bg-gold-metallic dark:bg-gold-metallic text-gunmetal dark:text-gunmetal px-3 py-2 hover:bg-field-drab dark:hover:bg-field-drab transition-colors shadow-md font-semibold">İletişim</button>
            </nav>
              </div>
            </motion.div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                aria-hidden="true"
              >
                <div onClick={() => setOpen(false)} className="w-full h-full bg-black/60" />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <ContactModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
