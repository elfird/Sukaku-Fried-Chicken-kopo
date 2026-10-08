"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck, ArrowUp } from "lucide-react";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1F110B] text-amber-100/90 pt-16 pb-12 border-t-4 border-[#D32F2F] relative overflow-hidden">
      
      {/* Decorative dot background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-amber-900/50">
          
          {/* Brand Info (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#FFD500] p-0.5 shadow-md">
                <Image
                  src="/images/mascot_sukaku.jpg"
                  alt="Maskot Sukaku Fried Chicken"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-2xl font-black tracking-wide text-white">
                    SUKAKU
                  </span>
                  <span className="bg-[#FFD500] text-[#8B0000] text-xs font-black px-1.5 py-0.5 rounded-md uppercase">
                    Fried Chicken
                  </span>
                </div>
                <p className="text-xs font-extrabold text-[#FFD500] uppercase tracking-widest">
                  Crispy • Gurih • Pasti Suka!
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed max-w-md">
              Penyedia menu ayam goreng crispy keemasan berkualitas tinggi dengan bumbu marinasi khas meresap sampai ke tulang. Berlokasi di Kecamatan Kopo, Kabupaten Serang, Banten. Buka setiap hari untuk melayani Anda!
            </p>

            <div className="inline-flex items-center gap-2 bg-neutral-800/80 px-3.5 py-2 rounded-2xl border border-neutral-700 text-xs text-white">
              <ShieldCheck className="w-4 h-4 text-[#FFD500]" />
              <span className="font-bold">100% Halal MUI Certified & Higienis</span>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-black text-white text-base uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-neutral-300">
              <li>
                <a href="#menu" className="hover:text-[#FFD500] transition-colors flex items-center gap-1.5">
                  <span>🍗</span> Pilihan Menu Lengkap
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-[#FFD500] transition-colors flex items-center gap-1.5">
                  <span>✨</span> Keunggulan Rasa
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-[#FFD500] transition-colors flex items-center gap-1.5">
                  <span>💬</span> Cara Pesan via WhatsApp
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-[#FFD500] transition-colors flex items-center gap-1.5">
                  <span>📍</span> Lokasi & Jam Operasional
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFD500] transition-colors flex items-center gap-1.5">
                  <span>❓</span> Pertanyaan Umum (FAQ)
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-[#FFD500] transition-colors flex items-center gap-1.5">
                  <span>⭐</span> Ulasan Pembeli
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Operational Hours (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="font-display font-black text-white text-base uppercase tracking-wider">
              Layanan Pelanggan & Acara
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FFD500] shrink-0" />
                <span>Jam Buka: <strong>09:00 - 21:00 WIB</strong> (Setiap Hari)</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href="https://wa.me/6285175348190" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD500] transition-colors">
                  WhatsApp: <strong>0851-7534-8190</strong>
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/8WUy1RHQPgeSSPVa9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD500] transition-colors"
                >
                  Jl. Raya Nangela, Nanggung, Kecamatan Kopo,<br />
                  Kabupaten Serang, Banten 42178
                </a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors shadow"
                aria-label="Instagram Sukaku"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-black text-white flex items-center justify-center transition-colors shadow"
                aria-label="TikTok Sukaku"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-.85-.06A6.34 6.34 0 0 0 3.1 15.6a6.34 6.34 0 0 0 9.15 5.62v-7.85a8.28 8.28 0 0 0 5.25 1.87v-3.45a4.85 4.85 0 0 1-2.91-5.1z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/6285175348190"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors shadow"
                aria-label="WhatsApp CS"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="text-center sm:text-left">
            © 2026 <strong>Sukaku Fried Chicken Indonesia</strong>. Seluruh hak cipta dilindungi undang-undang.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-300 hover:text-[#FFD500] font-bold transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
