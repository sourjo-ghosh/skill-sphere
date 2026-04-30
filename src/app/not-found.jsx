"use client";

import Link from "next/link";
import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 Illustration */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            404
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"></div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
          Page Not Found
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          Oops! The page you're looking for seems to have wandered off into the digital void.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto">
              <IoHomeOutline className="text-xl" />
              Back to Home
            </button>
          </Link>
          <Link href="/courses">
            <button className="flex items-center justify-center gap-2 border border-border text-text hover:bg-bg-secondary px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto">
              <IoSearchOutline className="text-xl" />
              Browse Courses
            </button>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary/30"></div>
          <div className="w-2 h-2 rounded-full bg-secondary/30"></div>
          <div className="w-2 h-2 rounded-full bg-accent/30"></div>
        </div>
      </div>
    </div>
  );
}
