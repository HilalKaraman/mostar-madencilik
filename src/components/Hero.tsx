"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleOnHover } from "../lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-timberwolf/80 to-timberwolf/70 dark:from-gunmetal/85 dark:to-gunmetal/80" />
      <div className="absolute inset-0">
        <Image 
          src="/mostarHero2.jpg" 
          alt="Mostar Madencilik" 
          fill 
          sizes="100vw" 
          className="object-cover w-full h-full" 
          priority 
          aria-hidden="true" 
        />
      </div>
      <div className="absolute inset-0 bg-timberwolf/40 dark:bg-gunmetal/50" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 md:pt-32 lg:pt-36">
        <motion.div variants={staggerContainer(0.08)} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-field-drab dark:text-timberwolf">
              Mostar Madencilik — Güçlü, Güvenilir Hafriyat ve Madencilik Hizmetleri
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-lg text-gunmetal dark:text-timberwolf max-w-lg">
              Yüksek kapasiteli taşıma, kazı ve proje yönetimi ile saha çözümleri. Profesyonel ekip, modern ekipman ve güvenlik odaklı çalışma prensipleriyle projelerinize değer katıyoruz.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex gap-4">
              <motion.a {...scaleOnHover} href="#iletisim" className="rounded-md bg-gold-metallic dark:bg-gold-metallic text-gunmetal px-5 py-3 font-medium hover:bg-field-drab dark:hover:bg-field-drab transition-colors shadow-md">İletişime Geç</motion.a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-end">
            <div className="relative w-full max-w-xl">
              {/* Text-only logo using mask; transparent background with gradient fill and glow */}
              <span aria-label="Mostar Madencilik" className="logo-text-mask logo-gradient logo-drop mx-auto block w-[220px] h-[76px] sm:w-[320px] sm:h-[110px] md:w-[420px] md:h-[145px] lg:w-[600px] lg:h-[200px]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
