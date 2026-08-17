"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BrainCircuit,
  Home,
  BarChart3,
  Info,
  GitBranch,
} from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Predict",
    href: "/predict",
    icon: BarChart3,
  },
  {
    name: "About",
    href: "/about",
    icon: Info,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-2 shadow-lg">
            <BrainCircuit className="h-7 w-7 text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">
              VisionML
            </h1>

            <p className="-mt-1 text-xs text-slate-500">
              AI House Price Predictor
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <a
            href="https://github.com/Sonu83497/VisionML.git"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl border border-slate-300 p-3 transition hover:bg-slate-100 md:flex"
            aria-label="GitHub"
          >
            <GitBranch className="h-5 w-5" />
          </a>

          <Link
            href="/predict"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Predict Now
          </Link>

        </div>

      </div>
    </header>
  );
}