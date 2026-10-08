"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Phone, Menu, X, MapPin, Sparkles, Flame } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalQuantity, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Pilihan Menu", href: "#menu" },
    { name: "Promo", href: "#promo", badge: "HOT" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Cara Pesan", href: "#delivery" },
    { name: "Lokasi & Jam", href: "#lokasi" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#B71C1C] text-[#FFF9EE] py-1.5 px-4 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="bg-[#FFD500] text-[#8B0000] px-2 py-0.5 rounded-full font-bold text-[10px] md:text-xs uppercase flex items-center gap-1 shrink-0 animate-pulse">
              <Flame className="w-3 h-3 fill-current" /> Promo Spesial
            </span>
            <span className="truncate">
              🍗 <strong>Paket Super Hemat</strong> Ayam + Nasi + Es Teh Cuma <strong>Rp 15.000!</strong>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs font-semibold shrink-0">
            <span className="flex items-center gap-1 text-[#FFD500]">
              <Sparkles className="w-3.5 h-3.5" /> 100% Halal & Minyak Selalu Jernih
            </span>
            <span className="flex items-center gap-1 text-amber-100">
              <MapPin className="w-3.5 h-3.5 text-[#FFD500]" /> Buka Setiap Hari: 09:00 - 21:00 WIB
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100 py-2.5"
            : "bg-[#D32F2F] text-white py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Mascot */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden bg-[#FFD500] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <Image
                src="/images/mascot_sukaku.jpg"
                alt="Maskot Sukaku Fried Chicken"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span
                  className={`font-display text-xl md:text-2xl font-black tracking-wide leading-none ${
                    isScrolled ? "text-[#D32F2F]" : "text-white"
                  }`}
                >
                  SUKAKU
                </span>
                <span className="bg-[#FFD500] text-[#8B0000] text-[10px] md:text-xs font-black px-1.5 py-0.5 rounded-md leading-none shadow-sm uppercase">
                  Fried Chicken
                </span>
              </div>
              <span
                className={`text-[10px] md:text-xs font-extrabold tracking-widest uppercase ${
                  isScrolled ? "text-amber-700" : "text-[#FFD500]"
                }`}
              >
                Crispy • Gurih • Pasti Suka!
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition-colors relative flex items-center gap-1.5 ${
                  isScrolled
                    ? "text-neutral-800 hover:text-[#D32F2F] hover:bg-amber-50"
                    : "text-white/95 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="bg-[#FFD500] text-[#8B0000] text-[9px] font-black px-1.5 py-0.2 rounded-full leading-tight uppercase animate-bounce">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 bg-[#FFD500] text-[#8B0000] hover:bg-[#FFC107] active:scale-95 transition-all shadow-md button-press-effect"
              aria-label="Keranjang Pesanan"
            >
              <ShoppingBag className="w-5 h-5 fill-current" />
              <span className="hidden sm:inline font-display">Pesanan</span>
              {totalQuantity > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#D32F2F] text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-scale">
                  {totalQuantity}
                </span>
              )}
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/6285175348190?text=Halo%20Sukaku%20Fried%20Chicken,%20saya%20mau%20pesan%20menu%20ayam%20goreng%20crispy%20lezat!"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl font-display font-bold text-sm bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-md active:scale-95 button-press-effect"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Pesan WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg lg:hidden ${
                isScrolled ? "text-neutral-800" : "text-white"
              }`}
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-neutral-900 border-t border-amber-100 px-4 pt-3 pb-5 shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl font-bold text-base text-neutral-800 hover:bg-amber-50 hover:text-[#D32F2F] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="bg-[#D32F2F] text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
              <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsOpen(true);
                  }}
                  className="w-full py-3 rounded-xl font-display font-bold text-center bg-[#FFD500] text-[#8B0000] flex items-center justify-center gap-2 shadow-sm"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Lihat Rincian Keranjang ({totalQuantity})
                </button>
                <a
                  href="https://wa.me/6285175348190?text=Halo%20Sukaku%20Fried%20Chicken,%20saya%20mau%20pesan%20menu%20ayam%20goreng%20crispy!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-display font-bold text-center bg-[#25D366] text-white flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  Order Langsung via WhatsApp CS
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
