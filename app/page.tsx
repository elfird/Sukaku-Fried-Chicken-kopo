"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromoSection from "@/components/PromoSection";
import MenuCatalog from "@/components/MenuCatalog";
import WhyChooseUs from "@/components/WhyChooseUs";
import DeliveryPartners from "@/components/DeliveryPartners";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import OrderDrawer from "@/components/OrderDrawer";
import FloatingWA from "@/components/FloatingWA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen flex flex-col bg-[#FAF7F2]">
        <Navbar />
        <Hero />
        <PromoSection />
        <MenuCatalog />
        <WhyChooseUs />
        <DeliveryPartners />
        <LocationSection />
        <FAQSection />
        <Testimonials />
        <Footer />
        <OrderDrawer />
        <FloatingWA />
      </main>
    </CartProvider>
  );
}
