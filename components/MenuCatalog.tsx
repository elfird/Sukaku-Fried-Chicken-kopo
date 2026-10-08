"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Plus, Sparkles, Flame, Check, Utensils, SlidersHorizontal } from "lucide-react";
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import ItemModal from "./ItemModal";

export default function MenuCatalog() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  // Filter items based on category and search query
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuickAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // If item has piece options or sambal options, open modal for customization
    if ((item.pieces && item.pieces.length > 0) || (item.sambalOptions && item.sambalOptions.length > 0)) {
      setSelectedItemForModal(item);
      return;
    }

    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    });

    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1500);
  };

  return (
    <section id="menu" className="py-14 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FFD500] text-[#8B0000] px-4 py-1 rounded-full text-xs font-display font-black uppercase tracking-wider mb-3 shadow-sm">
            <Utensils className="w-3.5 h-3.5" />
            Menu Lengkap & Menggugah Selera
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#8B0000] uppercase tracking-tight">
            Menu Sukaku Fried Chicken
          </h2>
          <p className="text-neutral-600 font-medium text-sm sm:text-base mt-2">
            Dari paket hemat kenyang, ayam crispy renyah satuan, geprek lava keju pedas, hingga snack kriuk dan es teh manis segar.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Categories Tab Pill Bar */}
          <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none no-scrollbar">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl font-display font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-[#D32F2F] text-white shadow-md scale-105"
                    : "bg-[#FFF9EE] text-neutral-700 hover:bg-amber-100 border border-amber-200"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama menu..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400 hover:text-neutral-600"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-neutral-50 rounded-3xl border-2 border-dashed border-neutral-200">
            <span className="text-4xl mb-2 block">🍗🔍</span>
            <h3 className="font-display font-bold text-lg text-neutral-800">
              Menu tidak ditemukan
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Coba gunakan kata kunci pencarian lain atau pilih kategori Semua Menu.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#D32F2F] text-white text-xs font-bold font-display"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItemForModal(item)}
                className="bg-white rounded-3xl overflow-hidden border border-amber-200/80 card-shadow-pop flex flex-col cursor-pointer group hover:border-[#D32F2F] transition-all"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} - Sukaku Fried Chicken ayam crispy Kopo`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-[#D32F2F] text-white font-display font-black text-[11px] px-2.5 py-0.5 rounded-full shadow-md">
                      {item.badge}
                    </span>
                  )}

                  {/* Popular Icon */}
                  {item.isPopular && (
                    <span className="absolute top-3 right-3 bg-[#FFD500] text-[#8B0000] font-display font-black text-[10px] px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
                      <Flame className="w-3 h-3 fill-current text-[#D32F2F]" />
                      Favorit
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-black text-base sm:text-lg text-[#2C1810] group-hover:text-[#D32F2F] transition-colors leading-snug line-clamp-2 mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-neutral-500 text-xs line-clamp-2 leading-relaxed font-medium mb-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Pricing & Add Button */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2 mt-auto">
                    <div>
                      {item.originalPrice && (
                        <span className="text-[11px] text-neutral-400 line-through font-bold block leading-none">
                          Rp {item.originalPrice.toLocaleString("id-ID")}
                        </span>
                      )}
                      <span className="font-display font-black text-lg sm:text-xl text-[#D32F2F] leading-tight">
                        Rp {item.price.toLocaleString("id-ID")}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleQuickAdd(item, e)}
                      className={`p-2.5 sm:px-3 sm:py-2 rounded-xl font-display font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm button-press-effect ${
                        recentlyAddedId === item.id
                          ? "bg-[#25D366] text-white"
                          : "bg-[#FFD500] text-[#8B0000] hover:bg-[#FFC107]"
                      }`}
                      aria-label={`Tambah ${item.name}`}
                    >
                      {recentlyAddedId === item.id ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span className="hidden sm:inline">Masuk</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 stroke-[3]" />
                          <span className="hidden sm:inline">Tambah</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Item Customization Modal */}
      {selectedItemForModal && (
        <ItemModal
          item={selectedItemForModal}
          onClose={() => setSelectedItemForModal(null)}
        />
      )}
    </section>
  );
}
