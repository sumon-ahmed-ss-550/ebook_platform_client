"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  BookOpen,
  LogIn,
  LayoutDashboard,
  Home,
  Book,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // ইউজার লগইন স্টেট ট্র্যাকিংয়ের জন্য ডামি ডাটা (পরবর্তীতে রিয়েল অথেনটিকেশনের সাথে কানেক্ট হবে)
  const [user, setUser] = useState(null);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    {
      name: "Browse Ebooks",
      href: "/browse",
      icon: <Book className="w-4 h-4" />,
    },
  ];

  // একটিভ রুট হাইলাইট করার হেল্পার ফাংশন
  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Site Name */}
          <div className="shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-2xl tracking-tight text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500"
            >
              <BookOpen className="w-7 h-7 text-purple-500" />
              <span>Fable</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-purple-500 ${
                  isActive(link.href)
                    ? "text-purple-500"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Role-Based Dashboard Link (যদি ইউজার লগইন থাকে) */}
            {user && (
              <Link
                href="/dashboard"
                className={`text-sm font-medium transition-colors hover:text-purple-500 flex items-center gap-1 ${
                  isActive("/dashboard")
                    ? "text-purple-500"
                    : "text-muted-foreground"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>
            )}
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <button
                onClick={() => setUser(null)}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-border hover:bg-accent transition-all"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white transition-all flex items-center gap-1 shadow-md shadow-purple-500/10"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 pt-2 pb-4 space-y-2 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 p-2 rounded-lg text-base font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-purple-500/10 text-purple-500"
                  : "text-muted-foreground hover:bg-accent"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          {user && (
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 p-2 rounded-lg text-base font-medium transition-colors ${
                isActive("/dashboard")
                  ? "bg-purple-500/10 text-purple-500"
                  : "text-muted-foreground hover:bg-accent"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
          )}

          <div className="pt-4 border-t border-border">
            {user ? (
              <button
                onClick={() => {
                  setUser(null);
                  setIsOpen(false);
                }}
                className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium border border-border hover:bg-accent transition-all"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white transition-all shadow-md"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
