import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sukaku Fried Chicken - Pasti Suka!",
    short_name: "Sukaku FC",
    description:
      "Ayam Goreng Crispy Renyah di Jl. Raya Nangela, Nanggung, Kec. Kopo, Kabupaten Serang, Banten 42178. Pesan via WhatsApp 0851-7534-8190.",
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
