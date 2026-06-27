"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedEbooks from "@/components/home/FeaturedEbooks";
import TopWriters from "@/components/home/TopWriters";
import EbookGenres from "@/components/home/EbookGenres";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  // স্ক্রল অ্যানিমেশনের জন্য সাধারণ কন্টেইনার ভ্যারিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Section 1: Hero Banner */}
      <HeroBanner />

      {/* অন্যান্য সেকশনগুলোকে ফ্রেমর মোশন দিয়ে স্মুথলি স্ক্রল রিভিল করার কন্টেইনার */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-24 pb-24"
      >
        {/* Section 2: Featured Ebooks */}
        <section className="container mx-auto px-4 md:px-6">
          <FeaturedEbooks />
        </section>

        {/* Section 3: Top Writers */}
        <section className="container mx-auto px-4 md:px-6">
          <TopWriters />
        </section>

        {/* Section 4: Ebook Genres */}
        <section className="container mx-auto px-4 md:px-6">
          <EbookGenres />
        </section>

        {/* Section 5: Testimonials / Featured Writers Review */}
        <section className="container mx-auto px-4 md:px-6">
          <Testimonials />
        </section>
      </motion.div>
    </main>
  );
}
