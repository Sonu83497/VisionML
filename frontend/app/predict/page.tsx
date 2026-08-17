"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import PredictionForm from "@/components/predict/PredictionForm";
import ResultCard from "@/components/predict/ResultCard";
import PredictionHistory from "@/components/predict/PredictionHistory";
import api from "@/services/api";

type HistoryItem = {
  time: string;
  price: number;
};

type FormDataType = {
  OverallQual: number | "";
  GarageCars: number | "";
  FullBath: number | "";
  GrLivArea: number | "";
  TotalBsmtSF: number | "";
  "1stFlrSF": number | "";
  "2ndFlrSF": number | "";
  Fireplaces: number | "";
  BsmtFinSF1: number | "";
  HalfBath: number | "";
};

const emptyForm: FormDataType = {
  OverallQual: "",
  GarageCars: "",
  FullBath: "",
  GrLivArea: "",
  TotalBsmtSF: "",
  "1stFlrSF": "",
  "2ndFlrSF": "",
  Fireplaces: "",
  BsmtFinSF1: "",
  HalfBath: "",
};

export default function PredictPage() {
  const [formData, setFormData] = useState<FormDataType>(emptyForm);

  const [price, setPrice] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);

  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("prediction_history");

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value === "" ? "" : Number(value),
    }));
  };

  const predictPrice = async () => {
    const hasEmpty = Object.values(formData).some(
      (value) => value === ""
    );

    if (hasEmpty) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const payload = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [
          key,
          Number(value),
        ])
      );

      const response = await api.post("/predict/", payload);

      const predictedPrice = response.data.predicted_sale_price;

      setPrice(predictedPrice);

      const historyItem: HistoryItem = {
        time: new Date().toLocaleTimeString(),
        price: predictedPrice,
      };

      const updatedHistory = [historyItem, ...history];

      setHistory(updatedHistory);

      localStorage.setItem(
        "prediction_history",
        JSON.stringify(updatedHistory)
      );

      // Automatically clear form
      setFormData(emptyForm);

    } catch (error) {
      console.error(error);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    localStorage.removeItem("prediction_history");
    setHistory([]);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="mx-auto max-w-5xl px-6 py-16">

          {/* Heading */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-extrabold text-gray-900">
              🏠 House Price Prediction
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Enter your property details below and let{" "}
              <strong>VisionML</strong> estimate your property's market value
              using Machine Learning.
            </p>
          </div>

          {/* Prediction Form */}
          <PredictionForm
            formData={formData}
            loading={loading}
            onChange={handleChange}
            onPredict={predictPrice}
          />

          {/* Result */}
          <ResultCard price={price} />

          {/* History */}
          <PredictionHistory
            history={history}
            onClear={clearHistory}
          />

        </div>
      </main>
    </>
  );
}