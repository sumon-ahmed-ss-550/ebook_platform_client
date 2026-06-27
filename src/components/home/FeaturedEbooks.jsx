"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShoppingCart, ArrowRight, BookOpen } from "lucide-react";

// ডামি ই-বুক ডাটা (মাস্টার প্রম্পটের রিকোয়ারমেন্ট অনুযায়ী স্ট্রাকচার্ড)
const featuredBooks = [
  {
    id: "1",
    title: "The Chronicles of Nebula",
    author: "Elena Vance",
    genre: "Sci-Fi",
    price: 14.99,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "2",
    title: "Shadows in the Mist",
    author: "Marcus Thorne",
    genre: "Mystery",
    price: 9.99,
    rating: 4.6,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "3",
    title: "The Alchemist's Secret",
    author: "Sophia Laurent",
    genre: "Fantasy",
    price: 19.99,
    rating: 4.9,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "4",
    title: "Mastering Modern Code",
    author: "David K. Black",
    genre: "Tech",
    price: 29.99,
    rating: 4.7,
    reviews: 65,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "5",
    title: "Whispers of the Heart",
    author: "Clara Jenkins",
    genre: "Romance",
    price: 7.49,
    rating: 4.5,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "6",
    title: "The Capital Mindset",
    author: "Robert Sterling",
    genre: "Finance",
    price: 24.99,
    rating: 4.9,
    reviews: 318,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400",
  },
];

// Framer Motion Animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FeaturedEbooks() {
  return (
    <section className="py-20 bg-slate-950 text-white overflow-hidden border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-3 text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              <span>Trending Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-linear-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              Featured Ebooks
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl">
              Explore our handpicked selection of top-selling and high-rated
              digital masterpieces from premium global creators.
            </p>
          </div>

          <Link
            href="/browse"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 group transition-colors duration-200"
          >
            Explore Full Library
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Responsive Ebook Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredBooks.map((book) => (
            <motion.div
              key={book.id}
              variants={cardVariants}
              className="group relative flex flex-col rounded-2xl bg-slate-900 border border-slate-800/60 p-4 transition-all duration-300 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-600/5"
            >
              {/* Ebook Cover Wrapper */}
              <div className="relative aspect-3/4 w-full rounded-xl overflow-hidden bg-slate-950 mb-4 shadow-md group-hover:shadow-2xl transition-all duration-300">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  sizes="(max-w-7xl) 33vw, 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Genre Tag Badge on Image Overlay */}
                <div className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-lg bg-slate-900/80 text-violet-400 backdrop-blur-md border border-white/5">
                  {book.genre}
                </div>
              </div>

              {/* Book Metadata details */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs text-gray-400 font-medium truncate">
                    By {book.author}
                  </span>

                  {/* Rating display */}
                  <div className="flex items-center gap-1 text-amber-400 shrink-0">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-bold text-gray-200">
                      {book.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors duration-200 line-clamp-1 mb-3">
                  {book.title}
                </h3>

                {/* Pricing & CTA Buttons */}
                <div className="mt-auto pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-xl font-black text-white">
                      ${book.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/books/${book.id}`}
                      className="px-4 py-2 text-xs font-bold text-gray-300 bg-slate-950 hover:bg-slate-800 rounded-lg border border-slate-800 transition-all duration-200"
                    >
                      Details
                    </Link>

                    <button
                      onClick={() => alert(`Added "${book.title}" to cart!`)}
                      className="p-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-md shadow-violet-600/10"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
