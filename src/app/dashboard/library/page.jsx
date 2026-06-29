"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Download, Clock, Star, Search, Layers } from "lucide-react";
import Image from "next/image";

const mockLibraryBooks = [
  {
    id: "1",
    title: "The Chronicles of Nebula",
    author: "Elena Vance",
    genre: "Sci-Fi",
    progress: 75,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "2",
    title: "Mastering Next.js 15",
    author: "Devid Kabir",
    genre: "Tech",
    progress: 100,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "3",
    title: "Shadows in the Deep",
    author: "Sufia Rahman",
    genre: "Thriller",
    progress: 12,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
  },
];

export default function MyLibraryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = mockLibraryBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "reading")
      return matchesSearch && book.progress > 0 && book.progress < 100;
    if (activeTab === "completed")
      return matchesSearch && book.progress === 100;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Total Purchased
              </p>
              <h3 className="text-2xl font-bold mt-0.5">
                {mockLibraryBooks.length} Books
              </h3>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Reading Now
              </p>
              <h3 className="text-2xl font-bold mt-0.5">2 Books</h3>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Completed
              </p>
              <h3 className="text-2xl font-bold mt-0.5">1 Book</h3>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-900 border border-slate-800 p-4 rounded-xl mb-6">
          <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 w-full md:w-auto">
            {["all", "reading", "completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:flex-none px-4 py-1.5 text-xs font-medium rounded-md capitalize transition-all ${
                  activeTab === tab
                    ? "bg-teal-500 text-slate-950 font-semibold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search library..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <motion.div
              layout
              key={book.id}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div className="p-4 flex gap-4">
                <div className="relative w-20 h-28 flex-shrink-0 bg-slate-950 rounded-lg overflow-hidden border border-slate-800">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-col justify-between py-1 overflow-hidden">
                  <div>
                    <span className="text-[10px] bg-slate-950 text-teal-400 border border-slate-800 px-2 py-0.5 rounded-full font-medium">
                      {book.genre}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-200 mt-2 truncate group-hover:text-teal-400 transition-colors">
                      {book.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 truncate">
                      by {book.author}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{book.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              {/* Progress & Quick Actions */}
              <div className="p-4 bg-slate-950/40 border-t border-slate-800/60">
                <div className="mb-3.5">
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Progress</span>
                    <span
                      className={
                        book.progress === 100
                          ? "text-emerald-400"
                          : "text-slate-300"
                      }
                    >
                      {book.progress}% {book.progress === 100 && "Completed"}
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${book.progress === 100 ? "bg-emerald-500" : "bg-teal-500"}`}
                      style={{ width: `${book.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-slate-900 border border-slate-800 text-slate-200 hover:text-teal-400 hover:border-slate-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors">
                    <BookOpen className="w-3.5 h-3.5" /> Read Now
                  </button>
                  <button className="px-3 py-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 rounded-lg text-xs flex items-center justify-center transition-colors">
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
