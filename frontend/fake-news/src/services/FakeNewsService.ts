const API_BASE_URL = "http://localhost:3000";

export const fetchFakeNews = async (category: string) => {
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

    if (!response.body) {
      throw new Error("Response body is null");
    }

    return response.body;
  } catch (error) {
    console.error("Error fetching fake news:", error);
    throw error;
  }
};

export const getTotalNews = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/total-fake-news`);

    if (!response.ok) {
      throw new Error("Failed to fetch fake news amount");
    }
    
    return response;
  } catch (error) {
    console.error("Error fetching fake news amount:", error);
    throw error;
  }
};
