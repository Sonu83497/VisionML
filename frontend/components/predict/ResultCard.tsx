"use client";

import { motion } from "framer-motion";
import {
  FaHouse,
  FaCircleCheck,
  FaChartLine,
  FaBolt,
} from "react-icons/fa6";

type Props = {
  price: number | null;
};

export default function ResultCard({ price }: Props) {
  if (price === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-10 overflow-hidden rounded-3xl bg-white shadow-2xl"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">
        <FaHouse className="mx-auto text-5xl" />

        <h2 className="mt-4 text-3xl font-bold">
          AI Prediction Report
        </h2>

        <p className="mt-2 text-blue-100">
          VisionML House Price Estimation
        </p>
      </div>

      {/* Body */}
      <div className="space-y-8 p-10">

        {/* Price */}
        <div className="text-center">
          <p className="text-gray-500">
            Estimated Market Value
          </p>

          <h1 className="mt-3 text-6xl font-extrabold text-green-600">
            ${price.toLocaleString()}
          </h1>

          <div className="mt-5 flex items-center justify-center gap-2 text-green-600">
            <FaCircleCheck />

            <span>
              Prediction Generated Successfully
            </span>
          </div>
        </div>

        <hr />

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-blue-50 p-6 text-center">
            <FaChartLine className="mx-auto text-3xl text-blue-600" />

            <h3 className="mt-3 text-xl font-bold">
              89.97%
            </h3>

            <p className="text-gray-500">
              Model Accuracy
            </p>
          </div>

          <div className="rounded-2xl bg-green-50 p-6 text-center">
            <FaBolt className="mx-auto text-3xl text-green-600" />

            <h3 className="mt-3 text-xl font-bold">
              &lt; 1 sec
            </h3>

            <p className="text-gray-500">
              Prediction Time
            </p>
          </div>

          <div className="rounded-2xl bg-purple-50 p-6 text-center">
            <FaHouse className="mx-auto text-3xl text-purple-600" />

            <h3 className="mt-3 text-xl font-bold">
              XGBoost
            </h3>

            <p className="text-gray-500">
              ML Model
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}