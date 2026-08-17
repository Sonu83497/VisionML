"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold leading-tight"
          >
            AI Powered
            <span className="text-blue-600">
              {" "}House Price Prediction
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="mt-8 text-xl text-gray-600"
          >
            Predict real estate prices using Machine Learning,
            FastAPI and XGBoost with high accuracy.
          </motion.p>

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:.8 }}
            className="mt-10 flex gap-5"
          >
            <Link
              href="/predict"
              className="rounded-xl bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700"
            >
              Start Prediction
            </Link>

            <a
              href="https://github.com/Sonu83497/VisionML.git"
              target="_blank"
              className="rounded-xl border px-8 py-4 hover:bg-gray-100"
            >
              GitHub
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}