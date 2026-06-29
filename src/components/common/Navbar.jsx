"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Next.js Image component import করা হলো
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  BookOpen,
  LogIn,
  LayoutDashboard,
  Home,
  Book,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { authClient } from "@/app/lib/auth-client";
// আপনার প্রজেক্টের সঠিক পাথ অনুযায়ী authClient ইমপোর্ট করুন

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const pathname = usePathname();
  const router = useRouter();

  // Better Auth সেশন ডাটা
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // বাইরে ক্লিক করলে ড্রপডাউন বন্ধ করার জন্য
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    {
      name: "Browse Ebooks",
      href: "/browse",
      icon: <Book className="w-4 h-4" />,
    },
  ];

  const isActive = (path) => pathname === path;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          setIsDropdownOpen(false);
          setIsOpen(false);
        },
      },
    });
  };

  const getDashboardHref = () => {
    if (user?.role === "admin") return "/admin/dashboard";
    if (user?.role === "author") return "/author/dashboard";
    return "/dashboard";
  };

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
          </div>

          {/* User Auth Section (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {isPending ? (
              <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
            ) : user ? (
              /* User Dropdown Menu */
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-full hover:bg-accent transition-all focus:outline-none"
                >
                  {user.image ? (
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-500/30">
                      <Image
                        src={user.image}
                        alt={user.name || "User"}
                        fill
                        sizes="32px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center font-semibold text-sm border border-purple-500/20">
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Card (আকর্ষণীয় Background Color সহ) */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl border border-purple-500/20 bg-linear-to-b from-background via-purple-950/10 to-background p-1.5 shadow-xl shadow-purple-500/5 backdrop-blur-xl animate-in fade-in-50 zoom-in-95 duration-100">
                    <div className="px-3 py-2 border-b border-border/60 mb-1">
                      <p className="text-sm font-semibold truncate bg-clip-text bg-linear-to-r from-foreground to-foreground/80">
                        {user.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {user.email}
                      </p>
                      {user.role && (
                        <span className="inline-block mt-1 text-[10px] uppercase font-bold bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/20">
                          {user.role}
                        </span>
                      )}
                    </div>

                    <Link
                      href="/profile"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-purple-400 hover:bg-purple-500/5 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </Link>

                    <Link
                      href={getDashboardHref()}
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-purple-400 hover:bg-purple-500/5 transition-colors"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg text-destructive hover:bg-destructive/10 transition-colors text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Login Button */
              <Link
                href="/signIn"
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

          {/* Mobile Auth/User Menu */}
          {!isPending && (
            <div className="pt-4 border-t border-border space-y-2">
              {user ? (
                <>
                  {/* Mobile User Profile Info */}
                  <div className="flex items-center gap-3 px-2 py-1 mb-2">
                    {user.image ? (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-purple-500/30">
                        <Image
                          src={user.image}
                          alt={user.name || "User"}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {user.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-lg text-base font-medium text-muted-foreground hover:bg-accent"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>

                  <Link
                    href={getDashboardHref()}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-lg text-base font-medium text-muted-foreground hover:bg-accent"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 p-2 rounded-lg text-base font-medium text-destructive hover:bg-destructive/10 transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/signIn"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white transition-all shadow-md"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
