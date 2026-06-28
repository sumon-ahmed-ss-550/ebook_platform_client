"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Next.js Optimized Image Component
import {
  Search,
  BookOpen,
  Filter,
  ArrowUpDown,
  Star,
  DollarSign,
  User,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  RefreshCw,
  Layers,
  ShoppingBag,
  CheckCircle2,
  XCircle,
} from "lucide-react"; // Lucide React Icons
import Link from "next/link"; // Next.js Routing
import { motion, AnimatePresence } from "framer-motion"; // Premium Animations

// বর্ধিত প্রিমিয়াম মক ডাটা (ফিল্টার ও পেজিনেশন টেস্ট করার জন্য)
const featuredBooks = [
  {
    id: "1",
    title: "The Chronicles of Nebula",
    author: "Elena Vance",
    genre: "Sci-Fi",
    price: 14.99,
    rating: 4.8,
    reviews: 124,
    availability: "Available",
    createdAt: "2026-06-01",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "2",
    title: "Shadows of the Ancient Throne",
    author: "Marcus Aurel",
    genre: "Fantasy",
    price: 19.99,
    rating: 4.9,
    reviews: 88,
    availability: "Available",
    createdAt: "2026-05-15",
    image:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "3",
    title: "The Silent Witness",
    author: "Sarah Jenkins",
    genre: "Mystery",
    price: 9.99,
    rating: 4.5,
    reviews: 210,
    availability: "Available",
    createdAt: "2026-06-10",
    image:
      "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "4",
    title: "Love in the Time of Pixels",
    author: "Amara Cole",
    genre: "Romance",
    price: 12.49,
    rating: 4.6,
    reviews: 65,
    availability: "Out of Stock",
    createdAt: "2026-04-20",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "5",
    title: "Mastering Next.js 15 & React",
    author: "Dev Linus",
    genre: "Tech",
    price: 29.99,
    rating: 5.0,
    reviews: 340,
    availability: "Available",
    createdAt: "2026-06-25",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "6",
    title: "The Quantum Paradox",
    author: "Elena Vance",
    genre: "Sci-Fi",
    price: 15.99,
    rating: 4.7,
    reviews: 92,
    availability: "Available",
    createdAt: "2026-06-12",
    image:
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=400",
  },
];

