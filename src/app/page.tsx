import Hero from "../components/Hero";
import ContactCard from "../components/ContactCard";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <main className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <Hero />

        {/* Services */}
        <section id="hizmetler" className="mt-20">
          <h2 className="text-2xl font-semibold">Hizmetlerimiz</h2>
          <p className="mt-2 text-80">Projeye özel çözümlerle güvenli ve zamanında teslimat.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold">Hafriyat & Kazı</h3>
              <p className="mt-2 text-sm text-70">Yüksek kapasiteli ekskavatörlerle hassas kazı ve zemin hazırlığı.</p>
            </article>

            <article className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold">Nakliye & Taşıma</h3>
              <p className="mt-2 text-sm text-70">Kırma, taşıma ve malzeme yönetimi için geniş araç filosu.</p>
            </article>

            <article className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold">Proje Yönetimi</h3>
              <p className="mt-2 text-sm text-70">Yerinde koordinasyon, raporlama ve zaman planlaması.</p>
            </article>

            <article className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold">Risk & Emniyet</h3>
              <p className="mt-2 text-sm text-70">İş güvenliği önlemleri ve saha denetimleri.</p>
            </article>

            <article className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold">Ekipman Kiralama</h3>
              <p className="mt-2 text-sm text-70">Kısa/uzun dönemli ağır ekipman kiralama çözümleri.</p>
            </article>

            <article className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold">Lojistik Planlama</h3>
              <p className="mt-2 text-sm text-70">Saha içi lojistik planlaması ve rota optimizasyonu.</p>
            </article>
          </div>
        </section>

        {/* Contact anchor */}
        <section id="iletisim" className="mt-20 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold">İletişim</h2>
            <p className="mt-2 text-80">Projeleriniz hakkında konuşalım. Aşağıdaki buton ile hızlıca mesaj bırakabilirsiniz.</p>
            <div className="mt-4">
              <a href="#" className="rounded-md bg-corn text-tuna px-5 py-3">İletişime Geç</a>
            </div>
          </div>

          {/* Centered decorative card (shows on md+) */}
          <div className="pointer-events-none mt-8 md:mt-12 lg:mt-16 flex justify-center md:justify-center pb-8 md:pb-12 lg:pb-16 px-6 opacity-100 sm:hidden md:flex z-0">
            <ContactCard />
          </div>
        </section>
      </main>
    </div>
  );
}
