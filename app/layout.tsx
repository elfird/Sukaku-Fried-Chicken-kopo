import type { Metadata, Viewport } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#D32F2F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const SITE_URL = "https://sukakufriedchicken.com";
const SITE_NAME = "Sukaku Fried Chicken";
const SITE_TITLE = "Sukaku Fried Chicken Kopo Serang - Ayam Goreng Crispy Renyah | Pasti Suka!";
const SITE_DESC =
  "Sukaku Fried Chicken di Jl. Raya Nangela, Kec. Kopo, Kabupaten Serang, Banten 42178. Ayam goreng crispy keemasan bumbu rempah meresap sampai ke tulang. Buka setiap hari 09:00–21:00 WIB. Pesan langsung via WhatsApp 0851-7534-8190. Halal & Higienis!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: [
    "Sukaku Fried Chicken",
    "Sukaku Fried Chicken Kopo",
    "Sukaku Fried Chicken Serang",
    "Sukaku Fried Chicken Banten",
    "Ayam Goreng Crispy Serang",
    "Ayam Goreng Kopo Serang",
    "Fried Chicken Kopo",
    "Fried Chicken Serang Banten",
    "Fried Chicken Murah Serang",
    "Ayam Goreng Murah Serang",
    "Kuliner Kopo Serang",
    "Kuliner Serang Banten",
    "Ayam Goreng Crispy Banten",
    "Pesan Ayam Goreng WhatsApp Serang",
    "Restoran Ayam Serang",
    "Warung Ayam Goreng Kopo",
    "Jl Raya Nangela Kopo Serang",
    "Makanan Enak Kopo Serang",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "food",
  classification: "Restoran, Kuliner, Fast Food, Fried Chicken",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: "/images/hero_fried_chicken.jpg",
        width: 1200,
        height: 630,
        alt: "Sukaku Fried Chicken - Ayam Goreng Crispy Renyah di Kopo, Serang, Banten",
        type: "image/jpeg",
      },
      {
        url: "/images/mascot_sukaku.jpg",
        width: 400,
        height: 400,
        alt: "Maskot Sukaku Fried Chicken",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/images/hero_fried_chicken.jpg"],
    creator: "@sukakufriedchicken",
  },
  verification: {
    google: "google7bf2dc8f7e99464d",
  },
  other: {
    "geo.region": "ID-BT",
    "geo.placename": "Kecamatan Kopo, Kabupaten Serang, Banten",
    "geo.position": "-6.3062816;106.3539269",
    "ICBM": "-6.3062816, 106.3539269",
    "contact": "tel:+6285175348190",
    "business:contact_data:phone_number": "+6285175348190",
    "business:contact_data:street_address": "Jl. Raya Nangela, Nanggung",
    "business:contact_data:locality": "Kecamatan Kopo",
    "business:contact_data:region": "Kabupaten Serang",
    "business:contact_data:postal_code": "42178",
    "business:contact_data:country_name": "Indonesia",
  },
};

