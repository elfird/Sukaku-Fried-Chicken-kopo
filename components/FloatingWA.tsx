"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, X, ShoppingBag, MapPin, Send } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function FloatingWA() {
  const { setIsOpen } = useCart();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Quick Interactive Bubble Dialog */}
      {showTooltip && (
        <div className="bg-white p-4 rounded-3xl border-2 border-amber-300 shadow-2xl max-w-xs animate-fadeIn relative text-neutral-800">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2.5 right-2.5 text-neutral-400 hover:text-neutral-700 p-1"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#FFD500] border border-amber-400 shrink-0">
              <Image
                src="/images/mascot_sukaku.jpg"
                alt="Maskot Sukaku"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-display font-bold text-xs text-[#8B0000] leading-none">
                CS Sukaku Fried Chicken
              </p>
              <span className="text-[10px] text-green-600 font-bold flex items-center gap-1 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-ping" />
                Online & Siap Melayani
              </span>
            </div>
          </div>

          <p className="text-xs text-neutral-600 font-medium mb-3">
            Ada pertanyaan seputar menu, promo, atau pesanan katering acara? Yuk chat kami!
          </p>

          <div className="flex flex-col gap-1.5">
            <button
              onClick={() => {
                setShowTooltip(false);
                setIsOpen(true);
              }}
              className="w-full py-2 px-3 rounded-xl bg-[#FFD500] text-[#8B0000] font-display font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Buat Pesanan Cepat</span>
            </button>
            <a
              href="https://wa.me/6285175348190?text=Halo%20Sukaku%20Fried%20Chicken,%20saya%20mau%20tanya%20info%20menu%20dan%20pemesanan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-[#25D366] text-white font-display font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Chat WhatsApp CS</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="relative">
        {/* Animated Ping Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-70 animate-ping pointer-events-none" />

        <button
          onClick={() => setShowTooltip(!showTooltip)}
          className="relative px-4 py-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-display font-bold text-sm flex items-center gap-2.5 shadow-2xl transition-transform active:scale-95 button-press-effect"
          aria-label="Pesan via WhatsApp"
        >
          <Phone className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-bold">Chat & Order WhatsApp</span>
          <span className="sm:hidden font-bold">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
