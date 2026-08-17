import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import {
  BrainCircuit,
  Database,
  BarChart3,
  Cpu,
  ArrowRight,
} from "lucide-react";

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "FastAPI",
  "Python",
  "XGBoost",
  "Scikit-learn",
  "Pandas",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="mx-auto max-w-7xl px-6 py-16">

          {/* Hero */}
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600">
              <BrainCircuit className="h-10 w-10 text-white" />
            </div>

            <h1 className="mt-6 text-5xl font-extrabold">
              About VisionML
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              VisionML is an AI-powered House Price Prediction platform
              built using Machine Learning, FastAPI, Next.js and XGBoost.
              It predicts property prices instantly with a modern web interface.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 shadow">
              <BarChart3 className="mb-4 h-10 w-10 text-blue-600" />
              <h2 className="text-3xl font-bold">89.97%</h2>
              <p className="text-gray-500">Model Accuracy</p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <Database className="mb-4 h-10 w-10 text-green-600" />
              <h2 className="text-3xl font-bold">1460+</h2>
              <p className="text-gray-500">Training Houses</p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <Cpu className="mb-4 h-10 w-10 text-purple-600" />
              <h2 className="text-3xl font-bold">10</h2>
              <p className="text-gray-500">Input Features</p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <BrainCircuit className="mb-4 h-10 w-10 text-orange-600" />
              <h2 className="text-3xl font-bold">XGBoost</h2>
              <p className="text-gray-500">Regression Model</p>
            </div>

          </div>

          {/* Tech Stack */}
          <section className="mt-20 rounded-3xl bg-white p-10 shadow">

            <h2 className="text-3xl font-bold">
              Technology Stack
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">

              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-100 px-5 py-3 font-semibold text-blue-700"
                >
                  {tech}
                </span>
              ))}

            </div>

          </section>

          {/* Workflow */}
          <section className="mt-20">

            <h2 className="mb-10 text-center text-4xl font-bold">
              Prediction Workflow
            </h2>

            <div className="grid gap-8 md:grid-cols-3">

              <div className="rounded-3xl bg-white p-8 shadow">
                <h3 className="text-2xl font-bold">
                  1. Input Features
                </h3>

                <p className="mt-4 text-gray-600">
                  Enter house details such as quality,
                  area, garage, bathrooms and more.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow">
                <h3 className="text-2xl font-bold">
                  2. AI Processing
                </h3>

                <p className="mt-4 text-gray-600">
                  The XGBoost model processes the
                  property features using trained data.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow">
                <h3 className="text-2xl font-bold">
                  3. Price Prediction
                </h3>

                <p className="mt-4 text-gray-600">
                  Receive the estimated market value
                  within seconds.
                </p>
              </div>

            </div>

          </section>

          {/* CTA */}
          <section className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              Ready to Predict?
            </h2>

            <p className="mt-4 text-lg text-blue-100">
              Try VisionML and estimate your property's value instantly.
            </p>

            <Link
              href="/predict"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition hover:scale-105"
            >
              Predict Now
              <ArrowRight className="h-5 w-5" />
            </Link>

          </section>

        </div>
      </main>
    </>
  );
}