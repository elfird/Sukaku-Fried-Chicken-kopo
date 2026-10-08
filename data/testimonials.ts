export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  favoriteMenu: string;
  date: string;
  tag: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Rian Pratama",
    role: "Mahasiswa & Foodie",
    location: "Dipatiukur, Bandung",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    comment: "Gila sih, Paket Super Hematnya beneran penyelamat tanggal tua! 15 ribu udah dapet ayam dada gede, nasi pulen, plus es teh manis jumbo. Kulitnya renyah garing tapi dagingnya tetep juicy basah gak kering sama sekali!",
    favoriteMenu: "Paket Super Hemat Dada",
    date: "Kemarin",
    tag: "Ayamnya Juicy Banget!"
  },
  {
    id: "testi-2",
    name: "Siti Rahmawati",
    role: "Ibu Rumah Tangga",
    location: "Tebet, Jakarta Selatan",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    comment: "Setiap weekend pasti langganan Paket Rame-Rame buat anak-anak di rumah. Minyaknya bersih banget kelihatan dari warna tepungnya yang kuning keemasan dan wangi, gak bikin seret di tenggorokan. 100% recommended!",
    favoriteMenu: "Paket Rame-Rame Keluarga (5 Pcs)",
    date: "2 hari lalu",
    tag: "Minyak Bersih & Renyah"
  },
  {
    id: "testi-3",
    name: "Dimas Anggara",
    role: "Karyawan Swasta",
    location: "BSD City, Tangerang",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    comment: "Ayam Geprek Lava Keju Mozzarella-nya juarakkk abis! Sambal gepreknya berasa pedes gurih bawang asli, bukan cabe bubukan. Ditambah keju mozzarellanya melimpah. Pesan via WhatsApp CS-nya juga fast response!",
    favoriteMenu: "Paket Geprek Lava Mozzarella",
    date: "3 hari lalu",
    tag: "Sambal Geprek Nampol 🔥"
  },
  {
    id: "testi-4",
    name: "Anisa Nurul",
    role: "Content Creator Kuliner",
    location: "Pajajaran, Bogor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    comment: "Kulit Crispy-nya renyah parah! Kriuknya tahan berjam-jam bahkan pas dibawa pulang. Bumbu rempahnya beneran meresap sampai ke tulang ayamnya. Fix jadi tempat ayam crispy favorit se-Jabodetabek!",
    favoriteMenu: "Kulit Ayam Crispy Gurih",
    date: "5 hari lalu",
    tag: "Kriuk Tahan Lama"
  },
  {
    id: "testi-5",
    name: "Budi Santoso",
    role: "Ketua Karang Taruna",
    location: "Cianjur Kota",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    comment: "Pernah order 80 box paket ayam untuk acara pengajian di cabang Cianjur. Tepat waktu, ayamnya masih anget renyah, dan semua jamaah pada suka. Pelayanan pemesanan acaranya sangat memuaskan!",
    favoriteMenu: "Pesanan Katering Acara",
    date: "1 minggu lalu",
    tag: "Top untuk Pesanan Acara"
  }
];
