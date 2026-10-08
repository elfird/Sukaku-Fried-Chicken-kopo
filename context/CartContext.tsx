"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { STORE, OUTLETS, Outlet, MAIN_CS_WHATSAPP } from "@/data/outlets";


export interface CartItem {
  cartItemId: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  piece?: string;
  sambal?: string;
  notes?: string;
}

interface CartContextType {
  cart: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedOutlet: Outlet;
  setSelectedOutlet: (outlet: Outlet) => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  customerPhone: string;
  setCustomerPhone: (phone: string) => void;
  orderType: "takeaway" | "dine_in" | "delivery" | "event";
  setOrderType: (type: "takeaway" | "dine_in" | "delivery" | "event") => void;
  deliveryAddress: string;
  setDeliveryAddress: (address: string) => void;
  customerNotes: string;
  setCustomerNotes: (notes: string) => void;
  addToCart: (item: Omit<CartItem, "cartItemId">) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  totalQuantity: number;
  totalAmount: number;
  generateWhatsAppUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOutlet, setSelectedOutlet] = useState<Outlet>(OUTLETS[0]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderType, setOrderType] = useState<"takeaway" | "dine_in" | "delivery" | "event">("takeaway");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [customerNotes, setCustomerNotes] = useState("");

  // Load cart from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sukaku_cart");
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {
      // ignore storage error
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("sukaku_cart", JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (newItem: Omit<CartItem, "cartItemId">) => {
    const itemKey = `${newItem.id}-${newItem.piece || "none"}-${newItem.sambal || "none"}-${newItem.notes || "none"}`;
    
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.cartItemId === itemKey);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, { ...newItem, cartItemId: itemKey }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const generateWhatsAppUrl = () => {
    const targetWa = MAIN_CS_WHATSAPP;
    
    const orderTypeLabel = {
      takeaway: "Bungkus / Takeaway",
      dine_in: "Makan di Tempat (Dine-in)",
      delivery: "Kirim / Delivery",
      event: "Pesanan Acara / Katering",
    }[orderType];

    let message = `Halo Sukaku Fried Chicken! 🍗\n`;
    message += `Saya ingin memesan menu lezat Sukaku:\n\n`;
    message += `🏪 *Toko:* Sukaku Fried Chicken - Kec. Kopo, Kab. Serang, Banten\n`;
    message += `📌 *Tipe Pesanan:* ${orderTypeLabel}\n`;
    if (customerName) {
      message += `👤 *Nama Pemesan:* ${customerName}\n`;
    }
    if (customerPhone) {
      message += `📱 *No. HP/WA:* ${customerPhone}\n`;
    }
    if (orderType === "delivery" && deliveryAddress) {
      message += `🏠 *Alamat Pengiriman:* ${deliveryAddress}\n`;
    }
    message += `\n📋 *Rincian Pesanan:*\n`;

    if (cart.length === 0) {
      message += `- (Belum ada menu di keranjang, saya ingin tanya menu rekomendasi)\n`;
    } else {
      cart.forEach((item, idx) => {
        const itemTotal = (item.price * item.quantity).toLocaleString("id-ID");
        message += `${idx + 1}. *${item.name}* (x${item.quantity}) - Rp ${itemTotal}\n`;
        if (item.piece) message += `   • Potongan: ${item.piece}\n`;
        if (item.sambal) message += `   • Sambal/Saus: ${item.sambal}\n`;
        if (item.notes) message += `   • Catatan: ${item.notes}\n`;
      });
      message += `\n💰 *Total Estimasi:* Rp ${totalAmount.toLocaleString("id-ID")}\n`;
    }

    if (customerNotes) {
      message += `\n💬 *Catatan Tambahan:* ${customerNotes}\n`;
    }

    message += `\nMohon diproses ya Kak, terima kasih! Pasti Suka! ✨🍗`;

    return `https://wa.me/${targetWa}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
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
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalQuantity,
        totalAmount,
        generateWhatsAppUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
