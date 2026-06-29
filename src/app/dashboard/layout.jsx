"use client";
import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({ children }) {
  // ডেভেলপমেন্ট স্টেজে ৩টি রোলের ইন্টারফেস সহজেই দেখার জন্য আমরা মেইন স্টেট এখানে রেখেছি
  const [role, setRole] = useState("Reader");

  // children এলিমেন্টে ডাইনামিক রোল পাস করার জন্য React Context বা Clone ব্যবহার করা যায়।
  // আমরা এখানে সহজে চাইল্ডকে রোল প্রোপ জোড় করে দিচ্ছি।
  const childrenWithRole = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { currentRole: role });
    }
    return child;
  });

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Left Sidebar */}
      <Sidebar currentRole={role} />

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader currentRole={role} setRole={setRole} />
        <main className="flex-1 p-8 overflow-y-auto bg-slate-950">
          {childrenWithRole}
        </main>
      </div>
    </div>
  );
}
