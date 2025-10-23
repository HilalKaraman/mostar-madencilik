"use client";

import {
  LuArrowRight,
  LuTruck,
  LuHardHat,
  LuShield,
  LuClock,
} from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useEffect } from "react";

// Animated Counter Component
function AnimatedCounter({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export default function Home() {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.mostarmadencilik.com.tr/#hizmetler",
        name: "Mostar Madencilik",
        url: "https://www.mostarmadencilik.com.tr",
        logo: {
          "@type": "ImageObject",
          url: "https://www.mostarmadencilik.com.tr/logo.png",
          width: 512,
          height: 512,
        },
        image: "https://www.mostarmadencilik.com.tr/logo.png",
        description:
          "Muğla ve çevre illerde 15+ yıllık deneyimle profesyonel hafriyat, kazı, nakliye ve madencilik hizmetleri.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Muğla",
          addressRegion: "Muğla",
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.2,
          longitude: 27.5,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+90-535-357-2549",
          contactType: "customer service",
          areaServed: "TR",
          availableLanguage: "Turkish",
        },
        sameAs: [],
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 37.2,
            longitude: 27.5,
          },
          geoRadius: "100000",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.mostarmadencilik.com.tr",
        url: "https://www.mostarmadencilik.com.tr",
        name: "Mostar Madencilik",
        description: "Profesyonel hafriyat ve madencilik hizmetleri",
        publisher: {
          "@id": "https://www.mostarmadencilik.com.tr",
        },
        inLanguage: "tr-TR",
      },
      {
        "@type": "Service",
        serviceType: "Hafriyat ve Kazı Hizmetleri",
        provider: {
          "@id": "https://www.mostarmadencilik.com.tr/#organization",
        },
        areaServed: {
          "@type": "State",
          name: "Muğla",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Hafriyat Hizmetleri",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hafriyat & Kazı",
                description:
                  "Yüksek kapasiteli ekskavatörlerle hassas kazı ve zemin hazırlığı",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Nakliye & Taşıma",
                description:
                  "Geniş araç filomuzla kırma, taşıma ve malzeme yönetimi",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Ekipman Kiralama",
                description:
                  "Kısa ve uzun dönemli ağır ekipman kiralama çözümleri",
              },
            },
          ],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.mostarmadencilik.com.tr/#localbusiness",
        name: "Mostar Madencilik",
        image: "https://www.mostarmadencilik.com.tr/logo.png",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Muğla",
          addressRegion: "Muğla",
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.2,
          longitude: 27.5,
        },
        url: "https://www.mostarmadencilik.com.tr",
        telephone: "+90-535-357-2549",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <Hero />

      {/* Company Info Section with Paletli Kepçe */}
      <section
        id="hakkımızda"
        aria-label="Şirket Hakkında"
        className="py-16 sm:py-20 lg:py-24 bg-card"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gunmetal dark:text-timberwolf mb-4">
                  İşin Temeli{" "}
                  <span className="text-gold-metallic">MOSTAR MADENCİLİK</span>
                </h2>
                <div className="w-20 h-1 bg-gold-metallic rounded-full mb-6"></div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-field-drab dark:text-timberwolf mb-6">
                Hafriyat Çalışmalarınıza Kurumsal Çözüm Üretiyoruz
              </h3>

              <p className="text-lg text-gunmetal dark:text-timberwolf leading-relaxed mb-8">
                Firmamız yılların verdiği deneyim ve modern ekipman
                teknolojisiyle, hafriyat ve madencilik sektöründe güvenilir
                çözümler sunmaktadır. Üstlenmiş olduğu tüm projeleri başarı ile
                bitirip zamanından önce müşterilerimize teslim etmektedir.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-gold-metallic mb-2">
                    <AnimatedCounter value={15} duration={2.5} />+
                  </div>
                  <div className="text-sm font-medium text-field-drab dark:text-timberwolf">
                    Yıllık Deneyim
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-gold-metallic mb-2">
                    <AnimatedCounter value={100} duration={3} />+
                  </div>
                  <div className="text-sm font-medium text-field-drab dark:text-timberwolf">
                    Tamamlanmış Proje
                  </div>
                </motion.div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-gold-metallic rounded-full"></div>
                  <span className="text-gunmetal dark:text-timberwolf font-medium">
                    Deneyim ve Uzmanlık
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-gold-metallic rounded-full"></div>
                  <span className="text-gunmetal dark:text-timberwolf font-medium">
                    Kalite ve Güvenilirlik
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-gold-metallic rounded-full"></div>
                  <span className="text-gunmetal dark:text-timberwolf font-medium">
                    Modern Teknolojik Altyapı
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/mostarPalet2.png"
                    alt="Mostar Madencilik Paletli Kepçe"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-gunmetal/20 via-transparent to-transparent"></div>

                {/* Animated overlay effect */}
                <motion.div
                  initial={{ opacity: 0, x: "-100%" }}
                  whileInView={{
                    opacity: [0, 0.3, 0],
                    x: ["100%", "100%", "200%"],
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-metallic/30 to-transparent"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: {
                    duration: 0.8,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  },
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-gold-metallic text-gunmetal px-6 py-4 rounded-xl shadow-lg cursor-pointer"
              >
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-2xl font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    7/24
                  </motion.div>
                  <motion.div
                    className="text-sm font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    Hizmet
                  </motion.div>
                </motion.div>

                {/* Pulsing ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-gold-metallic"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="hizmetler"
        aria-label="Hizmetlerimiz"
        className="py-16 sm:py-20 lg:py-32 bg-card"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Kapsamlı Hafriyat Çözümleri
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Projenizin her aşamasında yanınızdayız. Modern ekipman ve uzman
              kadromuzla en zorlu projeleri bile zamanında teslim ediyoruz.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
            className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: LuHardHat,
                title: "Hafriyat & Kazı",
                description:
                  "Yüksek kapasiteli ekskavatörlerle hassas kazı ve zemin hazırlığı. Her türlü arazi koşulunda profesyonel hizmet.",
                features: ["Hassas kazı", "Zemin analizi", "Güvenli çalışma"],
              },
              {
                icon: LuTruck,
                title: "Nakliye & Taşıma",
                description:
                  "Geniş araç filomuzla kırma, taşıma ve malzeme yönetimi. Hızlı ve güvenli lojistik çözümleri.",
                features: ["Hızlı teslimat", "Geniş filo", "GPS takip"],
              },
              {
                icon: LuShield,
                title: "Risk & Emniyet",
                description:
                  "İş güvenliği önlemleri ve saha denetimleri. Sertifikalı ekip ve tam sigorta kapsamı.",
                features: [
                  "Tam sigorta",
                  "Sertifikalı ekip",
                  "Düzenli denetim",
                ],
              },
              {
                icon: LuClock,
                title: "Proje Yönetimi",
                description:
                  "Yerinde koordinasyon, raporlama ve zaman planlaması. Projeniz her zaman kontrolünüz altında.",
                features: ["Anlık raporlama", "Zaman planı", "Koordinasyon"],
              },
              {
                icon: FaCheckCircle,
                title: "Ekipman Kiralama",
                description:
                  "Kısa ve uzun dönemli ağır ekipman kiralama çözümleri. Bakımlı ve modern makineler.",
                features: ["Esnek süreler", "Bakımlı ekipman", "Uygun fiyat"],
              },
              {
                icon: LuArrowRight,
                title: "Lojistik Planlama",
                description:
                  "Saha içi lojistik planlaması ve rota optimizasyonu. Verimli ve ekonomik çözümler.",
                features: [
                  "Rota optimizasyonu",
                  "Maliyet tasarrufu",
                  "Verimlilik",
                ],
              },
            ].map((service, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-[rgba(var(--corn-rgb),0.5)] hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[rgba(var(--corn-rgb),0.05)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <service.icon className="h-10 w-10 text-gold-metallic" />

                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <FaCheckCircle className="h-4 w-4 text-gold-metallic" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projeler"
        aria-label="Projelerimiz"
        className="py-16 sm:py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Projelerimiz
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Türkiye&#39;de gerçekleştirdiğimiz projelerle sektörde fark
              yaratıyoruz.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
            className="mt-12 sm:mt-16 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "İnşaat Projeleri",
                category: "Hafriyat Projesi",
                image: "/sahadaKamyon.jpg",
              },
              {
                title: "Servis Hizmetleri",
                category: "Ulaşım",
                image: "/sultanServis.jpg",
              },
              {
                title: "Maden Projeleri",
                category: "Hafriyat Projesi",
                image: "/kepce.webp",
              },
            ].map((project, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-[rgba(var(--corn-rgb),0.5)]"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6">
                  <div className="text-md font-bold text-gold-metallic">
                    {project.category}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="iletisim"
        aria-label="İletişim"
        className="py-16 sm:py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[rgba(var(--corn-rgb),0.1)] via-transparent to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="px-8 py-16 text-center sm:px-16 lg:py-24"
            >
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Projeniz için hemen teklif alın
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
                Uzman ekibimiz projenizi değerlendirip size en uygun çözümü
                sunmak için hazır. Ücretsiz keşif ve detaylı fiyat teklifi için
                hemen iletişime geçin.
              </p>

              <div className="mt-10 flex flex-col items-stretch sm:items-center justify-center gap-3 sm:gap-4 sm:flex-row">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="h-10 px-6 rounded-md text-base font-medium group bg-gold-metallic text-gunmetal hover:bg-field-drab w-full sm:w-auto"
                >
                  İletişime Geçin
                  <LuArrowRight className="ml-2 h-4 w-4 inline-block align-middle transition-transform group-hover:translate-x-1" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="h-10 px-6 rounded-md text-base font-medium border border-border bg-transparent hover:bg-secondary w-full sm:w-auto"
                >
                  +90 (535) 357 25 49
                </motion.button>
              </div>

              {/* Contact Info */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.08 }}
                className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="text-sm font-medium text-muted-foreground">
                    E-posta
                  </div>
                  <div className="mt-1 text-foreground">
                    info@mastormadencilik.com.tr
                  </div>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="text-sm font-medium text-muted-foreground">
                    Telefon
                  </div>
                  <div className="mt-1 text-foreground">
                    +90 (535) 357 25 49
                  </div>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="text-sm font-medium text-muted-foreground">
                    Adres
                  </div>
                  <div className="mt-1 text-foreground">Türkiye</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer aria-label="Site Footer" className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left: Map Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4">Konumumuz</h3>
              <div className="relative w-full h-64 sm:h-80 lg:h-[500px] rounded-2xl overflow-hidden border border-border shadow-xl">
                <div>
                  <iframe
                    width="100%"
                    height="600"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bodrum+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">
                      popolazione comuni Italia mappa interattiva
                    </a>
                  </iframe>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4">İletişim Formu</h3>
              <form className="space-y-4" aria-label="İletişim Formu">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Ad Soyad{" "}
                    <span className="text-red-500" aria-label="zorunlu alan">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold-metallic focus:border-transparent transition-all"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    E-posta{" "}
                    <span className="text-red-500" aria-label="zorunlu alan">
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold-metallic focus:border-transparent transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Telefon{" "}
                    <span className="text-red-500" aria-label="zorunlu alan">
                      *
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    aria-required="true"
                    pattern="[0-9+\s\(\)\-]+"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold-metallic focus:border-transparent transition-all"
                    placeholder="+90 (5XX) XXX XX XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Mesajınız{" "}
                    <span className="text-red-500" aria-label="zorunlu alan">
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold-metallic focus:border-transparent transition-all resize-none"
                    placeholder="Projeniz hakkında bize bilgi verin..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  aria-label="İletişim formunu gönder"
                  className="w-full px-6 py-3 rounded-lg text-base font-medium bg-gold-metallic text-gunmetal hover:bg-field-drab transition-colors"
                >
                  Gönder
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Bottom Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-between gap-4 sm:flex-row pt-8 border-t border-border"
          >
            <div className="flex items-center gap-2">
              <span className="relative w-6 h-6 rounded-md overflow-hidden ring-1 ring-field-drab/20 bg-card flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Mostar Madencilik"
                  fill
                  className="object-cover"
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(218,175,81,0.2)] to-transparent"
                  aria-hidden="true"
                />
              </span>
              <span className="font-semibold">Mostar Madencilik</span>
            </div>
            <div className="text-sm text-muted-foreground text-center sm:text-right">
              <p>© 2025 Mostar Madencilik. Tüm hakları saklıdır.</p>
              <p className="mt-1">Designed By Altıkulaç Yazılım</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
