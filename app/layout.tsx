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

const SITE_URL = "https://sukaku-fried-chicken-kopo.vercel.app";
const SITE_NAME = "Sukaku Fried Chicken";
const SITE_TITLE = "Sukaku Fried Chicken Kopo | Ayam Crispy & Ayam Goreng di Serang";
const SITE_DESC =
  "Sukaku Fried Chicken Kopo menyajikan ayam crispy & ayam goreng renyah bumbu meresap di Kopo, Kabupaten Serang, Banten. Buka setiap hari, pesan via WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME} Kopo`,
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
    canonical: "https://sukaku-fried-chicken-kopo.vercel.app/",
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google7bf2dc8f7e99464d",
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
    streetAddress: "M9V3+FHM, Jl. Raya Nangela, Nanggung",
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
      name: "Menu Sukaku Fried Chicken",
      item: `${SITE_URL}/#menu`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kenapa Pilih Sukaku?",
      item: `${SITE_URL}/#keunggulan`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Lokasi dan Jam Operasional",
      item: `${SITE_URL}/#lokasi`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "FAQ Sukaku Fried Chicken",
      item: `${SITE_URL}/#faq`,
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
        text: "Sukaku Fried Chicken berlokasi di Jl. Raya Nangela, Nanggung, Kecamatan Kopo, Kabupaten Serang, Banten 42178.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Sukaku menyediakan ayam crispy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Sukaku Fried Chicken menyediakan berbagai pilihan menu ayam crispy, ayam goreng keemasan, geprek lava keju, hingga aneka snack pelengkap.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara memesan Sukaku Fried Chicken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk informasi menu dan pemesanan, pelanggan dapat menghubungi Sukaku Fried Chicken melalui WhatsApp yang tersedia di website (0851-7534-8190).",
      },
    },
    {
      "@type": "Question",
      name: "Berapa jam operasional Sukaku Fried Chicken Kopo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sukaku Fried Chicken buka setiap hari dari Senin hingga Minggu, mulai pukul 09:00 hingga 21:00 WIB.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa harga menu di Sukaku Fried Chicken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harga menu sangat terjangkau mulai dari Rp 10.000 hingga Rp 65.000, dengan paket hemat ayam crispy + nasi + es teh mulai Rp 15.000.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah menu Sukaku Fried Chicken terjamin halal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, Sukaku Fried Chicken 100% Halal dan higienis. Menggunakan daging ayam potong segar harian dan diproses secara bersih.",
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
