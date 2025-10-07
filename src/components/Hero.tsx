"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleOnHover } from "../lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#06121a]/60 to-[#071722]/60" />
      <div className="absolute inset-0">
        <Image src="/kamyon.webp" alt="Mostar Madencilik" fill className="object-cover w-full h-full" priority aria-hidden="true" />
      </div>
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 md:pt-32 lg:pt-36">
        <motion.div variants={staggerContainer(0.08)} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Mostar Madencilik — Güçlü, Güvenilir Hafriyat ve Madencilik Hizmetleri
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-lg text-90 max-w-lg">
              Yüksek kapasiteli taşıma, kazı ve proje yönetimi ile saha çözümleri. Profesyonel ekip, modern ekipman ve güvenlik odaklı çalışma prensipleriyle projelerinize değer katıyoruz.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex gap-4">
              <motion.a {...scaleOnHover} href="#iletisim" className="rounded-md bg-corn text-tuna px-5 py-3 font-medium">İletişime Geç</motion.a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-end">
            <div className="relative w-full max-w-xl">
              {/* Text-only logo using mask; transparent background with gradient fill and glow */}
              <span aria-label="Mostar Madencilik" className="logo-text-mask logo-gradient logo-drop mx-auto block w-[520px] h-[180px] sm:w-[600px] sm:h-[200px]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
