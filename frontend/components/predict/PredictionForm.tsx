"use client";

type FormDataType = {
  [key: string]: number | "";
};

type Props = {
  formData: FormDataType;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPredict: () => void;
};

const labels: Record<string, string> = {
  OverallQual: "🏠 Overall Quality",
  GarageCars: "🚗 Garage Capacity",
  FullBath: "🛁 Full Bathrooms",
  GrLivArea: "📐 Living Area (sq ft)",
  TotalBsmtSF: "🏡 Basement Area",
  "1stFlrSF": "🏠 First Floor Area",
  "2ndFlrSF": "🏠 Second Floor Area",
  Fireplaces: "🔥 Fireplaces",
  BsmtFinSF1: "📦 Finished Basement",
  HalfBath: "🚿 Half Bathrooms",
};

const placeholders: Record<string, string> = {
  OverallQual: "e.g. 7",
  GarageCars: "e.g. 2",
  FullBath: "e.g. 2",
  GrLivArea: "e.g. 1710",
  TotalBsmtSF: "e.g. 856",
  "1stFlrSF": "e.g. 856",
  "2ndFlrSF": "e.g. 854",
  Fireplaces: "e.g. 1",
  BsmtFinSF1: "e.g. 706",
  HalfBath: "e.g. 1",
};

export default function PredictionForm({
  formData,
  loading,
  onChange,
  onPredict,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-10 shadow-2xl">

      <h2 className="mb-2 text-3xl font-bold text-gray-900">
        Property Details
      </h2>

      <p className="mb-8 text-gray-500">
        Fill in the property details below to estimate the house price.
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>

            <label className="mb-2 block text-sm font-semibold text-gray-700">
              {labels[key]}
            </label>

            <input
              type="number"
              name={key}
              value={value}
              placeholder={placeholders[key]}
              onChange={onChange}
              className="w-full rounded-xl border border-gray-300 p-4 transition-all duration-200 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200"
            />

          </div>
        ))}

      </div>

      <button
        onClick={onPredict}
        disabled={loading}
        className="mt-10 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "⏳ Predicting..." : "🚀 Predict House Price"}
      </button>

    </div>
  );
}