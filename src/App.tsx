import React, { useEffect } from "react";
import { Gallery } from "./components/Gallery";
import { useCatStore } from "./store/useCatStore";

const App: React.FC = () => {
  const { fetchCatImages, setSubId } = useCatStore();

  useEffect(() => {
    const subId =
      localStorage.getItem("subId") ||
      `user-${Math.random().toString(36).substr(2, 9)}`;
    setSubId(subId);
    fetchCatImages(10);
  }, [fetchCatImages, setSubId]);

  const handleRefresh = () => {
    fetchCatImages(10);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Cat Voting App</h1>
        <button
          onClick={handleRefresh}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Refresh Images
        </button>
        <Gallery />
      </div>
    </div>
  );
};

export default App;
