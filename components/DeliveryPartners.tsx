"use client";

import React from "react";
import { MessageCircle, Phone, Clock, MapPin, CheckCircle, Send, Bike } from "lucide-react";

const ORDER_STEPS = [
  {
    step: "1",
    icon: <MessageCircle className="w-6 h-6 text-[#25D366]" />,
    title: "Chat WhatsApp",
    desc: "Klik tombol di bawah atau hubungi kami langsung di 0851-7534-8190",
  },
  {
    step: "2",
    icon: <Send className="w-6 h-6 text-[#FFD500]" />,
    title: "Kirim Pesanan",
    desc: "Sebutkan menu, jumlah, dan alamat jika delivery. Kami siap bantu!",
  },
  {
    step: "3",
    icon: <CheckCircle className="w-6 h-6 text-amber-300" />,
    title: "Pesanan Diproses",
    desc: "Pesanan langsung diproses oleh dapur kami dan siap diantarkan.",
  },
  {
    step: "4",
    icon: <Bike className="w-6 h-6 text-white" />,
    title: "Terima & Nikmati!",
    desc: "Ayam crispy lezat tiba di tangan Anda, panas dan renyah sempurna!",
  },
];

const BENEFITS = [
  "Tidak perlu aplikasi tambahan",
  "Pelayanan personal & responsif",
  "Konfirmasi pesanan lebih cepat",
  "Bisa request menu spesial",
  "Harga langsung tanpa komisi platform",
  "Informasi promo & paket terbaru",
];

export default function DeliveryPartners() {
  const waUrl =
    "https://wa.me/6285175348190?text=Halo%20Sukaku%20Fried%20Chicken!%20%F0%9F%8D%97%0ASaya%20ingin%20pesan%20menu%20lezat%20Sukaku.%0A%0ATipe%20pesanan%3A%20";

  return (
    <section
      id="delivery"
      className="py-14 md:py-20 bg-gradient-to-br from-[#D32F2F] via-[#B71C1C] to-[#7B0000] text-white relative overflow-hidden"
    >
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

      {/* Decorative glows */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#FFD500]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFD500] text-[#8B0000] px-4 py-1.5 rounded-full text-xs font-display font-black uppercase tracking-wider mb-4 shadow-md">
            <MessageCircle className="w-3.5 h-3.5" />
            Cara Pesan
          </div>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-3">
            Pesan Mudah <br />
            <span className="text-[#FFD500]">Langsung via WhatsApp</span>
          </h3>
          <p className="text-amber-100/90 font-medium text-sm sm:text-base">
            Tidak perlu aplikasi lain. Cukup chat WhatsApp kami dan pesanan Anda langsung diproses!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: Steps */}
          <div className="space-y-4">
            {ORDER_STEPS.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 border border-white/25 shrink-0 font-display font-black text-lg text-[#FFD500]">
                  {item.step}
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-display font-black text-white text-base leading-snug">
                      {item.title}
                    </p>
                    <p className="text-amber-100/80 text-xs sm:text-sm font-medium mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: CTA Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 text-neutral-800 shadow-2xl flex flex-col gap-5">
            
            {/* WA Logo & Number */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg shrink-0">
                <svg className="w-9 h-9 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  WhatsApp Langsung ke
                </p>
                <p className="font-display font-black text-2xl text-[#2C1810] tracking-wide">
                  0851-7534-8190
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse inline-block" />
                  <span className="text-xs font-bold text-[#25D366]">
                    Online · Senin – Minggu 09:00–21:00 WIB
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-100" />

            {/* Benefits */}
            <div>
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2.5">
                Keuntungan Pesan via WhatsApp
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700">
                    <CheckCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-100" />

            {/* Store info */}
            <div className="space-y-1.5 text-xs text-neutral-500 font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D32F2F] shrink-0 mt-0.5" />
                Jl. Raya Nangela, Nanggung, Kec. Kopo, Kab. Serang, Banten 42178
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#FFD500] shrink-0" />
                Buka setiap hari · 09:00 – 21:00 WIB
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2.5">
              <a
                href={waUrl + "Bungkus%20%2F%20Takeaway"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl font-display font-black text-base flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg transition-all active:scale-95 button-press-effect"
              >
                <Phone className="w-5 h-5 fill-current" />
                Pesan Sekarang via WhatsApp
              </a>
              <a
                href={waUrl + "Delivery%20%2F%20Antar%20ke%20Rumah"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl font-display font-bold text-sm flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-all active:scale-95"
              >
                <Bike className="w-4 h-4" />
                Pesan Delivery / Antar ke Rumah
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
