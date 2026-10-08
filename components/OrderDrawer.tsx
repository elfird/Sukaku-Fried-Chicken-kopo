"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, Send, Phone, MapPin, Sparkles, Check, Copy, ShoppingBag, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { useCart } from "@/context/CartContext";
import { OUTLETS } from "@/data/outlets";

export default function OrderDrawer() {
  const {
    cart,
    isOpen,
    setIsOpen,
    selectedOutlet,
    setSelectedOutlet,
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    orderType,
    setOrderType,
    deliveryAddress,
    setDeliveryAddress,
    customerNotes,
    setCustomerNotes,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalQuantity,
    totalAmount,
    generateWhatsAppUrl,
  } = useCart();

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSendToWhatsApp = () => {
    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FFD500", "#D32F2F", "#FF9800", "#25D366"],
      });
    } catch {
      // ignore
    }

    const url = generateWhatsAppUrl();
    window.open(url, "_blank");
  };

  const handleCopyText = () => {
    const url = generateWhatsAppUrl();
    const textParam = new URL(url).searchParams.get("text");
    if (textParam) {
      navigator.clipboard.writeText(textParam);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF9EE] border-l-2 border-amber-200 shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 bg-[#D32F2F] text-white flex items-center justify-between shrink-0 shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FFD500] text-[#8B0000] flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg leading-tight">
                  Pesanan Menu Sukaku
                </h3>
                <p className="text-[11px] text-amber-200 font-medium">
                  {totalQuantity} item • Langsung ke WhatsApp Cabang
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl hover:bg-white/10 text-white transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
            
            {/* 1. Store Info Badge */}
            <div className="bg-white p-3.5 rounded-2xl border border-amber-200 shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFD500]/30 text-[#8B0000] flex items-center justify-center shrink-0 font-bold">
                <MapPin className="w-4 h-4 text-[#D32F2F]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs text-[#8B0000] uppercase tracking-wider">
                  Sukaku Fried Chicken
                </h4>
                <p className="text-[11px] text-neutral-600 font-medium">
                  Buka Setiap Hari: <strong>09:00 - 22:00 WIB</strong>
                </p>
              </div>
            </div>

            {/* 2. Order Type Tabs */}
            <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm space-y-2">
              <label className="font-display font-bold text-xs text-[#8B0000] uppercase tracking-wider block">
                Tipe Pemesanan:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "takeaway", label: "Bungkus (Takeaway)" },
                  { id: "dine_in", label: "Makan di Tempat" },
                  { id: "delivery", label: "Delivery / Kirim" },
                  { id: "event", label: "Katering / Acara" },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setOrderType(type.id as any)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border ${
                      orderType === type.id
                        ? "bg-[#D32F2F] text-white border-[#D32F2F] shadow-sm"
                        : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-amber-300"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Customer Info */}
            <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm space-y-3">
              <div className="space-y-1">
                <label className="font-display font-bold text-xs text-neutral-700">
                  Nama Anda:
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Contoh: Budi Pratama"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:border-[#D32F2F] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-display font-bold text-xs text-neutral-700">
                  Nomor WhatsApp Anda:
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Contoh: 08123456789"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:border-[#D32F2F] focus:outline-none"
                />
              </div>

              {orderType === "delivery" && (
                <div className="space-y-1 animate-fadeIn">
                  <label className="font-display font-bold text-xs text-[#D32F2F]">
                    Alamat Lengkap Pengiriman:
                  </label>
                  <textarea
                    rows={2}
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Nama jalan, nomor rumah, RT/RW, patokan..."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:border-[#D32F2F] focus:outline-none"
                  />
                </div>
              )}
            </div>

            {/* 4. Cart Items List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-bold text-sm text-[#2C1810]">
                  Daftar Menu Dipilih ({totalQuantity})
                </h4>
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs text-red-600 hover:text-red-800 font-bold flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Kosongkan</span>
                  </button>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8 bg-white rounded-2xl border border-amber-200 p-4">
                  <span className="text-3xl mb-1 block">🍗</span>
                  <p className="font-display font-bold text-sm text-neutral-800">
                    Keranjang masih kosong
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Silakan pilih menu lezat di halaman untuk menambahkan pesanan.
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {cart.map((item) => (
                    <div
                      key={item.cartItemId}
                      className="bg-white p-3 rounded-2xl border border-amber-200/80 shadow-sm flex items-center gap-3"
                    >
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-neutral-100 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h5 className="font-display font-bold text-xs text-[#2C1810] truncate">
                          {item.name}
                        </h5>
                        <p className="font-display font-bold text-xs text-[#D32F2F]">
                          Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                        </p>
                        {item.piece && (
                          <p className="text-[10px] text-neutral-500 truncate">
                            Potongan: {item.piece}
                          </p>
                        )}
                        {item.sambal && (
                          <p className="text-[10px] text-neutral-500 truncate">
                            Saus: {item.sambal}
                          </p>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-neutral-100 px-1.5 py-1 rounded-xl">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          className="p-0.5 rounded hover:bg-white text-neutral-700"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-display font-black text-xs px-1 text-neutral-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          className="p-0.5 rounded hover:bg-white text-neutral-700"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="p-1.5 text-neutral-400 hover:text-red-500 transition-colors"
                        aria-label="Hapus"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 5. Additional Notes & Voucher Promo */}
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="font-display font-bold text-xs text-neutral-700">
                  Catatan Pesanan Tambahan:
                </label>
                <input
                  type="text"
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  placeholder="Contoh: Tolong kirim garpu plastik & ekstra tisu..."
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:border-[#D32F2F] focus:outline-none"
                />
              </div>

              {/* Promo Voucher Hint */}
              <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-xs flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[#8B0000] font-semibold text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D32F2F] shrink-0" />
                  <span>Promo: Pesan sekarang & dapatkan sambal khas gratis!</span>
                </div>
              </div>
            </div>

          </div>

          {/* Drawer Footer & Checkout Action */}
          <div className="p-4 sm:p-5 bg-white border-t-2 border-amber-200 shrink-0 space-y-3 shadow-lg">
            {/* Total Calculation */}
            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="font-bold text-neutral-600 block leading-tight">Total Pesanan:</span>
                <span className="text-[11px] text-neutral-400 font-medium">({totalQuantity} porsi menu)</span>
              </div>
              <span className="font-display font-black text-2xl text-[#D32F2F]">
                Rp {totalAmount.toLocaleString("id-ID")}
              </span>
            </div>

            {/* Submit to WhatsApp Button */}
            {cart.length > 0 ? (
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-4 rounded-2xl font-display font-black text-base bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 shadow-lg transition-all button-press-effect"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Kirim Pesanan ke WhatsApp</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(false);
                  const el = document.getElementById("menu");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-3.5 px-4 rounded-2xl font-display font-bold text-sm bg-[#FFD500] text-[#8B0000] hover:bg-[#FFC107] flex items-center justify-center gap-2 shadow-md transition-all button-press-effect"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pilih Menu Sekarang</span>
              </button>
            )}

            {/* Copy Message Text Option */}
            {cart.length > 0 && (
              <div className="flex items-center justify-center">
                <button
                  onClick={handleCopyText}
                  className="text-[11px] font-bold text-neutral-500 hover:text-neutral-800 flex items-center gap-1 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-700">Teks Pesanan Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Format Pesanan WA</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
