"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin, Sparkles, ShieldCheck, Flame, Star, Award, Utensils } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Hero() {
  const { setIsOpen } = useCart();

  return (
    <section className="relative overflow-hidden bg-[#D32F2F] bg-gradient-to-b from-[#D32F2F] via-[#B71C1C] to-[#8B0000] text-white pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Halftone / Dot pattern overlay */}
      <div className="absolute inset-0 bg-dots-pattern opacity-15 pointer-events-none" />

      {/* Decorative Glow Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFD500]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#FF9800]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Catchy Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFD500] text-[#8B0000] px-4 py-1.5 rounded-full font-display font-black text-xs md:text-sm uppercase shadow-lg mb-4 animate-badge border border-amber-300">
              <Flame className="w-4 h-4 fill-current text-[#D32F2F]" />
              <span>Sensasi Ayam Goreng No. 1 • Pasti Suka!</span>
              <span className="bg-[#D32F2F] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                Mulai 10 Ribuan
              </span>
            </div>

            {/* Main Headline with H1 and Subtitle */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[1.08] mb-3 text-shadow-red">
              Sukaku Fried Chicken <span className="text-[#FFD500]">Kopo</span>
            </h1>

            <p className="font-display text-xl sm:text-2xl md:text-3xl font-black text-[#FFD500] mb-4 text-shadow-yellow tracking-tight">
              Ayam Crispy dan Ayam Goreng Favorit di Kopo, Serang
            </p>

            {/* Sub-headline with High-Contrast Text */}
            <p className="font-sans text-base sm:text-lg text-amber-50 font-medium max-w-2xl mb-8 leading-relaxed drop-shadow-sm">
              🍗 <strong className="text-white font-bold">Crispy di Luar, Juicy di Dalam!</strong> Daging ayam segar pilihan dengan racikan bumbu rempah khas yang meresap sampai ke tulang. Digoreng keemasan dengan standar higienis dan 100% Halal untuk santapan Anda dan keluarga.
            </p>

            {/* CTA Buttons Group */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              {/* WhatsApp Order Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="px-7 py-4 rounded-2xl font-display font-black text-base md:text-lg bg-[#FFD500] text-[#8B0000] hover:bg-[#FFC107] transition-all shadow-xl hover:shadow-yellow-500/40 flex items-center justify-center gap-3 button-press-effect animate-glow"
              >
                <Utensils className="w-6 h-6" />
                <span>Pilih Menu & Pesan Sekarang</span>
              </button>

              {/* Catalog CTA Button */}
              <a
                href="#menu"
                className="px-6 py-4 rounded-2xl font-display font-bold text-base md:text-lg bg-black/25 hover:bg-black/40 text-white border-2 border-white/40 backdrop-blur-sm transition-all flex items-center justify-center gap-2.5 button-press-effect shadow-md"
              >
                <Flame className="w-5 h-5 text-[#FFD500]" />
                <span>Lihat Menu Lengkap</span>
              </a>
            </div>

            {/* Social Proof Mini Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-white/20 text-xs sm:text-sm text-white font-semibold">
              <div className="flex items-center gap-1.5 bg-black/30 px-3.5 py-1.5 rounded-xl border border-white/10 shadow-sm">
                <div className="flex text-[#FFD500]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-black text-white text-sm">4.9/5</span>
                <span className="text-amber-200 font-medium">(10.000+ Ulasan Puas)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#FFD500]" />
                <span className="text-white font-bold">100% Halal MUI & Higienis</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Key (Appetizing Chicken Photo + Mascot Sticker + Promo Badges) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            
            {/* Background Graphic Flare */}
            <div className="relative w-full max-w-[480px] aspect-[4/3.8]">
              
              {/* Halftone Glow Circle Behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD500] to-[#FF9800] rounded-3xl -rotate-2 scale-95 opacity-90 shadow-2xl" />

              {/* Main Food Photography Card */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-neutral-900 rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/hero_fried_chicken.jpg"
                  alt="Ayam Goreng Crispy Renyah Sukaku Fried Chicken"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Photo Caption Overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs font-bold text-[#FFD500] uppercase tracking-wider block drop-shadow">
                      Golden Crispy Signature
                    </span>
                    <p className="font-display font-black text-lg drop-shadow-md">Bumbu Meresap Sampai Tulang!</p>
                  </div>
                  <span className="bg-[#D32F2F] text-white font-display font-bold text-xs px-2.5 py-1 rounded-lg shadow-md border border-white/20">
                    🔥 Fresh Fried
                  </span>
                </div>
              </div>

              {/* Mascot Floating Character Badge */}
              <div className="absolute -bottom-6 -left-6 md:-left-8 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-white p-1 border-4 border-[#FFD500] shadow-2xl animate-float z-20">
                <Image
                  src="/images/mascot_sukaku.jpg"
                  alt="Maskot Ayam Sukaku Fried Chicken"
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* Promo Floating Sticker Tag */}
              <div className="absolute -top-4 -right-4 md:-right-6 bg-[#FFD500] text-[#8B0000] p-3.5 rounded-2xl shadow-2xl border-2 border-white rotate-6 animate-pulse z-20">
                <p className="text-[11px] font-black uppercase tracking-wider text-center leading-tight">
                  Paket Super Hemat
                </p>
                <p className="font-display font-black text-2xl text-center leading-none text-[#D32F2F]">
                  15 RB-AN
                </p>
                <p className="text-[10px] font-bold text-center text-neutral-800">
                  Ayam + Nasi + Es Teh
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Value Highlights Ticker with H2 Tentang Sukaku Fried Chicken */}
        <div className="mt-12 md:mt-16 bg-black/25 backdrop-blur-md p-5 sm:p-7 rounded-3xl border border-white/20 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wide text-[#FFD500] mb-2">
              Tentang Sukaku Fried Chicken
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 font-medium">
              Sukaku Fried Chicken hadir sebagai pilihan kuliner ayam goreng renyah berkualitas di Kopo, Serang. Mengutamakan bahan baku segar, resep rempah khas, dan kebersihan prima demi kepuasan setiap pelanggan.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#FFD500] text-[#8B0000] flex items-center justify-center shrink-0 shadow-md font-bold text-lg">
              🍗
            </div>
            <div>
              <h4 className="font-display font-bold text-sm md:text-base text-white">Ekstra Crispy</h4>
              <p className="text-xs text-amber-200">Kriuk renyah tahan lama</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#FFD500] text-[#8B0000] flex items-center justify-center shrink-0 shadow-md font-bold text-lg">
              ✨
            </div>
            <div>
              <h4 className="font-display font-bold text-sm md:text-base text-white">Minyak Jernih</h4>
              <p className="text-xs text-amber-200">Deep fryer standar modern</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#FFD500] text-[#8B0000] flex items-center justify-center shrink-0 shadow-md font-bold text-lg">
              🕌
            </div>
            <div>
              <h4 className="font-display font-bold text-sm md:text-base text-white">100% Halal</h4>
              <p className="text-xs text-amber-200">Ayam potong segar higienis</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#FFD500] text-[#8B0000] flex items-center justify-center shrink-0 shadow-md font-bold text-lg">
              🚀
            </div>
            <div>
              <h4 className="font-display font-bold text-sm md:text-base text-white">Order Cepat</h4>
              <p className="text-xs text-amber-200">Langsung via WhatsApp</p>
            </div>
          </div>
        </div>
        </div>

      </div>
    </section>
  );
}
