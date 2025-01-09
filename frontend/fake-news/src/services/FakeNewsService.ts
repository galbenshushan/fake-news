import { FakeNewsItem } from "../types/general";

const API_BASE_URL = "http://localhost:3000";

export const fetchFakeNews = async (
  category: string
): Promise<FakeNewsItem[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/fake-news`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch fake news");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching fake news:", error);
    throw error;
  }
};
