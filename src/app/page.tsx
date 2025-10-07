"use client"

import { LuArrowRight, LuTruck, LuHardHat, LuShield, LuClock } from "react-icons/lu"
import { FaCheckCircle } from "react-icons/fa"
import Image from "next/image"
import Hero from "../components/Hero"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem("theme") : null
    if (saved) {
      setIsDark(saved === "dark")
      document.documentElement.classList.toggle("dark", saved === "dark")
    } else if (typeof window !== 'undefined') {
      const prefers = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDark(prefers)
      document.documentElement.classList.toggle("dark", prefers)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", isDark ? "dark" : "light")
    }
  }, [isDark])
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-4 z-50 px-4 pointer-events-none">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="pointer-events-auto bg-tuna-trans backdrop-blur-md rounded-xl border border-tuna-6 shadow-sm">
            <div className="flex h-16 items-center justify-between px-4">
              <a href="#" className="flex items-center gap-3">
                <span aria-label="Logo" className="logo-text-mask logo-gradient logo-drop block w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0" />
                <span className="text-base sm:text-lg font-semibold text-100">Mostar Madencilik</span>
              </a>
              <div className="hidden items-center gap-6 md:flex text-sm">
                <a href="#hizmetler" className="text-90 hover-text-corn transition-colors">Hizmetler</a>
                <a href="#projeler" className="text-90 hover-text-corn transition-colors">Projeler</a>
                <a href="#iletisim" className="text-90 hover-text-corn transition-colors">İletişim</a>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <button onClick={() => setIsDark((s) => !s)} aria-label="Tema değiştir" className="inline-flex p-2 rounded-md bg-card">
                  {isDark ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M6 12a6 6 0 0012 0 6 6 0 00-12 0z" /></svg>
                  )}
                </button>
              </div>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#iletisim" className="sm:hidden inline-flex h-9 items-center rounded-md px-3 text-sm font-medium bg-corn text-tuna">
                İletişim
              </motion.a>
            </div>
          </motion.div>
        </div>
      </nav>

      <Hero />

      {/* Services Section */}
      <section id="hizmetler" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Kapsamlı Hafriyat Çözümleri
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Projenizin her aşamasında yanınızdayız. Modern ekipman ve uzman kadromuzla en zorlu projeleri bile
              zamanında teslim ediyoruz.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.08 }} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                description: "İş güvenliği önlemleri ve saha denetimleri. Sertifikalı ekip ve tam sigorta kapsamı.",
                features: ["Tam sigorta", "Sertifikalı ekip", "Düzenli denetim"],
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
                description: "Kısa ve uzun dönemli ağır ekipman kiralama çözümleri. Bakımlı ve modern makineler.",
                features: ["Esnek süreler", "Bakımlı ekipman", "Uygun fiyat"],
              },
              {
                icon: LuArrowRight,
                title: "Lojistik Planlama",
                description: "Saha içi lojistik planlaması ve rota optimizasyonu. Verimli ve ekonomik çözümler.",
                features: ["Rota optimizasyonu", "Maliyet tasarrufu", "Verimlilik"],
              },
            ].map((service, index) => (
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-[rgba(var(--corn-rgb),0.5)] hover:shadow-lg"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[rgba(var(--corn-rgb),0.05)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <service.icon className="h-10 w-10 text-corn" />

                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FaCheckCircle className="h-4 w-4 text-corn" />
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
      <section id="projeler" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Başarılı Projelerimiz
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Türkiye&#39;nin dört bir yanında gerçekleştirdiğimiz projelerle sektörde fark yaratıyoruz.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.08 }} className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "İstanbul Finans Merkezi",
                category: "Ticari Proje",
                image: "/modern-construction-site-istanbul.jpg",
              },
              {
                title: "Ankara Konut Kompleksi",
                category: "Konut Projesi",
                image: "/residential-construction-excavation.jpg",
              },
              {
                title: "İzmir Liman Genişletme",
                category: "Altyapı Projesi",
                image: "/port-construction-heavy-machinery.jpg",
              },
            ].map((project, index) => (
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
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
                  <div className="text-sm text-corn">{project.category}</div>
                  <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[rgba(var(--corn-rgb),0.1)] via-transparent to-transparent" />

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="px-8 py-16 text-center sm:px-16 lg:py-24">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Projeniz için hemen teklif alın
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
                Uzman ekibimiz projenizi değerlendirip size en uygun çözümü sunmak için hazır. Ücretsiz keşif ve detaylı
                fiyat teklifi için hemen iletişime geçin.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} type="button" className="h-10 px-6 rounded-md text-base font-medium group bg-corn text-tuna hover-bg-corn-90">
                  İletişime Geçin
                  <LuArrowRight className="ml-2 h-4 w-4 inline-block align-middle transition-transform group-hover:translate-x-1" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} type="button" className="h-10 px-6 rounded-md text-base font-medium border border-border bg-transparent hover:bg-secondary">
                  +90 (555) 123 45 67
                </motion.button>
              </div>

              {/* Contact Info */}
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.08 }} className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                  <div className="text-sm font-medium text-muted-foreground">E-posta</div>
                  <div className="mt-1 text-foreground">info@temelkazi.com</div>
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                  <div className="text-sm font-medium text-muted-foreground">Telefon</div>
                  <div className="mt-1 text-foreground">+90 (555) 123 45 67</div>
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                  <div className="text-sm font-medium text-muted-foreground">Adres</div>
                  <div className="mt-1 text-foreground">Malatya, Türkiye</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="relative w-6 h-6 rounded-md overflow-hidden ring-1 ring-white/10 bg-card flex-shrink-0">
                <Image src="/logo.jpg" alt="Mostar Madencilik" fill className="object-cover" />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(var(--corn-rgb),0.2)] to-transparent" aria-hidden="true" />
              </span>
              <span className="font-semibold">Mostar Madencilik</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Mostar Madencilik. Tüm hakları saklıdır.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
