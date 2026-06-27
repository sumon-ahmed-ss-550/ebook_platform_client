"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Label,
  Radio,
  RadioGroup,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { signUp } from "@/app/lib/auth-client";

export default function SignUpPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const image = form.image.value.trim();
    const role = form.role.value;

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    if (!specialCharRegex.test(password)) {
      return setError("Password must contain at least one special character.");
    }

    try {
      setLoading(true);
      setError("");

      const { data, error: signUpError } = await signUp.email({
        name: fullName,
        email,
        password,
        image,
        role,
      });
      console.log({ data, signUpError });

      if (signUpError) {
        setError(signUpError.message || "Failed to create account.");
      }

      if (data) {
        router.push("/signIn");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-8 text-white">
      <Card className="w-full max-w-md bg-slate-900 border border-slate-800">
        <CardHeader className="flex flex-col gap-2 text-center pt-6">
          <h1 className="text-3xl font-bold tracking-tight">Join Fable</h1>
          <p className="text-default-400 text-sm">
            Create your account to start sharing or reading ebooks
          </p>
        </CardHeader>

        <CardContent className="pb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="John Doe"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 pr-16 text-slate-200 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-primary hover:text-primary-400 transition"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <p className="mt-1 text-xs text-default-400">
                Minimum 6 characters and at least one special character (@, #,
                &, etc.)
              </p>
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Avatar Image URL
              </label>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/photo.jpg"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>

            {/* Role Selection */}
            <div className="flex flex-col gap-2">
              <Label className="text-sm font-medium text-slate-300">
                Select your role
              </Label>
              <RadioGroup
                defaultValue="reader"
                name="role"
                orientation="horizontal"
                required
                className="gap-4"
              >
                {/* Reader Option */}
                <Radio value="reader">
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator />
                    </Radio.Control>
                    <span className="text-slate-300 cursor-pointer text-sm font-medium">
                      Reader
                    </span>
                  </Radio.Content>
                </Radio>

                {/* Writer Option */}
                <Radio value="writer">
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator />
                    </Radio.Control>
                    <span className="text-slate-300 cursor-pointer text-sm font-medium">
                      Writer
                    </span>
                  </Radio.Content>
                </Radio>
              </RadioGroup>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-sm text-danger bg-danger-500/10 border border-danger-500/20 rounded-lg p-2 text-center">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              color="primary"
              className="w-full font-semibold transition"
              isLoading={loading}
            >
              Sign Up
            </Button>

            {/* Sign In Link */}
            <p className="text-center text-sm text-default-400 pt-2">
              Already have an account?{" "}
              <Link
                href="/signIn"
                className="font-medium text-primary hover:underline transition"
              >
                Sign In
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
