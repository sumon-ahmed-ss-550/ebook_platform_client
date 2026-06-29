"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  DollarSign,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Eye,
} from "lucide-react";

const initialUsers = [
  {
    id: "u1",
    name: "Ahmed Rony",
    email: "rony@fable.com",
    role: "Writer",
    status: "Active",
  },
  {
    id: "u2",
    name: "Sufia Rahman",
    email: "sufia@fable.com",
    role: "Reader",
    status: "Active",
  },
  {
    id: "u3",
    name: "Asif Zaman",
    email: "asif@fable.com",
    role: "Writer",
    status: "Pending",
  },
];

const initialEbooks = [
  {
    id: "b1",
    title: "The Cosmic Nexus",
    author: "Elena Vance",
    price: "$12.99",
    status: "Approved",
  },
  {
    id: "b2",
    title: "AI Horizons in 2026",
    author: "Zayan Malik",
    price: "$19.99",
    status: "Pending",
  },
];

export default function AdminPanelPage() {
  const [activeSection, setActiveSection] = useState("users");
  const [users, setUsers] = useState(initialUsers);
  const [ebooks, setEbooks] = useState(initialEbooks);

  const toggleUserStatus = (id) => {
    setUsers(
      users.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Suspended" : "Active" }
          : u,
      ),
    );
  };

  const handleApproveBook = (id, approve) => {
    setEbooks(
      ebooks.map((b) =>
        b.id === id ? { ...b, status: approve ? "Approved" : "Rejected" } : b,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Metric Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Total Members
                </p>
                <h3 className="text-2xl font-bold mt-1">1,240</h3>
              </div>
              <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Total Books
                </p>
                <h3 className="text-2xl font-bold mt-1">432</h3>
              </div>
              <div className="p-2.5 bg-teal-500/10 text-teal-400 rounded-lg border border-teal-500/20">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Total Revenue
                </p>
                <h3 className="text-2xl font-bold mt-1">$8,940.50</h3>
              </div>
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Pending Reviews
                </p>
                <h3 className="text-2xl font-bold mt-1">5 Books</h3>
              </div>
              <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20">
                <ShieldAlert className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex gap-2 border-b border-slate-800 pb-px mb-6">
          <button
            onClick={() => setActiveSection("users")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-all ${
              activeSection === "users"
                ? "border-teal-500 text-teal-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Manage Users
          </button>
          <button
            onClick={() => setActiveSection("ebooks")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-all ${
              activeSection === "ebooks"
                ? "border-teal-500 text-teal-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Ebook Approvals
          </button>
        </div>

        {/* Dynamic Table Layout */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          {activeSection === "users" ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950/60 border-b border-slate-800 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-800/50">
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-slate-950/30 transition-colors"
                    >
                      <td className="p-4 font-medium text-slate-200">
                        {user.name}
                      </td>
                      <td className="p-4 text-slate-400">{user.email}</td>
                      <td className="p-4 text-slate-300">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                            user.role === "Writer"
                              ? "bg-purple-500/5 border-purple-500/20 text-purple-400"
                              : "bg-blue-500/5 border-blue-500/20 text-blue-400"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
                            user.status === "Active"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-amber-500/10 text-amber-400"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => toggleUserStatus(user.id)}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-md border border-slate-800 hover:bg-slate-950 transition-colors ${
                            user.status === "Active"
                              ? "text-rose-400 hover:border-rose-500/30"
                              : "text-emerald-400 hover:border-emerald-500/30"
                          }`}
                        >
                          {user.status === "Active" ? "Suspend" : "Activate"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950/60 border-b border-slate-800 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    <th className="p-4">Ebook Title</th>
                    <th className="p-4">Author</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-800/50">
                  {ebooks.map((book) => (
                    <tr
                      key={book.id}
                      className="hover:bg-slate-950/30 transition-colors"
                    >
                      <td className="p-4 font-medium text-slate-200">
                        {book.title}
                      </td>
                      <td className="p-4 text-slate-400">{book.author}</td>
                      <td className="p-4 text-teal-400 font-semibold">
                        {book.price}
                      </td>
                      <td className="p-4">
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                            book.status === "Approved"
                              ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-400"
                              : book.status === "Pending"
                                ? "bg-amber-500/5 border-amber-500/20 text-amber-400"
                                : "bg-rose-500/5 border-rose-500/20 text-rose-400"
                          }`}
                        >
                          {book.status}
                        </span>
                      </td>
                      <td className="p-4 text-right flex justify-end gap-2">
                        {book.status === "Pending" && (
                          <>
                            <button
                              onClick={() => handleApproveBook(book.id, true)}
                              className="p-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md hover:bg-emerald-500/20 transition-colors"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleApproveBook(book.id, false)}
                              className="p-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-md hover:bg-rose-500/20 transition-colors"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </>
                        )}
                        <button className="p-1.5 bg-slate-950 text-slate-400 border border-slate-800 rounded-md hover:text-slate-200 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
