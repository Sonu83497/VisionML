"use client";

type HistoryItem = {
  time: string;
  price: number;
};

type Props = {
  history: HistoryItem[];
  onClear: () => void;
};

export default function PredictionHistory({
  history,
  onClear,
}: Props) {
  if (history.length === 0) {
    return (
      <div className="mt-10 rounded-3xl bg-white p-8 text-center shadow-2xl">
        <h2 className="text-2xl font-bold">
          📜 Prediction History
        </h2>

        <p className="mt-4 text-gray-500">
          No predictions yet. Make your first prediction to see the history here.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-3xl bg-white p-8 shadow-2xl">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          📜 Prediction History
        </h2>

        <button
          onClick={onClear}
          className="rounded-xl bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600"
        >
          🗑 Clear History
        </button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl border">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-6 py-4 text-left font-semibold text-gray-700">
                Time
              </th>

              <th className="px-6 py-4 text-right font-semibold text-gray-700">
                Predicted Price
              </th>

            </tr>

          </thead>

          <tbody>

            {history.map((item, index) => (

              <tr
                key={index}
                className="border-t transition hover:bg-blue-50"
              >

                <td className="px-6 py-4">
                  {item.time}
                </td>

                <td className="px-6 py-4 text-right font-bold text-green-600">
                  ${item.price.toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}