export default function BrowseEbooks() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [filteredBooks, setFilteredBooks] = useState(featuredBooks);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const itemsPerPage = 4; // প্রতি পেজে ৪টি করে বই দেখানো হবে

  // ১. Debounced Search ও ফিল্টারিং হ্যান্ডলার (৫৫০ms কার্যকারিতা)
  useEffect(() => {
    setLoading(true);
    const handler = setTimeout(() => {
      let updatedBooks = [...featuredBooks];

      // সার্চ ফিল্টার
      if (searchTerm) {
        updatedBooks = updatedBooks.filter(
          (book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      }

      // জেনার ফিল্টার
      if (selectedGenre !== "All") {
        updatedBooks = updatedBooks.filter(
          (book) => book.genre === selectedGenre,
        );
      }

      // সর্টিং লজিক
      if (sortBy === "price-low") {
        updatedBooks.sort((a, b) => a.price - b.price);
      } else if (sortBy === "price-high") {
        updatedBooks.sort((a, b) => b.price - a.price);
      } else if (sortBy === "rating") {
        updatedBooks.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === "latest") {
        updatedBooks.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
      }

      setFilteredBooks(updatedBooks);
      setPage(1); // ফিল্টার চেঞ্জ হলে পেজ রি-সেট হবে
      setLoading(false);
    }, 550);

    return () => clearTimeout(handler);
  }, [searchTerm, selectedGenre, sortBy]);

  // পেজিনেশন হিসাব-নিকাশ
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const currentBooks = filteredBooks.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const genres = ["All", "Sci-Fi", "Fantasy", "Mystery", "Romance", "Tech"];

  // স্ট্যাগার্ড রিভিল অ্যানিমেশন কনফিগারেশন
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* হেডার সেকশন */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 border-b border-slate-900 pb-8">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-1">
              <Sparkles className="w-4 h-4" /> Discover & Explore
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Browse Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Ebook Library
              </span>
            </h1>
          </div>

          {/* সার্চ ইনপুট */}
          <div className="relative w-full md:w-96">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-900/60 border border-slate-800 rounded-2xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all backdrop-blur-sm"
            />
          </div>
        </div>

        {/* ফিল্টার এবং সর্টিং কন্ট্রোলস */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          {/* জেনার ক্যাটাগরি ট্যাব */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar mask-image">
            <Filter className="w-4 h-4 text-slate-500 shrink-0 hidden sm:block" />
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all shrink-0 border cursor-pointer ${
                  selectedGenre === genre
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* সর্টিং ড্রপডাউন */}
          <div className="flex items-center gap-3 shrink-0 self-end lg:self-auto">
            <span className="flex items-center gap-1.5 text-sm text-slate-400">
              <ArrowUpDown className="w-4 h-4" /> Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-900 border border-slate-800 text-slate-300 rounded-xl px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all cursor-pointer"
            >
              <option value="latest">Latest Releases</option>
              <option value="rating">Top Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* কোর কন্টেন্ট গ্রিড এবং শিমার স্কেলিটন লোডার */}
        <AnimatePresence mode="wait">
          {loading ? (
            /* Premium Shimmer Skeleton Loader (৮টি কার্ড শিমার ইফেক্টসহ) */
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {[...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 h-[420px] animate-pulse flex flex-col justify-between"
                >
                  <div className="w-full h-52 bg-slate-800/60 rounded-xl mb-4" />
                  <div className="space-y-3 flex-1">
                    <div className="h-4 bg-slate-800/60 rounded w-3/4" />
                    <div className="h-3 bg-slate-800/40 rounded w-1/2" />
                    <div className="h-4 bg-slate-800/40 rounded w-1/4 mt-4" />
                  </div>
                  <div className="h-10 bg-slate-800/60 rounded-xl w-full mt-4" />
                </div>
              ))}
            </motion.div>
          ) : currentBooks.length > 0 ? (
            /* আসল বুক গ্রিড লেআউট */
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {currentBooks.map((book) => (
                <motion.div
                  key={book.id}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-slate-700/80 hover:bg-slate-900/70 transition-all duration-300 backdrop-blur-sm"
                >
                  {/* কার্ডের পুরোটা বা ডিরেক্ট ক্লিক নেভিগেশন (ঠিক করা হয়েছে: /ebook/[id]) */}
                  <Link
                    href={`/ebook/${book.id}`}
                    className="block relative cursor-pointer overflow-hidden rounded-xl aspect-[4/5] bg-slate-950 mb-4 shadow-inner"
                  >
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      sizes="(max-w-7xl) 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={book.id === "1"}
                    />
                    <div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase text-indigo-400">
                      {book.genre}
                    </div>
                  </Link>

                  {/* বইয়ের বিবরণ */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/ebook/${book.id}`}>
                        <h3 className="font-bold text-base text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-1 cursor-pointer">
                          {book.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-1 mb-3">
                        <User className="w-3 h-3 text-slate-500" />{" "}
                        {book.author}
                      </p>
                    </div>

                    <div>
                      {/* রেটিং ও মেটা ইনফো */}
                      <div className="flex items-center justify-between border-t border-slate-900/60 pt-3 mt-2">
                        <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          <span className="text-xs font-bold text-amber-400">
                            {book.rating}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            ({book.reviews})
                          </span>
                        </div>

                        {/* স্টক স্ট্যাটাস */}
                        <div
                          className={`flex items-center gap-1 text-[11px] font-semibold ${
                            book.availability === "Available"
                              ? "text-emerald-400"
                              : "text-rose-400"
                          }`}
                        >
                          {book.availability === "Available" ? (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          ) : (
                            <XCircle className="w-3.5 h-3.5" />
                          )}
                          {book.availability}
                        </div>
                      </div>

                      {/* প্রাইস ও নেভিগেশন অ্যাকশন বাটন সেকশন */}
                      <div className="flex items-center justify-between gap-2 mt-4 pt-1">
                        <div className="text-lg font-black text-white flex items-center">
                          <DollarSign className="w-4 h-4 text-emerald-400 -mr-0.5" />
                          {book.price}
                        </div>

                        {/* সংশোধিত Details লিংক বাটন (এটি নিখুঁতভাবে /ebook/[id] তে নিয়ে যাবে) */}
                        <Link
                          href={`/ebook/${book.id}`}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 group-hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/10 hover:shadow-indigo-500/20 transition-all border border-indigo-500/30"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* কোনো বই খুঁজে না পাওয়া গেলে নোটিফিকেশন */
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center py-20 bg-slate-900/20 border border-dashed border-slate-800 rounded-3xl"
            >
              <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-slate-500 mb-4 shadow-xl">
                <RefreshCw className="w-6 h-6 animate-spin-slow" />
              </div>
              <h3 className="text-xl font-bold text-slate-300">
                No Ebooks Found
              </h3>
              <p className="text-sm text-slate-500 max-w-sm mt-1">
                We could not find any books matching your search query or
                selected genre filter. Please try a different combination.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* প্রিমিয়াম পেজিনেশন কন্ট্রোলস */}
        {totalPages > 1 && !loading && (
          <div className="flex items-center justify-center gap-3 mt-14 pt-6 border-t border-slate-900">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5 text-sm font-medium text-slate-400">
              Page{" "}
              <span className="text-white font-bold bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
                {page}
              </span>{" "}
              of <span className="text-slate-300">{totalPages}</span>
            </div>

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
