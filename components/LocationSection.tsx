"use client";

import React from "react";
import { MapPin, Clock, Phone, Navigation, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";

export default function LocationSection() {
  const mapsUrl = "https://maps.app.goo.gl/8WUy1RHQPgeSSPVa9";
  const waUrl = "https://wa.me/6285175348190?text=Halo%20Sukaku%20Fried%20Chicken!%20Saya%20mau%20tanya%20arah%20lokasi%20outlet.";

  const SCHEDULE = [
    { day: "Senin", hours: "09.00 – 21.00 WIB", status: "Buka" },
    { day: "Selasa", hours: "09.00 – 21.00 WIB", status: "Buka" },
    { day: "Rabu", hours: "09.00 – 21.00 WIB", status: "Buka" },
    { day: "Kamis", hours: "09.00 – 21.00 WIB", status: "Buka" },
    { day: "Jumat", hours: "09.00 – 21.00 WIB", status: "Buka" },
    { day: "Sabtu", hours: "09.00 – 21.00 WIB", status: "Buka" },
    { day: "Minggu", hours: "09.00 – 21.00 WIB", status: "Buka" },
  ];

  return (
    <section id="lokasi" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute inset-0 bg-dots-pattern opacity-5 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#FFD500]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFD500] text-[#8B0000] px-4 py-1.5 rounded-full text-xs font-display font-black uppercase tracking-wider mb-3 shadow-sm border border-amber-300">
            <MapPin className="w-3.5 h-3.5" />
            Lokasi & Jam Operasional
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#1F110B] uppercase tracking-tight leading-tight mb-3">
            Lokasi dan Jam Operasional
          </h2>
          <p className="text-neutral-600 font-medium text-sm sm:text-base">
            Nikmati aroma gurih dan kerenyahan ayam goreng panas langsung dari penggorengan kami di Kopo, Serang, Banten.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Store Detail & Address (5 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#FFFBF0] border-2 border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-amber-200">
                <div>
                  <h3 className="font-display text-2xl font-black text-[#1F110B]">
                    Sukaku Fried Chicken
                  </h3>
                  <p className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider mt-0.5">
                    Outlet Resmi Kopo, Serang
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-[#25D366]/15 text-[#137A38] text-xs font-extrabold px-3 py-1.5 rounded-full border border-[#25D366]/30">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  Buka Setiap Hari
                </span>
              </div>

              {/* Info Items */}
              <div className="space-y-4 my-6">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#D32F2F] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                      Alamat Lengkap
                    </p>
                    <p className="text-sm sm:text-base font-bold text-neutral-800 leading-snug mt-0.5">
                      Jl. Raya Nangela, Nanggung, Kecamatan Kopo, Kabupaten Serang, Banten 42178
                    </p>
                    <p className="text-xs text-neutral-500 mt-1 font-mono bg-white px-2 py-0.5 rounded border border-neutral-200 inline-block">
                      Plus Code: <strong className="text-neutral-800">M9V3+FHM</strong>
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                      Telepon / WhatsApp
                    </p>
                    <a
                      href="https://wa.me/6285175348190"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-black text-[#1F110B] hover:text-[#D32F2F] transition-colors mt-0.5 block"
                    >
                      0851-7534-8190
                    </a>
                    <span className="text-xs text-neutral-500">
                      Respon cepat setiap hari 09:00 - 21:00 WIB
                    </span>
                  </div>
                </div>

                {/* Summary Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD500] text-[#8B0000] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                      Total Waktu Operasional
                    </p>
                    <p className="text-sm sm:text-base font-bold text-neutral-800 mt-0.5">
                      09.00 – 21.00 WIB (12 Jam / Hari)
                    </p>
                    <span className="text-xs text-neutral-500">
                      Melayani pesanan dine-in, takeaway, dan delivery via WhatsApp
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-amber-200 flex flex-col sm:flex-row gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-5 py-3.5 rounded-2xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-display font-black text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-red-600/30 transition-all button-press-effect"
              >
                <Navigation className="w-4 h-4" />
                <span>Buka Petunjuk Arah</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-5 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-display font-black text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-green-600/30 transition-all button-press-effect"
              >
                <Phone className="w-4 h-4" />
                <span>Chat Lokasi</span>
              </a>
            </div>
          </div>

          {/* Card 2: Detailed Operational Hours & Highlights (6 cols) */}
          <div className="lg:col-span-6 bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-4 border-b border-neutral-100">
                <Calendar className="w-5 h-5 text-[#D32F2F]" />
                <h3 className="font-display text-xl font-black text-[#1F110B]">
                  Jadwal Jam Operasional Mingguan
                </h3>
              </div>

              {/* Table / Schedule List */}
              <div className="divide-y divide-neutral-100 my-4">
                {SCHEDULE.map((item, idx) => (
                  <div
                    key={item.day}
                    className="py-2.5 flex items-center justify-between text-sm hover:bg-neutral-50 px-2 rounded-lg transition-colors"
                  >
                    <span className="font-bold text-neutral-800">{item.day}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-neutral-600">{item.hours}</span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#137A38] bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                        <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Highlight Box */}
            <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3">
              <div className="text-xs text-neutral-700">
                <strong className="text-[#8B0000] block text-sm font-black mb-0.5">
                  Butuh Pesanan Nasi Kotak / Jumlah Banyak?
                </strong>
                Hubungi kami H-1 via WhatsApp untuk persiapan porsi besar acara Anda.
              </div>
              <a
                href="https://wa.me/6285175348190?text=Halo%20Sukaku%20Fried%20Chicken!%20Saya%20ingin%20konsultasi%20pesanan%20nasi%20kotak%20jumlah%20banyak."
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-3.5 py-2 rounded-xl bg-[#FFD500] text-[#8B0000] font-black text-xs uppercase shadow hover:bg-amber-400 transition-colors"
              >
                Pesan Acara
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
