"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, BookOpen, Star, ArrowUpRight, Award } from "lucide-react";

// ডামি ডেটা সেট (মাস্টার প্রম্পট আর্কিটেকচার অনুযায়ী ৪ জন টপ রাইটার)
const topWritersData = [
  {
    id: "w1",
    name: "আহমেদ রনি",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    role: "Premium Writer",
    booksCount: 14,
    rating: 4.9,
    badge: "Best Seller",
    specialty: "Sci-Fi & Thriller",
  },
  {
    id: "w2",
    name: "সুফিয়া রহমান",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    role: "Verified Author",
    booksCount: 9,
    rating: 4.8,
    badge: "Rising Star",
    specialty: "Poetry & Literature",
  },
  {
    id: "w3",
    name: "তানভীর হাসান",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    role: "Premium Writer",
    booksCount: 22,
    rating: 4.9,
    badge: "Top Contributor",
    specialty: "History & Research",
  },
  {
    id: "w4",
    name: "নুসরাত জাহান",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    role: "Verified Author",
    booksCount: 11,
    rating: 4.7,
    badge: "Reader's Choice",
    specialty: "Mystery & Fiction",
  },
];

// ফ্রেমর মোশন অ্যানিমেশন কনফিগ
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function TopWriters() {
  return (
    <section className="relative w-full bg-slate-950 py-20 px-4 md:px-8 lg:px-16 overflow-hidden border-b border-slate-900">
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* সেকশন হেডার */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm sm:text-base mb-2">
              <Award className="w-4 h-4" />
              <span>জনপ্রিয় লেখকবৃন্দ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              আমাদের প্ল্যাটফর্মের{" "}
              <span className="bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                সেরা লেখকগণ
              </span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base">
            দেশ-বিদেশের সেরা লেখক ও গবেষকদের মৌলিক ই-বুক এবং ক্রিয়েটিভ রাইটিং
            এক্সপ্লোর করুন এক জায়গায়।
          </p>
        </div>

        {/* রাইটার্স গ্রিড */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {topWritersData.map((writer) => (
            <motion.div
              key={writer.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md flex flex-col items-center text-center justify-between shadow-xl transition-colors duration-300 hover:border-emerald-500/30 hover:bg-slate-900"
            >
              {/* ইউনিক ব্যাজ */}
              <span className="absolute top-4 left-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-2.5 py-1 rounded-full font-medium">
                {writer.badge}
              </span>

              <div className="w-full flex flex-col items-center mt-4">
                {/* প্রোফাইল ইমেজ উইথ কাস্টম হ্যান্ডলিং */}
                <div className="relative w-24 h-24 rounded-full border-2 border-slate-700 p-1 mb-4 group-hover:border-emerald-400 transition-colors duration-300">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
                    {writer.avatar ? (
                      <Image
                        src={writer.avatar}
                        alt={writer.name}
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <User className="w-10 h-10 text-slate-500" />
                    )}
                  </div>
                </div>

                {/* লেখকের নাম ও স্পেশালটি */}
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
                  {writer.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{writer.role}</p>

                <span className="mt-2 inline-block bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-md font-medium">
                  {writer.specialty}
                </span>
              </div>

              {/* স্ট্যাটিস্টিকস ও বাটন পার্ট */}
              <div className="w-full mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-slate-400 text-xs sm:text-sm px-2 mb-4">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-slate-500" />
                    <span>{writer.booksCount}টি বই</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-slate-200 font-medium">
                      {writer.rating}
                    </span>
                  </div>
                </div>

                {/* লেখক প্রোফাইল নেভিগেশন */}
                <Link
                  href={`/writers/${writer.id}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-800 text-white text-sm font-medium py-2.5 px-4 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-slate-950"
                >
                  <span>প্রোফাইল দেখুন</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
