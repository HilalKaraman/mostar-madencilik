"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#06121a]/60 to-[#071722]/60" />
      <div className="absolute inset-0">
        <Image src="/kamyon.webp" alt="" fill className="object-cover w-full h-full" priority aria-hidden="true" />
      </div>
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 md:pt-32 lg:pt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Mostar Madencilik — Güçlü, Güvenilir Hafriyat ve Madencilik Hizmetleri</h1>
            </motion.div>

            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }}>
              <p className="mt-4 text-lg text-90 max-w-lg">Yüksek kapasiteli taşıma, kazı ve proje yönetimi ile saha çözümleri. Profesyonel ekip, modern ekipman ve güvenlik odaklı çalışma prensipleriyle projelerinize değer katıyoruz.</p>
            </motion.div>

            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15, duration: 0.9 }}>
              <div className="mt-6 flex gap-4">
                <a href="#iletisim" className="rounded-md bg-corn text-tuna px-5 py-3 font-medium">İletişime Geç</a>
                <a href="#hizmetler" className="rounded-md border border-tuna-6 px-5 py-3">Hizmetlerimizi Gör</a>
              </div>
            </motion.div>

            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25, duration: 0.9 }}>
              <div className="mt-8 text-sm text-60">
                <strong>Hizmet Bölgeleri:</strong> Türkiye geneli — Şantiye lojistiği, hafriyat planlama ve saha yönetimi.
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-xl">
              <Image src="/logo.jpg" alt="Mostar" width={600} height={360} sizes="(min-width:1280px) 480px, (min-width:1024px) 384px, (min-width:768px) 320px, 280px" className="object-cover w-full h-auto" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
