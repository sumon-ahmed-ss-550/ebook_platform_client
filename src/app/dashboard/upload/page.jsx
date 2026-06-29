"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  BookOpen,
  DollarSign,
  Tag,
  FileText,
  Sparkles,
  Image,
  CheckCircle,
} from "lucide-react";

export default function UploadEbookPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock API request delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-teal-400" /> Publish New Ebook
            </h1>
            <p className="text-slate-400 mt-1 text-sm">
              Upload your masterpiece, set your price, and share it with
              thousands of readers worldwide.
            </p>
          </div>
        </div>

        {success ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-4 my-10"
          >
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/20">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-semibold text-emerald-400">
              Ebook Submitted Successfully!
            </h2>
            <p className="text-slate-400 max-w-md">
              Your ebook is currently under review by the admin panel. Once
              approved, it will be visible on the public store.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-4 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-semibold rounded-lg hover:opacity-90 transition-all text-sm"
            >
              Upload Another Book
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column: Media Upload */}
              <div className="md:col-span-1 space-y-6">
                {/* Cover Image Upload */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                  <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                    <Image className="w-4 h-4 text-teal-400" /> Ebook Cover
                    Image
                  </label>
                  <div className="border-2 border-dashed border-slate-800 hover:border-teal-500/50 rounded-xl p-6 text-center cursor-pointer transition-all bg-slate-950/50 group flex flex-col items-center justify-center min-h-[220px]">
                    <Upload className="w-8 h-8 text-slate-500 group-hover:text-teal-400 mb-2 transition-colors" />
                    <span className="text-xs text-slate-400 group-hover:text-slate-300">
                      Drag & drop cover here or{" "}
                      <span className="text-teal-400">browse</span>
                    </span>
                    <span className="text-[10px] text-slate-600 mt-1">
                      Supports JPG, PNG (Max 5MB)
                    </span>
                  </div>
                </div>

                {/* Main Ebook File Upload */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                  <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-teal-400" /> Ebook
                    Document File
                  </label>
                  <div className="border-2 border-dashed border-slate-800 hover:border-emerald-500/50 rounded-xl p-6 text-center cursor-pointer transition-all bg-slate-950/50 group flex flex-col items-center justify-center min-h-[140px]">
                    <FileText className="w-8 h-8 text-slate-500 group-hover:text-emerald-400 mb-2 transition-colors" />
                    <span className="text-xs text-slate-400 group-hover:text-slate-300">
                      Upload book file (PDF/EPUB)
                    </span>
                    <span className="text-[10px] text-slate-600 mt-1">
                      Max file size 50MB
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Meta Info */}
              <div className="md:col-span-2 space-y-6 bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-slate-500" /> Book Title
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. The Quantum Paradox"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-1.5">
                      <Tag className="w-4 h-4 text-slate-500" /> Genre /
                      Category
                    </label>
                    <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-teal-500 transition-colors">
                      <option value="sci-fi">Sci-Fi & Fantasy</option>
                      <option value="thriller">Mystery & Thriller</option>
                      <option value="tech">Technology & Coding</option>
                      <option value="romance">Romance & Drama</option>
                      <option value="business">Business & Finance</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-slate-500" /> Price
                      (USD)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        step="0.01"
                        required
                        placeholder="0.00 for free"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-teal-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Language
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. English, Bangla"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Short Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide an engaging summary of your ebook to attract readers..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold rounded-lg hover:opacity-90 transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Upload className="w-4 h-4" /> Publish Ebook
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}
