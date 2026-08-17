import {
  Trophy,
  Building2,
  ListChecks,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "89.97%",
    title: "Model Accuracy",
    color: "text-green-600",
  },
  {
    icon: Building2,
    value: "1460+",
    title: "Training Houses",
    color: "text-blue-600",
  },
  {
    icon: ListChecks,
    value: "10",
    title: "Input Features",
    color: "text-purple-600",
  },
  {
    icon: BrainCircuit,
    value: "XGBoost",
    title: "ML Model",
    color: "text-orange-600",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Trusted Machine Learning Performance
          </h2>

          <p className="mt-4 text-gray-600">
            VisionML delivers accurate house price predictions
            using an optimized XGBoost regression model.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex justify-center">
                  <Icon
                    className={`h-14 w-14 ${item.color}`}
                  />
                </div>

                <h3 className="text-4xl font-extrabold">
                  {item.value}
                </h3>

                <p className="mt-3 text-gray-500">
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}