import { Article } from "../types/general";
import dotenv from "dotenv";

dotenv.config();

export const fetchNewsArticles = async (
  category?: string
): Promise<Article[]> => {
  const urlParams = new URLSearchParams({
    q: "Apple",
    from: "2025-01-07",
    sortBy: "popularity",
    apiKey: process.env.NEWS_API_KEY || "",
  });

  if (category) {
    urlParams.append("category", category);
    urlParams.append("country", "us");
  }

  const url = `https://newsapi.org/v2/${
    category ? "everything" : "top-headlines"
  }?${urlParams}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data.articles.slice(0, 10);
  } catch (error) {
    console.error("Error fetching news articles:", error);
    throw new Error("Error fetching news articles");
  }
};
