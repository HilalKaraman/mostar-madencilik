"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactCard() {
  const ref = useRef<HTMLDivElement | null>(null);
  // Parallax effect based on page scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1200], [0, -40]);

  return (
    <div className="pointer-events-auto">
      <motion.div style={{ y }} initial={{ y: 0 }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
        <motion.div whileHover={{ scale: 1.04, y: -8, rotate: -3 }} transition={{ type: "spring", stiffness: 220, damping: 18 }}>
          <div ref={ref} className="w-32 sm:w-48 md:w-64 lg:w-80 rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/40">
            <Image
              src="/kart.jpg"
              alt="Mostar - saha proje kartı"
              width={1200}
              height={780}
              sizes="(min-width:1280px) 288px, (min-width:1024px) 240px, (min-width:768px) 200px, 160px"
              className="object-cover w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
