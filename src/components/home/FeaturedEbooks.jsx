"use client";

import { motion } from "framer-motion";
import { Star, ArrowUpRight, BookOpen, User, Tag } from "lucide-react";
import Link from "next/link";

// ৬টি প্রিমিয়াম ফিচারড ই-বুক মক ডেটা
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
    title: "Mastering Next.js 15",
    author: "Devlin Wade",
    genre: "Technology",
    price: 29.99,
    rating: 4.9,
    reviews: 88,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "3",
    title: "The Silent Echoes",
    author: "Sarah Jenkins",
    genre: "Mystery",
    price: 9.99,
    rating: 4.5,
    reviews: 56,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "4",
    title: "SaaS Architecture Blueprint",
    author: "Marcus Aurelius",
    genre: "Business",
    price: 39.99,
    rating: 5.0,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "5",
    title: "Beyond the Horizon",
    author: "Amara Patel",
    genre: "Adventure",
    price: 12.49,
    rating: 4.7,
    reviews: 95,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "6",
    title: "Emotional Intelligence 2.0",
    author: "Daniel Craig",
    genre: "Self-Help",
    price: 0.0, // Free Book
    rating: 4.6,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=400",
  },
];

// Framer Motion Variants (Staggered Animation Effect)
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

export default function FeaturedEbook() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-slate-950 text-white relative">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase block mb-2">
              Curated Collection
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Featured Ebooks
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2 max-w-lg font-light">
              Explore our top-picked premium original creations, carefully
              selected by our global editors.
            </p>
          </div>

          <Link
            href="/browse"
            className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-medium text-sm md:text-base transition-colors group"
          >
            Explore Full Library
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Ebooks Staggered Grid */}
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
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 hover:border-purple-500/30 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-purple-950/10 group"
            >
              <div>
                {/* Book Cover Container */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden mb-5 bg-slate-950 border border-slate-800 flex items-center justify-center">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Genre Badge */}
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-purple-300 text-xs font-medium px-2.5 py-1 rounded-md border border-white/5 flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {book.genre}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-2">
                  <User className="w-3.5 h-3.5" />
                  <span>{book.author}</span>
                </div>

                {/* Book Title */}
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-purple-300 transition-colors line-clamp-1 mb-2">
                  {book.title}
                </h3>

                {/* Rating & Review Summary */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded text-xs font-semibold gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {book.rating.toFixed(1)}
                  </div>
                  <span className="text-xs text-slate-500">
                    ({book.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 mt-2">
                <span className="text-xl font-extrabold text-slate-100">
                  {book.price === 0 ? (
                    <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-md text-sm">
                      Free
                    </span>
                  ) : (
                    `$${book.price}`
                  )}
                </span>

                <Link
                  href={`/ebook/${book.id}`}
                  className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-500 text-slate-200 hover:text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-all duration-300 group-hover:bg-purple-600/80"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Read Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
