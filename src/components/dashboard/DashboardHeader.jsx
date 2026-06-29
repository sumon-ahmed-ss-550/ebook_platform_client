"use client";
import React from "react";
import Image from "next/image";
import { Bell, Search, RefreshCw, UserCheck } from "lucide-react";

export default function DashboardHeader({ currentRole, setRole }) {
  const roles = ["Reader", "Writer", "Admin"];

  return (
    <header className="h-20 bg-slate-950 border-b border-slate-800 px-8 flex items-center justify-between sticky top-0 z-40">
      {/* Search Bar Block */}
      <div className="relative w-80 hidden md:block">
        <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search dashboard metrics..."
          className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-300 focus:outline-none focus:border-emerald-500/50 transition-colors"
        />
      </div>

      {/* Actions: Role Switcher & Profile */}
      <div className="flex items-center gap-6 ml-auto">
        {/* Quick Demo Role Switcher */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1">
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                currentRole === r
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/10"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Notifications */}
        <button className="relative p-2 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
        </button>

        {/* User Profile Block */}
        <div className="flex items-center gap-3 border-l border-slate-800 pl-6">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-800 border border-emerald-500/20">
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80"
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-sm font-semibold text-white">Alex Mercer</p>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <UserCheck className="w-3 h-3 text-emerald-400" /> {currentRole}{" "}
              Account
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
