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

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <header className="fixed inset-x-0 top-4 z-50 w-full px-4 pointer-events-none">
            <div className="max-w-7xl mx-auto bg-tuna-trans backdrop-blur-md rounded-xl border border-tuna-6 py-3 px-4 flex items-center justify-between gap-4 shadow-sm pointer-events-auto">
          <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card ring-1 ring-white/10">
              <Image src="/logo.png" alt="Mostar Madencilik" fill className="object-cover w-full h-full" priority />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(236,178,7,0.2)] to-transparent" aria-hidden="true" />
            </div>
            <span className="hidden sm:inline-block text-sm font-semibold tracking-tight text-100">Mostar Madencilik</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-100">
            <a href="#hizmetler" className="hover-text-corn transition-colors">Hizmetler</a>
            <a href="#projeler" className="hover-text-corn transition-colors">Projeler</a>
            <a href="#referanslar" className="hover-text-corn transition-colors">Referanslar</a>
            <button onClick={() => setShowModal(true)} className="rounded-md bg-corn text-tuna px-3 py-2 hover:brightness-95">İletişim</button>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setIsDark((s) => !s)} aria-label="Tema değiştir" className="hidden sm:inline-flex p-2 rounded-md bg-card">
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M6 12a6 6 0 0012 0 6 6 0 00-12 0z" /></svg>
              )}
            </button>

            <button onClick={() => setOpen(true)} aria-label="Açılır menü" className="p-2 rounded-md bg-card md:hidden">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-100">
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
              <div className="w-64 bg-pampas-90 dark:dark-bg-900 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-md overflow-hidden bg-card ring-1 ring-white/10">
                  <Image src="/logo.png" alt="Mostar" fill className="object-cover w-full h-full" />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(236,178,7,0.2)] to-transparent" aria-hidden="true" />
                </div>
                <div className="text-sm font-semibold">Mostar</div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Kapat" className="p-2 rounded-md hover:bg-card">✕</button>
            </div>

              <nav className="flex flex-col gap-4">
              <a onClick={() => setOpen(false)} href="#hizmetler" className="hover-text-corn">Hizmetler</a>
              <a onClick={() => setOpen(false)} href="#projeler" className="hover-text-corn">Projeler</a>
              <a onClick={() => setOpen(false)} href="#referanslar" className="hover-text-corn">Referanslar</a>
              <button onClick={() => { setShowModal(true); setOpen(false); }} className="mt-2 rounded-md bg-corn text-tuna px-3 py-2">İletişim</button>
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
                <div onClick={() => setOpen(false)} className="w-full h-full" />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <ContactModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
