"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, Heart, CheckCircle2, Sparkles, MessageCircleHeart } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 md:py-24 bg-[#FFF9EE] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dots-pattern-red opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with aggregate score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#D32F2F] text-white px-4 py-1 rounded-full text-xs font-display font-black uppercase tracking-wider mb-3 shadow-md">
              <MessageCircleHeart className="w-3.5 h-3.5 fill-current text-[#FFD500]" />
              Kata Pencinta Kuliner
            </div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#8B0000] uppercase tracking-tight">
              Apa Kata Mereka Tentang Sukaku?
            </h3>
            <p className="text-neutral-700 font-medium text-sm sm:text-base mt-2">
              Ulasan jujur dari pelanggan setia Sukaku Fried Chicken di berbagai kota.
            </p>
          </div>

          {/* Rating Snapshot Card */}
          <div className="bg-white p-4 sm:p-5 rounded-3xl border-2 border-amber-300 shadow-xl flex items-center gap-4 shrink-0">
            <div className="text-center pr-4 border-r border-amber-200">
              <span className="font-display font-black text-3xl sm:text-4xl text-[#D32F2F] block leading-none">
                4.9
              </span>
              <span className="text-[10px] uppercase font-bold text-neutral-500 mt-1 block">
                Skor Rata-Rata
              </span>
            </div>
            <div>
              <div className="flex text-[#FFD500] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-neutral-800">
                10.000+ Pelanggan Puas & Terus Kembali!
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200 card-shadow-pop flex flex-col justify-between group hover:border-[#D32F2F] transition-all relative"
            >
              <div>
                {/* Quote Icon & Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-[#FFD500] text-[#8B0000] text-[11px] font-display font-black px-3 py-1 rounded-full uppercase shadow-sm">
                    {testi.tag}
                  </span>
                  <div className="flex text-[#FFD500]">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-medium mb-6 italic">
                  &ldquo;{testi.comment}&rdquo;
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="pt-4 border-t border-amber-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-300 shrink-0">
                    <Image
                      src={testi.avatar}
                      alt={testi.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#2C1810] leading-snug flex items-center gap-1">
                      {testi.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600 inline" />
                    </h4>
                    <p className="text-[11px] text-neutral-500 font-medium">
                      {testi.location} • {testi.role}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] text-neutral-400 font-bold shrink-0">
                  {testi.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
