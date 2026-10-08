import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sukaku Fried Chicken Kopo",
    short_name: "Sukaku Kopo",
    description:
      "Ayam Crispy dan Ayam Goreng Favorit di Jl. Raya Nangela, Nanggung, Kecamatan Kopo, Kabupaten Serang, Banten 42178. Pesan via WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#D32F2F",
    lang: "id",
    icons: [
      {
        src: "/images/mascot_sukaku.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "maskable",
      },
      {
        src: "/images/mascot_sukaku.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
