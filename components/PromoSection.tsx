"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Flame, Clock, Plus, Check, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";
import { PROMO_SPECIALS, MENU_ITEMS } from "@/data/menu";
import { useCart } from "@/context/CartContext";

export default function PromoSection() {
  const { addToCart, setIsOpen } = useCart();
  const [addedItem, setAddedItem] = useState<string | null>(null);

  // Flash sale countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 4, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOrderPromo = (promo: (typeof PROMO_SPECIALS)[0]) => {
    const matchedMenu = MENU_ITEMS.find((m) => m.id === promo.menuId);
    if (matchedMenu) {
      addToCart({
        id: matchedMenu.id,
        name: matchedMenu.name,
        price: matchedMenu.price,
        quantity: 1,
        image: matchedMenu.image,
        notes: `Paket Promo: ${promo.title}`,
      });
    } else {
      addToCart({
        id: promo.id,
        name: promo.title,
        price: parseInt(promo.price.replace(/[^0-9]/g, "")),
        quantity: 1,
        image: promo.image,
      });
    }

    setAddedItem(promo.id);
    setTimeout(() => {
      setAddedItem(null);
    }, 2000);
  };

  return (
    <section id="promo" className="py-14 md:py-20 bg-[#FFF9EE] relative overflow-hidden">
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 bg-dots-pattern-red opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Countdown Timer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b-2 border-amber-200">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#D32F2F] text-white px-3.5 py-1 rounded-full text-xs font-display font-black uppercase tracking-wider mb-2.5 shadow-sm">
              <Flame className="w-3.5 h-3.5 fill-current text-[#FFD500]" />
              Promo Spesial Hari Ini
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#8B0000] uppercase tracking-tight">
              Paket Favorit & Paling Hemat!
            </h2>
            <p className="text-neutral-700 font-medium mt-1 text-sm sm:text-base">
              Porsi kenyang, rasa nendang, harga bersahabat di kantong. Buruan pesan sekarang!
            </p>
          </div>

          {/* Flash Deal Timer Box */}
          <div className="bg-gradient-to-r from-[#D32F2F] to-[#8B0000] text-white p-4 rounded-2xl shadow-lg flex items-center gap-4 shrink-0 border-2 border-[#FFD500]">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#FFD500] animate-spin" style={{ animationDuration: "12s" }} />
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-amber-200 leading-tight">
                  Promo Berakhir Dalam:
                </p>
                <div className="flex items-center gap-1.5 font-display font-black text-xl text-[#FFD500] mt-0.5">
                  <span className="bg-black/30 px-2 py-0.5 rounded-md">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span>:</span>
                  <span className="bg-black/30 px-2 py-0.5 rounded-md">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span>:</span>
                  <span className="bg-black/30 px-2 py-0.5 rounded-md">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROMO_SPECIALS.map((promo, idx) => (
            <div
              key={promo.id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200 card-shadow-pop flex flex-col group relative"
            >
              {/* Badge Ribbons */}
              <div className="absolute top-3.5 left-3.5 z-20 flex flex-col gap-1.5">
                <span className="bg-[#D32F2F] text-white font-display font-black text-xs px-3 py-1 rounded-full shadow-md">
                  {promo.badge}
                </span>
                <span className="bg-[#FFD500] text-[#8B0000] font-display font-black text-[11px] px-2.5 py-0.5 rounded-full shadow-md w-fit">
                  {promo.discountText}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-neutral-100">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block mb-1">
                    {promo.highlight}
                  </span>
                  <h3 className="font-display font-black text-xl text-[#2C1810] group-hover:text-[#D32F2F] transition-colors leading-tight mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-neutral-600 text-sm font-medium mb-4 leading-relaxed">
                    {promo.tagline}
                  </p>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-amber-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-neutral-400 line-through font-bold block">
                      {promo.originalPrice}
                    </span>
                    <span className="font-display font-black text-2xl sm:text-3xl text-[#D32F2F] leading-none">
                      {promo.price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOrderPromo(promo)}
                    className={`px-4 py-3 rounded-2xl font-display font-bold text-sm flex items-center gap-2 transition-all shadow-md button-press-effect ${
                      addedItem === promo.id
                        ? "bg-[#25D366] text-white"
                        : "bg-[#FFD500] text-[#8B0000] hover:bg-[#FFC107]"
                    }`}
                  >
                    {addedItem === promo.id ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Ditambahkan!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 stroke-[3]" />
                        <span>Pesan Paket</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Info */}
        <div className="mt-10 bg-gradient-to-r from-amber-500 via-[#FF9800] to-amber-600 rounded-2xl p-4 sm:p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="text-3xl">🎉</span>
            <div>
              <p className="font-display font-bold text-lg leading-tight">
                Mau Pesanan Khusus Acara / Katering Kotakan?
              </p>
              <p className="text-xs sm:text-sm text-amber-100 font-medium">
                Dapatkan harga spesial untuk ulang tahun, arisan, syukuran kantor, dan event lainnya.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/6281298761100?text=Halo%20Sukaku%20Fried%20Chicken,%20saya%20mau%20konsultasi%20pesanan%20katering%20box%20untuk%20acara"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-display font-bold text-sm bg-white text-[#8B0000] hover:bg-amber-100 transition-colors shrink-0 flex items-center gap-2 shadow"
          >
            <span>Hubungi CS Katering</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
