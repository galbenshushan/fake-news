import { Request, Response } from "express";
import { fetchNewsArticles } from "../services/newsService";
import {
  generateFakeTitle,
  getArticleCategory,
} from "../services/openAiService";
import { FakeNews } from "../types/general";

export const getFakeNews = async (req: Request, res: Response) => {
  const category = req.body.category || "";

  try {
    const articles = await fetchNewsArticles(category);
    const fakeNews: FakeNews[] = [];

    for (const article of articles) {
      const fakeTitle = await generateFakeTitle(article.title);
      const articleCategory = await getArticleCategory(article.description);

      fakeNews.push({
        realTitle: article.title,
        fakeTitle,
        source: article.source.name,
        url: article.url,
        date: article.publishedAt,
        category: articleCategory,
        urlToImage: article.urlToImage,
        description: article.description,
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
