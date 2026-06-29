"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  BookOpen,
  LayoutDashboard,
  Library,
  History,
  Heart,
  BookPlus,
  BarChart3,
  Wallet,
  Users,
  ShieldAlert,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function Sidebar({ currentRole }) {
  const pathname = usePathname();

  // ১. রোল ভিত্তিক নেভিগেশন মেনু কনফিগারেশন
  const menuItems = {
    Reader: [
      { name: "Overview", icon: LayoutDashboard, path: "/dashboard" },
      { name: "My Library", icon: Library, path: "/dashboard/library" },
      { name: "Purchase History", icon: History, path: "/dashboard/history" },
      { name: "Wishlist", icon: Heart, path: "/dashboard/wishlist" },
    ],
    Writer: [
      { name: "Writer Overview", icon: LayoutDashboard, path: "/dashboard" },
      { name: "Upload New Book", icon: BookPlus, path: "/dashboard/upload" },
      { name: "My Ebooks", icon: BookOpen, path: "/dashboard/my-ebooks" },
      {
        name: "Sales Analytics",
        icon: BarChart3,
        path: "/dashboard/analytics",
      },
      { name: "Earnings & Wallet", icon: Wallet, path: "/dashboard/earnings" },
    ],
    Admin: [
      { name: "Admin Console", icon: LayoutDashboard, path: "/dashboard" },
      { name: "Manage Books", icon: BookOpen, path: "/dashboard/manage-books" },
      { name: "Manage Users", icon: Users, path: "/dashboard/manage-users" },
      {
        name: "Platform Earnings",
        icon: Wallet,
        path: "/dashboard/platform-earnings",
      },
      { name: "System Logs", icon: ShieldAlert, path: "/dashboard/logs" },
    ],
  };

  const activeMenu = menuItems[currentRole] || menuItems.Reader;

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between h-screen sticky top-0 text-slate-300">
      {/* Brand Logo */}
      <div>
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="bg-emerald-500 p-2 rounded-lg text-slate-950">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">
              Fable
            </h1>
            <p className="text-xs text-emerald-400 font-medium">
              {currentRole} Panel
            </p>
          </div>
        </div>

        {/* Dynamic Navigation Links */}
        <nav className="p-4 space-y-1">
          {activeMenu.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link key={index} href={item.path}>
                <div
                  className={`relative flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group cursor-pointer ${
                    isActive
                      ? "text-emerald-400 font-medium"
                      : "hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3 z-10">
                    <item.icon
                      className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? "text-emerald-400" : "text-slate-400 group-hover:text-slate-200"}`}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all ${isActive ? "opacity-100 text-emerald-400" : "text-slate-500"}`}
                  />

                  {/* Active Background Animation */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSidebarTab"
                      className="absolute inset-0 bg-emerald-500/10 border-l-2 border-emerald-500 rounded-xl"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer / Settings & Logout */}
      <div className="p-4 border-t border-slate-800 space-y-1">
        <Link href="/dashboard/settings">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-slate-800/60 text-sm cursor-pointer transition-all">
            <Settings className="w-5 h-5 text-slate-400" />
            <span>Settings</span>
          </div>
        </Link>
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-rose-500/10 text-rose-400 hover:text-rose-300 text-sm cursor-pointer transition-all">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
}
