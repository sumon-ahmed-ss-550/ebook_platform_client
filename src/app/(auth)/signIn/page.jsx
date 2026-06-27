"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardContent, Button } from "@heroui/react";
import { authClient } from "@/app/lib/auth-client";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    const form = e.target;

    const email = form.email.value.trim();
    const password = form.password.value;

    const { data, error: signInError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (signInError) {
      setErrorMessage(signInError.message || "Invalid email or password.");
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 text-white">
      <Card className="w-full max-w-md bg-slate-900 border border-slate-800 shadow-xl">
        <CardHeader className="flex flex-col gap-2 text-center pt-6">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome Back to Fable
          </h1>
          <p className="text-default-400 text-sm">
            Sign in to your account to continue
          </p>
        </CardHeader>

        <CardContent className="pb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="john@example.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-300">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 pr-16 text-slate-200 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="********"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-primary hover:text-primary-400 transition"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Error Message Display */}
            {errorMessage && (
              <p className="text-sm text-danger bg-danger-500/10 border border-danger-500/20 rounded-lg p-2 text-center">
                {errorMessage}
              </p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              color="primary"
              className="w-full font-semibold transition"
              isLoading={loading}
            >
              Sign In
            </Button>

            {/* Navigation Link to Registration */}
            <p className="text-center text-sm text-default-400 pt-2">
              Do not have an account?{" "}
              <Link
                href="/signUp"
                className="font-medium text-primary hover:underline transition"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
