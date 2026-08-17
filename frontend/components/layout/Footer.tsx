import Link from "next/link";
import {
  BrainCircuit,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* CTA */}

        
        {/* Main Footer */}

        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 p-3 shadow-lg">
                <BrainCircuit className="h-8 w-8 text-white" />
              </div>

              <div>
                <h2 className="text-3xl font-black">VisionML</h2>

                <p className="text-sm text-slate-400">
                  AI House Price Predictor
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-slate-400">
              VisionML combines Artificial Intelligence, Machine Learning
              and modern web technologies to estimate house prices
              instantly with high accuracy.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-6 text-xl font-bold">Navigation</h3>

            <div className="space-y-4">
              <Link
                href="/"
                className="block transition hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                href="/predict"
                className="block transition hover:text-blue-400"
              >
                Prediction
              </Link>

              <Link
                href="/about"
                className="block transition hover:text-blue-400"
              >
                About
              </Link>
            </div>
          </div>

          {/* Tech Stack */}

          <div>
            <h3 className="mb-6 text-xl font-bold">Tech Stack</h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "FastAPI",
                "Python",
                "XGBoost",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-bold">Connect</h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>Sonuprajapati83497@email.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>India</span>
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/Sonu83497/VisionML.git"
                  className="rounded-xl bg-white/5 p-3 transition hover:bg-blue-600"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/sonu-prajapati-a75306301/"
                  className="rounded-xl bg-white/5 p-3 transition hover:bg-blue-600"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-slate-500">
              © {year} VisionML. All rights reserved.
            </p>

            <p className="text-slate-500">
              Built with using Next.js • FastAPI • XGBoost
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}