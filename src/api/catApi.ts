import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const API_URL = "https://api.thecatapi.com/v1";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});

export const getCatImages = async (limit: number) => {
  const response = await api.get("/images/search", { params: { limit } });
  return response.data;
};

export const createVote = async (
  imageId: string,
  value: number,
  subId: string
) => {
  const response = await api.post("/votes", {
    image_id: imageId,
    value,
    sub_id: subId,
  });
  return response.data;
};

export const fetchUserVotes = async (subId: string) => {
  const response = await api.get("/votes", { params: { sub_id: subId } });
  return response.data;
};
