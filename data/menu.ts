export interface MenuItem {
  id: string;
  name: string;
  category: "paket" | "alacarte" | "snack" | "minuman" | "sambal";
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  badge?: string;
  isPopular?: boolean;
  isPromo?: boolean;
  pieces?: string[];
  sambalOptions?: string[];
}

export const MENU_CATEGORIES = [
  { id: "all", label: "Semua Menu", icon: "🍗" },
  { id: "paket", label: "Paket Hemat & Nasi", icon: "🍱" },
  { id: "alacarte", label: "Ayam Crispy Satuan", icon: "🍗" },
  { id: "snack", label: "Snack & Pelengkap", icon: "🍟" },
  { id: "minuman", label: "Minuman Segar", icon: "🥤" },
  { id: "sambal", label: "Saus & Sambal Juara", icon: "🌶️" },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "paket-super-hemat",
    name: "Paket Super Hemat (Ayam + Nasi + Es Teh)",
    category: "paket",
    price: 15000,
    originalPrice: 20000,
    description: "1 Pcs Ayam Crispy Renyah (Dada/Paha) + Nasi Putih Pulen Hangat + Es Teh Manis Segar Jumbo.",
    image: "/images/paket_super_hemat.jpg",
    badge: "SUPER HEMAT",
    isPopular: true,
    isPromo: true,
    pieces: ["Dada Crispy", "Paha Atas", "Paha Bawah", "Sayap"],
    sambalOptions: ["Sambal Original", "Sambal Geprek Pedas", "Saus Lava", "Saus Keju Melt (+Rp 3.000)"]
  },
  {
    id: "paket-rame-rame",
    name: "Paket Rame-Rame Keluarga (5 Pcs)",
    category: "paket",
    price: 58000,
    originalPrice: 75000,
    description: "5 Pcs Ayam Goreng Crispy Keemasan + 2 Nasi Putih + 2 Es Teh Manis + 2 Pilihan Saus Cocol Spesial.",
    image: "/images/paket_rame_rame.jpg",
    badge: "FAVORIT KELUARGA",
    isPopular: true,
    isPromo: true,
    sambalOptions: ["Mix Saus Cocol Spesial", "Sambal Geprek Nampol", "Saus BBQ Smokey", "Saus Keju"]
  },
  {
    id: "paket-geprek-lava",
    name: "Paket Geprek Lava Keju Mozzarella",
    category: "paket",
    price: 23000,
    originalPrice: 28000,
    description: "Ayam Crispy dibaluri Sambal Bawang Geprek pedas membakar dengan lelehan keju mozzarella gurih + Nasi.",
    image: "/images/ayam_geprek_lava.jpg",
    badge: "PEDAS NAMPOL",
    isPopular: true,
    pieces: ["Dada Crispy", "Paha Atas", "Paha Bawah"],
    sambalOptions: ["Level 1 (Pedas Santai)", "Level 2 (Pedas Nagih)", "Level 3 (Pedas Mampus! 🔥)"]
  },
  {
    id: "snack-popcorn-fries",
    name: "Paket Popcorn Chicken + French Fries",
    category: "snack",
    price: 18000,
    originalPrice: 22000,
    description: "Potongan daging ayam fillet krispi ukuran gigit renyah gurih + Kentang goreng garing + Saus Keju dip.",
    image: "/images/popcorn_snack.jpg",
    badge: "FAVORIT ANAK",
    isPopular: true,
    sambalOptions: ["Saus Keju Gurih", "Saus Tomat & Sambal", "Bubuk BBQ Balado"]
  },
  {
    id: "menu-kulit-crispy",
    name: "Kulit Ayam Crispy Bumbu Tabur Gurih",
    category: "snack",
    price: 12000,
    originalPrice: 15000,
    description: "Kulit ayam renyah kriuk digoreng garing keemasan dengan taburan bumbu rahasia rempah Sukaku dan sambal cocol.",
    image: "/images/menu_kulit_crispy.jpg",
    badge: "EXTRA KRIUK",
    isPopular: true,
    sambalOptions: ["Bumbu Balado Pedas Manis", "Bumbu Jagung Manis", "Bumbu Asin Gurih Daun Jeruk"]
  },
  {
    id: "ayam-satuan-dada",
    name: "Ayam Crispy Satuan (Dada / Paha Atas)",
    category: "alacarte",
    price: 11000,
    originalPrice: 13000,
    description: "Potongan daging ayam tebal dengan balutan tepung crispy keriting keemasan, juicy di dalam.",
    image: "/images/hero_fried_chicken.jpg",
    badge: "CRISPY JUICY",
    pieces: ["Dada Montok", "Paha Atas Juicy"]
  },
  {
    id: "ayam-satuan-drumstick",
    name: "Ayam Crispy Satuan (Paha Bawah / Sayap)",
    category: "alacarte",
    price: 9500,
    originalPrice: 11000,
    description: "Paha bawah atau sayap ayam empuk gurih meresap dengan bumbu khas Sukaku Fried Chicken.",
    image: "/images/hero_fried_chicken.jpg",
    badge: "RENYAH GURIH",
    pieces: ["Paha Bawah (Drumstick)", "Sayap (Wings)"]
  },
  {
    id: "minuman-es-teh",
    name: "Es Teh Manis Segar Jumbo",
    category: "minuman",
    price: 4000,
    originalPrice: 5000,
    description: "Teh melati wangi khas diseduh segar setiap hari dengan gula asli dan es batu melimpah.",
    image: "/images/minuman_es_teh.jpg",
    badge: "SEGAR BANGET"
  },
  {
    id: "minuman-lemon-tea",
    name: "Es Lemon Tea Segar Khas Sukaku",
    category: "minuman",
    price: 7000,
    originalPrice: 9000,
    description: "Kombinasi teh segar dengan perasan lemon asli asam manis segar pelepas dahaga.",
    image: "/images/minuman_es_teh.jpg"
  },
  {
    id: "side-nasi-putih",
    name: "Nasi Putih Pulen Hangat",
    category: "snack",
    price: 4000,
    description: "Nasi putih pulen berkualitas wangi pandan, pelengkap sempurna ayam renyah.",
    image: "/images/paket_super_hemat.jpg"
  },
  {
    id: "side-perkedel-gurih",
    name: "Perkedel Kentang Daging Gurih (2 Pcs)",
    category: "snack",
    price: 6000,
    description: "Perkedel kentang lembut dengan rempah dan cincangan daging gurih.",
    image: "/images/paket_rame_rame.jpg"
  },
  {
    id: "sambal-geprek-cup",
    name: "Ekstra Sambal Geprek Bawang Pedas",
    category: "sambal",
    price: 3500,
    description: "Sambal ulek bawang cabai rawit merah segar dengan siraman minyak panas gurih.",
    image: "/images/ayam_geprek_lava.jpg",
    badge: "PEDAS EXTRA"
  },
  {
    id: "saus-keju-cup",
    name: "Ekstra Saus Keju Cheddar Lumer",
    category: "sambal",
    price: 4000,
    description: "Saus keju creamy kental kaya rasa, sangat cocok untuk cocolan kentang & ayam.",
    image: "/images/popcorn_snack.jpg"
  }
];

