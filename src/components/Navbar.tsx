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
                <motion.a variants={navItem} href="#hizmetler" className={`font-bold hover:text-gold-metallic transition-colors ${scrolled ? "text-white" : "text-gray-300"}`}>Hizmetler</motion.a>
                <motion.a variants={navItem} href="#projeler" className={`font-bold hover:text-gold-metallic transition-colors ${scrolled ? "text-white" : "text-gray-300"}`}>Projeler</motion.a>
                <motion.a variants={navItem} href="#referanslar" className={`font-bold hover:text-gold-metallic transition-colors ${scrolled ? "text-white" : "text-gray-300"}`}>Referanslar</motion.a>
                <motion.div variants={navItem}>
                  <motion.a href="#iletisim" className={`rounded-md bg-gold-metallic dark:bg-gold-metallic text-gunmetal dark:text-gunmetal hover:bg-field-drab dark:hover:bg-field-drab transition-all duration-300 shadow-md font-semibold ${scrolled ? "px-3 py-2 text-sm" : "px-4 py-2.5 text-base"}`}>İletişim</motion.a>
                </motion.div>
              </motion.nav>

              <div className="flex items-center gap-3">
                <button onClick={() => setOpen(true)} aria-label="Açılır menü" className={`p-2 rounded-md md:hidden transition-colors ${scrolled ? "bg-white/10 hover:bg-white/20" : "bg-transparent hover:bg-timberwolf/10"}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${scrolled ? "text-white" : "text-gunmetal dark:text-timberwolf"}`}>
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

                <nav className="flex flex-col gap-4">
                  <a onClick={() => setOpen(false)} href="#hizmetler" className="text-gray-300 hover:text-gold-metallic dark:hover:text-gold-metallic transition-colors font-bold">Hizmetler</a>
                  <a onClick={() => setOpen(false)} href="#projeler" className="text-gray-300 hover:text-gold-metallic dark:hover:text-gold-metallic transition-colors font-bold">Projeler</a>
                  <a onClick={() => setOpen(false)} href="#referanslar" className="text-gray-300 hover:text-gold-metallic dark:hover:text-gold-metallic transition-colors font-bold">Referanslar</a>
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
