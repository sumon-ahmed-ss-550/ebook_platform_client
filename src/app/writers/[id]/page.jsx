"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  BookOpen,
  Star,
  ArrowLeft,
  Award,
  Book,
  Sparkles,
  Mail,
  Globe,
  Twitter,
} from "lucide-react";
import { FaTwitter } from "react-icons/fa";

// Provided Mock Data
const topWritersData = [
  {
    id: "w1",
    name: "Ahmed Rony",
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
    name: "Sufia Rahman",
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
    name: "Tanvir Hasan",
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
    name: "Nusrat Jahan",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    role: "Verified Author",
    booksCount: 11,
    rating: 4.7,
    badge: "Reader's Choice",
    specialty: "Mystery & Fiction",
  },
];

// Provided Framer Motion animation config
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

export default function WriterProfilePage({ params }) {
  // Safely unwrap async params in Next.js 15 Client Component
  const unwrappedParams = use(params);
  const id = unwrappedParams?.id;

  // Find matching writer or fallback to first entry
  const writer = topWritersData.find((w) => w.id === id) || topWritersData[0];

  // Dynamic book generation based on the writer's specialty
  const mockBooks = [
    {
      id: "b1",
      title: `The Secrets of ${writer.specialty.split(" & ")[0] || "Literature"}`,
      image:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
      price: "$14.99",
      rating: writer.rating,
      reviews: 142,
    },
    {
      id: "b2",
      title: `Chronicles of the Beyond: ${writer.specialty.split(" & ")[1] || "Volume I"}`,
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
      price: "$18.50",
      rating: "4.8",
      reviews: 98,
    },
    {
      id: "b3",
      title: "Echoes from the Masterpiece",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
      price: "$9.99",
      rating: "4.7",
      reviews: 64,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 font-sans">
      {/* Profile Cover Banner */}
      <div className="relative h-60 w-full bg-gradient-to-r from-slate-900 via-teal-950 to-emerald-950 border-b border-slate-800/80 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent" />

        {/* Navigation Back Button */}
        <div className="max-w-6xl mx-auto px-4 pt-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all backdrop-blur-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Profile Content Section */}
      <motion.div
        className="max-w-6xl mx-auto px-4 -mt-24 relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Main Profile Card */}
          <motion.div
            className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col items-center text-center h-fit"
            variants={cardVariants}
          >
            {/* Main Avatar Image Container with Premium Glow Border */}
            <div className="relative w-36 h-36 mb-5 rounded-2xl overflow-hidden p-[3px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-600 shadow-2xl group">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950">
                <Image
                  src={writer.avatar}
                  alt={writer.name}
                  fill
                  sizes="150px"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Writer Identity */}
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight">
              {writer.name}
            </h1>

            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mt-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              {writer.role}
            </p>

            {/* Dynamic Badge */}
            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-lg shadow-sm">
              <Award className="w-4 h-4" />
              {writer.badge}
            </div>

            <div className="w-full border-t border-slate-800/60 my-6" />

            {/* Specialty & Premium Description */}
            <div className="w-full text-left space-y-4">
              <div>
                <h3 className="text-xs uppercase font-bold text-slate-400 tracking-widest">
                  Specialty
                </h3>
                <p className="text-slate-200 font-medium mt-1 text-sm bg-slate-950 px-3 py-2 rounded-xl border border-slate-800/50">
                  {writer.specialty}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase font-bold text-slate-400 tracking-widest">
                  About the Author
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-1.5">
                  A professional publisher and verified creator on Fable.
                  Crafting high-quality literary works with standard industry
                  pacing, specialized storytelling, and immersive worlds inside
                  the realm of {writer.specialty}.
                </p>
              </div>
            </div>

            <div className="w-full border-t border-slate-800/60 my-6" />

            {/* Stats Overview */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/50 text-center">
                <BookOpen className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                <span className="block text-xl font-bold text-slate-100">
                  {writer.booksCount}
                </span>
                <span className="text-xs text-slate-400">Books Published</span>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/50 text-center">
                <Star className="w-5 h-5 text-amber-400 mx-auto mb-1 fill-amber-400/20" />
                <span className="block text-xl font-bold text-slate-100">
                  {writer.rating}
                </span>
                <span className="text-xs text-slate-400">Avg Rating</span>
              </div>
            </div>

            {/* External Social Profiles */}
            <div className="flex items-center gap-3 mt-6">
              <button className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors">
                <FaTwitter className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors">
                <Globe className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Published Books Grid Layout */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
                <Book className="w-5 h-5 text-emerald-400" />
                Books by {writer.name}
              </h2>
              <span className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-md font-medium">
                Released Portfolio ({mockBooks.length})
              </span>
            </div>

            {/* Books Collection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockBooks.map((book) => (
                <motion.div
                  key={book.id}
                  className="bg-slate-900/40 border border-slate-800/80 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 group flex flex-col shadow-lg"
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                >
                  {/* Book Mock Cover Container */}
                  <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      sizes="(max-w-768px) 100vw, 350px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-sm border border-slate-800 px-2.5 py-1 rounded-lg text-xs font-bold text-emerald-400">
                      {book.price}
                    </div>
                  </div>

                  {/* Details and CTAs */}
                  <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                        {writer.specialty.split(" & ")[0]}
                      </span>
                      <h3 className="text-base font-bold text-slate-100 mt-2 line-clamp-1 group-hover:text-emerald-400 transition-colors">
                        {book.title}
                      </h3>

                      <div className="flex items-center gap-1 mt-2 text-xs text-slate-400">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span className="font-semibold text-slate-200">
                          {book.rating}
                        </span>
                        <span>({book.reviews} reviews)</span>
                      </div>
                    </div>

                    <Link
                      href={`/ebook/${book.id}`}
                      className="w-full text-center py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700/60 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-slate-950 hover:border-transparent transition-all shadow-md flex items-center justify-center gap-1.5 group/btn"
                    >
                      View Book Details
                      <Sparkles className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
