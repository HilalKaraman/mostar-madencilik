"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  const text = "Güçlü, Güvenilir Hafriyat Taşımacılık ve Madencilik Hizmetleri";

  return (
    <section className="relative min-h-[80vh] md:h-screen flex items-end justify-end text-right pb-20">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image 
            src="/mostarHero2.jpg" 
            alt="Mostar Madencilik" 
            fill 
            sizes="(max-width: 640px) 200px, (max-width: 768px) 489px, (max-width: 1024px) 697px, (max-width: 1280px) 1008px, (max-width: 1400px) 1161px, 1400px" 
            className="object-cover object-left w-full h-full" 
            priority 
            aria-hidden="true"
            quality={90}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.7))]"></div>

      <div className="relative z-10 max-w-4xl w-full px-6">
        <motion.h1
          className="font-bold text-4xl md:text-2xl lg:text-6xl tracking-tighter leading-tight text-gray-300 drop-shadow-lg"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Scroll Down Mouse Icon */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div className="w-6 h-8 rounded-full border-2 border-gray-200 flex justify-center items-start p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-gray-200"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
