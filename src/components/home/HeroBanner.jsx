"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";

// স্লাইডার ডেটা
const slides = [
  {
    id: 1,
    badge: "Welcome to Fable Library",
    title: "Discover Thousands of Amazing Ebooks",
    subtitle:
      "Connect with talented writers around the world. Read, share, and publish your stories on a modern, premium marketplace.",
    primaryBtn: "Explore Ebooks",
    primaryLink: "/browse",
    secondaryBtn: "Start Writing",
    secondaryLink: "/dashboard",
    gradient: "from-violet-600/20 via-indigo-900/40 to-slate-950",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    badge: "Join the Community",
    title: "Empowering Writers & Passionate Readers",
    subtitle:
      "Turn your imagination into premium ebooks. Sell directly to your readers with zero hassle and absolute control.",
    primaryBtn: "Publish Your Book",
    primaryLink: "/dashboard",
    secondaryBtn: "Learn More",
    secondaryLink: "/about",
    gradient: "from-emerald-600/20 via-teal-900/40 to-slate-950",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    badge: "Weekly Featured",
    title: "Unlock Exclusive Stories & Knowledge",
    subtitle:
      "From mind-bending Sci-Fi to masterclass tech programming guides—find your next favorite book today.",
    primaryBtn: "View Featured",
    primaryLink: "/browse?sort=featured",
    secondaryBtn: "Free Ebooks",
    secondaryLink: "/browse?price=free",
    gradient: "from-fuchsia-600/20 via-pink-900/40 to-slate-950",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto Play Mechanism (5 Seconds interval)
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Framer Motion Animation Variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: (dir) => ({
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  };

  return (
    <div className="relative h-[620px] md:h-[550px] w-full overflow-hidden bg-slate-950 text-white flex items-center border-b border-slate-800">
      {/* Background Neon Gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.1),transparent_50%)]" />

      {/* Slide Container */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className={`absolute inset-0 bg-gradient-to-br ${slides[current].gradient} flex items-center px-6 md:px-16 lg:px-24 z-10`}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-4 md:space-y-6 text-left">
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs md:text-sm font-medium text-purple-300 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
                {slides[current].badge}
              </motion.div>

              {/* Large Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
              >
                {slides[current].title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-slate-400 text-sm md:text-lg max-w-xl font-light leading-relaxed"
              >
                {slides[current].subtitle}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto"
              >
                <Link
                  href={slides[current].primaryLink}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <BookOpen className="w-4 h-4" />
                  {slides[current].primaryBtn}
                </Link>
                <Link
                  href={slides[current].secondaryLink}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium px-6 py-3 rounded-xl border border-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  {slides[current].secondaryBtn}
                </Link>
              </motion.div>
            </div>

            {/* Right Side Visual/Image Card (Glassmorphism Effect) */}
            <div className="hidden lg:col-span-5 lg:flex justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                className="relative p-3 bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md w-[280px] h-[380px] overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60" />
                <img
                  src={slides[current].image}
                  alt="Ebook Showcase"
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              {/* Floating Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left/Right Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-20 p-2.5 rounded-full bg-slate-900/50 hover:bg-slate-800/80 border border-white/10 text-slate-400 hover:text-white transition-all backdrop-blur-md hidden md:block"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 z-20 p-2.5 rounded-full bg-slate-900/50 hover:bg-slate-800/80 border border-white/10 text-slate-400 hover:text-white transition-all backdrop-blur-md hidden md:block"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`h-2 rounded-full transition-all duration-350 ${
              index === current
                ? "w-8 bg-purple-500"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
