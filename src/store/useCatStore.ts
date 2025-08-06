import { create } from "zustand";
import { getCatImages, createVote } from "../api/catApi";

type CatImage = {
  id: string;
  url: string;
  score?: number;
};

type CatStore = {
  catImages: CatImage[];
  subId: string;
  fetchCatImages: (limit: number) => Promise<void>;
  vote: (imageId: string, value: number) => Promise<void>;
  setSubId: (subId: string) => void;
};

export const useCatStore = create<CatStore>((set) => ({
  catImages: [],
  subId: localStorage.getItem("subId") || "",
  fetchCatImages: async (limit) => {
    const images = await getCatImages(limit);
    set({ catImages: images });
  },
  vote: async (imageId, value) => {
    const subId = localStorage.getItem("subId") || "";
    await createVote(imageId, value, subId);
    set((state) => ({
      catImages: state.catImages.map((cat) =>
        cat.id === imageId
          ? { ...cat, score: cat.score ? cat.score + value : value }
          : cat
      ),
    }));
  },
  setSubId: (subId) => {
    localStorage.setItem("subId", subId);
    set({ subId });
  },
}));
