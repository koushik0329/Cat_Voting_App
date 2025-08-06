import React from "react";
import { useCatStore } from "../store/useCatStore";

export const Gallery: React.FC = () => {
  const { catImages, vote } = useCatStore();

  const handleVote = async (imageId: string, value: number) => {
    await vote(imageId, value);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {catImages.map((cat) => (
        <div
          key={cat.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <img src={cat.url} alt="Cat" className="w-full h-48 object-cover" />
          <div className="p-4">
            <div className="flex justify-between">
              <button
                onClick={() => handleVote(cat.id, 1)}
                disabled={cat.score !== undefined}
                className="bg-green-500 text-white px-3 py-1 rounded disabled:bg-gray-400"
              >
                Up
              </button>
              <button
                onClick={() => handleVote(cat.id, -1)}
                disabled={cat.score !== undefined}
                className="bg-red-500 text-white px-3 py-1 rounded disabled:bg-gray-400"
              >
                Down
              </button>
            </div>
            {cat.score !== undefined && (
              <p className="text-center mt-2">Score: {cat.score}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
