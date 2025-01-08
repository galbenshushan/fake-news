"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFakeNews = void 0;
const newsService_1 = require("../services/newsService");
const openAiService_1 = require("../services/openAiService");
const getFakeNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.query.category;
    try {
        const articles = yield (0, newsService_1.fetchNewsArticles)(category);
        const fakeNews = [];
        for (const article of articles) {
            const fakeTitle = yield (0, openAiService_1.generateFakeTitle)(article.title);
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
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ error: "Error generating fake news: " + error.message });
    }
});
exports.getFakeNews = getFakeNews;
