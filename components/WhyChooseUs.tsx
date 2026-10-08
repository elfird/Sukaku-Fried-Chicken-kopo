"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, Flame, HeartHandshake, CheckCircle2, XCircle, Award } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "🍗",
      title: "Pasti Gurih & Lezat",
      description:
        "Bumbu rempah rahasia khas Nusantara yang dimarinasi khusus sehingga meresap sempurna sampai ke serat daging dan tulang.",
      badge: "RASA JUARA",
      color: "from-amber-500 to-red-500",
    },
    {
      icon: "🕌",
      title: "Bahan 100% Halal & Higienis",
      description:
        "Menggunakan daging ayam potong segar setiap hari bersertifikat Halal MUI dengan standar sanitasi dapur yang bersih dan steril.",
      badge: "TERJAMIN",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: "✨",
      title: "Minyak Selalu Jernih & Segar",
      description:
        "Digoreng menggunakan mesin deep fryer otomatis dengan kontrol suhu presisi. Minyak rutin diganti berkala sehingga tidak seret dan bebas bau tengik.",
      badge: "STANDAR TINGGI",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: "💰",
      title: "Harga Super Terjangkau",
      description:
        "Rasa dan kualitas setara restoran ternama dengan harga bersahabat mulai 10 ribuan. Porsi kenyang, cocok untuk pelajar hingga keluarga.",
      badge: "HEMAT KENYANG",
      color: "from-red-500 to-rose-600",
    },
  ];

  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-gradient-to-b from-[#FFF9EE] via-[#FFF3D6] to-[#FFF9EE] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-dots-pattern-red opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#D32F2F] text-white px-4 py-1 rounded-full text-xs font-display font-black uppercase tracking-wider mb-3 shadow-md">
            <Award className="w-3.5 h-3.5 fill-current text-[#FFD500]" />
            Keunggulan Sukaku Fried Chicken
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#8B0000] uppercase tracking-tight">
            Kenapa Harus Sukaku Fried Chicken?
          </h2>
          <p className="text-neutral-700 font-medium text-sm sm:text-base mt-2">
            Komitmen kami menghadirkan ayam goreng terenak, paling renyah, dan paling higienis untuk keluarga Indonesia.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-6 border-2 border-amber-200 card-shadow-pop flex flex-col justify-between relative group hover:border-[#D32F2F] transition-all"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF9EE] border border-amber-200 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-display font-black px-2.5 py-1 rounded-full bg-amber-100 text-[#8B0000] uppercase">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="font-display font-black text-xl text-[#2C1810] mb-2 leading-snug group-hover:text-[#D32F2F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Bottom line accent */}
              <div className="mt-5 pt-3 border-t border-amber-100 flex items-center gap-1.5 text-xs font-bold text-amber-700">
                <Sparkles className="w-3.5 h-3.5 text-[#FF9800]" />
                <span>Pasti Suka Jaminannya!</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-xl max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#8B0000] uppercase">
              Bandingkan Kualitasnya
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">
              Lihat perbedaan nyata antara Sukaku Fried Chicken dan ayam goreng gerobakan biasa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sukaku Card */}
            <div className="bg-[#FFF9EE] p-5 rounded-2xl border-2 border-[#D32F2F] relative shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#D32F2F] text-white p-1 rounded-lg">
                  <Award className="w-4 h-4" />
                </span>
                <h4 className="font-display font-black text-lg text-[#D32F2F]">
                  Sukaku Fried Chicken ✨
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-neutral-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Minyak goreng selalu bening standar deep fryer modern</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Bumbu rempah meresap sampai ke tulang & daging tetap juicy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Kerenyahan ekstra tahan hingga berjam-jam</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Saus & sambal bervariasi (Geprek, Keju, Lava, BBQ)</span>
                </li>
              </ul>
            </div>

            {/* Ordinary Fried Chicken Card */}
            <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200 text-neutral-500">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-neutral-300 text-neutral-700 p-1 rounded-lg">
                  <XCircle className="w-4 h-4" />
                </span>
                <h4 className="font-display font-bold text-lg text-neutral-700">
                  Ayam Goreng Biasa
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-500">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Minyak sering dipakai berulang kali hingga hitam & bau</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Bumbu hanya di kulit luar, daging bagian dalam hambar/kering</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Cepat lembek dan berminyak jika dibungkus</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Pilihan sambal terbatas hanya saus sachet biasa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
