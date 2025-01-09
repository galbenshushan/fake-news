import { Article } from "../types/general";
import dotenv from "dotenv";
import { getOneWeekBeforeFormattedDate } from "../utils/Date";

dotenv.config();

export const fetchNewsArticles = async (
  category?: string
): Promise<Article[]> => {
  const formattedYesterday = getOneWeekBeforeFormattedDate();

  const urlParams = new URLSearchParams({
    from: formattedYesterday,
    sortBy: "popularity",
    apiKey: process.env.NEWS_API_KEY || "",
  });

  if (category) {
    urlParams.append("category", category);
  }

  const url = `https://newsapi.org/v2/top-headlines?${urlParams}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    const filteredArticles = data.articles
      .filter((article: Article) => !!article.urlToImage)
      .slice(0, 14);

    return filteredArticles;
  } catch (error) {
    console.error("Error fetching news articles:", error);
    throw new Error("Error fetching news articles");
  }
};
