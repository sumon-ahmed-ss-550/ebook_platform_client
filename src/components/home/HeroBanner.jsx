"use client";

import React from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaBookReader,
  FaFeatherAlt,
  FaGlobe,
} from "react-icons/fa";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 lg:py-32 border-b border-border">
      {/* Background Subtle Tech Shapes / Ornaments */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-pink-500 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full text-xs font-medium text-purple-400">
              <FaFeatherAlt className="w-3.5 h-3.5" />
              <span>Next Generation Ebook Marketplace</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Discover & Read <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500">
                Original Ebooks
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Step into Fable—the premium ecosystem tailored for indie writers
              and avid readers alike. Publish globally, track insights, or sink
              into your next obsession flawlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/browse"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:opacity-95 shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Browse Ebooks</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/register"
                className="w-full sm:w-auto px-8 py-3.5 bg-accent text-foreground border border-border font-medium rounded-xl hover:bg-accent/80 transition-colors flex items-center justify-center"
              >
                Join as Writer
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border max-w-md mx-auto lg:mx-0">
              <div>
                <h4 className="text-2xl font-bold text-foreground">10K+</h4>
                <p className="text-xs text-muted-foreground">Premium Books</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground">5K+</h4>
                <p className="text-xs text-muted-foreground">Indie Authors</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground">100K+</h4>
                <p className="text-xs text-muted-foreground">Active Readers</p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Ebook Artwork Showcase */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] bg-gradient-to-tr from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-sm">
              {/* Decorative Book Binder Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/30 to-transparent border-r border-white/5" />

              <div className="space-y-4 relative z-10 pl-4">
                <div className="flex items-center gap-2 text-purple-400 text-xs tracking-widest uppercase font-semibold">
                  <FaBookReader className="w-4 h-4" />
                  <span>Trending Choice</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  The Chronicles <br /> of Fable OS
                </h2>
                <p className="text-xs text-purple-200/70">
                  By Premium Indie Authors
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-purple-300 relative z-10 pl-4 border-t border-purple-500/20 pt-4">
                <span className="flex items-center gap-1.5">
                  <FaGlobe className="w-3.5 h-3.5" /> Digital Release
                </span>
                <span className="px-2 py-1 rounded bg-pink-500/20 text-pink-300 font-semibold border border-pink-500/30">
                  ★ 4.9
                </span>
              </div>

              {/* Artwork glow element inside the container */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-pink-500/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
