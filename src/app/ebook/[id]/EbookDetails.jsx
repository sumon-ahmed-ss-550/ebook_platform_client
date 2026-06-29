"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ArrowLeft,
  BookOpen,
  Calendar,
  Globe,
  Layers,
  ShoppingBag,
  ShieldCheck,
  Heart,
  MessageSquare,
  User,
  Sparkles,
  Share2,
} from "lucide-react";

// মক ডাটাবেজ (হোম ও ব্রাউজ পেজের ডাটার সাথে সিংক্রোনাইজড)
const booksDatabase = [
  {
    id: "1",
    title: "The Chronicles of Nebula",
    author: "Elena Vance",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    genre: "Sci-Fi",
    price: 14.99,
    rating: 4.8,
    reviewsCount: 124,
    publishedDate: "June 2026",
    language: "English",
    pages: 412,
    fileSize: "12.4 MB",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=500",
    synopsis:
      "Step into a breathtaking interstellar journey where elite galaxy-bound civilizations collide. Elena Vance delivers a masterfully crafted universe filled with cybernetic enhancements, deep space conspiracies, and an ancient cosmic power waiting to wake up. Follow Captain James Vance as he uncovers the truth behind the dying star nebulae before the entire cosmos descends into a techno-dystopian warfare.",
    authorBio:
      "Elena Vance is an award-winning Sci-Fi novelist and technology enthusiast. With over a decade of storytelling experience, she blends hard science with philosophical human struggles.",
    reviews: [
      {
        id: 1,
        user: "Rahat Chowdhury",
        rating: 5,
        comment:
          "Absolutely brilliant world-building! Highly recommended for any space opera fan.",
        date: "2 days ago",
      },
      {
        id: 2,
        user: "Sarah Jenkins",
        rating: 4,
        comment:
          "Loved the character development, pacing was a bit fast near the middle but the ending made up for it.",
        date: "1 week ago",
      },
    ],
  },
  // প্রয়োজন অনুযায়ী আরো ডাটা এড হতে পারে...
];

export default function EbookDetails({ bookId }) {
  const [activeTab, setActiveTab] = useState("synopsis");
  const [isLiked, setIsLiked] = useState(false);

  // আইডি ম্যাচ করে বই খুঁজে বের করা (ডাটা না থাকলে ১ম টি ফলব্যাক হিসেবে দেখানো)
  const book = booksDatabase.find((b) => b.id === bookId) || booksDatabase[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/browse"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors group text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Browse Market
        </Link>
      </div>

      {/* Main Grid Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side Column: Book Stand & Cover (4 Columns) */}
        <div className="lg:col-span-5 sticky top-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-slate-800 shadow-2xl space-y-6"
          >
            {/* High Definition Premium Book Cover */}
            <div className="relative aspect-3/4 w-full rounded-xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-950">
              <Image
                src={book.image}
                alt={book.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-w-7xl) 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Genre Badge */}
              <span className="absolute top-4 left-4 bg-emerald-500/90 text-slate-950 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                {book.genre}
              </span>
            </div>

            {/* Price tags and actions matrix */}
            <div className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-slate-800/80">
              <div>
                <p className="text-xs text-slate-400">One-time Purchase</p>
                <h3 className="text-3xl font-extrabold text-white mt-0.5">
                  ${book.price}
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-xl border transition-all ${
                    isLiked
                      ? "bg-rose-500/10 border-rose-500/30 text-rose-400"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:text-rose-400"
                  }`}
                >
                  <Heart className="w-5 h-5 fill-current" />
                </button>
                <button className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-emerald-400 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Direct Commercial Call to Actions */}
            <div className="space-y-3">
              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 px-6 rounded-xl transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 group text-base">
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Buy Instantly Now
              </button>
              <button className="w-full bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 font-semibold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                Read Free Sample Preview
              </button>
            </div>

            {/* Guaranteed Secure Info Badge */}
            <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Instant lifetime access via encrypted cloud synchronization.
            </p>
          </motion.div>
        </div>

        {/* Right Side Column: Comprehensive Documentation (7 Columns) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Header Typography Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
              {book.title}
            </h1>

            {/* Author Attribution Meta Block */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-700 shadow-inner">
                  <Image
                    src={book.authorAvatar}
                    alt={book.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs text-slate-400 leading-none">
                    Published by
                  </p>
                  <p className="text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-1">
                    {book.author}
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  </p>
                </div>
              </div>

              {/* Rating Engine Overview */}
              <div className="h-8 w-px bg-slate-800 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-200">
                  {book.rating}
                </span>
                <span className="text-xs text-slate-400">
                  ({book.reviewsCount} structural reviews)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Premium Core Metadata Hardware Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { icon: Calendar, label: "Published", value: book.publishedDate },
              { icon: Globe, label: "Language", value: book.language },
              {
                icon: Layers,
                label: "Pages Count",
                value: `${book.pages} pages`,
              },
              {
                icon: BookOpen,
                label: "Digital File Size",
                value: book.fileSize,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 flex items-center gap-3"
              >
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-emerald-400">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 leading-none">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-slate-200 mt-1.5">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-b border-slate-800 flex gap-6"
          >
            {[
              { id: "synopsis", label: "Synopsis & Plot", icon: BookOpen },
              { id: "author", label: "Meet The Author", icon: User },
              {
                id: "reviews",
                label: `User Reviews (${book.reviews.length})`,
                icon: MessageSquare,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 text-sm font-bold flex items-center gap-2 relative transition-all ${
                  activeTab === tab.id
                    ? "text-emerald-400"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Dynamic Render Sandbox Panel */}
          <div className="min-h-45 bg-slate-900/20 rounded-xl p-2">
            <AnimatePresence mode="wait">
              {activeTab === "synopsis" && (
                <motion.div
                  key="synopsis"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-300 text-base leading-relaxed font-normal space-y-4"
                >
                  <p>{book.synopsis}</p>
                </motion.div>
              )}

              {activeTab === "author" && (
                <motion.div
                  key="author"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-950 border border-slate-700">
                    <Image
                      src={book.authorAvatar}
                      alt={book.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">
                      {book.author}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {book.authorBio}
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "reviews" && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {book.reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-5 space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-400">
                            {rev.user[0]}
                          </div>
                          <span className="text-sm font-semibold text-slate-200">
                            {rev.user}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500">
                          {rev.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-300 text-sm pl-9">
                        {rev.comment}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
