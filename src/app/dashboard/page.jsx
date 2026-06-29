"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ShoppingBag,
  Landmark,
  Star,
  TrendingUp,
  Users,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function DashboardOverview({ currentRole }) {
  // রোলের উপর ভিত্তি করে মক ডেটা জেনারেট করা
  const dashboardStats = {
    Reader: [
      {
        label: "Ebooks Purchased",
        value: "12",
        icon: ShoppingBag,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
      },
      {
        label: "Active Reading",
        value: "3 Books",
        icon: BookOpen,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
      },
      {
        label: "Total Spent",
        value: "$142.45",
        icon: Landmark,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
      },
      {
        label: "My Reviews Given",
        value: "8 Books",
        icon: Star,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
      },
    ],
    Writer: [
      {
        label: "Total Copies Sold",
        value: "1,240",
        icon: ShoppingBag,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
      },
      {
        label: "Gross Earnings",
        value: "$8,450.00",
        icon: Landmark,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
      },
      {
        label: "My Published Books",
        value: "6 Ebooks",
        icon: BookOpen,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
      },
      {
        label: "Author Rating",
        value: "4.9 / 5.0",
        icon: Star,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
      },
    ],
    Admin: [
      {
        label: "Total Registered Users",
        value: "24,850",
        icon: Users,
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
      },
      {
        label: "Total Platform Ebooks",
        value: "3,120",
        icon: BookOpen,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
      },
      {
        label: "Platform Revenue (10%)",
        value: "$12,490",
        icon: Landmark,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
      },
      {
        label: "Pending Approvals",
        value: "14 Books",
        icon: FileText,
        color: "text-rose-400",
        bg: "bg-rose-500/10",
      },
    ],
  };

  const currentStats = dashboardStats[currentRole] || dashboardStats.Reader;

  // অ্যানিমেশন ভেরিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="space-y-8 text-slate-300">
      {/* Header Notification Title */}
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Welcome Back, Alex!
        </h2>
        <p className="text-sm text-slate-400">
          Here your Fable {currentRole} marketplace activity report for today.
        </p>
      </div>

      {/* 1. Analytics Stats Grid */}
      <motion.div
        key={currentRole} // রোল চেঞ্জ হলে যাতে অ্যানিমেশন আবার রান করে
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {currentStats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between shadow-xl relative overflow-hidden group hover:border-slate-700 transition-colors"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
              <h3 className="text-3xl font-bold text-white tracking-tight">
                {stat.value}
              </h3>
            </div>
            <div
              className={`p-4 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-200`}
            >
              <stat.icon className="w-6 h-6" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 2. Visual Performance Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mock Chart Area (Left & Middle Columns) */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-md font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" /> Platform
                Growth & Activity
              </h4>
              <p className="text-xs text-slate-500">
                Real-time performance metrics monitored over current months
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg font-medium">
              Monthly View
            </span>
          </div>

          {/* Premium Tailwind Simulated Chart Bars */}
          <div className="h-56 flex items-end gap-3 px-2 pt-4 border-b border-l border-slate-800">
            {[45, 75, 55, 90, 65, 100, 80, 95, 60, 85, 70, 110].map(
              (barHeight, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer"
                >
                  <div
                    style={{ height: `${barHeight}%` }}
                    className="w-full bg-gradient-to-t from-emerald-600/60 to-emerald-400 rounded-t-md group-hover:from-emerald-500 group-hover:to-teal-300 transition-all duration-300 relative"
                  >
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[10px] text-white px-1.5 py-0.5 rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                      +{barHeight}%
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    M{idx + 1}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Recent Actions / Transactions (Right Column) */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col">
          <h4 className="text-md font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Recent Updates
          </h4>
          <div className="space-y-4 flex-1 overflow-y-auto pr-1">
            {[
              {
                title: "System check completed successfully",
                time: "2 mins ago",
              },
              {
                title: "New book 'Nebula' approved for release",
                time: "1 hour ago",
              },
              {
                title: "Payout transaction of $450 processed",
                time: "5 hours ago",
              },
              {
                title: "Database cluster scaling auto-triggered",
                time: "1 day ago",
              },
            ].map((update, i) => (
              <div
                key={i}
                className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1 hover:border-slate-800 transition-colors"
              >
                <p className="text-xs font-medium text-slate-300">
                  {update.title}
                </p>
                <span className="text-[10px] text-slate-500 font-mono block">
                  {update.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
