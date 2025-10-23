import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mostar Madencilik & Hafriyat | Bodrum Profesyonel Hafriyat Hizmetleri",
    template: "%s | Mostar Madencilik"
  },
  description: "Bodrum ve çevre illerde 15+ yıllık deneyimle profesyonel hafriyat, kazı, nakliye ve madencilik hizmetleri. Modern ekipman, uzman kadro ve 7/24 hizmet. Ücretsiz keşif ve fiyat teklifi.",
  keywords: [
    "hafriyat",
    "kazı işleri",
    "madencilik",
    "nakliye",
    "kepçe kiralama",
    "ekskavatör",
    "iş makinesi",
    "Bodrum hafriyat",
    "Bodrum kazı",
    "inşaat hafriyatı",
    "zemin kazısı",
    "toprak taşıma",
    "kum taşıma",
    "malzeme nakliye",
    "hafriyat firması",
    "Mostar Madencilik",
    "taşımacılık"
  ],
  authors: [{ name: "Mostar Madencilik" }],
  creator: "Mostar Madencilik",
  publisher: "Mostar Madencilik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mostarmadencilik.com.tr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mostar Madencilik & Hafriyat | Bodrum Profesyonel Hafriyat Hizmetleri",
    description: "Bodrum ve çevre illerde 15+ yıllık deneyimle profesyonel hafriyat, kazı, nakliye ve madencilik hizmetleri. Modern ekipman, uzman kadro ve 7/24 hizmet.",
    url: '/',
    siteName: 'Mostar Madencilik',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mostar Madencilik - Profesyonel Hafriyat Hizmetleri',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mostar Madencilik & Hafriyat | Muğla",
    description: "15+ yıllık deneyimle profesyonel hafriyat, kazı ve madencilik hizmetleri. Modern ekipman ve uzman kadro.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png' },
    ],
    shortcut: ['/logo.png'],
  },
  verification: {
    // Google Search Console doğrulama kodu buraya eklenebilir
    // google: 'verification_token',
    // Yandex doğrulama kodu
    // yandex: 'verification_token',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mostarmadencilik.com.tr'} />
        <meta name="geo.region" content="TR-48" />
        <meta name="geo.placename" content="Muğla" />
        <meta name="geo.position" content="37.2;27.5" />
        <meta name="ICBM" content="37.2, 27.5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
