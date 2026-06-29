"use client";

import React from "react";
import Link from "next/link";
import {
  FaBookOpen,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    discover: [
      { name: "Home", href: "/" },
      { name: "Browse Ebooks", href: "/browse" },
      { name: "Top Authors", href: "/authors" },
      { name: "New Releases", href: "/new-releases" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Copyright Policy", href: "/copyright" },
    ],
  };

  return (
    <footer className="w-full border-t border-border bg-background text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-2xl tracking-tight text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500"
            >
              <FaBookOpen className="w-7 h-7 text-purple-500" />
              <span>Fable</span>
            </Link>
            <p className="text-sm max-w-sm leading-relaxed">
              Fable is a modern SaaS platform designed for reader communities
              and and indie authors. Discover, purchase, and read original
              ebooks with absolute freedom.
            </p>
            {/* Social Icons using react-icons/fa */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent hover:text-purple-500 transition-colors"
                aria-label="Github"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent hover:text-purple-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent hover:text-purple-500 transition-colors"
                aria-label="Linkedin"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@fable.com"
                className="p-2 rounded-lg hover:bg-accent hover:text-purple-500 transition-colors"
                aria-label="Email"
              >
                <FaRegEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Discover Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Discover
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.discover.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-purple-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-purple-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-purple-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {currentYear} Fable Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <FaHeart className="w-3.5 h-3.5 text-pink-500" /> by MERN
            Developers
          </p>
        </div>
      </div>
    </footer>
  );
}