export const PROMO_SPECIALS = [
  {
    id: "promo-1",
    title: "PAKET HEMAT PELAJAR & KARYAWAN",
    tagline: "Ayam Crispy + Nasi + Es Teh Cuma 15 Ribu!",
    discountText: "DISKON 25%",
    price: "Rp 15.000",
    originalPrice: "Rp 20.000",
    image: "/images/paket_super_hemat.jpg",
    badge: "BEST DEAL",
    menuId: "paket-super-hemat",
    highlight: "Berlaku setiap hari di seluruh cabang"
  },
  {
    id: "promo-2",
    title: "PAKET RAME-RAME KELUARGA 5 PCS",
    tagline: "5 Ayam + 2 Nasi + 2 Es Teh untuk kumpul seru!",
    discountText: "HEMAT 17 RB",
    price: "Rp 58.000",
    originalPrice: "Rp 75.000",
    image: "/images/paket_rame_rame.jpg",
    badge: "PALING LARIS",
    menuId: "paket-rame-rame",
    highlight: "Cocok untuk makan 2-3 orang"
  },
  {
    id: "promo-3",
    title: "COMBO GEPREK LAVA KEJU MELELEH",
    tagline: "Sensasi pedas geprek gurih diselimuti mozzarella",
    discountText: "FAVORIT",
    price: "Rp 23.000",
    originalPrice: "Rp 28.000",
    image: "/images/ayam_geprek_lava.jpg",
    badge: "VIRAL 🔥",
    menuId: "paket-geprek-lava",
    highlight: "Pilihan level pedas 1 - 3"
  }
];