// ─── JSON-LD Structured Data ───────────────────────────────────────────────
// 1. LocalBusiness / FastFoodRestaurant
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": ["FastFoodRestaurant", "FoodEstablishment", "LocalBusiness"],
  "@id": `${SITE_URL}/#restaurant`,
  name: SITE_NAME,
  alternateName: "Sukaku FC",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/mascot_sukaku.jpg`,
    width: 400,
    height: 400,
  },
  image: [
    `${SITE_URL}/images/hero_fried_chicken.jpg`,
    `${SITE_URL}/images/mascot_sukaku.jpg`,
  ],
  description:
    "Sukaku Fried Chicken menyajikan ayam goreng crispy keemasan dengan bumbu rempah rahasia yang meresap sampai ke tulang. Berlokasi di Jl. Raya Nangela, Kec. Kopo, Kabupaten Serang, Banten. Buka setiap hari 09:00–21:00 WIB.",
  servesCuisine: ["Indonesian", "Fried Chicken", "Fast Food", "Ayam Goreng"],
  priceRange: "Rp 10.000 – Rp 65.000",
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, QRIS, Transfer Bank",
  telephone: "+6285175348190",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Nangela, Nanggung",
    addressLocality: "Kecamatan Kopo",
    addressRegion: "Kabupaten Serang, Banten",
    postalCode: "42178",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.3062816,
    longitude: 106.3539269,
  },
  hasMap: "https://maps.app.goo.gl/8WUy1RHQPgeSSPVa9",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  menu: `${SITE_URL}/#menu`,
  hasMenu: `${SITE_URL}/#menu`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+6285175348190",
    contactType: "customer service",
    contactOption: "TollFree",
    availableLanguage: "Indonesian",
    areaServed: "ID",
  },
  sameAs: [
    "https://maps.app.goo.gl/8WUy1RHQPgeSSPVa9",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "320",
    bestRating: "5",
    worstRating: "1",
  },
  potentialAction: {
    "@type": "OrderAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://wa.me/6285175348190?text=Halo%20Sukaku%20Fried%20Chicken!%20Saya%20mau%20pesan.",
      inLanguage: "id",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModePickUp"],
  },
};

// 2. BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Menu Kami",
      item: `${SITE_URL}/#menu`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Promo",
      item: `${SITE_URL}/#promo`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Cara Pesan",
      item: `${SITE_URL}/#delivery`,
    },
  ],
};

// 3. FAQPage
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Di mana lokasi Sukaku Fried Chicken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sukaku Fried Chicken berlokasi di Jl. Raya Nangela, Nanggung, Kecamatan Kopo, Kabupaten Serang, Banten 42178. Anda bisa lihat di Google Maps: https://maps.app.goo.gl/8WUy1RHQPgeSSPVa9",
      },
    },
    {
      "@type": "Question",
      name: "Jam buka Sukaku Fried Chicken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sukaku Fried Chicken buka setiap hari Senin hingga Minggu dari pukul 09:00 hingga 21:00 WIB.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara pesan di Sukaku Fried Chicken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pesan bisa dilakukan langsung via WhatsApp ke nomor 0851-7534-8190. Sebutkan menu yang diinginkan, jumlah, dan alamat jika pesan delivery. Pesanan langsung diproses!",
      },
    },
    {
      "@type": "Question",
      name: "Berapa harga menu di Sukaku Fried Chicken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harga menu Sukaku Fried Chicken mulai dari Rp 10.000 hingga Rp 65.000. Ada paket super hemat Ayam + Nasi + Es Teh mulai Rp 15.000!",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Sukaku Fried Chicken halal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, Sukaku Fried Chicken 100% Halal. Menggunakan ayam potong segar pilihan yang higienis dengan proses penyembelihan sesuai syariat Islam.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada layanan delivery di Sukaku Fried Chicken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, tersedia layanan delivery. Hubungi kami via WhatsApp di 0851-7534-8190 untuk pemesanan delivery ke alamat Anda.",
      },
    },
  ],
};

// 4. WebSite with SearchAction
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "id-ID",
  description: SITE_DESC,
  publisher: {
    "@id": `${SITE_URL}/#restaurant`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fredoka.variable} ${jakarta.variable} scroll-smooth`}
    >
      <head>
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="ID-BT" />
        <meta name="geo.placename" content="Kecamatan Kopo, Kabupaten Serang, Banten" />
        <meta name="geo.position" content="-6.3062816;106.3539269" />
        <meta name="ICBM" content="-6.3062816, 106.3539269" />

        {/* Structured Data - Restaurant */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        {/* Structured Data - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {/* Structured Data - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans bg-[#FAF7F2] text-[#2C1810] min-h-screen antialiased selection:bg-[#FFD500] selection:text-[#990000]">
        {children}
      </body>
    </html>
  );
}
