"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle, ExternalLink } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  link?: { text: string; url: string };
}

const FAQS: FAQItem[] = [
  {
    question: "Di mana lokasi Sukaku Fried Chicken?",
    answer:
      "Sukaku Fried Chicken berlokasi di Jl. Raya Nangela, Nanggung, Kecamatan Kopo, Kabupaten Serang, Banten 42178. Lokasi strategis dan mudah diakses kendaraan.",
    link: {
      text: "Buka Petunjuk Arah Google Maps",
      url: "https://maps.app.goo.gl/8WUy1RHQPgeSSPVa9",
    },
  },
  {
    question: "Apakah Sukaku menyediakan ayam crispy?",
    answer:
      "Ya. Sukaku Fried Chicken menyediakan berbagai pilihan menu ayam crispy, ayam goreng keemasan, geprek lava keju, hingga aneka snack pelengkap.",
  },
  {
    question: "Bagaimana cara memesan Sukaku Fried Chicken?",
    answer:
      "Untuk informasi menu dan pemesanan, pelanggan dapat menghubungi Sukaku Fried Chicken melalui WhatsApp yang tersedia di website.",
    link: {
      text: "Chat WhatsApp Sekarang (0851-7534-8190)",
      url: "https://wa.me/6285175348190?text=Halo%20Sukaku%20Fried%20Chicken!%20Saya%20mau%20pesan.",
    },
  },
  {
    question: "Jam buka Sukaku Fried Chicken?",
    answer:
      "Sukaku Fried Chicken buka setiap hari dari hari Senin hingga Minggu, mulai pukul 09:00 hingga 21:00 WIB.",
  },
  {
    question: "Berapa harga menu di Sukaku Fried Chicken?",
    answer:
      "Harga menu Sukaku Fried Chicken sangat terjangkau mulai dari Rp 10.000 hingga Rp 65.000. Tersedia Paket Super Hemat (Ayam + Nasi + Es Teh) hanya Rp 15.000!",
  },
  {
    question: "Apakah Sukaku Fried Chicken 100% Halal?",
    answer:
      "Ya, Sukaku Fried Chicken 100% Halal dan Higienis. Menggunakan daging ayam segar harian yang dipotong sesuai syariat Islam dan diproses secara bersih.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFD500] text-[#8B0000] px-4 py-1.5 rounded-full text-xs font-display font-black uppercase tracking-wider mb-3 shadow-sm border border-amber-300">
            <HelpCircle className="w-3.5 h-3.5" />
            Pertanyaan Umum (FAQ)
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#1F110B] uppercase tracking-tight leading-tight mb-3">
            FAQ Sukaku Fried Chicken
          </h2>
          <p className="text-neutral-600 font-medium text-sm sm:text-base">
            Temukan jawaban cepat seputar lokasi, menu, jam operasional, dan cara pemesanan Sukaku Fried Chicken.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? "bg-white border-[#D32F2F] shadow-md"
                    : "bg-white/80 border-amber-200/70 hover:bg-white hover:border-amber-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#1F110B] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#D32F2F] text-white rotate-180"
                        : "bg-amber-100 text-[#8B0000]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-neutral-700 leading-relaxed border-t border-neutral-100">
                    <p>{faq.answer}</p>
                    {faq.link && (
                      <div className="mt-3">
                        <a
                          href={faq.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#D32F2F] hover:text-[#B71C1C] hover:underline"
                        >
                          <span>{faq.link.text}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-10 p-6 rounded-3xl bg-white border border-amber-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-black text-lg text-[#1F110B]">
              Masih punya pertanyaan lain?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">
              Tim Sukaku Fried Chicken siap melayani dan menjawab pertanyaan Anda via WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/6285175348190?text=Halo%20Sukaku%20Fried%20Chicken!%20Saya%20ingin%20bertanya%20informasi%20lebih%20lanjut."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-display font-black text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2 shadow-md hover:shadow-green-600/30 transition-all shrink-0 button-press-effect"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
