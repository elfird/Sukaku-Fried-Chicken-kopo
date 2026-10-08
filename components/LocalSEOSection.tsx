"use client";

import React from "react";
import { MapPin, Utensils, Phone, Clock, ArrowRight, ShieldCheck, Heart } from "lucide-react";

export default function LocalSEOSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FFFBF0] relative overflow-hidden border-y border-amber-200/60">
      {/* Decorative Dots Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFD500] text-[#8B0000] px-4 py-1.5 rounded-full text-xs font-display font-black uppercase tracking-wider mb-4 shadow-sm border border-amber-300">
            <MapPin className="w-3.5 h-3.5" />
            Kuliner Lokal Kopo & Serang
          </div>
          
          {/* Exact H2 Requirement */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#1F110B] uppercase tracking-tight mb-4">
            Fried Chicken di Kopo, Serang
          </h2>
          
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-medium">
            Mencari tempat makan yang menyajikan ayam crispy renyah dan gurih dengan harga ramah di kantong? 
            <strong> Sukaku Fried Chicken</strong> hadir sebagai pilihan kuliner favorit untuk masyarakat di wilayah 
            Kecamatan Kopo, Kabupaten Serang, dan sekitarnya.
          </p>
        </div>

        {/* 3 Pillars Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl mb-4">
                🍗
              </div>
              <h3 className="font-display font-bold text-lg text-[#1F110B] mb-2">
                Pilihan Makan Kopo & Sekitarnya
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Cocok untuk santap siang istirahat kerja, makan sore sepulang sekolah, hingga santap malam bersama keluarga di rumah.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-amber-100">
              <a
                href="#menu"
                className="text-xs sm:text-sm font-bold text-[#D32F2F] hover:text-[#B71C1C] flex items-center gap-1.5 group"
              >
                <span>lihat menu Sukaku Fried Chicken</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#D32F2F] flex items-center justify-center font-bold text-xl mb-4">
                📍
              </div>
              <h3 className="font-display font-bold text-lg text-[#1F110B] mb-2">
                Alamat Outlet Resmi
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                Jl. Raya Nangela, Nanggung, Kecamatan Kopo, Kabupaten Serang, Banten 42178.
              </p>
              <p className="text-xs text-neutral-500 mt-2">
                Akses mudah di tepi jalan raya, area parkir memadai untuk roda dua maupun mobil.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-amber-100">
              <a
                href="#lokasi"
                className="text-xs sm:text-sm font-bold text-[#D32F2F] hover:text-[#B71C1C] flex items-center gap-1.5 group"
              >
                <span>lokasi Sukaku Fried Chicken di Kopo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mb-4">
                💬
              </div>
              <h3 className="font-display font-bold text-lg text-[#1F110B] mb-2">
                Pesan Cepat via WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Ingin pesan siap saji atau delivery tanpa antre panjang? Layanan customer service kami siap membantu Anda dengan ramah.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-amber-100">
              <a
                href="https://wa.me/6285175348190?text=Halo%20Sukaku%20Fried%20Chicken!%20Saya%20ingin%20memesan%20ayam%20goreng."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold text-[#137A38] hover:text-[#0E5C2A] flex items-center gap-1.5 group"
              >
                <span>hubungi Sukaku untuk pemesanan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Local Highlight Banner */}
        <div className="bg-gradient-to-r from-[#D32F2F] via-[#B71C1C] to-[#8B0000] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#FFD500] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Halal & Fresh Setiap Hari</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl">
              Cita Rasa Fried Chicken Berkualitas Dekat Kopo
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 max-w-2xl font-medium">
              Dibuat dari daging ayam segar berkualitas dan bumbu rempah pilihan, Sukaku Fried Chicken menjadi pilihan favorit warga Kopo dan sekitarnya.
            </p>
          </div>

          <a
            href="#lokasi"
            className="px-6 py-3.5 rounded-2xl font-display font-bold text-sm bg-[#FFD500] text-[#8B0000] hover:bg-[#FFC107] transition-all shrink-0 flex items-center gap-2 shadow-lg"
          >
            <span>Petunjuk Arah Outlet</span>
            <MapPin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
