"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, Check, ShoppingBag, Sparkles } from "lucide-react";
import { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ItemModal({ item, onClose }: ItemModalProps) {
  const { addToCart } = useCart();
  
  const [selectedPiece, setSelectedPiece] = useState<string>(
    item?.pieces && item.pieces.length > 0 ? item.pieces[0] : ""
  );
  const [selectedSambal, setSelectedSambal] = useState<string>(
    item?.sambalOptions && item.sambalOptions.length > 0 ? item.sambalOptions[0] : ""
  );
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity,
      image: item.image,
      piece: selectedPiece || undefined,
      sambal: selectedSambal || undefined,
      notes: notes || undefined,
    });

    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border-2 border-amber-200 max-h-[90vh] flex flex-col">
        
        {/* Modal Header with Image */}
        <div className="relative w-full h-52 sm:h-60 bg-neutral-900 shrink-0">
          <Image
            src={item.image}
            alt={`${item.name} - Sukaku Fried Chicken ayam crispy Kopo`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          {item.badge && (
            <span className="absolute top-3 left-3 bg-[#FFD500] text-[#8B0000] font-display font-black text-xs px-3 py-1 rounded-full shadow">
              {item.badge}
            </span>
          )}

          {/* Title & Price on Image */}
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <h3 className="font-display font-black text-xl sm:text-2xl leading-tight">
              {item.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-display font-black text-2xl text-[#FFD500]">
                Rp {item.price.toLocaleString("id-ID")}
              </span>
              {item.originalPrice && (
                <span className="text-sm line-through text-white/70">
                  Rp {item.originalPrice.toLocaleString("id-ID")}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* Description */}
          <p className="text-neutral-600 text-sm font-medium leading-relaxed">
            {item.description}
          </p>

          {/* Piece Choice (if applicable) */}
          {item.pieces && item.pieces.length > 0 && (
            <div className="space-y-2">
              <label className="font-display font-bold text-sm text-[#2C1810] flex items-center gap-1.5">
                <span>Pilih Potongan Ayam</span>
                <span className="text-xs text-[#D32F2F] font-sans font-bold">(Wajib)</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {item.pieces.map((piece) => (
                  <button
                    key={piece}
                    type="button"
                    onClick={() => setSelectedPiece(piece)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all border-2 flex items-center justify-between ${
                      selectedPiece === piece
                        ? "border-[#D32F2F] bg-red-50 text-[#8B0000]"
                        : "border-neutral-200 hover:border-amber-300 text-neutral-700"
                    }`}
                  >
                    <span>{piece}</span>
                    {selectedPiece === piece && (
                      <Check className="w-4 h-4 text-[#D32F2F] shrink-0 stroke-[3]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sambal / Sauce Choice (if applicable) */}
          {item.sambalOptions && item.sambalOptions.length > 0 && (
            <div className="space-y-2">
              <label className="font-display font-bold text-sm text-[#2C1810] flex items-center gap-1.5">
                <span>Pilihan Sambal / Saus Cocol</span>
                <span className="text-xs text-amber-700 font-sans font-bold">(Pilih Rasa)</span>
              </label>
              <div className="flex flex-col gap-2">
                {item.sambalOptions.map((sauce) => (
                  <button
                    key={sauce}
                    type="button"
                    onClick={() => setSelectedSambal(sauce)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold text-left transition-all border-2 flex items-center justify-between ${
                      selectedSambal === sauce
                        ? "border-[#D32F2F] bg-red-50 text-[#8B0000]"
                        : "border-neutral-200 hover:border-amber-300 text-neutral-700"
                    }`}
                  >
                    <span>{sauce}</span>
                    {selectedSambal === sauce && (
                      <Check className="w-4 h-4 text-[#D32F2F] shrink-0 stroke-[3]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Special Notes */}
          <div className="space-y-1.5">
            <label className="font-display font-bold text-xs text-neutral-700">
              Catatan Khusus (Opsional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Sambal dipisah, minta es teh manisnya dikit, dll."
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:border-[#D32F2F] focus:outline-none bg-neutral-50"
            />
          </div>
        </div>

        {/* Modal Footer / Quantity & Action */}
        <div className="p-4 sm:p-5 bg-amber-50 border-t border-amber-200 flex items-center justify-between gap-3 shrink-0">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2 bg-white px-2 py-1.5 rounded-2xl border border-amber-200 shadow-sm">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1 rounded-lg hover:bg-neutral-100 text-neutral-700"
              aria-label="Kurangi Jumlah"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-display font-black text-base px-2 text-[#2C1810]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1 rounded-lg hover:bg-neutral-100 text-neutral-700"
              aria-label="Tambah Jumlah"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-3.5 px-4 rounded-2xl font-display font-black text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-md button-press-effect ${
              added
                ? "bg-[#25D366] text-white"
                : "bg-[#FFD500] text-[#8B0000] hover:bg-[#FFC107]"
            }`}
          >
            {added ? (
              <>
                <Check className="w-5 h-5 stroke-[3]" />
                <span>Berhasil Masuk!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5" />
                <span>Tambah (Rp {(item.price * quantity).toLocaleString("id-ID")})</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
