"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image"; // Next.js Image Component ইম্পোর্ট করা হয়েছে

// টেস্টামোনিয়াল এবং রাইটার ডেটা
const TESTIMONIALS = [
  {
    id: 1,
    name: "Ahsan Habib",
    role: "Best-Selling Sci-Fi Writer",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "Fable has completely transformed how I publish my books. The writer dashboard is intuitive, and getting paid via Stripe is incredibly fast and secure.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Avid Reader & Reviewer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "As a reader, finding high-quality original ebooks has never been easier. The platform's dark mode makes late-night reading extremely comfortable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tanvir Rahman",
    role: "Mystery & Thriller Novelist",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "The community on Fable is amazing. The feedback loop from direct readers helps me improve my stories in real-time. Highly recommended for new indie authors!",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-indigo-400 uppercase"
          >
            Community Voices
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-4xl font-bold bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
          >
            Loved by Readers & Writers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 max-w-xl mx-auto"
          >
            Do not just take our word for it. Here is what our growing community
            of authors and book lovers have to say.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="relative flex flex-col justify-between p-8 rounded-2xl border border-slate-900 bg-slate-900/40 backdrop-blur-md hover:border-slate-800 hover:bg-slate-900/60 transition-all duration-300"
            >
              {/* Quote Icon Background */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-slate-800/40 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-slate-300 italic leading-relaxed relative z-10">
                  {item.quote}
                </p>
              </div>

              {/* User Info / Profile Section */}
              <div className="mt-8 flex items-center space-x-4 border-t border-slate-900/60 pt-4">
                {/* HTML <img> ট্যাগ পরিবর্তন করে Next.js <Image /> Component ব্যবহার করা হয়েছে */}
                <div className="relative w-12 h-12 overflow-hidden rounded-full ring-2 ring-indigo-500/20">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48} // w-12 = 48px
                    height={48} // h-12 = 48px
                    className="object-cover"
                    priority={item.id === 1} // প্রথম ইমেজটিকে ফাস্ট লোড করার জন্য অপ্টিমাইজেশন
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
