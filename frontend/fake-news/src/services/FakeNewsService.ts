import { FakeNewsItem } from "../types/general";

const API_BASE_URL = "http://localhost:3000";

export const fetchFakeNews = async (): Promise<FakeNewsItem[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/fake-news`);
    if (!response.ok) {
      throw new Error("Failed to fetch fake title");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching fake title:", error);
    throw error;
  }
};
