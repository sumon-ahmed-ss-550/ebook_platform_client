"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  BookOpen,
  ShieldAlert,
  Heart,
  Rocket,
  Sparkles,
  Ghost,
  Flame,
  Compass,
} from "lucide-react";

// জেনার ডেটা এবং তাদের নির্দিষ্ট ডিজাইন কনফিগারেশন
const GENRES = [
  {
    id: "fiction",
    name: "Fiction",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "mystery",
    name: "Mystery",
    icon: ShieldAlert,
    color: "from-purple-600 to-slate-900",
  },
  {
    id: "romance",
    name: "Romance",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "sci-fi",
    name: "Sci-Fi",
    icon: Rocket,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "fantasy",
    name: "Fantasy",
    icon: Sparkles,
    color: "from-amber-500 to-orange-600",
  },
  { id: "horror", name: "Horror", icon: Ghost, color: "from-red-700 to-black" },
  {
    id: "thriller",
    name: "Thriller",
    icon: Flame,
    color: "from-orange-500 to-red-600",
  },
  {
    id: "adventure",
    name: "Adventure",
    icon: Compass,
    color: "from-emerald-500 to-teal-600",
  },
];

// Framer Motion এনিমেশন কনফিগারেশন
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function EbookGenres() {
  const router = useRouter();

  const handleGenreClick = (genreId) => {
    // জেনার ফিল্টার সহ ব্রাউজ পেজে রিডাইরেক্ট
    router.push(`/browse?genre=${genreId}`);
  };

  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
          >
            Explore by Genres
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-400 max-w-md mx-auto"
          >
            Find your next favorite story by diving into our curated book
            categories.
          </motion.p>
        </div>

        {/* Genres Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {GENRES.map((genre) => {
            const Icon = genre.icon;
            return (
              <motion.div
                key={genre.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleGenreClick(genre.id)}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 cursor-pointer hover:border-slate-700 transition-colors backdrop-blur-sm"
              >
                {/* Background Glow Effect */}
                <div
                  className={`absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-gradient-to-br ${genre.color} opacity-10 blur-xl group-hover:opacity-25 transition-opacity duration-300`}
                />

                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon Container */}
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${genre.color} text-white shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Genre Name */}
                  <h3 className="font-semibold text-lg text-slate-200 group-hover:text-white transition-colors">
                    {genre.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
