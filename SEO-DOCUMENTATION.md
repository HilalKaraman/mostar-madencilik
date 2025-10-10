# SEO Optimizasyonu Dokümantasyonu

## Yapılan İyileştirmeler

### 1. Metadata ve Meta Tags
✅ **Layout.tsx** - Kapsamlı metadata eklendi:
- Title template (dinamik sayfa başlıkları için)
- Detaylı description (160 karakter)
- Keywords (16+ hedef anahtar kelime)
- Author, creator, publisher bilgileri
- Canonical URL yapılandırması
- Format detection ayarları

### 2. Open Graph (Social Media)
✅ Facebook, LinkedIn, Twitter için optimize edilmiş paylaşım:
- Open Graph title, description, image
- Twitter Card yapılandırması
- Site name, locale (tr_TR)
- Image dimensions (1200x630)

### 3. Favicon & Icons
✅ Multi-platform favicon yapılandırması:
- Standard favicon (logo.png)
- Apple touch icon
- Multiple sizes support
- Shortcut icon

### 4. Robots & Crawling
✅ Arama motoru botları için optimizasyon:
- Robots.txt oluşturuldu (`/public/robots.txt`)
- Googlebot, Bingbot, Yandex yapılandırması
- Max image/video preview ayarları
- Snippet ayarları

### 5. Sitemap
✅ Dinamik XML sitemap oluşturuldu (`/src/app/sitemap.ts`):
- Ana sayfa (priority 1.0)
- Hizmetler bölümü (priority 0.9)
- Projeler bölümü (priority 0.8)
- İletişim bölümü (priority 0.7)
- Change frequency belirtildi

### 6. Structured Data (JSON-LD)
✅ Rich snippets için Schema.org markup:
- **Organization Schema**: Şirket bilgileri
- **LocalBusiness Schema**: Yerel işletme bilgileri
- **WebSite Schema**: Web sitesi bilgileri
- **Service Schema**: Hizmet kataloğu
- Adres, koordinat, çalışma saatleri
- İletişim bilgileri

### 7. Semantic HTML
✅ Accessibility ve SEO için:
- Section'lara `aria-label` eklendi
- Form elementlerine proper labels
- Required field indicators (*)
- ARIA attributes (aria-required, aria-label)
- Form validation (pattern, required)

### 8. Geographic SEO
✅ Yerel SEO optimizasyonu:
- Geo meta tags (Muğla, 37.2, 27.5)
- ICBM koordinatları
- GeoCoordinates schema
- Google Maps embed
- areaServed bilgileri

### 9. Language & Locale
✅ Dil ve bölge ayarları:
- HTML lang="tr"
- Open Graph locale="tr_TR"
- Turkish language structured data
- Format detection yapılandırması

### 10. Performance & Technical
✅ Teknik SEO iyileştirmeleri:
- Canonical URL'ler
- Next.js Image component (otomatik optimizasyon)
- Lazy loading
- Responsive images (sizes attribute)
- Priority loading (critical images)

## Yapılandırma

### Environment Variables
`.env.example` dosyası oluşturuldu. Projeye özel değerler için `.env.local` oluşturun:

```env
NEXT_PUBLIC_SITE_URL=https://mostarmadencilik.com
```

### Gelecek İyileştirmeler (Opsiyonel)

1. **Google Analytics**: Kullanıcı davranışı takibi
2. **Google Search Console**: Arama performansı izleme
3. **Google Tag Manager**: Gelişmiş tracking
4. **Hreflang tags**: Çok dilli destek (gelecekte)
5. **Blog section**: İçerik marketing için
6. **FAQ Schema**: Sık sorulan sorular markup'ı
7. **Review Schema**: Müşteri yorumları markup'ı
8. **BreadcrumbList Schema**: Breadcrumb navigation

## Test Araçları

Yapılan iyileştirmeleri test edin:

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - JSON-LD structured data kontrolü

2. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Performance ve SEO skorları

3. **Lighthouse (Chrome DevTools)**
   - SEO skoru (hedef: 100/100)
   - Accessibility skoru
   - Performance skoru

4. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/
   - Open Graph tags kontrolü

5. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator
   - Twitter Card preview

6. **Schema Markup Validator**
   - https://validator.schema.org/
   - JSON-LD syntax kontrolü

## Keywords (Hedeflenen)

### Primary Keywords:
- Muğla hafriyat
- Muğla kazı işleri
- Mostar Madencilik

### Secondary Keywords:
- hafriyat firması Muğla
- ekskavatör kiralama
- iş makinesi kiralama
- toprak kazısı
- malzeme nakliye
- inşaat hafriyatı

### Long-tail Keywords:
- Muğla profesyonel hafriyat hizmetleri
- Muğla kepçe kiralama fiyatları
- güvenilir hafriyat firması

## Monitoring

Aşağıdaki metrikleri düzenli takip edin:

- **Google Search Console**: Arama sorgularını izleyin
- **Google Analytics**: Trafik kaynaklarını analiz edin
- **Core Web Vitals**: Performance metriklerini optimize edin
- **Backlinks**: Dış bağlantıları takip edin
- **Local Rankings**: Yerel arama sonuçlarını kontrol edin

## İletişim ve Destek

SEO stratejinizi sürekli güncelleyin:
- İçerik düzenli güncelleyin
- Blog yazıları ekleyin
- Sosyal medya entegrasyonu yapın
- Müşteri yorumları toplayın
- Yerel dizinlere kayıt olun (Google My Business, Yandex Maps)
