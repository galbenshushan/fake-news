import { Request, Response } from "express";
import { fetchNewsArticles } from "../services/newsService";
import { generateFakeTitle } from "../services/openAiService";
import { FakeNews } from "../types/general";

export const getFakeNews = async (req: Request, res: Response) => {
  const category = req.query.category;
  try {
    const articles = await fetchNewsArticles(category as string);
    const fakeNews: FakeNews[] = [];

    for (const article of articles) {
      const fakeTitle = await generateFakeTitle(article.title);
      fakeNews.push({
        realTitle: article.title,
        fakeTitle,
        source: article.source.name,
        url: article.url,
        date: article.publishedAt,
        category: "general",
        urlToImage: article.urlToImage,
      });
    }

    res.json(fakeNews);
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error generating fake news: " + error.message });
  }
};
