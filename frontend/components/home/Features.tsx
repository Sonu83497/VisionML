import { BrainCircuit, BarChart3, Zap } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Prediction",
    description:
      "Predict house prices using an optimized XGBoost machine learning model.",
  },
  {
    icon: BarChart3,
    title: "Accurate Results",
    description:
      "Built with feature engineering, cross-validation, and hyperparameter tuning.",
  },
  {
    icon: Zap,
    title: "Fast API",
    description:
      "Real-time predictions powered by a FastAPI backend.",
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Choose VisionML?
          </h2>

          <p className="mt-4 text-gray-600">
            A complete end-to-end Machine Learning application built with modern technologies.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border p-8 shadow-sm transition hover:shadow-lg"
              >
                <Icon className="mb-6 h-12 w-12 text-blue-600" />

                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}